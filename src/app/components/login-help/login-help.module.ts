import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginHelpComponent } from './login-help.component';



@NgModule({
  declarations: [LoginHelpComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [LoginHelpComponent]
})
export class LoginHelpModule { }
