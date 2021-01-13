/* Desafio 1-3: Funções e estruturas de repetição
“Quer você acredite que consiga fazer uma coisa ou não, você está certo.”
Made by Rocketseat License

Sobre o desafio   |    Entrega   |    Licença

rocket Sobre o desafio
Desafios para fortalecer alguns conceitos, entre eles:

Funções e métodos;
Estruturas de repetição;
Escopos.


/* 

1-Usuários e tecnologias

Crie um programa que armazena um array de usuários (objetos), cada usuário
 tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];
Percorra a lista de usuários com uma estrutura de repetição imprimindo
 em tela as informações dos usuários:

Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js
 */

function exercicio1(){
    const usuarios = [
        {nome : "joão", tecnologias:["HTML", "CSS","node.js","C#"]},
        {nome : "Daniel", tecnologias:["JavaScript", "CSS","basic"]},
        {nome : "Josiane", tecnologias:["HTML", "Node.js","basic"]},
    
    ]
    
    //console.table(usuarios);

    function define_tecnologias_do_usuario(usuario){
        /* Este bloco ficou confuso e complicado, devo refatola-lo no futuro qnd
        conseguir pensar em uma melhor solução. 
        Essencialmente este bloco concatena as tecnologias que o usuario domina
        de forma a separa-lás por virgula e caso seja o penultimo item ele separa
        com a letra "E".
        */
        let tecnologias="";
        for (let i=0; i<usuario.tecnologias.length;i++){
            if (i==0){tecnologias=usuario.tecnologias[i];}
            if (i!=0 && i!=(usuario.tecnologias.length-1)){
                tecnologias=tecnologias +", "+ usuario.tecnologias[i];
                //console.log(i);
           }else{
            if (i!=0){tecnologias=tecnologias +" e "+ usuario.tecnologias[i]+".";}  
           }     
        }
        return tecnologias;
    }
    
    
    
    function exibe_tecnologias_do_usuario(){
    
        for (let usuario of usuarios){
            
            console.log(`${usuario.nome} trabalha com as Tecnologias ${define_tecnologias_do_usuario(usuario)}\n`)
    
        }
    }
    
    
    exibe_tecnologias_do_usuario();
    
}

/* 2-Busca por tecnologia
Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna SE 
o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

Por exemplo:

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele 
  trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
}
Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha
 com CSS utilizando a função construída acima, se SIM, imprima em tela as
 informações do usuário:

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
  }
} */



function exercicio2(){

   
   
    function define_tecnologias_do_usuario(usuario){
        /* Este bloco ficou confuso e complicado, devo refatola-lo no futuro qnd
        conseguir pensar em uma melhor solução. 
        Essencialmente este bloco concatena as tecnologias que o usuario domina
        de forma a separa-lás por virgula e caso seja o penultimo item ele separa
        com a letra "E".
        */
        let tecnologias="";
        for (let i=0; i<usuario.tecnologias.length;i++){
            if (i==0){tecnologias=usuario.tecnologias[i];}
            if (i!=0 && i!=(usuario.tecnologias.length-1)){
                tecnologias=tecnologias +", "+ usuario.tecnologias[i];
                //console.log(i);
           }else{
            if (i!=0){tecnologias=tecnologias +" e "+ usuario.tecnologias[i]+".";}  
           }     
        }
        return tecnologias;
    }
    

const usuarios =[
    {name : "joão", tecnologias:["HTML","CSS","node","C#"]},
    {name: "Daniel", tecnologias:["JavaScript", "CSS","basic"]},
    {name:"Josiane", tecnologias:["JavaScript", "C#","basic"]}
]

function checaSeUsuarioUsaCSS(usuario){
    for(let i=0; i<=usuario.tecnologias.length;i++){    
        if (usuario.tecnologias[i]=="CSS"){
            return true; 
        }     
    }
    return false;
}


function checa_CSS(){
    for (let usuario of usuarios){
        UsuarioTrabalhaComCSS=(checaSeUsuarioUsaCSS(usuario));
        if (UsuarioTrabalhaComCSS){
            console.log(`\n${usuario.name} trabalha com ${define_tecnologias_do_usuario(usuario)}`); 
        }
    
        }
}

checa_CSS();
}


/*

3 - Soma de despesas e receitas
Crie um programa que calcula a soma de receitas e despesas de usuários
 e no fim retorna o saldo (receitas - despesas).

Utilize o array de usuários abaixo:

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];
Percorra o array de usuários e para cada usuário chame uma função chamada 
calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

function calculaSaldo(receitas, despesas) {}
Crie uma segunda função que recebe como parâmetro um array de números e 
retorna a soma deles e use-a para calcular a soma de receitas e despesas
 dentro da função calculaSaldo:

function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
}
A função calculaSaldo deve utilizar a função somaNumeros para calcular 
a soma de receitas e despesas e no fim retornar o saldo do usuário, ou 
seja receitas - despesas.

No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo 
é POSITIVO ou NEGATIVO:

Fulano possui saldo POSITIVO de 43.3
Sicrano possui saldo NEGATIVO de -90.3 */

function exercicio3(){
    const correntistas = [
        {
          nome: "Salvio",
          receitas: [115.3, 48.7, 98.3, 14.5],
          despesas: [85.3, 13.5, 19.9]
        },
        {
          nome: "Marcio",
          receitas: [24.6, 214.3, 45.3],
          despesas: [185.3, 12.1, 120.0]
        },
        {
          nome: "Lucia",
          receitas: [9.8, 120.3, 340.2, 45.3],
          despesas: [450.2, 29.9]
        }
      ];
    
      
    
      function totalisa_numeros(numeros){
        total=0;
        for(let i=0;i<numeros.length;i++){
            total=total+ numeros[i];
        }
        return total;
      }
    
      function totalisa_saldos(receitas,despesas){
        receitas1=0;
        despesas1=0;
        receitas1=totalisa_numeros(receitas);
        despesas1=totalisa_numeros(despesas);
    
        return receitas1 - despesas1;
      }
    
      function analisa1(){
    
        for (let correntista of correntistas){
            saldo=totalisa_saldos(correntista.receitas,correntista.despesas);
            if (saldo<0){
                console.log(`\n${correntista.nome} tem um saldo Negativo de ${saldo}`)
            }else {
              console.log(`\n${correntista.nome} tem um saldo Positivo de ${saldo}`)
            }
        }
      }
    
    
    
    analisa1();
}


/////// Executa Exercicios ///////////////,

exercicio1();
exercicio2();
exercicio3();

