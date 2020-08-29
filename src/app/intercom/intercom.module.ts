import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntercomPageRoutingModule } from './intercom-routing.module';

import { IntercomPage } from './intercom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntercomPageRoutingModule
  ],
  declarations: [IntercomPage]
})
export class IntercomPageModule {}
