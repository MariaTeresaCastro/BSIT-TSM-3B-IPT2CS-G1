const colorButton = document.getElementById('colorButton');
const resetButton = document.getElementById('resetButton');
const header = document.querySelector('.header');

colorButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    header.style.backgroundColor = randomColor;
});

resetButton.addEventListener('click', () => {
    resetBackgroundColor();
});

function resetBackgroundColor() {
    header.style.backgroundColor = '#000'; 
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
