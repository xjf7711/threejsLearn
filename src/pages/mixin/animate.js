// requestAnimationFrame的兼容问题
const requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame
window.requestAnimationFrame = requestAnimationFrame
export default {
  data() {
    return {
      myReq: null
    }
  },
  mounted() {
    this.animate()
  },
  beforeDestroy() {
    console.log('animate beforeDestroy begins. ')
    // 结束循环
    cancelAnimationFrame(this.myReq)
  },
  methods: {
    animate() {
      this.stats && this.stats.update()
      this.myReq = requestAnimationFrame(this.animate)
      this.render()// 如不同，在组件中重写
      this.renderer && this.renderer.render(this.scene, this.camera)
    },
    render() {}
  }
}
