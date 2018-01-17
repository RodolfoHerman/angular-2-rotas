import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class AlunosService {

  private alunos: any[] =[
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
  ];

  getAlunos() {
    return this.alunos;
  }

  getAlunoId(id: number) {
    // this.alunos.forEach(aluno => {
    //   if(aluno.id == id) {
    //     return aluno;
    //   }
    // });
    for (let i = 0; i < this.alunos.length; i++) {
      
      let aluno = this.alunos[i];

      if(aluno.id == id) {
        return aluno;
      }
      
    }

    return null;
  }

  constructor() { }

}
