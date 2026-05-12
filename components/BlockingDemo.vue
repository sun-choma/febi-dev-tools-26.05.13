<template>
  <div class="demo-wrapper">
    <div v-if="status === 'loading'" class="state-wrapper">
      <div class="spinner"/>
      <span class="state-text">Loading posts...</span>
    </div>

    <div v-else-if="status === 'error'" class="state-wrapper">
      <span class="error-icon">⚠️</span>
      <span class="state-text">Failed to load posts</span>
      <span class="error-detail">{{ errorMessage }}</span>
      <button class="action-btn retry" @click="fetchPosts">Retry</button>
    </div>

    <div v-else class="list-wrapper">
      <div class="list">
        <div v-for="item in posts" :key="item.id" class="list-item">
          <span class="item-id">#{{ item.id }}</span>
          <span class="item-title">{{ item.title }}</span>
        </div>
      </div>
      <button class="action-btn refresh" @click="fetchPosts">↻ Refresh</button>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const posts = ref([])
const status = ref('loading')
const errorMessage = ref('')

async function fetchPosts() {
  status.value = 'loading'
  errorMessage.value = ''

  try {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=5'
    )
    if (!response.ok) throw new Error(`HTTP error — status: ${response.status}`)
    posts.value = await response.json()
    status.value = 'success'
  } catch (err) {
    errorMessage.value = err.message
    status.value = 'error'
  }
}

onMounted(() => fetchPosts())
</script>

<style scoped>
.demo-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.state-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  height: 100%;
}

.spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid #44475a;
  border-top-color: #bd93f9;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-icon {
  font-size: 2rem;
}

.state-text {
  color: #f8f8f2;
  font-weight: bold;
  font-size: 0.9rem;
}

.error-detail {
  color: #ff5555;
  font-size: 0.75rem;
  opacity: 0.8;
}

.list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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

.action-btn {
  align-self: center;
  padding: 0.4rem 1.25rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.85rem;
  cursor: pointer;
}

.retry {
  background: #ff5555;
  color: #f8f8f2;
}

.refresh {
  background: #50fa7b;
  color: #282a36;
}
</style>