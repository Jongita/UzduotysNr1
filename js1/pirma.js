
// Užduotis 1(Veiksmai):
// Sukurkite programą trikampio plotui rasti.Trikampio kraštinės įvedamos klaviatūra, o programa turi išvesti rezultatą.

// Duomenys įvedami kaip parametrai: a, b ir c.

let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = Number(process.argv[4]);
let s = (a + b + c) / 2;
let plotas = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);


console.log(s);
console.log(plotas);