import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { EstabelecimentoDTO } from "../../model/estabelecimentos.dto";

@Injectable()
export class AvaliacaoService{

    constructor(public http:HttpClient){        
    }

    findByEstabelecimentoAvaliacao(estabelecimento_id : string){
        return this.http.get(`${API_CONFIG.baseUrl}/api/avaliacoes/estabelecimento/id/?id=${estabelecimento_id}`);
    }

    findById(estabelecimento_id : string) {
        return this.http.get<EstabelecimentoDTO>(`${API_CONFIG.baseUrl}/estabelecimentos/${estabelecimento_id}`);
      }
}