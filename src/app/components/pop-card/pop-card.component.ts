import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-pop-card',
  templateUrl: './pop-card.component.html',
  styleUrls: ['./pop-card.component.scss'],
})
export class PopCardComponent implements OnInit {
  @Input() popItem: Food;
  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit() {}

}
