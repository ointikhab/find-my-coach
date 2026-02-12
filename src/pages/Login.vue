<template>
  <div class="login-container">
    <h2>Login</h2>

    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model.trim="email"
          required
        />
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model.trim="password"
          required
        />
      </div>

      <p v-if="error" class="error">{{ error }}</p>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async submitForm() {
      this.error = null

      if (!this.email || !this.password) {
        this.error = 'Please fill all fields'
        return
      }

      try {
        await this.$store.dispatch('auth/login', {
          userId: this.email
        })

        // Redirect after login
        this.$router.push('/')
      } catch (err) {
        this.error = 'Invalid credentials'
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

button {
  padding: 0.6rem;
  background: #3490dc;
  color: white;
  border: none;
  cursor: pointer;
}

.error {
  color: red;
  margin-bottom: 1rem;
}
</style>
