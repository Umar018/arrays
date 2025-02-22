function numberSplit(num) {
  if (num % 2 === 1) {
    return[Math.ceil(num / 2), Math.floor(num / 2)];
  }
  return [num / 2, num / 2];
}

console.log(numberSplit(7))
