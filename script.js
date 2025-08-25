let ctr = 1;

function deleteTodo(index) {
    const element = document.getElementById("todo-"+index);
    element.parentNode.removeChild(element);
}

function addTodo() {
    const inputel = document.querySelector("input");
    const task = inputel.value;

    const newDiv = document.createElement("div");
    newDiv.setAttribute('id', "todo-"+ctr);
    newDiv.innerHTML = task +'<button onclick = "deleteTodo('+ctr+')">delete</button>';

    document.querySelector("body").appendChild(newDiv);
    ctr++;
}

