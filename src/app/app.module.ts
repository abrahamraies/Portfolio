import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProyectComponent } from './components/proyects/proyect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { AllcomponentsComponent } from './components/allcomponents/allcomponents.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    ResumeComponent,
    ProyectComponent,
    CertificadosComponent,
    AllcomponentsComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
