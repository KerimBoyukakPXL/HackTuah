import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('NL');
  currentLanguage = this.languageSubject.asObservable();

  constructor() { }

  setLanguage(language: string): void {
    this.languageSubject.next(language);
  }
}
