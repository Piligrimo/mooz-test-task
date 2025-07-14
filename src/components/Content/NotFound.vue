<script setup lang="ts">
  defineProps<{ errorMessage: string }>()
</script>

<template>
  <div class="not-found">
    <img class="not-found__icon" src="../../assets/not-found.svg" />
    <h2>{{ errorMessage }}</h2>
  </div>
</template>

<style scoped>
.not-found {
    width: 100%;
    height: 50dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.not-found__icon {
    height: 100px;
    width: 100px;
}

</style>
