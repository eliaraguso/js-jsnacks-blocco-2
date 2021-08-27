// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// chiedo all'utente di inserire  un  numero 
var inputNumero = parseInt(prompt("Inserisci un numero"))

// se il numero è pari lo stampo
if (inputNumero%2 == 0) {
    alert("il tuo numero" + inputNumero + "è pari")
} else {
    alert("Il tuo numero è dispari. Meglio che stampiamo il numero successivo:" + (inputNumero+1) )
}