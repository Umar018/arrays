function isPrime(num){
    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i == 0){
            return false
        }       
    }
    return true
}

function findPrime(arr){
    return arr.filter(num => isPrime(num) == true)
}

console.log(findPrime([4,5,6,7,8,9,10,11,12,13,14]))