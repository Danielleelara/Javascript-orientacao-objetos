import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Rodrigo', 10000, 12345678912);
diretor.cadastrarSenha('123');
const gerente = new Gerente('Danielle', 5000, 78945661237);
gerente.cadastrarSenha('456')

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '456');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123');
const cliente = new Cliente ('Lais', 789456136, '456');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456');


console.log(clienteEstaLogado);
console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(diretor);