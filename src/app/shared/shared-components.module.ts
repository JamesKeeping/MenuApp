import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DrawerComponent } from '../components/drawer/drawer.component';
import { InputComponent } from '../components/input/input.component';

@NgModule({
  declarations: [DrawerComponent, InputComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DrawerComponent, InputComponent]
})
export class SharedComponentsModule { }
