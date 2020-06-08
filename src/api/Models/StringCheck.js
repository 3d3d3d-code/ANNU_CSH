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
    if (!_person.email.match(mailFormat)) {
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
    if (
      !_person.phone.match(phoneNumNat) 
      &&      !_person.phone.match(phoneNumInter)
    ) {
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
    if (_person.phone.match(phoneNumNat)) {
      return (_person.phone = "+33" + _person.phone.substring(1, 10));
    }
    if (_person.phone.match(phoneNumInter)) {
      return (_person.phone = "0" + _person.phone.substring(3, 12));
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
