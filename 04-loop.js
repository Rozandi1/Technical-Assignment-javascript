/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

for (let i = 2; i <= 100; i++) {
  let pembagi = 0;
  for (let j = 1; j <= i; j++) {
      if (i % j === 0){
        pembagi += 1;
      }
    }
    if (i === 1 || pembagi === 2){
      console.log(i);
    }
}




/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;
let i = 0;
/// EDIT HERE
while(primeCounter < 50){
  i ++;
  let pembagi = false;
  for(let j = 2; j <= i; j++){
    if (i % j === 0 && i !== j){
      pembagi = true;
    }
  }
  if(pembagi === false){
    primeCounter++;
    fiftiethPrime = i;
  }
}
console.log(fiftiethPrime);


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let n = 0;

/// EDIT HERE
do {
  n ++;
  if  (n % 2 === 1){
    oddCounter++;
    if (oddCounter === 50){
      fiftiethOdd = n;
      console.log(fiftiethOdd);
    }
  }
  
} while (oddCounter < 50);