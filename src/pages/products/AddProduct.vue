<template>
  <base-card>
    <form @submit.prevent="submitForm" class="product-form">

      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" type="text" v-model.trim="title" />
      </div>

      <div class="form-control">
        <label for="price">Price</label>
        <input id="price" type="number" v-model.number="price" min="0" />
      </div>

      <div class="form-control">
        <label for="rating">Rating (1–5)</label>
        <input
          id="rating"
          type="number"
          min="1"
          max="5"
          step="0.1"
          v-model.number="rating"
        />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          rows="4"
          v-model.trim="description"
        ></textarea>
      </div>

      <p v-if="!formIsValid" class="error">
        Please fill all fields correctly.
      </p>

      <div class="actions">
        <base-button>Add Product</base-button>
      </div>

    </form>
  </base-card>
</template>

<script>
export default {
  emits: ['save-product'],
  data() {
    return {
      title: '',
      description: '',
      price: null,
      rating: null,
      formIsValid: true
    }
  },
  methods: {
    addNewProduct(data){
      this.$store.dispatch('products/addProduct', data)
    },
    submitForm() {
      this.formIsValid = true

      if (
        !this.title ||
        !this.description ||
        this.price === null ||
        this.rating === null ||
        this.rating < 1 ||
        this.rating > 5
      ) {
        this.formIsValid = false
        return
      }

      const productData = {
        title: this.title,
        description: this.description,
        price: this.price,
        rating: this.rating
      }
      this.addNewProduct(productData)
    }
  }
}
</script>

<style scoped>
.product-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-control {
  display: flex;
  flex-direction: column;
}

.form-control label {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.form-control input,
.form-control textarea {
  font: inherit;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.error {
  color: #b00020;
  font-weight: 600;
}

.actions {
  margin-top: 1rem;
  text-align: right;
}
</style>
