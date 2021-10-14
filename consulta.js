
function atualizarPlacar() {
    var escore1 = localStorage.getItem('placar1');
    var escore2 = localStorage.getItem('placar2');
    var v_set11 = localStorage.getItem('set11');
    var v_set21 = localStorage.getItem('set21');
    var v_set12 = localStorage.getItem('set12');
    var v_set22 = localStorage.getItem('set22');
    
    var plc1 = document.getElementById('ptoJog1');
    var plc2 = document.getElementById('ptoJog2');
    var t_set11 = document.getElementById('set11');
    var t_set21 = document.getElementById('set21');
    var t_set12 = document.getElementById('set12');
    var t_set22 = document.getElementById('set22');
    
    plc1.innerHTML = escore1;
    plc2.innerHTML = escore2;
    t_set11.innerHTML = v_set11;
    t_set21.innerHTML = v_set21;
    t_set12.innerHTML = v_set12;
    t_set22.innerHTML = v_set22;
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
