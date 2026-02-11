<template>
  <div class="info">
    <h1>{{ product.title }}</h1>
    <button class="update-btn" @click="updateTitle">Update Title</button>
    <p class="category">{{ product.category }} - {{ product.brand }}</p>
    <p class="price">$ {{ product?.price?.toFixed(2) }}
      <span v-if="product.discountPercentage">({{ product.discountPercentage }}% off)</span>
    </p>
    <p class="availability" :class="availabilityClass">{{ product.availabilityStatus }}</p>
    <p class="stock">Stock: {{ product.stock }}</p>
    <p class="description">{{ product.description }}</p>
    <p class="warranty">Warranty: {{ product.warrantyInformation }}</p>
    <p class="shipping">Shipping: {{ product.shippingInformation }}</p>
    <p class="return-policy">Return: {{ product.returnPolicy }}</p>
    <p class="min-order">Minimum Order: {{ product.minimumOrderQuantity }}</p>
    <button class="buy-btn" @click="$emit('add-to-cart', product)">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  props: {
    product: Object
  },
  computed: {
    availabilityClass() {
      const status = this.product.availabilityStatus.toLowerCase()
      if (status.includes('low')) return 'low-stock'
      if (status.includes('out')) return 'out-stock'
      return 'in-stock'
    }
  },
  methods: {
    updateTitle(){
        const dateStr  = new Date().toISOString()
        const updatedData = {
            id: this.product.id,
            title: `${this.product.title}_${dateStr}`
        }
        console.log('updating the data', updatedData)
        this.$store.dispatch('products/updateProduct', updatedData)
    }
  }
}
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
}

.availability.in-stock { color: green; }
.availability.low-stock { color: orange; }
.availability.out-stock { color: red; }

.buy-btn {
  background-color: #3490dc;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

.update-btn {
  background-color: #3490dc;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
