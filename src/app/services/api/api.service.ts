import { Injectable } from '@angular/core';
import {usuarioI} from '../../modelos/usuario.interface';
import { postI } from 'src/app/modelos/post.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { comentarioI } from 'src/app/modelos/comentario.interface';
import { albumI } from 'src/app/modelos/album.interface';
import { imagenI } from 'src/app/modelos/imagen.interface';
import { todoI } from 'src/app/modelos/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://jsonplaceholder.typicode.com"

  constructor(private http:HttpClient) { }

  getUsuarios():Observable<usuarioI[]>{
    let direccion = this.url + '/users';
    return this.http.get<usuarioI[]>(direccion);
  }

  getUsuario(id:any):Observable<usuarioI>{
    let direccion = this.url + "/users/" + id
    return this.http.get<usuarioI>(direccion)
  }

  getPosts(id:any):Observable<postI[]>{
    let direccion;
    if(id)
    {
      direccion = this.url + "/users/" + id + "/posts"
    } else {
      direccion = this.url + '/posts'
    }

    return this.http.get<postI[]>(direccion);
  }

  getComentarios(id:any):Observable<comentarioI[]>
  {
    let direccion = this.url + "/posts/" + id + "/comments";

    return this.http.get<comentarioI[]>(direccion);
  }

  getAlbums(id:any):Observable<albumI[]>
  {
    let direccion;
    if(id)
    {
      direccion = this.url + "/users/" + id + "/albums";
    }
    else {
      direccion = this.url + "/albums"
    }

    return this.http.get<albumI[]>(direccion);
  }

  getFotos(id:any):Observable<imagenI[]>{
    let direccion = this.url + "/albums/" + id + "/photos";

    return this.http.get<imagenI[]>(direccion);
  }

  getFoto(id:any):Observable<imagenI>{
    let direccion = this.url + "/photos/" + id

    return this.http.get<imagenI>(direccion);
  }
  deleteFoto(id:any)
  {
    let direccion = this.url + "/photos/" + id

    return this.http.delete(direccion);
  }
  getTodos(id:any):Observable<todoI[]>{
    let direccion = this.url + "/users/" + id + "/todos"

    return this.http.get<todoI[]>(direccion);
  }
}
