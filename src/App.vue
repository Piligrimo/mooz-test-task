<script setup lang="ts">
import Header from './components/Header.vue';
import SearchInfo from './components/SearchInfo.vue';
import Content from './components/Content/index.vue';
import Pagination from './components/Pagination.vue';
</script>

<template>
  <div>
    <Header />
    <SearchInfo search="Batman" :count="222" />
    <Content/>
    <Pagination :current-page="22" :total="222"/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
