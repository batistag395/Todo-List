import { Component } from '@angular/core';
import { Task } from '../task.interface';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
})
export class PainelComponent {
  tarefa: string = '';
  items: Array<Task> = [];
  encontrarItem: number = 0;

  adicionar(tarefa: Task) {
    this.items.unshift(tarefa);
  }

  remover(tarefa: Task) {
    this.items.splice(this.items.indexOf(tarefa), 1);
  }

  editarTarefa(tarefa: Task) {
    this.encontrarItem = this.items.indexOf(tarefa);
  }

  salvarTarefa(salvarItemEditado: string) {
    this.items[this.encontrarItem].text = salvarItemEditado;
  }
}
