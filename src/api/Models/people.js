const Person = require('./Person.js');
const StringCheck = require("./StringCheck");

class People {
    constructor() {
        this.people = [];
    }


    isValid(_person) {


        if (!(_person instanceof Person)) {
            return false;
        }

        //StringCheck

        let test = new StringCheck();

        if (!(test.isValid(_person))) {
            return false;
        }

        return true;
    }

    readAll(_filter) {
        return this.people.filter(_filter);
    }

    create(_person) {

        if (this.isValid(_person) && this.people.find(e => e.getId() === _person.getId()) === undefined && this.people.length < 256) {
            this.people.push(_person);
        }
        return _person;
    }

    read(_id) {

        let pers = this.people.find(pers => pers.getId() === parseInt(_id));

        if (pers !== undefined) {

            let persClone = Object.assign(new Person(), pers);
            return persClone;
        }
        return undefined;
    }


    update(_person) {
        
        if (!this.isValid(_person)) {
            return _person;
        }


        if (_person.getId() < 1 && _person.getId() !== NaN) {
            return _person;
        }

        let exists = this.people.find(e => e.getId() === _person.getId());

        if (exists !== undefined) {
            exists.copy(_person.getId(), _person.getLastname(), _person.getFirstname(), _person.getPhone(), _person.getEmail(), _person.getGroupid());
            return exists;
        }

        return exists;
    }


    delete(_id) {
        let toDelete = this.people.findIndex(emp => emp.getId() === parseInt(_id));
        if (toDelete > -1)
            this.people.splice(toDelete, 1);
    }

    //Affichage textuel des éléments de la collection
    display() {
        for (let i = 0; i < this.people.length; i++) {
            console.log(
                this.people[i].toString()
            );

        }
    }
}

module.exports = People;
