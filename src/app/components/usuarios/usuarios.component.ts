import { Component, OnInit } from '@angular/core';
import { usuarioI } from '../../modelos/usuario.interface';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:usuarioI[]
  constructor(private api:ApiService, private router:Router) {
    this.usuarios=[]
   }

  ngOnInit(): void {
    this.api.getUsuarios().subscribe(data => {
      console.log(data);
      this.usuarios = data;
      console.log(this.usuarios);
    });

  }

  verDetalle(id:number) {
      this.router.navigate(["usuarios", id]);
  }
}
