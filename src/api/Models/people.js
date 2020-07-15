const Person = require('./Person.js');
const StringCheck = require ("./StringCheck");

class People {
    constructor() {
        this.people = [];
    }


    isValid(_person) {

        let test = new StringCheck();

        if (!(_person instanceof Person)) {
            return false;
        }

        if(!(test.email(_person))){
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

        let pers = this.people.find(pers => pers.id === parseInt(_id));

        if (pers !== undefined) {

            let persClone = Object.assign(new Person(), pers)
            return persClone;
        }
        return undefined;
    }

    // demander à Mikael
    // update(_person) {
    //     if (!this.isValid(_person)) {
    //         return _person;
    //     }


    //     if (_person.id < 1 && _person.id !== NaN) {
    //         return _person;
    //     }

    //     let exists = this.people.find(e => e.id === _person.id);

    //     if (exists !== undefined) {
    //         exists.copy(_person);
    //         return exists;
    //     }

    //     return exists;
    // }


    delete(_id) {
        let toDelete = this.people.findIndex(emp => emp.id === parseInt(_id));
        if (toDelete > -1)
            this.people.splice(toDelete, 1);
    }
}

module.exports = People ;
