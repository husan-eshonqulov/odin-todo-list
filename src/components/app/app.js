import createTitle from "../title/title";
import createAddTask from "../add-task/addTask";
import createHeading from "../heading/heading";
import createElement from "../element/element";
import './app.css';
import { createTasks } from "../tasks/tasks";

export function createApp(taskList) {
    const app = createElement('div');

    const title = createTitle('ToDo');
    const addTask = createAddTask();
    const heading = createHeading('Tasks', 'h2');
    const hr = createElement('hr');
    const tasksBox = createElement('div');

    title.classList.add('title');
    addTask.classList.add('addTask');

    tasksBox.appendChild(createTasks(taskList));
    app.appendChild(title);
    app.appendChild(addTask);
    app.appendChild(heading);
    app.appendChild(hr);
    app.appendChild(tasksBox);

    return app;
}

export function loadApp(taskList) {
    const root = document.querySelector('#root');
    root.textContent = '';
    root.classList.add('container');
    root.appendChild(createApp(taskList));
};