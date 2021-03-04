//   І завдання, Знайти максимальне число;

  function getMaxDigit (number){
    const numberToString = String(number).split('');
    const maxNumber = Math.max(...numberToString);
  return maxNumber;
  }
  console.log("функція №1:" , getMaxDigit(1321564648132));
  document.writeln(`Максимальне число: ${getMaxDigit(123456789)} <br>`);

  // ІІ завдання. Функція - яка визначає ступінь числа
 
 function degreeOfNumber (x,y){
   for (let i = 0; i < y; i++) {
     const degree = x;
     x += degree;
   }
   return x;
 }
 console.log ("ступінь числа:" ,degreeOfNumber(2,5));
 document.writeln(`ступінь числа: ${degreeOfNumber(2,5)} <br>`);

  // ІІІ завдання, функція щ форматує ім'я / Зроблено  через рефакторінг

function nameFormat (name){
  const name2 = String(name).toLowerCase();
  const upperName = name2.charAt(0).toUpperCase() +  name2.slice(1);

  return upperName;
} 

function nameFormatRefactoring2 (name){
  const name2 = String(name).toLowerCase();
  return name2.charAt(0).toUpperCase() +  name2.slice(1);
} 

function nameFormatRefactoring3 (name){
  return name.charAt(0).toUpperCase() +  name.slice(1).toLowerCase();
} 
console.log("nameFormat : function = ", nameFormat("fuNctIon"));
console.log("nameFormatRefactoring : function = ", nameFormatRefactoring2("fuNction"));
console.log("nameFormatRefactoring2 : function = ", nameFormatRefactoring3("фуНКЦіЯ"));

// ІV завдання ,  функція що залишає суму, після оплат податків

function getTaxes (sum){
  const  tax = 1 - ((18 + 1.5) /100);
  const division = (sum  * tax).toFixed(2) ;

  return division;
}
console.log("сума після податків:" ,getTaxes(1000));
document.writeln(`сума після податків: ${getTaxes(1000)} <br>`)


// V завдання ,  функція що повертає рандомне число

function randomNumber(n,m){
  const getRandom = Math.round(Math.random() *  (m - n) + n);

  return getRandom;
}
console.log("рандомне число:" ,randomNumber(-100,100))
document.writeln(`рандомне число: ${randomNumber(-100,100)}`);

// VІ завдання ,  "повторение - мать учение"

 function searchLetters (letters, word){
   let counter = 0 ;
   for ( let i = 0; i < word.length; i++ ){
     if (word [i] === letters) 
     counter++;
   }
   return counter;
 }
 console.log(`повторення літери "а" в слові "парадігма"   ${searchLetters('а',  'парадігма')}`);






