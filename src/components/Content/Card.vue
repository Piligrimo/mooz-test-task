<script setup lang="ts">
  import { type MediaItem } from '../../utils/types.ts'
  import placeholder from '../../assets/placeholder.png'
  defineProps<MediaItem>()

  const handleImageError = (event: Event) => {
    const target = event.target as HTMLInputElement
    target.src = placeholder
  }
</script>

<template>
  <div class="card">
    <div class="card__image-container">
     <img class="card__poster" :src="Poster" @error="handleImageError"/>
    </div>
    <div class="card__info">
      <p class="card__text">Name: {{Title}}</p>
      <p class="card__text">Year: {{Year}}</p>
      <p class="card__text">imdbID: {{imdbID}}</p>
      <p class="card__text">Type: {{Type}}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: fit-content;
}

.card__info {
  margin-top: 20px;
  padding: 0 15px
}

.card__image-container {
  height: 270px;
  width: 245px;
  border-radius: 10px;
  border: 1px solid #3256E3;
  display: block;
  overflow: hidden;
}

.card__poster {
  width: 100%;
}

.card__text {
  font-size: 16px;
  margin: 0;
}
</style>
