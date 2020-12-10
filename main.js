const input = document.getElementById('input');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

// restrict input to type only 1 and 0
input.addEventListener('keydown', (e) => {
    if (e.keyCode !== 48 && e.keyCode !== 49 && e.keyCode !== 8) {
        e.preventDefault();
    }
});

btn.addEventListener('click', () => {
    const digit = parseInt(input.value, 2);

    input.value !== ''
        ? (output.textContent = digit)
        : (output.textContent = 0);
});
