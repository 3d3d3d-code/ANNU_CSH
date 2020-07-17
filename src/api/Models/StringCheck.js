const Person = require("./Person");

/** check and (re)formate strings.
 * @class StringCheck
 */
class StringCheck {

  constructor() { }
  /**
   * check mail format
   * @param _person
   * @returns bool true : format ok | false : format not ok
   */
  email(_person) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!_person.getEmail().match(mailFormat)) {
      return false;
    }
    return true;
  }

  /**
   * check name format
   * @param _name firstname/lastname
   * @returns bool true : format ok | false : format not ok
   */
  name(_name) {
    let nameFormat = /^[a-z ,.'-]+$/i; //of for complex names
    if (!_name.match(nameFormat)) {
      return false;
    }
    return true;
  }

  /**
   * remove separators
   * @param _person
   * @returns phone number of _person without separators
   */
  clearPhone(_person) {
    let originPhone = _person.getPhone();
    let cleanPhone = originPhone;
    let i;
    for (i = 0; i < originPhone.length; i++) {
      if (cleanPhone.includes(" ")) {
        cleanPhone = cleanPhone.replace(" ", "");
      }
      if (cleanPhone.includes("-")) {
        cleanPhone = cleanPhone.replace("-", "");
      }
      if (cleanPhone.includes(".")) {
        cleanPhone = cleanPhone.replace(".", "");
      }
      if (cleanPhone.includes("_")) {
        cleanPhone = cleanPhone.replace("_", "");
      }
      if (cleanPhone.includes("/")) {
        cleanPhone = cleanPhone.replace("/", "");
      }
    }
    return cleanPhone;
  }

  /**
   * check phone format (national or international format)
   * @param _person
   * @returns bool true : format ok | false : format not ok
   */
  phoneNumber(_person) {
    //sans espacement aucun
    //national : premier chiffre : 0, second 1 à 9
    //international fr : préfixe +33
    let phoneNumNat = /^([0]{1})([1-9]{1})([0-9]{8})$/;
    let phoneNumInter = /^\+?([3]{2})([1-9]{1})([0-9]{8})$/;
    let cleanPhone = this.clearPhone(_person);

    if (!cleanPhone.match(phoneNumNat) && !cleanPhone.match(phoneNumInter)) {
      return false;
    }
    return true;
  }

  /**
   * Convert phonenumber national to internation and inversely
   * @param _person
   * @returns converted phonenumber
   */
  convertPhoneNumber(_person) {
    let phoneNumNat = /^([0]{1})([1-9]{1})([0-9]{8})$/;
    let phoneNumInter = /^\+?([3]{2})([1-9]{1})([0-9]{8})$/;
    let cleanPhone = this.clearPhone(_person.getPhone());
    if (cleanPhone.match(phoneNumNat)) {
      return (cleanPhone = "+33" + cleanPhone.substring(1, 10));
    }
    if (cleanPhone.match(phoneNumInter)) {
      return (cleanPhone = "0" + cleanPhone.substring(3, 12));
    }
  }

  /**
   * Valid an object Person
   * @param _person
   * @returns bool true : all ok | false : format not all ok
   */
  isValid(_person) {
    if (
      !this.email(_person) ||
      !this.name(_person.getLastname()) ||
      !this.name(_person.getFirstname()) ||
      !this.phoneNumber(_person)
    ) {
      return false;
    }
    return true;
  }
}

module.exports = StringCheck;
