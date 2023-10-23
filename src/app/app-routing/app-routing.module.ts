import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';


// Define las rutas de tu aplicación
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirigir a la ruta /inicio por defecto
  { path: '', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
