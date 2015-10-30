//import {Component, Directive, Optional, NgControl, ElementRef, Renderer} from 'ionic/ionic';
import {Component} from 'angular2/angular2';

@Component({
  selector: 'sign',
  host: {
    '(click)': 'click($event)'
  },
  template:
      '<canvas></canvas>'
})
export class SignComponent {

  constructor() {
  }

  onInit() {
    //this.labelId = 'label-' + this.inputId;
  }

  click(event) {
    console.log('click');
  }

}
