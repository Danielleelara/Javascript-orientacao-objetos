export class ContaCorrente{
    agencia;
    cliente;

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
    transferir(valor, conta){
        conta.cidade = 'São Paulo';
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}

