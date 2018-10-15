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
    cancelAnimationFrame(this.myReq)
    // this.scene = null
    // this.mesh = null
  },
  methods: {
    animate() {
      this.stats.update()
      this.myReq = requestAnimationFrame(this.animate)
      this.renderer && this.renderer.render(this.scene, this.camera)
    }
  }
}
