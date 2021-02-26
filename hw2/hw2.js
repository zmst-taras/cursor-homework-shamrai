
 
// Ex# 1 - 2 (Нехай в першому значенні N будуть числа від 1 до 10)

let numberN;
do{
  numberN = prompt("Введіть число N (Від 1 до 10)");
    console.log ("number N:" ,numberN);

     if (numberN % 1 === 0) {

      numberN     

      } else{
      
        alert("Число має бути цілим. Будь ласка повторіть спробу")
    }
    
}
while( isNaN(numberN) || !(numberN >=1 && numberN <= 10));

//  Ex# 3 - 4 

let numberM
do{
  numberM = prompt("Введіть число M (Будь-яке число)");
    console.log ("number M: ",numberM);

      if (numberM % 1 === 0) {

         numberM    

      } else{
    
      alert("Число має бути цілим. Будь ласка повторіть спробу")
   }

}
while( isNaN(numberM));

//  Ex# 5

  let skipEvenNumber  = confirm(" чи потрібно пропускати парні числа ?")
skipEvenNumber? "парне" : "не парне ";
    console.log ("пропускати парне:" ,skipEvenNumber,"число");
  
// Ex# 6
 let sumN_M = 0

  for( let cycle = numberN; cycle <= numberM; cycle++){

  if (skipEvenNumber && cycle % 2 === 0){
     sumN_M += cycle
  }
  else !(skipEvenNumber && cycle % 2 === 0)

}
console.log ("sum at number N do number M:" ,sumN_M,);
document.writeln("sum numbers at number N do number M:" ,sumN_M);


  