import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

//http
import { HttpClientModule } from '@angular/common/http';
import { CategoriaModalComponent } from './components/categoriaModal/categoriaModal.component';
import { FormsModule  } from '@angular/forms';

import { PacienteComponent } from './components/paciente/paciente.component';
import { PacienteModalComponent } from './components/paciente-modal/paciente-modal.component';

import { FichaClinicaComponent } from './components/ficha-clinica/ficha-clinica.component';
import { FichaClinicaModalComponent } from './components/ficha-clinica-modal/ficha-clinica-modal.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CategoriaComponent, CategoriaModalComponent, PacienteComponent, PacienteModalComponent, FichaClinicaComponent, FichaClinicaModalComponent],
  

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
