import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { SubCategoriaComponent } from './components/sub-categoria/sub-categoria.component';

const routes: Routes = [
  { path: 'categoria', component: CategoriaComponent },
  { path: 'subCategoria', component: SubCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
