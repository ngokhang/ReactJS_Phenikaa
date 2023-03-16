let page = 1;
let limit = 20;
let data = [];
const listTodos = document.querySelector(".list-todo");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const todoForm = document.forms['todoForm'];
const todoInput = document.forms['todoForm']['inputTodo'];
const btnAdd = document.querySelector(".btnAdd");

async function getTodos(limit, page) {
  if (page <= 1) {
    prevBtn.setAttribute("disabled", true);
  } else if (page >= 10) {
    nextBtn.setAttribute("disabled", true);
  }
  data = await axios
    .get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
    .then((res) => res.data);
  render();
}

async function render() {
  let newList = [...data]
    .map(
      (e) =>
        `<tr><td>${e.userId}</td><td>${e.id}</td><td>${e.title}</td><td>${e.completed}</td><td><button class="editBtn">Edit</button><button class="delBtn">Delete</button></td></tr>`
    )
    .join("");
  listTodos.innerHTML = newList;

  const editBtn = document.querySelectorAll('.editBtn');
  const delbtn = document.querySelectorAll('.delBtn');
  editBtn.forEach((btn, index) => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      todoInput.value = data[index].title;
      btnAdd.textContent = 'Edit';
    })
  });
  delbtn.forEach((btn, index) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      let result = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${index}`);
      if (result === 200) {
        alert('Simulation: deleted')
        console.log(result);
      } else {
        alert('Simulation: delete failed');
        console.log(result);
      }
    })
  });
  
}

todoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newTodo = {id: 222, title: todoInput.value, completed: false};
  let result = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
  if (result) alert('Added Successful');
  else alert('Error');
  btnAdd.textContent = 'Add';
  todoInput.value = '';
  console.log(newTodo);
  getTodos(limit, page);
});

prevBtn.addEventListener("click", (e) => {
  nextBtn.removeAttribute("disabled");
  --page;
  e.preventDefault();
  getTodos(limit, page);
});

nextBtn.addEventListener("click", (e) => {
  prevBtn.removeAttribute("disabled");
  e.preventDefault();
  ++page;
  getTodos(limit, page);
});

getTodos(limit, page);


