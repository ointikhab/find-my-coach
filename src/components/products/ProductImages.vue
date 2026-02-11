<template>
  <div class="images">
    <img :src="thumbnail" alt="Product Thumbnail" class="main-image" />
    <div class="thumbnails">
      <img v-for="(img, index) in images" :key="index" :src="img" alt="product image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductImages",
  props: {
    thumbnail: String,
    images: Array
  }
}
</script>

<style scoped>
.images {
  display: flex;
  flex-direction: column;
}

.main-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.thumbnails img {
  width: 60px;
  margin-right: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ddd;
}
</style>
