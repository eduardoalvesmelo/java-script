// script.js

(function (win, doc) {

     doc.addEventListener("DOMContentLoaded", function () {
        console.warn(`\n\n Olá,eu sou o \x1b[1mDOMContentLoaded\x1b[0m, legal tá todo mundo criado! então agora é minha vez de me apresentar eu sempre carrego por último \n\n`)
        console.warn(`Mas eu, \x1b[1mDOMContentLoaded\x1b[0m,  não vou criar nenhuma funcionalidade, vou só dizer:`)
        console.error(`\x1b[1m- B0M DIA! :) 😄\x1b[0m`)

    })

    const titleElement = doc.createElement('title');
    titleElement.textContent = 'Input Text e Botão +';
    document.head.appendChild(titleElement);

    const containerElement = document.createElement('div');
    containerElement.id = 'container';
    document.body.appendChild(containerElement);

    const tituloH1 = document.createElement('h1');
    tituloH1.textContent = 'Título da Página Criado pelo DOM';
    containerElement.appendChild(tituloH1);

    const tagHr1 = document.createElement('hr');
    containerElement.appendChild(tagHr1);

    /**
     * INICIO FUNCIONALIDADE SEM WATCH
     */

    console.warn("1 - Criando a primeira funcionalidade")

    const tituloFunc1 = document.createElement('h2');
    tituloFunc1.textContent = 'Sem watch'
    containerElement.appendChild(tituloFunc1);

    const inputSemWatch = document.createElement('input');
    inputSemWatch.type = 'text';
    inputSemWatch.placeholder = 'Digite algo';
    inputSemWatch.id = 'input-text'
    containerElement.appendChild(inputSemWatch);

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Mostrar Texto';
    containerElement.appendChild(buttonElement);

    const outputElement = document.createElement('h2');
    containerElement.appendChild(outputElement);

    /**
     * EVENTOS DA FUNCIONALIDADE SEM WATCH
     */
    buttonElement.addEventListener('click', function () {
        //const textoDigitado = inputSemWatch.value;
        //outputElement.textContent = textoDigitado;
        const textoDigitadobyID = document.getElementById('input-text').value;
        outputElement.textContent = textoDigitadobyID;
    });

    inputSemWatch.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const textoDigitado = inputSemWatch.value;
            outputElement.textContent = textoDigitado;
        }
    });

    console.warn("2 - Terminou a criação da primeira funcionalidade")

    console.warn("3 - Criando a segunda funcionalidade")


    /**
     * FIM DA FUNCIONALIDADE SEM WATCH
     */
    const tagHr2 = document.createElement('hr');
    containerElement.appendChild(tagHr2);

    /**
    * INICIO DA FUNCIONALIDADE COM WATCH
    */

    const tituloFunc2 = document.createElement('h2');
    tituloFunc2.textContent = 'Com watch'
    containerElement.appendChild(tituloFunc2);

    const inputTextWatch = document.createElement('input');
    inputTextWatch.type = 'text';
    inputTextWatch.placeholder = 'Digite algo';
    inputTextWatch.id = 'input-text-watch'
    containerElement.appendChild(inputTextWatch);

    const disableButton = document.createElement('button');
    disableButton.id = 'disable-button'
    containerElement.appendChild(disableButton);
    const bd = document.getElementById('disable-button');
    bd.textContent = "Mostrar Texto Disable";
    bd.disabled = true;    

    const outputWatch = document.createElement('h2');
    containerElement.appendChild(outputWatch);

    inputTextWatch.addEventListener('input', function () {
        const textoDigitado = inputTextWatch.value;
        outputWatch.textContent = textoDigitado;
        outputWatch.style.color = 'red';
    });

    console.warn("4 - Terminou a criação da segunda funcionalidade")

})(window, document);
