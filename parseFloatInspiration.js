var ger = "";
var decimal = ["."];
var decimalSplice = "";
var decimalPosition = "";
var maxNumberSize = "";
var prior = 0;

function displayOutput(){
  ger = eval($("#displayoutput").val());
  // for(var i = 0; i < ger.length, i++){
  //   if ($.inArray(ger.trim().charAt(i), decimal) > -1)
  //     //splice out the number from 0 to (i+8) into a new array, reduce to a string, then parseFloat
  //
  return parseFloat(ger);
  //   });
// });
});

function press(buttonValue){
  switch (buttonValue){
    case "+":
      prior += +$("#displayoutput").val();
      $("#displayoutput").val(current += buttonValue);
      break;
      case "-":
        break;
        case "*":
          break;
          case "/":
            break;
            case "C":
              break;
              case "+/-":
                break;
                case "=":
                  prior += +$("#displayoutput").val();
                  $("#displayoutput").val();
                  prior = 0;
                  break;
                  default:
                    current = $("#displayoutput").val();
                    $("#displayoutput").val(current += buttonValue);
                    console.log($("#displayoutput").val(current += buttonValue));
                  }
                }
