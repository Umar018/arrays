function returnVowel(arr) {
  return arr.map((el) =>
    el
      .split("")
      .filter(
        (letter) => "aeoui".includes(letter) ).join("")
  );
}

console.log(returnVowel(["wassup", "hello world"]))
