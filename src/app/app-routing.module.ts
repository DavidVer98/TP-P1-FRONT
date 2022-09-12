import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { PacienteComponent } from './components/paciente/paciente.component';

const routes: Routes = [
  { path: 'categoria', component: CategoriaComponent },
  { path: 'paciente', component: PacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
