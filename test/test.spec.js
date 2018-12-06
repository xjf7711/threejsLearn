// 从测试实用工具集中导入 `mount()` 方法
// 同时导入你要测试的组件
import { shallowMount, mount } from '@vue/test-utils'
import Page from '@/pages/Page.vue'
import App from '@/App.vue'
import BackToTop from '@/components/BackToTop/index.vue'
describe('page layout', () => {
  test('是一个Vue实例', () => {
    // 现在挂载组件，你便得到了这个包裹器
    // const wrapper = shallowMount(App)
    const wrapper = shallowMount(BackToTop)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  // test('renders correctly', () => {
  //   const wrapper = mount(App)
  //   expect(wrapper.element).toMatchSnapshot()
  // })
})
