import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../classes/usuario'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nuevoUsuario = new Usuario("", "");
  constructor() { }

  ngOnInit(): void {
  }

  ingresar() {
    let listadoGuardado = this.dameUsuarios();

    let usuarioEncontrado = listadoGuardado.find((usuario: Usuario) => usuario.nombre == this.nuevoUsuario.nombre)

    console.info("usuario : ", usuarioEncontrado)


    if (usuarioEncontrado) {
      console.info("usuario encontrado", usuarioEncontrado);
      if (usuarioEncontrado.clave == this.nuevoUsuario.clave) {
        console.log("ingreso");
        Swal.fire({
          title: 'Log succesfull!',
          text: 'Welcome!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
      else {
        console.log("no es la clave");
        Swal.fire({
          title: 'Incorrect password!',
          text: 'Try again Later.',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }

    }
    else {
      console.log("no esta");
      Swal.fire({
        title: 'Incorrect user or password!',
        text: 'Try again Later.',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }
  }
  dameUsuarios() {
    let listadoGuardado;
    listadoGuardado = localStorage.getItem("listadoDeUsuarios");
    if (listadoGuardado != null) {
      listadoGuardado = JSON.parse(listadoGuardado);
    }
    return listadoGuardado;
  }
}
