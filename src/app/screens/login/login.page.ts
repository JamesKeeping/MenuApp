import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  date = new Date()

  constructor() { }

  ngOnInit() {
  }

  getGreeting() {
      var hrs = this.date.getHours();
      var msg = "";

      if(hrs > 6) msg = "Good morning!"
      if(hrs > 12) msg = "Good afternoon!"

  }


  openModel() {
    console.log('test');
    
  }
}
