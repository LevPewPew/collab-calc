// Create an addition function for collab calculator 
let adder= (num1, num2) =>
{
  try
  {
    answer = num1 + num2
    if(isNaN(answer))
    {
      throw "This is not a number, please only input numbers";
    }
    return answer; 
  }
  catch( error )
  {
    return( `Error:${ error }`)
  }
  finally 
  {
    // insert code to call input again.
  }
};
