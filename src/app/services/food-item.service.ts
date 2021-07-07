import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  constructor(private http: HttpClient) { }

  getPopFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Sea Food',
        image: '/assets/images/foods/seafood-dishes.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius quis metus quis euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
      },
      {
        id: 2,
        title: 'Cheese Burger',
        image: '/assets/images/foods/hamburger.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius quis metus quis euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
      },
      {
        id: 3,
        title: 'Mussels',
        image: '/assets/images/foods/mussel.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius quis metus quis euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
      },
      {
        id: 4,
        title: 'BBQ Chicken Pizza',
        image: '/assets/images/foods/pizza.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius quis metus quis euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
      },
      {
        id: 5,
        title: 'Breakfast Sampler',
        image: '/assets/images/foods/scott-ish-breakfast.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius quis metus quis euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
      },
      {
        id: 6,
        title: 'Pasta',
        image: '/assets/images/foods/tambi.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius quis metus quis euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
      },
    ];
  }

  getFoodById(id: number): Food {
    return this.getPopFoods().find((food) => food.id === id);
  }

  getFoodJSON(): Observable<any> {
      return this.http.get('../../assets/data/menu.json');
  }
}
