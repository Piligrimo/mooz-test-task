<script setup lang="ts">
  import Card from './Card.vue'
  import type { MediaItem } from '../../utils/types';
  import Loading from './Loading.vue';
  defineProps<{ mediaItems: MediaItem[] | null, isPending: boolean}>()
</script>

<template>
  <div>
    <Loading v-if="isPending" />
    <main v-else-if="mediaItems && mediaItems.length" class="content">
      <Card 
        v-for="item in mediaItems"
        :key="item.imdbID"
        :Title="item.Title"
        :Year="item.Year" 
        :imdbID="item.imdbID" 
        :Poster="item.Poster"
        :Type="item.Type"
      />    
    </main>
    <div v-else-if="mediaItems?.length === 0">
      <h1>Nothing found</h1>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px
}
</style>
