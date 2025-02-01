import { Component } from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    'Fund.svg',
    'Health.svg',
    'Refugee.svg',
    'Child-protection.svg',
    'Advocacy.svg',
    'Child-care-child-friendly.svg',
    'Flash-flood.svg',
    'Clothing.svg',
    'Bacteria.svg',
    'Food.svg',
    'Shelter.svg',
    'Deployment.svg',
    'Registration.svg',
    'Civil-military-coordination.svg',
    'Elderly.svg',
    'Pregnant.svg'


    // Add more image filenames as needed
  ];

  // Corresponding list of card titles
  titles = [
    'Financien',
    'Gezondheid',
    'Reizen en terugkeren',
    'Kinderopvang en toezicht',
    'Actua en media',
    'Donatie en support',
    'Evacuatie bij natuurrampen',
    'Hulp bij kledij',
    'COVID-19',
    'Voedselbank',
    'Verblijf en onderdak',
    'Derdelanders',
    'Voorlopige bescherming & registratie',
    'Civiele Bescherming',
    'Bejaarde hulp',
    'Zwangerschap'
  ];

  currentLang: string = 'NL';
  text: string = '';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(lang => {
      this.currentLang = lang;
      this.updateText();
    });
  }

  updateText(): void {
    if (this.currentLang === 'EN') {
      this.text = 'Press an icon and I can help you further';
    } else if (this.currentLang === 'RU') {
      this.text = 'Нажмите на значок, и я могу вам помочь';
    } else {
      this.text = 'Druk op een icoontje en dan kan ik je verder helpen';
    }
  }

}
