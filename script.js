window.onload = function () {
  const savedTasks = localStorage.getItem('tasks');
  const parsedTasks = JSON.parse(savedTasks);
  const tasksList = document.getElementById('lista-tarefas');

  if (parsedTasks !== '') {
    tasksList.innerHTML = parsedTasks;
  }
};

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
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', changeColor);
  }
}

// Requisito 5 e 6 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo. Ordene os itens da lista de tarefas por ordem de criação.
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
const addButton = document.querySelector('#criar-tarefa');
addButton.addEventListener('click', createNewTask);

// Requisito 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
function completedTasks() {
  document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else if (event.target.classList.contains('item-lista')) {
      event.target.classList.add('completed');
    }
  });
}

completedTasks();

// Requisito 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista.
//* Inspirado por https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/
function deleteTasks() {
  const tasksList = document.getElementById('lista-tarefas');

  tasksList.innerHTML = '';
  localStorage.removeItem('tasks');
}

const deleteButton = document.getElementById('apaga-tudo');
deleteButton.addEventListener('click', deleteTasks);

// Requisito 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista.
//* Inspirado por https://stackoverflow.com/a/14066534
function deleteCompletedTasks() {
  const completedTasks = document.getElementsByClassName('completed');

  while (completedTasks.length > 0) {
    completedTasks[0].parentNode.removeChild(completedTasks[0]);
  }
}

const deleteCompletedButton = document.getElementById('remover-finalizados');
deleteCompletedButton.addEventListener('click', deleteCompletedTasks);

// Requisito 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava - (A segunda parte do código está no início do arquivo para ser executado onload)
function saveTasks() {
  const tasksList = document.getElementById('lista-tarefas').innerHTML;
  const tasksListStringfied = JSON.stringify(tasksList);

  if (tasksList.length > 0) {
    localStorage.setItem('tasks', tasksListStringfied);
  }
}

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', saveTasks);

// Requisito 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
function moveUp() {
  const ativo = document.querySelector('.ativo');
  const lista = document.querySelector('ol');
  const listaFirstChild = lista.firstElementChild;

  if (lista.hasChildNodes(ativo) && ativo !== listaFirstChild) {
    ativo.before(ativo);
    ativo.after(ativo.previousElementSibling);
  }
}
const upButton = document.getElementById('mover-cima');
upButton.addEventListener('click', function () {
  try {
    moveUp();
  } catch (error) {}
});

function moveDown() {
  const ativo = document.querySelector('.ativo');
  const lista = document.querySelector('ol');
  const listaLastChild = lista.lastElementChild;

  if (lista.hasChildNodes(ativo) && ativo !== listaLastChild) {
    ativo.before(ativo.nextElementSibling);
    ativo.after(ativo);
  }
}

const downButton = document.getElementById('mover-baixo');
downButton.addEventListener('click', function () {
  try {
    moveDown();
  } catch (error) {}
});

// Requisito 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado.
function deleteSelectedTask() {
  const ativo = document.querySelector('.ativo');

  ativo.remove();
}

const delSelectedButton = document.getElementById('remover-selecionado');
delSelectedButton.addEventListener('click', deleteSelectedTask);
