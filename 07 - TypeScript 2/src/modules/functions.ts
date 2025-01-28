function doMathOnArray(arr:number[], calc:Function):number[]{

    return arr.map(num => calc(num))
}
console.log( doMathOnArray([2, 5, 4, 2], x => x*2));