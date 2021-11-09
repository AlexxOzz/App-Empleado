import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-componentes-em',
  templateUrl: './componentes-em.component.html',
  styleUrls: ['./componentes-em.component.css']
})
export class ComponentesEMComponent implements OnInit {

  @Input() empleadoLista:Empleado;
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }
  arrayCaracteristicas:any = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
