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

  const sigorRos = document.querySelector('input[name="sigorRos"]:checked').value;
  const theBeeMovie = document.querySelector('input[name="theBeeMovie"]:checked').value;
  const javaJava = document.querySelector('input[name="javaJava"]:checked').value;
  const projectType = document.querySelector('input[name="projectType"]:checked').value;
  const industry = document.querySelector('input[name="industry"]:checked').value;

  const scores = {
    ruby = sigorRos + theBeeMovie + javaJava,
  }
}