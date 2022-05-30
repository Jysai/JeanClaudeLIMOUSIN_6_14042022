const modal = document.getElementById("bground");

function displayModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const formReset = document.querySelector(".reserve");

const BtnSubmit = document.getElementById("btn-submit");

const regName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Fonction avec plusieurs conditions qui permet de vérifier si le champ prénom est rempli correctement
function validateFirstName() {
  const firstNameError = document.getElementById("firstNameErrorMsg");
  if (!firstName.value) {
    firstNameError.innerHTML = "Votre prénom est requis";
    firstNameError.style.display = "block";
    firstName.style.border = "1px solid red";
    return false;
  } else if (firstName.value.trim().length < 2) {
    firstNameError.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    firstNameError.style.display = "block";
    firstName.style.border = "1px solid red";
    return false;
  } else if (!regName.test(firstName.value)) {
    firstNameError.innerHTML =
      "Le champs ne doit pas comporter de chiffres ni de caractères spéciaux";
    firstNameError.style.display = "block";
    firstName.style.border = "1px solid red";
    return false;
  } else {
    firstNameError.style.display = "none";
    firstName.style.border = "1px solid green";
    return true;
  }
}

// Fonction avec plusieurs conditions qui permet de vérifier si le champ nom est rempli correctement
function validateLastName() {
  const lastNameError = document.getElementById("lastNameErrorMsg");
  if (!lastName.value) {
    lastNameError.innerHTML = "Votre nom est requis";
    lastNameError.style.display = "block";
    lastName.style.border = "1px solid red";
    return false;
  } else if (lastName.value.trim().length < 2) {
    lastNameError.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    lastNameError.style.display = "block";
    lastName.style.border = "1px solid red";
    return false;
  } else if (!regName.test(lastName.value)) {
    lastNameError.innerHTML =
      "Le champs ne doit pas comporter de chiffres ni de caractères spéciaux";
    lastNameError.style.display = "block";
    lastName.style.border = "1px solid red";
    return false;
  } else {
    lastNameError.style.display = "none";
    lastName.style.border = "1px solid green";
    return true;
  }
}

// Fonction avec plusieurs conditions qui permet de vérifier si le champ Email est rempli correctement
function validateEmail() {
  const emailErrorMsg = document.getElementById("emailErrorMsg");
  if (!email.value) {
    emailErrorMsg.innerHTML = "Votre email est requis";
    emailErrorMsg.style.display = "block";
    email.style.border = "1px solid red";
    return false;
  } else if (!regEmail.test(email.value)) {
    emailErrorMsg.innerHTML = "Format de l'email non autorisé";
    emailErrorMsg.style.display = "block";
    email.style.border = "1px solid red";
    return false;
  } else {
    emailErrorMsg.style.display = "none";
    email.style.border = "1px solid green";
    return true;
  }
}

function validateMessage() {
  const messageErrorMsg = document.getElementById("messageErrorMsg");
  if (!message.value) {
    messageErrorMsg.innerHTML = "Message requis";
    messageErrorMsg.style.display = "block";
    message.style.border = "1px solid red";
    return false;
  } else if (message.value.trim().length < 2) {
    messageErrorMsg.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    messageErrorMsg.style.display = "block";
    message.style.border = "1px solid red";
    return false;
  } else {
    messageErrorMsg.style.display = "none";
    message.style.border = "1px solid green";
    return true;
  }
}

BtnSubmit.addEventListener("click", function (ev) {
  ev.preventDefault();

  let validFirstname = validateFirstName();
  let validLastname = validateLastName();
  let validEmail = validateEmail();
  let validMessage = validateMessage();

  if (validFirstname && validLastname && validEmail && validMessage) {
    console.log("Prénom: " + firstName.value);
    console.log("Nom: " + lastName.value);
    console.log("Email: " + email.value);
    console.log("Message: " + message.value);


    modal.style.display = "none";
    formReset.reset();
    firstName.removeAttribute("style");
    lastName.removeAttribute("style");
    email.removeAttribute("style");
    message.removeAttribute("style");
  
  }
});
