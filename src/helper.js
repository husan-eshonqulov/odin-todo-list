import taskList from "./database/database";
import { updateTasks } from './components/tasks/tasks'

export function addTaskToDB(task) {
    taskList.push({
        id: taskList.length,
        task: task,
        isCompleted: false
    });

    updateTasks(taskList);
}