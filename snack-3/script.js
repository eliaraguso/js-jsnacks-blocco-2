// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// creo lista nomi + lista cognomi
var nomi = ["Marco", "Giulio", "Paola", "Anna", ];
var cognomi = ["Bianchi", "Verdi", "Rossi", ];
var invitati = [];

// ciclo 3 volte
for ( var i=0; i<3; i++) {
    // genero un numero random per il nome e per il cognome
    var indiceRandomNome = Math.floor(Math.random() * nomi.length);
    var indiceRandomCognome = Math.floor(Math.random() * cognomi.length);
    // aggiungo il nome alla lista
    var nomeCompleto = nomi[indiceRandomNome] + " " + cognomi[indiceRandomCognome];
    invitati.push(nomeCompleto);
}

// stampo la lista
alert("la lista degli invitati è " + invitati);