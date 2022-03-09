import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task.interface';


@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent implements OnInit {

  @Input() indexItem = new EventEmitter()

  @Input() tarefa: Task

  @Output() update = new EventEmitter<object>();

  @Input() items: Task[]

  @Output() remove: EventEmitter<any> = new EventEmitter()

  public editionItem : string = "";

  removeTarefa(tarefa: Task){

    this.remove.emit(tarefa);

  }

  completeItem() {

    this.update.emit({item: this.items});
 
  }


  @Output() editItem =new EventEmitter();
  
  @Output() saveItem= new EventEmitter();

  public isEditing : Boolean = false;

  editTarefa(tarefa: Task)
  {
    this.isEditing = true;
    this.editItem.emit(tarefa)
  }

  saveTarefa(edition : string)
  {
    if (!edition) return;

    this.saveItem.emit(edition);
    this.isEditing = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
