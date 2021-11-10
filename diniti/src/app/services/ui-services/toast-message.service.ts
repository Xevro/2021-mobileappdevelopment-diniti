import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(
    private toastController: ToastController
  ) {
  }

  async presentToast(alertMessage: string) {
    const toast = await this.toastController.create({
      message: alertMessage,
      duration: 2000
    });
    await toast.present();
  }
}
