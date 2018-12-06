import { shallowMount, mount } from '@vue/test-utils'
import Door from '@/pages/prison/Door.vue'
// import ThreeMixin from '@/pages/mixin/index.js'
describe('door', () => {
  test('door canvas', () => {
    const wrapper = mount(Door)
    // const wrapper = mount(ThreeMixin)
    // await flushPromises()
    // expect(wrapper.isVueInstance()).toBeTruthy()
    // expect(wrapper.contains('canvas')).toBe(true)
  })
})
