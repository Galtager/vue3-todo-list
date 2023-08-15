<template>
    <div class="todo-footer">
        <form>
            <div class="footer-group">
                <img src="/edit.png" class="edit-img" />
                <input placeholder="Enter Task" class="form-input" v-model="todo.task" />
                <button class="form-btn" @click="addTodo" @click.prevent>Add Item</button>
            </div>
        </form>
    </div>
</template>

<script  lang="ts">
import { ITodoItem } from '../interfaces/TodosInterface';

export default {
    props: {
        todo: {
            type: Object as () => ITodoItem,
            required: true
        },
    },
    emits: ['edit-todo', 'add-todo'],
    methods: {
        addTodo() {
            if (!!this.todo.task) {
                let newTodo: ITodoItem;
                if (this.todo.id) {
                    newTodo = { task: this.todo.task, date: this.todo.date, status: 'Active', id: this.todo.id }
                    this.$emit('edit-todo', this.todo)
                }
                else {
                    newTodo = { task: this.todo.task, date: new Date(), status: 'Active', id: new Date().toISOString() }
                    this.$emit('add-todo', newTodo)

                }
            }

        }
    }
}
</script>
<style scoped>
.todo-footer {
    background: #010326;
    padding: 15px 20px;
}

.form-input {
    flex-grow: 1;
    outline: none;
    padding: 10px 20px !important;
    background: #013350;
    border: 1px solid transparent !important;
    border-radius: 30px;
    color: #ffff;
    font-size: 16px;
}

.form-input:focus {
    border-color: #0ca6f3 !important;
}

.footer-group {
    display: flex;
    align-items: center;
    gap: 15px;
}

.edit-img {
    width: 1.5rem;
    height: 1.5rem;
}

.form-btn {
    background: #0ca6f3;
    border-radius: 30px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 20px;
}
</style>
