const Person = require('./Person.js');
const StringCheck = require("./StringCheck");

/**
 * @class People
 */
class People {

    /**
     * constructor
     * Initialize people : array of person
     */
    constructor() {
        this.people = [];
    }

    /**
     * valid an object Person
     * @param Person _person 
     * @returns boolean 
     * true : the object is an instance of Person and it's attributes are in the right format 
     * OR false : the object isn't a valid Person
     */
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

    /**
     * Collect a list of people by filter(s)
     * @param _filter filter
     * @returns people[] list of people found or a empty list if no match
     */
    readAll(_filter) {
        return this.people.filter(_filter);
    }

    /**
     * Create a person : check validity and add it in collection
     * @param Person _person 
     * @returns Person object Person added 
     */
    create(_person) {

        if (this.isValid(_person) && this.people.find(e => e.getId() === _person.getId()) === undefined && this.people.length < 256) {
            this.people.push(_person);
        }
        return _person;
    }

    /**
     * Search a person by id
     * @param int _id 
     * @returns Person person matched or undefined if no match
     */
    read(_id) {

        let pers = this.people.find(pers => pers.getId() === parseInt(_id));

        if (pers !== undefined) {

            // let persClone = Object.assign(new Person(), pers);
            // return persClone;


            //alternative 1 à objet.assign : 
            /*
            let persClone = new Person(
                pers.getId(), pers.getLastname(), pers.getFirstname(), pers.getPhone(), pers.getEmail(), pers.getGroupid()
                );
                return persClone;
                */

            //alternative 2 à objet.assign : 

            return pers.clone();

        }
        return undefined;
    }

    /**
     * Valid the data and update the collection
     * @param Person _person a clone of and existing person 
     * @returns the modified person
     */
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

    /**
     * delete of collection a person by id
     * @param int _id
     * @returns boolean true if succes else false
     */
    delete(_id) {
        let toDelete = this.people.findIndex(emp => emp.getId() === parseInt(_id));
        if (toDelete > -1)
            this.people.splice(toDelete, 1);
    }


    /**
     * Show elements of the collection
     */
    display() {
        let stringcheck = new StringCheck();
        for (let i = 0; i < this.people.length; i++) {
            this.people[i].setPhone(stringcheck.clearPhone(this.people[i])); //retire séparateur

            console.log(
                this.people[i].toString()
            );

        }
    }
}

module.exports = People;
