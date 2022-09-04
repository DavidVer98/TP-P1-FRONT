import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css'],
})
export class ModalpopupComponent implements OnInit {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  descripcionCategoria = '';
  errorMessage =''

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  crearCategoria(){
    this.apiService.createCategoria(this.descripcionCategoria).subscribe({
      next: data => {
        console.log(data)
    },
    error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
    }
    })
  }
}
