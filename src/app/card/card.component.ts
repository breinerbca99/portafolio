import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() proyecto : Proyecto = new Proyecto();
  @Input() orden : String = "";

  constructor(private router: Router) { }

  

  ngOnInit(): void {
  }

  verProducto(i: String): void {
    this.router.navigate(['/portafolio', i]);
  }

}
