/**
 * @class Person
 */
class Person {
    #id;
    #lastname;
    #firstname;
    #phone;
    #email;
    #groupid;

    /**
     * Constructor
     * Initialize a person
     * @param int _id 
     * @param string _lastname 
     * @param string _firstname 
     * @param string _phone 
     * @param string _email 
     * @param string _groupid 
     */
    constructor(_id, _lastname, _firstname, _phone, _email, _groupid) {

        this.copy(_id, _lastname, _firstname, _phone, _email, _groupid);

    }

    /**
     * Copy the information of the object supplied as arguments
     * @param int _id 
     * @param string _lastname 
     * @param string _firstname 
     * @param string _phone 
     * @param string _email 
     * @param string _groupid 
     */
    copy(_id, _lastname, _firstname, _phone, _email, _groupid) {
        this.#id = parseInt(_id) || NaN;
        this.#lastname = _lastname || "";
        this.#firstname = _firstname || "";
        this.#phone = _phone || "";
        this.#email = _email || "";
        this.#groupid = _groupid || "unknow";
    }

    /**
     * id accessor 
     * @returns int #id
     */
    getId() {
        return this.#id;
    }

    /**
     * lastname accessor
     * @returns string #lastname
     */
    getLastname() {
        return this.#lastname;
    }

    /**
     * firstname accessor
     * @returns string #firstname
     */
    getFirstname() {
        return this.#firstname;
    }

    /**
     * phone accessor
     * @returns string #phone
     */
    getPhone() {
        return this.#phone;
    }

    /**
     * email accessor
     * @returns string #email
     */
    getEmail() {
        return this.#email;
    }

    /**
     * groupid accessor
     * @returns string #groupid
     */
    getGroupid() {
        return this.#groupid;
    }

    /**
     * id mutator
     * @param int _id 
     */
    setId(_id) {
        this.#id = parseInt(_id);
    }

    /**
     * lastname mutator
     * @param string _lastname 
     */
    setLastname(_lastname) {
        this.#lastname = _lastname;
    }

    /**
     * fistname mutator
     * @param string _firstname 
     */
    setFirstname(_firstname) {
        this.#firstname = _firstname;
    }

    /**
     * phone mutator
     * @param string _phone 
     */
    setPhone(_phone) {
        this.#phone = _phone;
    }

    /**
     * email mutator
     * @param string _email 
     */
    setEmail(_email) {
        this.#email = _email;
    }

    /**
     * groupid mutator
     * @param string _groupid 
     */
    setGroupid(_groupid) {
        this.#groupid = _groupid;
    }

    /** print attributes information
     * @returns string 
     */
    toString() {
        return "Id : " + this.#id + "\nLastname : " + this.#lastname
            + "\nFirstname : " + this.#firstname + "\nPhone : " + this.#phone
            + "\nEmail : " + this.#email + "\nGroupid : " + this.#groupid;
    }

    /** 
     * clone a person
     * object.assign alternative
     * @returns Person new person
     */
    clone() {
        return new Person(this.#id, this.#lastname, this.#firstname, this.#phone, this.#email, this.#groupid);
    }

}

module.exports = Person;