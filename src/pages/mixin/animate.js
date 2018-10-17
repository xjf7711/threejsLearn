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
  },
  methods: {
    animate() {
      this.stats.update()
      this.myReq = requestAnimationFrame(this.animate)
      this.render()
    },
    render() {
      this.renderer && this.renderer.render(this.scene, this.camera)
    }
  }
}
