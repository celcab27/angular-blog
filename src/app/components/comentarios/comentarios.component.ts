import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comentarioI } from 'src/app/modelos/comentario.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarios:comentarioI[];
  constructor(private api:ApiService, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedroute.snapshot.paramMap.get("id");

    this.api.getComentarios(id).subscribe(data =>{
      console.log(data);
      this.comentarios = data;
    })
  }

}
