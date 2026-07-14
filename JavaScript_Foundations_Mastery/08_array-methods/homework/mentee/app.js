// ============================================================
// 🏠  ARRAY METHODS — HOMEWORK
// ============================================================
// Mini Project: Order Processing System
//
// Process a set of customer orders using ONLY array methods.
// No manual for loops allowed for this homework.
// Every task must use forEach, map, filter, find, some,
// every, or reduce.
//
// All output goes to the console. No HTML edits needed.
// ============================================================

// ============================================================
// THE DATA — do not modify this
// ============================================================
const orders = [
  {
    id: 1001,
    customer: "Maya Chen",
    total: 124.99,
    status: "delivered",
    items: 3,
    isPriority: false,
  },
  {
    id: 1002,
    customer: "Liam Torres",
    total: 49.99,
    status: "pending",
    items: 1,
    isPriority: true,
  },
  {
    id: 1003,
    customer: "Sofia Patel",
    total: 239.5,
    status: "delivered",
    items: 5,
    isPriority: true,
  },
  {
    id: 1004,
    customer: "Ethan Kim",
    total: 18.0,
    status: "cancelled",
    items: 1,
    isPriority: false,
  },
  {
    id: 1005,
    customer: "Zoe Williams",
    total: 89.99,
    status: "pending",
    items: 2,
    isPriority: false,
  },
  {
    id: 1006,
    customer: "Carlos Ruiz",
    total: 310.0,
    status: "delivered",
    items: 7,
    isPriority: true,
  },
  {
    id: 1007,
    customer: "Ava Johnson",
    total: 55.25,
    status: "pending",
    items: 2,
    isPriority: false,
  },
];

// ----------------------------------------------------------
// TASK 1 — Display all orders (forEach)
// ----------------------------------------------------------
// Use forEach to log a summary of every order.
// Format each line as:
//   "#" + order.id + " | " + order.customer
//   + " | $" + order.total
//   + " | " + order.status.toUpperCase()


orders.forEach((order) => console.log(`#${order.id} | ${order.customer} | $${order.total} | ${order.status.toUpperCase()}`));



// ----------------------------------------------------------
// TASK 2 — Build receipt strings (map)
// ----------------------------------------------------------
// Use map to create a new array called receipts.
// Each element should be a formatted string:
//   "Order #" + order.id + " — " + order.customer
//   + " — $" + order.total + " (" + order.items + " item(s))"
//
// Log receipts.length to confirm it matches orders.length.
// Use forEach on receipts to log each one.


const receipts = orders.map((order) => `Order #${order.id} - ${order.customer} - $${order.total} (${order.items} item(s))`);

console.log(receipts.length);

receipts.forEach((receipt) => console.log(receipt))


// ----------------------------------------------------------
// TASK 3 — Build order summary objects (map)
// ----------------------------------------------------------
// Use map to create a new array called summaries.
// Each element should be a NEW object with only:
//   { id: order.id, customer: order.customer, total: order.total }
//
// Log summaries.


const summaries = orders.map((order) => ({ id: order.id, customer: order.customer, total: order.total }))

console.log(summaries);


// ----------------------------------------------------------
// TASK 4 — Filter by status (filter)
// ----------------------------------------------------------
// Use filter to get only delivered orders → store in deliveredOrders.
// Use filter to get only pending orders   → store in pendingOrders.
// Use filter to get only cancelled orders → store in cancelledOrders.
//
// Log:
//   "Delivered: " + deliveredOrders.length
//   "Pending:   " + pendingOrders.length
//   "Cancelled: " + cancelledOrders.length


const delivered = orders.filter(function(order) {
  return order.status.toLowerCase() === "delivered";
})

const pending = orders.filter(function(order) {
  return order.status.toLowerCase() === "pending";
})

const cancelled = orders.filter(function(order) {
  return order.status.toLowerCase() === "cancelled";
})

console.log(`Delivered: ${delivered.length}`);
console.log(`Pending: ${pending.length}`);
console.log(`Cancelled: ${cancelled.length}`);


// ----------------------------------------------------------
// TASK 5 — High value orders (filter + map chained)
// ----------------------------------------------------------
// Use filter to get orders with total > 100.
// Chain map to extract just the customer names.
// Store the result in highValueCustomers.
//
// Log: "High value customers: " + highValueCustomers


const highValueCustomers = orders
  .filter(function(order) {
    return order.total > 100;
  })
  .map(function(order) {
    return order.customer;
  })


console.log(`High value customers: ${highValueCustomers}`)


// ----------------------------------------------------------
// TASK 6 — Find a specific order (find)
// ----------------------------------------------------------
// Use find to locate the order with id === 1005.
// Store it in foundOrder.
// Log: "Found: " + foundOrder.customer + " — $" + foundOrder.total
//
// Then use find to search for id === 9999.
// Store it in missingOrder.
// Log missingOrder.
// Write a comment: what does find return when nothing matches?


const foundOrder = orders.find(function(order) {
  return order.id === 1005;
})

console.log(`Found: ${foundOrder.customer} - $${foundOrder.total}`);


// ----------------------------------------------------------
// TASK 7 — Ask questions about the data (some + every)
// ----------------------------------------------------------
// Write your prediction as a comment BEFORE each one, then run.
//
// Use some  → is there at least one priority order?
//   Log: "Has priority order: " + result     // prediction: Yes
//
// Use some  → is there at least one order over $300?
//   Log: "Has $300+ order: " + result        // prediction: Yes
//
// Use every → are ALL orders either delivered or pending?
//   Log: "All active: " + result             // prediction: No
//
// Use every → do ALL priority orders have more than 1 item?
//   Hint: filter for isPriority first, then chain every
//   Log: "All priority multi-item: " + result // prediction: True

const hasPriority = orders.some(function(o) {
  return o.isPriority === true;
})

const over300 = orders.some(function(o) {
  return o.total > 300;
})

const orderStatus = orders.every(function(o) {
  return o.status === "pending" || o.status === "delivered";
})

const itemPrio = orders
.filter(function(o) {
  return o.isPriority === true;
})
.every(function(o) {
  return o.items > 1;
})

console.log(`Has Prority Order: ${hasPriority}`);
console.log(`Has $300+ order: ${over300}`);
console.log(`All active: ${orderStatus}`);
console.log(`All priority multi-item: ${itemPrio}`);


// ----------------------------------------------------------
// TASK 8 — Calculate totals (reduce)
// ----------------------------------------------------------
// Use reduce to calculate the total revenue from ALL orders.
// Start the accumulator at 0.
// Store in totalRevenue.
// Log: "Total revenue: $" + totalRevenue
//
// Use reduce to count the total number of items across all orders.
// Store in totalItems.
// Log: "Total items ordered: " + totalItems
//
// Calculate and log the average order value:
//   const averageOrder = totalRevenue / orders.length
//   Log: "Average order value: $" + averageOrder


const totalRevenue = orders.reduce(function(o, total) {
  return o, total;
}, 0)

console.log(totalRevenue);
// ----------------------------------------------------------
// TASK 9 — Connect the dots (filter + reduce)
// ----------------------------------------------------------
// Calculate the revenue from DELIVERED orders only.
//   Step 1: filter for delivered orders
//   Step 2: reduce to sum their totals
//   Store in deliveredRevenue.
//   Log: "Delivered revenue: $" + deliveredRevenue
//
// Calculate the revenue from PENDING orders only.
//   Same approach. Store in pendingRevenue.
//   Log: "Pending revenue: $" + pendingRevenue
//
// Then log:
//   "Unconfirmed revenue: $" + pendingRevenue
//   (This is money that hasn't been secured yet)

// ----------------------------------------------------------
// TASK 10 — Full pipeline (all methods)
// ----------------------------------------------------------
// Build a priority order report in these steps:
//
// Step 1: filter orders where isPriority is true
//         → store in priorityOrders
//
// Step 2: use every on priorityOrders to check if ALL
//         priority orders have been delivered
//         → store in allPriorityDelivered
//         → log: "All priority delivered: " + allPriorityDelivered
//
// Step 3: use reduce on priorityOrders to get the
//         total value of priority orders
//         → store in priorityRevenue
//         → log: "Priority revenue: $" + priorityRevenue
//
// Step 4: use map on priorityOrders to build display strings:
//         "⚡ #" + order.id + " " + order.customer + " — $" + order.total
//         → store in priorityDisplay
//
// Step 5: use forEach on priorityDisplay to log each line

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Status report object (reduce)
// ----------------------------------------------------------
// Use reduce to build a SINGLE summary object from all orders.
// The object should have this shape:
//   {
//     totalOrders:    number,
//     totalRevenue:   number,
//     deliveredCount: number,
//     pendingCount:   number,
//     cancelledCount: number,
//     priorityCount:  number
//   }
//
// Start the accumulator as an object:
//   { totalOrders: 0, totalRevenue: 0, deliveredCount: 0,
//     pendingCount: 0, cancelledCount: 0, priorityCount: 0 }
//
// On each iteration, increment the right properties.
// Store the result in a const called report.
// Log report.
//
// Hint: inside the reduce callback, update acc properties and return acc.
