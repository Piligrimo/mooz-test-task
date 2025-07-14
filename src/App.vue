<script setup lang="ts">
import Header from './components/Header.vue';
import SearchInfo from './components/SearchInfo.vue';
import Content from './components/Content/index.vue';
import Pagination from './components/Pagination.vue';
import { getMediaItems } from './api';
import { debounce } from 'lodash';
import { ref } from 'vue';
import { type MediaItem } from './utils/types';

const search = ref('')
const items = ref<MediaItem[] | null>(null)
const total = ref(0)
const page = ref(1)
const isPending = ref(false)
const errorMessage = ref('')

const debouncedGetMediaItems = debounce(async (searchTitle) => {
  page.value = 1
  isPending.value = true
  const data = await getMediaItems(searchTitle, 1)
  isPending.value = false

  if (data.Error) {
    errorMessage.value = data.Error
    items.value = []
    total.value = 0
    return
  }
  items.value = data.Search
  total.value = data.totalResults
}, 300)

const handleSearch = (searchTitle: string) => {
  search.value = searchTitle
  if (!searchTitle) return
  debouncedGetMediaItems(searchTitle)
}

</script>

<template>
  <div>
    <Header :search-title="search" @search="handleSearch"/>
    <SearchInfo :search="search" :count="total" :is-pending="isPending"/>
    <Content :media-items="items" :is-pending="isPending" :error-message="errorMessage"/>
    <Pagination v-if="total > 10" :current-page="page" :total="total"/>
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
