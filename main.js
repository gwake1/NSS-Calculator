function displayOutput(){
  return $('#displayoutput').val();
}

var previousResult;
var nextOperation;

function add(a, b){
  return ((a * 100000000000000) + (b * 100000000000000))/100000000000000
}

function subtract (a, b){
  return ((a * 100000000000000) - (b * 100000000000000))/100000000000000
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a/b;
}

function currentValue(string){
  return $('#displayoutput').val() * 1;
}

function calculate(){
  if(!!nextOperation){
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
      // handle C
      break;
    case '=':
      calculate();
      $('#displayoutput').val(previousResult);
      break;
    case '+/-':
      // handle +/-
      break;
    default:
      var current = $('#displayoutput').val();
      $('#displayoutput').val(current + buttonValue);
  }
}
