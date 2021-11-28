import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


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
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente()
conta2.cliente = cliente2;
conta2.agencia = 102;


let valor = 200;
contaCorrenteRicardo.transferir(valor,conta2)
console.log('valor: ', valor);
console.log(conta2);


