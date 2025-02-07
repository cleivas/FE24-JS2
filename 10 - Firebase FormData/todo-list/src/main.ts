import { getAllTasks, postTask } from "./modules/firebase";
import { renderAllTasks } from "./modules/render";

getAllTasks().then( renderAllTasks );

document.querySelector('form')!.addEventListener('submit', async event =>{
    event.preventDefault();

    const task = document.querySelector('input')!.value;

    const taskObj:Task = {
        task,
        done: false
    }

    await postTask(taskObj);
    const tasks = await getAllTasks();
    renderAllTasks(tasks);
})