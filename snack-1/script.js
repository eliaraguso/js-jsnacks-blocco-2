// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

var numero = 0;
var somma = 0;
for (var i = 0; i < 5; i++) {
    numero = parseInt(prompt("Inserisci il "+ (i+1) + " numero: "));
    somma += numero;
}

alert("ciao la tua somma è " + somma)

