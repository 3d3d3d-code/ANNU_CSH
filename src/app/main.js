const Person = require('../api/Models/Person.js');
const People = require('../api/Models/people.js');
const StringCheck = require("../api/Models/StringCheck.js");

var annuaire = new People();
var pers = new Person(1, "Chaporet", "Etemieux", "06 66/66.66-66", "caae@aol.com", "annie");


let pers2 = new Person(
  2,
  "Grumpy",
  "Cat",
  "+33102030405",
  "gcat@nya.com",
  "graou"
);

let chk = new StringCheck();


//tet create()
annuaire.create(pers);
annuaire.create(pers2);

//test People.isValid()
console.log(annuaire.isValid(pers));
console.log(annuaire.isValid(pers2));

//affichage annuaire
console.log(annuaire);
annuaire.display();

//test read(id) & update
let clone = annuaire.read(2); //bug obj assign attrib priv
console.log("________________clone :")
console.log(clone);
console.log(clone.toString());
clone.setPhone("01 02-03/04_05."); //test clearPhone /display -> ok

console.log(clone.toString());
console.log("________________")

annuaire.update(clone); //update ok

annuaire.display();

console.log();
clone.setPhone(chk.clearPhone(clone));
console.log("clone", clone.getPhone());


//test obj assign
// let persClone = Object.assign(new Person(), pers2);
// console.log("persClone", persClone.toString());





