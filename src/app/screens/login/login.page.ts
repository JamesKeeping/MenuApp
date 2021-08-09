import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController} from '@ionic/angular';
import { LoginHelpComponent } from 'src/app/components/login-help/login-help.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  date = new Date()
  focused: boolean;
  focused2: boolean;
  submit = false;
  createPatientForm: FormGroup
  
  

  constructor(public formBuilder: FormBuilder, public modalController: ModalController, public route: Router) { }

  ngOnInit() {
      this.initForm();
  }


  initForm() {
    this.createPatientForm = this.formBuilder.group({
      mrn: (['', [Validators.required, Validators.pattern(/^[0-9]+(.[0-9]{0,2})?$/), Validators.minLength(5)]]),
      // dob: new FormControl([null, [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]]),
      lastname:(['', [Validators.required, Validators.pattern(/^[a-zA-Z\\s]*$/)]]),
      // room: [null, [Validators.required, Validators.pattern(/^[0-9]+(.[0-9]{0,2})?$/)]],
      // ssn: [null, [Validators.required, Validators.pattern(/^[0-9]+(.[0-9]{0,2})?$/), Validators.maxLength(4)]]
      })
  }

  get mrn(): AbstractControl {
    return this.createPatientForm.get('mrn');
  }

  get lastname(): AbstractControl {
    return this.createPatientForm.get('lastname');
  }

  public errorMessages = {
    mrn: 
    [
      {type: 'required', message: 'MRN is required'},
      {type: 'pattern', message: 'MRN must be a number'},
      {type: 'minlength', message: 'MRN has to be at least 5 numbers'}
    ],
    lastname:
    [
      {type: 'required', message: "Patient's lastname is required"},
      {type: 'pattern', message: 'Lastname can not contain numbers'}
    ]
  };

onBlurEvent(event: any) {
  const value = event.target.value;

  if(!value) {
      this.focused = false;
  }
}

onBlurEvent2(event: any) {
  const value = event.target.value;

  if(!value) {
      this.focused2 = false;
  }
}


  loginPatient() {
    console.log(this.loginData);
    
    this.route.navigate(['/home'])
  }

  get loginData(): string {
      return JSON.stringify(this.createPatientForm.value)
  }


  getGreeting() {
      var hrs = this.date.getHours();
      var msg = "";

      if(hrs > 6) msg = "Good morning!"
      if(hrs > 12) msg = "Good afternoon!"

  }

  async openModel() {
    let modal = await this.modalController.create({
      component: LoginHelpComponent,
      cssClass: 'login-help'
   });
   modal.present();
    
  }

  

}
