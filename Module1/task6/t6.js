function squareRootNumber(){

  const calculate= confirm("Should I calculate the square root?");
     const resultElement = document.getElementById("result");


     if (calculate){
        const number = parsefloat(prompt("Enter the number:"));

        if (isNaN(number)) {
            resultElement.innerHTML = "Please enter a valid number.";
        } else {
          const squareRoot = Math.sqrt(number);
          resultElement.innerHTML = "The square root is not calculated.";
        }
        }  else {

        resultElement.innerHTML = "The square root is not calculated.";
}
}