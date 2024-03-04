// Chiedo all'utente: il suo nome, poi il cognome ed infine il colore preferito 

// Chiedo il nome
const userName = prompt('Dimmi il nome');

// Chiedo il cognome
const userSurname = prompt('Dimmi il cognome');

// Chiedi il colore preferito
const userColor = prompt('Dimmi il tuo colore preferito');


// Stampo il risultato nomecognomecolorepreferito23

const userMessage = `${userName}${userSurname}${userColor}23`;

// alert(userMessage);
document.getElementById('message').innerHTML = userMessage;