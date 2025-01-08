const arrObj = {
    0: 'zero',
    1: 'one',
    2: 'two'
  };
  
//   console.log(arrObj.2)
  console.log(arrObj[2])

  const obj = {
   zero: 0,
   one: 1,
   two: 2
 };

 console.log(obj.one)
 console.log(obj['one'])
 
 const prop = 'two';
 console.log(obj[prop])


// for in
const user = {
    name: 'Gandalf',
    type: 'Wizard',
    hobby: 'Smoke',
    logSomething(){
        console.log(this.hobby)
    }
}

for(const key in user){
    console.log(key, user[key])
}