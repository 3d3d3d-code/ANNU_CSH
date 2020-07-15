const Person = require ("./Person");

/** vérifie et (re)formatte des chaines de caractères.
 * @class StringCheck
 */

class StringCheck {
  
  constructor() {}
  /**
   * Vérifie le format d'un email
   * @param _person
   * @returns bool true si format ok
   */
  email(_person) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!_person.getEmail().match(mailFormat)) {
      return false;
    }
    return true;
  }

  /**
   * Vérifie le format d'un nom ou prénom
   * @param _name firstname/lastname
   * @returns bool true si format ok
   */
  name(_name) {
    let nameFormat = /^[a-z ,.'-]+$/i; //supporte noms complexes
    if (!_name.match(nameFormat)) {
      return false;
    }
    return true;
  }

  /**
   * Retire un séparateur
   * @param _person 
   * @param target
   * @param replacement
   */
  clearPhone(_person) {
    let cleanPhone = _person.phone;
    let i;
    for (i = 0; i < _person.phone.length; i++) {
      if (_person.phone.includes(" ")) {
        cleanPhone = cleanPhone.replace(" ", "");
      }
      if (_person.phone.includes("-")) {
        cleanPhone = cleanPhone.replace("-", "");
      }
      if (_person.phone.includes(".")) {
        cleanPhone = cleanPhone.replace(".", "");
      }
      if (_person.phone.includes("_")) {
        cleanPhone = cleanPhone.replace("_", "");
      }
      if (_person.phone.includes("/")) {
        cleanPhone = cleanPhone.replace("/", "");
      }
    }
    return cleanPhone;
  }

  /**
   * Vérifie le format d'un numéro de téléphone (format national et international)
   * @param _person
   * @returns bool true si format ok
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
   * Conversion d'un numéro de téléphone national (0389010203) vers le format international (+33389010203) et inversement
   * @param _person
   */
  convertPhoneNumber(_person) {
    let phoneNumNat = /^([0]{1})([1-9]{1})([0-9]{8})$/;
    let phoneNumInter = /^\+?([3]{2})([1-9]{1})([0-9]{8})$/;
    let cleanPhone = this.clearPhone(_person);
    if (cleanPhone.match(phoneNumNat)) {
      return (cleanPhone = "+33" + cleanPhone.substring(1, 10));
    }
    if (cleanPhone.match(phoneNumInter)) {
      return (cleanPhone = "0" + cleanPhone.substring(3, 12));
    }
  }

  /**
   * Valide un objet "Person" (valide l'ensemble des opérations précédentes)
   * @param _person
   * @returns bool true si tout ok
   */
  isValide(_person) {
    if (
      !this.email(_person) ||
      !this.name(_person.lastname) ||
      !this.name(_person.firstname) ||
      !this.phoneNumber(_person)
    ) {
      return false;
    }
    return true;
  }
}

module.exports = StringCheck;
