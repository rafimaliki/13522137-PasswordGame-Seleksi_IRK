import { Rule, RuleList } from "./class/Rule";
import { Rule1Validator, Rule1JSX, Rule1Cheat } from "./components/Rule-1";
import { Rule2Validator, Rule2JSX, Rule2Cheat } from "./components/Rule-2";
import { Rule3Validator, Rule3JSX, Rule3Cheat } from "./components/Rule-3";
import { Rule4Validator, Rule4JSX, Rule4Cheat } from "./components/Rule-4";
import { Rule5Validator, Rule5JSX, Rule5Cheat } from "./components/Rule-5";
import { Rule6Validator, Rule6JSX, Rule6Cheat } from "./components/Rule-6";
import { Rule7Validator, Rule7JSX, Rule7Cheat } from "./components/Rule-7";
import { Rule8Validator, Rule8JSX, Rule8Cheat } from "./components/Rule-8";
import { Rule9Validator, Rule9JSX, Rule9Cheat } from "./components/Rule-9";
import { Rule10Validator, Rule10JSX, Rule10Cheat } from "./components/Rule-10";
import { Rule11Validator, Rule11JSX, Rule11Cheat } from "./components/Rule-11";
import { Rule12Validator, Rule12JSX, Rule12Cheat } from "./components/Rule-12";
import { Rule13Validator, Rule13JSX, Rule13Cheat } from "./components/Rule-13";
import { Rule14Validator, Rule14JSX, Rule14Cheat } from "./components/Rule-14";
import { Rule15Validator, Rule15JSX, Rule15Cheat } from "./components/Rule-15";
import { Rule16Validator, Rule16JSX, Rule16Cheat } from "./components/Rule-16";
import { Rule17Validator, Rule17JSX, Rule17Cheat } from "./components/Rule-17";
import { Rule18Validator, Rule18JSX, Rule18Cheat } from "./components/Rule-18";
import { Rule19Validator, Rule19JSX, Rule19Cheat } from "./components/Rule-19";
import { Rule20Validator, Rule20JSX, Rule20Cheat } from "./components/Rule-20";

const Rules = new RuleList();
Rules.addRule(new Rule(1, Rule1Validator, Rule1JSX, Rule1Cheat)); // at least x characters
Rules.addRule(new Rule(2, Rule2Validator, Rule2JSX, Rule2Cheat)); // include number
Rules.addRule(new Rule(3, Rule3Validator, Rule3JSX, Rule3Cheat)); // uppercase
Rules.addRule(new Rule(4, Rule4Validator, Rule4JSX, Rule4Cheat)); // special character
Rules.addRule(new Rule(5, Rule5Validator, Rule5JSX, Rule5Cheat)); // digits add up to (highlight)
Rules.addRule(new Rule(6, Rule6Validator, Rule6JSX, Rule6Cheat)); // include month
Rules.addRule(new Rule(7, Rule7Validator, Rule7JSX, Rule7Cheat)); // include roman numeral
Rules.addRule(new Rule(8, Rule8Validator, Rule8JSX, Rule8Cheat)); // include country
Rules.addRule(new Rule(9, Rule9Validator, Rule9JSX, Rule9Cheat)); // roman numerals multiply to (highlight)
Rules.addRule(new Rule(10, Rule10Validator, Rule10JSX, Rule10Cheat)); // fire
Rules.addRule(new Rule(11, Rule11Validator, Rule11JSX, Rule11Cheat)); // egg
Rules.addRule(new Rule(12, Rule12Validator, Rule12JSX, Rule12Cheat)); // captcha
Rules.addRule(new Rule(13, Rule13Validator, Rule13JSX, Rule13Cheat)); // leap year
Rules.addRule(new Rule(14, Rule14Validator, Rule14JSX, Rule14Cheat)); // chicken
Rules.addRule(new Rule(15, Rule15Validator, Rule15JSX, Rule15Cheat)); // sacrifice
Rules.addRule(new Rule(16, Rule16Validator, Rule16JSX, Rule16Cheat)); // i want irk
Rules.addRule(new Rule(17, Rule17Validator, Rule17JSX, Rule17Cheat)); // at least x% digits
Rules.addRule(new Rule(18, Rule18Validator, Rule18JSX, Rule18Cheat)); // include length
Rules.addRule(new Rule(19, Rule19Validator, Rule19JSX, Rule19Cheat)); // length is prime
Rules.addRule(new Rule(20, Rule20Validator, Rule20JSX, Rule20Cheat)); // include current time

export default Rules;
