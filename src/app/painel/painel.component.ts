import { Component, OnInit, EventEmitter } from '@angular/core';
import { Task } from '../task.interface';
import { RemoveBtnComponent } from '../remove-btn/remove-btn.component';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public indexItem = new EventEmitter();

  public findItem: number = 0

  public items: Task[] = [{text: 'item 1'}];

  adiciona(tarefa: Task){

    this.items.unshift(tarefa)

    this.indexItem.emit(this.items)
    
  }
  
  remove(tarefa: Task){

    this.items.splice( this.items.indexOf(tarefa), 1 )
  }

  editTarefa(tarefa : Task)
  {
    this.findItem = this.items.indexOf(tarefa);
  }

  saveTarefa(edition : string)
  {
    this.items[this.findItem].text = edition;
    this.indexItem.emit(this.items);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
