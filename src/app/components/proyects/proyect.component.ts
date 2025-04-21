import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

interface Project {
  titleEs: string;
  titleEn: string;
  image: string;
  altText: string;
  filterClass: string;
  demoLink: string;
  repoLink: string;
}

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  currentLanguage!: string;

  projects: Project[] = [
    {
      titleEs: 'App de manejo de stock en tiempo real (.NET + Angular + MySql)',
      titleEn: 'Real-Time Stock Management App (.NET + Angular + MySql)',
      image: 'assets/img/proyects/Principal.png',
      altText: 'StockManager',
      filterClass: 'filter-app',
      demoLink: 'https://marvelapp.com/prototype/1b6aca74/screen/95445734',
      repoLink: 'https://github.com/abrahamraies'
    },
    {
      titleEs: 'Alquiler de vehiculos (SpringBoot + Angular + MySql)',
      titleEn: 'Rental Cars <br>(SpringBoot + Angular + MySql)',
      image: 'assets/img/proyects/rentalsVenado.png',
      altText: 'Car rental web site',
      filterClass: 'filter-app',
      demoLink: 'https://rentals-venado.web.app/',
      repoLink: 'https://github.com/abrahamraies/Proyecto_alquiler_vehiculos'
    },
    {
      titleEs: 'Web de Noticias con Angular',
      titleEn: 'News Web (Angular)',
      image: 'assets/img/proyects/Imagen para portfolio.png',
      altText: 'News Web with Angular',
      filterClass: 'filter-web',
      demoLink: 'https://drive.google.com/drive/folders/1Mqw7XWESNQhPS2zuWGrOewiWdKxyUUXn?usp=sharing',
      repoLink: 'https://github.com/abrahamraies/DailyNews'
    },
    {
      titleEs: 'Lista de tareas (.NET + Angular + MySql)',
      titleEn: 'Task List (.NET + Angular + MySql)',
      image: 'assets/img/proyects/TasksLists.png',
      altText: 'Task List',
      filterClass: 'filter-web',
      demoLink: 'https://marvelapp.com/prototype/fd51hi6/screen/95440488',
      repoLink: 'https://github.com/abrahamraies/task-list'
    },
    {
      titleEs: 'Maquina de casino para aprender (Angular)',
      titleEn: 'Slot Machine for learning (Angular)',
      image: 'assets/img/proyects/FirstCapture.png',
      altText: 'SlotMachine',
      filterClass: 'filter-web',
      demoLink: 'https://marvelapp.com/prototype/7gcci77/screen/95442823',
      repoLink: 'https://github.com/abrahamraies/slot-machine-app'
    },
    {
      titleEs: 'Como crear un proyecto paso a paso (Angular)',
      titleEn: 'Stepper of proyects creation (Angular)',
      image: 'assets/img/proyects/1er picture.png',
      altText: 'Stepper',
      filterClass: 'filter-web',
      demoLink: 'https://abrahamraies.github.io/Stepper/',
      repoLink: 'https://github.com/abrahamraies/Stepper'
    },
    {
      titleEs: 'App de Noticias (IONIC)',
      titleEn: 'News App (IONIC)',
      image: 'assets/img/proyects/NoticiasPrincipal.png',
      altText: 'News App with IONIC',
      filterClass: 'filter-app',
      demoLink: 'https://marvelapp.com/prototype/2i6hebeg',
      repoLink: 'https://github.com/abrahamraies/App-de-noticias'
    },
    {
      titleEs: 'App de Peliculas (IONIC)',
      titleEn: 'Movie App (IONIC)',
      image: 'assets/img/proyects/PeliculasPrincipal.png',
      altText: 'Movie App with IONIC',
      filterClass: 'filter-app',
      demoLink: 'https://marvelapp.com/prototype/j8j4i3e',
      repoLink: 'https://github.com/abrahamraies/peliculasApp'
    },
    {
      titleEs: 'App de Recetas (.NET 9 + React 19 + Tailwind v4)',
      titleEn: 'Recipes App<br>(.NET 9 + React 19 + Tailwind v4)',
      image: 'assets/img/proyects/recipeApp.png',
      altText: 'Recipes App',
      filterClass: 'filter-app',
      demoLink: 'https://recipes-app01.netlify.app/',
      repoLink: 'https://github.com/abrahamraies'
    },
    {
      titleEs: 'Guía de Actividades Físicas (.NET 8 + React 18)',
      titleEn: 'Fitness Activity Guide<br>(.NET 8 + React 18)',
      image: 'assets/img/proyects/gymFitnessGuide.png',
      altText: 'Fitness Guide App',
      filterClass: 'filter-app',
      demoLink: 'https://gymfitnessguide.alwaysdata.net/app',
      repoLink: 'https://github.com/abrahamraies/GymFitnessFrontEnd'
    }
  ];

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

}
