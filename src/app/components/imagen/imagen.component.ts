import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imagenI } from 'src/app/modelos/imagen.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  photo:imagenI;
  constructor(private activatedroute:ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    let id = this.activatedroute.snapshot.paramMap.get("id");

    this.api.getFoto(id).subscribe(data => {
      console.log(data);
      this.photo = data;
    })
  }

  deleteFoto(id:any){
    this.api.deleteFoto(id).subscribe(data => {
      console.log(data);
    })
  }
}
