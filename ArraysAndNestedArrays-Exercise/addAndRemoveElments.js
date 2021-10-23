function solve(arr) {
  let result = [];
  let number = 1;
  for (let i = 0; i < arr.length; i++) {
    let currCommand = arr[i];

    if (currCommand == "add") {
      result.push(number);
    } else if (currCommand == "remove") {
        result.pop();
    }
    number++;
  }

  return result.length !== 0 ? result.join('\n') : "Empty";
  //console.log(result.join("\n"));
}

console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']
));
