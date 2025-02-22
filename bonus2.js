function multArr(arr){
    return function(num){
        return arr.map(item => item * num)
    }
}

console.log(multArr([1,2,3,4])(5))