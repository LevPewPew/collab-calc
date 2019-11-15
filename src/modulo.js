

export let modulo = (num1, num2) => {
  try {
    if(typeof(num1) !== "number" && typeof(num2) !== "number"){
      throw "Invalid input.";
    } else {
      let answer = num1 % num2
      return answer
    }
  } catch(error) {
    return error;
  }
}

// module.exports = modulo;

// export {modulo} from 'modulo.js';
