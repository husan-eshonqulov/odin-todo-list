import createElement from "../element/element";
import './crossBtn.css';

function createCrossBtn() {
    const crossBtn = createElement('button');
    const icon = createElement('i');

    crossBtn.classList.add('btn');
    crossBtn.classList.add('crossBtn');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-xmark');

    crossBtn.appendChild(icon);

    return crossBtn;
}

export default createCrossBtn;