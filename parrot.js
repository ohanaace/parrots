let qtdeDecartas;
let parrots = ["./parrot/bobrossparrot.gif", "./parrot/explodyparrot.gif", "./parrot/fiestaparrot.gif", "./parrot/metalparrot.gif", "./parrot/revertitparrot.gif", "./parrot/tripletsparrot.gif", "./parrot/unicornparrot.gif"];
let contador = 0;
let primeiraCarta = undefined;
let block = false;
let jogadas = 0;
let pares = 0;
do{
    qtdeDecartas = Number(prompt("Escolha a quantidade de cartas para iniciar o jogo:"))
    if((qtdeDecartas < 4) || (qtdeDecartas > 14) || (qtdeDecartas % 2 === 1)){
        alert("Quantidade inválida! Digite um número par entre 4 e 14 para iniciar");
        
    }
        
}while((qtdeDecartas < 4) || (qtdeDecartas > 14) || (qtdeDecartas % 2 === 1));
        
    
    const cartasEmbaralhadas = parrots.sort(embaralhaCards);
    const primeiraMetade = cartasEmbaralhadas.slice(0, qtdeDecartas/2);
    const segundaMetade = [...primeiraMetade];
    const baralhoCompleto = primeiraMetade.concat(segundaMetade);
    const baralhoEmbaralhado = baralhoCompleto.sort(embaralhaCards);

function embaralhaCards(){
    return Math.random() - 0.5;
}
function adicionaCard(){
    const elemento = document.querySelector('ul');
    for(let i = 0; i < qtdeDecartas; i++){
        elemento.innerHTML += `      <li onclick="viraCarta(this)"data-test ="card">
        <img src="./parrot/back.png" class="carta frente" data-test="face-down-image">
        <img src= ${baralhoEmbaralhado[i]} class="carta verso" data-test="face-up-image">
    </li>`
    }
}
adicionaCard();

function viraCarta(cartaVirada){
    if(block === true){
        return;
    }
    
    //conferir se há uma carta selecionada anteriormente
    if(!primeiraCarta){
        cartaVirada.classList.add('virada');
        primeiraCarta = cartaVirada;
        jogadas++;
        contador++;
        return 
    }

    //ao clicar na segunda carta, virar ela tbm
    cartaVirada.classList.add('virada');
    contador++;
    if(contador === 2 && cartaVirada.innerHTML !== primeiraCarta.innerHTML){
        block = true;
        desviraCarta(primeiraCarta, cartaVirada);
        jogadas++
        primeiraCarta = undefined;
        contador = 0;
        return
    }
    jogadas++;
    pares++;
    
    //criar uma class no CSS para rotacionar a carta
    primeiraCarta = undefined;
    contador = 0;
    setTimeout(gameOver, 500);
    }

    //fazer um if(carta1 !== carta2)
    //se o if for verdadeiro, remove a classe de rotação



function desviraCarta(primeiraCarta, segundaCarta){
    setTimeout(()=> {
        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');
        block = false;
    }, 1000
    )

}
function gameOver(){
    if(pares === qtdeDecartas/2){
        alert(`Você ganhou em ${jogadas} jogadas!`)
    }
}