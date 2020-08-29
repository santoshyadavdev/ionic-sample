import { Component, OnInit } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.page.html',
  styleUrls: ['./navigator.page.scss'],
  providers: [LaunchNavigator]
})
export class NavigatorPage implements OnInit {

  constructor(private launchNavigator: LaunchNavigator) { }

  ngOnInit() {

    let options: LaunchNavigatorOptions = {
      start: 'London, ON'
    }

    this.launchNavigator.navigate('Toronto, ON', options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

}
