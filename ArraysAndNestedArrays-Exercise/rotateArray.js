function solve(arr, number) {
  while (number > 0) {
    let lastNum = arr.pop();
    arr.unshift(lastNum);
    number--;
  }

  console.log(arr.join(" "));
}
solve(["Banana", "Orange", "Coconut", "Apple"], 15);
