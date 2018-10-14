export default {
  destroyed() {
    // WARNING: Too many active WebGL contexts. Oldest context will be lost.
    this.renderer.forceContextLoss()
    console.log('this.renderer is ', this.renderer)
  }
}
