import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-componentes-ou',
  templateUrl: './componentes-ou.component.html',
  styleUrls: ['./componentes-ou.component.css']
})
export class ComponentesOUComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregarCaracteristicas(value: string) {
    this.miServicio.muestraMensaje(value);
    alert(value)
  this.caracteristicasEmpleado.emit(value);
  }
}
