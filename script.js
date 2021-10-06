const categoria = prompt('Categoria do Jogo');
const nomeJog1 = prompt('Digite o nome do Jogador 1');
const nomeJog2 = prompt('Digite o nome do Jogador 2');

if (nomeJog1 === "") {
    nomeJog1 = "Jogador 1";
};
if (nomeJog2 === "") {
    nomeJog2 = "Jogador 2";
};

const categ_HTML = document.getElementById('categoria');
const nomeA_HTML = document.getElementById('jog1');
const nomeB_HTML = document.getElementById('jog2');
const games1_HTML = document.getElementById('games1');
const games2_HTML = document.getElementById('games2');
const ponto1_HTML = document.getElementById('pontos1');
const ponto2_HTML = document.getElementById('pontos2')
const setA_HTML = document.getElementById('setA');
const setB_HTML = document.getElementById('setB');

let categ = 'Categoria: ';

categ_HTML.innerHTML =  categ + categoria;
nomeA_HTML.innerText = nomeJog1;
nomeB_HTML.innerText = nomeJog2;

let ponto1 = 0;
let ponto2 = 0;
let games1 = 0;
let games2 = 0;
let sets1 = 0;
let sets2 = 0;
let arrayDePontos1 = [];
let arrayDePontos2 = [];
let totalDePontos1 = 0;
let totalDePontos2 = 0;

ponto1_HTML.innerText = ponto1;
ponto2_HTML.innerText= ponto2;

ponto1_HTML.addEventListener('click', function() {
    //o que estiver aqui dentro será executado quando o
    //ponto1_HTML for clicado
    ponto1 = ponto1 + 1;
    if (ponto1 === 1) {
        sValor = "15";
    } else if (ponto1===2) {
        sValor = "30";
    } else if (ponto1===3) {
        sValor = "40";
    }
    ponto1_HTML.innerText = sValor;
    verificarFimDoGame();
});

ponto2_HTML.addEventListener('click', function() {
    ponto2 = ponto2 + 1;
    if (ponto2 === 1) {
        sValor = "15";
    } else if (ponto2===2) {
        sValor = "30";
    } else if (ponto2===3) {
        sValor = "40";
    }
    ponto2_HTML.innerText = sValor;
    verificarFimDoGame();
});

function verificarFimDoGame (){
    if (ponto1 >= 4 && ponto1 - ponto2 >= 2){
        alert('Jogador 1 venceu o game');
        games1 = games1 + 1; // soma 1 no game
        games1_HTML.innerText = games1; //exibe na tela
        verificarFimDoSet();
    } 
    
    if (ponto1 >= 4 && ponto1 - ponto2 === 1){
        sValor="Ad";
        ponto1_HTML.innerText = sValor;
    }

    if (pontos1 >=4 && ponto1 - ponto2 === 0) {
        sValor = "40";
        ponto1_HTML.innerText = sValor;
        ponto2_HTML.innerText = sValor;
    }

    if (ponto2 >= 4 && ponto2-ponto1 >=2) {
        alert('Jogador 2 venceu o game');
        games2 = games2 + 1;
        games2_HTML.innerText = games2;
        verificarFimDoSet();
    }

    if (ponto2 >= 4 && ponto2 - ponto1 === 1){
        sValor="Ad";
        ponto2_HTML.innerText = sValor;
    }
    
    if (ponto2 >= 4 && ponto2 - ponto1 === 0) {
        sValor = "40";
        ponto1_HTML.innerText = sValor;
        ponto2_HTML.innerText = sValor;
    }   
};

function verificarFimDoSet (){
    if (games1 >= 6 && games1 - games2 >=2){
        alert('Jogador 1 venceu o set');
        sets1 = sets1 + 1; // soma 1 no set 
        setA_HTML.innerText = sets1; //exibe na tela
        verificarFimDoJogo();
    }
    if (ponto2 >= 6 && games2-games1 >=2) {
        alert('Jogador 2 venceu o set');
        sets2 = sets2 + 1;
        setB_HTML.innerText = sets2;
        verificarFimDoJogo();
    }
    ponto1=0;
    ponto2=0;
    ponto1_HTML.innerText = "0";
    ponto2_HTML.innerText = "0";
};

function verificarFimDoJogo () {
    if (sets1 == 2) {
        //Jogador 1 ganhou o Jogo
        for(let item of arrayDePontos1){
            totalDePontos1 = totalDePontos1 + item;
        }
        alert(`${nomeJog1} venceu o jogo fazendo ${totalDePontos1} pontos`);
        salvarEZerarPlacarDoSetAnterior();
    }
    
    if (sets2 == 2) {
        for(let item of arrayDePontos2){
            totalDePontos2 = totalDePontos2 + item;
        }
        alert(`${nomeJog2} venceu o jogo fazendo ${totalDePontos2} pontos`)
        salvarEZerarPlacarDoSetAnterior();
    }
};

function salvarEZerarPlacarDoSetAnterior() {
    //zerar a pontuação do set nos arrays
    arrayDePontos1.push(ponto1);
    arrayDePontos2.push(ponto2);
    //zerar a pontuação de cada set
    ponto1 = 0;
    ponto2 = 0;
    games1 = 0;
    games2 = 0;
    //atualizar na tela
    ponto1_HTML.innerText = ponto1;
    ponto2_HTML.innerText = ponto2;
    games1_HTML.innerText = games1;
    games2_HTML.innerText = games2;
};

