/* Desafio 1-1: Primeiros passos com JS
“Querer vencer significa já ter percorrido metade do caminho.”
Made by Rocketseat License

Sobre o desafio   |    Entrega   |    Licença

rocket Sobre o desafio
Desafios para fortalecer alguns conceitos, entre eles:

Variáveis;
Condicionais;
Operadores.
Cálculo de IMC


1 - Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:

const nome = "Carlos";
const peso = 84;
const altura = 1.88;
A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:

peso / (altura * altura);
Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso;
Cálculo de aposentadoria

 */

const nome = "Davi";
const peso = 68;
const altura = 1.69;

const imc = (peso/(altura*altura));

if (imc >= 30){
    console.log(`${nome} seu IMC é de ${imc} Voce está acima do peso`)
} else if(imc <=29.9){
    console.log(`${nome} seu IMC é de ${imc} Voce não está acima do peso`)
}

/* 
2 - Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
Dica: Você pode unir duas condições, veja o exemplo abaixo

if (condicao1) {
  if (condicao2) {
    // Condição 1 e 2 passaram
  } else {
    // Condição 1 passou, porém condição 2 não passou
  }
} else {
  // Condição 1 não passou
}
 */

const idosos=[
    {
        nome : "Silvana",
        sexo : "F",
        idade : 60,
        contribuicao : 26    
    },
    {
        nome : "Joel",
        sexo : "M",
        idade : 70,
        contribuicao : 26    
    }
    
]
for (let idoso of idosos){
    if (idoso.sexo=="M"){
        if(idoso.idade+idoso.contribuicao>=95){
            console.log(`${idoso.nome} Voce já pode se Aposentar!!`);
        }else{
            console.log(`${idoso.nome} Voce ainda não pode se Aposentar faltam ${95-(idoso.contribuicao+idoso.idade)} anos!!`);
        }
    }else{
        if(idoso.idade+idoso.contribuicao>=85){
            console.log(`${idoso.nome} Voce já pode se Aposentar!!`);
        }else{
            console.log(`${idoso.nome} Voce ainda não pode se Aposentar faltam ${85-(idoso.contribuicao+idoso.idade)} anos!!`);
        }
    }
}