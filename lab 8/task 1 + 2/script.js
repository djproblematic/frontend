document.addEventListener('DOMContentLoaded', function () {
    initializeTimers(); // Викликаю функцію ініціалізації під час завантаження сторінки
});

function initializeTimers() {
    for (let i = 0; i < timerCount; i++) {
        timerValues[i] = { h: 0, m: 55, s: 0, timerId: null }; // Встановив початкове значення для кожного таймера
        timerUpdate(i); // Оновлює відображення
    }
}


function clockTick() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    };
    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    };
    let timeString = `${hours}:${minutes}:${seconds}`;
    clock.innerText = timeString;
}

clockTick()

setInterval(clockTick, 1000);


// let timerValue = {
//     h: 0,
//     m: 0,
//     s: 0
// }

let timerValues = [];

let timerElements = document.querySelectorAll('.timer');

let timerElementsArray = Array.from(timerElements);


let timerCount = timerElements.length;

for (i = 0; i < timerCount; i++) {
    timerValues.push({
        h: 0, m: 0, s: 0, timerId: null
    });
}

console.log(timerValues);

let timerId;

// function timerTick(index) {
//     timerValues[index].s++
//     timerValues[index].m += parseInt(timerValues[index].s / 60)
//     timerValues[index].s = timerValues[index].s % 60;
//     timerValues[index].h += parseInt(timerValues[index].m / 60);
//     timerValues[index].m = timerValues[index].m % 60;

//     // if (timerValues[index].s >= 60) {
//     //     timerValues[index].s = 0;
//     //     timerValues[index].m++;
//     // }
//     // if (timerValues[index].m >= 60) {
//     //     timerValues[index].m = 0;
//     //     timerValues[index].h++;
//     // }
//     timerUpdate(index);
// }

function timerTick(index) {
    if (timerValues[index].s > 0) {
        timerValues[index].s--;
    } else if (timerValues[index].m > 0) {
        timerValues[index].s = 59;
        timerValues[index].m--;
    } else if (timerValues[index].h > 0) {
        timerValues[index].s = 59;
        timerValues[index].m = 59;
        timerValues[index].h--;
    }

    timerUpdate(index);

    if (timerValues[index].h === 0 && timerValues[index].m === 0 && timerValues[index].s === 0) {
        clearInterval(timerValues[index].timerId);
    }
}




function addZero(value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}

function timerUpdate(index) {
    let timerNewValue = {
        h: addZero(timerValues[index].h),
        m: addZero(timerValues[index].m),
        s: addZero(timerValues[index].s),
    }
    // if(timerNewValue.h < 10) timerNewValue.h = '0' + timerNewValue.h;
    // if(timerNewValue.m < 10) timerNewValue.m = '0' + timerNewValue.m;
    // if(timerNewValue.s < 10) timerNewValue.s = '0' + timerNewValue.s;

    document.querySelectorAll(`.timer`)[index].querySelector('.tablo').innerHTML = `${timerNewValue.h}:${timerNewValue.m}:${timerNewValue.s}`;

}

//// startButton.addEventListener('click', function (event) {
///// timerId = setInterval(timerTick, 1000);
////// startButton.setAttribute('disabled', 'disabled');
////// stopButton.removeAttribute('disabled');
//// })

// stopButton.addEventListener('click', function (event) {
//     clearInterval(timerId);
//     startButton.removeAttribute('disabled');
//     stopButton.setAttribute('disabled', 'disabled');
// })

// resetButton.addEventListener('click', function (event) {
//     timerValue = {
//         h: 0,
//         m: 0,
//         s: 0
//     }
//     timerUpdate();
// })

// document.documentElement.addEventListener('click', function (event) {
//     let parentTimerDiv = event.target.closest('.timer');
//     if (parentTimerDiv !== null) {

//         let tablo = parentTimerDiv.querySelector('.tablo')
//         let startButton = parentTimerDiv.querySelector('.startButton');
//         let stopButton = parentTimerDiv.querySelector('.stopButton');
//         let currentTimerIndex = timerElementsArray.indexOf(parentTimerDiv);
//         console.log(currentTimerIndex)
//         if (event.target.classList.contains('startButton')) {
//             // parentTimerDiv.style.borderColor = 'red';
//             timerValues[currentTimerIndex].timerId = setInterval(timerTick, 1000, currentTimerIndex);
//             startButton.setAttribute('disabled', 'disabled');
//             stopButton.removeAttribute('disabled');
//         }
//         if (event.target.classList.contains('stopButton')) {
//             clearInterval(timerValues[currentTimerIndex].timerId);
//             startButton.removeAttribute('disabled');
//             stopButton.setAttribute('disabled', 'disabled');
//         }
//         if (event.target.classList.contains('resetButton')) {
//             timerValues[currentTimerIndex] = {
//                 h: 0,
//                 m: 0,
//                 s: 0,
//                 timerId: timerValues[currentTimerIndex].timerId
//             }
//             timerUpdate(currentTimerIndex);
//         }
//     }

// })

document.documentElement.addEventListener('click', function (event) {
    let parentTimerDiv = event.target.closest('.timer');
    if (parentTimerDiv !== null) {
        let tablo = parentTimerDiv.querySelector('.tablo');
        let startButton = parentTimerDiv.querySelector('.startButton');
        let stopButton = parentTimerDiv.querySelector('.stopButton');
        let resetButton = parentTimerDiv.querySelector('.resetButton');
        let currentTimerIndex = timerElementsArray.indexOf(parentTimerDiv);

        if (event.target.classList.contains('startButton')) {
            // parentTimerDiv.style.borderColor = 'red';
            clearInterval(timerValues[currentTimerIndex].timerId); // Скидання попереднього таймера
            timerValues[currentTimerIndex].timerId = setInterval(timerTick, 1000, currentTimerIndex);
            startButton.setAttribute('disabled', 'disabled');
            stopButton.removeAttribute('disabled');
            resetButton.setAttribute('disabled', 'disabled');
        }

        if (event.target.classList.contains('stopButton')) {
            clearInterval(timerValues[currentTimerIndex].timerId);
            startButton.removeAttribute('disabled');
            stopButton.setAttribute('disabled', 'disabled');
            resetButton.removeAttribute('disabled');
        }

        if (event.target.classList.contains('resetButton')) {
            clearInterval(timerValues[currentTimerIndex].timerId);
            timerValues[currentTimerIndex] = { h: 0, m: 55, s: 0, timerId: null };
            timerUpdate(currentTimerIndex);  // Время для обратного отсчёта
            startButton.removeAttribute('disabled');
            stopButton.setAttribute('disabled', 'disabled');
            resetButton.setAttribute('disabled', 'disabled');
        }
    }
});
