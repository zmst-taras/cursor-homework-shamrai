// #1
function getRandomArray (length, min, max){
  returnItegerArray = [];
  for (let i = 0; i < length; i++) {
     returnItegerArray[i] = Math.round(Math.random() * (max - min) + min);
  }
  return returnItegerArray;
}
const comeback = getRandomArray(10, 10, 100)
console.log("#1 масив випадкових чисел:",comeback);

// #3
function getAverage(...numbers){
  const filterNumberInteger = numbers.filter(numb =>  Number.isInteger(numb));
  const sum = filterNumberInteger.reduce((sum, number) => {
    return sum + number;
  }, 0);
    return (sum / numbers.length).toFixed(2);
};
const sumAvarageNumb = getAverage(12,12,54,87,4,2,5,4,4,5,4,68,4,8,6,5.85,9,4,25.003,44,2,1,42,22,1)
console.log("#3 середнє значення аргументів:",sumAvarageNumb);

// #4
function getMedian (...numbers){
  const filterNumberInteger = numbers.filter(numb =>  Number.isInteger(numb));
  const  sortingArrays = filterNumberInteger.sort((a, b) => a - b);
  const floorMiddle = Math.floor( (sortingArrays.length - 1) / 2);
  const ceilMiddle = Math.ceil( (sortingArrays.length - 1) / 2);
  return ( sortingArrays[floorMiddle] + sortingArrays[ceilMiddle]) / 2;
    }

const medianArrays = getMedian(9,16,2,1.5,4,11,3.14,3,18,15,4,7);
console.log("#4 медіана всіх аргументів:",medianArrays);




// #5/
function filterEvenNumbers(...numbers) {
  const numbEvenInteger = numbers.filter(numb => numb % 2 === 0 && Number.isInteger(numb));
  return numbEvenInteger;
}
const numbEvenInteger = [filterEvenNumbers(15,2.7,'45',"hi",'how',"are", "you","?",4,22,13,6)];
console.log('#5 filter Even Numbers:',numbEvenInteger);

//6
function countPositiveNumbers(...numbers){
  let numberPlus = 0;
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
          numberPlus++;
      }
  } return numberPlus;
}
const counterNumbersPlus = countPositiveNumbers (-3,-2,-1,0,1,2,3,4,5);
console.log('#6 кількість позитивних чисел:' ,counterNumbersPlus);

// #7
function getDividedByFive(...numbers) {
  return numbers.filter((numb) => numb % 5 === 0);
};
const multiplicity5 = getDividedByFive(1,3,5,7,10,13,75,50,-15,100)
console.log("#7 кратність числу 5 :" ,multiplicity5);


////////////////////////////////////////////////////////////////////
