function findMissing(arr){
    arr = arr.sort((a,b) => a-b)
    for(let i = 1; i < arr.length; i++){
        if(arr[i] - arr[i-1] !== 1){
            return arr[i] - 1
        }
    }
    return -1
}

console.log(findMissing([9,6,4,2,3,5,7,0,1]))