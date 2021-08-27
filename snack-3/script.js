// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// creo lista nomi + lista cognomi
var nomi = ["Marco", "Giulio", "Paola", "Anna", ];

var cognomi = ["Bianchi", "Verdi", "Rossi", ];

// genero una lista di 3 falsi invitati

var listaInvitati = [];

for ( var i=0; i<3; i++) {
    listaInvitati[i] = nomi[Math.floor(Math.random() * 2)] + cognomi[Math.floor(Math.random() * 2)];
}

alert ("la lista degli invitati è " + listaInvitati);

