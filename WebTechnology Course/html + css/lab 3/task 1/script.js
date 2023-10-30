// Отримайте посилання на елементи DOM
const citySelect = document.getElementById('citySelect');
const cityImage = document.querySelector('#cityImage img');

// Додайте подію "change" до випадаючого списку
citySelect.addEventListener('change', function() {
    // Отримайте значення, обране користувачем
    const selectedCity = citySelect.value;

    // Встановіть шлях до зображення міста і відобразіть його
    const imagePath = selectedCity + '.jpg';
    cityImage.src = imagePath;
    cityImage.alt = selectedCity;
});
