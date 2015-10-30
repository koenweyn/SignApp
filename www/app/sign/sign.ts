/// <reference path="../../../typings/tsd.d.ts" />

import {Page, NavController, ViewController} from 'ionic/ionic';
import {SignComponent} from './sign.component';

@Page({
  templateUrl: 'app/sign/sign.html',
  directives: [SignComponent]
})
export class Sign {
  private nav:NavController;
  private view:ViewController;

  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }

}


