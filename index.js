import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente('Ricardo', 111122233344);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);


const contaPoupanca = new ContaPoupanca(50, cliente1, 101 );
contaPoupanca.sacar(10);

console.log(contaPoupanca)
console.log(contaCorrenteRicardo)
