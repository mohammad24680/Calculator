var num1,
  reset = 0;
var operation = "";

function _onclick(para) {
  var x = document.getElementById("left_div");
  var y = document.getElementById("right_div");

  if (num1 == 0) {
    document.getElementById("out").innerHTML = "";
  }
  if (operation == "=" && num1 != 0) {
    // document.getElementById("out").innerHTML = "";
    document.getElementById("out").innerHTML = num1;
    reset = num1;
  }

  switch (para) {
    case "AC":
      if (num1 > 0) {
        document.getElementById("out").innerHTML = null;
        num1 = Number(
          document.getElementById("out").innerHTML
        );
      } else {
        num1 = 0;
      }
      break;
    case "0":
      document.getElementById("out").innerHTML += para;
      num1 = Number(
        document.getElementById("out").innerHTML
      );
      break;
    case "1":
      document.getElementById("out").innerHTML += para;
      num1 = Number(
        document.getElementById("out").innerHTML
      );
      break;
    case "2":
      document.getElementById("out").innerHTML += para;
      num1 = Number(
        document.getElementById("out").innerHTML
      );
      break;
    case "3":
      document.getElementById("out").innerHTML += para;
      num1 = Number(
        document.getElementById("out").innerHTML
      );
      break;
    case "4":
      document.getElementById("out").innerHTML += para;
      num1 = Number(
        document.getElementById("out").innerHTML
      );
      break;
    case "5":
      document.getElementById("out").innerHTML += para;
      num1 = Number(
        document.getElementById("out").innerHTML
      );
      break;
    case "6":
      document.getElementById("out").innerHTML += para;
      num1 = Number(
        document.getElementById("out").innerHTML
      );
      break;
    case "7":
      document.getElementById("out").innerHTML += para;
      num1 = Number(
        document.getElementById("out").innerHTML
      );
      break;
    case "8":
      document.getElementById("out").innerHTML += para;
      num1 = Number(
        document.getElementById("out").innerHTML
      );
      break;
    case "9":
      document.getElementById("out").innerHTML += para;
      num1 = Number(
        document.getElementById("out").innerHTML
      );
      break;
    case ".":
      if (num1 >= 0) {
        document.getElementById("out").innerHTML =
          document.getElementById("out").innerHTML += para;
      } else {
        document.getElementById("out").innerHTML =
          "0" + para;
      }
      break;
    case "+":
      switch (operation) {
        case "+":
          reset = reset + num1;
          num1 = 0;
          break;
        case "":
          reset = reset + num1;
      }
      operation = "+";
      document.getElementById("out").innerHTML = reset;
      num1 = 0;
      break;
    case "-":
      switch (operation) {
        case "-":
          reset = reset - num1;
          num1 = 0;
          break;
        case "":
          if (reset == 0) {
            reset = num1 - reset;
          } else if (num1 != 0) {
            reset = reset - num1;
          }
      }
      operation = "-";
      document.getElementById("out").innerHTML = reset;
      num1 = 0;
      break;
    case "/":
      switch (operation) {
        case "/":
          if (num1 != 0) {
            reset = reset / num1;
          }
          num1 = 0;
          break;
        case "":
          if (reset == 0) {
            reset = num1;
          } else if (num1 != 0) {
            reset = reset / num1;
          }
      }
      operation = "/";
      document.getElementById("out").innerHTML = reset;
      num1 = 0;
      break;
    case "*":
      switch (operation) {
        case "*":
          if (num1 != 0) {
            reset = reset * num1;
          }
          num1 = 0;
          break;
        case "":
          if (reset == 0) {
            reset = num1;
          } else if (num1 != 0) {
            reset = reset * num1;
          }
      }
      operation = "*";
      document.getElementById("out").innerHTML = reset;
      num1 = 0;
      break;
    case "=":
      switch (operation) {
        case "+":
          reset = reset + num1;
          num1 = 0;
          break;
        case "-":
          reset = reset - num1;
          num1 = 0;
          break;
        case "/":
          reset = reset / num1;
          num1 = 0;
          break;
        case "*":
          reset = reset * num1;
          num1 = 0;
      }
      operation = "=";
      document.getElementById("out").innerHTML = reset;
      num1 = 0;
      break;
  }
  console.log(para);
}
