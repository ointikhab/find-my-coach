import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createStore } from 'vuex'


import ProductItem from '@/components/products/ProductItem.vue'

describe('ProductItem.vue', () => {

  const product = {
    id: 1,
    title: 'Book',
    description: 'Nice book',
    price: 25
  }

  describe('Rendering', () => {

    it('renders product information', () => {
      const wrapper = mount(ProductItem, {
        props: { product }
      })

      expect(wrapper.text()).toContain('Book')
      expect(wrapper.text()).toContain('Nice book')
      expect(wrapper.text()).toContain('25')
    })

  })

  describe('Add to Cart', () => {

    it('emits add-to-cart event', async () => {

      const wrapper = mount(ProductItem, {
        props: { product }
      })

      await wrapper.find('button').trigger('click')

      expect(wrapper.emitted('add-to-cart')).toBeTruthy()
    })

  })

  describe('Delete', () => {

    it('dispatches deleteProduct', async () => {

      const actions = {
        deleteProduct: vi.fn()
      }

      const store = createStore({
        modules: {
          products: {
            namespaced: true,
            actions
          }
        }
      })

      const wrapper = mount(ProductItem, {
        props: { product },
        global: {
          plugins: [store],
          mocks: {
            $router: { push: vi.fn() }
          }
        }
      })

      await wrapper
        .find('[data-test="delete-btn"]')
        .trigger('click')

      expect(actions.deleteProduct).toHaveBeenCalled()
    })

  })

})
