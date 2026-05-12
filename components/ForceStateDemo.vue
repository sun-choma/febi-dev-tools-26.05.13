<template>
<!--  TODO: make button a top level tag -->
  <div class="demo-wrapper">
    <button class="btn-wrapper">
      <span class="demo-btn">押してみて</span>
    </button>
  </div>
</template>

<script setup>
</script>

<style scoped>
.demo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.btn-wrapper {
  background: #6d4aab;
  border-radius: 0.75rem;
  cursor: pointer;
}

.demo-btn {
  display: block;
  width: 100%;
  padding: 0.75rem 2rem;
  background: #bd93f9;
  border: 2px solid #6d4aab;
  color: #282a36;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: margin 0.15s ease;

}

.btn-wrapper:hover .demo-btn {
  margin-top: -0.75rem;
  margin-bottom: 0.75rem;
}

.btn-wrapper:focus-within .demo-btn {
  outline: 2px solid #ff79c6;
  outline-offset: 2px;
}

.btn-wrapper:active .demo-btn {
  margin-bottom: 0;
}
</style>