<template>
  <div class="demo-wrapper">
    <div class="ui-lib">
      <button class="button primary my-button">
        ボタン
      </button>
    </div>

    <div class="hint">
      <p>😤 なんで自分のスタイルが効かないの？！</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.demo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  height: 100%;
}

.ui-lib .button.primary {
  background: mediumturquoise;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.my-button {
  background: mediumpurple;
}

.hint {
  font-size: 0.85rem;
  color: #6272a4;
}
</style>