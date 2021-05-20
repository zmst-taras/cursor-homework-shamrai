//  function hey(test) {
//   console.log('hey', test);
// }
// // setTimeout (hey, 2000);
// const intervalId = setInterval(hey, 1000, "ПРИВІТ");
// setTimeout(() => {
//   clearInterval (intervalId);
// }, 3000); 
 
// function timer () {
//   let time = 5;
//   const timerId = setInterval(()=>{
//     console.log(time--);

//      if (time == 0) {
//        clearInterval(timerId)
//        console.log("(;");
//      }
//   },1000)
// };
//  timer();

async function getRandomChinese(length) {
  let count = 0;
  let result = [];
  while (count < length) {
      const sign = String.fromCharCode(Date.now()).slice(-5);
      count++;
      result.push(sign)
      await new Promise((resolve) => {
          setTimeout(() => {
              resolve(sign);
          }
          , 50);
      }
      );
  }
  console.log(result.join(' '));
}
getRandomChinese(4);

