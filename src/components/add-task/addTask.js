import './addTask.css';
import createInput from '../input/input';
import createElement from '../element/element';
import createPrimaryBtn from '../primaryBtn/primaryBtn';
import { loadTasks } from '../tasks/tasks';

function createAddTask(db, container) {
    const formBox = createElement('div');
    const form = createElement('div');
    const taskInput = createInput('text', 'Task');
    const addButton = createPrimaryBtn('Add');

    formBox.classList.add('formBox');
    form.classList.add('form');
    taskInput.classList.add('taskInput');
    addButton.classList.add('addButton');

    addButton.addEventListener('click', () => {
        db.addTask(taskInput.value);
        loadTasks(db, container);
    });

    form.appendChild(taskInput);
    form.appendChild(addButton);
    formBox.appendChild(form);

    return formBox;
}

export default createAddTask;