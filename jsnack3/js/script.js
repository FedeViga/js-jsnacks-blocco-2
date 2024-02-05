// Snack 3
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. 
// (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5


// creo due array vuoti
let numberList1 = [];
let numberList2 = [];

// inizializzo elementi html
const resultElement = document.querySelector("#result");
const resultElement2 = document.querySelector("#result2");

// chiedo all'utente quanti numeri casuali vuole inserire nei due array
const userNumber1 = Number(prompt("Scegli quanti numeri avrà il primo array"));
const userNumber2 = Number(prompt("Scegli quanti numeri avrà il secondo array"));

// creo gli array
for (i = 0; i < userNumber1; i++) {
    numberList1.push(Math.floor((Math.random() * 100) + 1));
}
for (i = 0; i < userNumber2; i++) {
    numberList2.push(Math.floor((Math.random() * 100) + 1));
}

// stampo gli array
resultElement.innerHTML = "primo array: " + numberList1 + "<br>" + "secondo array: " + numberList2;

//se gli array hanno lunghezze diverse aggiungo numeri all'array più corto e stampo il risultato modificato
if (numberList1.length > numberList2.length) {
    while (numberList2.length < numberList1.length) {
        numberList2.push(Math.floor((Math.random() * 100) + 1));
    }
    resultElement2.innerHTML = "primo array: " + numberList1 + "<br>" + "secondo array allungato: " + numberList2;
}
if (numberList1.length < numberList2.length) {
    while (numberList1.length < numberList2.length) {
        numberList1.push(Math.floor((Math.random() * 100) + 1));
    }
    resultElement2.innerHTML = "primo array allungato: " + numberList1 + "<br>" + "secondo array: " + numberList2;
}
