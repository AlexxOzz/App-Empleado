import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {
title="Hello";
  constructor(private router:Router,private miServicio:ServicioEmpleadosService,private empleadoService:EmpleadosService) { 
    this.empleados=this.empleadoService.empleados;
  }

  //con esta clase no ayuda a devolvernos a cualquier lado
  volverHome(){
    alert("Adios")
    this.router.navigate(['']);
  }
  empleados:Empleado[]=[];
//metodo
agregarEmpleado(){
  let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
 // this.miServicio.muestraMensaje("Nombre del empleado: "+miEmpleado.nombre)
  //this.empleados.push(miEmpleado);
  this.empleadoService.agregarEmpleadoServicio(miEmpleado);
  this.router.navigate(['']);
}
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
  ngOnInit(): void {
  }

}
