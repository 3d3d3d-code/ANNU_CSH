class Person {
    #id;
    #lastname;
    #firstname;
    #phone;
    #email;
    #groupid;


    constructor(_id, _lastname, _firstname, _phone, _email, _groupid) {

        this.copy(_id, _lastname, _firstname, _phone, _email, _groupid);

    }

    copy(_id, _lastname, _firstname, _phone, _email, _groupid) {
        this.#id = parseInt(_id) || NaN;
        this.#lastname = _lastname || "";
        this.#firstname = _firstname || "";
        this.#phone = _phone || "";
        this.#email = _email || "";
        this.#groupid = _groupid || "unknow";
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
        this.#id = parseInt(_id);
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

    //affichage textuel des attributs
    toString() {
        return "Id : " + this.#id + "\nLastname : " + this.#lastname
            + "\nFirstname : " + this.#firstname + "\nPhone : " + this.#phone
            + "\nEmail : " + this.#email + "\nGroupid : " + this.#groupid;
    }

    //alternative obj assign
    clone(){
        return new Person (this.#id, this.#lastname, this.#firstname, this.#phone, this.#email, this.#groupid);
    }

}

module.exports = Person;