<template>
  <div id="3ds">
    <h2>{{ title }}</h2>
    <div id="info">

      <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - 3DS loader
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import TrackballControls from '@/assets/threejs/js/controls/TrackballControls.js'
// import TrackballControls from 'three-trackballcontrols'
import TDSLoader from '@/assets/threejs/js/loaders/TDSLoader.js'

//  "js/controls/TrackballControls.js"
// "js/loaders/TDSLoader.js"

export default {
  name: 'Loader3ds',
  data() {
    return {
      title: '3ds',
      width: 700,
      height: 400,
      controls: null,
      camera: null,
      scene: null,
      renderer: null
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      // console.log('this.width ' + this.width +this.title)

      this.camera = new THREE.PerspectiveCamera(
        60,
        this.width / this.height,
        0.1,
        1000
      )
      this.camera.position.z = 2

      this.controls = new TrackballControls(this.camera)

      this.scene = new THREE.Scene()
      this.scene.add(new THREE.HemisphereLight())

      const directionalLight = new THREE.DirectionalLight(0xffffff)
      directionalLight.position.set(0, 0, 2)
      this.scene.add(directionalLight)

      // 3ds files dont store normal maps
      const textureLoader = new THREE.TextureLoader()
      const normal = textureLoader.load('static/threejs/examples/models/3ds/portalgun/textures/normal.jpg')
      const tdsLoader = new TDSLoader()
      tdsLoader.setPath('static/threejs/examples/models/3ds/portalgun/textures/')
      const url = 'static/threejs/examples/models/3ds/portalgun/portalgun.3ds'
      const that = this
      tdsLoader.load(url, function(object) {
        console.log('loader.load object is ', object)
        object.traverse(function(child) {
          if (child instanceof THREE.Mesh) {
            child.material.normalMap = normal
          }
        })

        that.scene.add(object)
      })

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setPixelRatio(window.devicePixelRatio)
      // console.log('width ' + this.width)
      this.renderer.setClearColor(0xcccccc)
      this.renderer.setSize(this.width, this.height)
      this.$el.appendChild(this.renderer.domElement)

      window.addEventListener('resize', this.resize, false)
    },
    resize() {
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.width, this.height)
    },
    animate() {
      this.controls.update()
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
#3ds {
  font-family: Monospace;
  background-color: #cccccc;
  color: #fff;
  margin: 0;
  overflow: hidden;
}
#info {
  color: #fff;
  position: absolute;
  /*top: 10px;*/
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
#info a,
.button {
  color: #f00;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
