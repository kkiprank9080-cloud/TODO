
const input = document.getElementById("input");
const addTask = document.getElementById("button");
const list = document.getElementById("list");

let Todos = []; 

addTask.addEventListener("click", addtask);

function addtask() {
    const task = input.value.trim();
    if (task === "") return; 

    Todos.push(task); 
    input.value = ""; 
    rendertodo();    
}

function createtodo(item, index) {
    const li = document.createElement("li");
    li.innerText = item;

  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.addEventListener("click", () => {
        deleteItem(index);
    });

  
    const editBtn = document.createElement("button");
    editBtn.innerText = "EDIT";
    editBtn.addEventListener("click", () => {
        editItem(index);
    });

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    return li;
}

function deleteItem(index) {
    Todos.splice(index, 1);
    rendertodo();          
}

function editItem(index) {
    const newTask = prompt("Enter new task:", Todos[index]);
    if (newTask && newTask.trim() !== "") {
        Todos[index] = newTask.trim();
        rendertodo();
    }
}

function rendertodo() {
    list.innerHTML = ""; 
    Todos.forEach((item, index) => {
        const li = createtodo(item, index);
        list.appendChild(li); 
    });
const input = document.getElementById("input");
const addTask = document.getElementById("button");
const list = document.getElementById("list");

let Todos = []; 

addTask.addEventListener("click", addtask);

function addtask() {
    const task = input.value.trim(); 
    if (task === "") return; 

    Todos.push(task); 
    input.value = ""; 
    rendertodo();    
}

function createtodo(item, index) {
    const li = document.createElement("li");
    li.innerText = item;

  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.addEventListener("click", () => {
        deleteItem(index);
    });

  
    const editBtn = document.createElement("button");
    editBtn.innerText = "EDIT";
    editBtn.addEventListener("click", () => {
        editItem(index);
    });

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    return li;
}

function deleteItem(index) {
    Todos.splice(index, 1);
    rendertodo();          
}

function editItem(index) {
    const newTask = prompt("Enter new task:", Todos[index]);
    if (newTask && newTask.trim() !== "") {
        Todos[index] = newTask.trim();
        rendertodo();
    }
}

function rendertodo() {
    list.innerHTML = ""; 
    Todos.forEach((item, index) => {
        const li = createtodo(item, index);
        list.appendChild(li); 
    });
}
