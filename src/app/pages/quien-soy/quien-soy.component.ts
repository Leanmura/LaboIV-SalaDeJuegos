import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
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
  location = [];
  created_at = "";
  public_repos = 0;
  pais: string = "";
  provincia: string = "";
  ciudad: string = "";

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
      this.location = post.location.split(', ');
      this.pais = this.location[0];
      this.provincia = this.location[1];
      this.ciudad = this.location[2];
      //this.created_at = post.created_at.split("T")[0];
      this.created_at = new Date(post.created_at,).toLocaleDateString('es', { day: "2-digit", weekday: "long", month: "long", year: "numeric" });

      this.public_repos = post.public_repos;
      console.log(this.location);
      console.log(post);
    });
  }

}
