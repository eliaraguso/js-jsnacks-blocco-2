// // Il software deve chiedere per 5 volte all’utente di inserire un numero.
// // Il programma stampa la somma di tutti i numeri inseriti.
// // Esegui questo programma in due versioni, con il for e con il while.


// // -----------------------------FOR------------------------------

// // Creo variabile che conterrà la somma
// var somma = 0;

// // Ciclo per 5 volte
// for (var i = 0; i < 5; i++) {
//     // chiedo il numero all'utente
//     var numero = parseInt(prompt("Inserisci il "+ (i+1) + " numero: "));
//     // valido l'input dell'utente
//     while ( isNaN(numero)) {
//         numero = parseInt(prompt("Attento! quello che hai inserito non è un numero!!"));
//     }
//     // sommo il numero alla somma precedente
//     somma += numero;
// }
// // stampo la somma
// alert("ciao la tua somma è " + somma)



// -----------------------------WHILE----------------------------

// creo una variabile che conterrà la somma
var somma = 0;
var i = 0;

// ciclo per 5 volte
while (i < 5) {
    // chiedo il numero all'utente
    var numero = parseInt(prompt("Inserisci il "+ (i+1) + " numero: "));
    // valido l'input dell'utente
    while ( isNaN(numero)) {
        numero = parseInt(prompt("Attento! quello che hai inserito non è un numero!!"));
    }
    // sommo il numero alla somma precedente
    somma += numero;
    i++;
}

// stampo la somma
alert("ciao la tua somma è " + somma)
