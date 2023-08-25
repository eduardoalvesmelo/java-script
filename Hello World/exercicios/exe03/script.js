function renderizar() {
    const app = document.getElementById("app");

    const titulo = document.createElement("h3")
    titulo.innerText = "Então é natal";

    const msg = document.createElement("h4");
    msg.innerText = "E o que você fez, o ano termina e nasce outra vez";

    app.appendChild(titulo);
    app.appendChild(msg);
}

renderizar();