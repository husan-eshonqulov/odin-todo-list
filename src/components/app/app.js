import createTitle from "../title/title";
import createAddTask from "../add-task/addTask";
import createHeading from "../heading/heading";
import createElement from "../element/element";
import { createTasks } from "../tasks/tasks";
import './app.css';

export function createApp(db) {
    const app = createElement('div');

    const title = createTitle('ToDo');
    const heading = createHeading('Tasks', 'h2');
    const hr = createElement('hr');
    const tasksBox = createElement('div');
    const addTask = createAddTask(db, tasksBox);

    title.classList.add('title');
    addTask.classList.add('addTask');

    tasksBox.appendChild(createTasks(db, tasksBox));
    app.appendChild(title);
    app.appendChild(addTask);
    app.appendChild(heading);
    app.appendChild(hr);
    app.appendChild(tasksBox);

    return app;
}

export function loadApp(db, container) {
    container.textContent = '';
    container.classList.add('container');
    container.appendChild(createApp(db));
};