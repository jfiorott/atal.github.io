
function atualizarPlacar() {
    var escore1 = sessionStorage.getItem('placar1');
    var escore2 = sessionStorage.getItem('placar2');

    var plc1 = document.getElementById('ptoJog1');
    var plc2 = document.getElementById('ptoJog2');

    plc1.innerHTML = escore1;
    plc2.innerHTML = escore2;

//    document.body.innerHTML = 'Placar1 : ' + escore1;
//    document.body.innerHTML = 'Placar2 : ' + escore2;
}

function iniciarJogo() {
    var categ1 = sessionStorage.getItem('categ');
    var jog1 = sessionStorage.getItem('jogad1');
    var jog2 = sessionStorage.getItem('jogad2');

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
