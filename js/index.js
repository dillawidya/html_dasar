console.log("Hello World")
alert("Hello World!")


//Javasrcipt Variabel
var nama ="Dilla";
console.log(nama);

let id = 456;
console.log(id);

const alamat = "Kepanjen";
console.log(alamat);


//Data type number
let bilangan = 1;
console.log(bilangan); //1

console.log(100/0); //infinity

console.log("Arkatama" + 2); //NaN

console.log("Multi solusindo" + (2 * 5));

console.log(NaN * 3);

//Mengecek type data
console.log(typeof "Arkatama"); //String
console.log("Arkatama" / 2);
console.log(typeof bilangan);//number


//Data type bigint
const bigInt = 12345678901234567890123456789n;
console.log(bigInt);

//Data type string
let namalengkap = "Dilla Widya";
let domisili = 'Pagelaran';
let hobby = `Membaca`;

console.log(namalengkap);
console.log(domisili);
console.log(hobby);

//Penggabungan string
console.log(namalengkap + " dari " + domisili + " suka " + hobby); //petik dua
console.log(namalengkap + ' dari ' + domisili + ' suka ' + hobby); // petik tunggal
console.log(`${namalengkap} dari ${domisili} suka ${hobby}`); //backtick

let kalimat = `${namalengkap} dari ${domisili} suka ${hobby}`;
console.log(kalimat);


//Data type boolean
let isLoggedIn = true;
console.log(isLoggedIn);

let isAdmin = false;
console.log(isAdmin);

let isGreater = 10 > 5;
console.log(isGreater);

let isLess = 10 < 5 ;
console.log(isLess);


//Data type null
let girlfriend = null;
console.log(girlfriend);


//Data undefined
let name;
console.log(name);


//Data type symbol
let employee = Symbol('Joko');
console.log(employee);
console.log(employee.description);


//Data type object
let karyawan = {
    namaasli: "Jhon",
    age: 30,
    job: "web Developer",
    isMarried: false,
    hobbies: ["sport", "cooking"],
};
console.log(`His name is ${karyawan.namaasli} and he is ${karyawan.age} years old`);



//Type conversion string
let bil = 1;
console.log(bil);
console.log(typeof bil);

let konversibil = String(bil);
console.log(konversibil);
console.log(typeof konversibil);


//Type conversion numeric
let bil1 = 6;
let bil2 = 2;

console.log(bil1);
console.log(typeof bil1);
console.log(bil2);
console.log(typeof bil2);

let pembagian = bil1 / bil2;
console.log(pembagian);


//Type convertion boolean
let married = 0;
console.log(married);
console.log(typeof married);

let konversimarried = Boolean(married);
console.log(konversimarried);
console.log(typeof konversimarried);

let married1 = 1;
console.log(married1);
console.log(typeof married1);

let konversimarried1 = Boolean(married1);
console.log(konversimarried1);
console.log(typeof konversimarried1);

let married2 = "Hello";
console.log(married2);
console.log(typeof married2);

let konversimarried2 = Boolean(married2);
console.log(konversimarried2);
console.log(typeof konversimarried2);

let married3 = "";
console.log(married3);
console.log(typeof married3);

let konversimarried3 = Boolean(married3);
console.log(konversimarried3);
console.log(typeof konversimarried3);


//Arimatic operator
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


//Asigment operator
let c = 2;
console.log(c);

c+=5;
console.log(c);


//Comparison operator
let d = 4;
let e = 5;

console.log(d == e);
console.log(d < e);
console.log(d > e);
console.log(d != e);


//Logical operator
let f = true;
let g = false;

console.log(f && g);
console.log(f || g);
console.log(!f);


//Bitwise operator
let h = 00111100;
let i = 00001101;

console.log(h & i);
console.log(h | i);
console.log(h ^ i);
console.log(~h);


//Ternary operator
let j = 1;
let k = 1;
console.log(j == k ? "yes" : "no");


//popup prompt
let response = prompt("Apakah kamu mau nonton akhir pekan ini?")
alert("Jawabannya adalah "+response);

//popup confirm
let response1 = confirm("Mau dinner malam ini?");
alert("Jawabannya: "+response1);

let response2 = prompt("1 + 1 =");
if (response2 == 2) {
    alert("Correct!");
}else if (response2 < 2){
    alert("Too low!");
}else{
    alert("Too high!");
}

//conditional switch
let color = prompt("Warna apa ini?");

switch (color) {
    case "red":
        alert("I Love Red!");
        break;
    case "blue":
        alert("I Love Blue!");
        break;
    default:
        alert("I Don't know what color it is!");
        break;
}


//Loop for
for (let i = 0; i < 5; i++){
    console.log(`Iterasi ke${i}`);
}

//Loop do while
let l = 0;
do {
    console.log(`Iterasi ke ${l}`);
    l+=1;
}while (l < 5);


//Loop while
let m = 0;

while (m<5){
    console.log(`Iterasi ke ${m}`);
    m++;
}


//Loop control break
for  (let n = 0; n < 5; n++){
    if(n==3){
        break;
    }
    console.log(`Iterasi ke ${n}`);
}


//Loop control continue
for  (let o = 0; o < 5; o++){
    if(o==3){
        continue;
    }
    console.log(`Iterasi ke ${o}`);
}

