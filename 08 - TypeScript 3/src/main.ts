import { Account } from "./modules/Account.ts";
import { Car } from "./modules/Car.ts";
import { getDogImages } from "./modules/dogapi.ts";
import { renderImages } from "./modules/render.ts";

const dogForm = document.querySelector('#dogSearchForm') as HTMLFormElement;

dogForm.addEventListener('submit', async event =>{
    event.preventDefault();

    const breedEl = document.querySelector('#breedInput') as HTMLInputElement;
    const amountEl = document.querySelector('#amountInput') as HTMLInputElement;

    const breed = breedEl.value.toLowerCase();
    const amount = amountEl.value ? amountEl.value : '1' ;

    try{
        const dogImages = await getDogImages(breed, amount);
        renderImages(dogImages);
    }
    catch(error){
        console.log(error.message)
        // Här vill du egentligen rendera ett errormeddelande till användaren
    }
})


const myAccount = new Account('savings', 1000);

console.log(myAccount.name)
console.log(myAccount.getBalance())
console.log(myAccount.deposit(500))
console.log(myAccount.withdraw(1600))
// myAccount.name = 'sdfsdf';

const car = new Car('Toyota', 'Corolla', 1999);

car.openAllDoors()
console.log(car.make)