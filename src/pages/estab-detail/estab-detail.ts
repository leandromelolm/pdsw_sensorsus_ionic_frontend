import { Component, Input } from '@angular/core';
import { IonicPage, Item, ItemSliding, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoDTO } from '../../model/avaliacao.dto';
import { EstabelecimentoDTO } from '../../model/estabelecimentos.dto';
import { AvaliacaoService } from '../../services/domain/avaliacao.service';
import { EstabelecimentoService } from '../../services/domain/estabelecimento.service';
import { AvaliarPage } from '../avaliar/avaliar';

@IonicPage()
@Component({
  selector: 'page-estab-detail',
  templateUrl: 'estab-detail.html',
})
export class EstabDetailPage {

  items : AvaliacaoDTO[];
  e : EstabelecimentoDTO;
  detail: string = "avaliacoes";  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public avaliacaoService: AvaliacaoService,
    public estabService: EstabelecimentoService,
    ) {
     
  }

  ionViewDidLoad() {
    let estabelecimento_id  = this.navParams.get('estabelecimento_id')
    this.avaliacaoService.findByEstabelecimentoAvaliacao(estabelecimento_id)
      .subscribe(response => {
        console.log(response['content']);
        this.items = response['content'];
        this.estabelecimentoEnderecoLoad();
      },
      error =>{
        console.log(error);
      });
  }
  estabelecimentoEnderecoLoad(){
    let estabelecimento_id  = this.navParams.get('estabelecimento_id')
    this.estabService.findById(estabelecimento_id)
    .subscribe(response =>{
      console.log(response);
      this.e = response;
      
    })    
  }
  avaliar(e: EstabelecimentoDTO){
    this.navCtrl.push('AvaliarPage',{estab : e});
  }
}



// {
//   "idAvaliacao": 4,
//   "estabelecimentoId": 2,
//   "nomeEstabelecimento": "Hospital Wakanda ",
//   "dataCriacao": "23/11/2021 14:10",
//   "descricao": "Foi bom o atendimento, mas poderia ser melhor",
//   "classificacao": 3.0,
//   "usuarioId": 4,
//   "apelido": "Dali4"
// }