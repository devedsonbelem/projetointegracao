import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user!: Users;

  constructor(private service: UsersService) {
    this.user = new Users();
   }

  ngOnInit(): void {
  }

  public gravar(){
    this.service.create(this.user).subscribe(res => {
      console.log('Usuario gravado com sucesso', this.user);
      this.user = new Users(); //limpa o fomrulario
    })
  }

}
