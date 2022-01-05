import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstabelecimentoDTO } from '../../model/estabelecimentos.dto';
import { EstabelecimentoService } from '../../services/domain/estabelecimento.service';

@IonicPage()
@Component({
  selector: 'page-estabelecimentos',
  templateUrl: 'estabelecimentos.html',
})
export class EstabelecimentosPage {

  items: EstabelecimentoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public estabelecimentService: EstabelecimentoService) {
  }

  ionViewDidLoad() {
    this.estabelecimentService.findAll()
      .subscribe(response =>{
        console.log(response);
        this.items = response;
      },
      error => {
        console.log(error);
      })

  }

}
