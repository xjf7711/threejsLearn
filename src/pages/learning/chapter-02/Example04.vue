<template>
  <div class="example">
    <h2>Example 02.04 - Geometries</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import ParametricGeometries from '@/assets/threejs/js/ParametricGeometries'
import ConvexGeometry from '@/assets/threejs/js/ConvexGeometry'
import SceneUtils from '@/assets/threejs/js/utils/SceneUtils'
export default {
  name: 'Example0105',
  data() {
    return {
      width: 0,
      height: 0,
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      step: 0,
      plane: null,
      planeGeometry: null,
      stats: null
    }
  },
  mounted() {
    this.init()
    // listen to the resize events
    window.addEventListener('resize', this.onResize, false)
  },
  methods: {
    init() {
      // console.log('this.$el is ', this.$el)
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.stats = this.initStats()

      // create a scene, that will hold all our elements such as objects, cameras and lights.
      const scene = new THREE.Scene()

      this.scene = scene
      // create a camera, which defines where we're looking at.
      const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      this.camera = camera
      // create a render and set the size
      const renderer = new THREE.WebGLRenderer(
        { aliential: true }
      )
      this.renderer = renderer
      renderer.setClearColor(0xEEEEEE, 1.0)
      // renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0))
      renderer.setSize(this.width, this.height)
      renderer.shadowMap.enabled = true

      const axes = new THREE.AxesHelper(20)
      scene.add(axes)

      // create the ground plane
      const planeGeometry = new THREE.PlaneGeometry(60, 40, 2, 2)
      this.planeGeometry = planeGeometry
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.receiveShadow = true

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 0
      plane.position.y = 0
      plane.position.z = 0
      this.plane = plane
      // add the plane to the scene
      scene.add(plane)

      // position and point the camera to the center of the scene
      camera.position.x = -50
      camera.position.y = 30
      camera.position.z = 20
      camera.lookAt(new THREE.Vector3(-10, 0, 0))

      // add subtle ambient lighting
      const ambientLight = new THREE.AmbientLight(0x090909)
      scene.add(ambientLight)

      // add spotlight for the shadows
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-40, 40, 50)
      spotLight.castShadow = true
      scene.add(spotLight)

      // add geometries
      this.addGeometries(scene)

      // add the output of the renderer to the html element
      this.$el.appendChild(renderer.domElement)

      // call the render function
      // this.initGui()

      this.render()
    },
    addGeometries(scene) {
      const geoms = []

      geoms.push(new THREE.CylinderGeometry(1, 4, 4))

      // basic cube
      geoms.push(new THREE.BoxGeometry(2, 2, 2))

      // basic spherer
      geoms.push(new THREE.SphereGeometry(2))

      geoms.push(new THREE.IcosahedronGeometry(4))

      // create a convex shape (a shape without dents)
      // using a couple of points
      // for instance a cube
      const points = [
        new THREE.Vector3(2, 2, 2),
        new THREE.Vector3(2, 2, -2),
        new THREE.Vector3(-2, 2, -2),
        new THREE.Vector3(-2, 2, 2),
        new THREE.Vector3(2, -2, 2),
        new THREE.Vector3(2, -2, -2),
        new THREE.Vector3(-2, -2, -2),
        new THREE.Vector3(-2, -2, 2)
      ]
      geoms.push(new ConvexGeometry(points))
      // todo 扁的？？？
      // create a lathgeometry
      // http://en.wikipedia.org/wiki/Lathe_(graphics)
      const pts = [] // points array - the path profile points will be stored here
      const detail = 0.1 // half-circle detail - how many angle increments will be used to generate points
      const radius = 3 // radius for half_sphere
      for (let angle = 0.0; angle < Math.PI; angle += detail) { // loop from 0.0 radians to PI (0 - 180 degrees)
        pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)) // angle/radius to x,z
      }

      geoms.push(new THREE.LatheGeometry(pts, 12))

      // create a OctahedronGeometry
      geoms.push(new THREE.OctahedronGeometry(3))

      // create a geometry based on a function
      geoms.push(new THREE.ParametricGeometry(ParametricGeometries.mobius3d, 20, 10))

      geoms.push(new THREE.TetrahedronGeometry(3))

      geoms.push(new THREE.TorusGeometry(3, 1, 10, 10))

      geoms.push(new THREE.TorusKnotGeometry(3, 0.5, 50, 20))

      let j = 0
      for (let i = 0; i < geoms.length; i++) {
        // const cubeMaterial = new THREE.MeshLambertMaterial({ wireframe: true, color: Math.random() * 0xffffff })

        const materials = [

          new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff, flatShading: THREE.FlatShading }),
          new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })

        ]

        const mesh = SceneUtils.createMultiMaterialObject(geoms[i], materials)
        mesh.traverse(function(e) {
          e.castShadow = true
        })

        // var mesh = new THREE.Mesh(geoms[i],materials[i]);
        // mesh.castShadow=true;
        mesh.position.x = -24 + ((i % 4) * 12)
        mesh.position.y = 4
        mesh.position.z = -8 + (j * 12)

        if ((i + 1) % 4 === 0) j++
        scene.add(mesh)
      }
    },
    initStats() {
      const stats = new Stats()

      stats.setMode(0) // 0: fps, 1: ms

      // Align top-left
      stats.domElement.style.position = 'absolute'
      stats.domElement.style.left = '0px'
      stats.domElement.style.top = '0px'

      this.$el.appendChild(stats.domElement)

      return stats
    },
    render() {
      this.stats.update()

      // render using requestAnimationFrame
      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    },
    onResize() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.width, this.height)
    }
  }
}
</script>

<style scoped>
.example {
  padding: 20px;
  background-color: #ddd;
  width: 100%;
  height: 900px;
}
</style>
