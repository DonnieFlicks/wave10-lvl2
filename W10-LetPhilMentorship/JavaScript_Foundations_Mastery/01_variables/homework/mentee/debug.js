// ============================================================
// 🐛  VARIABLES — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment before your fix.
// Run the file to confirm each fix works.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This throws an error. What's wrong and how do you fix it?

const storeName = "TechMart";
storeName = "MegaShop";
console.log(storeName);

// What's wrong ↓

    //  you are trying to assign a new 
    // value to a --const-- variable, which CANNOT have its value changed.

// Your fix ↓

    let storeName = "TechMart";
    storeName = "MegaShop";
    console.log(storeName);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This runs but the output is wrong. Find the bug.

let item1Price = 19.99;
let item2Price = 34.99;
let orderTotal = item1Price + Item2Price;
console.log("Total: $" + orderTotal);

// What's wrong ↓

    // Item2Price is undefined. The "I" in Item2Price is capitalized, 
    // yet the declared variable is "item2Price" with a lowercase "i".

// Your fix ↓

let item1Price = 19.99;
let item2Price = 34.99;
let orderTotal = item1Price + item2Price;
console.log("Total: $" + orderTotal);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code runs without throwing an error,
// but something is still wrong with it.
// Find the issue and explain why it's a problem.

var productName = "Headphones";
var productPrice = 49.99;
console.log(productName + " — $" + productPrice);

// Hint: the code works, but what keyword should you be using instead?
// Why is the current keyword considered bad practice?

// What's wrong ↓

    // Using the --var-- keyword creates a variable that can cause scoping issues.
    // The "productName" and "productPrice" variable names are being used in the app.js file.
    // By using --var-- you can accidentally re-declare a variable in the same scope.

// Your fix ↓

    let productName = "Headphones";
    let productPrice = 49.99;
    console.log(productName + " — $" + productPrice);