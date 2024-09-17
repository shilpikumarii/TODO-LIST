function addTask() {
    let taskInput = document.getElementById("newTaskInput");
    let newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", toggleComplete);
    newTask.appendChild(checkbox); 
let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTask);
    newTask.appendChild(editButton);
let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);
    newTask.appendChild(deleteButton);
document.getElementById("taskList").appendChild(newTask);
    taskInput.value = "";
}

function toggleComplete(event) {
    event.target.parentElement.classList.toggle("completed");
}

function editTask() { 
   
}

function deleteTask(event) {
    let taskItem = event.target.parentElement;
    taskItem.remove();
}
