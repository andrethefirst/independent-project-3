// Business Logic 

function beepBoop(inputNumber) {
  let numberedArray = [];
  for(let i = 0; i <= inputNumber; i++) {
    i = i.toString();
    if(i.includes(3)) {
      numberedArray.push(" Won't you be my neighbor?")
    }else if(i.includes(2)) {
      numberedArray.push(" Boop!")
    }else if(i.includes(1)){
      numberedArray.push(" Beep!")
    }else {
      numberedArray.push(" " +i); 
    }
  }
  return numberedArray;
}

// UI Logic

$(document).ready(function() {
  $("form#robotMan").submit(function(event){
    event.preventDefault();
    let final = $("#inputNumber").val();
    const numberReturn = beepBoop(final);

    $("#finalresult").text(numberReturn);
    $("#result").show();
    
  })
})