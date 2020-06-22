const Person = require('./Person.js');

class People {
    constructor() {
        this.people = [];
    }


    isValid(_people) {

        if (!(_people instanceof Person)) {
            return false;
        }
        return true;
    }

    readAll(_filter) {
        return this.people.filter(_filter);
    }

    create(_people) {

        if (this.isValid(_people) && this.people.find(e => e.id === people.id) === undefined && this.people.length < 256) {
            this.people.push(_people);
        }
        return _people;
    }

    read(_id) {

        let pers = this.people.find(pers => pers.id === parseInt(_id));

        if (pers !== undefined) {

            let persClone = Object.assign(new Person(), pers)
            return persClone;
        }
        return undefined;
    }

    update(_people) {
        if (!this.isValid(_people)) {
            return _people;
        }


        if (_people.id < 1 && _people.id !== NaN) {
            return _people;
        }

        let exists = this.people.find(e => e.id === _people.id);

        if (exists !== undefined) {
            exists.copy(_people);
            return exists;
        }

        return exists;
    }


    delete(_id) {
        let toDelete = this.people.findIndex(emp => emp.id === parseInt(_id));
        if (toDelete > -1)
            this.people.splice(toDelete, 1);
    }
}

module.exports = People ;
