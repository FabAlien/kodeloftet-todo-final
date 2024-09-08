function burgerFunction() {
  var x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}

function textClear() {
  addTodoButton.addEventListener("click", document.getElementById("todoInput").value = "")
}

function todoApplication() {

  const todoInput = document.querySelector("#todoInput").value;

  const todoList = document.querySelector("#todoList");

  const todoItem = document.createElement("li");

  todoItem.textContent = todoInput;

  todoItem.classList.add("spacing");

  todoList.appendChild(todoItem);

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Slett";

  deleteButton.addEventListener("click", function () {
    todoItem.remove();
  })

  todoItem.appendChild(deleteButton);

  const finishButton = document.createElement("button");

  finishButton.textContent = "Ferdig";

  finishButton.addEventListener("click", function (){
    todoItem.style.textDecoration = "line-through";
    todoItem.style.color = "darkgrey";
  })

  todoItem.appendChild(finishButton);
  clearInput;

}

const addTodoButton = document.querySelector('#addTodoButton');

addTodoButton.addEventListener('click', todoApplication);
addTodoButton.addEventListener("click", textClear)

console.log("JS initiated")
