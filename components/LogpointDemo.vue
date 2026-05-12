<template>
  <div class="demo-wrapper">
    <div class="scroll-container" ref="containerRef" @scroll="onScroll">
      <div class="scroll-spacer" :style="{ height: totalHeight + 'px' }">
        <div
            class="virtual-items"
            :style="{ transform: `translateY(${offsetY}px)` }"
        >
          <div
              v-for="item in visibleItems"
              :key="item.id"
              class="list-item"
          >
            <span class="item-id">#{{ item.id }}</span>
            <span class="item-name">{{ item.name }}</span>
            <span class="item-value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- vertical visualization bar -->
<!--    <div class="viz-wrapper">-->
<!--      <div class="viz-bar">-->
<!--        <div-->
<!--            class="viz-segment viz-rest"-->
<!--            :style="{ height: (bufferedStart / items.length * 100) + '%' }"-->
<!--        />-->
<!--        <div-->
<!--            class="viz-segment viz-buffer"-->
<!--            :style="{ height: ((startIndex - bufferedStart) / items.length * 100) + '%' }"-->
<!--        />-->
<!--        <div-->
<!--            class="viz-segment viz-visible"-->
<!--            :style="{ height: ((endIndex - startIndex) / items.length * 100) + '%' }"-->
<!--        />-->
<!--        <div-->
<!--            class="viz-segment viz-buffer"-->
<!--            :style="{ height: ((bufferedEnd - endIndex) / items.length * 100) + '%' }"-->
<!--        />-->
<!--        <div-->
<!--            class="viz-segment viz-rest"-->
<!--            :style="{ height: ((items.length - bufferedEnd) / items.length * 100) + '%' }"-->
<!--        />-->
<!--      </div>-->
<!--      <div class="viz-labels">-->
<!--        <span>1</span>-->
<!--        <span>{{ items.length }}</span>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const ITEM_HEIGHT = 40
const VISIBLE_COUNT = 6
const BUFFER = 3

const items = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  value: Math.round(Math.random() * 1000)
}))

const totalHeight = items.length * ITEM_HEIGHT
const containerRef = ref(null)
const scrollTop = ref(0)
const startIndex = ref(0)
const endIndex = ref(VISIBLE_COUNT)
const bufferedStart = ref(0)
const bufferedEnd = ref(VISIBLE_COUNT + BUFFER)

const offsetY = computed(() => bufferedStart.value * ITEM_HEIGHT)

const visibleItems = computed(() =>
    items.slice(bufferedStart.value, bufferedEnd.value)
)

let rafId = null

function onScroll(event) {
  if (rafId) return

  rafId = requestAnimationFrame(() => {
    const scrollPosition = event.target.scrollTop
    const start = Math.floor(scrollPosition / ITEM_HEIGHT)
    const end = Math.min(start + VISIBLE_COUNT, items.length)
    const bStart = Math.max(0, start - BUFFER)
    const bEnd = Math.min(items.length, end + BUFFER)

    const visibleRange = {
      scrollPosition,
      visible: { start, end },
      buffered: { start: bStart, end: bEnd },
      totalRendered: bEnd - bStart
    }

    scrollTop.value = scrollPosition
    startIndex.value = start
    endIndex.value = end
    bufferedStart.value = bStart
    bufferedEnd.value = bEnd

    rafId = null
  })
}
</script>

<style scoped>
.demo-wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.scroll-container {
  flex: 1;
  height: 240px;
  overflow-y: auto;
  border: 1px solid #6272a4;
  border-radius: 0.5rem;
}

.scroll-spacer {
  position: relative;
}

.virtual-items {
  position: absolute;
  width: 100%;
}

.list-item {
  height: 40px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 0.75rem;
  border-bottom: 1px solid #44475a;
  font-size: 0.8rem;
  animation: fadeIn 0.2s ease;
  transform-origin: center center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.item-id {
  color: #6272a4;
  width: 2.5rem;
}

.item-name {
  color: #f8f8f2;
  flex: 1;
}

.item-value {
  color: #bd93f9;
}

.viz-wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  height: 240px;
  align-items: stretch;
}

.viz-bar {
  width: 12px;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #282a36;
}

.viz-segment {
  width: 100%;
  transition: height 0.1s;
}

.viz-rest {
  background: #44475a;
}

.viz-buffer {
  background: #6272a4;
}

.viz-visible {
  background: #bd93f9;
}

.viz-labels {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.6rem;
  color: #6272a4;
}
</style>