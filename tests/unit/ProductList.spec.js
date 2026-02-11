import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createStore } from 'vuex'

import ProductList from '@/pages/products/ProductList.vue'

// Fake ProductItem component
const ProductItemStub = {
  template: '<div class="product-item"></div>',
  props: ['product']
}

describe('ProductList.vue', () => {

  let store
  let actions
  let getters

  beforeEach(() => {

    // Fake products
    const products = [
      { id: 1, title: 'Book', description: 'book description', price: 23.99 },
      { id: 2, title: 'Pen', description: 'pen description', price: 34.21 }
    ]

    // Mock action
    actions = {
      loadProducts: vi.fn()
    }

    // Mock getter
    getters = {
      products: () => products
    }

    // Create store
    store = createStore({
      modules: {
        products: {
          namespaced: true,
          actions,
          getters
        }
      }
    })
  })

  // ✅ Test 1: Action called
  it('dispatches loadProducts on created', () => {

    mount(ProductList, {
      global: {
        plugins: [store]
      }
    })

    expect(actions.loadProducts).toHaveBeenCalled()
  })

  // ✅ Test 2: Products rendered
  it('renders ProductItem for each product', () => {

    const wrapper = mount(ProductList, {
      global: {
        plugins: [store],
        stubs: {
          ProductItem: ProductItemStub
        }
      }
    })

    const items = wrapper.findAll('.product-item')

    expect(items.length).toBe(2)
  })

})
