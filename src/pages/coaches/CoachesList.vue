<template>
  <Fragment>
    <section>FILTER</section>
    <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <CoachItem 
        v-for="coach in filteredCoaches" 
        :key="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :areas="coach.areas"
        :id="coach.id"
        :rate="coach.hourlyRate"
         />
      </ul>
      <h3 v-else>No Coaches found</h3>
    </base-card>
    </section>
  </Fragment>
</template>

<script>
import CoachItem from "../../components/coaches/CoachTile.vue";

export default {
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>
