import React from "react";

import { Rule, RuleList } from "./class/Rule";
import Rule1 from "./validator/Rule-1";
import Rule2 from "./validator/Rule-2";
import Rule3 from "./validator/Rule-3";
import Rule4 from "./validator/Rule-4";
import Rule5 from "./validator/Rule-5";
import Rule6 from "./validator/Rule-6";
import Rule7 from "./validator/Rule-7";
import { Rule8 } from "./validator/Rule-8";
import Rule9 from "./validator/Rule-9";
import { Rule12 } from "./validator/Rule-12";
import Rule13 from "./validator/Rule-13";
import Rule16 from "./validator/Rule-16";
import Rule17 from "./validator/Rule-17";
import Rule18 from "./validator/Rule-18";
import Rule19 from "./validator/Rule-19";
import Rule20 from "./validator/Rule-20";
import Rule8Image from "./components/Rule-8-JSX";
import Rule12Image from "./components/Rule-12-JSX";

const Rules = new RuleList();
Rules.addRule(new Rule(1, "Password kamu harus setidaknya 5 karakter", Rule1));
Rules.addRule(new Rule(2, "Password kamu harus mengandung angka", Rule2));
Rules.addRule(
  new Rule(3, "Password kamu harus mengandung huruf kapital", Rule3)
);
Rules.addRule(
  new Rule(4, "Password kamu harus mengandung karakter spesial", Rule4)
);
Rules.addRule(
  new Rule(5, "Digit pada password kamu harus berjumlah 25", Rule5)
);
Rules.addRule(new Rule(6, "Password kamu harus mengandung nama bulan", Rule6));
Rules.addRule(
  new Rule(7, "Password kamu harus mengandung angka romawi", Rule7)
);
Rules.addRule(
  new Rule(
    8,
    "Password kamu harus mengandung nama dari salah satu negara berikut",
    Rule8,
    <Rule8Image />
  )
);
Rules.addRule(
  new Rule(
    9,
    "Angka romawi pada password kamu harus menghasilkan 36 jika dikalikan",
    Rule9
  )
);
// Rules.addRule(
//   new Rule(10, "Oh tidak! Password kamu terbakar 🔥. Cepat padamkan!")
// );
// Rules.addRule(
//   new Rule(
//     11,
//     "🥚 Ini ayam saya Paul. Dia belum meentas. Tolong sertakan dia dalam password kamu agar dia aman"
//   )
// );
Rules.addRule(
  new Rule(
    12,
    "Password kamu harus mengandung CAPTCHA berikut",
    Rule12,
    <Rule12Image />
  )
);

Rules.addRule(
  new Rule(13, "Password kamu harus mengandung tahun kabisat", Rule13)
);
// Rules.addRule(
//   new Rule(
//     14,
//     "🐔 Paul sudah menetas! Jangan lupa beri dia makan. Dia memakan 1 🐛 tiap 30 detik"
//   )
// );
// Rules.addRule(
//   new Rule(
//     15,
//     "Tumbal harus dilakukan. Pilih 1 huruf yang tidak bisa lagi kamu gunakan"
//   )
// );
Rules.addRule(
  new Rule(
    16,
    "Password kamu harus mengandung salah satu dari kata berikut [I want IRK | I need IRK | I love IRK]",
    Rule16
  )
);
Rules.addRule(
  new Rule(17, "Setidaknya 10% dari password kamu harus berupa angka", Rule17)
);
Rules.addRule(
  new Rule(18, "Password kamu harus mengandung panjang password", Rule18)
);
Rules.addRule(
  new Rule(19, "Panjang password kamu harus berupa bilangan prima", Rule19)
);
Rules.addRule(
  new Rule(
    20,
    "Password kamu harus mengandung waktu sekarang (HH:MM, format 24 jam)",
    Rule20
  )
);

export default Rules;
