import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { SubCategoriaComponent } from './components/sub-categoria/sub-categoria.component';

import { PacienteComponent } from './components/paciente/paciente.component';
import { FichaClinicaComponent } from './components/ficha-clinica/ficha-clinica.component';

const routes: Routes = [
  { path: 'categoria', component: CategoriaComponent },

  { path: 'subCategoria', component: SubCategoriaComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'fichaclinica', component: FichaClinicaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
