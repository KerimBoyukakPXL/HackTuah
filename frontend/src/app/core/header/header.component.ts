import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedLang: string = 'NL';
  selectedFlag: string = 'https://flagcdn.com/w40/nl.png';
  dropdownOpen: boolean = false;

  languages = [
    { code: 'NL', flag: 'https://flagcdn.com/w40/nl.png' },
    { code: 'EN', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'RU', flag: 'https://flagcdn.com/w40/ua.png' }
  ];
  constructor(private languageService: LanguageService) {}


  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(code: string, flag: string): void {
    this.selectedLang = code;
    this.selectedFlag = flag;
    this.languageService.setLanguage(code);  // Stel de taal in via de service
    this.dropdownOpen = false;
    console.log("Selected language:", code);
  }
}
