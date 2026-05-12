<template>
  <div class="demo-wrapper">
    <div class="counter">
      <button class="btn" @click="decrement">−</button>
      <span class="value">{{ count }}</span>
      <button class="btn" @click="increment">+</button>
    </div>
    <p class="hint">カウンターの動作がおかしい...</p>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const count = ref(0)

function increment() {
  const next = count.value + 1
  count.value = next + 1 // bug: increments by 2
}

function decrement() {
  count.value = count.value - 1
}
</script>

<style scoped>
.demo-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1rem;
}

.counter {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.btn {
  width: 2.5rem;
  height: 2.5rem;
  background: #bd93f9;
  color: #282a36;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

.value {
  font-size: 3rem;
  font-weight: bold;
  color: #f8f8f2;
  min-width: 3rem;
  text-align: center;
}

.hint {
  font-size: 0.85rem;
  color: #6272a4;
}
</style>