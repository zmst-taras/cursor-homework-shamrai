
 
// Ex# 1 - 2 

let numberN = null;
do{
  numberN = +(prompt("Введіть число N "));  
    
}

while( !Number.isInteger(numberN));
console.log ("number N:" ,(numberN));

//  Ex# 3 - 4 

let numberM = null;
do{
  numberM = +(prompt("Введіть число M "));

}

 while (!Number.isInteger(numberM));
 console.log ("number M: ",(numberM));

//  Ex# 5

  const skipEvenNumber  = confirm(" чи потрібно пропускати парні числа ?")
    console.log ("пропускати:" ,skipEvenNumber,"число");
  
// Ex# 6 - 7
let sumN_M = 0

  for( let y = numberN; y <= numberM; y++){

      if (skipEvenNumber && y % 2 === 0){

          continue;
        }
        sumN_M += y;
  }
    
  
console.log ("sum at number N to number M:" ,sumN_M,);
document.writeln("sum numbers at number N do number M: " ,sumN_M);


