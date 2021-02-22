const product = prompt("Введи число N?").toLowerCase();

 
  const amountOfBreads = prompt("Число має бути від 1 до 10");

  if (parseInt(amountOfBreads) <= 0 && parseInt(amountOfBreads <=10) ) {
    alert(
      `Це число  підходть ${parseInt(amountOfBreads)} , чудово!`
    );
    if (parseInt(amountOfBreads) ) {
      alert(
        `Це число не підходть ${parseInt(amountOfBreads)} Спробуй ще раз!`
      );

  } else {
    const currency = prompt("Which currency do you wanna pay by???");

    if (currency === "uah") {
      alert(`You need to pay ${parseInt(amountOfBreads) * priceOfBread} uah`);
    } else if (currency === "usd") {
      alert(
        `You need to pay ${((parseInt(amountOfBreads) * priceOfBread) / 28).toFixed(
          2
        )} usd`
      );
    } else {
      alert("Please, choose correct currency");
    }
  }
}
