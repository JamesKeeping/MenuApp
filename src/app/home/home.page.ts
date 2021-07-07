import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  @ViewChild(IonTabs) tabs: IonTabs;
  selected = '';

  categories = [];
  highlights = [];
  featured = [];

  catSlideOpts = {
    slidesPerView: 2.8,
    spaceBetween: 10,
  }

  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {

  }

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
}

}
