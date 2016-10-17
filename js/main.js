var fibArray = [];
var first = 1;
var second = 1;
  fibArray[fibArray.length] = first;

while (second < 500){
  let placeholder = 0
  fibArray[fibArray.length] = second;
  placeholder = second;
  second += first;
  first = placeholder;
}

console.log("Array: ", fibArray);

