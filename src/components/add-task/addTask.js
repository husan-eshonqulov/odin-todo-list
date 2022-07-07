import './addTask.css';

function createAddTask() {
    const outerForm = document.createElement('div');
    const innerForm = document.createElement('div');
    const taskInput = document.createElement('input');
    const addButton = document.createElement('button');

    outerForm.id = 'outerForm';
    innerForm.id = 'innerForm';
    taskInput.id = 'taskInput';
    addButton.id = 'addButton';

    taskInput.type = 'text';
    taskInput.placeholder = 'Task';
    taskInput.classList.add('form-control');
    addButton.classList.add('btn');
    addButton.textContent = 'Add';

    innerForm.appendChild(taskInput);
    innerForm.appendChild(addButton);
    outerForm.appendChild(innerForm);

    return outerForm;
}

export default createAddTask;