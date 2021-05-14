<template>
  <div class="w-full sm:w-2/4 lg:w-1/5 md:px-2 mb-4">
    <div class="h-full border border-gray-150 p-2 rounded relative overflow-hidden">
      <div>
        <img :src="product.image" :alt="product.name"/>
      </div>
      <p class="mt-4 text-center font-semibold">{{ product.name }}</p>
      <p class="text-lg mt-4 text-center text-gray-400 font-semibold">{{ formatNumber(product.price) }}</p>
      <p v-if="product.stock <= 5" class="badge absolute bg-red-500 top-4 -left-6 text-gray-100 text-xs pl-8 pr-10 py-2">
        LAST {{ product.stock }} STOCK
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  methods: {
    formatNumber (price) {
      return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', minimumFractionDigits: 2 }).format(price)
    }
  }
}
</script>

<style scoped lang="scss">
.badge {
  transform: rotate(-34deg);
}
</style>
