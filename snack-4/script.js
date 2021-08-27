// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

// Creo un array di numeri interi
var listaNumeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// inizializzo una variabile somma
var somma = 0;

// vado a ciclare tutti i numeri presenti nel mio array di partenza
for (var i = 0; i < listaNumeri.length; i++) {

    // verifico quali sono i numeri con indice dispari e li sommo nella variabile somma
    if (i % 2 !== 0) {
        var listaNumeriIndiceDispari = listaNumeri[i];
        console.log(listaNumeriIndiceDispari);
        somma += listaNumeri[i];
    }

}

// stampo la somma ottenuta
alert("Nella lista di numeri" + " " + listaNumeri + " " + "La somma dei numeri con indice dispari è " + somma);
