import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Reserva } from 'src/app/models/reserva.models';
import { Persona } from 'src/app/models/user.models';
import { ApiService } from '../../services/api.service';
import { FichaClinicaModalComponent } from '../ficha-clinica-modal/ficha-clinica-modal.component';
import { ReservaModalComponent } from '../reserva-modal/reserva-modal.component';

type Filtro = {
  fechaDesde?: string;
  fechaHasta?: string;
  idEmpleado?: number;
  idCliente?: number;
};
let empleado = new Persona();
let cliente = new Persona();
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
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
    'acciones',
  ];

  filtros: Filtro = {};
  empleado: Persona = new Persona();
  cliente: Persona = new Persona();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.reserva);
  constructor(private apiService: ApiService, private matdialog: MatDialog) {
    const today = new Date();
    const todayString = `${today.getFullYear()}${
      today.getMonth() < 9 ? '0' : ''
    }${today.getMonth() + 1}${
      today.getDate() <= 9 ? '0' : ''
    }${today.getDate()}`;
    this.filtros.fechaDesde = todayString;
    this.filtros.fechaHasta = todayString;
    console.log(this.filtros.fechaDesde);
    console.log(this.filtros.fechaHasta);
  }

  ngOnInit(): void {
    this.getReservas()
  }

  getReservas( ) {
    this.apiService.getReservas(this.filtros).subscribe({
    next: (data) => {
      console.log('response received', data);
      this.reserva = data.lista;
      this.dataSource.data = data.lista;
    },
  });}

  buscar(): void{
    this.getReservas();  
  }

  editarReserva(idReserva: number) {
    this.matdialog.open(ReservaModalComponent, {
      data: {
        tipo: 'edit',
        id: idReserva,
      },
    });
  }

  cancelarReserva(idReserva: number) {
    this.matdialog.open(ReservaModalComponent, {
      data: {
        tipo: 'delete',
        id: idReserva,
      },
    });
  }

  agregarFicha(idReserva: number, idEmpleado: Persona, idCliente: Persona) {
    this.apiService.editarReserva(idReserva, { flagAsistio: 'S' }).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
    this.matdialog.open(FichaClinicaModalComponent, {
      data: {
        tipo: 'test_reserva',
      },
    });
  }

  seleccionarEmpleado(empleado: Persona){
    this.empleado = empleado
    
  }

}
