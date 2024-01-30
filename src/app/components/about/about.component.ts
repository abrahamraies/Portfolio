import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  currentLanguage!: string;
  Idiom: string = 'English';

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }
  fechaActual =  new Date();
  añoActual = this.fechaActual.getFullYear();
  añoNacimiento =  2000;

  edadActual = this.añoActual - this.añoNacimiento;

  changeLanguage() {
    if(this.currentLanguage != 'en'){
      this.Idiom = 'Spanish';
      this.languageService.setLanguage('en');
    }else{
      this.Idiom = 'English';
      this.languageService.setLanguage('es');
    }
  }

}
