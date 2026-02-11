import { describe, it, expect } from 'vitest'

import mutations from '@/store/modules/products/mutations'

describe('Products Mutations', () => {

  it('removes product from state when deleteProduct is called', () => {

    // Fake state
    const state = {
      products: [
        { id: 1, title: 'Book' },
        { id: 2, title: 'Pen' },
        { id: 3, title: 'Laptop' }
      ]
    }

    // Call mutation
    mutations.deleteProduct(state, { id: 2 })

    // Check result
    expect(state.products).toHaveLength(2)

    expect(state.products).toEqual([
      { id: 1, title: 'Book' },
      { id: 3, title: 'Laptop' }
    ])
  })
  it('adds product to state when addProduct is called', () => {

  // Fake state
  const state = {
    products: [
      { id: 1, title: 'Book' },
      { id: 2, title: 'Pen' }
    ]
  }

  // New product
  const newProduct = {
    id: 3,
    title: 'Laptop'
  }

  // Call mutation
  mutations.addProduct(state, newProduct)

  // Check length
  expect(state.products).toHaveLength(3)

  // Check first item (because of unshift)
  expect(state.products[0]).toEqual(newProduct)

  // Optional: Check full array
  expect(state.products).toEqual([
    { id: 3, title: 'Laptop' },
    { id: 1, title: 'Book' },
    { id: 2, title: 'Pen' }
  ])
})
})
