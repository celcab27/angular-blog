import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { imagenI } from 'src/app/modelos/imagen.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  photos:imagenI[];
  constructor(private activatedroute:ActivatedRoute, private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    let id = this.activatedroute.snapshot.paramMap.get("id");

    this.api.getFotos(id).subscribe(data => {
      console.log(data);
      this.photos=data;

    })
  }

  verFoto(id:any){
    this.router.navigate(["photos", id]);    
  }

  eliminarFoto(id:any){
    for(let i=0; i <= this.photos.length; i++)
    {
      if(this.photos[i].id === id)
      {
        this.photos.splice(i, 1);
      }
    }
  }
}
