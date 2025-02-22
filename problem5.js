function calSum(arr){
    const arr1 = new Array(arr[1]).fill(0)
    return arr1.reduce((acc, num) => acc + arr[0], 0)
}

console.log(calSum([3,4]))