import { Component } from '@angular/core';

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






    // Add more titles as needed
  ];

}
