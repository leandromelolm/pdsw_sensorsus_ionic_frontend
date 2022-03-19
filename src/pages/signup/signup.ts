import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../services/domain/usuario.service';
import { ValidateConfirmPassword} from '../../validators/confirmPassword';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public usuarioService: UsuarioService,
    public alertCtrl: AlertController) {

    this.formGroup = this.formBuilder.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      nickname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required,Validators.minLength(3)]],
      senha_confirmar: ['', [Validators.required, Validators.minLength(3), ValidateConfirmPassword]]      
    });
  }

  signupUser() {
    console.log(this.formGroup.value); //Teste

    this.usuarioService.insert(this.formGroup.value)      
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {});
  }

  homePage(){
    this.navCtrl.setRoot('HomePage');
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

}
