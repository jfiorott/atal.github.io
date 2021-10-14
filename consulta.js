
function atualizarPlacar() {
    var escore1 = localStorage.getItem('placar1');
    var escore2 = localStorage.getItem('placar2');
    var v_games11 = localStorage.getItem('gamesA1');
    var v_games21 = localStorage.getItem('gamesB1');
    var v_games12 = localStorage.getItem('gamesA2');
    var v_games22 = localStorage.getItem('gamesB2');
    
    var plc1 = document.getElementById('ptoJog1');
    var plc2 = document.getElementById('ptoJog2');
    var t_games11 = document.getElementById('games11');
    var t_games21 = document.getElementById('games21');
    var t_games12 = document.getElementById('games12');
    var t_games22 = document.getElementById('games22');
    
    plc1.innerHTML = escore1;
    plc2.innerHTML = escore2;
    t_games11.innerHTML = v_games11;
    t_games21.innerHTML = v_games21;
    t_games12.innerHTML = v_games12;
    t_games22.innerHTML = v_games22;
}

function iniciarJogo() {
    var categ1 = localStorage.getItem('categ');
    var jog1 = localStorage.getItem('jogad1');
    var jog2 = localStorage.getItem('jogad2');

    var categ2 = document.getElementById('categoria');
    var jogad1 = document.getElementById('nomeJog1');
    var jogad2 = document.getElementById('nomeJog2');

    let categ = 'Categoria: ';

    categ2.innerHTML = categ + categ1;
    jogad1.innerHTML = jog1;
    jogad2.innerHTML = jog2;
}

iniciarJogo();
atualizarPlacar();
