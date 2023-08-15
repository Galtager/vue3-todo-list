<template>
  <div class="container">
    <div class="wrapper vbox">
      <Header @change-filter="changeFilter"></Header>

      <Table @delete-all="deleteAll" @delete-todo="deleteTodo" @change-status="changeTodoStatus" @set-to-edit="setToEdit"
        :todos="todos" :statusFilter="statusFilter">
      </Table>
      <Footer @edit-todo="editTodo" @add-todo="addTodo" :todo="todo"></Footer>
    </div>
  </div>
</template>

<script  lang="ts">
import { IStatus, ITodoItem } from '../interfaces/TodosInterface';

const todosListString = localStorage.getItem("todos");
let todosList: ITodoItem[] = [];
if (todosListString) {
  todosList = JSON.parse(todosListString) as ITodoItem[];
  todosList.forEach(todo => todo.date = new Date(todo.date))
}
const getNewTodo = (): ITodoItem => {
  return { task: "", date: new Date(), status: 'Active', id: "" }
};

export default {
  data: () => ({
    statusFilter: 'All',
    todos: todosList,
    todo: getNewTodo()
  }),
  methods: {
    // header actions
    changeFilter: function (filter: IStatus) {
      this.statusFilter = filter;
    },
    // todos  table actions
    setToEdit: function (todoID: string) {
      const found = this.todos.find(el => el.id === todoID);
      if (found) {
        this.todo = { ...found };
      }
    },
    deleteTodo: function (todoID: string) {
      this.todos = this.todos.filter(el => el.id !== todoID);
      this.postToServer();
      this.todo = getNewTodo()

    },
    deleteAll: function () {
      this.todos = [];
      this.postToServer();
      this.todo = getNewTodo()

    },
    // footer actions
    addTodo: function (todo: ITodoItem) {
      this.todos.push(todo);
      this.todo = getNewTodo();
      this.postToServer();
    },
    editTodo: function (editedTodo: ITodoItem) {
      const todo = this.todos.find(el => el.id === editedTodo.id)
      if (todo) {
        todo.task = editedTodo.task;
        this.changeTodoStatus("Active", todo.id);
        this.todo = getNewTodo()
      }
    },
    // global
    postToServer: function () {
      localStorage.setItem("todos", JSON.stringify(this.todos))
    },
    changeTodoStatus: function (newStatus: IStatus, id: string) {
      const task = this.todos.find(el => el.id === id)
      if (task) {
        task.status = newStatus;
        this.postToServer()
      }
    },

  }
}
</script>


<style scoped>
.container {
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
}

.wrapper {
  width: 100%;
  border-radius: 7px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, .1);
  height: calc(100vh - 215px);
}

.demo {
  width: 10rem;
  height: 4rem;
  border: 1px dashed #ccc;
  margin-bottom: 1rem;
}

.active-demo {
  border-color: red;
  background-color: salmon;
}

.read-the-docs {
  color: #888;
}
</style>
