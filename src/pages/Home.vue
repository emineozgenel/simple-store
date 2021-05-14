<template>
  <div class="container mx-auto pt-10 px-5">
    <p v-if="errors.message" class="bg-red-200 p-6 rounded">
      {{ errors?.message }}
    </p>
    <Spinner v-if='errors.length === 0 && products.length === 0' />
    <div class="flex flex-wrap md:-mx-2">
      <template v-for="(product, index) in products" :key="index">
        <ProductCard :product="product" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '../components/ProductCard'
import Spinner from '../components/Spinner'

export default {
  components: {
    ProductCard,
    Spinner
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      errors: state => state.products.errors
    })
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
