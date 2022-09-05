
import { NgModule, reflectComponentType } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: "registro", component: RegistroComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "quienSoy", component: QuienSoyComponent
  },
  {
    path: "", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
