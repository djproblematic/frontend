let ok = document.querySelector('#okay');

ok.addEventListener('click', () => {
    let inputs = document.querySelectorAll('input');
    let label = document.querySelector('label');
    label.textContent = ' ';
    inputs.forEach(input => {
        if (input.checked) {
            if (label.textContent == ' ') {
                label.textContent = label.textContent + `${input.id}`;
            }
            else {
                label.textContent += `, ${input.id}`;
            }
        }
    });
})