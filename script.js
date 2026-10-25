
const activities = [
  { id: 1, name: "Movie Night", emoji: "🎬", description: "Grab some snacks, get cozy and watch a movie!", budget: "low", company: ["alone", "friends", "date"], time: "medium" },
  { id: 2, name: "Go for a Walk", emoji: "🌳", description: "Explore a park or a new neighborhood.", budget: "free", company: ["alone", "friends", "date"], time: "short" },
  { id: 3, name: "Bowling", emoji: "🎳", description: "Challenge someone to a fun bowling game!", budget: "medium", company: ["friends", "date"], time: "medium" },
  { id: 4, name: "Coffee Date", emoji: "☕", description: "Visit a cozy café and enjoy a coffee.", budget: "low", company: ["friends", "date"], time: "short" },
  { id: 5, name: "Spa Day", emoji: "🧖", description: "Treat yourself to a relaxing spa experience.", budget: "high", company: ["alone", "friends", "date"], time: "long" },
  { id: 6, name: "Picnic", emoji: "🧺", description: "Pack some food and enjoy a picnic outside.", budget: "low", company: ["friends", "date"], time: "medium" },
  { id: 7, name: "Bake Cookies", emoji: "🍪", description: "Try baking some delicious homemade cookies.", budget: "low", company: ["alone", "friends", "date"], time: "medium" },
  { id: 8, name: "Visit a Museum", emoji: "🏛️", description: "Discover something new at a museum.", budget: "medium", company: ["alone", "friends", "date"], time: "medium" },
  { id: 9, name: "Game Night", emoji: "🎲", description: "Play board games or card games together.", budget: "free", company: ["friends", "date"], time: "medium" },
  { id: 10, name: "Shopping Trip", emoji: "🛍️", description: "Explore your favorite shops and find something new.", budget: "high", company: ["alone", "friends"], time: "long" },
  { id: 11, name: "Go Swimming", emoji: "🏊", description: "Spend some time swimming and relaxing.", budget: "medium", company: ["alone", "friends", "date"], time: "medium" },
  { id: 12, name: "Read a Book", emoji: "📚", description: "Find a comfortable spot and enjoy a good book.", budget: "free", company: ["alone"], time: "short" },
  { id: 13, name: "Try a New Restaurant", emoji: "🍝", description: "Discover a restaurant you have never visited.", budget: "high", company: ["friends", "date"], time: "medium" },
  { id: 14, name: "Painting Session", emoji: "🎨", description: "Get creative with paints and make some art.", budget: "low", company: ["alone", "friends", "date"], time: "medium" },
  { id: 15, name: "Go Hiking", emoji: "🥾", description: "Explore nature and enjoy some fresh air.", budget: "free", company: ["alone", "friends", "date"], time: "long" },
  { id: 16, name: "Karaoke Night", emoji: "🎤", description: "Sing your favorite songs with friends.", budget: "medium", company: ["friends", "date"], time: "medium" },
  { id: 17, name: "Watch the Sunset", emoji: "🌅", description: "Find a beautiful spot to watch the sunset.", budget: "free", company: ["alone", "friends", "date"], time: "short" },
  { id: 18, name: "Mini Golf", emoji: "⛳", description: "Compete in a fun round of mini golf.", budget: "medium", company: ["friends", "date"], time: "medium" },
  { id: 19, name: "Yoga Session", emoji: "🧘", description: "Relax and recharge with some yoga.", budget: "free", company: ["alone", "friends"], time: "short" },
  { id: 20, name: "Explore a New City", emoji: "🚆", description: "Take a day trip and discover somewhere new.", budget: "high", company: ["alone", "friends", "date"], time: "long" },
  { id: 21, name: "Photo Walk", emoji: "📸", description: "Take creative photos around your neighborhood.", budget: "free", company: ["alone", "friends", "date"], time: "short" },
  { id: 22, name: "Make Mocktails", emoji: "🍹", description: "Create colorful alcohol-free drinks at home.", budget: "low", company: ["alone", "friends", "date"], time: "short" },
  { id: 23, name: "Escape Room", emoji: "🔐", description: "Solve puzzles and escape before time runs out!", budget: "high", company: ["friends", "date"], time: "medium" },
  { id: 24, name: "Thrift Shopping", emoji: "👕", description: "Find unique second-hand treasures.", budget: "low", company: ["alone", "friends", "date"], time: "medium" },
  { id: 25, name: "DIY Home Spa", emoji: "🛁", description: "Enjoy a relaxing self-care evening at home.", budget: "low", company: ["alone"], time: "medium" },
  { id: 26, name: "Visit a Library", emoji: "📖", description: "Explore books or find a peaceful reading spot.", budget: "free", company: ["alone", "friends"], time: "medium" },
  { id: 27, name: "Ice Skating", emoji: "⛸️", description: "Have fun skating at a local ice rink.", budget: "medium", company: ["friends", "date"], time: "medium" },
  { id: 28, name: "Build a Puzzle", emoji: "🧩", description: "Challenge yourself with a jigsaw puzzle.", budget: "free", company: ["alone", "friends", "date"], time: "medium" },
  { id: 29, name: "Visit a Botanical Garden", emoji: "🌷", description: "Explore beautiful flowers and plants.", budget: "free", company: ["alone", "friends", "date"], time: "medium" },
  { id: 30, name: "Dance Party", emoji: "💃", description: "Put on your favorite music and dance!", budget: "free", company: ["alone", "friends", "date"], time: "short" },
  { id: 31, name: "Amusement Park", emoji: "🎢", description: "Spend a fun day enjoying rides and attractions.", budget: "high", company: ["friends", "date"], time: "long" },
  { id: 32, name: "Try a New Recipe", emoji: "👩‍🍳", description: "Cook something you have never made before.", budget: "low", company: ["alone", "friends", "date"], time: "medium" },
  { id: 33, name: "Stargazing", emoji: "🌟", description: "Find a dark spot and look at the stars.", budget: "free", company: ["alone", "friends", "date"], time: "short" },
  { id: 34, name: "Pottery Painting", emoji: "🏺", description: "Decorate a ceramic mug or plate.", budget: "high", company: ["alone", "friends", "date"], time: "medium" },
  { id: 35, name: "Bike Ride", emoji: "🚲", description: "Explore your area on a bicycle.", budget: "free", company: ["alone", "friends", "date"], time: "medium" },
  { id: 36, name: "Make a Vision Board", emoji: "✨", description: "Create a collage of your dreams and goals.", budget: "free", company: ["alone", "friends"], time: "medium" }
];

const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const favoritesList = document.getElementById("favoritesList");

let currentActivity = null;
let favorites = [];

try {
  const saved = JSON.parse(localStorage.getItem("activityFavorites"));
  if (Array.isArray(saved)) {
    favorites = saved.filter(id => Number.isInteger(id));
  }
} catch (error) {
  favorites = [];
}

function saveFavorites() {
  localStorage.setItem("activityFavorites", JSON.stringify(favorites));
}

function generateActivity() {
  const budget = document.getElementById("budget").value;
  const company = document.getElementById("company").value;
  const time = document.getElementById("time").value;

  const matches = activities.filter(activity => {
    const budgetMatch = budget === "any" || activity.budget === budget;
    const companyMatch = company === "any" || activity.company.includes(company);
    const timeMatch = time === "any" || activity.time === time;

    return budgetMatch && companyMatch && timeMatch;
  });

  result.classList.remove("hidden");

  if (matches.length === 0) {
    currentActivity = null;
    result.innerHTML = `
      <div class="emoji">🔎</div>
      <h2>No activities found!</h2>
      <p>Try changing your filters to find more ideas.</p>
    `;
    return;
  }

  let available = matches.filter(activity => activity.id !== currentActivity?.id);
  if (available.length === 0) available = matches;

  currentActivity = available[Math.floor(Math.random() * available.length)];

  const isFavorite = favorites.includes(currentActivity.id);

  result.innerHTML = `
    <div class="emoji">${currentActivity.emoji}</div>
    <h2>${currentActivity.name}</h2>
    <p>${currentActivity.description}</p>
    <button id="favoriteBtn">
      ${isFavorite ? "♥ Saved to favorites" : "♡ Save to favorites"}
    </button>
    <button id="tryAgainBtn">Try another idea ↻</button>
  `;

  document.getElementById("favoriteBtn").addEventListener("click", () => {
    toggleFavorite(currentActivity.id);
    document.getElementById("favoriteBtn").textContent =
      favorites.includes(currentActivity.id)
        ? "♥ Saved to favorites"
        : "♡ Save to favorites";
  });

  document.getElementById("tryAgainBtn").addEventListener("click", generateActivity);
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favoriteId => favoriteId !== id);
  } else {
    favorites.push(id);
  }

  saveFavorites();
  renderFavorites();
}

function renderFavorites() {
  const savedActivities = activities.filter(activity => favorites.includes(activity.id));

  if (savedActivities.length === 0) {
    favoritesList.innerHTML = "<p>No favorites yet!</p>";
    return;
  }

  favoritesList.innerHTML = "";

  savedActivities.forEach(activity => {
    const card = document.createElement("div");
    card.className = "favorite-card";

    const info = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    title.textContent = `${activity.emoji} ${activity.name}`;
    description.textContent = activity.description;

    info.append(title, description);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => toggleFavorite(activity.id));

    card.append(info, removeBtn);
    favoritesList.appendChild(card);
  });
}

generateBtn.addEventListener("click", generateActivity);
renderFavorites();
