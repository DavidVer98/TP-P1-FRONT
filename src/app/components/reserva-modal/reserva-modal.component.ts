import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reserva-modal',
  templateUrl: './reserva-modal.component.html',
  styleUrls: ['./reserva-modal.component.css']
})
export class ReservaModalComponent implements OnInit {
  observacion= '';
  flagAsistio='';
  reserva = {};
  errorMessage = '';

  constructor(
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: { tipo:string, id:number, observacion:Object }
  ) {}

  ngOnInit(): void {
    this.reserva=this.data.observacion
  }

  editarReserva() {
    this.apiService.editarReserva(this.data.id, {"observacion":this.reserva}).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }
  
  cancelarReserva(){
    this.apiService.cancelarReserva(this.data.id).subscribe({
      next: (data: any) => {
        console.log('Se cancelo una reserva', data);
      },
    })
  }

}
