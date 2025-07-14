<script setup lang="ts">
import { computed } from 'vue';

  const props = defineProps<{ currentPage: number, total: number}>()

  const ITEMS_PER_PAGE = 10;
  const PAGER_COUNT = 5;
  const HALF_PAGER_COUNT = Math.floor(PAGER_COUNT / 2)

  const pagesCount = computed(() => Math.floor(props.total / ITEMS_PER_PAGE))

  const intervalStart = computed(() => Math.max(props.currentPage - HALF_PAGER_COUNT - 1, 1))
  const intervalEnd = computed(() => Math.min(props.currentPage + HALF_PAGER_COUNT, pagesCount.value-1))

  const isActive = (n: number) => n === props.currentPage 

</script>

<template>
  <div class="pagination">
    <div class="pagination__button">
      <svg class="pagination__arrow" :class="{_disabled: isActive(1)}">
        <use href="../assets/arrow-left.svg"></use>
      </svg>
    </div>
    <div class="pagination__button" :class="{'_is-active':isActive(1)}">1</div>
    <div v-if="intervalStart > 1" class="pagination__button">...</div>
    <template v-if="intervalEnd - intervalStart > 0">
      <div 
          v-for="n in intervalEnd - intervalStart" 
          class="pagination__button"
          :class="{'_is-active': isActive(n+intervalStart)}"
          :key="n+intervalStart"
      >
        {{ n+intervalStart }}
      </div>
    </template>
  
    <div v-if="intervalEnd < pagesCount-1" class="pagination__button">...</div>
    <div v-if="intervalEnd > 0" class="pagination__button" :class="{'_is-active': isActive(pagesCount)}">{{ pagesCount }}</div>
    <div class="pagination__button">
      <svg class="pagination__arrow" :class="{_disabled: isActive(pagesCount)}">
        <use href="../assets/arrow-right.svg"></use>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  margin-top: 84px;
  display: flex;
  width: 100%;
  justify-content: center;
}

.pagination__button {
  background-color: #FCFCFF;
  padding: 5px 12px;
  border: 1px solid #E6EAF5;
  margin-right: -1px;
}

.pagination__button._is-active {
  background-color: #F3F5F9;
}

.pagination__button:first-child {
  border-radius: 5px 0 0 5px;
}

.pagination__button:last-child {
  border-radius: 0 5px 5px 0;
}

.pagination__arrow {
  color: #3256E3;
  width: 12px;
  height: 12px;
}
.pagination__arrow._disabled {
  color: #929BBC;
}
</style>
