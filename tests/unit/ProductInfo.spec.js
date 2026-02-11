import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductInfo from '@/components/products/ProductInfo.vue'

const mockProduct = {
  id: 1,
  title: 'Test Product',
  category: 'beauty',
  brand: 'Essence',
  price: 10,
  discountPercentage: 5,
  availabilityStatus: 'Low Stock',
  stock: 5,
  description: 'Test description',
  warrantyInformation: '1 month warranty',
  shippingInformation: 'Ships in 2 days',
  returnPolicy: '30 day return',
  minimumOrderQuantity: 2
}

describe('ProductInfo.vue component used in productdetails', () => {

  it('renders product information correctly', () => {
    const wrapper = mount(ProductInfo, {
      props: { product: mockProduct }
    })

    expect(wrapper.text()).toContain('Test Product')
    expect(wrapper.text()).toContain('beauty - Essence')
    expect(wrapper.text()).toContain('$ 10.00')
    expect(wrapper.text()).toContain('Stock: 5')
    expect(wrapper.text()).toContain('Test description')
  })

  it('shows discount percentage if available', () => {
    const wrapper = mount(ProductInfo, {
      props: { product: mockProduct }
    })

    expect(wrapper.text()).toContain('(5% off)')
  })

  it('applies low-stock class correctly', () => {
    const wrapper = mount(ProductInfo, {
      props: { product: mockProduct }
    })

    const availability = wrapper.find('.availability')
    expect(availability.classes()).toContain('low-stock')
  })

  it('applies in-stock class correctly', () => {
    const wrapper = mount(ProductInfo, {
      props: {
        product: {
          ...mockProduct,
          availabilityStatus: 'In Stock'
        }
      }
    })

    const availability = wrapper.find('.availability')
    expect(availability.classes()).toContain('in-stock')
  })

  it('emits add-to-cart event when button clicked', async () => {
    const wrapper = mount(ProductInfo, {
      props: { product: mockProduct }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()['add-to-cart']).toBeTruthy()
    expect(wrapper.emitted()['add-to-cart'][0]).toEqual([mockProduct])
  })

})
