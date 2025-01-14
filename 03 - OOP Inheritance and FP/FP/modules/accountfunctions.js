// Kontot behövde balance och namn
// {name: savings, balance: 1000}

function showBalance({name, balance}){
    console.log(`The current balance in ${name} is ${balance}SEK`)
}

function withdraw({name, balance}, amount){
    if(amount>balance) return {name, balance}
    else return {name, balance: balance-amount}
}

function deposit({name, balance}, amount){
    return {name, balance: balance+amount};
}

// Impure function - accountPar pekar på samma ställe i minnet som objektet som används som argument. 
// function deposit(accountPar, amount){
//     accountPar.balance+=amount;
//     return accountPar;
// }

export {showBalance, withdraw, deposit}