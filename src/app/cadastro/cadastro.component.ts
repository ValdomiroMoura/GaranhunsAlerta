import { Component, OnInit } from '@angular/core';
import { Cadastro } from './cadastro';
import { CadastroDataService } from './cadastro-data.service'
import { CadastroService } from './cadastro.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: Cadastro;
  key: string = '';

  constructor(private db: AngularFireDatabase,
    private cadastroDataService: CadastroDataService,
    private cadastroService: CadastroService) {
    }

  insert(cad: Cadastro){
    this.db.list('cadastro').push(cad)
    .then((result: any) => {
      console.log(result.key);
    });
  }

  ngOnInit() {
    this.cadastro = new Cadastro();
  }

  onSubmit(){
    if(this.key){

    }else{
      this.insert(this.cadastro);
    }
    this.cadastro = new Cadastro;
  }

}
