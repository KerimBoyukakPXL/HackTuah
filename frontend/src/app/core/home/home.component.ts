import { Component } from '@angular/core';
import { LanguageService } from "../../services/language.service";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Fund.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Health.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Refugee.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Child-protection.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Advocacy.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Child-care-child-friendly.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Flash-flood.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Clothing.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Bacteria.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Food.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Shelter.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Deployment.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Registration.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Civil-military-coordination.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Elderly.svg',
    'https://raw.githubusercontent.com/rodekruis/OCHA-Humanitarian-Icons/8c4b34bd02aae0bbba2677619a619be6c2c6ebb9/svg/Pregnant.svg'
  ];

  // Corresponding list of card titles
  titles: { [key: string]: string[] } = {
    NL: [
      'Financien', 'Gezondheid', 'Reizen en terugkeren', 'Kinderopvang en toezicht', 'Actua en media',
      'Donatie en support', 'Evacuatie bij natuurrampen', 'Hulp bij kledij', 'COVID-19', 'Voedselbank',
      'Verblijf en onderdak', 'Derdelanders', 'Voorlopige bescherming & registratie', 'Civiele Bescherming',
      'Bejaarde hulp', 'Zwangerschap'
    ],
    EN: [
      'Finance', 'Health', 'Travel and Return', 'Childcare and Supervision', 'Current Affairs and Media',
      'Donations and Support', 'Evacuation in Natural Disasters', 'Clothing Assistance', 'COVID-19',
      'Food Bank', 'Shelter and Accommodation', 'Third Country Nationals', 'Temporary Protection & Registration',
      'Civil Protection', 'Elderly Assistance', 'Pregnancy'
    ],
    RU: [
      'Фінанси', 'Здоров’я', 'Подорожі та повернення', 'Догляд за дітьми та нагляд', 'Актуальні події та ЗМІ',
      'Пожертвування та підтримка', 'Евакуація під час природних катастроф', 'Допомога в одязі', 'COVID-19',
      'Продовольчий банк', 'Проживання та притулок', 'Треті країни', 'Тимчасовий захист та реєстрація',
      'Цивільний захист', 'Допомога літнім людям', 'Вагітність'
    ],
    AR: [
      'المالية', 'الصحة', 'السفر والعودة', 'رعاية الأطفال والإشراف', 'الأحداث الجارية ووسائل الإعلام',
      'التبرعات والدعم', 'الإخلاء في الكوارث الطبيعية', 'مساعدة الملابس', 'COVID-19', 'البنك الغذائي',
      'المأوى والإقامة', 'المواطنين من دول ثالثة', 'الحماية المؤقتة والتسجيل', 'الحماية المدنية',
      'مساعدة كبار السن', 'الحمل'
    ]
  };

  // Variables for fullscreen content
  isFullScreen: boolean = false;


  // Other existing variables ...

  openFullScreen(index: number): void {
    this.isFullScreen = true;
  }

  closeFullScreen(): void {
    this.isFullScreen = false;
  }

  getRowColor(index: number): string {
    const rowIndex = Math.floor(index / 4);
    const colors = [
      '#D32F2F', // Rood (Rode Kruis kleur)
      '#F8D7DA', // Lichtrood (Background alert kleur)
      '#C62828', // Diep rood
      '#E57373', // Zacht rood
      '#FAE5E5', // Lichtroze (Huidkleurig, humanitaire associatie)
      '#FFF5F5'  // Off-white, bijna wit, neutraler
    ];
    return colors[rowIndex % colors.length];
  }

  currentLang: keyof typeof this.titles = 'NL';
  text: string = '';
  titlesList: string[] = this.titles[this.currentLang];

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage.subscribe((lang: keyof typeof this.titles) => {
      this.currentLang = lang;
      this.titlesList = this.titles[lang];
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(lang => {
      this.currentLang = lang;
      this.titlesList = this.titles[lang];
      this.updateText();
    });
  }

  updateText(): void {
    if (this.currentLang === 'EN') {
      this.text = 'Press an icon and I can help you further';
    } else if (this.currentLang === 'RU') {
      this.text = 'Нажмите на значок, и я могу вам помочь';
    } else if (this.currentLang === 'AR') {
      this.text = 'اضغط على أيقونة وسأتمكن من مساعدتك أكثر'
    } else {
      this.text = 'Druk op een icoontje en dan kan ik je verder helpen';
    }
  }
}
