<template>
    <tr class="todo">
        <!-- number -->
        <td>{{ num }}.</td>
        <!-- Task -->
        <td style="width: 100%;">{{ task }}</td>
        <!-- Date -->
        <td>{{ formatDate }}</td>
        <!-- Status -->
        <td>
            <span class="todo-status">{{ status }}</span>
        </td>
        <!-- Action -->
        <td>
            <div class="action-bar">
                <button @click="changeStatusTo('Completed', id)" v-if="status === 'Active'" class="complete-btn">
                    <completeSVG />
                </button>
                <button v-else class="completed-btn">
                    <completedSVG />
                </button>

                <button @click="setEditTodo(id)" class="edit-btn">
                    <editSVG />
                </button>
                <button @click="deleteTodo(id)" class="dlt-btn">
                    <deleteSVG />
                </button>
            </div>
        </td>
    </tr>
</template>




<script  lang="ts">
import { IStatus } from '../interfaces/TodosInterface'
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        task: {
            type: String,
            required: true
        },
        num: {
            type: Number,
            required: true
        },
        status: {
            type: String as () => IStatus,
            required: true

        },
        date: {
            type: Date,
            required: true
        }
    },
    emits: ['delete-todo', 'change-status', 'set-to-edit'],
    computed: {
        formatDate: function () {
            const day = this.date.getDate(),
                month = this.date.getMonth() + 1,
                year = this.date.getFullYear();
            return `${day}/${month}/${year}`
        }
    },
    methods: {
        changeStatusTo: function (status: IStatus, id: string) {
            this.$parent.$emit('change-status', status, id)
        },
        setEditTodo: function (id: string) {
            this.$parent.$emit('set-to-edit', id)
        },
        deleteTodo: function (id: string) {
            console.log(id)
            this.$parent.$emit('delete-todo', id)
        },
    }
}
</script>













<style scoped>
.body {
    flex-grow: 1;
}

.todo-status {
    background-color: #33ae10;
    border-radius: 30px;
    color: #fff;
    font-size: 12px;
    padding: 3px 10px;
}

.action-bar {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 5px;
}

.action-bar button {
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    color: #fff;
    height: 25px;
    padding: 6px;
    width: 25px;
}

.edit-btn {
    background-color: #33ae10;
}

.complete-btn {
    background-color: #0ca6f3;

}

.completed-btn {
    background-color: #5454e8;

}

.dlt-btn {
    background-color: #ff7849;
}

.todo td {
    padding: 5px 15px;
    text-align: left;
}

.todo:nth-child(even) {
    background-color: #f2f2f2;
}

.todo:hover {
    background-color: #ddd;
}
</style>
