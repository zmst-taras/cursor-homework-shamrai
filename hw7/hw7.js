const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Ex#1
// getMyTaxes.call(country, salary) -> number;

function getMyTaxes(salary){

  return this.tax * salary;
}
console.log("In Ukraine my taxes:" ,getMyTaxes.call(ukraine, 1789));

// Ex2
// getMiddleTaxes.call(country) -> number;

function getMiddleTaxes(country){

  return this.tax * this.middleSalary;
}
console.log("In latvia  my avarage taxes:" ,getMiddleTaxes.call(latvia));

//Ex#3
// getTotalTaxes.call(country) -> number;

function getTotalTaxes(country){

  return this.tax * this.middleSalary * this.vacancies;
}
console.log("In litva total amount of tax payment is:" ,getTotalTaxes.call(litva));

// Ex#4
// getMySalary(country)

function getMySalary(country) {
    setInterval(() =>{
      let object = {};
      const minSalary = 1500;
      const maxSalary = 2000;
      object.salary = Math.ceil(( Math.random() * (maxSalary - minSalary)) + minSalary );
      object.taxes = +(country.tax * object.salary).toFixed();
      object.profit = object.salary - object.taxes; 
      console.log('Salary in Ukraine: ', object);
    }, 10000);
  }   
  
getMySalary(ukraine)
