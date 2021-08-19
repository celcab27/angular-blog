import { Component, OnInit, Input } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { postI } from 'src/app/modelos/post.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() isUser:boolean;
  posts:postI[];
  filterPost = "";

  constructor(private activatedroute:ActivatedRoute, private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    let id = null;
    if(this.isUser)
    {
      id = this.activatedroute.snapshot.paramMap.get("id");
    }
    this.api.getPosts(id).subscribe(data => {
      console.log(data);
      this.posts=data;
    })

   
  }
  verUsuario(idUser:any){
    this.router.navigate(["usuarios", idUser])
  }
  verComentarios(idPost:any){
    console.log(idPost);
    this.router.navigate(["posts", idPost, "comentarios"]);
  }
}
