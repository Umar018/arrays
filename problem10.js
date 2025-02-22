function countTrue(arr){
    return arr.filter(bool => bool === true).length
}

console.log(countTrue([true, false, false, true, false]))