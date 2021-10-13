const categoria = prompt('Categoria do Jogo');
const nomeJog1 = prompt('Digite o nome do Jogador 1');
const nomeJog2 = prompt('Digite o nome do Jogador 2');
var numSet = 1;

if (nomeJog1 === "") {
    nomeJog1 = "Jogador 1";
}
if (nomeJog2 === "") {
    nomeJog2 = "Jogador 2";
}

localStorage.setItem('categ', categoria);
localStorage.setItem('jogad1', nomeJog1);
localStorage.setItem('jogad2', nomeJog2);

const categ_HTML = document.getElementById('categoria');
const nomeA_HTML = document.getElementById('jog1');
const nomeB_HTML = document.getElementById('jog2');
const games11_HTML = document.getElementById('games11');
const games21_HTML = document.getElementById('games21');
const games12_HTML = document.getElementById('games12');
const games22_HTML = document.getElementById('games22');
const ponto1_HTML = document.getElementById('pontos1');
const ponto2_HTML = document.getElementById('pontos2');

let categ = 'Categoria: ';

categ_HTML.innerHTML =  categ + categoria;
nomeA_HTML.innerText = nomeJog1;
nomeB_HTML.innerText = nomeJog2;

let ponto1 = 0;
let ponto2 = 0;
let games11 = 0;
let games21 = 0;
let games12 = 0;
let games22 = 0;

ponto1_HTML.innerText = ponto1;
ponto2_HTML.innerText= ponto2;

ponto1_HTML.addEventListener('click', function() {
    ponto1 = ponto1 + 1;
    if (ponto1 === 1) {
        sValor = "15";
    } else if (ponto1===2) {
        sValor = "30";
    } else if (ponto1===3) {
        sValor = "40";
    }
    ponto1_HTML.innerText = sValor;
    localStorage.setItem('placar1', sValor);
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
    localStorage.setItem('placar2', sValor);
    verificarFimDoGame();
});

function verificarFimDoGame (){
    if (ponto1 >= 4 && ponto1 - ponto2 >= 2){
        alert(nomeJog1 + ' venceu o game');
        if (numSet === 1) {
            games11 = games11 + 1; // soma 1 no game
            games11_HTML.innerText = games11; //exibe na tela
        } else if (numSet === 2) {
            games12 = games12 + 1; // soma 1 no game
            games12_HTML.innerText = games12; //exibe na tela
        }
        ponto1 = 0;
        ponto2 = 0
        ponto1_HTML.innerText = 0;
        ponto2_HTML.innerText = 0;
        localStorage.setItem('placar1', 0);
        localStorage.setItem('placar2', 0);

        verificarFimDoSet();
    } 
    
    if (ponto1 >= 4 && ponto1 - ponto2 === 1){
        sValor="Ad";
        ponto1_HTML.innerText = sValor;
        localStorage.setItem('placar1', sValor);
    }

    if (ponto1 >=4 && ponto1 - ponto2 === 0) {
        sValor = "40";
        ponto1_HTML.innerText = sValor;
        ponto2_HTML.innerText = sValor;
        localStorage.setItem('placar1', sValor);
        localStorage.setItem('placar2', sValor);
    }

    if (ponto2 >= 4 && ponto2-ponto1 >=2) {
        alert(nomeJog2 + ' venceu o game');
        if (numSet === 1) {
            games21 = games21 + 1;
            games21_HTML.innerText = games21;
        } else if (numSet === 2) {
            games22 = games22 + 1; // soma 1 no game
            games22_HTML.innerText = games22; //exibe na tela
        }
        ponto1 = 0;
        ponto2 = 0
        ponto1_HTML.innerText = 0;
        ponto2_HTML.innerText = 0;
        localStorage.setItem('placar1', 0);
        localStorage.setItem('placar2', 0);

        verificarFimDoSet();
    }

    if (ponto2 >= 4 && ponto2 - ponto1 === 1){
        sValor="Ad";
        ponto2_HTML.innerText = sValor;
        localStorage.setItem('placar2', sValor);
    }
    
    if (ponto2 >= 4 && ponto2 - ponto1 === 0) {
        sValor = "40";
        ponto1_HTML.innerText = sValor;
        ponto2_HTML.innerText = sValor;
        localStorage.setItem('placar1', sValor);
        localStorage.setItem('placar2', sValor);
    }
};

function verificarFimDoSet (){
    if (numSet === 1) {
        if (games11 >= 6 && games11 - games21 >=2){
            alert(nomeJog1 + ' venceu o set');
            numSet = numSet + 1;
            sets1 = sets1 + 1; // soma 1 no set 
            verificarFimDoJogo();
        }
    } else if (numSet === 2){
        if (games12 >= 6 && games12 - games22 >=2){
            alert(nomejog1 + ' venceu o set');
            numSet = numSet + 1;
            sets1 = sets1 + 1; // soma 1 no set 
            verificarFimDoJogo();
        }
    }
    if (numSet === 1) {
        if (games21 >= 6 && games21-games11 >=2) {
            alert(nomeJog2 + ' venceu o set');
            numSet = numSet + 1;
            sets2 = sets2 + 1;
            verificarFimDoJogo();
        }
    } else if (numSet === 2){
        if (games22 >= 6 && games22 - games12 >=2){
            alert(nomejog2 + ' venceu o set');
            numSet = numSet + 1;
            sets2 = sets2 + 1; // soma 1 no set 
            verificarFimDoJogo();
        }
    }
    ponto1=0;
    ponto2=0;
}

function verificarFimDoJogo () {
    if (sets1 == 2) {
        alert(nomeJog1 + ' venceu o jogo');
    }
    
    if (sets2 == 2) {
        alert(nomeJog2 + ' venceu o jogo');
    }
}
