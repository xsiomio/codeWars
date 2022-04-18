function validatePIN (pin) {

let pinNum = Number(pin);
 if (Number.isInteger(pinNum) && (pinNum >= 0) && (pinNum.length == 4 || pinNum.length == 6)){
        return true;
     } else {
         return false
     }

    // if ( (Number(pin) == pin)
    // &&  (pin >= 0) 
    // &&  (Number.isInteger(Number(pin)) == true)
    // && (pin.length == 4  || pin.length == 6)){
    //     return true;
    // } else {
    //     return false;
    // }
  }