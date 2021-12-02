import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Rodrigo', 10000, 12345678912);
const gerente = new Gerente('Danielle', 5000, 78945661237);

const estaLogado = SistemaAutenticacao.login(diretor, '123123123');

console.log(estaLogado);