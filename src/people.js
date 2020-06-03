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

        if (this.isValid(_people)) {
            this.people.push(_people);
        }

        return _employee;
    }

    read(_id) {

        let pers = this.people.find(pers => pers.id === parseInt(_id));

        if (pers !== undefined) {

            let persClone = Object.assign({}, emp)
            return pers2
        }
        return undefined;
    }

    update() {

    }

    delete(_id) {
        let employeeIndex = this.employees.findIndex(emp => emp.id === parseInt(_id));
        this.employees.splice(employeeIndex, 1);
    }
}
    

