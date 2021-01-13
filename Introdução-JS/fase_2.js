
/** 
AULAS DE INTRODUÇÃO
AULA - Iniciando com a programação WEB.
AULA - Iniciando No java Script.
AULA - Comentários Strings e Numbers

**/ 

function aulas_introducao(){

    //Criar um programa que calula a média 
    // das Notas dos Alunos e envia
    // mensagem do calculo da média
    
    const Aluno1 ="Joelton";
    const NotaAluno1=9.8;
    
    const Aluno2='Diego';
    const NotaAluno2=2;
    
    const Aluno3="Fulano";
    const NotaAluno3=2;
    
    console.log(Aluno1,NotaAluno1);
    console.log(Aluno2,NotaAluno2);
    console.log(Aluno3,NotaAluno3);
    
    }
    
    /** AULA - Fazendo Calculo com Java Script. **/
    
    function aula_calculos(){
    
    
    const Aluno1 ="Joelton";
    const NotaAluno1=9.8;
    
    const Aluno2='Diego';
    const NotaAluno2=2;
    
    const Aluno3="Fulano";
    const NotaAluno3=2;
    
    
    
    const total_notas_alunos=(NotaAluno3+NotaAluno2+NotaAluno1);
    const media=(total_notas_alunos/3);
    
    console.log(total_notas_alunos);
    console.log(media);
    }
    
    /** AULA - CONDICIONAIS **/
    
    function aula_condicinais(){
    
    var media_minima=7;
    
    const Aluno1 ="Joelton";
    const NotaAluno1=9.8;
    
    const Aluno2='Diego';
    const NotaAluno2=7;
    
    const Aluno3="Fulano";
    const NotaAluno3=8;
    
    
    
    const total_notas_alunos=(NotaAluno3+NotaAluno2+NotaAluno1);
    const media_alunos=(total_notas_alunos/3);
    
    if (media_alunos> media_minima){
    console.log(`A média foi de ${media_alunos}, Parabéns para todos`);
    }else{
    console.log( `A media foi Menor que ${media_minima}, Todos precisam se esforçar mais!!`);
    }
    
    }
    
    function operadores_comparacao(){
    
    /* #################################################################
    OPERADORES DE COMPARAÇÃO
    > Maior
    < Menor
    >= Maior ou Igual
    <= Menor ou Igual
    == Igual á
    === Igual e do mesmo tipo
    != Diferente de 
    !== Diferente, inclusive do tipo 
    
    #################################################################### */
    
    /** Maoir, Menor **/ 
    
    console.log(5>4); //true
    console.log(5<4); //false
    console.log(5>=4); //true
    console.log(5<=4); //true
    
    /** Igualdade **/
    
    console.log(4=="4"); //true
    console.log(4==="4"); //false
    console.log(4!="4"); //true
    console.log(4!=="4"); //false
    
    }
    
    function operadores_aritmedicos(){
    
    /* #################################################################
    OPERADORES Aritmédicos
    
    * Multiplicação
    / Divisão
    % Resto da Divisão
    + Adição
    - Subtração
    
    #################################################################### */
    
    console.log(2 * 2); // 4
    console.log(2 / 2); // 1
    console.log(2 % 1.5); // 0.5
    console.log(2 + 2); // 4
    console.log(2 - 2); // 0
    }
    
    function desafio1(){
    
    // DESAFIO 1
    // Verificar se a pessoa tem mais de 18 anos.
    // Se for maior Deixar entrar
    //Se for Menor Bloquear a entrada
    // Se tiver 17 anos pedir para voltar quando completar 18.
    
    const idade = 17;
    if (idade >= 18){ 
    console.log("Deixar entrar!!");
    }else{ 
    console.log("Bloquear Entrada");
    if(idade == 17){ 
    console.log("Volte quando completar 18!!");
    }
    }
    }
    
    function operadores_logicos(){
    
    /* #################################################################
    OPERADORES LÓGICOS
    
    && "E" As duas condições devem ser verdadeiras para que a 
    condição final seja verdadeira
    
    || "OU" Umas das condições devem ser verdadeiras para que a
    condição final seja verdadeira.
    
    ! "NÃO" Nega a condição
    
    #################################################################### */
    
    console.log(5 =="5" && 6 =="6"); // True
    console.log(5 =="4" && 6 =="6"); // false
    
    console.log(5 =="5" || 6 =="6"); // True
    console.log(5 =="4" || 6 =="6"); // true
    
    console.log( !(6 =="7")); // True
    console.log(!(6 =="6")); // false
    
    const idade = 17;
    
    // Verificar se a pessoa tem mais de 18 anos.
    
    if (!(idade >= 18) || (idade == 17)){ //Se for Menor Bloquear a entrada
    console.log("Bloquear Entrada");
    if(idade == 17){ // Se tiver 17 anos pedir para voltar quando completar 18.
    console.log("Volte quando completar 18!!");
    }
    
    }else{ 
    console.log("Deixar entrar!!");// Se for maior Deixar entrar
    }
    
    }
    
    /** - OBJETOS - Deve ser declarado com chaves e dentro das chaves
    separados por virgulas declaramos as propriedades deste objeto podendo
    ser nomes, valores funções, etc. Para esta propriedades damos um nome 
    e um valor, sendo estes separados por dois pontos. 
    exemplo cont aluno={ nome: "davi", Idade: 39}
    
    **/
    // Criar um programa que calula a média 
    // das Notas dos Alunos e envia
    // mensagem do calculo da média
    
    function introdução_obejto(){
    
    const Aluno= {
    nome: "Davi",
    nota : 9.8
    }
    console.log(Aluno);
    }
    
    /** -VETORES ou ARRAYS - Vetores podem ser usados para agrupar diversos 
    objetos.
    Vetores devem ser Declarados com colchetes e dentro destes 
    colchetes podemos declarar diversos objetos separados por virgula.
    exemplo: alunos=[{nome: "Davi", idade: 39},{nome: "joão", idade: 18}] 
    O acesso ao objeto é feito referenciando a sua posição dentro do vetor 
    Exemplo:
    console.log(alunos[0].nome) Imprime o Nome "Davi", pois pedidos a propriedade nome
    do objeto armazenado na posição 0 do ARRAY
    **/
    
    function introdução_vetor(){
    
    const Alunos= [
    {
    nome: "Davi",
    nota : 9.8
    },
    {
    nome: "Diego",
    nota : 2
    },
    {
    nome: "Fulano",
    nota : 10
    }
    ]
    const total_notas_alunos=(Alunos[0].nota+Alunos[1].nota+Alunos[2].nota);
    const media=(total_notas_alunos/3);
    
    console.log(`\nNota média dos Alunos: ${media}\n`);
    
    console.log(Alunos);
    console.log(Alunos[1]);
    
    }
    
    /** - FUNÇÕES E MÉTODOS - Função é um trecho de código que pode ser 
    chamado para ser executado através de um nome específico que atribuímos 
    a ele.
    Um função deve ser declarada com a palavra function e logo após informado 
    o nome que daremos a essa função, seguindo de parênteses e depois chaves,
    dentro dos parenteses podemos informar alguns parâmetros que esta função 
    pode receber, e dentro das chaves o bloco de código que será executado 
    quando esta função for chamada, para chamarmos a função usados seu nome
    seguido dos parenteses e os parâmetros dentro das chaves, caso este função
    receba parâmetros.
    
    exemplo 1: - Função sem parâmetros.
    
    " function diga_olá(){ console.log("olá")};
    diga_olá();"
    
    exemplo 2: - Função com parâmetros.
    
    " function diga_olá(nome){ console.log(`\n olá ${nome} !\n`)};
    diga_olá("Gabriel");"
    **/
    
    function funcoes_e_metodos(){
    
    const AlunosTurmaA= [
    {
    nome: "Davi",
    nota : 9.8
    },
    {
    nome: "Diego",
    nota : 2
    },
    {
    nome: "Fulano",
    nota : 10
    }
    ]
    const AlunosTurmaB= [
    {
    nome: "Daniel",
    nota : 3.8
    },
    {
    nome: "Ricardo",
    nota : 5
    },
    {
    nome: "Fabricio",
    nota : 7
    }
    ]
    
    function calcula_media(Alunos){
    return (Alunos[0].nota+Alunos[1].nota+Alunos[2].nota)/3;
    }
    
    function mensagem(media,turma){
    if (media > 7){
    console.log(`A média da turma ${turma} foi ${media}, Parabéns para todos`);
    }else{
    console.log( `A media da turma ${turma} foi ${media}, Todos precisam se esforçar mais!!`);
    }
    }
    
    const Media_TurmaA = (calcula_media(AlunosTurmaA));
    const Media_TurmaB = (calcula_media(AlunosTurmaB));
    
    mensagem(Media_TurmaA,"A");
    mensagem(Media_TurmaB,"B");
    }
    
    /** ESCOPO - chamamos de escopo o espaço "virtual" de um trecho de código
    delimitado por uma função. Podemos ter um escopo dentro de outro escopo,
    sendo que as variáveis declaradas dentro do scopo "filho" não ficam 
    acessíveis para o escopo Pai, más as variáveis do escopo Pai ficam 
    acessíveis para o escopo filho.
    Desta forma, quando precisamos que uma variável de um escopo interno 
    fique acessível para o escopo externo é preciso armazenarmos seu valores
    em uma variável do escopo anterior.
    
    Quando chamamos uma função que gera um dado que iremos usar fora dela
    temos duas opções para externar este dado, uma seria armazená-lo em uma
    variável "Global" que será visível para todos os escopos, ou retornar esse
    valor como saída da função com o comando "return", assim podemos chamar
    a função e utilizar o valor que ela retornar.
    
    Sobre o uso do "return" é preciso salientar que este dentro de uma Função
    serve também como um ponto de saída, ou seja, quando esta instrução for 
    executada ela irá finalizar a execução desta função, retornando o valor 
    informado para o processo anterior, sendo assim é preciso atenção em que
    ponto ele deve ser usado para não finalizar um loop ou função no momento 
    errado.
    **/
    
    /** BOLEANOS OU boolean - São tipos de variáveis que guardam somente valores "true" 
    ou "false", desta forma se torna útil para atribuir valores "binários" 
    como ligado ou desligado, sim ou não etc.
    
    Exemplo: 
    
    interruptores = {Sala: true, cozinha: false, Quarto: true, Garagem: false};
    if(interruptores.Sala==true){
    console.log("A luz da Sala esta Ligada");
    }else{
    console.log("A luz da Sala esta Desligada");
    }
    **/
    
    
    function final_boolean_e_Objetos(){
    
    const AlunosTurmaA= [
    {
    nome: "Sabrina",
    nota : 9.8
    },
    {
    nome: "Davi",
    nota : 9.8
    },
    {
    nome: "Diego",
    nota : 2
    },
    {
    nome: "Fulano",
    nota : 10
    }
    ]
    const AlunosTurmaB= [
    {
    nome: "Gutomida",
    nota : 8
    },
    {
    nome: "Elenildo",
    nota : 3.8
    },
    {
    nome: "jofatana",
    nota : 3.8
    },
    {
    nome: "Daniel",
    nota : 3.8
    },
    {
    nome: "Ricardo",
    nota : 8
    },
    {
    nome: "Fabricio",
    nota : 10
    },
    {
    nome: "Bruno",
    nota : 10
    }
    ]
    function calcula_media(Alunos){
    let soma=0;
    for (let i=0; i < Alunos.length; i++){
    soma=soma+Alunos[i].nota;
    //console.log(i);
    }
    return soma/Alunos.length; 
    }
    
    function mensagem(media,turma){
    if (media > 7){
    console.log(`A média da turma ${turma} foi ${media}, Parabéns para todos`);
    }else{
    console.log( `A media da turma ${turma} foi ${media}, Todos precisam se esforçar mais!!`);
    }
    }
    function MarcarComoReprovado(aluno){
    if (aluno.nota < 7){
    aluno.reprovado=true;
    }
    }
    function EnviaMensagemReprovado(aluno){
    if(aluno.reprovado){
    console.log(`O Aluno ${aluno.nome} Foi Reprovado!!`)
    }
    }
    function AlunosReprovados(alunos){
    for (let aluno of alunos){
    aluno.reprovado=false;
    MarcarComoReprovado(aluno);
    EnviaMensagemReprovado(aluno);
    }
    }
    const Media_TurmaA = (calcula_media(AlunosTurmaA));
    const Media_TurmaB = (calcula_media(AlunosTurmaB));
    mensagem(Media_TurmaA,"A");
    mensagem(Media_TurmaB,"B");
    
    AlunosReprovados(AlunosTurmaA);
    AlunosReprovados(AlunosTurmaB);
    }
    
    /** ORGANIZAÇÃO, PADRONIZAÇÃO DE ESCRITA E CONSIDERAÇÕES FINAIS.
    
    - Sobre as funções é importante notar que uma boa prática a se adotar é
    o de definir uma função para uma única ação, é interessante evitar dár
    a uma função diversas responsabilidades, no exemplo anterior, poderia se
    usar uma única função para realizar todo o trabalho más ficaria desorganizado
    e de dificil manutenção futura, por isso define-se o DRY 
    (Don’t Repeat Yourself), "O DRY diz que cada pedaço do conhecimento de um
    sistema deve ter uma representação única e ser totalmente livre de
    ambiguidades. Em outras palavras, define que não pode existir duas partes
    do programa que desempenhem a mesma função."
    Por isso no exemplo acima temos uma função específica para marcar os alunos
    e outra para enviar a mensagem, etc. Para
    
    - Comentar somente o que for necessário, pois o código bem feito deve ser
    auto explicativo, sendo assim é preciso desenvolver o código de forma
    que ele fique claro e de fácil leitura. Se está muito confuso pode ser 
    que seja melhor repensar o código.
    
    - Escrever tudo no código em inglês, mesmo para quando não se sabe pois desta
    forma seremos obrigados a aprender aquelas palavras que estaremos traduzindo
    
    È INTERESSANTE TAMBÉM PESQUISAR E CONHECER OS PRINCÍPIOS DOS CLEAN CODE.
    - SEGUE OS 7 MAIS COMUNS.
    
    1 - Os nomes são muito importantes.
    Ao definir um nome, é preciso ter em mente 2 pontos principais:
    1. Ele deve ser preciso e passar logo de cara sua ideia central. 
    Ou seja, deve ir direto ao ponto;
    
    2. Não se deve ter medo de nomes grandes. Se a sua função ou parâmetro
    precisa de um nome extenso para demonstrar o que realmente representa, 
    é o que deve ser feito.
    2 - Regra do Escoteiro
    Há um princípio do escotismo que diz que, uma vez que você sai da 
    área em que está acampando, você deve deixá-la mais limpa do que 
    quando a encontrou. Trazendo a regra para o mundo da programação, 
    a regra significa deixar o código mais limpo do que estava antes 
    de mexer nele.
    
    3 - Seja o verdadeiro autor do código.
    O ser humano é acostumado a pensar de forma narrativa , portanto, 
    o código funciona da mesma forma. Logo, ele é uma história e, como 
    os programadores são seus autores, precisam se preocupar na maneira 
    com que ela será contada. Em resumo, para estruturar um código limpo,
    é necessário criar funções simples, claras e pequenas. 
    Existem 2 regras para criar a narrativa via código:
    
    1. As funções precisam ser pequenas;
    
    2. Elas têm de ser ainda menores.
    
    Não confunda com os termos “nome” e “função”. Como dissemos no primeiro
    princípio, nomes grandes não são um problema. Já as funções precisam 
    ser as menores possíveis.
    
    4 - DRY (Don’t Repeat Yourself).
    Esse princípio pode ser traduzido como “não repita a si mesmo”. 
    Essa expressão foi descrita pela primeira vez em um livro chamado 
    The Pragmatic Programmer e se aplica a diversas áreas de desenvolvimento.
    
    O DRY diz que cada pedaço do conhecimento de um sistema deve ter uma 
    representação única e ser totalmente livre de ambiguidades. 
    Em outras palavras, define que não pode existir duas partes do 
    programa que desempenhem a mesma função.
    
    5 - Comente apenas o necessário
    
    Esse princípio afirma que comentários podem ser feitos, porém, se 
    forem realmente necessários. Segundo Uncle Bob, os comentários mentem. 
    E isso tem uma explicação lógica. O que ocorre é que, enquanto os 
    códigos são constantemente modificados, os comentários não. Eles são 
    esquecidos e, portanto, deixam de retratar a funcionalidade real dos 
    códigos. Logo, se for para comentar, que seja somente o necessário e 
    que seja revisado juntamente com o código que o acompanha.
    6 - Tratamento de erros 
    
    Tem uma frase do autor Michael Feathers, muito conhecido na área de 
    desenvolvimento, que diz que as coisas podem dar errado, mas, quando 
    isso ocorre, os programadores são os responsáveis por garantir que o 
    código continuará fazendo o que precisa. Ou seja: saber tratar as 
    exceções de forma correta é um grande e importante passo para um 
    programador em desenvolvimento.
    
    7 – Testes limpos
    
    Testar, na área de programação, é uma etapa muito importante. Afinal, 
    um código só é considerado limpo após ser validado através de testes 
    – que também devem ser limpos. Por isso, ele deve seguir algumas 
    regras, como:
    
    • Fast: O teste deve ser rápido, permitindo que seja realizado várias 
    vezes e a todo momento;
    
    • Independent: Ele deve ser independente, a fim de evitar que cause 
    efeito cascata quando da ocorrência de uma falha – o que dificulta a 
    análise dos problemas;
    
    • Repeatable: Deve permitir a repetição do teste diversas vezes e em 
    ambientes diferentes;
    
    • Self-Validation: Os testes bem escritos retornam com as respostas 
    true ou false, justamente para que a falha não seja subjetiva;
    
    • Timely: Os testes devem seguir à risca o critério de pontualidade. 
    Além disso, o ideal é que sejam escritos antes do próprio código, 
    pois evita que ele fique complexo demais para ser testado.
    
    Estes princípios são importantes e acho que na medida do possível
    quando já houver conhecimento para entendê-los e aplicá-los 
    durante a jornada do aprendizado será de grande ajuda, mesmo por 
    porque é mais fácil se acostumar a faze da forma correta desde o 
    principio, que depois, no futuro ter que adquirir novos hábitos 
    e corrigir vícios adquiridos.
    
    **/
    
    /** DESCOMENTAR A FUNÇÃO RELATIVA A AULA PARA EXECUTAR **/
    
    //aulas_introducao();
    //aula_calculos();
    //aula_condicinais();
    //operadores_comparacao();
    //operadores_aritmedicos();
    //desafio1();
    //operadores_logicos();
    //introdução_obejto();
    //introdução_vetor();
    //funcoes_e_metodos();
    final_boolean_e_Objetos();
    
    