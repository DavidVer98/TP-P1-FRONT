import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.models';
import { FichaClinicaModel } from '../models/ficha-clinica.models';
import { Listadatos } from '../models/datosCategoria.models';
import { ListadatosG } from '../models/datosGenericos.models';
import { Observable } from 'rxjs';
import { PersonaModel } from '../models/persona.models';

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
  deleteOncePersona(id: number): any {
    console.log('id desde el servicio' + id);
    return this.http.delete(this.urlBase + 'persona/' + id);
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
  editarPaciente(id:number,nombre: string, apellido: string, email: string, telefono: string, ruc: string, cedula: string, tipoPersona: string, fechaNacimiento: string) {

    let update={
      "idPersona": id,
      "nombre": nombre,
      "apellido": apellido,
      "email": email,
      "telefono": telefono,
      "ruc": ruc,
      "cedula": cedula,
      "tipoPersona": tipoPersona,
      "fechaNacimiento": `${fechaNacimiento} 00:00:00`,
      "usuarioLogin": null,
      "idLocalDefecto": null,
      "flagVendedor": null,
      "flagTaxfree": null,
      "flagExcepcionChequeoVenta": null,
      "observacion": null,
      "direccion": null,
      "idCiudad": null,
      "tipoCliente": "MINORISTA",
      "fechaHoraAprobContrato": null,
      "soloUsuariosDelSistema": null,
      "soloPersonasTaxfree": null,
      "nombreCompleto": `${nombre} ${apellido}`,
      "limiteCredito": null,
      "soloProximosCumpleanhos": null,
      "todosLosCampos": null,
      "incluirLimiteDeCredito": null,
      "deuda": null,
      "saldo": null,
      "creditos": null
    }
    console.log('aca estoy');
    console.log(update);
    return this.http.put<any>(this.urlBase + 'persona',update );
  }



  editarCategoria(idCategoria: number, descripcion: object) {
    console.log("Editar", { idCategoria, descripcion })
    return this.http.put<any>(this.urlBase + 'categoria', { 'idCategoria': idCategoria, 'descripcion': descripcion });
  }
  //ficha Clinica
  getAllfichaClinica(): Observable<Listadatos<FichaClinicaModel>> {
    return this.http.get<Listadatos<FichaClinicaModel>>(this.urlBase + 'fichaClinica');
  }
  deleteOncefichaClinica(id: number): any {
    console.log('id desde el servicio' + id);
    return this.http.delete(this.urlBase + 'fichaClinica/' + id);
  }

  createfichaClinica(motivoConsulta: string, diagnostico:string, observacion:string, idEmpleado:object, idCliente:object){
    return this.http.post<any>(this.urlBase + 'fichaClinica/' , {'motivoConsulta':motivoConsulta, 'diagnostico':diagnostico, 'observacion': observacion, 'idEmpleado':idEmpleado, 'idCliente':idCliente});
  }
  editarfichaClinica(idFichaClinica:number, motivoConsulta: string, diagnostico:string, observacion:string){
    console.log("Editar", {idFichaClinica, motivoConsulta, diagnostico, observacion})
    return this.http.put<any>(this.urlBase + 'fichaClinica' , {'idFichaClinica':idFichaClinica, 'motivoConsulta':motivoConsulta, 'diagnostico':diagnostico, 'observacion':observacion});
  }


}
