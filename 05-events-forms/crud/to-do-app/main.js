const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea");
const msg = document.getElementById("msg");
const tasks = document.getElementById("tasks");
const add = document.getElementById("add");


let data = [];


// Add event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  if (formValidation()) {
    acceptData(); // If validation is successful, accept form data
    renderTasks(); // Render tasks

    hideModalFunc();
    resetForm();
  }
});

function hideModalFunc() {
  const modal = bootstrap.Modal.getInstance(form);
  modal.hide();
}

/* textInput.addEventListener("keyup", (e) => {
  console.log("change input")
  if (e.key != "Enter") {
    formValidation()
  }
})
 */

// Define form validation function
let formValidation = () => {
  if (textInput.value === "") { // If text input field is empty
    console.log("failure");
    msg.innerHTML = "Task cannot be blank"; // Display error message
    return false; // Validation fails
  } else { // If text input field is not empty
    console.log("success");
    msg.innerHTML = ""; // Clear error message
    return true; // Validation succeeds
  }
};



let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  renderTasks();
};

let renderTasks = () => {
  tasks.innerHTML = data.map((task, index) =>
  (`<div id=${index}>
          <span class="fw-bold">${task.text}</span>
          <span class="small text-secondary">${task.date}</span>
          <p>${task.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);renderTasks()" class="fas fa-trash-alt"></i>
          </span>
      </div>
    `)
  ).join("");
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);

};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  deleteTask(e);
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || []
  console.log(data);
  renderTasks();
})();
