// 1. chiedi all’utente il cognome
var yourSurn = prompt("Inserisci il tuo cognome");
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var listOfSurns = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
listOfSurns.push(yourSurn);
// 3. stampa la lista ordinata alfabeticamente
console.log(listOfSurns.sort());
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for (var i = 0; i < listOfSurns.length; i++) {
    console.log(listOfSurns[i]);
}
console.log(listOfSurns.indexOf(yourSurn)+1);