import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { FichaClinicaComponent } from './components/ficha-clinica/ficha-clinica.component';

const routes: Routes = [
  { path: 'categoria', component: CategoriaComponent },
  { path: 'fichaclinica', component: FichaClinicaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
