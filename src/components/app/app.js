import createTitle from "../title/title";
import createAddTask from "../add-task/addTask";
import createHeading from "../heading/heading";
import createElement from "../element/element";
import { taskList } from '../../database/database';
import './app.css';
import { createTasks } from "../tasks/tasks";

function createApp() {
    const root = document.querySelector('#root');

    const title = createTitle('ToDo');
    const addTask = createAddTask();
    const heading = createHeading('Tasks', 'h2');
    const hr = createElement('hr');
    const outerTasks = createElement('div');

    root.classList.add('container');
    title.classList.add('title');
    addTask.classList.add('addTask');
    outerTasks.classList.add('outerTasks');

    outerTasks.appendChild(createTasks(taskList));
    root.appendChild(title);
    root.appendChild(addTask);
    root.appendChild(heading);
    root.appendChild(hr);
    root.appendChild(outerTasks);
}

export default createApp;