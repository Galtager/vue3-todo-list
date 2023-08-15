
<template>
  <div id="app">
    <TodoListPage />
  </div>
</template>

<script setup lang="ts">

</script>


<style>
.vbox {
  display: flex;
  flex-direction: column;
}

button {
  opacity: 0.8 !important;
  border: none !important;
  transition: all .2s ease-in-out !important;

}

button:hover {
  opacity: 1 !important;
  -webkit-transform: scale(.95) !important;
  transform: scale(.95) !important;

}
</style>
