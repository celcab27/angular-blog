import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { albumI } from 'src/app/modelos/album.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {

  @Input() isUser:boolean;
  albums:albumI[];
  constructor(private activatedroute:ActivatedRoute, private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    let userId = null;
    if(this.isUser)
    {
      userId = this.activatedroute.snapshot.paramMap.get("id");
    }
    this.api.getAlbums(userId).subscribe(data => {
      console.log(data);
      this.albums = data;
    })
  }
  verUsuario(id:any){
    this.router.navigate(["usuarios", id]);
  }
  verFotos(id:any){
    this.router.navigate(["albums", id]);
  }
}
