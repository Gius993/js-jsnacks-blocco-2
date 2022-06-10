// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

//array vuoto
const numberArray = [];

//chiedo numero 
let numberRe = 0;
while(numberRe < 50) {
	
	let userNumber = prompt('numero');
	userNumber = parseInt(userNumber);
	

	numberRe += userNumber;
	numberArray.push(userNumber);
}

console.log(numberArray);

