import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController   } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { CredenciaisDTO } from '../../model/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public myapp: MyApp,
    public auth: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('EstabelecimentosPage');
      },
      error => {});  
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        window.location.reload();
        this.navCtrl.setRoot('EstabelecimentosPage');
        this.myapp.status = true;       
      },
      error => {});  
  }

  homePage(){
    this.navCtrl.setRoot('HomePage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

}
