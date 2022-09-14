import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth'; // importar el servicio Auth

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) {

  }

  register({ email, password, copyPassword }: any) {
    if (password == copyPassword) {
      return createUserWithEmailAndPassword(this.auth, email, password);
    }
    else {
      throw "Las constraseñas no coinciden";
    }
  }
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }


}
