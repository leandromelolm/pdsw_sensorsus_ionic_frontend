import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class AvaliacaoService{

    constructor(public http:HttpClient){        
    }

    findByEstabelecimentoAvaliacao(estabelecimento_id : string){
        return this.http.get(`${API_CONFIG.baseUrl}/api/avaliacoes/estabelecimento/id/?id=${estabelecimento_id}`);
    }

}