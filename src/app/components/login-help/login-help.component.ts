import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login-help',
  templateUrl: './login-help.component.html',
  styleUrls: ['./login-help.component.scss'],
})
export class LoginHelpComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
}




}
