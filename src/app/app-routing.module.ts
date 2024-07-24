import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SuperComponent } from './componentes/super/super.component';

const routes: Routes = [
  {path:'recetas', component:InicioComponent},
  {path:'super', component:SuperComponent},
  {path:'**', component:InicioComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
