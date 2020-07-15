class Person {
    #id;
    #lastname;
    #firstname;
    #phone;
    #email;
    #groupid;

    constructor(person) {

        this.#id = 0;
        this.#lastname = "";
        this.#firstname = "";
        this.#phone = "";
        this.#email = "";
        this.#groupid = "defaut";

        if (person !== undefined) {

            this.copy(person);
        }
    }
    copy(person) {

        this.#id = parseInt(person.#id) || NaN;//  Int
        this.#lastname = person.#lastname || "";//  String
        this.#firstname = person.#firstname || "";// String
        this.#phone = person.#phone || "";// String (à verifier)
        this.#email = person.#email || "";//String (à verifier)
        this.#groupid = person.#groupid || "defaut";// String

    }

}
module.exports = Person;