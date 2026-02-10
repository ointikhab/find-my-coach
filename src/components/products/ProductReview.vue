<template>
  <div class="reviews-section">
    <h2>Reviews</h2>
    <div v-if="reviews && reviews.length">
      <div v-for="(review, index) in reviews" :key="index" class="review-card">
        <p class="reviewer">{{ review.reviewerName }} ({{ review.rating }}/5)</p>
        <p class="comment">{{ review.comment }}</p>
        <p class="date">{{ formatDate(review.date) }}</p>
      </div>
    </div>
    <p v-else>No reviews yet</p>
  </div>
</template>

<script>
export default {
  name: "ProductReviews",
  props: {
    reviews: Array
  },
  methods: {
    formatDate(dateStr) {
      const d = new Date(dateStr)
      return d.toLocaleDateString() + ' ' + d.toLocaleTimeString()
    }
  }
}
</script>

<style scoped>
.reviews-section { margin-top: 2rem; }

.review-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.reviewer { font-weight: bold; margin-bottom: 0.3rem; }
.comment { margin-bottom: 0.3rem; }
.date { font-size: 0.8rem; color: #666; }
</style>
