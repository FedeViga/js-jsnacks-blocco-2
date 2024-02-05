// Snack 4
// Creo un ciclo infinito in cui chiedo all'utente di inserire un numero, per uscire dal ciclo l'utente
// dovrà scrivere la parola "Esci"

let isNumber = false;

do {
    const userNumber = prompt("inserisci un numero oppure scrivi 'Esci' per uscire");
    console.log(userNumber);
    if (userNumber == "Esci") {
        isNumber = false;
    } else if (isNaN(userNumber)) {
        alert("Errore: inserisci un numero oppure scrivi 'Esci' per uscire");
    } else {
        isNumber = true;
    }
} while (isNumber == true);
