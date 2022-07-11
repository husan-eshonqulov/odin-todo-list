import './primaryBtn.css';
import createElement from '../element/element';

function createPrimaryBtn(text) {
    const button = createElement('button');
    button.classList.add('btn');
    button.classList.add('primaryBtn');
    button.textContent = text;

    return button;
}

export default createPrimaryBtn;