import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Reserva } from 'src/app/models/reserva.models';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reserva: Reserva[] = [];

  displayedColumns: string[] = [
    'fecha',
    'horaInicioCadena',
    'horaFinCadena',
    'idEmpleado',
    'idCliente',
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

}
