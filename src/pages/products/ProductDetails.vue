<template>
  <section class="product-detail" v-if="product">
    <ProductImages
      :thumbnail="product.thumbnail"
      :images="product.images"
    />
    <ProductInfo
      :product="product"
      @add-to-cart="addToCart"
    />
    <ProductReviews :reviews="product.reviews"/>
  </section>

  <p v-else>Loading product details...</p>
</template>


<script>
import ProductImages from '../../components/products/ProductImages.vue'
import ProductInfo from '../../components/products/ProductInfo.vue'
import ProductReviews from '../../components/products/ProductReview.vue'

export default {
  name: "ProductDetail",
  components: {
    ProductImages,
    ProductInfo,
    ProductReviews
  },
  computed: {
   product() {
       const productDetail = this.$store.getters["products/productDetails"];
       console.log('product details is below', productDetail)
       return productDetail
   }
  },
  methods: {
    loadProductDetails(){
      this.$store.dispatch('products/loadProductDetails', this.$route.params.id)
    },
    addToCart(product) {
      this.$emit('add-to-cart', product)
    }
  },
  created(){
    this.loadProductDetails();
  },
}
</script>

<style scoped>
.product-detail {
  padding: 2rem;
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
