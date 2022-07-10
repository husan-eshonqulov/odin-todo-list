export let taskList = [
    { id: 0, task: 'Task1', isComplete: false },
    { id: 1, task: 'Task2', isComplete: false },
    { id: 2, task: 'Task3', isComplete: false },
    { id: 3, task: 'Task4', isComplete: false },
];

export function updateTaskList(newTaskList) {
    taskList = newTaskList;
}