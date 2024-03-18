// Užduotis 3(IF - 2):
// Elektroninis laikrodis rodo laiką: valandas, minutes ir sekindes(įvedami skaičiai h, m, s).Kiek laiko laikrodis rodys po sekundės ? (Išveskite h, m, ir s). Visi skaičiai įvedami kkaip parametrai(h, m, s).

const h = Number(process.argv[2]);
const m = Number(process.argv[3]);
const s = Number(process.argv[4]);

if (s < 0 || s >= 60 || m < 0 || m >= 60 || h < 0 || h >= 24) {
    console.log('neteisingai ivestas laikas');
}
if (s < 59 && m < 60 && h < 24) {
    console.log(h < 10 ? "0" + h : h, m < 10 ? "0" + m : m, s < 10 ? "0" + (s + 1) : (s + 1));
}
if (s == 59 && m < 59 && h < 24) {
    console.log(h < 10 ? "0" + h : h, m < 10 ? "0" + (m + 1) : (m + 1), '00');
}
if (s == 59 && m == 59 && h < 23) {
    console.log(h < 10 ? "0" + (h + 1) : (h + 1), '00', '00');
}
if (s == 59 && m == 59 && h == 23) {
    console.log('00', '00', '00');
}

