class Person {

    constructor(id, lastname, firstname, phone, email, groupid) {

        this.id = parseInt(id) || NaN;//  Int
        this.lastname = lastname || "";//  String
        this.firstname = firstname || "";// String
        this.phone = phone || "";// String (à verifier)
        this.email = email || "";//String (à verifier)
        this.groupid = groupid || "defaut";// String


    }


}

module.exports = Person;