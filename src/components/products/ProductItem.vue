<template>
  <div class="product-card" @click="goToDetail">
    <h3>{{ product.title }}</h3>
    <p class="description">{{ product.description }}</p>
    <p class="price">$ {{ product.price.toFixed(2) }}</p>

    <div class="actions">
      <!-- stop click bubbling -->
      <button @click.stop="addToCart">
        Add to Cart
      </button>

      <button 
      data-test="delete-btn"
      class="delete" @click.stop="deleteProduct">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetail() {
      this.$router.push(`/products/${this.product.id}`)
    },
    addToCart() {
      this.$emit('add-to-cart', this.product)
    },
    deleteProduct() {
        this.$store.dispatch('products/deleteProduct', this.product.id)
    }
  }
}
</script>

<style scoped>
.product-card {
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.product-card h3 {
  margin: 0 0 0.5rem 0;
}

.description {
  font-size: 0.9rem;
  color: #555;
}

.price {
  font-weight: bold;
  margin-bottom: 1rem;
}

button {
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

button:first-child {
  background-color: #3490dc;
  color: white;
}

button:first-child:hover {
  background-color: #2779bd;
}

button.delete {
  background-color: #e3342f;
  color: white;
}

button.delete:hover {
  background-color: #cc1f1a;
}
</style>
