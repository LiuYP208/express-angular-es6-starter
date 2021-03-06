class TodoListController {
  constructor() {
    this.editedTodo = null;
    this.originalTodo = null;
    this.saveEvent = null;
    this.reverted = null;
  }

  // Make css style effective.
  editTodo(todo) {
    this.editedTodo = todo;
    // Clone the original todo to restore it on demand.
    this.originalTodo = angular.extend({}, todo);
  }

  saveEdits(todo, event) {
    // Blur events are automatically triggered after the form submit event.
    // This does some unfortunate logic handling to prevent saving twice.
    if (event === 'blur' && this.saveEvent === 'submit') {
      this.saveEvent = null;
      return;
    }
    this.saveEvent = event;
    if (this.reverted) {
      // Todo edits were reverted-- don't save.
      this.reverted = null;
      return;
    }
    todo.title = todo.title.trim();
    if (todo.title === this.originalTodo.title) {
      this.editedTodo = null;
      return;
    }

    this.onSaveEdits({
      origin: this.originalTodo,
      newTodo: todo
    });

    this.editedTodo = null;
  }

  markAll(completed) {
    this.onMarkAll({
      completed: completed
    });
  }

  removeTodo(todo) {
    this.onRemoveTodo({
      todo: todo
    });
  }

  revertEdits(todo) {
    // todos[todos.indexOf(todo)] = todoList.originalTodo;
    this.editedTodo = null;
    this.originalTodo = null;
    this.reverted = true;
  };

  toggleCompleted(todo) {
    this.onToggleCompleted({
      todo: todo,
      completed: todo.completed
    });
  }
}

export default TodoListController;