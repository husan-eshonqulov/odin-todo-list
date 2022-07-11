import createElement from "../element/element";
import createTask from "../task/task";
import './tasks.css';

export function createTasks(db, container) {
    const taskList = db.taskList;
    const tasks = createElement('div');
    const notCompletedTasks = [];
    const completedTasks = [];

    taskList.forEach((task) => task.isCompleted ? completedTasks.push(task) : notCompletedTasks.push(task));
    notCompletedTasks.forEach((task) => tasks.appendChild(createTask(task, db, container)));
    completedTasks.forEach((task) => tasks.appendChild(createTask(task, db, container)));

    if (taskList.length) tasks.classList.add('tasks');

    return tasks;
}

export function loadTasks(db, container) {
    container.textContent = '';
    container.appendChild(createTasks(db, container));
}