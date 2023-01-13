let qtdeDecartas;
let parrots = ["./parrot/bobrossparrot.gif", "./parrot/explodyparrot.gif", "./parrot/fiestaparrot.gif", "./parrot/metalparrot.gif", "./parrot/revertitparrot.gif", "./parrot/tripletsparrot.gif", "./parrot/unicornparrot.gif"]
const cartasEmbaralhadas = parrots.sort(embaralhaCards);
const primeiraMetade = cartasEmbaralhadas.slice(0, qtdeDecartas/2);
const segunddaMetade = [...primeiraMetade];
const baralhoCompleto = primeiraMetade.concat(segunddaMetade);
const baralhoEmbaralhado = baralhoCompleto.sort(embaralhaCards);
do{
    qtdeDecartas = Number(prompt("Escolha a quantidade de cartas para iniciar o jogo:"))
    if((qtdeDecartas < 4) || (qtdeDecartas > 14) || (qtdeDecartas % 2 === 1)){
        alert("Quantidade inválida! Digite um número par entre 4 e 14 para iniciar");
        
    }
        
}
    while((qtdeDecartas < 4) || (qtdeDecartas > 14) || (qtdeDecartas % 2 === 1)){
        
    }


function adicionaCard(){
    const elemento = document.querySelector('ul');
    for(let i = 0; i < qtdeDecartas; i++){
        elemento.innerHTML += `      <li onclick="viraCarta(this)"data-test ="card">
        <img src="./parrot/back.png" class="frente" data-test="face-down-image">
        <img src= ${baralhoEmbaralhado[i]} class="verso" data-test="face-up-imagge">
    </li>`
    }
}
adicionaCard();

function embaralhaCards(){
    return Math.random() - 0.5;
}
function viraCarta(cartaVirada){
    //criar uma class no CSS para rotacionar a carta
    //conferir se há uma carta selecionada anteriormente
    //ao clicar na segunda carta, virar ela tbm
    //fazer um if(carta1 !== carta2)
    //se o if for verdadeiro, remove a classe de rotação
}