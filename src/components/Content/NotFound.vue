<script setup lang="ts">
</script>

<template>
  <div class="loading">
    <svg class="loading__spinner">
        <use href="../../assets/loading.svg"></use>
    </svg>
  </div>
</template>

<style scoped>
.loading {
    width: 100%;
    height: 50dvh;
}

.loading__spinner {
    color: #3256E3;
    height: 100px;
    width: 100px;
}
</style>
