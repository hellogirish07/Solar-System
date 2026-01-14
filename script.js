const planetData = {
  sun: {
    name: "The Sun",
    img: "./img/Sun.jpg",
    desc: "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything—from the biggest planets to the smallest particles of debris—in its orbit.",
    fact: "The Sun's core is around 15 million degrees Celsius (27 million degrees Fahrenheit).",
  },

  mercury: {
    name: "Mercury",
    img: "./img/Mercury.jpg",
    desc: "Mercury is the smallest planet in our solar system and the closest to the Sun. It is only slightly larger than Earth's Moon. Mercury is a rocky planet, also known as a terrestrial planet, with a solid, cratered surface, much like the Moon.",
    fact: "Despite being closest to the Sun, Mercury is not the hottest planet; Venus is hotter.",
  },

  venus: {
    name: "Venus",
    img: "./img/Venus.jpg",
    desc: "Venus is often called Earth's twin because they are similar in size and structure. However, Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect.",
    fact: "Venus is the hottest planet in our solar system, with surface temperatures hot enough to melt lead.",
  },

  earth: {
    name: "Earth",
    img: "./img/Earth.jpg",
    desc: "Earth is our home planet and the third planet from the Sun. It is the only world in our solar system known to harbor life. It is also the only planet with liquid water on its surface.",
    fact: "Earth is the only planet not named after a Greek or Roman god or goddess.",
  },

  moon: {
    name: "The Moon",
    img: "./img/Moon.jpg",
    desc: "The Moon is Earth's only natural satellite. It is the fifth largest moon in the solar system and is the brightest and largest object in our night sky. The Moon makes Earth a more livable planet by moderating our home planet's wobble on its axis.",
    fact: "The Moon is drifting away from Earth at a rate of about 3.8 centimeters per year.",
  },

  mars: {
    name: "Mars",
    img: "./img/Mars.jpg",
    desc: "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence that Mars was—billions of years ago—much wetter and warmer, with a thicker atmosphere. It is known as the 'Red Planet' due to iron minerals in the soil oxidizing, or rusting.",
    fact: "Mars is home to Olympus Mons, the largest volcano in the entire solar system.",
  },

  jupiter: {
    name: "Jupiter",
    img: "./img/Jupiter.jpg",
    desc: "Jupiter is more than twice as massive as the other planets of our solar system combined. The giant planet's Great Red Spot is a centuries-old storm bigger than Earth. It is a gas giant and lacks a solid surface.",
    fact: "Jupiter has more than 75 moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto.",
  },

  saturn: {
    name: "Saturn",
    img: "./img/saturn.jpg",
    desc: "Saturn is the second-largest planet in our solar system and is adorned with a dazzling, complex system of icy rings. Like Jupiter, Saturn is mostly a ball of hydrogen and helium.",
    fact: "Saturn is the only planet in our solar system that is less dense than water; it would float in a giant bathtub.",
  },

  uranus: {
    name: "Uranus",
    img: "./img/Uranus.jpg",
    desc: "Uranus is an ice giant. Most of its mass is a hot, dense fluid of 'icy' materials—water, methane, and ammonia—above a small rocky core. It has 27 known moons and a faint ring system.",
    fact: "Uranus rotates on its side, meaning it rolls around the Sun like a ball.",
  },

  neptune: {
    name: "Neptune",
    img: "./img/Neptune.jpg",
    desc: "Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. It is the first planet located through mathematical calculations rather than direct observation.",
    fact: "Neptune has the strongest winds in the solar system, reaching speeds of over 2,000 kilometers per hour.",
  },
};

function resizeSystem() {
  const wrapper = document.getElementById("master-container");
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const minDim = Math.min(screenWidth, screenHeight);

  // Scaling logic: make the 1000px container fit the screen
  const scale = (minDim * 0.95) / 1000;
  wrapper.style.transform = `scale(${scale})`;
}

function showInfo(id) {
  const data = planetData[id];
  document.getElementById("planet-img").src = data.img;
  document.getElementById("planet-name").innerText = data.name;
  document.getElementById("planet-desc").innerText = data.desc;
  document.getElementById("planet-fact").innerText = data.fact;
  document.getElementById("info-panel").classList.add("active");
}

function closeInfo() {
  document.getElementById("info-panel").classList.remove("active");
}

function createStars() {
  const container = document.getElementById("star-container");
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 2;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.setProperty("--duration", Math.random() * 3 + 2 + "s");
    container.appendChild(star);
  }
}

window.addEventListener("resize", resizeSystem);
window.onload = () => {
  createStars();
  resizeSystem();
};
