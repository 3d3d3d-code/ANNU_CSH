const Person = require('../api/Models/Person.js');
const People = require('../api/Models/people.js');
const StringCheck = require("../api/Models/StringCheck.js");

var annuaire = new People();
var pers = new Person(1,"Chaporet","Etemieux","0666666666","caae@aol.com","annie");


let pers2 = new Person(
  2,
  "Grumpy",
  "Cat",
  "+33102030405",
  "gcat@nya.com",
  "graou"
);

//let check = new StringCheck();


console.log(pers.toString());

annuaire.create(pers2);
console.log(annuaire.isValid(pers));
annuaire.create(pers);

console.log(annuaire);
console.log(annuaire.people[1].toString());

console.log(annuaire.isValid(pers2));



// console.log(check.email(pers2));
// console.log(check.name(pers2.lastname));
// console.log(check.name(pers2.firstname));

// console.log(check.convertPhoneNumber(pers2));
// console.log(check.phoneNumber(pers2));

// console.log(check.isValide(pers));



