const button = document.getElementById('but');
const secret = document.getElementById('secret');
const secretTwo = document.getElementById('secretTwo');

const toggleHiddenElement = (element) => {
    if (element.style.display === 'none') {
        element.style.display = 'block'
    } else {
        element.style.display = 'none';
    }
}

button.addEventListener('click', () => {
    toggleHiddenElement(secret);
    });

button.addEventListener('click', () => {
    toggleHiddenElement(secretTwo);
});