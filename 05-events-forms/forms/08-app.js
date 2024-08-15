window.addEventListener("DOMContentLoaded", function () {
  //Capturamos los elementos del formulario
  const email = document.querySelector("#email");
  const formulario = document.querySelector("#form");
  const zipCode = document.querySelector("#zip");

  // Main validation function

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    evento.stopPropagation();

    let valid = true;

    if (!isValidEmail(email)) {
      valid = false;
    }

    if (!isValidZip(zipCode)) {
      valid = false;
    }

    // In case we didn't find any invalid field
    if (valid) {
      this.submit();
    }
  });

  ///////////////////////////////////////
  // Custom validation fuctions
  //////////////////////////////////////

  function isValidZip(zip) {
    const zipRegex = /^[0-5][0-9]{4}$/;
    const zipValue = zip.value.trim();

    if (zipValue.match(zipRegex)) {
      markFieldAsValid(zip);
      return true;
    } else {
      markFieldAsNotValid(zip, "Write a valid ZIP code of 5 numbers");
      return false;
    }
  }

  function isValidEmail(email) {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValue = email.value.trim();

    if (emailRegex.test(emailValue)) {
      console.log("valid email");
      markFieldAsValid(email);
      return true;
    } else {
      console.log("invalid email");
      markFieldAsNotValid(email, "Write a valid e-mail address");
      return false;
    }
  }

  ////////////////////////////////////////////
  // Auxiliary Functions to set a valid or not-valid field
  ///////////////////////////////////////////

  // This functions set a field as not-valid and adds the error-message
  function markFieldAsNotValid(
    element,
    message = "Invalid field. Insert a valid value."
  ) {
    // If we have a custom message we show it. In other case we just show the error-message present in the HTML
    if (message) {
      element.parentNode.querySelector(".error-message").textContent = message;
    }
    // Adding the class that shows the error-message and adds the red border (css)
    element.parentNode.classList.add("is-not-valid-field");
  }

  // This function set a field as valid and hide the error field
  function markFieldAsValid(element) {
    element.parentNode.classList.remove("is-not-valid-field");
  }
});
