import createCheckBtn from "../check-btn/checkBtn";
import createCrossBtn from "../crossBtn/crossBtn";
import createElement from "../element/element";
import './task.css';

function createTask(text) {
    const outerTask = createElement('div');
    const innerLeftTask = createElement('div');
    const innerRightTask = createElement('div');
    const checkBtn = createCheckBtn();
    const crossBtn = createCrossBtn();

    innerLeftTask.textContent = text;

    outerTask.classList.add('outerTask');
    innerLeftTask.classList.add('innerLeftTask');
    innerRightTask.classList.add('innerRightTask');

    innerRightTask.appendChild(checkBtn);
    innerRightTask.appendChild(crossBtn);
    outerTask.appendChild(innerLeftTask);
    outerTask.appendChild(innerRightTask);

    return outerTask;
}

export default createTask;