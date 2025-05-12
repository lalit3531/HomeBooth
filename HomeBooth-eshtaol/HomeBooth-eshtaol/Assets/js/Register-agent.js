const registerBtn = document.querySelector(".register-btn");
const containerDiv = document.querySelector(".main-container-div");

function registerAgent() {
  console.log(containerDiv.children);
  while (containerDiv.firstChild) {
    containerDiv.firstChild.remove();
  }
  displayRegisterForm();
}

function displayRegisterForm() {
  const cardDiv = document.createElement("div");
  cardDiv.className =
    "card col-md-7 border-0 shadow p-3 mb-5 bg-white rounded mx-auto";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body ml-4 mr-4";

  const h4Title = document.createElement("h4");
  h4Title.className = "card-title mt-2 mb-5";
  h4Title.textContent = "Sign Up";

  const formDiv = document.createElement("form");

  // name input form
  const nameInputDiv = document.createElement("div");
  nameInputDiv.className = "mb-3 name-input-div";

  const nameLabel = document.createElement("label");
  nameLabel.className = "form-label";
  nameLabel.textContent = "First Name";

  const nameInput = document.createElement("input");
  nameInput.className = "form-control";
  nameInput.pattern = /[A-Z]/;
  nameInput.placeholder = "First Name...";

  const nameLabel1 = document.createElement("label");
  nameLabel1.className = "form-label";
  nameLabel1.textContent = "Last Name";

  const nameInput1 = document.createElement("input");
  nameInput1.className = "form-control";
  nameInput1.placeholder = "Last Name...";

  // email input form
  const emailInputDiv = document.createElement("div");
  emailInputDiv.className = "mb-3 email-input-div";

  const emailLabel = document.createElement("label");
  emailLabel.className = "form-label";
  emailLabel.textContent = "Email Address";

  const emailInput = document.createElement("input");
  emailInput.className = "form-control";
  emailInput.type = "email";
  emailInput.placeholder = "Email...";

  // password input form
  const passwordInputDiv = document.createElement("div");
  passwordInputDiv.className = "mb-3 password-input-div";

  const passwordLabel = document.createElement("label");
  passwordLabel.className = "form-label";
  passwordLabel.textContent = "Password";

  const passwordInput = document.createElement("input");
  passwordInput.className = "form-control";
  passwordInput.placeholder = "Repeat Password...";
  passwordInput.type = "password";

  const passwordLabel2 = document.createElement("label");
  passwordLabel2.className = "form-label";
  passwordLabel2.textContent = "Repeat Password";

  const passwordInput2 = document.createElement("input");
  passwordInput2.className = "form-control";
  passwordInput2.placeholder = "Repeat Password...";
  passwordInput2.type = "password";

  // office Address input form
  const officeAddressInputDiv = document.createElement("div");
  officeAddressInputDiv.className = "mb-3 officeAddress-input-div";

  const officeAddressLabel = document.createElement("label");
  officeAddressLabel.className = "form-label";
  officeAddressLabel.textContent = "Office Address";

  const officeAddressInput = document.createElement("input");
  officeAddressInput.className = "form-control";
  officeAddressInput.placeholder = "1st floor, friendship building, bole...";

  // Mobile Number input form
  const mobileNumberInputDiv = document.createElement("div");
  mobileNumberInputDiv.className = "mb-3 mobileNumber-input-div";

  const mobileNumberLabel = document.createElement("label");
  mobileNumberLabel.className = "form-label";
  mobileNumberLabel.textContent = "Mobile Number";

  const mobileNumberInput = document.createElement("input");
  mobileNumberInput.className = "form-control";
  mobileNumberInput.placeholder = "+251 91 122 3344...";

  // Office Phone Number input form
  const officePhoneNumberInputDiv = document.createElement("div");
  officePhoneNumberInputDiv.className = "mb-3 officeNumber-input-div";

  const officePhoneNumberLabel = document.createElement("label");
  officePhoneNumberLabel.className = "form-label";
  officePhoneNumberLabel.textContent = "Office Phone Number";

  const officePhoneNumberInput = document.createElement("input");
  officePhoneNumberInput.className = "form-control";
  officePhoneNumberInput.placeholder = "+251 11 551 0000...";

  // Facebook uri input form
  const facebookURIInputDiv = document.createElement("div");
  facebookURIInputDiv.className = "mb-3 facebookLink-input-div";

  const facebookURILabel = document.createElement("label");
  facebookURILabel.className = "form-label";
  facebookURILabel.textContent = "Facebook URI";

  const facebookURIInput = document.createElement("input");
  facebookURIInput.className = "form-control";
  facebookURIInput.placeholder = "https://www.facebook.com/username...";

  // Telegram uri input form
  const telegramURIInputDiv = document.createElement("div");
  telegramURIInputDiv.className = "mb-3 telegramLink-input-div";

  const telegramURILabel = document.createElement("label");
  telegramURILabel.className = "form-label";
  telegramURILabel.textContent = "Telegram URI";

  const telegramURIInput = document.createElement("input");
  telegramURIInput.className = "form-control";
  telegramURIInput.placeholder = "https://t.me/username...";

  // Photo form
  const ProfilePhotoDiv = document.createElement("div");
  ProfilePhotoDiv.className = "mb-3 profilePhoto-input-div";

  const profilePhotoLabel = document.createElement("label");
  profilePhotoLabel.className = "form-label";
  profilePhotoLabel.textContent = "Profile Photo URI";

  const profilePhotoInput = document.createElement("input");
  profilePhotoInput.className = "form-control";
  profilePhotoInput.placeholder = "./Assets/img/123.jpg...";

  // Register cancel Button form
  const RegisterCancelButtonDiv = document.createElement("div");
  RegisterCancelButtonDiv.className = "container-fluid";

  const registerButton = document.createElement("button");
  registerButton.className = "btn btn-primary btn-lg mr-1";
  registerButton.type = "Submit";
  registerButton.textContent = "Register";

  const cancelButton = document.createElement("button");
  cancelButton.className = "btn btn-dark btn-lg ml-1";
  cancelButton.textContent = "Cancel";

  cardBody.appendChild(h4Title);

  nameInputDiv.appendChild(nameLabel);
  nameInputDiv.appendChild(nameInput);
  nameInputDiv.appendChild(nameLabel1);
  nameInputDiv.appendChild(nameInput1);
  formDiv.appendChild(nameInputDiv);

  emailInputDiv.appendChild(emailLabel);
  emailInputDiv.appendChild(emailInput);
  formDiv.appendChild(emailInputDiv);

  passwordInputDiv.appendChild(passwordLabel);
  passwordInputDiv.appendChild(passwordInput);
  passwordInputDiv.appendChild(passwordLabel2);
  passwordInputDiv.appendChild(passwordInput2);
  formDiv.appendChild(passwordInputDiv);

  officeAddressInputDiv.appendChild(officeAddressLabel);
  officeAddressInputDiv.appendChild(officeAddressInput);
  formDiv.appendChild(officeAddressInputDiv);

  mobileNumberInputDiv.appendChild(mobileNumberLabel);
  mobileNumberInputDiv.appendChild(mobileNumberInput);
  formDiv.appendChild(mobileNumberInputDiv);

  officePhoneNumberInputDiv.appendChild(officePhoneNumberLabel);
  officePhoneNumberInputDiv.appendChild(officePhoneNumberInput);
  formDiv.appendChild(officePhoneNumberInputDiv);

  facebookURIInputDiv.appendChild(facebookURILabel);
  facebookURIInputDiv.appendChild(facebookURIInput);
  formDiv.appendChild(facebookURIInputDiv);

  telegramURIInputDiv.appendChild(telegramURILabel);
  telegramURIInputDiv.appendChild(telegramURIInput);
  formDiv.appendChild(telegramURIInputDiv);

  ProfilePhotoDiv.appendChild(profilePhotoLabel);
  ProfilePhotoDiv.appendChild(profilePhotoInput);
  formDiv.appendChild(ProfilePhotoDiv);

  RegisterCancelButtonDiv.appendChild(registerButton);
  RegisterCancelButtonDiv.appendChild(cancelButton);
  formDiv.appendChild(RegisterCancelButtonDiv);

  cardBody.appendChild(formDiv);
  cardDiv.appendChild(cardBody);
  containerDiv.appendChild(cardDiv);

  let DB;

  let HomeGetDB = window.indexedDB.open("HomeGetDB", 1);
  HomeGetDB.onsuccess = function (event) {
    //code here
    console.log("database opened successfully");
    DB = HomeGetDB.result;
  };
  HomeGetDB.onerror = function (event) {
    // code here
    console.log("Error occurred");
  };

  function addNewAgent(e) {
    e.preventDefault(); //the rest of code
    // Add to DB
    let newAgent = {
      // validation
      AgentName: nameInput.value + " " + nameInput1.value,
      AgentEmail: emailInput.value,
      AgentMobileNUmber: mobileNumberInput.value,
      AgentOfficeAddress: officeAddressInput.value,
      AgentOfficePhoneNumber: officePhoneNumberInput.value,
      AgentFacebookLink: facebookURIInput.value,
      AgentTelegramLink: telegramURIInput.value,
      SubscriptionType: "Free",
      AgentReviewPoints: 0,
      AgentReviewerNumber: 0,
      AgentProfilePhoto: profilePhotoInput.value,
      AgentPassword: passwordInput.value,
      oneLineDescription: "Broker",
    };

    let transaction = DB.transaction(["Agents"], "readwrite");
    let objectStore = transaction.objectStore("Agents");
    let request = objectStore.add(newAgent);
    request.onsuccess = () => {
      console.log(1223);
    };
    transaction.oncomplete = () => {
      console.log("New appointment added");
      // displayTaskList();
    };
    transaction.onerror = () => {
      console.log("There was an error, try again!");
    };
    location.reload();
  }

  registerButton.addEventListener("click", addNewAgent);
  cancelButton.addEventListener("click", location.reload);
}

registerBtn.addEventListener("click", registerAgent);
