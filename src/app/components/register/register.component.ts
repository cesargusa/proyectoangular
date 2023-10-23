import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nombre:string = '';
  telefono:string = '';
  correo:string = '';
  direccion:string ='';
  localidad:string = '';
  provincia:string ='';
  contrasena:string = '';
  repetirContrasena:string ='';
  terminos:boolean = false;
  finalizado:boolean = false;
  //Metodo para validar todo el formulario
  constructor(private router:Router) {}
  validationForm(){

      if(this.contrasena != this.repetirContrasena) {
        alert("Contraseñas erroneas")
        this.finalizado = false;
      } else  this.finalizado = true;
      if(this.terminos == false){
        this.finalizado = false;

      }else  this.finalizado = true;

      if(this.finalizado) {
        alert("Registro creado correctamente")
        this.router.navigate(['/login'], {
          queryParams: { 
            nombre: this.nombre,
            telefono: this.telefono, 
            correo: this.correo, 
            direccion: this.direccion, 
            localidad: this.localidad, 
            provincia: this.provincia, 
            contrasena: this.contrasena, 
            repetirContrasena: this.repetirContrasena, 
            actived:true

          }
        });
      }
  }
}
