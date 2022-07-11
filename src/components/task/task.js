import './task.css';
import createCheckBtn from "../check-btn/checkBtn";
import createCrossBtn from "../crossBtn/crossBtn";
import createElement from "../element/element";
import { loadTasks } from "../tasks/tasks";

function createTask(task, db, container) {
    const taskBox = createElement('div');
    const taskName = createElement('div');
    const taskBtns = createElement('div');
    const checkBtn = createCheckBtn();
    const crossBtn = createCrossBtn();

    taskName.textContent = task.task;

    taskBox.classList.add('taskBox');
    taskName.classList.add('taskName');
    checkBtn.classList.add('checkTaskBtn');
    crossBtn.classList.add('crossTaskBtn');
    taskBox.classList.add(task.isCompleted ? 'completed' : 'notCompleted');

    checkBtn.addEventListener('click', () => {
        db.toggleTaskStatus(task.id);
        loadTasks(db, container);
    });

    crossBtn.addEventListener('click', () => {
        db.deleteTask(task.id);
        loadTasks(db, container);
    });

    taskBtns.appendChild(checkBtn);
    taskBtns.appendChild(crossBtn);
    taskBox.appendChild(taskName);
    taskBox.appendChild(taskBtns);

    return taskBox;
}

export default createTask;