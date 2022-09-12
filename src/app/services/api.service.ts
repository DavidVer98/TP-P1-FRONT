import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.models';
import { Listadatos } from '../models/datosCategoria.models';
import { ListadatosG } from '../models/datosGenericos.models';
import { Observable } from 'rxjs';
import { PersonaModel } from '../models/persona.models.js';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private urlBase = 'https://equipoyosh.com/stock-nutrinatalia/';
  getAllCategoria(): Observable<Listadatos<Categoria>> {
    return this.http.get<Listadatos<Categoria>>(this.urlBase + 'categoria');
  }
  getAllPaciente(): Observable<ListadatosG<PersonaModel >> {
    return this.http.get<Listadatos<PersonaModel >>(this.urlBase + 'persona');
  }
  deleteOnceCategoria(id: number): any {
    console.log('id desde el servicio' + id);
    return this.http.delete(this.urlBase + 'categoria/' + id);
  }
  createCategoria(descripcion: string) {
    return this.http.post<any>(this.urlBase + 'categoria/', { 'descripcion': descripcion });
  }
  createPaciente(nombre: string, apellido: string, email: string, telefono: string, ruc: string, cedula: string, tipoPersona: string, fechaNacimiento: string) {

    return this.http.post<any>(this.urlBase + 'persona', {
      "nombre": nombre,
      "apellido": apellido,
      "email": email,
      "telefono": telefono,
      "ruc": ruc,
      "cedula": cedula,
      "tipoPersona": tipoPersona,
      "fechaNacimiento": fechaNacimiento
    });
  }
  editarCategoria(idCategoria: number, descripcion: object) {
    console.log("Editar", { idCategoria, descripcion })
    return this.http.put<any>(this.urlBase + 'categoria', { 'idCategoria': idCategoria, 'descripcion': descripcion });
  }
}
