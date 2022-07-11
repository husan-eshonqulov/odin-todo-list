const db = {
    taskList: [
        { id: 0, task: 'Task1', isCompleted: true },
        { id: 1, task: 'Task2', isCompleted: false },
        { id: 2, task: 'Task3', isCompleted: false },
        { id: 3, task: 'Task4', isCompleted: true },
    ],

    addTask(task) {
        if (task) {
            this.taskList.push({
                id: this.taskList.length,
                task: task,
                isCompleted: false
            });
        }
    },

    toggleTaskStatus(id) {
        this.taskList.forEach((task) => task.isCompleted = (task.id === id) ? !task.isCompleted : task.isCompleted);
    },

    deleteTask(id) {
        this.taskList = this.taskList.filter((task) => task.id !== id);
        this.taskList.forEach((task, ind) => task.id = ind);
    }
};

export default db;