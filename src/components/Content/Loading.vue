<script setup lang="ts">
</script>

<template>
  <div class="loading">
    <img class="loading__spinner" src="../../assets/loading.svg" />
  </div>
</template>

<style scoped>
.loading {
    width: 100%;
    height: 50dvh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading__spinner {
    color: #3256E3;
    height: 100px;
    width: 100px;
    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
