// Ex# 1

// function getMaxDigit (number) {
//   if (n <= 0){
//     return 0
//   }else {
//       return Math.max (n %10, getMaxDigit(Math.floor(n / 10)));

//     }
//   }
// console.log(`${getMaxDigit}`);


//  let getMaxDigit = function(n) {
//    if (n <= 0){
//      n === Number.isNaN
//      return (Math.max(n));
//    }else{
//    n !== NaN
//   alert("It`s not number");
//    }
    
//  }
 
//  console.log(getMaxDigit(Math.max(13161351353)));


//   `);
  function getMaxDigit (number){
    const numberToString = String(number).split('');
    const maxNumber = Math.max(...numberToString);
  return maxNumber;
  }
  console.log("функція №1:" , getMaxDigit(1321564648132));
  document.writeln(`Максимальне число: ${getMaxDigit(125489411)} <br>`);


  // Ex#2

  
 function degreeOf (x,y){
   for (let i = 0; i < y; i++) {
     const degree = x;
     x += degree;
   }
   return x;
 }