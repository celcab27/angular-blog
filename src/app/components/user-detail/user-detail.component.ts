import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { usuarioI } from 'src/app/modelos/usuario.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private api:ApiService, private router:Router) { 
  }

  usuario:usuarioI;

  ngOnInit(): void {
    let usuarioID = this.activaterouter.snapshot.paramMap.get('id');

    console.log(usuarioID);
     this.api.getUsuario(usuarioID).subscribe(data => {
       console.log(data);
       this.usuario=data;
     })

  }

  verPosts(id:any){
    this.router.navigate(["usuarios", id, "posts"])
  }

  verAlbums(id:any)
  {
    this.router.navigate(["usuarios", id, "albums"])
  }
  verTareas(id:any)
  {
    this.router.navigate(["usuarios", id, "tareas"])
  }
}
