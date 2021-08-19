import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './plantillas/header/header.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { TodoComponent } from './components/todo/todo.component';
import { AllPostsComponent } from './vistas/all-posts/all-posts.component';
import { PostsByIdComponent } from './vistas/posts-by-id/posts-by-id.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { AllAlbumsComponent } from './vistas/all-albums/all-albums.component';
import { AlbumByIdComponent } from './vistas/album-by-id/album-by-id.component'
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HeaderComponent,
    UserDetailComponent,
    PostsComponent,
    AlbumesComponent,
    TodoComponent,
    AllPostsComponent,
    PostsByIdComponent,
    ComentariosComponent,
    AllAlbumsComponent,
    AlbumByIdComponent,
    GaleriaComponent,
    ImagenComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
