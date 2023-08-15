<template>
    <div class="body">
        <table v-if="filtersTodo.length > 0" class="table">
            <thead class="head">
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <Todo v-for="(item, index) in filtersTodo" :key="item.task" :id="item.id" :num="index" :task="item.task"
                    :date="item.date" :status="item.status" @change-status=""></Todo>
                <tr v-if="filtersTodo.length > 1">
                    <td colspan="5">
                        <button @click="deleteAll" class="delete-all">Delete All</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-else>No item found!</p>
    </div>
</template>

<script  lang="ts">
import { ITodoItem, IStatus } from '../interfaces/TodosInterface';
export default {
    props: {
        statusFilter: {
            type: String as () => IStatus,
            required: true
        },
        todos: {
            type: Object as () => ITodoItem[],
            required: true
        }
    },
    emits: ['delete-todo', 'delete-all', 'change-status', 'set-to-edit'],
    computed: {
        filtersTodo: function () {
            if (this.statusFilter === "All")
                return this.todos;
            else
                return this.todos.filter(todo => todo.status === this.statusFilter)
        }
    },
    methods: {
        deleteAll: function () {
            this.$emit('delete-all')

        }
    }
}
</script>
<style scoped>
.body {
    padding: .7rem 1rem;
    flex-grow: 1;
}

.table {
    border-collapse: collapse;
    display: block;
    height: calc(100vh - 358px);
    overflow: auto;
    width: 100%;
}

.head {
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: #010326;
    color: #fff;
}

.delete-all {
    background-color: #ff7849;
    border-radius: 50px;
    color: #fff;
    transition: all .2s ease-in-out;
    padding: 8px 20px;
}

.head tr {
    box-sizing: border-box;
}

.head th {
    padding: 5px 15px;
    text-align: left;
}
</style>
