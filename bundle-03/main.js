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

// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
/*
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);
*/
// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
  {
    manufacturer: 'Ford',
    model: 'Fiesta',
    type: 'diesel',
  },
  {
    manufacturer: 'Audi',
    model: 'A1',
    type: 'benzina',
  },
  {
    manufacturer: 'Volkswagen',
    model: 'Golf',
    type: 'Benzina',
  },
  {
    manufacturer: 'Fiat',
    model: 'Panda',
    type: 'metano',
  },
  {
    manufacturer: 'Fiat',
    model: 'Multipla',
    type: 'GPL',
  },
  {
    manufacturer: 'Tesla',
    model: 'Model 3',
    type: 'elettrico',
  },
  {
    manufacturer: 'Volkswagen',
    model: 'Polo',
    type: 'benzina',
  },
  {
    manufacturer: 'Ford',
    model: 'Kuga',
    type: 'Diesel',
  },
  {
    manufacturer: 'Seat',
    model: 'Ibiza',
    type: 'metano',
  }, //mancava una virgola
  {
    manufacturer: 'Audi',
    model: 'R8',
    type: 'Benzina',
  },
];
// la feccia dell'arrow function e' scritta male e bisogna mettere le paretesi tonde attono all;arogmento della funzione
const gasolineCars = cars.filter(
  (auto) => auto.type.toLowerCase() === 'benzina'
); //ci sono dei valori negli oggetti dove benzina ha la B maiuscola e possiamo usare toLowerCase

const dieselCars = cars.filter((auto) => {
  return auto.type.toLowerCase() === 'diesel';
  //filter richiede di ritornare qualcosa da mettere nel nuovo array visto che siamo nelle parentesi graffe e non e' un istruzione diretta come nel filkter precedente
});
//ci sono dei valori negli oggetti dove diesel ha la d maiuscola e possiamo usare toLowerCase

const otherCars = cars.filter((auto) => {
  return (
    auto.type.toLowerCase() !== 'benzina' &&
    auto.type.toLowerCase() !== 'diesel'
  );
}); //devo considerare tutto quello che non e' ne bensina ne diesel con && e bisgona aggiunger il tolowercase

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);
