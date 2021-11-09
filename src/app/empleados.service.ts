import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentaEmergente:ServicioEmpleadosService){

    }
    empleados:Empleado[]=[];
      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentaEmergente.muestraMensaje("Persona que va hacer agrega: "+empleado.nombre+"\nSalario: "+empleado.salario);
        this.empleados.push(empleado);
      }

}