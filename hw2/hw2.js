
 
// Ex# 1 - 2 

let numberN;
do{
  numberN = +(prompt("Введіть число N "));
    console.log ("number N:" ,numberN);

     if (numberN % 1 === 0) {

      numberN     

      } else{
      
        alert("Число має бути цілим. Будь ласка повторіть спробу")
    }
    
}
while( Number.isNaN(numberN));

//  Ex# 3 - 4 

let numberM
do{
  numberM = +(prompt("Введіть число M "));
    console.log ("number M: ",numberM);

      if (numberM % 1 === 0) {

         numberM    

      } else{
    
      alert("Число має бути цілим. Будь ласка повторіть спробу")
   }
   
}
 while( Number.isNaN(numberM));

//  Ex# 5

  let skipEvenNumber  = confirm(" чи потрібно пропускати парні числа ?")
skipEvenNumber? "парне" : "не парне ";
    console.log ("пропускати парне:" ,skipEvenNumber,"число");
  
// Ex# 6 - 7
let sumN_M = 0
if (skipEvenNumber === true ){

  for( let y = numberN; y <= numberM; y++){

      if ( y % 2 === 0){
          continue;
      } sumN_M += y;
    }
  } else {
      for( let y = numberN; y <= numberM; y++){
        sumN_M += y;
      }
  }  
  
console.log ("sum at number N do number M:" ,sumN_M,);
document.writeln("sum numbers at number N do number M: " ,sumN_M);


  