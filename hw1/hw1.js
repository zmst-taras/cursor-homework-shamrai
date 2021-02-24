  const priceBook = 15.678;
  const priceCar = 123.965;
  const pricePhone = 90.2345;

  console.log (`price Book: ${priceBook}`);
  console.log (`price Car: ${priceCar}`);
  console.log (`price Phone: ${pricePhone}`);

// Ex#1

  const maxPrice = Math.max(priceBook, priceCar, pricePhone);
  console.log (`Max Price: ${maxPrice}`);

// Ex#2

  const minPrice = Math.min(priceBook, priceCar, pricePhone);
  console.log (`Min Price: ${minPrice}`);

// Ex#3

  const sumPrice = ( priceBook + priceCar + pricePhone );
  console.log(`Sum Prices: ${sumPrice}`);

// Ex#4

  const sumPriceFloor = Math.floor( priceBook + priceCar + pricePhone ); /* сума чисел округлених до меншого*/
  console.log(`All sum prices floor: ${sumPriceFloor} griven`);

// Ex#5

  const roundHundredPrice = Math.round( sumPrice / 100 ) * 100;
  console.log(`Round to hundred price: ${roundHundredPrice}`); 

// Ex#6                      
 
 function  getEvenNumb ( sumPriceFloor) {
   let result;

   if ( sumPriceFloor % 2 === 0 ) {
     result = "even";

   } else{
    result = "odd" ;
   }

   return result;
 }

  console.log (`Sum prices is: ${getEvenNumb (sumPriceFloor)} number`);


  // Ex#7

  const clientMoney = 500 ;
  const sumRest = clientMoney - sumPrice;
  console.log (`Rest to pay of 500: ${sumRest}`);

  // Ex#8

  const mediumPrice = sumPrice / 3;
  const mediumPriceAfterComma = parseFloat(mediumPrice.toFixed(2));
  console.log(`Average value after comma: ${mediumPriceAfterComma}`);

  // Ex#9
  
  const discount = (Math.round( Math.random () * 100 ) / 100) * 100;
  console.log (`Random discount: ${discount} %`);

  const discountUAH = sumPrice  / 100 * discount;
  const sumForPayClient = +( sumPrice - discountUAH ).toFixed(2);
  console.log(`Client pay sum: ${sumForPayClient}`);

  const costOfGoods = +( sumPrice / 2 ).toFixed(2) ;
  console.log (`Cost of goods: ${costOfGoods}`);

  const cleanProfit = +( costOfGoods - discountUAH ).toFixed(2);
  console.log('Clean  profit:' ,cleanProfit);
  




  console.log(` 
    ціна книги: ${priceBook};
    ціна машини: ${priceCar};
    ціна телефона: ${pricePhone};
    максимальна ціна: ${maxPrice};
    мінінмальна ціна: ${minPrice};
    сума цін: ${sumPrice};
    сума цін округлених в меншу сторону: ${sumPriceFloor};
    округлення цін до сотень: ${roundHundredPrice};
    сума товарів є: ${getEvenNumb (sumPriceFloor)} число;
    решта від сплати клієнта 500, є: ${sumRest};
    середнє значення ціни після коми: ${mediumPriceAfterComma};
    випадкова знижка: ${discount } %;
    знижка клієнта: ${discountUAH} %;
    клієнт платить суму зі знижкою: ${sumForPayClient};
    собівартість: ${costOfGoods};
    чистий прибуток: ${cleanProfit}.    
  `)

