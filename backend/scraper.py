import requests
from bs4 import BeautifulSoup
import json
import time

# 🔥 Startpagina
BASE_URL = "https://www.rodekruis.nl/"

# Bestandsnaam voor output
JSON_FILE = "clean-data.json"

# Om dubbele pagina’s te vermijden
visited_urls = set()

def get_all_internal_links(start_url):
    """
    Crawlt de startpagina en vindt alle interne links van rodekruis.nl
    """
    links_to_scrape = set()
    try:
        response = requests.get(start_url, timeout=10)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"❌ Fout bij ophalen van {start_url}: {e}")
        return links_to_scrape

    soup = BeautifulSoup(response.text, "html.parser")

    # Zoek ALLE interne links (subpagina’s)
    for link in soup.find_all("a", href=True):
        href = link["href"]
        if href.startswith("/") or href.startswith(BASE_URL):
            full_url = href if href.startswith(BASE_URL) else BASE_URL + href
            links_to_scrape.add(full_url)

    return links_to_scrape

def scrape_page(url):
    """
    Scraped een individuele pagina en haalt headers + paragrafen op.
    """
    if url in visited_urls:
        return None  # Skip als we de pagina al hebben

    print(f"🔎 Scraping: {url} ...")
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"❌ Fout bij ophalen van {url}: {e}")
        return None

    soup = BeautifulSoup(response.text, "html.parser")

    headers = [h.get_text(strip=True) for h in soup.find_all(["h1", "h2", "h3"])]
    paragraphs = [p.get_text(strip=True) for p in soup.find_all("p")]

    visited_urls.add(url)

    return {"url": url, "headers": headers, "paragraphs": paragraphs}

def scrape_all_rode_kruis():
    """
    Crawlt de hele Rode Kruis site en haalt content van ALLE pagina's op.
    """
    all_data = []

    # Stap 1: Haal alle interne links op
    all_links = get_all_internal_links(BASE_URL)

    # Stap 2: Loop door alle pagina’s en scrap ze
    for link in all_links:
        page_data = scrape_page(link)
        if page_data:
            all_data.append(page_data)
        time.sleep(1)  # Wacht 1 sec om de server niet te overbelasten

    # Opslaan als JSON
    with open(JSON_FILE, "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=4)

    print(f"✅ Gegevens opgeslagen in {JSON_FILE}")

# Run de scraper
scrape_all_rode_kruis()
