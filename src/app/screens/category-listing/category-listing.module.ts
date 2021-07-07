import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryListingPageRoutingModule } from './category-listing-routing.module';

import { CategoryListingPage } from './category-listing.page';
import { SharedDirectivesModule } from 'src/app/shared/shared-directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryListingPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [CategoryListingPage]
})
export class CategoryListingPageModule {}
