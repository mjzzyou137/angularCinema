import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { DatVePhimComponent } from './dat-ve-phim.component';

const routes: Routes = [
    {path:"",component:DatVePhimComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatVePhimRoutingModule { }
