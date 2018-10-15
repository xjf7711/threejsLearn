import * as THREE from 'three'
export default {
  beforeDestroy() {
    console.log('clearWebGLContext beforeDestroy begins. ')
    // WARNING: Too many active WebGL contexts. Oldest context will be lost.
    this.renderer.forceContextLoss()
    console.log('beforeDestroy this.$el is ', this.$el)
    // console.log('this.renderer is ', this.renderer)

    this.scene = null
    this.mesh = null
    console.log('THREE.cache.files is ', THREE.Cache.files)
    THREE.Cache.clear()
    const canvas = this.$el.lastChild
    console.log('canvas is ', canvas)
    this.$el.removeChild(canvas)
  },
  deactivated() {
    console.log('deactivated begins. ')
    this.renderer.domElement = null
  }
}
