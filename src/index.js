const button = document.querySelector(".check-btn");
const dob = document.querySelector(".input-dob");
const luckyNo = document.querySelector(".input-lucky-no");
const output = document.querySelector(".output-div");


//click handler
let clickHandler = () => {
  if (luckyNo.value !== "" && dob.value !== "") {
    //removing hyphen from the string
    const dobString = dob.value.replaceAll("-", "");

    //calculating sum of the digits of dob
    let dobSum = 0;
    for (let a = 0; a < dobString.length; a++) {
      dobSum = dobSum + Number(dobString.charAt(a));
    }

    //checking whether sum of the digits of dob is divisible by lucky number
    if (dobSum % luckyNo.value === 0) {
      output.innerText = `${luckyNo.value} is a lucky number ^_^`;
    } else {
      output.innerText = `Sorry, ${luckyNo.value} is not so lucky for you`;
    }
  } else {
    alert('Enter both the values to get result');
  }
}

//adding clcik event to button
button.addEventListener("click", clickHandler);