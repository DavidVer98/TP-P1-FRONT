import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CommonModule } from '@angular/common';

//http
import { HttpClientModule } from '@angular/common/http';
import { CategoriaModalComponent } from './components/categoriaModal/categoriaModal.component';
import { FormsModule  } from '@angular/forms';
import { SubCategoriaComponent } from './components/sub-categoria/sub-categoria.component';
import { SubCategoriaModalComponent } from './components/sub-categoria-modal/sub-categoria-modal.component';

import { PacienteComponent } from './components/paciente/paciente.component';
import { PacienteModalComponent } from './components/paciente-modal/paciente-modal.component';

import { FichaClinicaComponent } from './components/ficha-clinica/ficha-clinica.component';
import { FichaClinicaModalComponent } from './components/ficha-clinica-modal/ficha-clinica-modal.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ReportesComponent } from './components/reportes/reportes.component';

@NgModule({



  declarations: [AppComponent, NavbarComponent, CategoriaComponent, CategoriaModalComponent, SubCategoriaComponent, SubCategoriaModalComponent,PacienteComponent, PacienteModalComponent, FichaClinicaComponent, FichaClinicaModalComponent, LoginComponent, DashboardComponent, ReservaComponent, ReportesComponent],
  


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
