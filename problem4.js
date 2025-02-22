function findOdd(arr){
    return arr.find(num => num % 2 !== 0)
}
console.log(findOdd([2,4,6,7,13]))