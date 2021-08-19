import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { todoI } from 'src/app/modelos/todo.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tareas:todoI[];


  constructor(private activatedroute:ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    let id = this.activatedroute.snapshot.paramMap.get("id");

    this.api.getTodos(id).subscribe(data => {
      console.log(data);
      this.tareas=data;
      for(let tarea of this.tareas){
        if(tarea.completed)
        {
          tarea.completada = "Hecha";
          tarea.buttonMessage = "Marcar como no hecha";
        } else {
          tarea.completada = "No hecha";
          tarea.buttonMessage = "Marcar como hecha";
        }
      }      
    })
  }

  cambiarEstado(id:any){
    for(let tarea of this.tareas)
    {
      if(tarea.id === id)
      {
        if(tarea.completed)
        {
          tarea.completed = false;
          tarea.completada = "No hecha";
          tarea.buttonMessage = "Marcar como hecha";
        } else {
          tarea.completed = true;
          tarea.completada = "Hecha";
          tarea.buttonMessage = "Marcar como no hecha";
        }
      }
    }
  }
}
