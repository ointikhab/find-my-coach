export default {
    registerCoach(state, payload){
      state.coaches.push(payload)
    },
    setProducts(state, payload){
      state.products = payload
    },
    setProductDetails(state, payload){
       state.productDetails = payload
    },
    deleteProduct(state, payload){
      state.products = state.products.filter(product=>product.id != payload.id)
    },
    addProduct(state, product) {
    state.products.unshift(product)
    }
}
