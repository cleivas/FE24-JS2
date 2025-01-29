export class Account{
    constructor(
        public readonly name: string,
        private balance: number
    ){

    }

    public getBalance():number{
        return this.balance;
    }

    public deposit(amount:number):string{
        this.balance+=amount;
        return `${amount} sattes in på ${this.name} och nya saldot är ${this.balance}`;
    }

    public withdraw(amount:number):string{
        if(this.balance-amount < 0){
            return 'Not enough money'
        }
        else {
            this.balance-=amount;
            return `${amount} togs ut från ${this.name} och nya saldot är ${this.balance}`;
        }
    }
}