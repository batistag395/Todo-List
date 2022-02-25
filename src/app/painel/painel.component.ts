import { Component, OnInit } from '@angular/core';
import { Task } from '../task.interface';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public tarefa;

  public items: Task[] = [];

 
  addTarefa(text: string) {

    this.items.unshift({text});

  }

  removeTarefa(tarefa: Task){

    this.items.splice( this.items.indexOf(tarefa), 1 );

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
