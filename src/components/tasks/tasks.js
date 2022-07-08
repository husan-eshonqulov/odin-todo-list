import createElement from "../element/element";
import createTask from "../task/task";
import './tasks.css';

function createTasks(taskList) {
    const tasks = createElement('div');

    taskList.forEach(task => tasks.appendChild(createTask(task)));

    tasks.classList.add('tasks');

    return tasks;
}

export default createTasks;