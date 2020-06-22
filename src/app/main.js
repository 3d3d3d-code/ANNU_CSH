const Person = require('../api/Models/Person.js');
const People = require('../api/Models/people.js');


var annuaire = new People();
var pers = new Person(1,'Chaporet','Etemieux','06 66 66 66 66 ','ce@aol.com','annie');

annuaire.create(pers);
console.log(annuaire);