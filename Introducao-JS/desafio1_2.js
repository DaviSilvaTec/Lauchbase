/* Desafio 1-2: Lidando com objetos e vetores
“Não basta saber, é preferível saber aplicar. Não é o bastante querer,
 é preciso saber querer.”
Made by Rocketseat License

rocket Sobre o desafio
Desafios para fortalecer alguns conceitos, entre eles:

Objetos;
Vetores.

1 - Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260
Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:

const usuario = {
  nome: "Diego",
  empresa: {
    nome: "Rocketseat"
  }
};
Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:

A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
Obs. Para imprimir em tela utilize o formato de template strings, por exemplo

console.log(`O nome do usuário é ${usuario.nome}`);

*/

const empresa = [
    {
    Nome: "Rocketseat",
    Cor: "Roxo",
    Foco: "Programação",
    Endereço: [
        {
            Rua: "Rua Guilherme Gembala",
            numero: 260
        }
    ]
    }
]

console.log(`\n A empresa Rocketseat está localizada em ${empresa[0].Endereço[0].Rua} número ${empresa[0].Endereço[0].numero} \n`);



/* 2 - Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em 
Desktop  */

const programadores = [
    {Nome: "Joel", Idade: "29", tecnologia: "C++", especialidade: "Desktop"},
    {Nome: "Juliano", Idade: "18", tecnologia: "JavaScript", especialidade: "BackEnd"},
    {Nome: "Fulano", Idade: "21", tecnologia: "ReactNativ", especialidade: "Web/Mobile"},
]

for (let programador of programadores){
    console.log(`O usuário ${programador.Nome} tem ${programador.Idade} anos e usa a tecnologia ${programador.tecnologia} com especialidade em ${programador.especialidade}\n`);
}