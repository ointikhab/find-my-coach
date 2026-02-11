<template>
  <section>
    <base-card>
      <h2>Requests Received</h2>

      <ul v-if="hasRequests" class="requests-list">
        <RequestItem
          v-for="request in requests"
          :key="request.id"
          :email="request.userEmail"
          :message="request.userMessage"
        />
      </ul>

      <p v-else class="empty">
        You haven’t received any requests yet.
      </p>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem,
  },
  computed: {
    requests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>

<style scoped>
.requests-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.empty {
  text-align: center;
  font-weight: 600;
  color: #666;
}
</style>

