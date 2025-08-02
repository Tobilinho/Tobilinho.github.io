// js/main.js

const drinks = {
  "mojito": {
    name: "Mojito",
    img: "img/mojito.jpg",
    ingredients: [
      "5 cl weißer Rum",
      "1 Limette",
      "2 TL Zucker",
      "Minze",
      "Sodawasser",
      "Eis"
    ],
    steps: [
      "Limette achteln und mit Zucker zerdrücken",
      "Minze leicht andrücken und hinzufügen",
      "Rum und Eis dazugeben",
      "Mit Sodawasser auffüllen"
    ]
  },
  "virgin-mojito": {
    name: "Virgin Mojito",
    img: "img/virgin-mojito.jpg",
    ingredients: [
      "1 Limette",
      "2 TL Zucker",
      "Minze",
      "Sodawasser",
      "Eis"
    ],
    steps: [
      "Limette achteln und mit Zucker zerdrücken",
      "Minze leicht andrücken und hinzufügen",
      "Eis dazugeben",
      "Mit Sodawasser auffüllen"
    ]
  },
  "margarita": {
    name: "Limetten-Margarita",
    img: "img/margarita.jpg",
    ingredients: [
      "4 cl Tequila",
      "2 cl Cointreau",
      "2 cl Limettensaft",
      "Salzrand",
      "Eis"
    ],
    steps: [
      "Zutaten shaken",
      "In Glas mit Salzrand geben",
      "Mit Limettenscheibe garnieren"
    ]
  },
  "cucumber-cooler": {
    name: "Cucumber Lime Cooler",
    img: "img/cucumber-cooler.jpg",
    ingredients: [
      "Gurkenscheiben",
      "2 cl Limettensaft",
      "1 TL Zucker",
      "Mineralwasser",
      "Eis"
    ],
    steps: [
      "Gurke und Zucker zerdrücken",
      "Limettensaft und Eis dazu",
      "Mit Wasser auffüllen"
    ]
  },
  "gin-basil": {
    name: "Gin Basil Smash",
    img: "img/gin-basil.jpg",
    ingredients: [
      "5 cl Gin",
      "2 cl Limettensaft",
      "Basilikum",
      "1 TL Zucker",
      "Eis"
    ],
    steps: [
      "Basilikum und Zucker zerdrücken",
      "Gin und Limettensaft dazu",
      "Shaken und auf Eis servieren"
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const drink = drinks[params.get("drink")];

if (drink) {
  const container = document.getElementById("cocktail");
  container.innerHTML = `
    <h1>${drink.name}</h1>
    <img src="${drink.img}" alt="${drink.name}" style="max-width: 90%; border-radius: 1rem;">
    <h2>Zutaten</h2>
    <ul>${drink.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    <h2>Zubereitung</h2>
    <ol>${drink.steps.map(s => `<li>${s}</li>`).join('')}</ol>
  `;
} else {
  document.getElementById("cocktail").innerHTML = "<p>Rezept nicht gefunden.</p><a href='index.html'>Zurück</a>";
}
