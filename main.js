function displayOutput(){
  return $("#displayoutput").val()
}

var prior = 0;

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
                }
              }
