// INIZIALIZZAZIONI VARIABILI
const listaSpesa = document.querySelector(".lista-spesa");
const elementiListaSpesa = ["pane","latte","uova","mais","acqua","tonno","basilico","prosciutto","torta al cioccolato","patate"];

let elementi="";

// RIEMPIO L ARRAY
i=0;
while(i < elementiListaSpesa.length){
    elementi += `<li>${elementiListaSpesa[i]}</li>`;
    i++;
}
listaSpesa.innerHTML = elementi;

// AGGIUNGI ELEMENTO
const bottone = document.querySelector(".aggiungi-elemento");
bottone.addEventListener("click", function(){
    const elementoDaAggiungereInput = document.getElementById("elemento");
    const elementoDaAggiungere = `<li>${elementoDaAggiungereInput.value}</li>`;

    // Aggiungo elemento
    listaSpesa.innerHTML += elementoDaAggiungere;

    // Ripulisco l'input
    elementoDaAggiungereInput.value="";
})