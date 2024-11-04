
//Função que recebe dois números como argumentos e retorna a multiplicação entre eles
function multiplica(primeiroNumero: number, segundoNumero: number): number{
    return primeiroNumero * segundoNumero
};

//Funçao que recebe um nome como argumento e retorna uma concatenação "'Olá' + nome"
function saudacao(nome: string):string{
    return 'Olá ' + nome
};

//Testes das funções
console.log(multiplica(5,5));
console.log(saudacao('Matheus'));