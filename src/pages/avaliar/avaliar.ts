import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstabelecimentoDTO } from '../../model/estabelecimentos.dto';
import { NovaAvaliacaoDTO } from '../../model/nova_avaliacao.dto';
import {ChangeDetectorRef } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-avaliar',
  templateUrl: 'avaliar.html',
})
export class AvaliarPage {

  estabelecimento : EstabelecimentoDTO;

  eId : Number;

  novaAvaliacao : NovaAvaliacaoDTO = {
    descricao: "",
    classificacao: null,  
    usuarioEmail:"",  
    estabelecimentoId: null
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private cdref: ChangeDetectorRef) {  
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ionViewDidLoad() {
    let estab  = this.navParams.get('estab')
    console.log(estab)
    this.estabelecimento = estab;
  }

  avaliarEstab(){
    console.log(this.novaAvaliacao);
  }

  back() {
    this.navCtrl.pop();
  }

}

