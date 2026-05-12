<template>
  <div class="demo-wrapper">
    <div class="panels">
      <div class="panel">
        <h3 class="panel-title">Todos</h3>
        <div v-if="todos.status === 'loading'" class="state loading">
          <div class="spinner"/>
        </div>
        <div v-else-if="todos.status === 'error'" class="state error">
          <span>⚠️ Failed to load</span>
        </div>
        <div v-else class="list">
          <div v-for="item in todos.data" :key="item.id" class="list-item">
            <span class="item-check">{{ item.completed ? '✅' : '⬜' }}</span>
            <span class="item-title">{{ item.title }}</span>
          </div>
        </div>
      </div>

      <div class="panel">
        <h3 class="panel-title">Users</h3>
        <div v-if="users.status === 'loading'" class="state loading">
          <div class="spinner"/>
        </div>
        <div v-else-if="users.status === 'error'" class="state error">
          <span>⚠️ Failed to load</span>
        </div>
        <div v-else class="list">
          <div v-for="user in users.data" :key="user.id" class="list-item">
            <span class="item-name">{{ user.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <button class="reload-btn" @click="fetchAll">↻ 再読み込み</button>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const todos = ref({status: 'loading', data: []})
const users = ref({status: 'loading', data: []})

async function fetchTodos() {
  todos.value.status = 'loading'
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
    if (!res.ok) throw new Error()
    todos.value.data = await res.json()
    todos.value.status = 'success'
  } catch {
    todos.value.status = 'error'
  }
}

async function fetchUsers() {
  users.value.status = 'loading'
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=4')
    if (!res.ok) throw new Error()
    users.value.data = await res.json()
    users.value.status = 'success'
  } catch {
    users.value.status = 'error'
  }
}

function fetchAll() {
  fetchTodos()
  fetchUsers()
}

onMounted(() => fetchAll())
</script>

<style scoped>
.demo-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  width: 420px;
}

.panels {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  min-height: 180px;
}

.panel {
  flex: 1;
  background: #44475a;
  border-radius: 0.5rem;
  overflow: hidden;
}

.panel-title {
  margin: 0;
  padding: 0.5rem 0.75rem;
  background: #6272a4;
  color: #f8f8f2;
  font-size: 0.85rem;
}

.state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  font-size: 0.8rem;
}

.loading {
  color: #6272a4;
}

.error {
  color: #ff5555;
}

.spinner {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #44475a;
  border-top-color: #bd93f9;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.list {
  display: flex;
  flex-direction: column;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border-bottom: 1px solid #6272a4;
  font-size: 0.75rem;
}

.item-check {
  font-size: 0.7rem;
}

.item-title {
  color: #f8f8f2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-name {
  color: #f8f8f2;
  font-weight: bold;
}

.item-email {
  color: #6272a4;
}

.reload-btn {
  align-self: center;
  padding: 0.4rem 1.25rem;
  background: #50fa7b;
  color: #282a36;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.85rem;
  cursor: pointer;
}
</style>