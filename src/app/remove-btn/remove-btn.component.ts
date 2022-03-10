import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task.interface';


@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent implements OnInit {

  @Input() 
  indexItem = new EventEmitter()

  @Input() tarefa: Task;

  @Input() items: Task[];
  
  @Output() update = new EventEmitter<object>();

  @Output() remove: EventEmitter<any> = new EventEmitter();

  @Output() editItem =new EventEmitter();

  @Output() saveItem= new EventEmitter();

  public editionItem: string;

  public isEditing : Boolean = false;

  removeTarefa(tarefa: Task){

    this.remove.emit(tarefa);

  }

  completeItem() {

    this.update.emit({item: this.items});
 
  }

  editTask(tarefa: Task)
  {
    this.isEditing = true;

    this.editItem.emit(tarefa)
  }

  saveTarefa(edition : string)
  {
    //if (!edition) return;

    this.isEditing = false;
    
    this.saveItem.emit(edition);
  }

  constructor() { }

  ngOnInit(): void {

    if (this.indexItem) {
      this.indexItem.subscribe((setDados) => {

        this.items = setDados; 
      });
    }
    
  }
  
}
