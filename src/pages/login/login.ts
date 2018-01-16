import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginRegistroPage } from '../login-registro/login-registro';
import { LoginOlvidePasswordPage } from '../login-olvide-password/login-olvide-password';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //myForm: FormGroup;


  constructor( 
  	public navCtrl: NavController, 
  	public navParams: NavParams
  ) {
    /*this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });  */

    
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
  }

  goToSignup(){
      this.navCtrl.push(LoginRegistroPage);
  }

  goToResetPassword(){
      this.navCtrl.push(LoginOlvidePasswordPage);  
  }
}
