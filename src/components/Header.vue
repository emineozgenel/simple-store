<template>
  <header class="header container mx-auto px-5 py-8">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <h1 class="header__title mb-4 md:mb-0">Dummy Store!</h1>
      <Filter />
    </div>
  </header>
</template>

<script>
import Filter from './Filter.vue'

export default {
  name: 'Header',
  components: {
    Filter
  }
}
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid #eee;
    &__title {
      font-size: 24px;
      font-weight: 800;
    }
  }
</style>
