<template>
  <div class="demo-wrapper">
    <div class="user-list">
      <div
          v-for="user in processedUsers"
          :key="user.id"
          class="user-item"
      >
        <div class="user-info">
          <span class="username" :class="{ empty: !user.username }">
            {{ user.username || '⚠️ empty username' }}
          </span>
          <span class="email">{{ user.email }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const users = [
  {id: 1, name: 'Alice Morgan', email: 'alice@example.com'},
  {id: 2, name: 'Bob Chen', email: 'bob@example.com'},
  {id: 3, name: '田中太郎', email: 'tanaka@example.com'},
  {id: 4, name: 'Carol Smith', email: 'carol@example.com'},
  {id: 5, name: 'David Park', email: 'david@example.com'},
]

function sanitizeUsername(name) {
  return name
      .toLowerCase()
      .replace(/[^a-z0-9-\s]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
}

const processedUsers = users.map(user => {
  const username = sanitizeUsername(user.name);

  return {
    ...user,
    username
  }
})
</script>

<style scoped>
.demo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.user-item {
  display: flex;
  align-items: center;
  padding: 0.6rem 0.75rem;
  background: #44475a;
  border-radius: 0.5rem;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.username {
  color: #f8f8f2;
  font-weight: bold;
  font-size: 0.85rem;
}

.username.empty {
  color: #ff5555;
}

.email {
  color: #6272a4;
  font-size: 0.75rem;
}
</style>