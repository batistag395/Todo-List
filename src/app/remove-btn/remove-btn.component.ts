import { Component, Input, OnInit } from '@angular/core';

import { Task } from '../task.interface';


@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent implements OnInit {

  @Input() items: Task[]
  
  removeTarefa(tarefa: Task){

    this.items.splice( this.items.indexOf(tarefa), 1 );

  }
  constructor() { }

  ngOnInit(): void {
  }

}
