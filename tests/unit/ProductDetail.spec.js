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


  it('emits add-to-cart when ProductInfo emits event', async () => {
  const wrapper = mount(ProductDetail, {
    global: {
      plugins: [store, router],
      stubs: {
        ProductImages: true,
        ProductReviews: true,
        ProductInfo: {
          name: 'ProductInfo',   // ⭐ IMPORTANT
          template: '<div />'
        }
      }
    }
  })

  const product = { id: 99 }

  const child = wrapper.findComponent({ name: 'ProductInfo' })

  child.vm.$emit('add-to-cart', product)

  await wrapper.vm.$nextTick()

  expect(wrapper.emitted('add-to-cart')).toBeTruthy()
  expect(wrapper.emitted('add-to-cart')[0]).toEqual([product])
})

  
})
