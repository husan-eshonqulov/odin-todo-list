export let taskList = [
    { id: 0, task: 'Task1', isCompleted: true },
    { id: 1, task: 'Task2', isCompleted: false },
    { id: 2, task: 'Task3', isCompleted: false },
    { id: 3, task: 'Task4', isCompleted: true },
];

export function updateTaskList(newTaskList) {
    taskList = newTaskList;
}