// Function to handle drag start event
function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

// Function to handle drag over event
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

// Function to handle drop event
function handleDrop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const draggableElement = document.getElementById(id);
  const dropzone = e.target;
  dropzone.appendChild(draggableElement);
}

// Get all draggable items
const draggables = document.querySelectorAll(".draggable");
draggables.forEach(draggable => {
  draggable.addEventListener("dragstart", handleDragStart);
});

// Get the dropzones
const dropzones = document.querySelectorAll(".box");
dropzones.forEach(dropzone => {
  dropzone.addEventListener("dragover", handleDragOver);
  dropzone.addEventListener("drop", handleDrop);
});