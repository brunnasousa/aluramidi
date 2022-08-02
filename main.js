function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play(); //buscar o elemento e da o plau
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll('.audio');
  

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //templade string

    tecla.onclick = function (){ //apertar a tecla
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) { //pintar de vermelho = ação
        console.log(evento.code == 'Space' || evento.code == 'Enter' );
                
        if(evento.code === 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () { //remover esse vermelho quando clicar
        tecla.classList.remove('ativa');
    }

    console.log(contador);
}