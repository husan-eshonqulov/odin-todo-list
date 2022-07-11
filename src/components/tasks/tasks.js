import createElement from "../element/element";
import createTask from "../task/task";
import './tasks.css';

export function createTasks(taskList) {
    const tasks = createElement('div');
    const notCompletedTasks = [];
    const completedTasks = [];

    taskList.forEach((task) => task.isCompleted ? completedTasks.push(task) : notCompletedTasks.push(task));
    notCompletedTasks.forEach((task) => tasks.appendChild(createTask(task)));
    completedTasks.forEach((task) => tasks.appendChild(createTask(task)));

    if (taskList.length) tasks.classList.add('tasks');

    return tasks;
}

export function updateTasks(taskList) {
    const outerTasks = document.querySelector('.outerTasks');
    outerTasks.textContent = '';
    outerTasks.appendChild(createTasks(taskList));
}