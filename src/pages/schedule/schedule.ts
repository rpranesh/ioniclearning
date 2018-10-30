import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }
validateTime() {
var random = Math.random( ); 
 let alert = this.alertCtrl.create({
    title: 'Warranty Service Scheduled !!',
    subTitle: 'Thanks for Scheduling your Warranty Service. Your Schedule #. is  TS' + random +'CH',
    buttons: ['Ok']
  });
  alert.present();
}
}
