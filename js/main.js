// js/main.js

const drinks = {
  "gin-tonics": {
    name: "Diverse Gin Tonics",
    img: "img/gin-tonics.jpg",
    ingredients: [
      "5 cl Gin deiner Wahl",
      "Tonic Water",
      "Eis",
      "Garnitur: Limette, Gurke, Beeren etc."
    ],
    steps: [
      "Gin über Eis in ein Glas geben",
      "Mit Tonic Water auffüllen",
      "Nach Geschmack garnieren"
    ]
  },
  "caipirinha": {
    name: "Caipirinha",
    img: "img/caipirinha.jpg",
    ingredients: [
      "1 Limette",
      "2 TL Rohrzucker",
      "5 cl Cachaça",
      "Crushed Ice"
    ],
    steps: [
      "Limette achteln und mit Zucker zerdrücken",
      "Crushed Ice und Cachaça dazugeben",
      "Umrühren und servieren"
    ]
  },
  "daiquiri": {
    name: "Daiquiri",
    img: "img/daiquiri.jpg",
    ingredients: [
      "5 cl weißer Rum",
      "2 cl Limettensaft",
      "1 cl Zuckersirup",
      "Eis"
    ],
    steps: [
      "Alle Zutaten mit Eis shaken",
      "In ein gekühltes Glas abseihen"
    ]
  },
  "gin-rickey": {
    name: "Gin Rickey",
    img: "img/gin-rickey.jpg",
    ingredients: [
      "5 cl Gin",
      "2 cl Limettensaft",
      "Sodawasser",
      "Eis"
    ],
    steps: [
      "Gin und Limettensaft in ein Glas mit Eis geben",
      "Mit Sodawasser auffüllen",
      "Leicht umrühren"
    ]
  },
  "ipanema": {
    name: "Ipanema",
    img: "img/ipanema.jpg",
    ingredients: [
      "1 Limette",
      "2 TL Rohrzucker",
      "100 ml Maracujasaft",
      "Ginger Ale",
      "Crushed Ice",
      "Minze (optional)"
    ],
    steps: [
      "Limette achteln und mit Zucker zerdrücken",
      "Crushed Ice ins Glas geben",
      "Mit Maracujasaft und Ginger Ale auffüllen",
      "Optional mit Minze garnieren"
    ]
  },
  "virgin-caipirinha": {
    name: "Virgin Caipirinha",
    img: "img/virgin-caipirinha.jpg",
    ingredients: [
      "1 Limette",
      "2 TL Rohrzucker",
      "Crushed Ice",
      "Ginger Ale oder Zitronenlimonade"
    ],
    steps: [
      "Limette achteln und mit Zucker zerdrücken",
      "Crushed Ice dazugeben",
      "Mit Ginger Ale oder Limonade auffüllen"
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
    <p><a href="index.html">⬅️ Zurück zur Übersicht</a></p>
  `;
} else {
  document.getElementById("cocktail").innerHTML = "<p>Rezept nicht gefunden.</p><a href='index.html'>Zurück</a>";
}
