export default {
  data() {
    return {
      width: 0,
      height: 0
      // scene: null,
      // camera: null,
      // renderer: null
    }
  },
  mounted() {
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    window.onresize = this.onWindowResize
  },
  methods: {
    // 窗口变动触发的函数
    onWindowResize() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.width, this.height)
      // this.render()
    }
    // render() {
    //   // this.renderer.clear()
    //   this.renderer.render(this.scene, this.camera)
    // }
  }
}
