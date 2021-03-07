//   І завдання, Знайти максимальне число;

  function getMaxDigit (number){
    const numberToString = String(number).split('');
    const maxNumber = Math.max(...numberToString);
  return maxNumber;
  }
  console.log("функція №1:" , getMaxDigit(1321564648132));
  document.writeln(` Функція №1: максимальне число: ${getMaxDigit(123456789)} <br>`);

  // ІІ завдання. Функція - яка визначає ступінь числа
 
 function degreeOfNumber (numberX,numberY){
   let result = 1;
   for (let i = 0; i < numberY; i++) {
     result *= numberX
   }
   return result;
 }
 console.log ("ступінь числа:" ,degreeOfNumber(2,5));
 document.writeln(`Функція №2: ступінь числа: ${degreeOfNumber(2,5)} <br>`);

  // ІІІ завдання, функція що форматує ім'я / Зроблено  через рефакторінг

function nameFormat (name){
  const name2 = String(name).toLowerCase();
  const upperName = name2.charAt(0).toUpperCase() +  name2.slice(1);

  return upperName;
} 

function nameFormatRefactoring2 (name){
  const firstLetter = String(name).toLowerCase();
  return firstLetter.charAt(0).toUpperCase() +  firstLetter.slice(1);
} 

console.log("nameFormat : function = ", nameFormat("fuNctIon"));
document.writeln(` Функція №3: ім'я з Великої літери: ${nameFormat("фУНкЦіЯ", "аНАсТаСіЯ")} <br>`);
console.log("nameFormatRefactoring2 : function = ", nameFormatRefactoring2("фуНКЦіЯ"));

// ІV завдання ,  функція що залишає суму, після оплат податків

function getTaxes (sum){
  const  tax = 1 - ((18 + 1.5) /100);
  const division = (sum  * tax).toFixed(2) ;

  return division;
}
console.log("сума після податків:" ,getTaxes(1000));
document.writeln(`Функція №4: сума після податків: ${getTaxes(1000)} <br>`)


// V завдання ,  функція що повертає рандомне число

function randomNumber(min,max){
  const getRandom = Math.round(Math.random() *  (max - min) + min);

  return getRandom;
}
console.log("рандомне число:" ,randomNumber(-100,100))
document.writeln(`Функція №5: рандомне число: ${randomNumber(-100,100)} <br>`);

// VІ завдання ,  "повторение - мать учение"

 function countLetters (letters, word){
   const lettersLower = letters.toLowerCase();
   const wordLower = word.toLowerCase();

   let counter = 0 ;
   for ( let i = 0; i < wordLower.length; i++ ){
     if (word[i] === lettersLower) 
     counter++;
   }
   return `повторення літери "${letters}" в реченні " ${word} " в кількості ${counter} рази`;
 }
 const countLetters2 = countLetters( 'р', 'Круїз Тома Круза кращий');

 console.log(countLetters("р",  "Круїз Тома Круза кращий"));
 document.writeln(`Функція №6:  ${countLetters2}`);





