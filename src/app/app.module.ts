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

@NgModule({
  declarations: [AppComponent, NavbarComponent, CategoriaComponent, CategoriaModalComponent, SubCategoriaComponent, SubCategoriaModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
