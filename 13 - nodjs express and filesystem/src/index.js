import express from "express";
import cors from "cors";
import { getUsers, addUser, updateAdmin, deleteUser } from "./handledb.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());


app.get('/users', async (req, res)=>{
    const users = await getUsers();
    res.send(users);
})


app.post('/users', async (req, res)=>{

    const newUser = req.body;   
    console.log(newUser)

    const newID = await addUser(newUser);

    res.json({message: 'User added with id ' + newID})
})

app.patch('/users/:id', async (req, res)=>{
    const {id} = req.params;
    const {admin} =req.body;

    console.log(id, admin);
    const user = await updateAdmin(id, admin);

    res.json({message: `${user.name}'s admin rights is updated to ${user.admin}`});
})

app.delete('/users/:id', async (req, res)=>{
    const {id} = req.params;
   
    const deletedUser = await deleteUser(id);
    res.json({message: deletedUser.name + ' was deleted'})
} )

app.listen(PORT, ()=>{
    console.log('Server listening to port ', PORT)
})