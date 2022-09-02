import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.models';
import { Listadatos } from '../models/datosCategoria.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private urlBase = 'https://equipoyosh.com/stock-nutrinatalia/';
  getAllCategoria(): Observable<Listadatos<Categoria>> {
    return this.http.get<Listadatos<Categoria>>(this.urlBase + 'categoria');
  }
  deleteOnceCategoria(id: number): any {
    console.log('id desde el servicio' + id);
    return this.http.delete(this.urlBase + 'categoria/' + id);
  }
}
