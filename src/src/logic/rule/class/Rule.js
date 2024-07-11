import Rule1 from "../validator/Rule-1";
import Rule16 from "../validator/Rule-16";
import Rule18 from "../validator/Rule-18";
import Rule19 from "../validator/Rule-19";
import Rule2 from "../validator/Rule-2";
import Rule3 from "../validator/Rule-3";
import Rule4 from "../validator/Rule-4";
import Rule5 from "../validator/Rule-5";
import Rule6 from "../validator/Rule-6";
import Rule7 from "../validator/Rule-7";
import { Rule8, RandomNegaraString } from "../validator/Rule-8";

class Rule {
  constructor(
    ruleNumber,
    text,
    checker = (password) => password.length > 1000,
    data = null
  ) {
    this.ruleNumber = ruleNumber;
    this.text = text;
    this.checker = checker;
    this.data = data;
  }
}

const Rules = [
  new Rule(1, "Password kamu harus setidaknya 5 karakter", Rule1),
  new Rule(2, "Password kamu harus mengandung angka", Rule2),
  new Rule(3, "Password kamu harus mengandung huruf kapital", Rule3),
  new Rule(4, "Password kamu harus mengandung karakter spesial", Rule4),
  new Rule(5, "Digit pada password kamu harus berjumlah 25", Rule5),
  new Rule(6, "Password kamu harus mengandung nama bulan", Rule6),
  new Rule(7, "Password kamu harus mengandung angka romawi", Rule7),
  new Rule(
    8,
    "Password kamu harus mengandung nama dari salah satu negara berikut " +
      RandomNegaraString,
    Rule8
  ),
  new Rule(
    9,
    "Angka romawi pada password kamu harus menghasilkan 36 jika dikalikan"
  ),
  new Rule(10, "Oh tidak! Password kamu terbakar 🔥. Cepat padamkan!"),
  // ide naikin difficulty kecepatan api merambat
  new Rule(
    11,
    "🥚 Ini ayam saya Paul. Dia belum meentas. Tolong sertakan dia dalam password kamu agar dia aman"
  ),
  new Rule(12, "Password kamu harus mengandung CAPTCHA berikut"),
  new Rule(13, "Password kamu harus mengandung tahun kabisat"),
  new Rule(
    14,
    "🐔 Paul sudah menetas! Jangan lupa beri dia makan. Dia memakan 1 🐛 tiap 30 detik"
  ),
  // ide naikin difficulty bisa naikin nafsu makan paul
  new Rule(
    15,
    "Tumbal harus dilakukan. Pilih 1 huruf yang tidak bisa lagi kamu gunakan"
  ),
  // ide naikin difficulty naikin jumlah disabled character
  new Rule(
    16,
    "Password kamu harus mengandung salah satu dari kata berikut [I want IRK | I need IRK | I love IRK]",
    Rule16
  ),
  new Rule(17, "Setidaknya 10% dari password kamu harus berupa angka"),
  // ide naikin difficulty ubah persentase
  new Rule(18, "Password kamu harus mengandung panjang password", Rule18),
  new Rule(19, "Panjang password kamu harus berupa bilangan prima", Rule19),
  new Rule(
    20,
    "Password kamu harus mengandung waktu sekarang [HH:MM] (24 Hour)"
  ),
];

export default Rules;
