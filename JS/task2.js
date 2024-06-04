document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('box');
    const buildButton = document.getElementById('buildbutton');
    const inputValue = document.getElementById('inputvalue');

    buildButton.addEventListener('click', () => {
        const n = parseInt(inputValue.value);
        if (isNaN(n) || n <= 0) {
            alert('Please enter a valid number');
            return;
        }

        for (let i = 0; i < n; i++) {
            createRandomCircle();
        }
    });

    function createRandomCircle() 
    {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        const radius = getRandomInt(10, 50);
        const x = getRandomInt(0, container.clientWidth - 2 * radius);
        const y = getRandomInt(0, container.clientHeight - 2 * radius);

        circle.style.width = `${2 * radius}px`;
        circle.style.height = `${2 * radius}px`;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        circle.addEventListener('click', () => {
            container.removeChild(circle);
        });

        container.appendChild(circle);
    }

    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
