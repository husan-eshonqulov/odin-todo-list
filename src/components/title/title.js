import './title.css';

function createTitle(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    title.setAttribute('id', 'title');

    return title;
}

export default createTitle;