import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/classes/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario = new Usuario("", "");
  copiaClave = "";
  listadoDeUsuarios: Usuario[] = [];

  constructor() {
    let datosGuardados = localStorage.getItem("listadoDeUsuarios");
    if (datosGuardados != null) {
      this.listadoDeUsuarios = JSON.parse(datosGuardados);
    }
    console.info("datos traidos: ", datosGuardados);
  }

  ngOnInit(): void {
  }
  registrar() {
    console.log("registrando");
    let usuarioEncontrado = this.listadoDeUsuarios.find((usuario: Usuario) => usuario.nombre == this.usuario.nombre);
    if (usuarioEncontrado) {
      console.log("Nombre de usuario no valido.");
      Swal.fire({
        title: 'Name not available.',
        text: 'Try another.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
    else {
      if (this.usuario.clave == this.copiaClave) {
        let usuarioNuevo = new Usuario(this.usuario.nombre, this.usuario.clave);

        this.listadoDeUsuarios.push(usuarioNuevo);

        this.guardar();

      }
      else {
        Swal.fire({
          title: 'Passwords are different.',
          text: 'Try again.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }

    }
  }
  guardar() {
    localStorage.setItem("listadoDeUsuarios", JSON.stringify(this.listadoDeUsuarios));
    Swal.fire({
      title: 'Sing up succesfully!',
      text: 'Welcome!',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    console.log("Guardado");
  }

}