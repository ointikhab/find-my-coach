<template>
  <li class="coach-item">
    <h3 class="coach-name">{{ fullName }}</h3>
    <span class="rate">{{ rate }} / hour</span>
    
    <div class="areas">
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>
    
    <div class="actions">
      <base-button mode="outline" link :to="coachContactLink">Contact</base-button>
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['id', 'firstName', 'lastName', 'areas', 'rate'],
    computed: {
        fullName(){
            return this.firstName + ' ' + this.lastName;
        },
        coachContactLink(){
            return this.$route.path + '/' +  this.id + '/contact';
        },
        coachDetailLink(){
            return this.$route.path + '/' +  this.id;
        }
    }
  }
</script>

<style scoped>
.coach-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.coach-item:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.coach-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.rate {
  font-size: 1rem;
  color: #777;
  margin-bottom: 16px;
}

.areas {
  margin-bottom: 16px;
}

.area {
  display: inline-block;
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 0.9rem;
  color: #555;
}

.actions {
  display: flex;
  gap: 12px;
}

.action-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.action-button:hover {
  background-color: #0056b3;
}

.action-button:active {
  background-color: #004085;
}

</style>
