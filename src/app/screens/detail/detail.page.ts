import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodItemService } from 'src/app/services/food-item.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  data = null;
  id: number;
  popFood: Food; 

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private fooditem: FoodItemService) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.popFood = this.fooditem.getFoodById(this.id);
  }

  gobackroute() {
    
  }

  addItemToCart() {
    
  }

}
