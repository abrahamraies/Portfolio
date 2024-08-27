import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AllcomponentsComponent } from './components/allcomponents/allcomponents.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { UdemyCertificatesComponent } from './components/certificados/Udemy/udemy-certificates/udemy-certificates.component';
import { OtherCertificatesComponent } from './components/certificados/Others/other-certificates/other-certificates.component';
import { GoogleCertificatesComponent } from './components/certificados/Google/google-certificates/google-certificates.component';

const routes: Routes = [
  {path: 'certificados', component: CertificadosComponent},
  {path: 'certificates', component: CertificadosComponent},
  {path: 'certificates/udemy', component: UdemyCertificatesComponent},
  {path: 'certificates/others', component: OtherCertificatesComponent},
  {path: 'certificates/google', component: GoogleCertificatesComponent},
  {path: 'about', component: AboutComponent},
  {path: '', pathMatch: 'full', component: AllcomponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
