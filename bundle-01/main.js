/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//   console.log(i);
// }
// questo codice non conclude niente, la variabile i e' stata definita uguale a 0 e come condizione del ciclo e' stata inserita che finche i e' maggiore di 5 il ciclo continua, visto che questa condizione non si puo' mai verificare il codice non procede alle operazioni successive e si ferma.

// non ci sono errori di sintassi

// per far si che il codice proceda nelle sue funzioni bisogna imporre come condizione che i sia minore di 5 cosi facendo si stampera in console il valore di 1 che va da 0 a 4

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// Data una funzione addIfEven che accetta come argomento num, se il resto di num diviso 2 e' letteralmente uguale a 0 ritorna il num piu' 5, altrimenti ritorna num

//non sono prensenti errori di sintassi

//la condizione dell'if e' sbagliata perche' si sta utilizando un solo = cercando quindi di assegnare a num%2 il valore 0, quindi rapresenta una assegnazione e non un confronto, per far si che ci sia un confroto si puo utilizzare il doppio uguale == se vogliamo confrontare il valore senza tener conto del typo o il triplo uguale === se vogliamo tener conto del valore e del tipo

function addIfEven(num) {
  if (num % 2 === 0) {
    return num + 5;
  }
  return num;
}
//stampaimo in console per verificare il corretto funziuonamento del codice
console.log(addIfEven(2));

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// data una funzione loopToFive, al richiamo della funzione ci sara' un ciclo for che stampera in console i numeri da 0 a 4

//nel for e' presente un errore di sintassi dopo la definizione della variabile e la condizione invece della virgola c'e' bisogno del punto e virgola

//non sono presenti errori logici

function loopToFive() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

//richiamo la funzione per verificare in console
loopToFive();

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

//data una funzione displayEvenNumbers, al suo interno sono definiti due array uno che contiene dei numeri e uno vuoto, tramite un ciclo che ciclera' finche i non sara' uguale alla lunghezza dell'array numbers -1. all'interno del ciclo e' presente una condizione dove se il resto dato dato dal numero in numbers diviso 2 e' zero allora nell'array evenNumbers sara' pushato il valore dell'indice i in quel momento e ritornera l'array evenNumbers

//nella condizione del for dopo l'operazione on ci deve essere un punto e virgola

//nel for la lunchezza dell'array deve essere quella specifica e non meno 1 se no l'ultimo indice non sara' confrontato
//nella condizione dell'if dopo number bisogna specificare la posizone dell'elemento dnell'array tramite l'indice
//nella condizione dell'if l'uguaglianza deve essere messa con il  tiplo uguale
//dopo l'if ci deve essere subito la parentesi quadra quindi bisogna levare il punto e virgola
//nel push devo inserire l'elemento nell'array che rispetta la condizone
// il return bisogna spostarlo fuori da l ciclo for

//le keyword delle costanti possono essere anche delle costanti

function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

console.log(displayEvenNumbers());
// dovrebbe restituire [2,4,6,8]
