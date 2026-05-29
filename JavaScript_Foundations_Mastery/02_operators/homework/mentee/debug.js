// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
const tipAmount  = billAmount % tipPercent;
console.log("Tip: $" + tipAmount);

// What's wrong ↓


    // billlAmount % tipPercent is asking you to take the remainder of 80 / 15


// Your fix ↓

const actualTipAmount = billAmount + (billAmount * (tipPercent / 100));
console.log("Tip: $" + actualTipAmount);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

// const countdown = 10; // should be let variable
// countdown -= 1;
// countdown -= 1;
// countdown -= 1;
// console.log("Countdown: " + countdown);

// What's wrong ↓


    // we are trying to reassign a const variable, which cannot be changed.


// Your fix ↓

let actualCountdown = 10;
actualCountdown -= 1;
actualCountdown -= 1;
actualCountdown -= 1;
console.log("Countdown: " + actualCountdown);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

var username1 = "gamer99";
var username2 = "Gamer99";
console.log("Names match: " + (username1 == username2));

// Logic bug ↓
    // the loose equality operator (==) should come back as true, but being that 
    // username2 has a capitol G then your comparison will come back false. You can
    // set the names for the comparison equal but making them both lowercase. 
// Style issue 1 ↓
    // VARIABLES SHOULD BE camelCased (userName1 and userName2)
// Style issue 2 ↓
    // VAR variables are no longer standard.
    // Variables should always be declared as const or let.
// Your fix ↓
const userName1 = "gamer99";
const userName2 = "Gamer99";
console.log(`Names match: ${userName1.toLowerCase == userName2.toLowerCase}`);

    // You can also rewrite the log as a template literal