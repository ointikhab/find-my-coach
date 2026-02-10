export default {
    async registerCoach(context, data){
      const userId = context.rootGetters.userId
      const coachData = {
        firstName: data.firstName,
        lastName: data.lastName,
        areas: data.areas,
        description: data.description,
        hourlyRate: data.hourlyRate,
      }

      const response = await fetch(`https://practice-7a1ab.firebaseio.com/coaches/${userId}.json`,{
        method: 'POST',
        body: JSON.stringify(coachData)
      },
    )
     const responseData = await response.json()
     if(!response.ok) {
        console.log('error while making an api call', )
     }
      context.commit('registerCoach', coachData)
    },

    async loadCoaches(context, data){
      const response = await fetch('https://dummyjson.com/products')
      if(!response.ok) {
        console.log('error while fetching data', )
     }
     const responseData = await response.json()
     console.log('response data for loadCoaches is', responseData[0])
    }
}