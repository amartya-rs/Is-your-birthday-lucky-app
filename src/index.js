var button = document.querySelector(".check-btn");
var dob = document.querySelector(".input-dob");
var luckyNo = document.querySelector(".input-lucky-no");
var output = document.querySelector(".output-div");

//adding clcik event to button
button.addEventListener("click", clickHandler);

//click handler
function clickHandler() {
  if (luckyNo.value !== "" && dob.value !== "") {
    //removing hyphen from the string
    var dobString = dob.value.replaceAll("-", "");

    //calculating sum of the digits of dob
    var dobSum = 0;
    for (var a = 0; a < dobString.length; a++) {
      dobSum = dobSum + Number(dobString.charAt(a));
    }

    //checking whether sum of the digits of dob is divisible by lucky number
    if (dobSum % luckyNo.value === 0) {
      output.innerText = luckyNo.value + " is a lucky number ^_^";
    } else {
      output.innerText = "Sorry," + luckyNo.value + " is not so lucky for you";
    }
  } else {
    alert("Enter both the values to get result");
  }
}
