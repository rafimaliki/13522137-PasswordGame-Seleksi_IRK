import { Rule, RuleList } from "./class/Rule";
import { Rule1Validator, Rule1JSX } from "./components/Rule-1";
import { Rule2Validator, Rule2JSX } from "./components/Rule-2";
import { Rule3Validator, Rule3JSX } from "./components/Rule-3";
import { Rule4Validator, Rule4JSX } from "./components/Rule-4";
import { Rule5Validator, Rule5JSX } from "./components/Rule-5";
import { Rule6Validator, Rule6JSX } from "./components/Rule-6";
import { Rule7Validator, Rule7JSX } from "./components/Rule-7";
import { Rule8Validator, Rule8JSX } from "./components/Rule-8";
import { Rule9Validator, Rule9JSX } from "./components/Rule-9";
import { Rule10Validator, Rule10JSX } from "./components/Rule-10";
import { Rule12Validator, Rule12JSX } from "./components/Rule-12";
import { Rule13Validator, Rule13JSX } from "./components/Rule-13";
import { Rule15Validator, Rule15JSX } from "./components/Rule-15";
import { Rule16Validator, Rule16JSX } from "./components/Rule-16";
import { Rule17Validator, Rule17JSX } from "./components/Rule-17";
import { Rule18Validator, Rule18JSX } from "./components/Rule-18";
import { Rule19Validator, Rule19JSX } from "./components/Rule-19";
import { Rule20Validator, Rule20JSX } from "./components/Rule-20";

const Rules = new RuleList();
Rules.addRule(new Rule(1, Rule1Validator, Rule1JSX));
Rules.addRule(new Rule(2, Rule2Validator, Rule2JSX));
Rules.addRule(new Rule(3, Rule3Validator, Rule3JSX));
Rules.addRule(new Rule(4, Rule4Validator, Rule4JSX));
Rules.addRule(new Rule(5, Rule5Validator, Rule5JSX));
Rules.addRule(new Rule(6, Rule6Validator, Rule6JSX));
Rules.addRule(new Rule(7, Rule7Validator, Rule7JSX));
Rules.addRule(new Rule(8, Rule8Validator, Rule8JSX));
Rules.addRule(new Rule(9, Rule9Validator, Rule9JSX));
Rules.addRule(new Rule(10, Rule10Validator, Rule10JSX));
// Rules.addRule(new Rule(11, Rule11Validator, Rule11JSX));
Rules.addRule(new Rule(12, Rule12Validator, Rule12JSX));
Rules.addRule(new Rule(13, Rule13Validator, Rule13JSX));
// Rules.addRule(new Rule(14, Rule14Validator, Rule14JSX));
Rules.addRule(new Rule(15, Rule15Validator, Rule15JSX));
Rules.addRule(new Rule(16, Rule16Validator, Rule16JSX));
Rules.addRule(new Rule(17, Rule17Validator, Rule17JSX));
Rules.addRule(new Rule(18, Rule18Validator, Rule18JSX));
Rules.addRule(new Rule(19, Rule19Validator, Rule19JSX));
Rules.addRule(new Rule(20, Rule20Validator, Rule20JSX));

// new Rule(10, "Oh tidak! Password kamu terbakar 🔥. Cepat padamkan!")
// new Rule(11, "🥚 Ini ayam saya Paul. Dia belum meentas. Tolong sertakan dia dalam password kamu agar dia aman")
// new Rule(14, "🐔 Paul sudah menetas! Jangan lupa beri dia makan. Dia memakan 1 🐛 tiap 30 detik")

export default Rules;
