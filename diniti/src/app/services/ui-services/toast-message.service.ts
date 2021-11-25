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

  async presentToast(alertMessage: string, durationMessage: number = 2000) {
    const toast = await this.toastController.create({
      message: alertMessage,
      duration: durationMessage,
      buttons: [
        {
          text: 'Sluit',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
}
