import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { AvaliacaoDTO } from '../../model/avaliacao.dto';
import { UsuarioDTO } from '../../model/usuario.dto';
import { AvaliacaoService } from '../../services/domain/avaliacao.service';
import { UsuarioService } from '../../services/domain/usuario.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-my-ratings',
  templateUrl: 'my-ratings.html',
})
export class MyRatingsPage {

  items: AvaliacaoDTO[] = [];
  page: number = 0;
  linesPerPage: number = 5;

  usuario: UsuarioDTO;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public storage: StorageService,
    public usuarioService: UsuarioService,
    public avaliacaoService: AvaliacaoService,
    public actionSheetController: ActionSheetController) {
  }

  showAvaliacoes(estabelecimento_id: string) {
    this.navCtrl.push('EstabDetailPage', { estabelecimento_id: estabelecimento_id });
  }

  ionViewDidLoad() {
    this.UserLogged();
  }

  UserLogged() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.usuario = response;
          // console.log(this.usuario);  
          this.loadData();
        },
          error => { });
    }
  }

  loadData() {
    let loader = this.presentLoading();
    this.avaliacaoService.findByIDRatingUser(this.usuario.id, this.page, this.linesPerPage)
      .subscribe(response => {
        this.items = this.items.concat(response['content']);
        loader.dismiss();
        // console.log(this.page);
        // console.log(this.items);
      },
        error => {
          loader.dismiss();
        });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

  doRefresh(refresher) {
    this.page = 0;
    this.items = [];
    this.loadData();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.loadData();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }

  async openActionSheet(estabelecimento_id: string, avaliacao_id: string) {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Refazer avaliação',
        icon: 'refresh-circle',
        handler: () => {
          this.showAvaliacoes(estabelecimento_id);
        }
      }, {
        text: 'Excluir Avaliação',
        icon: 'trash',
        handler: () => {
          console.log('Deletar clicked');
          this.avaliacaoService.delete(avaliacao_id);
          this.navCtrl.setRoot('MyRatingsPage');
          this.loadData();
        }
      }, {
        text: 'Home',
        icon: 'home',
        handler: () => {
          this.navCtrl.setRoot('HomePage');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
