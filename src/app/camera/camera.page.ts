import { Component, OnInit } from '@angular/core';
import {
  Plugins, CameraResultType, FilesystemDirectory,
  CameraPhoto, CameraSource
} from '@capacitor/core';
import { Photo } from './photo';

import { ActionSheetController } from '@ionic/angular';


const { Camera, Filesystem, Storage } = Plugins;
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.loadSaved();
  }

  addPhotoToGallery() {
    this.addNewToGallery();
  }

  public async addNewToGallery() {
    const capturePhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    const savedImageFile = await this.savePicture(capturePhoto);
    this.photos.unshift(savedImageFile);

    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos.map(p => {
        const photoCopy = { ...p };
        delete photoCopy.base64;
        return photoCopy
      }))
    });
  }

  public async loadSaved() {
    const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photoList.value) || [];

    for (let photo of this.photos) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });

      photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  private async savePicture(cameraPhoto: CameraPhoto) {
    const base64Data = await this.readAsBase64(cameraPhoto);

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });

    return {
      filepath: fileName,
      webviewpath: cameraPhoto.webPath
    };
  }

  async readAsBase64(cameraPhoto: CameraPhoto) {
    const response = await fetch(cameraPhoto.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  })

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deletePicture(photo, position);
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

  public async deletePicture(photo: Photo, position: number){
    this.photos.splice(position, 1);

    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    });

    const fileName = photo.filepath.substr(photo.filepath.lastIndexOf('/'), 1);

    await Filesystem.deleteFile({
      path: fileName,
      directory: FilesystemDirectory.Data
    });
  }

}
