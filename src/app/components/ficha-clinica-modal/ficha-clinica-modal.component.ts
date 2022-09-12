import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaModel } from 'src/app/models/persona.models';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-ficha-clinica-modal',
  templateUrl: './ficha-clinica-modal.component.html',
  styleUrls: ['./ficha-clinica-modal.component.css']
})
export class FichaClinicaModalComponent implements OnInit {

  motivoConsulta = '';
  diagnostico = '';
  observacion = '';
  idTipoProducto={};
  idEmpleado = {};
  idCliente = {};
  fichaclinica = {motivoConsulta:'',diagnostico:'',observacion:'',idEmpleado:{},idCliente:{}};
  errorMessage = '';
  personaFisioterapeuta:PersonaModel[]=[]
  personaCliente:PersonaModel[]=[]
  dataSource1 = new MatTableDataSource(this.personaFisioterapeuta);
  dataSource2 = new MatTableDataSource(this.personaCliente);
  constructor(
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: { tipo: string, id: number, motivoConsulta: string, diagnostico: string, observacion: string, idTipoProducto:object, idEmpleado: object, idCliente: object   }
  ) {}

  ngOnInit(): void {
    this.fichaclinica={
      motivoConsulta:this.data.motivoConsulta,
      diagnostico:this.data.diagnostico,
      observacion:this.data.observacion,
      idEmpleado:this.data.idEmpleado,
      idCliente:this.data.idCliente
    }
    this.apiService.getAllFisioterapeutas().subscribe({
      next: (data1) => {
        console.log('response received', data1);
        this.personaFisioterapeuta= data1.lista;
        this.dataSource1.data = data1.lista;
      },
      
    });
    this.apiService.getAllPaciente().subscribe({
      next: (data2) => {
        console.log('response received', data2);
        this.personaCliente = data2.lista;
        this.dataSource2.data = data2.lista;
      },
      
    });


  }

  onChange($event:any) {
    console.log($event);
  }

  createFichaClinica() {


    this.apiService.createfichaClinica(this.motivoConsulta, this.diagnostico, this.observacion, this.idTipoProducto, this.idEmpleado, this.idCliente).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }
  
  editarFichaClinica() {
    this.apiService.editarfichaClinica(this.data.id, this.fichaclinica.motivoConsulta, this.fichaclinica.diagnostico, this.fichaclinica.observacion).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }

  eliminarFichaClinica(){
    this.apiService.deleteOncefichaClinica(this.data.id).subscribe({
      next: (data: any) => {
        console.log('Se elimino una categoria', data);
      },
    })
  }

}
