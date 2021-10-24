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
    return await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }

  public async toDataURL(url) {
    return await fetch(url)
      .then(response => response.blob())
      .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        return reader.readAsDataURL(blob);
      }));
  }

  // https://stackoverflow.com/questions/33940145/convert-base64-image-data-to-image-file-in-angularjs
  public dataURItoBlob(dataURI) {
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
    } else {
      byteString = unescape(dataURI.split(',')[1]);
    }
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type: mimeString});
  }
}
