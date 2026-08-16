/* ============================================
   Daily Habits — app.js
   Handles adding, checking off, deleting, and
   saving habits so they survive page refreshes.
   ============================================ */

// ---------- Grab the HTML elements we need ----------
const form = document.getElementById("habit-form");
const input = document.getElementById("habit-input");
const list = document.getElementById("habit-list");
const emptyMessage = document.getElementById("empty-message");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const todayDate = document.getElementById("today-date");
const themeToggle = document.getElementById("theme-toggle");
const quote = document.getElementById("quote");

// ---------- Our data ----------
// Each habit is an object like: { id: 1721900000, name: "Drink water", done: false }
let habits = [];

// ---------- Quote API ---------
// Grabs a quote from the internet for "motivation"

fetch("https://thequoteshub.com/api/")
  .then(response => {
    if (!response.ok){
      throw new Error("Error, resouce could not be found. Sorry!")
    }
    return response.json()
  })
  .then(data => {
    quote.textContent = data.text;
  })
  .catch(error => console.error(error));


// ---------- Saving & loading (localStorage) ----------
// localStorage lets the browser remember data between visits.
// It only stores text, so we convert our array to a JSON string and back.

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
  localStorage.setItem("lastDate", getTodayKey());
}

function loadHabits() {
  const saved = localStorage.getItem("habits");
  if (saved) {
    habits = JSON.parse(saved);
  }
}

// A simple "date key" like "2026-07-30" so we can tell when a new day starts
function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

// If the saved data is from a previous day, uncheck everything —
// it's a fresh day, so habits start as "not done" again.
function resetIfNewDay() {
  const lastDate = localStorage.getItem("lastDate");
  if (lastDate && lastDate !== getTodayKey()) {
    habits.forEach(function (habit) {
      habit.done = false;
    });
    saveHabits();
  }
}

// ---------- Rendering ----------
// This function redraws the whole list from the `habits` array.
// Whenever the data changes, we call render() and the page updates.

function render() {
  list.innerHTML = ""; // clear the list first

  habits.forEach(function (habit) {
    // Build one row: <li> containing checkbox + name + delete button
    const row = document.createElement("li");
    row.className = "habit-row" + (habit.done ? " done" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = habit.done;
    checkbox.addEventListener("change", function () {
      toggleHabit(habit.id);
    });

    const name = document.createElement("span");
    name.className = "habit-name";
    name.textContent = habit.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "✕";
    deleteBtn.setAttribute("aria-label", "Delete " + habit.name);
    deleteBtn.addEventListener("click", function () {
      deleteHabit(habit.id);
    });

    row.append(checkbox, name, deleteBtn);
    list.append(row);
  });

  // Show the empty message only when there are no habits
  emptyMessage.style.display = habits.length === 0 ? "block" : "none";

  updateProgress();
}

function updateProgress() {
  const total = habits.length;
  const done = habits.filter(function (habit) {
    return habit.done;
  }).length;

  if (total === 0) {
    progressText.textContent = "";
    progressFill.style.width = "0%";
    return;
  }

  progressText.textContent = done + " of " + total + " done today";
  progressFill.style.width = (done / total) * 100 + "%";
}

// ---------- Actions ----------

function addHabit(name) {
  habits.push({
    id: Date.now(), // current timestamp doubles as a unique ID
    name: name,
    done: false,
  });
  saveHabits();
  render();
}

function toggleHabit(id) {
  const habit = habits.find(function (h) {
    return h.id === id;
  });
  if (habit) {
    habit.done = !habit.done; // flip true/false
    saveHabits();
    render();
  }
}

function deleteHabit(id) {
  habits = habits.filter(function (h) {
    return h.id !== id;
  });
  saveHabits();
  render();
}

// ---------- Wire up the form ----------

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading
  const name = input.value.trim();
  if (name !== "") {
    addHabit(name);
    input.value = ""; // clear the box for the next habit
    input.focus();
  }
});
// ---------- Dark Mode ----------
// We store just the string "dark" or "light" under its own localStorage key,
// separate from the habits data.

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️"; // show a sun, meaning "tap to go light"
  } else {
    document.body.removeAttribute("data-theme");
    themeToggle.textContent = "🌙"; // show a moon, meaning "tap to go dark"
  }
}

function loadTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) {
    applyTheme(saved);
  } else {
    // No saved preference yet — fall back to the user's system setting
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }
}

themeToggle.addEventListener("click", function () {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// ---------- Start the app ----------

todayDate.textContent = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  month: "long",
  day: "numeric",
});

loadHabits();
resetIfNewDay();
render();
loadTheme();