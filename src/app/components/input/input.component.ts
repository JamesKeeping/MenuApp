import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  //define each row for input fields
  @Input() label: string;
  @Input() type = 'text' 


  focused: boolean;

  constructor() { }

  ngOnInit() {}

  //Creates Angular blur effect for input bar
  onBlurEvent(event: any) {
    const value = event.target.value;

    if(!value) {
        this.focused = false;
    }
}


}
