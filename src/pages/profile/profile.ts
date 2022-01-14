import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioDTO } from '../../model/usuario.dto';
import { UsuarioService } from '../../services/domain/usuario.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  usuario: UsuarioDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public usuarioService: UsuarioService,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {      
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.usuario = response;          
        },
        error => {});   
    }
    else{
      this.navCtrl.setRoot('EstabelecimentosPage');
      this.AlertNoLogin();
    }
  }

  AlertNoLogin(){
    let alert = this.alertCtrl.create({
      title: 'Precisa fazer o Login!',
      message: 'Faça o login ou cadastre-se!',
      enableBackdropDismiss: false,
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () =>{
            this.navCtrl.setRoot('HomePage');
          }
        } 
      ]
    });
    alert.present();
  }

}
