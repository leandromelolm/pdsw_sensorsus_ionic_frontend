import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstabelecimentoDTO } from '../../model/estabelecimentos.dto';
import { NovaAvaliacaoDTO } from '../../model/nova_avaliacao.dto';
import { ChangeDetectorRef } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { UsuarioService } from '../../services/domain/usuario.service';
import { UsuarioDTO } from '../../model/usuario.dto';
import { AvaliacaoService } from '../../services/domain/avaliacao.service';
import { environment } from '../../environment/environment';

@IonicPage()
@Component({
  selector: 'page-avaliar',
  templateUrl: 'avaliar.html',
})
export class AvaliarPage {

  isCaptchaValid = false;

  captcha: string;

  estabelecimento: EstabelecimentoDTO;
  eId: Number;
  usuario: UsuarioDTO;

  novaAvaliacao: NovaAvaliacaoDTO = {
    descricao: "",
    classificacao: null,
    usuarioEmail: "",
    estabelecimentoId: null
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cdref: ChangeDetectorRef,
    public storage: StorageService,
    public usuarioService: UsuarioService,
    public avaliacaoService: AvaliacaoService,
    public alertCtrl: AlertController) {

    this.captcha = '';
  }

  get siteKey() {
    return environment.recaptcha.siteKey;
  }

  captchaResolved(captchaResponse: string, ev: any) {
    console.log("Captha resolvido");
    this.isCaptchaValid = true;

    this.captcha = captchaResponse;
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ionViewDidLoad() {
    let estab = this.navParams.get('estab')
    console.log(estab)
    this.estabelecimento = estab;

    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.usuario = response;
        },
          error => { });
    }
  }

  avaliarEstab() {
    console.log(this.novaAvaliacao);
    // this.avaliacaoService.insert(this.novaAvaliacao)
    this.avaliacaoService.update(this.novaAvaliacao)
      .subscribe(response => {
        this.back();
        this.showInsertOk(this.novaAvaliacao.estabelecimentoId);
      },
        error => { });
  }

  back() {
    this.navCtrl.pop();
  }

  showInsertOk(estabelecimento_id: number) {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Avaliação cadastrada com sucesso!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            // this.navCtrl.pop();
            this.navCtrl.setRoot('EstabDetailPage', { estabelecimento_id: estabelecimento_id });
          }
        }
      ]
    });
    alert.present();
  }

}
