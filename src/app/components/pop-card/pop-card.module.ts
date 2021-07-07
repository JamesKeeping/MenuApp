import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PopCardComponent } from './pop-card.component';



@NgModule({
  declarations: [PopCardComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [PopCardComponent]
})
export class PopCardModule { }
