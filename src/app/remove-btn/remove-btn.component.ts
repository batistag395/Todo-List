import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task.interface';


@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent implements OnInit {

  @Input() tarefa: Task

  @Output() update = new EventEmitter<object>();

  @Input() items: Task[]

  @Output() remove: EventEmitter<any> = new EventEmitter()

  removeTarefa(tarefa: Task){

    this.remove.emit(tarefa);

  }

  completeItem() {

    this.update.emit({item: this.items});
 
  }

  @Output() editItem: EventEmitter<Task> = new EventEmitter();
  @Output() saveItem: EventEmitter<Task> = new EventEmitter();

  public isEditing : Boolean = false;
  public editionTask : string = "";

  editTarefa(tarefa: Task)
  {
    this.isEditing = true;
    this.editItem.emit(tarefa)

  }

  saveTarefa(editItem : Task)
  {
    if (!editItem) return;

    this.saveItem.emit(editItem);
    this.isEditing = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
