function renderizar () {
    const app = document.getElementById("app");  
    const painel = document.createElement("div");
    const tabela = new Tabela("tabela");
    tabela.addRow("abc");
    tabela.addRow("abc");
    tabela.addRow("abc");
    painel.appendChild(tabela.element);
    app.appendChild(painel);
}

renderizar ();