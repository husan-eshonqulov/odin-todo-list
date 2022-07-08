import createElement from "../element/element";
import './checkBtn.css';

function createCheckBtn() {
    const checkBtn = createElement('button');
    const icon = createElement('i');

    checkBtn.classList.add('btn');
    checkBtn.classList.add('checkBtn');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-check');

    checkBtn.appendChild(icon);

    return checkBtn;
}

export default createCheckBtn;