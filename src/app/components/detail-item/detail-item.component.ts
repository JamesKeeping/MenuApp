import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { FoodItem } from 'src/app/models/foodItem.model';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss'],
})
export class DetailItemComponent implements OnInit {


  @Input() item: FoodItem;
 
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
