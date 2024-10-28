"use strict";

function Aluno(nome, nota) {
  this.nome = nome, this.nota = nota;
}
;
var aluno1 = new Aluno('Paulo', 10);
var aluno2 = new Aluno('Ana', 6);
var aluno3 = new Aluno('Breno', 3);
var aluno4 = new Aluno('Bruna', 5);
var retornaAlunosPassados = function retornaAlunosPassados(alunoAtual) {
  if (alunoAtual.nota >= 6) {
    return alunoAtual;
  }
  ;
};
var alunos = [aluno1, aluno2, aluno3, aluno4];
var alunosPassados = alunos.filter(retornaAlunosPassados);
for (var i = 0; i < alunosPassados.length; i += 1) {
  console.log("Aluno: ".concat(alunosPassados[i].nome));
  console.log("Nota: ".concat(alunosPassados[i].nota));
  console.log("Condi\xE7\xE3o: APROVADO");
  console.log("-------------------------------------");
}