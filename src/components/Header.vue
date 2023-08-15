<template>
    <div class="todo-header">
        <div class="logo-area">
            <img src="/logo.png" class="logo" />
        </div>
        <div class="filter-area">
            <label class="filter-label" for="filter">Filter:</label>
            <select @change="filterTable" class="filter" name="filter">
                <option key="all">All</option>
                <option key="Completed">Completed</option>
                <option key="Active">Active</option>
            </select>
        </div>
    </div>
</template>

<script  lang="ts">
export default {
    emits: ['change-filter'],
    methods: {
        filterTable(event: any) {
            if (event?.target?.value) {
                this.$emit('change-filter', event.target.value)

            }

        }
    }

}
</script>
<style scoped>
.vbox {
    display: flex;
    flex-direction: column;
}

.container {
    max-width: 768px;
    margin: 0 auto;
}

.wrapper {
    width: 100%;
    border-radius: 7px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .1);
    height: calc(100vh - 215px);
}

.todo-header {
    background: #0ca6f3;
    justify-content: space-between;
    display: flex;
    padding: 4px 20px;
}

.logo-area {
    gap: 7px;
    width: 148px;
    align-items: center;
    display: flex;
    box-sizing: border-box;
}

.logo {
    max-width: 100%;
}

.filter-area {
    display: flex;
    align-items: center;
}

.filter-label {
    color: #fff;
    font-weight: 600;
    margin-right: .4rem;
}

.filter {
    border: none;
    background-color: #fff;
    border-radius: 50px;
    cursor: pointer;
    outline: none;
    padding: 8px;
}
</style>
