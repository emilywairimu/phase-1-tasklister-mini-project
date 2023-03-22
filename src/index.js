document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const newTask = document.createElement('li');
  const taskDescription = document.querySelector('#new-task-description').value;
  newTask.innerText = taskDescription;
  taskList.appendChild(newTask);
  form.reset();
});

})
