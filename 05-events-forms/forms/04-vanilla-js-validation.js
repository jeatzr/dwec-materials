// Is a good practice that all the code is inside 'DOMContentLoaded' or 'load'
document.addEventListener("DOMContentLoaded", function () {
  // Capture all elements
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Create the event handler to the form 'submit'
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting automatically
    event.stopPropagation(); // Prevents the event from bubbling up to parent elements

    // Calling the main validation function
    if (validateForm()) {
      console.log("All fields are ok, we can proceed");
      form.submit(); // Forcing the submission
    } else {
      console.log("There is some not-valid field. The user should ckeck them.");
    }
  });

  // This function is in charge of validating all fields and
  // return a boolean: true in case all fields are ok, false otherwise
  function validateForm() {
    // This flag is initialized as true.
    // in case we find an error in a field this variable become false.
    var isValid = true;

    // Custom validation logic
    // Example custom validation just checking the logic
    if (name.value.trim().length < 2) {
      markFieldAsNotValid(name, "Input a name 2 or more characters long.");
      isValid = false;
    } else {
      markFieldAsValid(name);
    }

    // We can call custom functions that validate certain fields
    // also we can check different conditions and show different error messages
    if (email.value === "") {
      markFieldAsNotValid(email, "Email is required");
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      markFieldAsNotValid(email, "Please provide a valid email address.");
      isValid = false;
    } else {
      markFieldAsValid(email);
    }

    if (!isValidPassword(password.value)) {
      markFieldAsNotValid(password);
      isValid = false;
    } else {
      markFieldAsValid(password);
    }

    // after all field validations we return the isValid flag
    return isValid;
  }

  ///////////////////////////////////////
  // Custom validation fuctions
  //////////////////////////////////////

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(passwd) {
    return passwd.length >= 6;
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
