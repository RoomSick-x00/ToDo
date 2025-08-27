let ctr = 1;

function deleteTodo(index) {
    const element = document.getElementById("todo-"+index);
    element.parentNode.removeChild(element);
}

function addTodo() {
    const inputel = document.querySelector("input");
    const task = inputel.value;

    const newTask = document.createElement("tr");
    newTask.setAttribute('id', "todo-"+ctr);
    newTask.innerHTML = '<th width="50%" id="todolist">'+task+'</th><th width="25%"><input type="checkbox" name="todo" value="todo" onclick="deleteTodo('+ctr+')"></th><th width="12.5%"><button onclick="deleteTodo('+ctr+')" id="deleteButton">Delete</button></th><th width="12.5%"><button onclick="editTodo('+ctr+')" id="updateButton">Update</button></th>';

    document.querySelector("table").appendChild(newTask);
    ctr++;
}

//edit 
