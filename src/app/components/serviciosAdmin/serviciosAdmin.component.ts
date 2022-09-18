import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoAdminSistema } from 'src/app/models/productoAdminSistemas.models';
import { ServiciosAdmin } from 'src/app/models/serviciosAdmin.models';
import { SubCategoria } from 'src/app/models/subCategoria.models';
import { ApiService } from 'src/app/services/api.service';
import { ServiciosModalComponent } from '../servicios-modal/servicios-modal.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-serviciosAdmin',
  templateUrl: './serviciosAdmin.component.html',
  styleUrls: ['./serviciosAdmin.component.css']
})
export class ServiciosAdminComponent implements OnInit {
  servicios: ServiciosAdmin[] = [];

  displayedColumns: string[] = [
    'IdPresentacionProducto',
    'Nombre',
    'Descripcion',
    'IdProducto',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.servicios);
  
  constructor(private apiService: ApiService, private matdialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.getAllServiciosA().subscribe({
      next: (data) => {
        //console.log('response received', data);
        this.servicios = data.lista;
        this.dataSource.data = data.lista;
        
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //console.log(this.dataSource.data);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  eliminarServicioAdmin(idPresentacionProducto:ServiciosAdmin) {
    
    this.matdialog.open(ServiciosModalComponent, {
      data:{
        tipo: "delete",
        original: idPresentacionProducto,
      }
      } )
  }
  // abre el poppup
  editarServiciosAdmin(test:ServiciosAdmin, nombre:string, descripcion:string, idproductoMod:ProductoAdminSistema){
    
    
    this.matdialog.open(ServiciosModalComponent, {
      data:{
        tipo: "edit",
        original: test,
        nombre: nombre,
        descripcion:descripcion,
        proMod:idproductoMod
      }
      } )
      
  }
  crearServicioAdmin(){
    this.matdialog.open(ServiciosModalComponent, {
      data:{
        tipo: "create"
      }
      })
  }


}
