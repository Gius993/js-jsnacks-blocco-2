// - Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

//const
let numberStrong = [4, 8, 15, 16, 23, 42];

let numberSmall = [2, 11, 24,];



for ( let i = numberSmall.length; numberSmall.length < numberStrong.length; i++ ){

    numberSmall.push(Math.floor((Math.random()*100)));

}
console.log(numberSmall);
