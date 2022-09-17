import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { Servicios } from '../../models/servicios.models';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  servicios : Servicios[] = [];
  displayedColumns: string[] = [
    'idServicio',
    'idEmpleado',
    'estado',
    'fechaHora',
    'observacion',
    'presupuesto',
    'flagEstado'

  ];

  dataSource = new MatTableDataSource(this.servicios);


  ngOnInit(): void {
    this.apiService.getReporte().subscribe({
      next: (data) => {
        console.log('response received', data);
        this.servicios = data.lista;
        console.log(this.servicios)
        this.dataSource.data = data.lista;
      },
    });

  }

}
