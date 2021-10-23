import {Injectable} from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    public imagePicker: ImagePicker,
    public platform: Platform
  ) {
  }

  public async capturePhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    console.log(capturedPhoto);
  }
}
