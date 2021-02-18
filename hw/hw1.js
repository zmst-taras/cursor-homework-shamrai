const priceBook = 15.678;
const priceCar = 123.965;
const pricePhone = 90.2345;
console.log (priceBook, priceCar, pricePhone);
document.writeln (priceBook, priceCar, pricePhone);

// Ex#1

const maxPrice = Math.max(priceBook, priceCar, pricePhone);
console.log (`Max Numb: ${maxPrice}`);
document.writeln( <p> `максимальна ціна: ${maxPrice} `</p>);

// Ex#2

const minPrice = Math.min(priceBook, priceCar, pricePhone);
console.log (`Min Numb: ${minPrice}`);
document.writeln(`мінімальна ціна: ${minPrice}`);

// Ex#3

const sumPrice = (priceBook + priceCar + pricePhone);
console.log(`Sum Numbers: ${sumPrice}`);
document.writeln( `сума цін: ${sumPrice}`); 

// Ex#4

const priceBookFloor = Math.floor(priceBook);
const priceCarFloor = Math.floor(priceCar);
const pricePhoneFloor = Math.floor(pricePhone);
let sumPriceFloor = (priceBookFloor + priceCarFloor + pricePhoneFloor); /* сума чисел округлених до меншого*/
console.log(` all sum prices floor: ${sumPriceFloor} griven' :)`);
document.writeln( ` сума округлення ціни до меншого: ${sumPriceFloor} гривень :)`);

// Ex#5

const roundHundredPrice = Math.round(sumPrice/100)*100;
console.log(`round to Hundred Price: ${roundHundredPrice}`); 
document.writeln( `округлення ціни до сотнів: ${roundHundredPrice}`);

// Ex#6                      /* тут виходить непарне число, чому не можу розібратись*/
 const evenNumb = sumPriceFloor;
 function  a ( evenNumb) {
   let result;
   if (evenNumb % 2 == 0) {
     result = " парне";
   } else{
    result = "непарне" ;
   }
   return result;
 }
 console.log (`Сума товарів є: ${a (evenNumb)} число`);


  //Ex#6                    /* тут виходить парне число*/
const result = sumPriceFloor % 2 == 0;
console.log(`Сума товарів є: ${result ? 'парне' : 'непарне'} число`)

  // Ex#7

  const clientMoney = 500 ;
  const sumRest = clientMoney - sumPrice;
  console.log (`Решта від сплати клієнта 500: ${sumRest}`);

// Ex#8

const mediumPrice = sumPrice / 3;
const mediumPriceAfterComma = parseFloat(mediumPrice.toFixed(2));
console.log(`Среднє значення ціни після коми: ${mediumPriceAfterComma}`);
