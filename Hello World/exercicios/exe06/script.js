(function renderizar(){
    const app = document.getElementById("app");
    const painel = document.createElement("div");
    const br = document.createElement("br");
    app.appendChild(painel);

    const titulo = document.createElement("h3");
    titulo.innerText = "Faça um Programa que peça as 4 notas bimestrais e mostre a média.";
    painel.appendChild(titulo);

    const valor1 = document.createElement("input");
    valor1.type = "text";
    valor1.id = "vlr1-text";
    valor1.placeholder = "Informe a primeira nota:"; 
    valor1.style.marginBottom = "10px"
    painel.appendChild(valor1);    
    
    const valor2 = document.createElement("input");
    valor2.type = "text";
    valor2.id = "vlr2-text";
    valor2.placeholder = "Informe a segunda nota:";      
    valor2.style.marginBottom = "10px"
    painel.appendChild(valor2);

    const valor3 = document.createElement("input");
    valor3.type = "text";
    valor3.id = "vlr3-text";
    valor3.placeholder = "Informe a terceira nota:";      
    valor3.style.marginBottom = "10px"
    painel.appendChild(valor3);
    
    const valor4 = document.createElement("input");
    valor4.type = "text";
    valor4.id = "vlr4-text";
    valor4.placeholder = "Informe a quarta nota:";      
    valor4.style.marginBottom = "10px"
    painel.appendChild(valor4);    

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
        const vlr3 = document.getElementById('vlr3-text').value;
        const vlr4 = document.getElementById('vlr4-text').value;
        const media = (Number(vlr1) + Number(vlr2) + Number(vlr3) + Number(vlr4)) / 4;
        resp.textContent = "A media das notas: "+ vlr1 +", " + vlr2 +", " +vlr3+" e: "+ vlr4+" é:" + media+ ".";
    });
})();