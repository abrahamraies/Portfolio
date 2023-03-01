import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcomponentsComponent } from './components/allcomponents/allcomponents.component';
import { CertificadosComponent } from './components/certificados/certificados.component';

const routes: Routes = [
  {path: 'certificados', component: CertificadosComponent},
  { path: '**', redirectTo: '', pathMatch: 'full', component: AllcomponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
