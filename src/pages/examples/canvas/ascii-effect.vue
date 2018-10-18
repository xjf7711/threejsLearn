<template>
  <div id="info">Simple Cloth Simulation<br>
    Verlet integration with relaxed constraints<br>
    <a onclick="wind = !wind;">Wind</a> |
    <a onclick="sphere.visible = !sphere.visible;">Ball</a> |
    <a onclick="togglePins();">Pins</a>
  </div>
</template>

<script>
import * as THREE from 'three'
import TrackballControls from '@/assets/threejs/js/controls/TrackballControls'
// import TrackballControls from 'three-trackballcontrols'
export default {
  name: 'Cloth',
  data() {
    return {
      container: null,
      // stats: null,

      renderer: null,
      camera: null,
      scene: null,

      controls: null,
      effect: null,
      sphere: null,
      plane: null,
      start: null
    }
  },
  mounted() {
    this.start = Date.now()
    this.init()
    this.animate()
  },
  methods: {
    init() {
      const width = window.innerWidth || 2
      const height = window.innerHeight || 2

      this.container = document.createElement('div')
      document.body.appendChild(this.container)

      const info = document.createElement('div')
      info.style.position = 'absolute'
      info.style.top = '10px'
      info.style.width = '100%'
      info.style.textAlign = 'center'
      info.innerHTML = 'Drag to change the view'
      this.container.appendChild(info)

      this.camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000)
      this.camera.position.y = 150
      this.camera.position.z = 500

      this.controls = new TrackballControls(this.camera, this.renderer)

      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xf0f0f0)

      const light = new THREE.PointLight(0xffffff)
      light.position.set(500, 500, 500)
      this.scene.add(light)

      const light = new THREE.PointLight(0xffffff, 0.25)
      light.position.set(-500, -500, -500)
      this.scene.add(light)

      this.sphere = new THREE.Mesh(
        new THREE.SphereGeometry(200, 20, 10),
        new THREE.MeshLambertMaterial()
      )
      this.scene.add(this.sphere)

      // this.plane

      this.plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(400, 400),
        new THREE.MeshBasicMaterial({ color: 0xe0e0e0 })
      )
      this.plane.position.y = -200
      this.plane.rotation.x = -Math.PI / 2
      this.scene.add(this.plane)

      this.renderer = new THREE.CanvasRenderer()
      this.renderer.setSize(width, height)
      // this.container.appendChild( this.renderer.domElement );

      this.effect = new THREE.AsciiEffect(this.renderer)
      this.effect.setSize(width, height)
      this.container.appendChild(this.effect.domElement)

      // stats = new Stats();
      // this.container.appendChild( stats.dom );

      //

      window.addEventListener('resize', this.onWindowResize, false)
    },
    animate() {
      requestAnimationFrame(this.animate)

      // stats.begin();
      this.render()
      // stats.end();
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.effect.setSize(window.innerWidth, window.innerHeight)
    },
    render() {
      const timer = Date.now() - start

      this.sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150
      this.sphere.rotation.x = timer * 0.0003
      this.sphere.rotation.z = timer * 0.0002

      this.controls.update()

      this.effect.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
body {
  font-family: Monospace;
  background-color: #f0f0f0;
  margin: 0px;
  overflow: hidden;
}
</style>
