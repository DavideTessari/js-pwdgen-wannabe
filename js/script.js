// Chiedo all'utente: il suo nome, poi il cognome ed infine il colore preferito 

// Chiedo il nome
const userName = prompt('Dimmi il nome');

// Chiedo il cognome
const userSurname = prompt('Dimmi il cognome');

// Chiedi il colore preferito
const userColor = prompt('Dimmi il tuo colore preferito');

// Chiediamo un numero a sua scelta

// Ci servono: anno corrente e l'età dell'utente
const currentNumber = 23;

// chiedo l'età all'utente
const userNumber = prompt('Dimmi un numero a tuo piacere');

// Converto userAge in un tipo di dato numero
const userNumberAsNumeric = parseInt(userNumber);

// Somma numeri
const sum = currentNumber + userNumberAsNumeric;



// Stampo il risultato nomecognomecolorepreferito23

const userMessage = `${userName}${userSurname}${userColor}${sum}`;

// alert(userMessage);
document.getElementById('message').innerHTML = userMessage;
