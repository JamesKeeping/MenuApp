import { AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IonButton, IonContent, IonList,IonSlides } from '@ionic/angular';
import { isPlatform } from '@ionic/core';
import { FoodItemService } from 'src/app/services/food-item.service';
@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.page.html',
  styleUrls: ['./category-listing.page.scss'],
})
export class CategoryListingPage implements OnInit, AfterViewInit {

  

  data = null;
  label: string;
  favorited = '';
  activeCategory = 0;
  activeItem = 0;
  categorySlidesVisible = false;
  listElements = [];

  opts = {
    freeMode: false,
    slidesPerView: 2.0,
    
}

  @ViewChild(IonButton) tabs: IonButton;
  @ViewChildren(IonList, {read: ElementRef}) lists: QueryList<ElementRef>;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonSlides) slides: IonSlides;

  constructor(private activatedRoute: ActivatedRoute, 
              private http: HttpClient,
              @Inject(DOCUMENT) private document: Document,
              private foodItem: FoodItemService,
              private router: Router) {           
    this.label = this.activatedRoute.snapshot.paramMap.get('label')
  }

  ngOnInit() {

    this.http.get('../assets/data/menu.json').subscribe((res: any) =>
    {
        this.data = res;
        console.log(res);
        
    })

    const headerHeight = isPlatform('ios') ? 44 : 56;
    this.document.documentElement.style.setProperty('--header-position', `calc(env(safe-area-inset-top) + ${headerHeight}px )`);

  }

  ngAfterViewInit() {
    this.lists.changes.subscribe(_ => {
        this.listElements = this.lists.toArray();
    })
  }

  selectCategory(index) {
    const child = this.listElements[index].nativeElement;
    this.content.scrollToPoint(0, child.offsetTop - 150, 1000);
}

onScroll(ev) {
  const offset = ev.detail.scrollTop;
  this.categorySlidesVisible = offset > 500;

  for(let i = 0; i < this.listElements.length; i++) {
        const item = this.listElements[i].nativeElement;
        if(this.isElementinViewport(item)) 
        {
              this.activeCategory = i;
              this.slides.slideTo(i,1000);
              break;
        }
  }
}

isElementinViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.bottom <= (window.innerHeight || this.document.documentElement.clientHeight)
    )
}

selectFoodItem(index) {
  this.router.navigate(['detail', index])
  this.activeItem = index;
}


}