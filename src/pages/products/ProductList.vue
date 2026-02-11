<template>
  <section class="product-list">
    <h2>Our Products</h2>
    <div class="products">
      <ProductItem 
        v-for="product in productList"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import ProductItem from '../../components/products/ProductItem.vue'

export default {
  name: "ProductList",
  components: { ProductItem },
  computed: {
   productList() {
       return this.$store.getters["products/products"];
   }
  },
  methods: {
    loadProducts(){
      this.$store.dispatch('products/loadProducts')
    }
  },
  created(){
    this.loadProducts();
  }

  
}
</script>

<style scoped>
.product-list {
  padding: 2rem;
  background-color: #f9f9f9;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
</style>
