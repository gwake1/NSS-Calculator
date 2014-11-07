function displayOutput(){
return $("#displayoutput").val()
}
function press(buttonValue){
  if(buttonValue === "+" || buttonValue ==="-" || buttonValue ==="*" || buttonValue ==="/" ){

  } else {
    var current = $("#displayoutput").val();
    $("#displayoutput").val(current +=buttonValue)
  }
}
