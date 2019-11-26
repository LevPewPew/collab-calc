


let subtract = (num1, num2) => {
  

  try 
  {
    let answer = num1 - num2;
    if (isNaN(answer)) {
      throw "This is not a number." 
    }
    return answer;
  }

  catch( err ) {
    return("caught an error " + err);
  }
}
// m="hello";
// console.log(subtract("hello", 2));




