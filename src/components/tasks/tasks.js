import createElement from "../element/element";
import createTask from "../task/task";
import './tasks.css';

export function createTasks(taskList) {
    const tasks = createElement('div');

    taskList.forEach(task => tasks.appendChild(createTask(task)));

    tasks.classList.add('tasks');

    return tasks;
}

export function updateTasks(taskList) {
    const outerTasks = document.querySelector('.outerTasks');
    outerTasks.textContent = '';
    outerTasks.appendChild(createTasks(taskList));
}