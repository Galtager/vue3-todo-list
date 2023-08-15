import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Header from './components/Header.vue'
import Table from './components/Table.vue'
import Footer from './components/Footer.vue'
import TodoListPage from './components/TodoListPage.vue'
import Todo from './components/Todo.vue'

import completeSVG from './assets/completeSVG.vue'
import completedSVG from './assets/completedSVG.vue'
import deleteSVG from './assets/deleteSVG.vue'
import editSVG from './assets/editSVG.vue'

const app = createApp(App);

app.component('Header',Header)
app.component('Table',Table)
app.component('Footer',Footer)
app.component('TodoListPage',TodoListPage)
app.component('Todo',Todo)

// svgs
app.component('completeSVG',completeSVG)
app.component('completedSVG',completedSVG)
app.component('deleteSVG',deleteSVG)
app.component('editSVG',editSVG)

app.mount('#app')