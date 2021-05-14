<template>
  <div class="flex">
    <div class="type mr-4">
      <label class="block text-sm text-gray-700">Filter by:</label>
      <select
        v-model="type"
        class="mt-1 block w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">All</option>
        <option value="Jacket">All Jackets</option>
        <option value="Shoe">All Shoe</option>
        <option value="T-shirt">All T-shirt</option>
        <option value="Pantolon">All Trousers</option>
      </select>
    </div>
    <div class="sort">
      <label class="block text-sm text-gray-700">Sort by:</label>
      <select
        v-model="sort"
        class="mt-1 block w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="createdDate_desc">New Arrivals</option>
        <option value="price_asc">Increasing Price</option>
        <option value="price_desc">Descending Price</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right .5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }
</style>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      type: '',
      sort: 'createdDate_desc'
    }
  },
  methods: {
    ...mapActions([
      'searchProducts'
    ])
  },
  watch: {
    sort: function (val) {
      this.searchProducts([this.type, val])
    },
    type: function (val) {
      this.searchProducts([val, this.sort])
    }
  }
}
</script>
