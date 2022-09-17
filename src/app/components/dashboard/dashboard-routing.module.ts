import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from '../categoria/categoria.component';
import { FichaClinicaComponent } from '../ficha-clinica/ficha-clinica.component';
import { PacienteComponent } from '../paciente/paciente.component';
import { ReservaComponent } from '../reserva/reserva.component';
import { SubCategoriaComponent } from '../sub-categoria/sub-categoria.component';
import { DashboardComponent } from './dashboard.component';
import { ReportesComponent } from '../reportes/reportes.component'

const routes: Routes = [
  {path:'',component:DashboardComponent, children:[
    { path: 'categoria', component: CategoriaComponent },

    { path: 'subCategoria', component: SubCategoriaComponent },
    { path: 'paciente', component: PacienteComponent },
    { path: 'fichaclinica', component: FichaClinicaComponent },
    { path: 'reserva', component:ReservaComponent },
    { path: 'reportes', component:ReportesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
