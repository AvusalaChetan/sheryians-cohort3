const input = document.querySelector("input");
const addItme = document.querySelector(".addBtn");
const todoList = document.querySelector(".todoList");
const editIn = document.createElement("input");

const strap = (text) => {
  const todoItem = document.createElement("div");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const saveEdit = document.createElement("button");

  span.textContent = `${text}`;
  deleteBtn.textContent = "D";
  editBtn.textContent = "E";
  saveEdit.textContent = "S";

  todoItem.classList.add("todoItem");
  deleteBtn.classList.add("deleteBtn");
  span.classList.add("todoText");
  editBtn.classList.add("editBtn");

  todoItem.append(span, editBtn, deleteBtn);

  deleteBtn.addEventListener("click", (e) => e.target.parentElement.remove());

  editBtn.addEventListener("click", (e) => {
    editBtn.remove();
    deleteBtn.before(saveEdit);

    editIn.setAttribute("value", span.textContent);

    const task = editIn.getAttribute("value");

    editIn.value = task;
    todoItem.prepend(editIn);
    span.remove();
  });

  saveEdit.addEventListener("click", (e) => {
    saveEdit.remove();
    deleteBtn.before(editBtn);
    span.textContent = editIn.value;
    todoItem.prepend(span);
    editIn.remove();
  });

  return todoItem;
};

function handileAddItem(e) {
  let val = input.value.trim();
  if (!val) return;
  let todoItem = strap(val);
  todoList.append(todoItem);

  input.value = "";
}

addItme.addEventListener("click", handileAddItem);
