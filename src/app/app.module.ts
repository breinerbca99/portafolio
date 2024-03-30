import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    ExperienciaComponent,
    ExperienciasComponent,
    ServicioComponent,
    ProyectoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
