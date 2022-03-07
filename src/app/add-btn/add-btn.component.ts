import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../task.interface';


@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent implements OnInit {

  public remove(tipo: string){
    
  }

  @Output() public adiciona: EventEmitter<any> = new EventEmitter()

  public tarefa;

  @Output() testItems = new EventEmitter<Task[]>();
  
  public items: Task[] = [];
  //

  public addTarefa(text: string) {

    if(!this.tarefa){
      return
    }
    
    this.adiciona.emit(this.items.unshift({text}))
    
    this.tarefa = ''

  }

  constructor() { }

  ngOnInit(): void {
  }

}
