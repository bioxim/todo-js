export class Todo {

	constructor(tarea) {
	  this.tarea = tarea;
	  this.id = new Date().getTime(); // La hora, min y seg como id único de la tarea
	  this.completado = false;
	  this.creado = new Date();
	}

}