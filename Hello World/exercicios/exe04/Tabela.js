class Tabela {

    constructor (className) {
        this.element = document.createElement("table");
        this.element.className = className;
    }

    addRow (values) {
        const tr = document.createElement("tr");        
        const td = document.createElement("td");
        td.innerText = values;
        tr.appendChild(td);
        this.element.appendChild(tr);        
    }

}