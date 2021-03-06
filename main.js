 document.addEventListener("DOMContentLoaded", function() {

document.addEventListener('click', function (){
        $('.clickable').click(function(){
                $("input:text").val(this.id);
   console.log(this.id) 
       /*    var currentValue = this.id.val;                
   var theDisplay = document.getElementById('displayoutput').innerHTML=clickedId;
        theDisplay.appendChild(this.Id);
          //    (press(clickedId)); */
  
});
       });

function displayOutput(){
  return $('#displayoutput').val();
}

var previousResult;
var nextOperation;
var previousOperation;

function add(a, b){
  return ((a * 100000000000000) + (b * 100000000000000))/100000000000000;
  previousOperation = "add";
}

function subtract (a, b){
  return ((a * 100000000000000) - (b * 100000000000000))/100000000000000;
  previousOperation = "subtract";
}

function multiply(a, b){
  return a * b;
  previousOperation = "multiply";
}

function divide(a, b){
  return a/b;
  previousOperation = "divide";
}

function inverse(a, b){
 // if(previousOperation === "divide"){
 //   return ($('#displayoutput').val(previousResult) * -1)/b;
 // } else if(previousOperation === "multiply") {
 //   return $('#displayoutput').val() * -1 * b;
 // } else {
    return -b;
  }
//}

function clear(a, b){
  return '';
}

function currentValue(string){
  return $('#displayoutput').val() * 1;
}

function calculate(){
  if(nextOperation){
    previousResult = nextOperation(previousResult, currentValue());
  } else {
    previousResult = currentValue();
  }
}

function press(buttonValue){
  switch (buttonValue) {
    case '+':
      calculate();
      nextOperation = add;
      $('#displayoutput').val('');
      break;
    case '-':
      calculate();
      nextOperation = subtract;
      $('#displayoutput').val('');

      break;
    case '*':
      calculate();
      nextOperation = multiply;
      $('#displayoutput').val('');
      break;
    case '/':
      calculate();
      nextOperation = divide;
      $('#displayoutput').val('');
      break;
    case 'C':
      nextOperation = clear;
      $('#displayoutput').val('');
      break;
    case '=':
      calculate();
      $('#displayoutput').val(previousResult);
      break;
    case '±':
      // calculate();
      nextOperation = inverse;
      $('#displayoutput').val('');
      break;
    default:
      var current = $('#displayoutput').val();
      $('#displayoutput').val(current + buttonValue);
  }
}
});
