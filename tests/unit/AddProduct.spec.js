import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createStore } from 'vuex'

import AddProductForm from '@/pages/products/AddProduct.vue'

describe('AddProductForm.vue', () => {

  let actions
  let store

  beforeEach(() => {

    actions = {
      addProduct: vi.fn()
    }

    store = createStore({
      modules: {
        products: {
          namespaced: true,
          actions
        }
      }
    })

  })

  // Factory
  function factory() {
    return mount(AddProductForm, {
      global: {
        plugins: [store],

        stubs: {
          'base-card': {
            template: '<div><slot /></div>'
          },
          'base-button': {
            template: '<button><slot /></button>'
          }
        }
      }
    })
  }

  // ❌ Invalid form
  it('shows error if form is invalid', async () => {

    const wrapper = factory()

    await wrapper.find('form').trigger('submit')

    expect(wrapper.text())
      .toContain('Please fill all fields correctly.')

  })

  // ✅ Valid form
  it('dispatches addProduct when form is valid', async () => {

    const wrapper = factory()

    await wrapper.find('#title').setValue('Test Product')
    await wrapper.find('#description').setValue('Nice product')
    await wrapper.find('#price').setValue(100)
    await wrapper.find('#rating').setValue(4)

    await wrapper.find('form').trigger('submit')

    expect(actions.addProduct).toHaveBeenCalled()
  })

  // ⚠️ Rating validation
  it('does not allow rating outside 1-5', async () => {

    const wrapper = factory()

    await wrapper.find('#title').setValue('Test')
    await wrapper.find('#description').setValue('Desc')
    await wrapper.find('#price').setValue(10)
    await wrapper.find('#rating').setValue(10) // invalid

    await wrapper.find('form').trigger('submit')

    expect(actions.addProduct).not.toHaveBeenCalled()

    expect(wrapper.text())
      .toContain('Please fill all fields correctly.')

  })

})
