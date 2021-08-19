import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { AlbumByIdComponent } from './vistas/album-by-id/album-by-id.component';
import { AllAlbumsComponent } from './vistas/all-albums/all-albums.component';
import { AllPostsComponent } from './vistas/all-posts/all-posts.component';
import { PostsByIdComponent } from './vistas/posts-by-id/posts-by-id.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {path:"", redirectTo:"usuarios", pathMatch:"full"},
  {path:"usuarios", component:UsuariosComponent},
  {path:"usuarios/:id", component:UserDetailComponent},
  {path:"usuarios/:id/posts", component:PostsByIdComponent},
  {path:"usuarios/:id/albums", component:AlbumByIdComponent},
  {path:"usuarios/:id/tareas", component:TodoComponent},
  {path:"posts", component:AllPostsComponent},
  {path:"posts/:id/comentarios", component:ComentariosComponent},
  {path:"albums", component:AllAlbumsComponent},
  {path:"albums/:id", component:GaleriaComponent},
  {path:"photos/:id", component:ImagenComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
