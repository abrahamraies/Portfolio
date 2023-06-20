import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fechaActual =  new Date();
  añoActual = this.fechaActual.getFullYear();
  añoNacimiento =  2000;

  edadActual = this.añoActual - this.añoNacimiento;


}
