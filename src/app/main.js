const Person = require('../api/Models/Person.js');
const People = require('../api/Models/people.js');
const StringCheck = require("../api/Models/StringCheck.js");

var annuaire = new People();
var pers = new Person(1,'Chaporet','Etemieux','06 66 66 66 66 ','ce@aol.com','annie');

annuaire.create(pers);
console.log(annuaire);
console.log(pers);

let pers2 = new Person(
  2,
  "Grumpy",
  "Cat",
  "+33102030405",
  "gcat@nya.com",
  "graou"
);

let check = new StringCheck();


console.log(pers2);

console.log(check.email(pers2));
console.log(check.name(pers2.lastname));
console.log(check.name(pers2.firstname));

console.log(check.convertPhoneNumber(pers2));
console.log(check.phoneNumber(pers2));

console.log(check.isValide(pers));
