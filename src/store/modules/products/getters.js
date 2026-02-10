
export default {
    products(state){
        return state.products
    },
    productDetails(state){
        return state.productDetails
    },
    hasProducts(state){
      return state.products && state.products.length > 0
    }
}