const toDoForm = document.querySelector('#todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('#todo-list')

function paintTodo(newTodo) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  span.innerText = newTodo
  const button = document.createElement('button')
  button.innerText = '❌'
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(e) {
  e.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ''
  paintTodo(newTodo)
}

toDoForm.addEventListener('submit', handleToDoSubmit)
