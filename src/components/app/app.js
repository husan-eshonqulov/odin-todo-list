import createTitle from "../title/title";
import createAddTask from "../add-task/addTask";

function createApp() {
    const content = document.querySelector('#content');
    
    const title = createTitle('ToDo');
    const addTask = createAddTask();

    content.appendChild(title);
    content.appendChild(addTask);
}

export default createApp;