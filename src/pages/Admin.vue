<template>
  <div class="admin-container">
    <h1>This is Admin Page Only</h1>
    <!-- <p>You must be logged in to see this page.</p> -->

    <!-- <button @click="logout">Logout</button> -->
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
//   methods: {
//     logout() {
//       this.$store.dispatch('auth/logout')
//       this.$router.push('/login')
//     }
//   }
}
</script>

<style scoped>
.admin-container {
  text-align: center;
  margin-top: 4rem;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  background: #e3342f;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
