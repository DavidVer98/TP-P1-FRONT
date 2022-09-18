import { Component, OnInit, ViewChild } from '@angular/core';
import { FichaClinicaModel } from 'src/app/models/ficha-clinica.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { FichaClinicaModalComponent } from '../ficha-clinica-modal/ficha-clinica-modal.component';
import { Persona } from 'src/app/models/user.models';
import { BuscarfisioterapeutaComponent } from '../buscarfisioterapeuta/buscarfisioterapeuta.component';
import { BuscarclienteComponent } from '../buscarcliente/buscarcliente.component';



type Filtro = {
  fechaDesde?: string;
  fechaHasta?: string;
  idEmpleado?: number;
  idCliente?: number;
  idTipoProducto?:number;
  idCategoria?: number;
};


@Component({
  selector: 'app-ficha-clinica',
  templateUrl: './ficha-clinica.component.html',
  styleUrls: ['./ficha-clinica.component.css']
})
export class FichaClinicaComponent implements OnInit {
  fichaclinica: FichaClinicaModel[] = [];

  displayedColumns: string[] = [
    'idFichaClinica',
    'fechaHora',
    'motivoConsulta',
    'diagnostico',
    'observacion',
    'idTipoProducto',
    'idEmpleado',
    'idCliente',
    'acciones'
  ];
  filtros: Filtro = {};
  fisioterapeuta: Persona = new Persona();
  cliente: Persona = new Persona();

  fisioterapeutaDialogRef!: MatDialogRef<BuscarfisioterapeutaComponent>;
  clienteDialogRef!: MatDialogRef<BuscarclienteComponent>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.fichaclinica);
  constructor(private apiService: ApiService,private matdialog: MatDialog) { }

  ngOnInit(): void {
   this.getFichas();
   this.filtros={}
 }

  getFichas(){
    this.apiService.getFilteredfichaClinica(this.filtros).subscribe({
      next: (data) => {
        console.log('response received', data);
        this.fichaclinica = data.lista;
        this.dataSource.data = data.lista;
      },
    });
  } 

  buscar(): void{
    this.getFichas();  
  }

  buscarFisioterapeuta() {
    this.fisioterapeutaDialogRef=this.matdialog.open(BuscarfisioterapeutaComponent, {
    });

    this.fisioterapeutaDialogRef.afterClosed().subscribe(result => {

      if(result){
        this.filtros.idEmpleado = result.idPersona
        this.fisioterapeuta=result
      }
    })
  }
  

  buscarCliente() {
    this.clienteDialogRef=this.matdialog.open(BuscarclienteComponent, {
    });

    this.clienteDialogRef.afterClosed().subscribe(result => {
      this.filtros.idCliente = result.idPersona
      if(result) this.cliente=result
    })
  }





 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  console.log(this.dataSource.data);
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  // this.dataSource.sort = this.sort;
}

createFichaClinica(){
  this.matdialog.open(FichaClinicaModalComponent, {
    data:{
      tipo: "create"
    }
    })
}

editarFichaClinica(idFichaClinica : number){
  console.log(this.dataSource.filteredData.find(data => data.idFichaClinica == idFichaClinica)?.motivoConsulta)
  console.log(typeof(this.dataSource.filteredData.find(data => data.idFichaClinica == idFichaClinica)?.motivoConsulta))
  this.matdialog.open(FichaClinicaModalComponent, {
    data:{
      tipo: "edit",
      id: idFichaClinica,
      motivoConsulta: this.dataSource.filteredData.find(data => data.idFichaClinica == idFichaClinica)?.motivoConsulta,
      diagnostico: this.dataSource.filteredData.find(data => data.idFichaClinica == idFichaClinica)?.diagnostico,
      observacion: this.dataSource.filteredData.find(data => data.idFichaClinica == idFichaClinica)?.observacion
    }
    } )
}

eliminarFichaClinica(idFichaClinica: number) {
  this.matdialog.open(FichaClinicaModalComponent, {
    data:{
      tipo: "delete",
      id: idFichaClinica,
    }
    } )
}

}
