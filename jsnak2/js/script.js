// Calcola la somma e la media dei primi 10 numeri.

let n, sum = 0, media;

for (let i = 1; i <= 10; i++) {
  n = i;
  sum += n;
}

media = sum / 10;
console.log('media', media);