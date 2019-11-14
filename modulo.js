
let oddOrEven = (num) => {
  try {

    if(typeof(num) !== "number"){
      throw "Invalid input.";
    } else if(num % 2){
      return true;
    } else {
      return false;
    }

  } catch(error) {
    return error;
  }

}

console.log(oddOrEven(3));
console.log(oddOrEven("heyhey"));
