import { Component, Input, OnInit } from '@angular/core';
import { Servicio } from '../models/servicio';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  @Input() servicio: Servicio = new Servicio();

  constructor() { }

  ngOnInit(): void {
  }

}
