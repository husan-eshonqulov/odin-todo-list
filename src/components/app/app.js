import createTitle from "../title/title";

function createApp() {
    const content = document.querySelector('#content');
    const title = createTitle('ToDo');

    content.appendChild(title);
}

export default createApp;