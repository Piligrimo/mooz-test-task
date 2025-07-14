<script setup lang="ts">

  defineProps<{ search: string, count: number, isPending: boolean}>()

</script>

<template>
  <section class="search-info">
    <p class="search-info__text">You searched for: <u>{{ search }}</u></p>
    <div v-if="!isPending && count" class="search-info__badge">
      {{ count }} results
    </div>
  </section>
</template>

<style scoped>
.search-info {
  margin-top: 45px;
  display: flex;
  gap: 17px;
  align-items: center;
}
.search-info__text {
  margin: 0;
  font-size: 16px;
}
.search-info__badge {
  height: 30px;
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 5px;
  color: #FCFCFF;
  background-color: #3256E3;
}
</style>
