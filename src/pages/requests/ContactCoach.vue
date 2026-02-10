<template>
  <base-card>
    <form @submit.prevent="submitForm" class="contact-form">

      <div class="form-control">
        <label for="email">Your Email</label>
        <input
          type="email"
          id="email"
          v-model.trim="email"
        />
      </div>

      <div class="form-control">
        <label for="message">Message</label>
        <textarea
          id="message"
          rows="5"
          v-model.trim="message"
        ></textarea>
      </div>

      <p v-if="!formIsValid" class="error">
        Please enter a valid email and a message.
      </p>

      <div class="actions">
        <base-button>Send Message</base-button>
      </div>

    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;

      if (
        !this.email ||
        !this.email.includes('@') ||
        !this.message
      ) {
        this.formIsValid = false;
        return;
      }

      const messageData = {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id
      };
      this.$store.dispatch('requests/contactCoach', messageData)

      // optional: reset form
      this.email = '';
      this.message = '';
    },
  },
};
</script>
<style scoped>
.contact-form {
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

