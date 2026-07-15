const addBtn = document.querySelector(".add-btn");
const todoListItem = document.querySelector(".todo-list-item");
const todoInput = document.querySelector(".input-list");
const dueDateInput = document.querySelector(".due-date");

function keyPress() {
  if (event.key === "Enter") {
    addTodo();
  }
}

let todoListArray = [];

function renderTodo() {
  let todoListHTML = "";

  for (let i = 0; i < todoListArray.length; i++) {
    const todoList = todoListArray[i];
    todoListHTML += `<div>${todoList.name}</div> <div> ${todoList.dueDate} </div> 
          <button class="delete-btn" onclick="todoListArray.splice(${i}, 1); renderTodo()
            ">Delete</button>`;
  }

  todoListItem.innerHTML = todoListHTML;
}
renderTodo();

function addTodo() {
  let dueDate = dueDateInput.value;
  let name = todoInput.value;
  todoListArray.push({
    name,
    dueDate,
  });
  todoInput.value = "";
  renderTodo();
}
