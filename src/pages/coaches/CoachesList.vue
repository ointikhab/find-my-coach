<template>
  <Fragment>
    <section>
        <CoachFilter @change-filter="setFilters"/>
    </section>
    <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
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
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from "../../components/coaches/CoachTile.vue";


export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data(){
    return {
        activeFilters:{
            frontend: true,
            backend: true,
            database: true,
            cloud: true,
        },
    }
  },
  computed: {
    filteredCoaches() {
  const coaches = this.$store.getters["coaches/coaches"];

  return coaches.filter(coach => {
    if (this.activeFilters.frontend === true && coach.areas.includes('frontend')) {
      return true;
    }
    if (this.activeFilters.backend === true && coach.areas.includes('backend')) {
      return true;
    }
    if (this.activeFilters.database === true && coach.areas.includes('database')) {
      return true;
    }
    if (this.activeFilters.cloud === true && coach.areas.includes('cloud')) {
      return true;
    }
    return false;
  });
}
,
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilters(updatedFilters){
      console.log('value for updated filters are', updatedFilters)
      this.activeFilters = updatedFilters
      console.log('active filters after setting up state', this.activeFilters);
    },
    loadCoaches(){
      this.$store.dispatch('coaches/loadCoaches')
    }
  }
};
</script>
