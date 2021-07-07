import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DetailItemComponent } from './detail-item.component';



@NgModule({
  declarations: [DetailItemComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [DetailItemComponent]
})
export class DetailItemModule { }
