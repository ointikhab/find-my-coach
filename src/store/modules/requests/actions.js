export default {
    contactCoach(context, payload){
      const newReq = {
        id: new Date().toDateString(),
        coachId: payload.coachId,
        userEmail: payload.email,
        userMessage: payload.message
      }
      context.commit('addRequests', newReq)
    }
}