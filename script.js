const input = document.getElementById("input");
const addTask = document.getElementById("button");
const list = document.getElementById("list");

let todos = [];

addTask.addEventListener("click", addTaskHandler);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTaskHandler();
    }
});

function addTaskHandler() {
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    todos.push(task);
    input.value = "";
    renderTodo();
}

function createTodo(item, index) {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.innerText = item;

    const editBtn = document.createElement("button");
    editBtn.innerText = "EDIT";
    editBtn.addEventListener("click", () => editItem(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.addEventListener("click", () => deleteItem(index));

    li.appendChild(text);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    return li;
}

function deleteItem(index) {
    todos.splice(index, 1);
    renderTodo();
}

function editItem(index) {
    const newTask = prompt("Enter new task:", todos[index]);

    if (newTask !== null && newTask.trim() !== "") {
        todos[index] = newTask.trim();
        renderTodo();
    }
}

function renderTodo() {
    list.innerHTML = "";

    todos.forEach((item, index) => {
        list.appendChild(createTodo(item, index));
    });
}