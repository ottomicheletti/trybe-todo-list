// Requisito 5 e 6

function createNewTask() {
  let newTask = document.querySelector('#texto-tarefa');
  let newLiItem = document.createElement('li');
  let olItem = document.querySelector('#lista-tarefas');

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('criar-tarefa')) {
      if (newTask.value.length > 0) {
        let newLiItem = document.createElement('li');
        newLiItem.innerText = newTask.value;

        olItem.appendChild(newLiItem);
        newTask.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    }
  });
}
createNewTask();

// Requisito 7
