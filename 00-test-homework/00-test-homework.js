const priceBook = 15.678;
const priceCar = 123.965;
const pricePhone = 90.2345;
console.log (priceBook, priceCar, pricePhone);
document.writeln (priceBook, priceCar, pricePhone);

// Ex#1

const maxPrice = Math.max(priceBook, priceCar, pricePhone);
console.log (`Max Numb: ${maxPrice}`);
document.writeln( `максимальна ціна: ${maxPrice}`);

// Ex#2

const minPrice = Math.min(priceBook, priceCar, pricePhone);
console.log (`Min Numb: ${minPrice}`);
document.writeln(`мінімальна ціна: ${minPrice}`);

// Ex#3

const sumPrice = (priceBook + priceCar + pricePhone);
console.log(`Sum Numbers: ${sumPrice}`);
document.writeln( `сума цін: ${sumPrice}`)

// Ex#4

const priceBookFloor = Math.floor(priceBook);
const priceCarFloor = Math.floor(priceCar);
const pricePhoneFloor = Math.floor(pricePhone);
const sumPriceFloor = (priceBookFloor + priceCarFloor + pricePhoneFloor);
console.log(` all sum prices floor: ${sumPriceFloor} griven' :)`);
document.writeln( `округлення ціни до 100: ${sumPriceFloor} гривень :)`);

// Ex#5

const roundHundredPrice = Math.round(sumPrice/100)*100;
console.log(`round to Hundred Price: ${roundHundredPrice}`); 
document.writeln( `округлення ціни до сотнів: ${roundHundredPrice}`);