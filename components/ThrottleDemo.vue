<template>
  <div class="demo-wrapper">
    <div class="list">
      <div v-for="item in items" :key="item.id" class="list-item">
        <span class="item-id">#{{ item.id }}</span>
        <span class="item-title">{{ item.title }}</span>
      </div>
    </div>
    <div class="pagination">
      <button class="page-btn" :disabled="page === 1" @click="changePage(page - 1)">←</button>
      <span class="page-info">Page {{ page }} / {{ totalPages }}</span>
      <button class="page-btn" :disabled="page === totalPages" @click="changePage(page + 1)">→</button>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const PER_PAGE = 5
const totalPages = 5

const items = ref([])
const page = ref(1)

async function fetchItems(page) {
  const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${PER_PAGE}`
  )
  items.value = await response.json()
}

async function changePage(newPage) {
  page.value = newPage
  await fetchItems(newPage)
}

onMounted(() => fetchItems(1))
</script>

<style scoped>
.demo-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  justify-content: center;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: #44475a;
  border-radius: 0.5rem;
  font-size: 0.8rem;
}

.item-id {
  color: #6272a4;
  width: 2rem;
  flex-shrink: 0;
}

.item-title {
  color: #f8f8f2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.page-btn {
  padding: 0.4rem 0.75rem;
  background: #bd93f9;
  color: #282a36;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
}

.page-btn:disabled {
  background: #44475a;
  color: #6272a4;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.8rem;
  color: #6272a4;
}
</style>