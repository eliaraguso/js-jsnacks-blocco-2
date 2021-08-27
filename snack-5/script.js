// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


// Creo i due array con un numero di elementi diversi
var array1 = [0, 1, 2, 3, 4];
var array2 = [0, 1];

alert("Ehi, non vedi che il primo array" + " " + array1 + " " + "ha un numero di elementi maggiore del secondo array?" + " " + array2);
alert("Tranquillo, non tutto è perduto. Ci penso io!!!!!");

// Eseguo un ciclo per aggiungere elementi al secondo array fintanto che i due array non avranno lo stesso numero di elementi
while(array1.length > array2.length) {
    array2.push(Math.floor(Math.random() * 100));
}

// Stampo i due array
alert("Hai visto? Ora sei in salvo!!! Il primo array con questi elementi:" + " " + array1 + " " + "ha lo stesso numero di elementi del secondo array!!! Se non ci credi ecco gli elementi che ho creato:" + " " + array2);