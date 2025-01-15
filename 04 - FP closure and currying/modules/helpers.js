// export const addOddNumbers = arr => {
//     let sum = 0;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2 === 1){
//             sum+=arr[i];
//         }
//     }
//     return sum;
// }

// export const addOddNumbers = arr => {
    //     return arr.reduce( (sum, cur) =>{    
        //         console.log(sum, cur)
        
        //         // if(cur%2 === 1) return sum + cur;
        //         // else return sum;
        //         return cur%2===1 ? sum+cur : sum;
        //     }, 0)
        // }
        
export const addOddNumbers = arr => arr.reduce( (sum, cur) => cur%2===1 ? sum+cur : sum, 0);


export const toTitleCase = arr => arr.map( word =>  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() );


export const mergeUnique = (...args) => Array.from(new Set(args.flat()) )

export const countWords = arr => {
    const obj = {};

    arr.forEach( word => { 

        if(obj[word]) obj[word]+=1;
        else obj[word] = 1;
        
    } )

    return obj;
}

