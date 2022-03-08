import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task.interface';


@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent implements OnInit {


  editable: boolean = true

  @Output() update = new EventEmitter<object>();

  @Input() items: Task[]


  @Output() remove: EventEmitter<any> = new EventEmitter()

  removeTarefa(tarefa: Task){

    this.remove.emit(this.items.splice( this.items.indexOf(tarefa), 1 ));

  }

  completeItem() {

    this.update.emit({

      item: this.items,

    });
 
  }

  isEditable() {

    this.editable = !this.editable;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
