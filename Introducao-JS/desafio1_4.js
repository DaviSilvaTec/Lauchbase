/* Desafio 1-4: Aplicação: Operações bancárias
“Não compare o seu bastidor com o palco do outro!”
Made by Rocketseat License

Sobre o desafio   |    Entrega   |    Licença

rocket Sobre o desafio
Desafios para fortalecer alguns conceitos, entre eles:

Booleanos;
Organização;
Padronização;
Escrita.
Intro

Crie um programa para realizar operações bancárias na conta de um usuário.





/* 1 - 
Comece criando um objeto com o nome do usuário, suas transações e saldo.

As transações (transactions) devem iniciar como um array vazio [] 
e o saldo (balance) em 0 (zero).

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
}; */

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

/* 2 - 
 Adicionar transações
Crie uma função createTransaction para adicionar uma nova transação no
 array de transações de um usuário, essa função deve receber como 
 parâmetro um objeto de transação que tem o seguinte formato:

{
  type: 'credit',
  value: 50.5
}
O type pode ser credit para créditos e debit para débitos da conta do
 usuário. 
 Quanto uma transação for do tipo credit ela deve também somar o valor do 
crédito no saldo (balance) do usuário.

Se for uma transação do tipo debit ela deve subtrair o valor do débito no 
saldo (balance) do usuário.

Dica.: Você pode usar o método user.transactions.push(transaction) para 
adicionar um novo item no array de transações.

 */

function createTransaction(transaction){
  user.transactions.push(transaction);
  if(transaction.type=="debit"){
    user.balance=user.balance-transaction.value;
  }else{
    user.balance=user.balance+transaction.value;
  }
}

/* 3 - 
Relatórios
Crie uma função chamada getHigherTransactionByType que recebe como 
parâmetro o tipo de transação credit/debit, percorre as transações do 
usuário e retorna o objeto da transação de higher valor com aquele tipo:
getHigherTransactionByType("credit"); // { type: 'credit', value: 120 } */



function getHigherTransactionByType(tipo){
  higher=0;
  t_high_tran={};
  for(let i=0;i<user.transactions.length;i++){
      if (user.transactions[i].type==tipo){ 
        if (user.transactions[i].value>higher){
          higher=user.transactions[i].value;  
        }
      }
  }
  t_high_tran.type=tipo;
  t_high_tran.value=higher;
  return t_high_tran;
}

/* 4 -  
Crie uma função chamada getAverageTransactionValue que retorna o valor 
médio das transações de um usuário independente do seu tipo:
getAverageTransactionValue(); // 83.3


 */

function getAverageTransactionValue(){
  higher=0;
  for(let i=0;i<user.transactions.length;i++){
  
    if (user.transactions[i].value>higher){
      higher=user.transactions[i].value;  
    }
  }
  return higher;
}

/*  5 - 
Crie uma função chamada getTransactionsCount que retorna o número 
de transações de cada tipo credit/debit, o retorno da função deve ser 
um objeto e seguir exatamente como o modelo apresentado abaixo:

getTransactionsCount(); // { credit: 5, debit: 3 }
Exemplo de resultado final do projeto:
createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 } */ 


function getTransactionsCount(){
  transaction_cont={};
  credit=0;
  debit=0;
  for(let i=0;i<user.transactions.length;i++){
   
    if (user.transactions[i].type=="credit"){
      credit=credit+1; 
    }else{

      debit=debit+1;
    }
  }
  transaction_cont.credit=`${credit}`;
  transaction_cont.debit=`${debit}`;
  return transaction_cont;
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

///////// Chamada da função de cada exercicio ///////////

//console.log(user.balance);
// console.log(getAverageTransactionValue());
// console.log(getHigherTransactionByType("debit"));
// console.log(getHigherTransactionByType("credit"));
console.log(getTransactionsCount());


