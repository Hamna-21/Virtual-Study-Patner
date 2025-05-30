// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

// Functions
function addTodo(event) {
    event.preventDefault();

    // Create todo container
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create list item
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Save to local storage
    saveLocalTodos(todoInput.value);

    // Complete button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);

    // Clear input field
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // Delete todo
    if (item.classList.contains("trash-btn") || item.parentElement.classList.contains("trash-btn")) {
        const todo = item.closest(".todo");
        todo.classList.add("slide");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", () => todo.remove());
    }

    // Mark complete
    if (item.classList.contains("complete-btn") || item.parentElement.classList.contains("complete-btn")) {
        const todo = item.closest(".todo");
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        if (todo.nodeType === 1) { // Check for element nodes
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    todo.style.display = todo.classList.contains("completed") ? "flex" : "none";
                    break;
                case "incomplete":
                    todo.style.display = !todo.classList.contains("completed") ? "flex" : "none";
                    break;
            }
        }
    });
}

function saveLocalTodos(todo) {
    let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodos() {
    let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
document.addEventListener('DOMContentLoaded', function() {
    // Get the current date
    const currentDate = new Date();
    
    // Format the date to YYYY-MM-DD (required format for input type="date")
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    // Set the current date in the input field
    document.getElementById('date-picker').value = formattedDate;
});
let timer;
let totalTime = 0;
let timeLeft = 0;

// Start Timer
function startTimer() {
    if (totalTime === 0) {
        openTimerPopup();
        return;
    }
    document.getElementById("start").style.display = "none";
    document.getElementById("pause").style.display = "inline-block";

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            alert("Time's up!");
            resetTimer();
        }
    }, 1000);
}

// Pause Timer
function pauseTimer() {
    clearInterval(timer);
    document.getElementById("pause").style.display = "none";
    document.getElementById("start").style.display = "inline-block";
}

// Reset Timer
function resetTimer() {
    clearInterval(timer);
    totalTime = 0;
    timeLeft = 0;
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("pause").style.display = "none";
    updateTimerDisplay();
}

// Set Timer
function setTimer() {
    const minutes = document.getElementById("minutes").value;
    if (minutes && minutes > 0) {
        totalTime = parseInt(minutes) * 60;
        timeLeft = totalTime;
        updateTimerDisplay();
        closePopup("timer-popup-modal");
    } else {
        alert("Please enter a valid number of minutes.");
    }
}

// Update Timer Display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("time-display").innerText =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Open Popup
function openPopup(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Close Popup
function closePopup(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Update Profile
function updateProfile() {
    const newLocation = document.getElementById("location-input").value;
    const newBio = document.getElementById("bio-input").value;

    // Update fields if new values are provided
    if (newLocation) {
        document.getElementById("location").textContent = newLocation;
    }
    if (newBio) {
        document.getElementById("user-bio").textContent = newBio;
    }

    // Close the modal after updating the profile
    closePopup("profile-popup-modal");
}

// Open Timer Popup
function openTimerPopup() {
    openPopup("timer-popup-modal");
}

// Open Profile Popup
function openProfilePopup() {
    openPopup("profile-popup-modal");
}

// Close Timer Popup
function closeTimerPopup() {
    closePopup("timer-popup-modal");
}

// Close Profile Popup
function closeProfilePopup() {
    closePopup("profile-popup-modal");
}
function addQuiz() {
    const quizInput = document.getElementById('quiz-input');
    const quizList = document.getElementById('quiz-list');
    if (quizInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = quizInput.value;
        const deleteButton = createDeleteButton(); // Add delete button
        li.appendChild(deleteButton);
        quizList.appendChild(li);
        quizInput.value = ""; // Clear input
    }
}

function addAssignment() {
    const assignmentInput = document.getElementById('assignment-input');
    const assignmentList = document.getElementById('assignment-list');
    if (assignmentInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = assignmentInput.value;
        const deleteButton = createDeleteButton(); // Add delete button
        li.appendChild(deleteButton);
        assignmentList.appendChild(li);
        assignmentInput.value = ""; // Clear input
    }
}

function addOther() {
    const otherInput = document.getElementById('other-input');
    const otherList = document.getElementById('other-list');
    if (otherInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = otherInput.value;
        const deleteButton = createDeleteButton(); // Add delete button
        li.appendChild(deleteButton);
        otherList.appendChild(li);
        otherInput.value = ""; // Clear input
    }
}
function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; // Add trash icon
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function () {
        this.parentElement.remove(); // Remove the task
    };
    return deleteButton;
}


