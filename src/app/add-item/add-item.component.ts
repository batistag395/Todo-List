import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent {
  @Output() adicionar = new EventEmitter();
  tarefa: string;

  addTarefa(text: string) {
    if (!this.tarefa) {
      return;
    }
    this.adicionar.emit({ text });
    this.tarefa = '';
  }
}
