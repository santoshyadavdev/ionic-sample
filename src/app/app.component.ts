import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Shop by Category',
      url: '/product',
      icon: 'laptop'
    },
    {
      title: 'Todays Deals',
      url: '/deals',
      icon: 'gift'
    },
    {
      title: 'Your Orders',
      url: '/orders',
      icon: 'shirt'
    },
    {
      title: 'Your Wish List',
      url: '/wishlist',
      icon: 'wine'
    },
    {
      title: 'Your Account',
      url: '/account',
      icon: 'key'
    },
    {
      title: 'Wallet',
      url: '/wallet',
      icon: 'wallet'
    },
    {
      title: 'Photo',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Intercom',
      url: '/intercom',
      icon: 'call'
    },
    {
      title: 'Navigator',
      url: '/navigator',
      icon: 'navigate'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
