import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private callNumber: CallNumber,private emailComposer: EmailComposer) {

  }
  callDev() {
  this.callNumber.callNumber("+919840180629", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
  sendMail() {
		this.emailComposer.isAvailable().then((available: boolean) =>{
		if(available) {
		//Now we know we can send
			}
	});

	let email = {
  to: 'pranash.rangan@toyota.com',
  cc: 'aravindh.chandaran@toyota.com',
  
  subject: 'Service Scheduler Support ',
  body: 'Need Technical support from CPS Support team',
  isHtml: true
};

// Send a text message using default options
this.emailComposer.open(email);
  }

}
