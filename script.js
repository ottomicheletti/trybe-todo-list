// Requisito 7 e 8 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128) e não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

function changeColor(event) {
  const tasks = document.getElementsByClassName('item-lista');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].classList.remove('ativo');
  }
  event.target.classList.add('ativo');
}

function addEventOnTask() {
  const tasks = document.getElementsByClassName('item-lista');
  for (let index = 0; index < tasks.length; index++) {
    tasks[index].addEventListener('click', changeColor);
  }
}

// Requisito 5 e 6 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo. Ordene os itens da lista de tarefas por ordem de criação.
const addButton = document.querySelector('#criar-tarefa');
function createNewTask() {
  const newTask = document.querySelector('#texto-tarefa');
  const tasksList = document.querySelector('#lista-tarefas');
  if (newTask.value !== '') {
    const newLiItem = document.createElement('li');
    newLiItem.classList.add('item-lista');
    newLiItem.innerText = newTask.value;
    tasksList.appendChild(newLiItem);
    newTask.value = '';
    addEventOnTask();
  }
}
addButton.addEventListener('click', createNewTask);

// Requisito 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

function completedTasks() {
  // const tasks = document.getElementsByClassName('item-lista');
  document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else if (event.target.classList.contains('item-lista')) {
      event.target.classList.add('completed');
    }
  });
}

completedTasks();

//Requisito 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

function deleteTasks() {
  const tasksList = document.getElementById('lista-tarefas');

  tasksList.innerHTML = '';
}

const deleteButton = document.getElementById('apaga-tudo');
deleteButton.addEventListener('click', deleteTasks);
