let totalChracter = document.querySelector('#totalCh');
let remaining = document.querySelector('#remaining');
let inputField = document.querySelector('#input');

let Charcter = 12;
remaining.value = 100;

inputField.addEventListener('input', () => {
    totalChracter.innerHTML = inputField.value.length;
    let Remain = remaining.value - inputField.value.length;
    remaining.innerHTML = Remain;
})