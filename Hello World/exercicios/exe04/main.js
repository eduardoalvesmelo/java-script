function renderizar () {
    const app = document.getElementById("app");  
    const painel = document.createElement("div");
    
    const titulo = document.createElement("h3");
    titulo.innerText = "Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número]."
    painel.appendChild(titulo);

    const linha = document.createElement("hr");
    painel.appendChild(linha);
  
    const label = document.createElement("label");
    label.innerText = "Informe o valor: ";
    painel.appendChild(label);        

    const input = document.createElement("input");
    input.type = "text"
    input.id = "input-text";
    input.placeholder = "Informe o valor";    
    painel.appendChild(input);       

    const button = document.createElement("button");    
    button.id = "btn";
    button.innerHTML = "Executar";          
    painel.appendChild(button);    
    
    const br = document.createElement("br");    
    painel.appendChild(br);

    const resposta = document.createElement("h2");
    resposta.id = "resp";        
    painel.appendChild(resposta);

    button.addEventListener('click', function () {
        const textoDigitadobyID = document.getElementById('input-text').value;
        resposta.textContent = "número informado foi " + textoDigitadobyID + ".";
    });
    
    painel.appendChild(linha);
    app.appendChild(painel);           
}

renderizar ();