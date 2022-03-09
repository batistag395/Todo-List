import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../task.interface';


@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent implements OnInit {

  

  @Output() public adiciona: EventEmitter<any> = new EventEmitter()

  public tarefa;

  @Output() testItems = new EventEmitter<Task[]>();
  
  

  //definir como input, no pai definir propriedade item com unshift no pai

  public addTarefa(text: string) {

    if(!this.tarefa){
      return
    }
    
    this.adiciona.emit({text})
    
    this.tarefa = ''

  }

  constructor() { }

  ngOnInit(): void {
  }

}
