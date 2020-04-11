import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes.js';

export const todoList = new TodoList();

//const tarea = new Todo('Aprender JavaScript');

//tarea.completado = true;
//todoList.nuevoTodo(tarea);

//console.log(todoList);

//crearTodoHtml(tarea);

//localStorage.setItem('mi-key', 'valorquedeseoalmacenar');
//sessionStorage.setItem('mi-key', 'valorquedeseoalmacenar');

console.log(todoList.todos);

todoList.todos.forEach( crearTodoHtml );