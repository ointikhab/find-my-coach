<template>
  <section>
    Coaches Registration
   
   <CoachForm @save-coach="saveCoach"/>

  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue'

export default {
   components: {
    CoachForm
   },
   methods: {
    saveCoach(coachData){
      this.$store.dispatch('coaches/registerCoach', coachData)
      // this.$router.replace('/coaches')
    }
   }
}
</script>