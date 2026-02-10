<template>
  <base-card>
    <form @submit.prevent="submitForm" class="coach-form">

      <div class="form-control">
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" v-model.trim="firstName" />
      </div>

      <div class="form-control">
        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" v-model.trim="lastName" />
      </div>

      <div class="form-control">
        <label for="rate">Hourly Rate</label>
        <input id="rate" type="number" v-model.number="rate" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          rows="4"
          v-model.trim="description"
        ></textarea>
      </div>

      <div class="form-control">
        <h3>Areas of Expertise</h3>

        <div class="checkbox-group">
          <span>
            <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
            <label for="frontend">Frontend</label>
          </span>

          <span>
            <input type="checkbox" id="backend" value="backend" v-model="areas" />
            <label for="backend">Backend</label>
          </span>

          <span>
            <input type="checkbox" id="database" value="database" v-model="areas" />
            <label for="database">Database</label>
          </span>

          <span>
            <input type="checkbox" id="cloud" value="cloud" v-model="areas" />
            <label for="cloud">Cloud</label>
          </span>
        </div>
      </div>

      <p v-if="!formIsValid" class="error">
        Please fill all fields and select at least one area.
      </p>

      <div class="actions">
        <base-button>Add Coach</base-button>
      </div>

    </form>
  </base-card>
</template>

<script>
export default {
  emits: ['save-coach'],
  data() {
    return {
      firstName: '',
      lastName: '',
      rate: null,
      description: '',
      areas: [],
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;

      if (
        !this.firstName ||
        !this.lastName ||
        !this.rate ||
        !this.description ||
        this.areas.length === 0
      ) {
        this.formIsValid = false;
        return;
      }

      const coachData = {
        firstName: this.firstName,
        lastName: this.lastName,
        hourlyRate: this.rate,
        description: this.description,
        areas: this.areas,
      };

      this.$emit('save-coach', coachData);
    },
  },
};
</script>

<style scoped>
.coach-form {
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

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.checkbox-group span {
  display: flex;
  align-items: center;
  gap: 0.4rem;
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
