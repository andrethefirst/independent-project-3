// Utility Logic
  function noInputtedWord() {
    for (let i=0; i < arguments.length; i++) {
      console.log(arguments[i]);
      if (arguments[i].trim().length === 0) {
        return true;
      }
    }
    return false;
  }

// Business Logic 

function beepBoop(inputNumber) {
  let numberedArray = [];
  for(let i = 0; i <= inputNumber; i++) {
    i = i.toString();
    if(i.includes(3)) {
      numberedArray.push("Won't you be my neighbor?")
    }else if(i.includes(2)) {
      numberedArray.push("Boop!")
    }else if(i.includes(1)){
      numberedArray.push("Beep!")
    }else {
      numberedArray.push(i); 
    }
  }
  return numberedArray;
}




// UI Logic