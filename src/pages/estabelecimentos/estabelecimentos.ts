import { Component} from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { EstabelecimentoDTO } from '../../model/estabelecimentos.dto';
import { EstabelecimentoService } from '../../services/domain/estabelecimento.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-estabelecimentos',
  templateUrl: 'estabelecimentos.html',
})
export class EstabelecimentosPage {

  items: EstabelecimentoDTO[];

  status = false;
  statusLoginButton = true;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public navParams: NavParams,
    public estabelecimentService: EstabelecimentoService,
    public loadingCtrl: LoadingController,
    public storage: StorageService) {
  }

  pageHome(){
    this.navCtrl.setRoot('HomePage');
  }

  signinpage(){
    this.navCtrl.push('SignInPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  ionViewDidLoad() {
    let loader = this.presentLoading();
    this.estabelecimentService.findAll()
      .subscribe(response => {
        this.items = response;
        loader.dismiss();
      },
      error => {
        loader.dismiss();
      });
  }

  ionViewDidEnter() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.status = true;
      this.statusLoginButton = false;
    }
  }

  showAvaliacoes(estabelecimento_id: string) {
    this.navCtrl.push('EstabDetailPage', { estabelecimento_id: estabelecimento_id });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde... Buscando dados do servidor..."
    });
    loader.present();
    return loader;
  }

  showHome() {
    this.navCtrl.setRoot('HomePage');
  } 

  
// abrir menu lateral com arrastar
  ionViewWillEnter() {
    this.menu.swipeEnable(true);
  }
    
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}
