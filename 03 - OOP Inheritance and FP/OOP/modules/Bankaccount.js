export class Bankaccount{
    #name;
    #balance;
    constructor(name, balance){
        this.#name = name;
        this.#balance = balance;
    }

    getBalance(){
        return this.#balance;
    }

    getName(){
        return this.#name;
    }

    showBalance(){
        console.log(`The current balance in ${this.#name}, is ${this.#balance}SEK`);
    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        if(amount<=this.#balance){
            this.#balance-=amount;
        }
    }
}