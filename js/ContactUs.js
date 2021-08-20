// Sebastian You
// Restaurant Site
// August, 2021

// This function retrieves all the user inputs
function retrieveInfo() {
  var inputs = getInputs();
  var beenHereBefore = getSwitch();
  var checkbox = getCheckbox();
  var beenHereOutput = beenHereBefore ? 
  "I have been here before" : "I have never been here before";
  var output = `
    All the inputs are valid!\n
    Name: ${inputs[0]}\n
    Email: ${inputs[1]}\n
    Password: ${inputs[2]}\n
    User Request: ${inputs[3]}\n
    Additional Info: ${inputs[4]}\n\n
    ${beenHereOutput}\n
    You may contact on ${checkbox}`
  console.log(output);
  alert(output);
  clearForm();
}

// This function retrieves text inputs and dropdown input
function getInputs() {
  var output = [];
  var form = document.querySelector(".contact_us-form");
  var inputs = Array.from(form.elements).slice(0, 5);
  inputs.forEach((x) => {
    output.push(x.value);
  })
  return output;
}

// This function returns true if the user
// has been to this restaurant, otherwise false
function getSwitch() {
  var r = document.getElementById('flexSwitchCheckDefault');
  if (r.checked) {
    return true;
  }
  return false;
}

// This function returns the user's availability
function getCheckbox() {
  var output = [];
  var c = Array.from(document.getElementsByClassName('form-check-input'));
  c.forEach((x) => {
    if (x.checked && x.id !== "flexSwitchCheckDefault") {
      output.push(x.value);
    }
  })
  return output;
}

// This function clears all the inputs
function clearForm() {
  var form = document.querySelector(".contact_us-form");
  for (let i=0; i<5; i++) {
    if (i === 3) {
      form.elements[i].value = "Catering";
      continue;
    }
    form.elements[i].value = '';
  }
  var c = document.getElementsByClassName('form-check-input');
  for (let i=0; i<c.length; i++) {
    c[i].checked = false;
  }
}