import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icone',
  templateUrl: './icone.component.html',
  styleUrls: ['./icone.component.scss'],
})
export class IconeComponent implements OnInit {
  public dash: string;
  public plus: string;
  public check: string;
  public edit: string;
  public edit_fill: string;
  @Input() public icone: string;

  constructor() {}

  ngOnInit(): void {}
}
