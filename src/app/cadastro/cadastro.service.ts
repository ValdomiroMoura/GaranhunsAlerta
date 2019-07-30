import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cadastro } from './cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  insert(cad: Cadastro){
    throw new Error("Metodo não implementado.");
  }

  private cadastroSource = new BehaviorSubject({
    cad: null, key: ''
  });

  constructor() { }

  changeCadastro(cad: Cadastro, key: string){
    this.cadastroSource.next({cad: cad, key: key})
  }
}
