var a = document.querySelector("#full_name");
var b = document.querySelector("#email_address");
var d = document.querySelector("#present_address");
// var e = document.querySelector("#card_number");
var f = document.querySelector("#phone_number");
var registerBtn = document.querySelector("#regbtn");
var cardno = /^(?:1[0][0-9]{13})$/;
var emailtest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phonenumber = /^\d{10}$/;
function validform() {
  if (a.value === "") {
    alert("Please Enter Your full name");
    return;
  } else if (b.value == null || b.value === "") {
    alert("Please Enter Your Email Address");
    return false;
    //   } else if (c.value == null || c.value == "") {
    //     alert("Please Enter Your Username");
    //     return false;
    //   } else if (d.value == null || d.value == "") {
    alert("Please Enter Your Permanent Address");
    return false;
  // } else if (e.value == null || e.value == "") {
  //   alert("Please Enter Your card Number");
  //   return false;
  } else if (f.value == null || f.value == "") {
    alert("Please Enter Your phone Number");
    return false;
  // } else if (e.value.match(cardno)) {
  //   alert("invalid card Number");
  //   return true;
  } else if (b.value.match(emailtest)) {
    // alert("You have entered an invalid email address!");
    return true;
  } else if (f.value.match(phonenumber)) {
    alert("please use 0912345678 format");
    return true;
  }
}

function registering() {
  if (validform() == true) {
    addNewUser();
  }
}

registerBtn.addEventListener("click", registering);