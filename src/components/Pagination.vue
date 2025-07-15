<script setup lang="ts">
import { computed } from 'vue';

  const props = defineProps<{ currentPage: number, total: number}>()
  const emit = defineEmits<{
    (e: 'page-change', value: number): void
  }>()

  const ITEMS_PER_PAGE = 10
  const PAGER_COUNT = 5
  const HALF_PAGER_COUNT = Math.floor(PAGER_COUNT / 2)
  const ELLIPSIS_DEPTH = 2

  const pagesCount = computed(() => Math.floor(props.total / ITEMS_PER_PAGE) + 1)

  const intervalStart = computed(() => Math.max(props.currentPage - HALF_PAGER_COUNT - 1, 1))
  const intervalEnd = computed(() => Math.min(props.currentPage + HALF_PAGER_COUNT, pagesCount.value-1))

  const isActive = (n: number) => n === props.currentPage 

  const handleEllipsisClick = (side: 'left' | 'right') => {
    if (side === 'left') {
      pageChange(Math.max(1, props.currentPage - HALF_PAGER_COUNT - ELLIPSIS_DEPTH))
    } else {
      pageChange(Math.min(props.currentPage + HALF_PAGER_COUNT + ELLIPSIS_DEPTH, pagesCount.value))
    }
  }

  const handlePrevPageClick = () => {
    if (!isActive(1))
      pageChange(props.currentPage - 1)
  }
  const handleNextPageClick = () => {
    if (!isActive(pagesCount.value))
      pageChange(props.currentPage + 1)
  }

  const pageChange = (pageNumber: number) => {
    emit('page-change', pageNumber)
  }

</script>

<template>
  <div class="pagination">
    <div 
      class="pagination__button"
      :class="{_disabled: isActive(1)}"
      @click="handlePrevPageClick"
    >
      <svg class="pagination__arrow">
        <use href="../assets/arrow-left.svg"></use>
      </svg>
    </div>
    <div
      class="pagination__button" 
      :class="{'_is-active':isActive(1)}"
      @click="pageChange(1)"
    >
      1
    </div>
    <div
      v-if="intervalStart > 1" 
      class="pagination__button"
      @click="handleEllipsisClick('left')"
    >
      ...
    </div>
    <template v-if="intervalEnd - intervalStart > 0">
      <div 
          v-for="n in intervalEnd - intervalStart" 
          class="pagination__button"
          :class="{'_is-active': isActive(n+intervalStart)}"
          :key="n+intervalStart"
          @click="pageChange(n + intervalStart)"
      >
        {{ n + intervalStart }}
      </div>
    </template>
  
    <div 
      v-if="intervalEnd < pagesCount-1"
      class="pagination__button"
      @click="handleEllipsisClick('right')"
    >
      ...
    </div>
    <div 
      v-if="intervalEnd > 0"
      class="pagination__button" 
      :class="{'_is-active': isActive(pagesCount)}"
      @click="pageChange(pagesCount)"
    > 
      {{ pagesCount }}
    </div>
    <div 
      class="pagination__button" 
      :class="{_disabled: isActive(pagesCount)}"
      @click="handleNextPageClick"
    >
      <svg class="pagination__arrow">
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
  cursor: pointer;
}

.pagination__button:hover,
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

.pagination__button._disabled{
   cursor: default;
}
.pagination__button._disabled .pagination__arrow{
  color: #929BBC;
}

@media only screen and (max-width: 570px) {
  .pagination__button {
    padding: 5px 8px;
    font-size: 11px;
  }
}
</style>
