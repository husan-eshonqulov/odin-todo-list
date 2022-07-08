import createTitle from "../title/title";
import createAddTask from "../add-task/addTask";
import createHeading from "../heading/heading";
import createElement from "../element/element";
import createTask from "../task/task";

function createApp() {
    const root = document.querySelector('#root');
    
    const title = createTitle('ToDo');
    const addTask = createAddTask();
    const heading = createHeading('Tasks', 'h2');
    const hr = createElement('hr');
    const task = createTask('task1');

    root.appendChild(title);
    root.appendChild(addTask);
    root.appendChild(heading);
    root.appendChild(hr);
    root.appendChild(task);
}

export default createApp;