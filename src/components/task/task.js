import createCheckBtn from "../check-btn/checkBtn";
import createCrossBtn from "../crossBtn/crossBtn";
import createElement from "../element/element";
import { deleteTask, toggleStatus } from '../../helper'
import './task.css';

function createTask(task) {
    const outerTask = createElement('div');
    const innerLeftTask = createElement('div');
    const innerRightTask = createElement('div');
    const checkBtn = createCheckBtn();
    const crossBtn = createCrossBtn();

    innerLeftTask.textContent = task.task;

    outerTask.classList.add('outerTask');
    innerLeftTask.classList.add('innerLeftTask');
    innerRightTask.classList.add('innerRightTask');
    checkBtn.classList.add('checkTaskBtn');
    crossBtn.classList.add('crossTaskBtn');
    outerTask.classList.add(task.isCompleted ? 'completed' : 'notCompleted')

    checkBtn.addEventListener('click', () => toggleStatus(task.id));
    crossBtn.addEventListener('click', () => deleteTask(task.id));

    innerRightTask.appendChild(checkBtn);
    innerRightTask.appendChild(crossBtn);
    outerTask.appendChild(innerLeftTask);
    outerTask.appendChild(innerRightTask);

    return outerTask;
}

export default createTask;