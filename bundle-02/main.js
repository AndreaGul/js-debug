/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/
// 1- Che cosa fa questo codice?
//     2- Sono presenti errori di sintassi?
//     3- Sono presenti errori logici?

// ESERCIZIO 1
/*
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
*/
//data una funzione checkAge, all'interno sono definite 2 varibli myAge con un numero e message con una stringa vuota, abbiamo una condizione che se myAge e' piu piccolo come valore di 18, message avra come valore quel messaggio altrimenti avra' gli verra assengata quell'altr stringa

//non ci sono errori si sintassi

//message cambia valore durante lesecuzione della funzione quindi bisognera cambiare keyword in let
//la funzione non ritorna nessuna valore quindi bisognera' ritornare message

function checkAge() {
  const myAge = 32;
  let message = '';

  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = 'Hai più di 18 anni!';
  }
  return message;
}
console.log(checkAge());

// ESERCIZIO 2
/*
function printColorsNumber() {
  const colors = ['blue', 'red', 'yellow', 'green', 'black'];

  console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
*/

//data una funzione printColorsNumber al suo interno definiamo un array di stringe, stampa in console un messaggio con la lunchezza dell'array

//la proprieta length e' scritta scritta male

// non ci sono presenti errori logici
function printColorsNumber() {
  const colors = ['blue', 'red', 'yellow', 'green', 'black'];

  console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// ESERCIZIO 3
/*
function addNumbers() {
  const userNumber = prompt('Inserisci un numero');
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();
*/
// chiede all'utente un numero somma i numer odato dall'utente a 12 e poi stampa il messaggio in console

//non ci sono errori di sintasi

//il prompt restituisce una stringa quindi bisogna trasformare il prompt in numero con Number
function addNumbers() {
  const userNumber = Number(prompt('Inserisci un numero'));
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// ESERCIZIO 4
/*
function checkAccess() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];
  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = 'false';

  if (addresses.includes(userEmail)) {
    
    grantAccess = 'true';
  }

  if (grantAccess === true) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccess();
*/
//if (addresses.includes(userEmail)) bisogna fare un guaglianza con true e quindi la condizione e' verificata
//grantAccess = true; il grandAccess e; uguale alla stringa 'true'
//   }
// invece nella coondizione e' specificata il valorei in boolean
//   if (grantAccess === true)

function checkAccess() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];
  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = 'false';

  if (addresses.includes(userEmail) === true) {
    grantAccess = true;
  }

  if (grantAccess === true) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccess();

// ESERCIZIO 5 (suggerimento: c'è un solo errore)

/*
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();


*/
function checkAccessImproved() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];

  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = false;

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {
      if (email === userEmail) {
        grantAccess = true;
      }
    }
  }
  if (grantAccess) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccessImproved();

//let grantAccess = 'false'; bisgona levare le virgolette

// mancanza paretesi graffa a chiudere la funzione
// if (email === userEmail) {
//   grantAccess = 'true'; deve essere un valore booleano e non una stringa
// }
// fuori dal for
//  if (grantAccess) data dalla riasegnazione grantAccess e uguale al valore booleano true nella condizione viene eseguita direttamente
// {
//    console.log('Accesso consentito!');
//  } else {
//    console.log('Accesso negato!');
//  }

//nelle condizioni if se venogno passate delle stringe come condizione viene eseguito il codice lo stesso quindi bisogna stare attenti anche a questo caso
