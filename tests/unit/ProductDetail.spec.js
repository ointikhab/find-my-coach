import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/pages/products/ProductDetails.vue'

describe('ProductDetail.vue', () => {
  let store
  let actions
  let router

  beforeEach(async () => {
    actions = {
      loadProductDetails: vi.fn()
    }

    store = createStore({
      modules: {
        products: {
          namespaced: true,
          actions,
          getters: {
            productDetails: () => ({
              id: 1,
              title: 'Test Product',
              thumbnail: 'img.jpg',
              images: ['img1.jpg'],
              reviews: [],
              availabilityStatus: 'low-stock'
            })
          }
        }
      }
    })

    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/products/:id',
          component: ProductDetail
        }
      ]
    })

    router.push('/products/1')
    await router.isReady()
  })

  it('dispatches loadProductDetails on created', () => {
    mount(ProductDetail, {
      global: {
        plugins: [store, router]
      }
    })

    expect(actions.loadProductDetails).toHaveBeenCalled()
  })

  it('renders product detail when product exists', async () => {
    const wrapper = mount(ProductDetail, {
      global: {
        plugins: [store, router]
      }
    })

    expect(wrapper.text()).toContain('Test Product')
  })

  it('shows loading text when no product', async () => {
    const emptyStore = createStore({
      modules: {
        products: {
          namespaced: true,
          actions,
          getters: {
            productDetails: () => null
          }
        }
      }
    })

    const wrapper = mount(ProductDetail, {
      global: {
        plugins: [emptyStore, router]
      }
    })

    expect(wrapper.text()).toContain('Loading product details...')
  })
})
