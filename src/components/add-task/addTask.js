import './addTask.css';
import createInput from '../input/input';
import createElement from '../element/element';
import createButton from '../button/button';

function createAddTask() {
    const outerForm = createElement('div');
    const innerForm = createElement('div');
    const taskInput = createInput('text', 'Task');
    const addButton = createButton('Add');

    outerForm.classList.add('outerForm');
    innerForm.classList.add('innerForm');
    taskInput.classList.add('taskInput');
    addButton.classList.add('addButton');

    innerForm.appendChild(taskInput);
    innerForm.appendChild(addButton);
    outerForm.appendChild(innerForm);

    return outerForm;
}

export default createAddTask;