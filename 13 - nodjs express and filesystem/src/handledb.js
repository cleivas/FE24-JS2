import fs from "fs/promises"

// Utgå från projektets rotmapp, inte den relativa sökvägen
const path = './src/db.json';

export async function getUsers(){

    const rawData = await fs.readFile(path);
    const {users} = JSON.parse(rawData);
    return users;
}

async function writeUsers(dbObj){
    await fs.writeFile(path, JSON.stringify(dbObj, null, 2));
}

export async function addUser(newUser){
    const users = await getUsers();

    newUser.id = Date.now();
    users.push(newUser);

    await writeUsers( {users});
    return newUser.id;
}

export async function updateAdmin(id, admin){
    const users = await getUsers();

    const user = users.find( user => user.id == id);
    user.admin = admin;

    await writeUsers({users});
    return user;
}

export async function deleteUser(id){
    const users = await getUsers();
    const userIndex = users.findIndex( user => user.id == id);
    
    const [deletedUser] = users.splice(userIndex, 1);

    await writeUsers({users});

    return deletedUser;
}