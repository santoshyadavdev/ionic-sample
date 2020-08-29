import { Component, OnInit } from '@angular/core';
// import {
//   Plugins
// } from '@capacitor/core';


// const { IntercomPlugin } = Plugins;

import { Intercom } from '@ionic-native/intercom/ngx';

@Component({
  selector: 'app-intercom',
  templateUrl: './intercom.page.html',
  styleUrls: ['./intercom.page.scss'],
  providers: [Intercom]
})
export class IntercomPage implements OnInit {

  constructor(private intercom: Intercom) {

  }

  ngOnInit() {
    this.intercom.registerUnidentifiedUser({ email: 'test-email@test.com' });
  }

  displayLauncher() {
    this.intercom.displayMessageComposer();
  }

  hideLauncher() {
    this.intercom.hideMessenger();
  }

  // hideLauncher() {
  //   IntercomPlugin.hideLauncher();
  // }

}
