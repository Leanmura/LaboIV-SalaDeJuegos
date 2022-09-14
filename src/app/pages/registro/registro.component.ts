import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // usuario = new Usuario("", "");
  // copiaClave = "";
  // listadoDeUsuarios: Usuario[] = [];
  formReg: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    // let datosGuardados = localStorage.getItem("listadoDeUsuarios");
    // if (datosGuardados != null) {
    //   this.listadoDeUsuarios = JSON.parse(datosGuardados);
    // }
    // console.info("datos traidos: ", datosGuardados);
    this.formReg = new FormGroup(
      {
        email: new FormControl(),
        password: new FormControl(),
        copyPassword: new FormControl()
      }
    );

  }

  ngOnInit(): void {
  }


  registrar() {
    // console.log("registrando");
    // let usuarioEncontrado = this.listadoDeUsuarios.find((usuario: Usuario) => usuario.nombre == this.usuario.nombre);
    // if (usuarioEncontrado) {
    //   console.log("Nombre de usuario no valido.");
    //   Swal.fire({
    //     title: 'Name not available.',
    //     text: 'Try another.',
    //     icon: 'error',
    //     confirmButtonText: 'Ok'
    //   });
    // }
    // else {
    //   if (this.usuario.clave == this.copiaClave) {
    //     let usuarioNuevo = new Usuario(this.usuario.nombre, this.usuario.clave);

    //     this.listadoDeUsuarios.push(usuarioNuevo);

    //     this.guardar();

    //   }
    //   else {
    //     Swal.fire({
    //       title: 'Passwords are different.',
    //       text: 'Try again.',
    //       icon: 'error',
    //       confirmButtonText: 'Ok'
    //     });
    //   }

    // }
    console.log(this.formReg);
    try {
      this.userService.register(this.formReg.value)
        .then(response => {
          console.log(response);
          this.userService.login(this.formReg.value)
            .then(response => this.router.navigateByUrl('/home')); // nos redirige al login)
        })
        .catch(error => {
          console.log(error.code);
          if (error.code == "auth/invalid-email") {
            Swal.fire({
              title: "Correo Invalido",
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
          else {
            Swal.fire({
              title: error.code,
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
        });

    } catch (error: any) {
      Swal.fire({
        title: error,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  guardar() {
    // localStorage.setItem("listadoDeUsuarios", JSON.stringify(this.listadoDeUsuarios));
    // Swal.fire({
    //   title: 'Sing up succesfully!',
    //   text: 'Welcome!',
    //   icon: 'success',
    //   confirmButtonText: 'Ok'
    // })
    // console.log("Guardado");
  }
}