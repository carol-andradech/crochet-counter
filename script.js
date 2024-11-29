let count = 0; // Contagem atual
let sequence = []; // Sequência de contagens anteriores

// Traduções para PT, EN, ES
const translations = {
  pt: {
    title: "Contador de Ponto de Crochê",
    sequenceLabel: "Sequência:",
    nextButton: "Próxima",
    resetButton: "Reiniciar",
    footerMessage: "💬 Deixe-me uma mensagem. Feedback, sugestões.",
    footerCoffee: "☕ Compre-me um café",
    guideMessage: "❔ Como usar?", // Tradução do link de guia
  },
  en: {
    title: "Crochet Stitch Counter",
    sequenceLabel: "Sequence:",
    nextButton: "Next",
    resetButton: "Reset",
    footerMessage: "💬 Leave me a message. Feedback, suggestions.",
    footerCoffee: "☕ Buy me a Coffee",
    guideMessage: "❔ How to use?", // Tradução do link de guia
  },
  es: {
    title: "Contador de Puntos de Crochet",
    sequenceLabel: "Secuencia:",
    nextButton: "Siguiente",
    resetButton: "Reiniciar",
    footerMessage: "💬 Déjame un mensaje. Comentarios, sugerencias.",
    footerCoffee: "☕ Cómprame un café",
    guideMessage: "❔ Cómo usar?", // Tradução do link de guia
  },
};

// Definir idioma padrão como inglês
let lang = "en";

// Função para aumentar a contagem
function incrementCount() {
  count++;
  console.log(`Contagem aumentada: ${count}`);
  document.getElementById("counter").textContent = count;
}

// Função para reiniciar a contagem e limpar a sequência
function resetCount() {
  count = 0;
  sequence = [];
  console.log("Contagem e sequência reiniciadas.");
  document.getElementById("counter").textContent = count;
  document.getElementById("sequence").textContent =
    translations[lang].sequenceLabel + " " + sequence.join(", ");
}

// Função para adicionar a contagem à sequência e zerar
function nextSequence() {
  console.log(`Clicou no botão 'Próxima'. Contagem ${count}`);
  if (count > 0) {
    sequence.push(count);
    console.log(`Sequência após adicionar: ${sequence.join(", ")}`);
    count = 0; // Zera a contagem
    document.getElementById("counter").textContent = count;
  } else {
    console.log("Contagem estava zerada. Não foi adicionada à sequência.");
  }
  document.getElementById("sequence").textContent =
    translations[lang].sequenceLabel + " " + sequence.join(", ");

  // Remover o foco do botão "Próxima" após o clique
  document.getElementById("nextButton").blur();
}

// Adiciona eventos para o clique no espaço e nos botões
document.addEventListener("keydown", function (event) {
  if (event.key === " " || event.code === "Space") {
    console.log("Espaço pressionado.");
    incrementCount();
  }
});

// Adiciona eventos para os botões
document.getElementById("resetButton").addEventListener("click", resetCount);
document.getElementById("nextButton").addEventListener("click", nextSequence);

// Adiciona evento para o clique no botão redondo
document
  .getElementById("roundButton")
  .addEventListener("click", incrementCount);

// Função para mudar o idioma
function changeLanguage(language) {
  lang = language;
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("sequence").textContent =
    translations[lang].sequenceLabel + " ";
  document.getElementById("nextButton").textContent =
    translations[lang].nextButton;
  document.getElementById("resetButton").textContent =
    translations[lang].resetButton;

  // Atualiza o conteúdo do footer com a tradução
  document.getElementById("footer-message").textContent =
    translations[lang].footerMessage;
  document.getElementById("footer-coffee").textContent =
    translations[lang].footerCoffee;
  document.getElementById("guide-message").textContent =
    translations[lang].guideMessage; // Atualiza o link "Como usar"
}

// Aplicar idioma padrão ao carregar a página
window.onload = function () {
  changeLanguage(lang); // Aplica a tradução ao carregar a página
};
