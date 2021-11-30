export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente");
        }
       
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;       
    }

    setCliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
//Método abstrato que serve apenas para ser subscrito

    sacar(valor){
       throw new Error("Você deve criar o método sacar!")
    }

    _sacar(valor, taxa){
        const valorSacado= taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        this._saldo += valor; 
    }

    transferir(valor, conta){
      
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }

}