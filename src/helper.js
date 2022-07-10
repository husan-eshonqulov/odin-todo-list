import { taskList, updateTaskList } from "./database/database";
import { updateTasks } from './components/tasks/tasks'

export function addTaskToDB(task) {
    taskList.push({
        id: taskList.length,
        task: task,
        isCompleted: false
    });

    updateTasks(taskList);
}

export function deleteTask(id) {
    const filtered = taskList.filter((task) => task.id !== id);
    const arranged = rearrangeIds(filtered);
    updateTaskList(arranged);
    updateTasks(taskList);
}

function rearrangeIds(taskList) {
    return taskList.map((task, ind) => {
        return { ...task, id: ind }
    });
}