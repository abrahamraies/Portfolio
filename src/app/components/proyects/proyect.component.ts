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
      titleEs: 'App de Noticias con IONIC',
      titleEn: 'News App with IONIC',
      image: 'assets/img/proyects/NoticiasPrincipal.png',
      altText: 'News App with IONIC',
      filterClass: 'filter-app',
      demoLink: 'https://marvelapp.com/prototype/2i6hebeg',
      repoLink: 'https://github.com/abrahamraies/App-de-noticias'
    },
    {
      titleEs: 'App de Peliculas con IONIC',
      titleEn: 'Movie App with IONIC',
      image: 'assets/img/proyects/PeliculasPrincipal.png',
      altText: 'Movie App with IONIC',
      filterClass: 'filter-app',
      demoLink: 'https://marvelapp.com/prototype/j8j4i3e',
      repoLink: 'https://github.com/abrahamraies/peliculasApp'
    },
    {
      titleEs: 'Alquiler de vehiculos (SpringBoot + Angular + MySql)',
      titleEn: 'Car rental (SpringBoot + Angular + MySql)',
      image: 'assets/img/proyects/rentalsVenado.png',
      altText: 'Car rental web site',
      filterClass: 'filter-web',
      demoLink: 'https://rentals-venado.web.app/',
      repoLink: 'https://github.com/abrahamraies/Proyecto_alquiler_vehiculos'
    },
    {
      titleEs: 'Web de Noticias con Angular',
      titleEn: 'News Web with Angular',
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
    }
  ];

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

}
