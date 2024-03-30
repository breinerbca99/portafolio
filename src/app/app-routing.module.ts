import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

const routes: Routes = [
  { path: '', component: PerfilComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'portafolio/:id', component: ProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
