/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
// 1. block ("code yang berada didalam curly braces {}")
// 2. global scope ("variabel yang kita buat dapat diakses dimanapun dalam suatu file.")
// 3. local scope ("kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping.")

// global scope

let yourCat = "kitten";

function cute (){
    return yourCat;
}
console.log(yourCat);

// local scope

function myActivity(){
    let myHobi = "singing";
    return myHobi;
}
console.log(myActivity ());




/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// 1. yang akan tampil di console.log adalah mariah.
/// 2. karena menggunakan fungsi split jadi string yang ada pada name di convert menjadi array.
/// 3. lalu kenapa bukan string di name yang muncul karena yang ingin ditampilkan adalah argumen yang ditambahkan di printFirstName, nah dengan jumlah array dari parameter name atau jumlah parameter pada printFisrtName yaitu name atau 2 kata maka ketika memanggil functionnya akan muncul string atau kata yang di tambahkan di identifier printFirstName dengan di return index 0.

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));