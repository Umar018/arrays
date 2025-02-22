function sumCubes(arr) {
  let sum = arr.reduce((acc, num) => acc + num**3, 0)
  return sum
}

console.log(sumCubes([3,4,5]))


