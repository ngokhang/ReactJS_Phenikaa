let todos = ["Learn HTML", "Learn CSS", "Learn JS"];
let todoList = document.querySelector('.todoList');
const valueInput = document.getElementById('todoInput');
const button = document.querySelector('button');
const form = document.querySelector('form');
const maskBlur = document.querySelector('.mask');
const closeIconEditForm = document.querySelector('.close-icon');

function handleDeleteClick(index) {
  todos.splice(index, 1);
  render();
}

function handleEditClick(index) {
  const input = document.getElementById('todoNameInput').value;
  todos = todos.toString().replace(todos[index], input).split(',').map(e => e);
}

function handleOpenEditFormClick(id) {
  maskBlur.style.display = 'flex';
  const editInput = document.querySelector('#todoNameInput');
  editInput.value = todos[id];
}

function handleCloseEditFormClick() {
  maskBlur.style.display = 'none';
  render();
}

let idEdit = 0;
function render() {
  const todoElements = todos.map(todo => `<li>${todo} <button id="delBtn">Delete</button> <button id="editBtn">Edit</button></li>`);
  todoList.innerHTML = todoElements.join("");
  const btnsDel = document.querySelectorAll("#delBtn");
  btnsDel.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      handleDeleteClick(index);
    })
  });
  const btnsEdit = document.querySelectorAll('#editBtn');
  btnsEdit.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      idEdit = index;
      handleOpenEditFormClick(index);
    })
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (valueInput.value.length > 0) {
    todos.push(valueInput.value);
    valueInput.value = '';
  }
  render();
});

const formEdit = document.getElementById('formEdit');
formEdit.addEventListener('submit', e => {
  e.preventDefault();
  handleEditClick(idEdit);
  handleCloseEditFormClick();
})

closeIconEditForm.addEventListener('click', (e) => {
  e.stopPropagation();
  handleCloseEditFormClick();
});

function initialApp() {
  render();
}

initialApp();