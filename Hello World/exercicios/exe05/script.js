(function renderizar(){
    const app = document.getElementById("app");
    const painel = document.createElement("div");
    const br = document.createElement("br");
    app.appendChild(painel);

    const titulo = document.createElement("h3");
    titulo.innerText = "Faça um Programa que peça dois números e imprima a soma.";
    painel.appendChild(titulo);

    const valor1 = document.createElement("input");
    valor1.type = "text";
    valor1.id = "vlr1-text";
    valor1.placeholder = "Informe o valor 1:"; 
    valor1.style.marginBottom = "10px"
    painel.appendChild(valor1);    
    
    const valor2 = document.createElement("input");
    valor2.type = "text";
    valor2.id = "vlr2-text";
    valor2.placeholder = "Informe o valor 2:";      
    valor2.style.marginBottom = "10px"
    painel.appendChild(valor2);

    const button = document.createElement("button");
    button.textContent = "Executar"
    painel.appendChild(button);    
    
    const linha = document.createElement("hr");
    painel.appendChild(linha);

    const resp = document.createElement("h2");
    resp.id = "resp-valor";
    painel.appendChild(resp);

    button.addEventListener('click', function () {
        const vlr1 = document.getElementById('vlr1-text').value;
        const vlr2 = document.getElementById('vlr2-text').value;
        const ttl = Number(vlr1) + Number(vlr2);
        resp.textContent = "A soma entre "+ vlr1 +" e " + vlr2 + " é: "+ttl + ".";
    });
})();