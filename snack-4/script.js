// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

// Creo un array di numeri interi
var listaNumeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// inizializzo una variabile somma
var somma = 0;

// vado a ciclare tutti i numeri presenti nel mio array di partenza
for (var i = 0; i < listaNumeri.length; i++) {
    // creo un array vuoto che andrà a contenere solo i numeri con indice dispari
    var listaNumeriIndiceDispari = [];

    if (i % 2 !== 0) {
        listaNumeriIndiceDispari.push(i);
        alert(listaNumeriIndiceDispari);

    }
    
    
    
}
