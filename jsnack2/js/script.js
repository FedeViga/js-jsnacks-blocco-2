// Snack 2
// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!

const randomNumber = Math.floor((Math.random() * 100) + 1);
let userNumber;

// finchè l'utente non indovina il numero
while (userNumber != randomNumber) {

    // chiedo il numero all'utente
    userNumber = prompt("Indovina a che numero da 1 a 100 sto pensando, oppure inserisci 0 per uscire: ");

    // se l'utente inserisce 0 esco dal ciclo
    if (userNumber == 0) {
        userNumber = randomNumber;
        
    // altrimenti vado avanti
    } else {

        // se è troppo alto
        if (userNumber > randomNumber) {
            alert("Il numero è troppo alto");
        // altrimenti se è troppo basso
        } else if (userNumber < randomNumber) {
            alert("Il numero è troppo basso");
        // altrimenti se ha indovinato
        } else {
            alert("Indovinato!");
        }
    }
}