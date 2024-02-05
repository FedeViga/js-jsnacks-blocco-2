// Snack 1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50


// inizializzo array e variabile somma
let numberList = [];
let sum = 0;

// continuo a chiedere all'utente di inserire un numero fino a quando la somma dei numeri contenuti nell'array < 50
while (sum < 50) {

    // chiedo il numero all'utente
    const userNumber = prompt("Inserisci numero: ")

    // se non ha inserito un numero do errore
    if (isNaN(userNumber) || userNumber == "") {
        alert("Errore: inserisci nuovamente il numero")
    
    // altrimenti aggiungo il numero all'array
    } else {
        numberList.push(userNumber);
        sum = sum + Number(numberList[numberList.length - 1]);
    }
}

// stampo in pagina l'array e la somma
const resultElement = document.querySelector("#result");
if (numberList.length > 1) {
    resultElement.innerHTML = numberList.join( ' + ') + " = " + sum;
} else {
    resultElement.innerHTML = "Hai inserito il numero " + sum;
}
