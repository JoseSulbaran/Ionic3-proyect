import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginOlvidePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-olvide-password',
  templateUrl: 'login-olvide-password.html',
})
export class LoginOlvidePasswordPage {
  OlvidePassword:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.OlvidePassword = "RECUPERAR PASSWORD";  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginOlvidePasswordPage');
  }




}
