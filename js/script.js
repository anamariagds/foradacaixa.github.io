const personagem = document.querySelector('#img1');
const personagem2 = document.querySelector('#img2');
const personagem3 = document.querySelector('#img3');
const personagem4 = document.querySelector('#img4');


numAleatorio = () => {
    return Math.floor(Math.random() * 671); 
}

mudarPersonagem = () => {
    let aleatorio= numAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method: 'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        personagem.src = data.image;
        document.getElementById('nome-personagem').innerHTML = data.name;

        
    });
}

numAleatorio1 = () => {
    return Math.floor(Math.random() * 671); 
}

mudarPersonagem2 = () => {
    let aleatorio1= numAleatorio1();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio1}`, {
        method: 'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        personagem2.src = data.image;
        document.getElementById('nome-personagem2').innerHTML = data.name;
        
    });
}

numAleatorio2 = () => {
    return Math.floor(Math.random() * 671); 
}

mudarPersonagem3 = () => {
    let aleatorio2= numAleatorio2();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio2}`, {
        method: 'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        personagem3.src = data.image;
        document.getElementById('nome-personagem3').innerHTML = data.name;
        
    });
}

numAleatorio3 = () => {
    return Math.floor(Math.random() * 671); 
}

mudarPersonagem4 = () => {
    let aleatorio3= numAleatorio2();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio3}`, {
        method: 'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        personagem4.src = data.image;
        document.getElementById('nome-personagem4').innerHTML = data.name;
        
    });
}

window.onload = mudarPersonagem();

window.onload = mudarPersonagem2();

window.onload = mudarPersonagem3();

window.onload = mudarPersonagem4();
