export default {
  async loadProducts(context) {
    const response = await fetch('https://dummyjson.com/products')

    if (!response.ok) {
      console.log('error while fetching data')
      return
    }

    const responseData = await response.json()
    context.commit('setProducts', responseData.products)
  },

  async loadProductDetails(context, productId) {
    const response = await fetch(
      `https://dummyjson.com/products/${productId}`
    )

    if (!response.ok) {
      console.log('error while fetching product details')
      return
    }

    const responseData = await response.json()

    console.log('product details:', responseData)

    context.commit('setProductDetails', responseData)
  },
  async deleteProduct(context, productId) {
    const response = await fetch(
      `https://dummyjson.com/products/${productId}`,
      {
        method: "DELETE"
      }
    )

    if (!response.ok) {
      console.log('error while fetching product details')
      return
    }

    const responseData = await response.json()

    console.log('deleted  product details:', responseData)

    context.commit('deleteProduct', {id:responseData.id})
  },
  async addProduct(context, productData) {
  const response = await fetch(
    'https://dummyjson.com/products/add',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    }
  )

  if (!response.ok) {
    console.log('error while adding product')
    return
  }

  const responseData = await response.json()
  console.log('added product:', responseData)

  // Optimistically add product to store
  context.commit('addProduct', responseData)
}

}
