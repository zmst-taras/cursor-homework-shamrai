
const user = [
  {

    
    name: "Kiril",
    name: "Bogdan",
    name: "Petro",
    status: "lector",
    createdBy: "iVan"
  
}
];



function getNames(user) {
  
  let names = {};

  for (const key in user) {
    names[key] = (user[key].name);
  }
  
  return names;
};
console.log(getNames(user));
