class Person {
    #id;
    #lastname;
    #firstname;
    #phone;
    #email;
    #groupid;

    constructor(_id, _lastname, _firstname, _phone, _email, _groupid) {

        this.#id = _id;
        this.#lastname = _lastname;
        this.#firstname = _firstname;
        this.#phone = _phone;
        this.#email = _email;
        this.#groupid = _groupid;

    }

    getId() {
        return this.#id;
    }

    getLastname() {
        return this.#lastname;
    }

    getFirstname() {
        return this.#firstname;
    }

    getPhone() {
        return this.#phone;
    }

    getEmail() {
        return this.#email;
    }

    getGroupid() {
        return this.#groupid;
    }

    setId(_id) {
        this.#id = parseInt(_id) || NaN;
    }

    setLastname(_lastname) {
        this.#lastname = _lastname;
    }

    setFirstname(_firstname) {
        this.#firstname = _firstname;
    }

    setPhone(_phone) {
        this.#phone = _phone;
    }

    setEmail(_email) {
        this.#email = _email;
    }

    setGroupid(_groupid) {
        this.#groupid = _groupid;
    }

    toString() {
        return "Id : " + this.#id + "\nLastname : " + this.#lastname
            + "\nFirstname : " + this.#firstname + "\nPhone : " + this.#phone
            + "\nEmail : " + this.#email + "\nGroupid : " + this.#groupid;
    }

}

module.exports = Person;