import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Featured } from 'src/app/models/featured.model';
import { Food } from 'src/app/models/food.model';
import { FoodItemService } from 'src/app/services/food-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  catid: number;
  categories = [];
  featured: Featured[] = [];
  popFoods: Food[] = [];

  constructor(private foodItemService: FoodItemService, private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private categoryService: CategoryService) { 
  }

  featuredSlideOpts = {
    slidesPerView: 1.10,
    spaceBetween: 10,
    freeMode: true
  }

  ngOnInit() {
    this.getCategories();
    this.getFeatured();
    this.popFoods = this.foodItemService.getPopFoods();
  }
  
  async getCategories() {
        this.categoryService.getCategoryJSON().subscribe((data) => {
               this.categories = data;
        })
  }

  getFeatured() {

      this.featured = [    
        {
          id: 1,
          label: 'Cappacino',
          image: 'assets/images/coffee.png',
          description: ''
        },
        {
          id: 2,
          label: 'Club Sandwich with Fries',
          image: 'assets/images/club.png',
          description: ''
        },
        {
          id: 3,
          label: 'Garden Salad',
          image: 'assets/images/salad5.png',
          description: ''
        },
      ]
  }

  goToCategoryPage(label: string) {
    this.router.navigate(['category-listing', label])
  }

  goToDetailsPage(id: number) {
    this.router.navigate(['detail', id])
  }


}
