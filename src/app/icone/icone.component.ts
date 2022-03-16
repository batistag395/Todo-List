import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-icone',
  templateUrl: './icone.component.html',
  styleUrls: ['./icone.component.scss'],
})
export class IconeComponent {
  dash: string;
  plus: boolean = false;
  dash_fill: string;
  plus_fill: string;
  check: string;
  check_fill: string;
  edit: string;
  edit_fill: string;
  @Input() icone: string;
  @Output() iconeMudado = new EventEmitter();

  mudarIcone() {
    this.iconeMudado.emit();
  }
}
