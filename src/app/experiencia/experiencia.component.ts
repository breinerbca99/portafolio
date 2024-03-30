import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from '../models/experencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @Input() item : Experiencia = new Experiencia();

  constructor() { }

  ngOnInit(): void {
  }

}
