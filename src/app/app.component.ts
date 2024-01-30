import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentLanguage!: string;
  title = 'Portfolio';
  elem1 = false;
  elem2 = false;
  elem3 = false;
  elem4 = false;
  elem5 = false;
  elem6 = false;

  constructor(private languageService: LanguageService){}

  selected(text:string): void{
    if(text == 'home'){
      this.elem1 = true;
      this.elem2 = false;
      this.elem3 = false;
      this.elem4 = false;
      this.elem5 = false;
      this.elem6 = false;
    }else if (text == 'about'){
      this.elem1 = false;
      this.elem2 = true;
      this.elem3 = false;
      this.elem4 = false;
      this.elem5 = false;
      this.elem6 = false;
    }else if (text == 'skills'){
      this.elem1 = false;
      this.elem2 = false;
      this.elem3 = true;
      this.elem4 = false;
      this.elem5 = false;
      this.elem6 = false;
    }else if (text == 'resume'){
      this.elem1 = false;
      this.elem2 = false;
      this.elem3 = false;
      this.elem4 = true;
      this.elem5 = false;
      this.elem6 = false;
    }else if (text == 'proyect'){
      this.elem1 = false;
      this.elem2 = false;
      this.elem3 = false;
      this.elem4 = false;
      this.elem5 = true;
      this.elem6 = false;
    }else if (text == 'contact'){
      this.elem1 = false;
      this.elem2 = false;
      this.elem3 = false;
      this.elem4 = false;
      this.elem5 = false;
      this.elem6 = true;
    }
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }
}
