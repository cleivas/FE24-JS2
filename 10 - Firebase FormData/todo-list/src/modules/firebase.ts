const BASE_URL = 'https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/todo-list';

export async function getAllTasks():Promise<Object>{
    const url = BASE_URL+'.json'

    const res = await fetch(url);
    const taskObj = await res.json();

    return taskObj;
}

export async function postTask(task: Task){
    const url = BASE_URL+'.json';

    const options = {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-type': 'application/json'
        }
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
}

export async function patchDone(id:string, done:boolean){
    console.log(id, done)

    const url = BASE_URL + `/${id}.json`;
    const options = {
        method: 'PATCH', 
        body: JSON.stringify( {done} ),
        headers: {
            'Content-type': 'application/json'
        }
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
}

export async function deleteTask(id:string){
    const url = BASE_URL + `/${id}.json`;
    const options = {
        method: 'DELETE'
    }
    
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
}