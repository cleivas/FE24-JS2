import { Bankaccount } from "./modules/Bankaccount.js";
import { Car } from "./modules/Car.js";
import { Fish } from "./modules/Fish.js";

const savings = new Bankaccount('savings', 3000);
const secondAccount = new Bankaccount('vacation', 0);
console.log(savings)
// console.log(savings.#balance)
console.log( savings.getBalance() )
console.log( savings.getName() )

savings.showBalance();
secondAccount.showBalance();

savings.deposit(1000);
savings.showBalance();
savings.withdraw(4001);
savings.showBalance();

secondAccount.withdraw(4);
secondAccount.showBalance();
secondAccount.deposit(23432);
secondAccount.showBalance();
secondAccount.withdraw(3000);
secondAccount.showBalance();


const car1 = new Car('xc-90', 2020, 250);
console.log(car1);
Object.seal(car1);

car1.accelerate(500)
console.log( car1.getCurrentSpeed())

car1.brake(40);
// Ger error pga Object.seal()
// car1.currentSpeed = 0;

console.log(car1)

const fish = new Fish('Herring', 'blublub', 7);
fish.makeSound();
fish.swim();

console.log(fish)