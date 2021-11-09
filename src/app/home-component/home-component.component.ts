import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'EMPLEADOS DE UNA EMPRESA';
  constructor(private miServicio:ServicioEmpleadosService,private empleadoService:EmpleadosService){

    this.empleados=this.empleadoService.empleados;
  }
    empleados:Empleado[]=[];
    
    //metodo
    agregarEmpleado(){
      let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
     // this.miServicio.muestraMensaje("Nombre del empleado: "+miEmpleado.nombre)
      //this.empleados.push(miEmpleado);
      this.empleadoService.agregarEmpleadoServicio(miEmpleado);
    }
    cuadroNombre:string="";
    cuadroApellido:string="";
    cuadroCargo:string="";
    cuadroSalario:number=0;

   ngOnInit(): void {
  }
}