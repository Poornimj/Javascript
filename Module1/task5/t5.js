function leapYear(){

  const number = parseInt(prompt("Enter the number as a year "));

  let year;
  if((number%4 ===0 && number %100!==0 || number%400===0)){
   year= The year,${number} is a leap year;
  }else {
    year=The year ${number}, is not a leap year;
  }
  const target = document.querySelector('#target');
  target.innerHTML=year;

}