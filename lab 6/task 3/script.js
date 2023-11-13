// Определение функции для вычисления позиции цветовой остановки в градиенте
let positionOfGradient = function (index, length) {
    return parseFloat(index * 100 / length / 100);
}

// Выбор всех элементов td на странице
let tds = document.querySelectorAll("td");
tds.forEach((td) => {
    // Добавление слушателя события клика к каждой ячейке
    td.addEventListener('click', (event) => {
        event.target.classList.toggle('chosen');
        let chosen_tds = document.querySelectorAll("td.chosen");
        if (chosen_tds.length > 1) {
            // Если выбраны две или более ячейки
            // Выбор элемента canvas
            let canvas = document.querySelector("canvas");
            let ctx_canvas = canvas.getContext("2d");
            // Создание линейного градиента
            let gradient = ctx_canvas.createLinearGradient(0, 0, 0, 170);
            // Добавление цветовых остановок в градиент на основе выбранных ячеек
            chosen_tds.forEach((chosen_td, index) => {
                console.log(positionOfGradient(index, chosen_tds.length - 1));
                gradient.addColorStop(positionOfGradient(index, chosen_tds.length - 1), chosen_td.style.backgroundColor);
            })
            ctx_canvas.fillStyle = gradient;
            // Заливка всего canvas
            ctx_canvas.fillRect(0, 0, canvas.width, canvas.height);
        } else if (chosen_tds.length === 1) {
            // Если выбрана только одна ячейка
            // Задание цвета заливки контекста canvas цветом выбранной ячейки
            document.querySelector("canvas").getContext("2d").fillStyle = chosen_tds[0].style.backgroundColor;
            // Заливка всего canvas
            document.querySelector("canvas").getContext("2d").fillRect(0, 0, document.querySelector("canvas").width, document.querySelector("canvas").height);
        } else {
            // Если ячейки не выбраны
            // Задание цвета заливки контекста canvas белым цветом
            document.querySelector("canvas").getContext("2d").fillStyle = "white";
            // Заливка всего canvas
            document.querySelector("canvas").getContext("2d").fillRect(0, 0, document.querySelector("canvas").width, document.querySelector("canvas").height);
        }
    })
})

// Выбор всех выбранных ячеек после обработки событий
let chosen_tds = document.querySelectorAll("td.chosen")
chosen_tds.forEach((event) => {
    console.log(chosen_tds.style.backgroundColor)
})
