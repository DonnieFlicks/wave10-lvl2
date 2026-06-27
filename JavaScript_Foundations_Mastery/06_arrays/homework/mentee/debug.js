// ============================================================
// 🐛  ARRAYS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the middle element ("C") of the array.
// Instead it logs undefined. What's wrong?

// const letters = ["A", "B", "C", "D", "E"];
// const middleIndex = letters.length / 2;
// console.log(letters[middleIndex]);

// What's wrong ↓
                // middleIndex equates to 2.5 and you cannot use a float number to find an index in an array
// Your fix ↓
            // use the Math.floor method to get 2

const letters = ["A", "B", "C", "D", "E"];
const middleIndex = Math.floor(letters.length / 2);
console.log(letters[middleIndex]);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should build a total of all prices.
// It logs NaN instead of a number. What's wrong?

// const prices = [10, 20, 30, 40];
// let total = 0;

// for (let i = 0; i <= prices.length; i++) {
//   total += prices[i];
// }

// console.log("Total: $" + total);

// What's wrong ↓
                // the issue is with the i <= prices.length. The "<=" says 
                // we want to grab the element in prices[4] which doesn't exist
// Your fix ↓


const prices = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < prices.length; i++) { // replaceing "<=" with "<"
  total += prices[i];
}

console.log("Total: $" + total);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to find the highest score in the array
// and log the winner's name. It always logs the wrong winner.
// There are TWO bugs. Find both.

// const names  = ["Alice", "Bob", "Carol", "Dave"];
// const scores = [82, 91, 78, 95];

// let topIndex  = 1;
// let topScore  = 0;

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] > topScore) {
//     topScore = scores[i];
//     topIndex = i;
//   }
// }

// console.log("Winner: " + names[topIndex] + " with " + topScore);

// Bug 1 ↓

// topIndex = 1 — should be 0. If the loop never updates 
// (for example, all scores were 0 or negative), 
// it would wrongly report Bob as winner by default instead of Alice.

// Bug 2 ↓

// topScore = 0 — should be seeded with scores[0]. 
// If all scores were negative, no score would ever beat 0, 
// so the loop would never update anything and the result would be wrong.

// Your fix ↓

const names  = ["Alice", "Bob", "Carol", "Dave"];
const scores = [82, 91, 78, 95];

let topIndex  = 0;
let topScore  = scores[0];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}

console.log("Winner: " + names[topIndex] + " with " + topScore);