import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../model/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../model/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from "angular2-jwt";
import { AlertController} from "ionic-angular";

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(
        public http: HttpClient, 
        public storage: StorageService,
        public alertCtrl: AlertController) {
    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`, 
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue : string) {
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    logout() {
        this.storage.setLocalUser(null);
    }

    AlertLogoutConfirm(){
        let alert = this.alertCtrl.create({
          title: 'Fazer o Logout!',
          message: 'Deseja sair?',
          enableBackdropDismiss: false,
          buttons:[
            {
              text: 'Não',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Sim',
              handler: () =>{
                this.logout();                              
              }
            } 
          ]
        });
        alert.present();
      }

}