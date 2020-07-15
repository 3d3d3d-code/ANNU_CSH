const Person = require('../api/Models/Person.js');
const People = require('../api/Models/people.js');
const StringCheck = require("../api/Models/StringCheck.js");

var annuaire = new People();
var pers = new Person(1, "Chaporet", "Etemieux", "0666666666", "caae@aol.com", "annie");


let pers2 = new Person(
  2,
  "Grumpy",
  "Cat",
  "+33102030405",
  "gcat@nya.com",
  "graou"
);




//tet create()
// annuaire.create(pers);
// annuaire.create(pers2);

//test People.isValid()
// console.log(annuaire.isValid(pers));
// console.log(annuaire.isValid(pers2));

//affichage annuaire
// console.log(annuaire);
// annuaire.display();

//test update
// let clone = annuaire.read(1);
// console.log("________________clone :")
// console.log(clone);
// console.log(clone.toString());
// clone.setPhone("0102030405");
// console.log(clone.toString());
// console.log("________________")

// annuaire.update(clone);




// console.log("pers", pers.toString());
// console.log(annuaire.people[0].toString());


// annuaire.display();


let persClone = Object.assign(new Person(), pers2);
console.log("persClone", persClone.toString());





