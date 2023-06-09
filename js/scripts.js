const suggestions = {
  ruby: {
    name: 'Ruby',
    description: 'A dynamic, open source programming language with a focus on simplicity and productivity.'
  },
  csharp: {
    name: 'C#',
    description: 'A modern, object-oriented programming language designed for building Windows applications.'
  },
  javascript: {
    name: 'JavaScript',
    description: 'A high-level, interpreted programming language that is widely used for creating interactive web pages.'
  },
  go: {
    name: 'Go',
    description: 'A simple, fast, and efficient programming language designed for building scalable network applications.'
  },
  python: {
    name: 'Python',
    description: 'A versatile programming language with a strong focus on simplicity and readability.'
  },
  rust: {
    name: 'Rust',
    description: 'A systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.'
  },
  swift: {
    name: 'Swift',
    description: 'A powerful and intuitive programming language designed for building iOS, macOS, watchOS, and tvOS apps.'
  }
};

function suggestLanguage(event) {
  event.preventDefault();

  const sigorRos = parseInt(document.querySelector('input[name="sigorRos"]:checked').value);
  const theBeeMovie = parseInt(document.querySelector('input[name="theBeeMovie"]:checked').value);
  const javaJava = parseInt(document.querySelector('input[name="javaJava"]:checked').value);
  const projectType = parseInt(document.querySelector('input[name="projectType"]:checked').value);
  const industry = parseInt(document.querySelector('input[name="industry"]:checked').value);

  const scores = {
    ruby: sigorRos + theBeeMovie + javaJava,
    csharp: theBeeMovie + javaJava + projectType,
    javascript: theBeeMovie + javaJava + industry,
    go: sigorRos + theBeeMovie + projectType,
    python: sigorRos + javaJava + projectType,
    rust: sigorRos + theBeeMovie + industry,
    swift: sigorRos + javaJava + industry
  };

  let maxScore = 0;
  let maxLanguage = '';
  for (const [language, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      maxLanguage = language;
    }
  }

  const suggestion = suggestions[maxLanguage];
  const suggestionName = suggestion.name;
  const suggestionDescription = suggestion.description;
  const suggestionElement = document.getElementById('suggestion');
  suggestionElement.innerHTML = `Based on your answers, we suggest learning ${suggestionName}! ${suggestionDescription}`;
  suggestionElement.classList.remove('hidden');
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#serious-form");
  form.addEventListener("submit", suggestLanguage);
});