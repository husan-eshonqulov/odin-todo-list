import './title.css';
import createElement from '../element/element';

function createTitle(text) {
    const title = createElement('h1');
    title.textContent = text;
    title.classList.add('appTitle');

    return title;
}

export default createTitle;