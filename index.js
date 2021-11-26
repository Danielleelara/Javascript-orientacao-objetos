class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    //#saldo = 0;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor<= 0)
            return;
        else
            this._saldo += valor; 
    }
}

const cliente1 = new Cliente();

const danielle = new ContaCorrente();
danielle.agencia = 1010;
danielle._saldo = 1000 ;
danielle.sacar(400);

const cliente2 = new Cliente();

cliente2.nome = 'Alice';
cliente2.cpf = 11122233344459;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado)

console.log(contaCorrenteRicardo);


