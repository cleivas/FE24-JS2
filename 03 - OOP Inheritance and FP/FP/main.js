import { showBalance, withdraw, deposit } from "./modules/accountfunctions.js";

let account = {name: 'car', balance: 0};
showBalance(account)

// let account2 = deposit(account, 2000);
// showBalance(account)
// showBalance(account2)

account = deposit(account, 1000);
console.log(account)

account = withdraw(account, 2000);
showBalance(account)

