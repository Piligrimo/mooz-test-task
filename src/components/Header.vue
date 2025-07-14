<script setup lang="ts">
import { ref } from 'vue';

  const search = ref('')
</script>

<template>
  <header class="header">
    <img src="../assets/logo.svg" class="header__logo" alt="Mooz" />
    <input  class="header__search" v-model="search" placeholder="Search"/>
    <div class="header__user">
      <img src="../assets/avatar.svg" class="header__user-avatar" alt="user" />
      <span>Your name</span>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.header__search {
 border-radius: 5px;
 border: 1px solid #E6EAF5;
 background-color: #FCFCFF;
 height: 40px;
 width: 280px;
 padding: 10px 15px;
 font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.header__logo {
  height: 36px;
}

.header__user {
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 10px
}
</style>
