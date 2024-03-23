// Užduotis 4(For):
// Skaičius, sudarytas iš trijų skaitmenų, vadinamas Armstrongo skaičiumi, jei jo skaitmenų, pakeltų 3 - uoju laipsniu, suma lygi pačiam skaičiui.Raskite visus Amstrongo skaičius esančius intervale nuo 100 iki 999.


for (let i = 100; i <= 999; i++) {
    const y = String(i).split('');
    const a = Number(y[0]);
    const b = Number(y[1]);
    const c = Number(y[2]);
    if (i === a ** 3 + b ** 3 + c ** 3) {
        console.log(i);
    }
}

// // 156
// pirm=Math.floor(x/100); // 1
// antr = Math.floor(x % 100 / 10); // 5
// pask = x % 10; // 6