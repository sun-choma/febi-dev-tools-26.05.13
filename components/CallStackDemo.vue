<template>
  <div class="demo-wrapper">
    <div class="order">
      <div class="order-header">
        <span class="order-id">注文 #1042</span>
        <span class="order-status">処理待ち</span>
      </div>
      <div class="order-items">
        <div v-for="item in order.items" :key="item.id" class="order-item">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-qty">x{{ item.qty }}</span>
          <span class="item-price">¥{{ item.price }}</span>
        </div>
      </div>
      <div class="order-footer">
        <button class="process-btn" @click="processOrder(order)">
          注文を処理する
        </button>
        <span v-if="total" class="order-total">合計: {{ total }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const total = ref(null)

const order = {
  id: 1042,
  discountCode: 'SUMMER',
  items: [
    {id: 1, name: 'Mechanical Keyboard', qty: 1, price: 19800},
    {id: 2, name: 'USB-C Hub', qty: 2, price: 7480},
    {id: 3, name: 'Webcam HD', qty: 1, price: 13200},
  ]
}

const discountCodes = {
  WINTER: 0.15,
  BLACKFRIDAY: 0.25,
}

function formatPrice(value) {
  if (isNaN(value)) {
    alert('Error! Check console for details')
    throw new Error(`formatPrice: received NaN — invalid price value`)
  }
  return `$${value.toFixed(2)}`
}

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0)
}

function applyDiscount(order) {
  const subtotal = calculateTotal(order.items)
  const discount = discountCodes[order.discountCode]
  return subtotal - subtotal * discount
}

function processOrder(order) {
  const discountedTotal = applyDiscount(order)
  total.value = formatPrice(discountedTotal)
}
</script>

<style scoped>
.demo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.order {
  width: 100%;
  background: #44475a;
  border-radius: 0.75rem;
  overflow: hidden;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #6272a4;
}

.order-id {
  font-weight: bold;
  color: #f8f8f2;
  font-size: 0.9rem;
}

.order-status {
  font-size: 0.75rem;
  color: #f8f8f2;
  opacity: 0.75;
}

.order-items {
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.order-item {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  gap: 0.5rem;
}

.item-name {
  flex: 1;
  color: #f8f8f2;
}

.item-qty {
  color: #6272a4;
  width: 2rem;
}

.item-price {
  color: #bd93f9;
  width: 3.5rem;
  text-align: right;
}

.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-top: 1px solid #6272a4;
}

.process-btn {
  padding: 0.4rem 1rem;
  background: #bd93f9;
  color: #282a36;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  font-weight: bold;
  cursor: pointer;
}

.order-total {
  color: #50fa7b;
  font-weight: bold;
  font-size: 0.9rem;
}
</style>