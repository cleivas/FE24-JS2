
// export function counter(){
//     let count = 0;
//     count++;
//     console.log(count)
// }

// counter();
// counter();
// counter();
// counter();
// counter();

function sayHello(name){ //Yttre funktion
    const greeting = `Hello, ${name}`;


    function logGreeting(){ //Inre funktion
        console.log(greeting); //Variabel från parent scopet
    };
    return logGreeting; //Inre funktionen returneras
}


const sayHelloToEveryone = sayHello('Everyone');
const sayHelloToTheMoon = sayHello('the Moon');


sayHelloToEveryone(); //Hello, Everyone
sayHelloToTheMoon(); //Hello, the moon

export function counter(id){
    let count = 0;

    return function(){
        count++;
        console.log(id, count)
    }
}

const counter1 = counter(1);
const counter2 = counter(2);

counter1()
counter1()
counter1()
counter1()

counter2()
counter2()
counter2()

export function resize(size){

    return function(){
        const div = document.querySelector('div');

        if(size=='small') div.style.width = '20px';
        else if(size=='big') div.style.width = '500px';
    }
}