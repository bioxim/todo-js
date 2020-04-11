export class TodoList {
	constructor() {
	  //this.todos = [];
	  this.cargarLocalStorage();
	}

	nuevoTodo(todo) {
		this.todos.push(todo);
		this.guardarLocalStorage();
	}

	eliminarTodo(id) {

		this.todos = this.todos.filter( todo => todo.id != id );
		this.guardarLocalStorage();

	}

	marcarCompletado(id) {
		for(const todo of this.todos) {
			console.log(id, todo.id);
			// como id y todo.id uno es un string y el otro un número pongo sólo doble igual
			if(todo.id == id) {
				todo.completado = !todo.completado;
				this.guardarLocalStorage();
				break;
			}
		}
	}

	eliminarCompletados() {
		this.todos = this.todos.filter( todo => !todo.completado );
		this.guardarLocalStorage();
	}

	guardarLocalStorage() {
		//cuando veo [object] es que tengo que pasar el json a un string
		localStorage.setItem('todo', JSON.stringify( this.todos ));

	}

	cargarLocalStorage() {
		/*if (localStorage.getItem('todo')) {
			//Lo tengo que volver a convertir en JSON
			this.todos = JSON.parse(localStorage.getItem('todo'));
			console.log('cargarLocal:', this.todos);
		} else {
			this.todos = [];
		}*/

		this.todos = (localStorage.getItem('todo')) ?
			JSON.parse(localStorage.getItem('todo')) :
			[];
	}
}