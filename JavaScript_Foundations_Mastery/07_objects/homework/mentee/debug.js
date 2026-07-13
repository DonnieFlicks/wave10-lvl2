// ============================================================
// 🐛  OBJECTS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the product's category but logs undefined.

const product = {
  name:     "Laptop",
  price:    999,
  category: "Electronics",
  stock:    10
};

console.log(product.Category);

// What's wrong ↓
                // the "Category" key when trying to console.log is capitalized
                // but the key in the product object is lowercase so it wont pick it up.
// Your fix ↓

console.log(product.category);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should log each product's name and price.
// It logs "undefined undefined" for every product. Why?

const inventory = [
  { Name: "Shirt",  Price: 29.99 },
  { Name: "Jeans",  Price: 59.99 },
  { Name: "Jacket", Price: 89.99 }
];

for (let i = 0; i < inventory.length; i++) {
  console.log(inventory[i].Name + " — $" + inventory[i].Price);
}

// What's wrong ↓
                // same with debug 1... capitalizations are not matched.
                // either change the object keys to lower case OR match the key name
                // in the console.log on line 43.
// Your fix ↓
            // make the keys in the object lowercase.

// const inventory = [
//   { name: "Shirt",  price: 29.99 },
//   { name: "Jeans",  price: 59.99 },
//   { name: "Jacket", price: 89.99 }
// ];

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This should calculate the total value of all products
// (price × stock) and log it. It logs NaN. There are TWO bugs.

const products = [
  { name: "Phone",   price: 699, stock: 15 },
  { name: "Tablet",  price: 499, stock: 8  },
  { name: "Monitor", price: 329, stock: 12 }
];

let totalValue = 0;

for (let i = 0; i < products.length; i++) {
  totalValue += products[i].price * products[i].stock;
}

console.log("Total value: $" + totalValue);

// Bug 1 ↓
          // products[i].stock for the totalValue variable
// Bug 2 ↓
          // for loop needs to be (i=0; i < products.length; i++)
// Your fix ↓


// for (let i = 0; i < products.length; i++) {
//   totalValue += products[i].price * products[i].stock;
// }