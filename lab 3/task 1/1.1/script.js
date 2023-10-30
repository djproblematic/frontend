let arr = [];

// Получить все абзацы внутри элемента с id "paragraphs"
let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {
    let text = paragraph.textContent; // Получить текст из абзаца
    let characterCount = text.length; // Получить количество символов в тексте абзаца
    arr.push(characterCount); // Добавить количество символов в массив
  });

  console.log(arr);