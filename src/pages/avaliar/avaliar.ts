import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstabelecimentoDTO } from '../../model/estabelecimentos.dto';
import { NovaAvaliacaoDTO } from '../../model/nova_avaliacao.dto';
import {ChangeDetectorRef } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { UsuarioService } from '../../services/domain/usuario.service';
import { UsuarioDTO } from '../../model/usuario.dto';

@IonicPage()
@Component({
  selector: 'page-avaliar',
  templateUrl: 'avaliar.html',
})
export class AvaliarPage {

  estabelecimento : EstabelecimentoDTO;
  eId : Number;
  usuario: UsuarioDTO;

  novaAvaliacao : NovaAvaliacaoDTO = {
    descricao: "",
    classificacao: null,  
    usuarioEmail:"",  
    estabelecimentoId: null
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private cdref: ChangeDetectorRef,
    public storage: StorageService,
    public usuarioService: UsuarioService) {  
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ionViewDidLoad() {
    let estab  = this.navParams.get('estab')
    console.log(estab)
    this.estabelecimento = estab;
    
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {      
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.usuario = response;          
        },
        error => {});
    }
  }

  avaliarEstab(){
    console.log(this.novaAvaliacao);
  }

  back() {
    this.navCtrl.pop();
  }

}

