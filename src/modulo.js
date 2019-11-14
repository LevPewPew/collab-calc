
let oddOrEven = (num1, num2) => {
  try {

    if(typeof(num1) !== "number" && typeof(num2) !== "number"){
      throw "Invalid input.";
    } else {
      return num1 % num2
    }

  } catch(error) {
    return error;
  }

}

console.log(oddOrEven(247, 26));
console.log(oddOrEven("heyhey"));
