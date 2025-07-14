<script setup lang="ts">
  //defineProps<{ mediaItems: MediaItem[]}>()
  import Card from './Card.vue'
  import placeholder from '../../assets/placeholder.svg'
</script>

<template>
  <main class="content">
    <Card 
      v-for="n in 8"
      :key="n"
      Title="Batman"
      Year="1997" 
      imdbID="aaaa" 
      :Poster="placeholder"
      Type="movie"
    />
  </main>
</template>

<style scoped>
.content {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px
}
</style>
