<template>
  <li class="request-item">
    <p class="email">{{ email }}</p>
    <p class="message">{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.request-item {
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
}

.request-item:last-child {
  border-bottom: none;
}

.email {
  font-weight: 600;
  color: #3a0061;
  margin-bottom: 0.25rem;
}

.message {
  margin: 0;
}
</style>
