import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginRegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-registro',
  templateUrl: 'login-registro.html',
})
export class LoginRegistroPage {
  Registro:any;
  LoginRegistro:any;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.Registro = navParams.get('form');
  	this.LoginRegistro = "NUEVA CUENTA";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegistroPage');
  }

	loginUserRegistro(){
		console.log(this.Registro);
	}
}
