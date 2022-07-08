import createElement from "../element/element";
import createTask from "../task/task";

function createTasks(taskList) {
    const tasks = createElement('div');

    taskList.forEach(task => tasks.appendChild(createTask(task)));

    return tasks;
}

export default createTasks;