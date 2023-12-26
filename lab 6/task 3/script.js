// Визначення функції обчислення позиції колірної зупинки в градієнті
let positionOfGradient = function (index, length) {
    return parseFloat(index * 100 / length / 100);
}

// Виберіть всі елементи td на сторінці
let tds = document.querySelectorAll("td");
tds.forEach((td) => {
    // Додавання слухача події кліка до кожного осередку
    td.addEventListener('click', (event) => {
        event.target.classList.toggle('chosen');
        let chosen_tds = document.querySelectorAll("td.chosen");
        if (chosen_tds.length > 1) {
            // Якщо вибрано два або більше осередки
            // Вибір елемента canvas
            let canvas = document.querySelector("canvas");
            let ctx_canvas = canvas.getContext("2d");
            // Створення лінійного градієнта
            let gradient = ctx_canvas.createLinearGradient(0, 0, 0, 170);
            // Додавання колірних зупинок у градієнт на основі вибраних осередків
            chosen_tds.forEach((chosen_td, index) => {
                console.log(positionOfGradient(index, chosen_tds.length - 1));
                gradient.addColorStop(positionOfGradient(index, chosen_tds.length - 1), chosen_td.style.backgroundColor);
            })
            ctx_canvas.fillStyle = gradient;
            // Заливка всього canvas
            ctx_canvas.fillRect(0, 0, canvas.width, canvas.height);
        } else if (chosen_tds.length === 1) {
            // Якщо вибрана лише одна комірка
            // Завдання кольору заливки контексту canvas кольором вибраної комірки
            document.querySelector("canvas").getContext("2d").fillStyle = chosen_tds[0].style.backgroundColor;
            // Заливка всього canvas
            document.querySelector("canvas").getContext("2d").fillRect(0, 0, document.querySelector("canvas").width, document.querySelector("canvas").height);
        } else {
            // Если ячейки не выбраны
            // Завдання кольору заливки контексту canvas білим кольором
            document.querySelector("canvas").getContext("2d").fillStyle = "white";
            // Заливка всього canvas
            document.querySelector("canvas").getContext("2d").fillRect(0, 0, document.querySelector("canvas").width, document.querySelector("canvas").height);
        }
    })
})

// Вибір усіх вибраних комірок після обробки подій
let chosen_tds = document.querySelectorAll("td.chosen")
chosen_tds.forEach((event) => {
    console.log(chosen_tds.style.backgroundColor)
})
