import createTitle from "../title/title";
import createAddTask from "../add-task/addTask";
import createHeading from "../heading/heading";
import createElement from "../element/element";

function createApp() {
    const root = document.querySelector('#root');
    
    const title = createTitle('ToDo');
    const addTask = createAddTask();
    const heading = createHeading('Tasks', 'h2');
    const hr = createElement('hr');

    root.appendChild(title);
    root.appendChild(addTask);
    root.appendChild(heading);
    root.appendChild(hr);
}

export default createApp;