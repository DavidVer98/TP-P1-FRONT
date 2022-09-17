import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Persona } from '../../models/user.models';
@Component({
  selector: 'app-buscarfisioterapeuta',
  templateUrl: './buscarfisioterapeuta.component.html',
  styleUrls: ['./buscarfisioterapeuta.component.css']
})
export class BuscarfisioterapeutaComponent implements OnInit {
  @Output() seleccionarEmpleadoEvent = new EventEmitter<Persona>()
  public data: Persona[] = [];

  nombre: string = "";
  apellido: string = "";
  filtros = {
    nombre : "",
    apellido: ""
  }
  public columns = ["Nombres","Apellidos","Email","Telefono","Ruc","Cedula","Fecha de Nacimiento","Acciones"];


  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
    this.getEmpleados()
  }
    
  getEmpleados(){

    this.apiService.getEmpleados(this.filtros)
    .subscribe((data:any)=>{
     console.log(data);
     this.data = data.lista;
    });
  }
  seleccionarEmpleado(empleado: Persona){
    this.seleccionarEmpleadoEvent.emit(empleado)
  }

  buscar(){
    this.filtros.nombre = this.nombre
    this.filtros.apellido = this.apellido
    this.getEmpleados()
  }

}
