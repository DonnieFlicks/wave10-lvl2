// ============================================================
// 🐛  DATA TYPES — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the user's full name in title case.
// Instead it logs "undefined Rivera". What's wrong?

// const user = { firstName: "alex", lastName: "Rivera" };

// const { firstname, lastName } = user;
// const fullName = `${firstname} ${lastName}`;
// console.log(fullName); // "undefined Rivera"

// What's wrong ↓
          // "alex" is stored in firstName but the variable calling for alex is "firstname". 2 Different variables.
// Your fix ↓
const correctUser = { firstName: "alex", lastName: "Rivera"};

const {firstName, lastName} = correctUser;
const correctFullName = `${firstName} ${lastName}`;
console.log(correctFullName); // "alex Rivera"

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This validation function should reject empty usernames.
// But it accepts an empty string and even a string of spaces.
// What's wrong?

function validateUsername(username) {
  if (!username) {
    return "Username is required";
  }
  return `Valid: ${username}`;
}

console.log(validateUsername(""));       // ✅ catches empty string
console.log(validateUsername("   ").trim());    // ❌ should be invalid — logs "Valid:    "
console.log(validateUsername("alexdev")); // ✅ valid

// What's wrong ↓
          // "   " <- spaces are considered truthy, so (!username) does not catch it. Must use .trim() to clear spaces.
// Your fix ↓


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This form validator runs correctly on valid data but has
// TWO bugs that appear with edge-case inputs.

function validateAge(ageStr) {
  const age = parseInt(ageStr);
  return age >= 13 && age <= 120;
}

function validateForm(data) {
  const usernameOk = data.username.length > 3;
  const emailOk    = data.email.includes("@");
  const ageOk      = validateAge(data.age);

  if (usernameOk && emailOk && ageOk) {
    return `Welcome, ${data.username}!`;
  }
  return "Form invalid";
}

// These work:
console.log(validateForm({ username: "alexdev", email: "a@b.com", age: "28" }));

// These don't:
console.log(validateForm({ username: "alexdev", email: "a@b.com", age: "abc" }));
// Bug 1: validateAge("abc") — what does parseInt return? Is it >= 13?

console.log(validateForm({ username: "al",      email: "a@b.com", age: "28" }));
// Bug 2: username "al" has length 2. Is 2 > 3?

// Bug 1 ↓

// Bug 2 ↓

// Your fix ↓
