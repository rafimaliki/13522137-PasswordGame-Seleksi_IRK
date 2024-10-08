import { matchingAlgorithm } from "../../gameData";

/**
 * Represents a rule for password validation.
 * @class
 */
class Rule {
  /**
   * @constructor
   * @param {number} number - The rule number.
   * @param {string} text - The description text of the rule.
   * @param {function(string): boolean} - The function used to check if the password meets the rule.
   * @param {any} [JSXdata=null] - Optional JSX data associated with the rule.
   */
  constructor(number, validator, JSXdata, cheat) {
    this.number = number;
    this.checker = validator;
    this.JSXdata = JSXdata;
    this.cheat = cheat;

    this.correct = null; // Indicates if the password satisfies the rule.
    this.wrongData = null; // Array to hold the indices of the wrong characters.
  }

  /**
   * Checks if the provided password satisfies the rule.
   * @param {string} password - The password to be checked.
   * @returns {boolean} True if the password satisfies the rule, otherwise false.
   */
  check(password, difficulty) {
    const { correct, wrongData } = this.checker(password, difficulty);
    this.correct = correct;
    this.wrongData = wrongData;
    return correct;
  }
}

/**
 * Represents a list of rules for password validation.
 * @class
 */
class RuleList {
  /**
   * @constructor
   */
  constructor() {
    this.list = []; // Array to hold rules.
    this.countShow = 0; // Number of rules to initially show.
    this.count = 0; // Total number of rules.
  }

  /**
   * Adds a rule to the list.
   * @param {Rule} rule - The rule to add.
   */
  addRule(rule) {
    if (this.list.length === 0) {
      rule.correct = false; // Mark the first rule as incorrect initially.
      this.countShow = 1;
    }
    this.list.push(rule);
    this.count++;
    // this.countShow = this.list.length;
  }

  /**
   * Checks the provided password against all visible rules.
   * @param {string} password - The password to be checked.
   * @returns {RuleList} The list of rules.
   */
  checkAll(password, setPassword, difficulty, setGameResult) {
    var cheatDetected = false;
    if (matchingAlgorithm(password, "cheat") !== -1) {
      cheatDetected = true;
      const newPasword = password.replace("cheat", "");
      password = newPasword;
    }

    var countCorrect = 0;
    for (let i = 0; i < this.countShow; i++) {
      this.list[i].check(password, difficulty) ? countCorrect++ : null;
    }

    if (countCorrect === this.countShow && this.countShow < this.list.length) {
      do {
        this.countShow = Math.min(this.countShow + 1, this.list.length);
        this.list[this.countShow - 1].check(password, difficulty);
      } while (
        this.list[this.countShow - 1].correct === true &&
        this.countShow < this.list.length
      );
    }

    if (cheatDetected) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].correct === false) {
          // console.log("cheat rule:", this.list[i].number);
          this.list[i].cheat(
            password,
            setPassword,
            difficulty,
            this.list[i].wrongData
          );
          break;
        }
      }
    }

    if (countCorrect === this.list.length) {
      setTimeout(() => {
        setGameResult(1);
      }, 20);
    }

    return this;
  }
}

export { Rule, RuleList };
