function findMinMax(arr) {
  max = arr[0];
  min = arr[0];
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  });
  return [max, min]
}

console.log(findMinMax([1,2,3,4,5,2]))

