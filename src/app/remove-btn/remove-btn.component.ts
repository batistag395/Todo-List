import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task.interface';


@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent implements OnInit {

  @Input() items: Task[]


  @Output() remove: EventEmitter<any> = new EventEmitter()

  removeTarefa(tarefa: Task){

    this.remove.emit(this.items.splice( this.items.indexOf(tarefa), 1 ));


  }
  constructor() { }

  ngOnInit(): void {
  }

}
