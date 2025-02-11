import { onValue, push, ref, remove, update } from "firebase/database";
import {db} from "./modules/firebase";

// skapa en referens till noden users
const usersRef = ref(db, '/users');

onValue(usersRef, snapshot=>{

    const users = snapshot.val();
    console.log(users);
} )


const removeBtn = document.querySelector('#remove') as HTMLButtonElement;

removeBtn.addEventListener('click', ()=>{
    const nodeToRemove = ref(db, '/users/toremove')
    remove(nodeToRemove);
})

const updateBtn = document.querySelector('#update') as HTMLButtonElement;
updateBtn.addEventListener('click', ()=>{
    const userRef = ref(db, '/users/-sdoahfkajdhf');

    update(userRef, {food: 'pasta'})
})

const addBtn = document.querySelector('#add') as HTMLButtonElement;
addBtn.addEventListener('click', ()=>{
    
    const newID = push(usersRef).key
    console.log(newID)

    const newUserRef = ref(db, '/users/'+newID);
    update(newUserRef,{
        name: 'Gandalf',
        admin: true
    } )

})