import './title.css';

function createTitle(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    title.classList.add('appTitle');

    return title;
}

export default createTitle;