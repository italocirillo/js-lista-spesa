// INIZIALIZZAZIONI VARIABILI
const listaSpesa = document.querySelector(".lista-spesa");
const elementiListaSpesa = ["pane","latte","uova","mais","acqua","tonno","basilico","prosciutto","torta al cioccolato","patate"];

let elementi="";

i=0;
while(i < elementiListaSpesa.length){
    elementi += `<li>${elementiListaSpesa[i]}</li>`;
    i++;
}
listaSpesa.innerHTML = elementi;