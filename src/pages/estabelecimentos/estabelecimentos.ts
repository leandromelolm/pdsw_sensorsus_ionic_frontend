import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstabelecimentoDTO } from '../../model/estabelecimentos.dto';
import { EstabelecimentoService } from '../../services/domain/estabelecimento.service';
import { AvaliacoesPage } from '../avaliacoes/avaliacoes';

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
  };

  showAvaliacoes(){
    this.navCtrl.push('AvaliacoesPage')
  }

}


// {
//   id: 1,
//   nome: "Hospital Springfield",
//   codCnes: 3323,
//   telefones: [],
//   endereco: {
//       id: 1,
//       logradouro: "Avenida Principal",
//       numero: 1000,
//       bairro: "Bairro",
//       complemento: "Proximo a Rodovia",
//       cep: "70999000",
//       cidade: {
//           id: 4,
//           nome: "Jaboatão",
//           estado: {
//               id: 1,
//               nome: "PERNAMBUCO"
//           }
//       }
//   }
// }