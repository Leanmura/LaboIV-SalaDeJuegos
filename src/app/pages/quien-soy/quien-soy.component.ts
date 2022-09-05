import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  urlFoto = "";
  login = "";
  name = "";
  constructor() {
    this.funcion();
  }

  ngOnInit(): void {
  }

  funcion() {
    fetch('https://api.github.com/users/Leanmura').then(data => {
      return data.json();
    }).then(post => {
      this.urlFoto = post.avatar_url;
      this.login = post.login;
      this.name = post.name;
      console.log(post);
    });
  }
}
