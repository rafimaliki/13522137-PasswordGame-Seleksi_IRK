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
  constructor(number, text, checker = (_) => false, JSXdata = null) {
    this.number = number;
    this.text = text;
    this.checker = checker;
    this.JSXdata = JSXdata;
    this.correct = null; // Indicates if the password satisfies the rule.
  }

  /**
   * Checks if the provided password satisfies the rule.
   * @param {string} password - The password to be checked.
   * @returns {boolean} True if the password satisfies the rule, otherwise false.
   */
  check(password) {
    const correct = this.checker(password);
    this.correct = correct;
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
    this.countShow = this.list.length;
  }

  /**
   * Checks the provided password against all visible rules.
   * @param {string} password - The password to be checked.
   * @returns {RuleList} The list of rules.
   */
  checkAll(password) {
    var countCorrect = 0;
    for (let i = 0; i < this.countShow; i++) {
      this.list[i].check(password) ? countCorrect++ : null;
    }

    if (countCorrect === this.countShow && this.countShow < this.list.length) {
      do {
        this.countShow = Math.min(this.countShow + 1, this.list.length);
        this.list[this.countShow - 1].check(password);
      } while (
        this.list[this.countShow - 1].correct === true &&
        this.countShow < this.list.length
      );
    }

    if (countCorrect === this.list.length) {
      // console.log("You win!");
    }

    return this;
  }

  /**
   * Custom sorts the list based on rule correctness and number.
   * @returns {Rule[]} The sorted list of rules.
   */
  customSort() {
    const sortedList = this.list.filter((rule) => rule.correct !== null);
    sortedList.sort((a, b) => {
      if (a.correct === b.correct) {
        if (a.correct) {
          return b.number - a.number;
        } else {
          return a.number - b.number;
        }
      }

      return a.correct - b.correct;
    });

    return sortedList;
  }
}

export { Rule, RuleList };
