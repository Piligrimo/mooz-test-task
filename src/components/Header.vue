<script setup lang="ts">

  defineProps<{ searchTitle: string }>()

  const emit = defineEmits<{
    (e: 'search', value: string): void
  }>()

  const handleSearch =  (event: Event) => {
    const target = event.target as HTMLInputElement
     
    emit('search', target.value)
  }
</script>

<template>
  <header class="header">
    <img src="../assets/logo.svg" class="header__logo" alt="Mooz" />
    <img src="../assets/logo-mini.svg" class="header__logo-mini" alt="Mooz" />
    <input class="header__search" placeholder="Search" :value="searchTitle" @input="handleSearch"/>
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
  align-items: center;
  gap: 10px;
}

.header__search {
  border-radius: 5px;
  border: 1px solid #E6EAF5;
  background-color: #FCFCFF;
  height: 40px;
  width: 280px;
  padding: 10px 40px 10px 15px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-image: url("../assets/search.svg");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

.header__logo {
  height: 36px;
}

.header__logo-mini {
  height: 18px;
  display: none;
}

.header__user {
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 10px
}

@media only screen and (max-width: 570px) {
  .header__logo {
    display: none;

  }

  .header__logo-mini {
    display: block;
  }

  .header__search {
    height: 24px;
    width: 120px;
    font-size: 12px;
    padding: 5px 40px 5px 10px;
  }

  .header__user {
    font-size: 11px;
  }

  .header__user-avatar {
    height: 18px;
  }

}
</style>
