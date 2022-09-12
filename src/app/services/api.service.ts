import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.models';
import { Listadatos } from '../models/datosCategoria.models';
import { Observable } from 'rxjs';
import { ListadatosSub } from '../models/datosSubCategoria.models';
import { SubCategoria } from '../models/subCategoria.models';

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
  createCategoria(descripcion: string){
    return this.http.post<any>(this.urlBase + 'categoria/' , {'descripcion':descripcion});
  }
  editarCategoria(idCategoria:number, descripcion: object){
    console.log("Editar", {idCategoria,descripcion })
    return this.http.put<any>(this.urlBase + 'categoria' , {'idCategoria':idCategoria, 'descripcion':descripcion});
  }

//------------------------------------------------------ Subcategoria----------------------------------------------------------------------------------
  getAllSubCategoria():Observable<ListadatosSub<SubCategoria>>{
    return this.http.get<ListadatosSub<SubCategoria>>(this.urlBase + 'tipoProducto');
  }
  deleteOnceSubCategoria(id:number): any {
    console.log('se elimina la subcategoria con id' + id);
    return this.http.delete(this.urlBase + 'tipoProducto/' + id);
  }
  createSubCategoria(descripcion: string, idCategoria:Categoria){
    return this.http.post<any>(this.urlBase + 'tipoProducto/' , {'descripcion':descripcion, 'idCategoria':idCategoria});
  }
  editarSubCategoria(idSubCategoria:number, descripcion: object,idCategoria:Categoria){
    console.log("Editar sub categoria", {idSubCategoria,descripcion })
    console.log(idCategoria,' ',descripcion,' ',idSubCategoria,' hola que tal test esto pio anda 123')
    return this.http.put<any>(this.urlBase + 'tipoProducto' , {'idTipoProducto':idSubCategoria,'descripcion':descripcion,'flagVisible':'S', 'idCategoria':idCategoria ,'posicion':1});
  }

}
