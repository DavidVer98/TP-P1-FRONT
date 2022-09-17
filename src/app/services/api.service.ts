import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.models';
import { FichaClinicaModel } from '../models/ficha-clinica.models';
import { Listadatos } from '../models/datosCategoria.models';
import { ListadatosG } from '../models/datosGenericos.models';
import { Observable } from 'rxjs';
import { PersonaModel } from '../models/persona.models';
import { ListadatosSub } from '../models/datosSubCategoria.models';
import { SubCategoria } from '../models/subCategoria.models';

import { HttpHeaders } from '@angular/common/http';
import { Persona } from '../models/user.models';
import { Reserva } from '../models/reserva.models';
import { Servicios } from '../models/servicios.models';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private urlBase = 'https://equipoyosh.com/stock-nutrinatalia/';
  getAllCategoria(): Observable<Listadatos<Categoria>> {
    return this.http.get<Listadatos<Categoria>>(this.urlBase + 'categoria');
  }
  getAllPaciente(): Observable<ListadatosG<PersonaModel>> {
    return this.http.get<Listadatos<PersonaModel>>(this.urlBase + 'persona');
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
      "fechaNacimiento": `${fechaNacimiento} 00:00:00`
    });
  }
  editarPaciente(id: number, nombre: string, apellido: string, email: string, telefono: string, ruc: string, cedula: string, tipoPersona: string, fechaNacimiento: string) {

    let update = {
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
    return this.http.put<any>(this.urlBase + 'persona', update);
  }


  //------------------------------------------------------ Subcategoria----------------------------------------------------------------------------------
  getAllSubCategoria(): Observable<ListadatosSub<SubCategoria>> {
    return this.http.get<ListadatosSub<SubCategoria>>(this.urlBase + 'tipoProducto');
  }
  deleteOnceSubCategoria(id: number): any {
    console.log('se elimina la subcategoria con id' + id);
    return this.http.delete(this.urlBase + 'tipoProducto/' + id);
  }
  createSubCategoria(descripcion: string, idCategoria: Categoria) {
    return this.http.post<any>(this.urlBase + 'tipoProducto/', { 'descripcion': descripcion, 'idCategoria': idCategoria });
  }
  editarSubCategoria(idSubCategoria: number, descripcion: object, idCategoria: Categoria) {
    console.log("Editar sub categoria", { idSubCategoria, descripcion })
    console.log(idCategoria, ' ', descripcion, ' ', idSubCategoria, ' hola que tal test esto pio anda 123')
    return this.http.put<any>(this.urlBase + 'tipoProducto', { 'idTipoProducto': idSubCategoria, 'descripcion': descripcion, 'flagVisible': 'S', 'idCategoria': idCategoria, 'posicion': 1 });
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
  createfichaClinica(motivoConsulta: string, diagnostico: string, observacion: string, idTipoProducto: number, idEmpleado: number, idCliente: number) {
    let options = {
      headers: new HttpHeaders({ "Access-Control-Allow-Headers": 'Content-Type', 'Content-Type': 'application/json', 'usuario': 'usuario1' })
    }
    let pistola = { 'motivoConsulta': motivoConsulta, 'diagnostico': diagnostico, 'observacion': observacion, 'idTipoProducto': { 'idTipoProducto': idTipoProducto }, 'idEmpleado': { 'idPersona': idEmpleado }, 'idCliente': { 'idPersona': idCliente } }

    console.log("pistola", pistola)
    return this.http.post<any>(this.urlBase + 'fichaClinica/', pistola, options);
  }
  editarfichaClinica(idFichaClinica: number, motivoConsulta: string, diagnostico: string, observacion: string) {
    console.log("Editar", { idFichaClinica, motivoConsulta, diagnostico, observacion })
    return this.http.put<any>(this.urlBase + 'fichaClinica', { 'idFichaClinica': idFichaClinica, 'motivoConsulta': motivoConsulta, 'diagnostico': diagnostico, 'observacion': observacion });
  }
  getAllFisioterapeutas(): Observable<Listadatos<any>> {
    return this.http.get<Listadatos<any>>(this.urlBase + 'persona?ejemplo=%7B%22soloUsuariosDelSistema%22%3Atrue%7D');
  }
  //--------------Login------------------------------------------------------------------------------------
  getAllUser(): Observable<Listadatos<Persona>> {
    return this.http.get<any>(this.urlBase + 'persona');
  }
  //--------------Reserva------------------------------------------------------------------------------------
 getAllReserva(): Observable<ListadatosSub<Reserva>> {
    return this.http.get<ListadatosSub<Reserva>>(this.urlBase + 'reserva');
  }

  //-----------------Reporte---------------------------------------------------------------------------------
  getReporte(): Observable<Listadatos<Servicios>> {
    return this.http.get<Listadatos<Servicios>>(this.urlBase + 'servicio');
  }
}
