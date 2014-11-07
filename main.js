function displayOutput(){
return $("#displayoutput").val()
}
function press(buttonValue){
  var current = $("#displayoutput").val();
  $("#displayoutput").val(current +=buttonValue)

}
