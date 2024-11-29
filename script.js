let count = 0; // Current count
let sequence = []; // Sequence of previous counts

// Translations for PT, EN, ES
const translations = {
  pt: {
    title: "Contador de Ponto de Crochê",
    sequenceLabel: "Sequência:",
    nextButton: "Próxima",
    resetButton: "Reiniciar",
    footerMessage: "💬 Deixe-me uma mensagem. Feedback, sugestões.",
    footerCoffee: "☕ Compre-me um café",
    guideMessage: "❔ Como usar?", // Translation for the guide link
  },
  en: {
    title: "Crochet Stitch Counter",
    sequenceLabel: "Sequence:",
    nextButton: "Next",
    resetButton: "Reset",
    footerMessage: "💬 Leave me a message. Feedback, suggestions.",
    footerCoffee: "☕ Buy me a Coffee",
    guideMessage: "❔ How to use?", // Translation for the guide link
  },
  es: {
    title: "Contador de Puntos de Crochet",
    sequenceLabel: "Secuencia:",
    nextButton: "Siguiente",
    resetButton: "Reiniciar",
    footerMessage: "💬 Déjame un mensaje. Comentarios, sugerencias.",
    footerCoffee: "☕ Cómprame un café",
    guideMessage: "❔ Cómo usar?", // Translation for the guide link
  },
};

// Set default language to English
let lang = "en";

// Function to increment the count
function incrementCount() {
  count++;
  console.log(`Count increased: ${count}`);
  document.getElementById("counter").textContent = count;
}

// Function to reset the count and clear the sequence
function resetCount() {
  count = 0;
  sequence = [];
  console.log("Count and sequence reset.");
  document.getElementById("counter").textContent = count;
  document.getElementById("sequence").textContent =
    translations[lang].sequenceLabel + " " + sequence.join(", ");
}

// Function to add the current count to the sequence and reset count
function nextSequence() {
  console.log(`Clicked the 'Next' button. Count: ${count}`);
  if (count > 0) {
    sequence.push(count);
    console.log(`Sequence after adding: ${sequence.join(", ")}`);
    count = 0; // Reset count
    document.getElementById("counter").textContent = count;
  } else {
    console.log("Count was zero. Not added to the sequence.");
  }
  document.getElementById("sequence").textContent =
    translations[lang].sequenceLabel + " " + sequence.join(", ");

  // Remove focus from the "Next" button after clicking
  document.getElementById("nextButton").blur();
}

// Add event listener for space key press
document.addEventListener("keydown", function (event) {
  if (event.key === " " || event.code === "Space") {
    console.log("Space key pressed.");
    incrementCount();
  }
});

// Add event listeners for buttons
document.getElementById("resetButton").addEventListener("click", resetCount);
document.getElementById("nextButton").addEventListener("click", nextSequence);

// Add event listener for the round button click
document
  .getElementById("roundButton")
  .addEventListener("click", incrementCount);

// Function to remove focus from buttons after clicking
function removeFocusAfterClick(button) {
  button.blur(); // Remove focus from the button
}

// Add event listeners to all buttons to remove focus after clicking
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => removeFocusAfterClick(button));
});

// Function to change the language
function changeLanguage(language) {
  lang = language;
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("sequence").textContent =
    translations[lang].sequenceLabel + " " + sequence.join(", ");
  document.getElementById("nextButton").textContent =
    translations[lang].nextButton;
  document.getElementById("resetButton").textContent =
    translations[lang].resetButton;

  // Update the footer content with the translation
  document.getElementById("footer-message").textContent =
    translations[lang].footerMessage;
  document.getElementById("footer-coffee").textContent =
    translations[lang].footerCoffee;
  document.getElementById("guide-message").textContent =
    translations[lang].guideMessage; // Update the "How to use" link
}

// Apply default language on page load
window.onload = function () {
  changeLanguage(lang); // Apply translation on page load
};
