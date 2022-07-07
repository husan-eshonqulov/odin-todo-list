import './button.css';

function createButton(text) {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('primaryBtn');
    button.textContent = text;

    return button;
}

export default createButton;