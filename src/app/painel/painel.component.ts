import { Component, OnInit, EventEmitter } from '@angular/core';
import { Task } from '../task.interface';
import { RemoveBtnComponent } from '../remove-btn/remove-btn.component';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  
  public tarefa: "";
  
  public items: Array<Task> = [{text: 'item 1'}];
  
  public findItem: number = 2;
  
  public indexItem = new EventEmitter();
  
  adiciona(tarefa: Task){

    this.items.unshift(tarefa)

    this.indexItem.emit(this.items)
    
  }
  
  remove(tarefa: Task){

    this.items.splice( this.items.indexOf(tarefa), 1)

    this.indexItem.emit(this.items);
  }

  editTarefa(tarefa : Task)
  {
    this.findItem = this.items.indexOf(tarefa);
    console.log("findItem "+this.findItem)
    console.log(tarefa)
  }

  saveTarefa(edition : string)
  {
    this.items[this.findItem].text = edition

    this.indexItem.emit(this.items);

    console.log("edition " + edition)
  }
  
  constructor() { }

  ngOnInit(): void {
    let dado = this;
    setTimeout(function () {
      dado.indexItem.emit(dado.items);
    }, 1000);

  }

}
