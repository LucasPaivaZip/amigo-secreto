const nomeInput = document.querySelector('#nome-amigo');
const nomesDosAmigos = document.querySelector('#lista-amigos');
const btnAdicionar = document.querySelector('.primary');
const btnReiniciar = document.querySelector('.form__link');
const btnSortear = document.querySelector('.secondary');
const listaDosSorteados = document.querySelector('.lista-sorteio');

let listaDeAmigosIncluidos = [];


btnAdicionar.addEventListener('click', e =>{
    const nomeDoAmigo = nomeInput.value;

    if(!nomeDoAmigo || listaDosSorteados.innerHTML || listaDeAmigosIncluidos.includes(nomeDoAmigo)){
        return
    }else{
        incluirAmigos(nomeDoAmigo);
    }    

});

btnReiniciar.addEventListener('click', e =>{
    nomesDosAmigos.innerHTML = '';
    listaDosSorteados.innerHTML = '';
    listaDeAmigosIncluidos = [];
    console.log(listaDeAmigosIncluidos)
});

btnSortear.addEventListener('click', e =>{
    if(nomesDosAmigos.innerHTML == '' || listaDeAmigosIncluidos.length <= 3){
        return
    }else{
        sortearAmigos();

    }
});

function incluirAmigos(Amigo){
    listaDeAmigosIncluidos.push(Amigo);
    if(nomesDosAmigos.innerHTML == ''){

        nomesDosAmigos.innerHTML +=  Amigo;
        nomeInput.value = '';

    }else{

        nomesDosAmigos.innerHTML = nomesDosAmigos.innerHTML + ', ' + Amigo;
        nomeInput.value = '';

    }
}

function sortearAmigos(){
    embaralhar(listaDeAmigosIncluidos);
    for(let i = 0; i < listaDeAmigosIncluidos.length; i++){
        if(i == listaDeAmigosIncluidos.length -1){
            listaDosSorteados.innerHTML = listaDosSorteados.innerHTML + `${listaDeAmigosIncluidos[i]} --> ${listaDeAmigosIncluidos[0]} <br>`
        }else{
            listaDosSorteados.innerHTML = listaDosSorteados.innerHTML + `${listaDeAmigosIncluidos[i]} --> ${listaDeAmigosIncluidos[i + 1]} <br>`
        }
        console.log(i)
    }
    nomesDosAmigos.innerHTML = '';
   
}

function adicionarAlistaDeAmigosSorteados(amigosSecretos){
    listaDosSorteados.innerHTML += amigosSecretos;
}

function embaralhar(lista){
    for(let i = lista.length; i; i--){
        const indiceAleatorio = Math.floor(Math.random() * i);

        [lista[i-1],lista[indiceAleatorio]] = [lista[indiceAleatorio],lista[i - 1]];
    }
}
