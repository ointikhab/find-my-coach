import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductReview from '@/components/products/ProductReview.vue'
const mockReviews = [
  {
    reviewerName: 'Ali',
    rating: 4,
    comment: 'Good product',
    date: '2024-01-01T10:00:00Z'
  },
  {
    reviewerName: 'Sara',
    rating: 5,
    comment: 'Excellent!',
    date: '2024-02-01T12:30:00Z'
  }
]

describe('ProductReviews.vue', () => {

  // ✅ Render reviews
  it('renders review cards when reviews exist', () => {
    const wrapper = mount(ProductReview, {
      props: { reviews: mockReviews }
    })

    const cards = wrapper.findAll('.review-card')

    expect(cards.length).toBe(2)
    expect(wrapper.text()).toContain('Ali')
    expect(wrapper.text()).toContain('Good product')
    expect(wrapper.text()).toContain('Sara')
  })


  // ✅ Empty state
  it('shows fallback message when no reviews', () => {
    const wrapper = mount(ProductReview, {
      props: { reviews: [] }
    })

    expect(wrapper.text()).toContain('No reviews yet')
  })


  // ✅ Undefined reviews (edge case)
  it('shows fallback when reviews prop missing', () => {
    const wrapper = mount(ProductReview)

    expect(wrapper.text()).toContain('No reviews yet')
  })


  // ✅ formatDate method check
  it('formats date correctly', () => {
    const wrapper = mount(ProductReview, {
      props: { reviews: mockReviews }
    })

    const formatted = wrapper.vm.formatDate('2024-01-01T10:00:00Z')

    expect(typeof formatted).toBe('string')
    expect(formatted.length).toBeGreaterThan(0)
  })


  // ✅ Date displayed in DOM
  it('renders formatted date text', () => {
    const wrapper = mount(ProductReview, {
      props: { reviews: mockReviews }
    })

    const dateText = wrapper.find('.date').text()

    expect(dateText).not.toBe('')
  })

})
