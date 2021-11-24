class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();

cliente2.nome = 'Alice';
cliente2.cpf = 11122233344459;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo)

contaCorrenteRicardo.saldo = 1000;
console.log(contaCorrenteRicardo.saldo)

let valorSacado = 200;
if(contaCorrenteRicardo.saldo >= valorSacado){
    contaCorrenteRicardo.saldo -= valorSacado;
}


console.log(contaCorrenteRicardo.saldo)

console.log(cliente2)

