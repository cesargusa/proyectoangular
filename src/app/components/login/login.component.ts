import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  actived:boolean = false;
  nombre:string = '';
  telefono:string = '';
  correo:string = '';
  direccion:string ='';
  localidad:string = '';
  provincia:string ='';
  contrasena:string = '';
  ngOnInit(): void {

  }
  

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const nombre = params['nombre'];
      const telefono = params['telefono'];
      const correo = params['correo']; // Obtén el valor del parámetro 'username'
      const direccion = params['direccion'];
      const localidad = params['localidad'];
      const provincia = params['provincia'];
      const contrasena = params['contrasena'];
      const actived = params['actived'];
      this.nombre = nombre;
      this.actived = actived;
      this.direccion = direccion
      this.telefono = telefono
      this.correo =correo
      this.localidad = localidad
      this.provincia = provincia
      this.contrasena =contrasena
this.actived = actived
alert(this.actived)
    });
  }
}
