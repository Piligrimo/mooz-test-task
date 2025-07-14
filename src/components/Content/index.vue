<script setup lang="ts">
  import Card from './Card.vue'
  import type { MediaItem } from '../../utils/types';
  import Loading from './Loading.vue';
  import NotFound from './NotFound.vue';

  defineProps<{
    mediaItems: MediaItem[] | null,
    isPending: boolean,
    errorMessage: string
  }>()
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
      <NotFound :error-message="errorMessage"/>
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
