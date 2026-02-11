import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import ProductInfo from '@/components/products/ProductInfo.vue'

describe('ProductInfo - updateTitle', () => {
  let actions
  let store

  const mockProduct = {
    id: 1,
    title: 'Test Product',
    category: 'beauty',
    brand: 'Brand',
    price: 10,
    availabilityStatus: 'In Stock',
    stock: 5
  }

  beforeEach(() => {
    actions = {
      updateProduct: vi.fn()
    }

    store = createStore({
      modules: {
        products: {
          namespaced: true,
          actions
        }
      }
    })

    // Freeze date for predictable test
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-01T00:00:00.000Z'))
  })

  it('dispatches updateProduct with updated title when button clicked', async () => {
  const wrapper = mount(ProductInfo, {
    props: { product: mockProduct },
    global: {
      plugins: [store] // <- Vuex store injected as plugin
    }
  })

  await wrapper.find('button.update-btn').trigger('click')

  expect(actions.updateProduct).toHaveBeenCalledTimes(1)

  expect(actions.updateProduct).toHaveBeenCalledWith(
    expect.any(Object),
    {
      id: 1,
      title: 'Test Product_2024-01-01T00:00:00.000Z'
    }
  )
})


})
