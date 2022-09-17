import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Reserva } from 'src/app/models/reserva.models';
import { ApiService } from '../../services/api.service';
import { FichaClinicaModalComponent } from '../ficha-clinica-modal/ficha-clinica-modal.component';
import { ReservaModalComponent } from '../reserva-modal/reserva-modal.component';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reserva: Reserva[] = [];
  errorMessage = '';
  displayedColumns: string[] = [
    'fecha',
    'horaInicioCadena',
    'horaFinCadena',
    'idEmpleado',
    'idCliente',
    'acciones'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.reserva);
  constructor(private apiService: ApiService, private matdialog: MatDialog) {}


  ngOnInit(): void {
    this.apiService.getAllReserva().subscribe({
      next: (data) => {
        console.log('response received', data);
        this.reserva = data.lista;
        this.dataSource.data = data.lista;
      
      },
    });
  }

 editarReserva(idReserva: number) {

    this.matdialog.open(ReservaModalComponent, {
      data:{
        tipo: "edit",
        id: idReserva,
      }
      } )
  }

  cancelarReserva(idReserva: number) {

    this.matdialog.open(ReservaModalComponent, {
      data:{
        tipo: "delete",
        id: idReserva,
      }
      } )
  }

  agregarFicha(idReserva:number, idEmpleadox:object, idClientex:object) {
    
    this.apiService.editarReserva(idReserva, {"flagAsistio":"S"}).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
    console.log("siiiiuuuu", idEmpleadox);
    this.matdialog.open(FichaClinicaModalComponent, {
      
      data:{
        tipo: "create",

      }
      } )

    
  }

}
