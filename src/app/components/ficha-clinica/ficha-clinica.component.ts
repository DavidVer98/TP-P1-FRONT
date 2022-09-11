import { Component, OnInit, ViewChild } from '@angular/core';
import { FichaClinicaModel } from 'src/app/models/ficha-clinica.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { FichaClinicaModalComponent } from '../ficha-clinica-modal/ficha-clinica-modal.component';

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
    'idEmpleado',
    'idCliente',
    'acciones'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.fichaclinica);
  constructor(private apiService: ApiService,private matdialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.getAllfichaClinica().subscribe({
      next: (data) => {
        console.log('response received', data);
        this.fichaclinica = data.lista;
        this.dataSource.data = data.lista;
      },
    });
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

// crearFichaClinica(){
//   this.matdialog.open(FichaClinicaModalComponent, {
//     data:{
//       tipo: "create"
//     }
//     })
// }

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
