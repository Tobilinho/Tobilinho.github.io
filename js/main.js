const drinks = {
  "gin-tonics": {
    name: "Diverse Gin Tonics",
    img: "img/gin-tonics.jpg",
    scalable: false,
    ingredients: [
      "5 cl Gin deiner Wahl (z. B. Tanqueray, Knut Hansen, Ocean Gin)",
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
  "gin-rickey": {
    name: "Gin Rickey",
    img: "img/gin-rickey.jpg",
    scalable: true,
    ingredients: [
      "6 cl Gin",
      "1 1/2 Limetten",
      "6 cl Sprudelwasser",
      "Eiswürfel"
    ],
    steps: [
      "Eiswürfel in ein hohes Glas füllen",
      "Limette auspressen und den Saft sowie die ausgepresste Limette ins Glas geben",
      "Gin hinzufügen",
      "Mit Sprudelwasser auffüllen, umrühren und mit Limettenspalten garnieren"
    ]
  },
  "gin-gurke": {
    name: "Cucumber Gimlet",
    img: "img/cucumber-gimlet.jpg",
    scalable: true,
    ingredients: [
      "6 cl Tanqueray No. 10 Gin",
      "2,25 cl Limettensaft",
      "1,5 cl Zuckersirup",
      "3 Scheiben Gurke (als Garnitur)"
    ],
    steps: [
      "Gin, Limettensaft und Zuckersirup in einen Shaker mit Eis geben",
      "Kräftig shaken",
      "In ein Cocktailglas abseihen",
      "Mit Gurkenscheiben garnieren"
    ]
  },
  "caipirinha": {
    name: "Caipirinha",
    img: "img/caipirinha.jpg",
    scalable: false,
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
    scalable: true,
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
  "ipanema": {
    name: "Ipanema",
    img: "img/ipanema.jpg",
    scalable: false,
    ingredients: [
      "1 Limette",
      "2 TL Rohrzucker",
      "6 cl Ginger Ale",
      "Eiswürfel"
    ],
    steps: [
      "Limette heiß abwaschen und in 8 Stücke schneiden",
      "Mit Rohrzucker im Glas zerdrücken, bis der Saft austritt",
      "Eiswürfel dazugeben",
      "Mit Ginger Ale auffüllen und genießen"
    ]
  },
  "virgin-caipirinha": {
    name: "Virgin Caipirinha",
    img: "img/virgin-caipirinha.jpg",
    scalable: false,
    ingredients: [
      "1 Limette",
      "2 TL Rohrzucker",
      "Crushed Ice",
      "Sprudelwasser"
    ],
    steps: [
      "Limette achteln und mit Zucker zerdrücken",
      "Crushed Ice dazugeben",
      "Mit Sprudelwasser auffüllen"
    ]
  },
  "knut-hansen-mocktail": {
    name: "Knut Hansen alkoholfrei",
    img: "img/knut-hansen.jpg",
    scalable: false,
    ingredients: [
      "5 cl Knut Hansen alkoholfrei",
      "Tonic Water",
      "Eis",
      "Rosmarinzweig oder Gurke zur Garnitur"
    ],
    steps: [
      "Eiswürfel in ein Glas geben",
      "Alkoholfreien Knut Hansen dazugeben",
      "Mit Tonic Water auffüllen",
      "Mit Rosmarin oder Gurke garnieren"
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const drink = drinks[params.get("drink")];

function scaleIngredients(ingredients, factor) {
  return ingredients.map(item => {
    return item.replace(/(\d+(?:[\.,]\d+)?)(\s*(cl|TL|EL|ml|g))/gi, (match, value, unit) => {
      const num = parseFloat(value.replace(',', '.')) * factor;
      return `${num.toFixed(2).replace('.', ',')}${unit}`;
    });
  });
}

if (drink) {
  const container = document.getElementById("cocktail");
  let servings = 1;

  const updateDisplay = () => {
    const scaled = drink.scalable ? scaleIngredients(drink.ingredients, servings) : drink.ingredients;
    container.innerHTML = `
      <h1>${drink.name}</h1>
      <img src="${drink.img}" alt="${drink.name}" style="max-width: 90%; border-radius: 1rem;">
      ${drink.scalable ? `
        <label for="portionen">Portionen: </label>
        <select id="portionen">
          ${[1, 2, 3, 4, 5].map(n => `<option value="${n}" ${n === servings ? 'selected' : ''}>${n}</option>`).join('')}
        </select>
      ` : ''}
      <h2>Zutaten</h2>
      <ul>${scaled.map(i => `<li>${i}</li>`).join('')}</ul>
      <h2>Zubereitung</h2>
      <ol>${drink.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <p><a href="index.html">⬅️ Zurück zur Übersicht</a></p>
    `;

    if (drink.scalable) {
      document.getElementById("portionen").addEventListener("change", e => {
        servings = parseInt(e.target.value);
        updateDisplay();
      });
    }
  };

  updateDisplay();
} else {
  document.getElementById("cocktail").innerHTML = "<p>Rezept nicht gefunden.</p><a href='index.html'>Zurück</a>";
}