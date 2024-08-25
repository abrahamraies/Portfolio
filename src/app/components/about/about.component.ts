import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  currentLanguage!: string;
  Idiom: string = 'Spanish';
  aboutMeIntro!: string;
  aboutMeDescription!: string;
  aboutMeDetails!: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
      this.setAboutMeText();
    });
  }

  setAboutMeText() {
    if (this.currentLanguage === 'es') {
      this.Idiom = 'English';
      this.aboutMeIntro = '¡Hola! Soy Abraham Raies, desarrollador de software con pasión por la tecnología y un enfoque en el crecimiento continuo. Me destaco por mi capacidad de adaptación, responsabilidad y compromiso con el trabajo en equipo. Valoro un entorno laboral positivo y colaborativo, lo cual impulsa mi motivación para enfrentar desafíos y aprovechar cada oportunidad para aprender y avanzar en mi carrera profesional. En mi tiempo libre, disfruto viajar, leer, y hacer ciclismo, actividades que complementan mi enfoque equilibrado y dinámico tanto en la vida personal como profesional.';

      this.aboutMeDescription = 'Actualmente estoy viviendo en Australia, con la visa work and holiday clase 462, esto me permite trabajar +38 horas por semana, sin restricciones. Aspiro a conseguir la resdencia permanente en un futuro.';

      this.aboutMeDetails = `Me esfuerzo constantemente por ampliar mis conocimientos en nuevas tecnologías y abordar desafíos con entusiasmo. Mi enfoque autodidacta me permite trabajar eficazmente en equipo, destacando por mi capacidad de comprender profundamente los problemas para resolverlos en su origen.
      <br><br>Personalmente, disfruto desarrollando proyectos freelance con herramientas avanzadas como Angular, .NET Core, SQL Server y MySQL, así como participando en desafíos algorítmicos para afinar mi lógica. Este compromiso refleja mi pasión por la innovación y mi determinación por mantenerme al día con las últimas tendencias tecnológicas.
      <br>Actualmente cuento con un <a href="https://firebasestorage.googleapis.com/v0/b/frontend-portfolio-b48a3.appspot.com/o/certificate_level8.pdf?alt=media&token=942e8bf1-bde0-45a4-9989-565438b09785" target="_blank"><b>nivel de ingles B2</b></a> Certificado IELTS: <a href="https://firebasestorage.googleapis.com/v0/b/frontend-portfolio-b48a3.appspot.com/o/AR63023500101-06-01-2024-ETRF.pdf?alt=media&token=fc8f05c5-5f98-4ef0-a0fb-0c548ef09fae" target="_blank"><b>IELTS</b></a>.
      <br><br>Gracias por visitar mi portafolio y conocer un poco más sobre mí.`;

    } else {
      this.Idiom = 'Spanish';
      this.aboutMeIntro = `Hi! I am Abraham Raies, a software developer with a passion for technology and a focus on continuous growth. I stand out for my adaptability, responsibility and commitment to teamwork. I value a positive and collaborative work environment, which drives my motivation to face challenges and take advantage of every opportunity to learn and advance in my professional career. In my free time, I enjoy traveling, reading, and cycling, activities that complement my balanced and dynamic approach to both personal and professional life.`;

      this.aboutMeDescription = `I am currently living in Australia, on a work and holiday visa class 462, this allows me to work +38 hours per week, without restrictions. I aspire to get permanent residency in the future.`;

      this.aboutMeDetails = `I am committed to continuously expanding my knowledge of new technologies and tackling challenges with enthusiasm. My self-taught approach enables me to work effectively in a team, where I stand out for my ability to deeply understand problems and address them at their root.
      <br><br>Personally, I enjoy developing freelance projects using advanced tools such as Angular, .NET Core, SQL Server, and MySQL, as well as participating in algorithmic challenges to enhance my logical thinking. This dedication reflects my passion for innovation and my determination to stay updated with the latest technological trends.
      <br>Currently, I hold a <a href="https://firebasestorage.googleapis.com/v0/b/frontend-portfolio-b48a3.appspot.com/o/certificate_level8.pdf?alt=media&token=942e8bf1-bde0-45a4-9989-565438b09785" target="_blank"><b>English level B2</b></a> certified by IELTS: <a href="https://firebasestorage.googleapis.com/v0/b/frontend-portfolio-b48a3.appspot.com/o/AR63023500101-06-01-2024-ETRF.pdf?alt=media&token=fc8f05c5-5f98-4ef0-a0fb-0c548ef09fae" target="_blank"><b>IELTS</b></a>.
      <br><br>Thank you for visiting my portfolio and learning a little more about me.`;
    }
  }

  changeLanguage() {
    if (this.currentLanguage !== 'en') {
      this.languageService.setLanguage('en');
    } else {
      this.languageService.setLanguage('es');
    }
  }

}
