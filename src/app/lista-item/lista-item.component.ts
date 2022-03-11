import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.interface';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.scss'],
})
export class ListaItemComponent {
  itemEditado: string;
  isEditing: Boolean = false;
  @Input() tarefa: Task;
  @Input() items: Task[];
  @Output() itemCompleto = new EventEmitter<object>();
  @Output() remover = new EventEmitter<Task>();
  @Output() editarItem = new EventEmitter<Task>();
  @Output() salvarItem = new EventEmitter<string>();

  removerTarefa(tarefa: Task) {
    this.remover.emit(tarefa);
  }

  itemFinalizado() {
    this.itemCompleto.emit({ item: this.items });
  }

  editarTarefa(tarefa: Task) {
    this.isEditing = true;
    this.editarItem.emit(tarefa);
  }

  salvarTarefa(edicao: string) {
    if (!edicao) return;
    this.isEditing = false;
    this.salvarItem.emit(edicao);
  }
}
