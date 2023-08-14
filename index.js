const swapBtn = document.getElementById('swap-btn');

swapBtn.addEventListener('click', () => {
    const first = document.getElementById('first').value;
    const second = document.getElementById('second');
    const result = first *  0.063;
    second.value = result;
});