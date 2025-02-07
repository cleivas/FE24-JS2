import { deleteTask, getAllTasks, patchDone } from "./firebase";

export function renderAllTasks(taskObj: Object) {

    const containerAllTasks = document.querySelector("#tasksContainer") as HTMLDivElement;
    containerAllTasks.innerHTML = '';

    for (const firebaseID in taskObj) {
        // console.log(firebaseID, taskObj[firebaseID]);

        const container = document.createElement('div');
        const taskP = document.createElement('p');
        

        container.id = firebaseID;
        taskP.innerText = taskObj[firebaseID].task;
        
        container.append(taskP);
        containerAllTasks.append(container);

        // Om task är utförd, stryk över och lägg till deleteknapp
        if (taskObj[firebaseID].done) {
            taskP.classList.add('done');

            const delBtn = document.createElement('button');
            delBtn.innerText = 'X';
            container.append(delBtn);

            delBtn.addEventListener('click', async ()=>{
                await deleteTask(firebaseID);

                const tasks = await getAllTasks();
                renderAllTasks(tasks);
            } )
        }

        // Uppdatera done, true till false, eller false till true
        taskP.addEventListener('click', async event =>{
            await patchDone(firebaseID, !taskObj[firebaseID].done);


            const tasks = await getAllTasks();
            renderAllTasks(tasks);
        })

    }
}