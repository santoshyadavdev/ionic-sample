import { Component, OnInit } from '@angular/core';
import {
  Plugins} from '@capacitor/core';
import { Photo } from './photo';

import { ActionSheetController } from '@ionic/angular';
import { CameraService } from './services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  photos: Photo[] = this.galleryService.photos;

  constructor(public actionSheetController: ActionSheetController,
    private galleryService: CameraService) { }


  ngOnInit() {
    this.galleryService.loadSaved();
  }

  addPhotoToGallery() {
    this.galleryService.addNewToGallery();
  }

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.galleryService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        role: 'close',
        icon: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }


}
