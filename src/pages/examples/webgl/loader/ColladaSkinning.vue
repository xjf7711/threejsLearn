<template>
  <div id="collada-skinning">
    <h2>{{ title }}</h2>
    <div id="container"/>
    <div id="info">
      <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> collada loader - skinning
      | Dancing Stormtrooper by <a href="https://sketchfab.com/strykerdoesgames" target="_blank" rel="noopener">StrykerDoesAnimation</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC Attribution</a>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import ColladaLoader from '@/assets/threejs/js/loaders/ColladaLoader.js'
// import OrbitControls from '@/assets/threejs/js/controls/OrbitControls.js'
import OrbitControls from 'threejs-orbit-controls'

import Detector from '@/assets/threejs/Detector'

// "js/libs/stats.min.js"

export default {
  name: 'ColladaSkinning',
  data() {
    return {
      title: 'collada-skinning',
      container: null,
      width: 0,
      height: 0,
      // stats,
      clock: null,
      controls: null,
      camera: null,
      scene: null,
      renderer: null,
      mixer: null,
      action: null
    }
  },
  mounted() {
    if (!Detector.webgl) Detector.addGetWebGLMessage()
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    this.init()
    this.animate()
  },
  methods: {
    init() {
      this.camera = new THREE.PerspectiveCamera(
        25,
        this.width / this.height,
        1,
        10000
      )
      this.camera.position.set(15, 10, -15)

      this.scene = new THREE.Scene()

      this.clock = new THREE.Clock()

      // collada

      const loader = new ColladaLoader()
      // const url = '/examples/y5/y5.dae'
      const url = 'static/threejs/examples/models/collada/stormtrooper/stormtrooper.dae'
      loader.load(url, collada => {
        const animations = collada.animations
        const avatar = collada.scene

        this.mixer = new THREE.AnimationMixer(avatar)
        this.action = this.mixer.clipAction(animations[0]).play()

        this.scene.add(avatar)
      })

      //

      const gridHelper = new THREE.GridHelper(10, 20)
      this.scene.add(gridHelper)

      //

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
      this.scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(1, 1, -1)
      this.scene.add(directionalLight)

      //

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)
      this.$el.appendChild(this.renderer.domElement)

      //

      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.target.set(0, 2, 0)
      this.controls.update()

      // stats = new Stats();
      // this.$el.appendChild( stats.dom );

      // window.addEventListener('resize', this.onWindowResize, false)
      window.onresize = this.onWindowResize
    },
    onWindowResize() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.width, this.height)
    },
    animate() {
      requestAnimationFrame(this.animate)

      this.render()
      // stats.update();
    },
    render() {
      const delta = this.clock.getDelta()

      if (this.mixer !== null) {
        this.mixer.update(delta)
      }

      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
#collada-skinning {
  background: #777;
  padding: 0;
  margin: 0;
  overflow: hidden;
  width: 100%;
  height: 800px;
}

#info {
  position: absolute;
  top: 0px;
  width: 100%;
  color: #ffffff;
  padding: 5px;
  font-family: Monospace;
  font-size: 13px;
  text-align: center;
}

a {
  color: #ffffff;
}
</style>
