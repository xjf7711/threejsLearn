<template>
  <div class="example">
    <h2>Example 02.05 - Custom geometry</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import SceneUtils from '@/assets/threejs/js/utils/SceneUtils'
export default {
  name: 'Example0205',
  data() {
    return {
      width: 0,
      height: 0,
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
      controlPoints: [],
      stats: null,
      vertices: []
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

      // create a camera, which defines where we're looking at.
      const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      this.camera = camera
      // create a render and set the size
      const renderer = new THREE.WebGLRenderer()
      this.renderer = renderer
      renderer.setClearColor(0xEEEEEE, 1.0)
      // renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0))
      renderer.setSize(this.width, this.height)
      renderer.shadowMap.enabled = true

      const axes = new THREE.AxesHelper(20)
      scene.add(axes)

      // create the ground plane
      const planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1)
      this.planeGeometry = planeGeometry
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.receiveShadow = true

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 0
      plane.position.y = 0
      plane.position.z = 0
      // this.plane = plane
      // add the plane to the scene
      scene.add(plane)

      // position and point the camera to the center of the scene
      camera.position.x = -20
      camera.position.y = 25
      camera.position.z = 20
      camera.lookAt(new THREE.Vector3(5, 0, 0))

      // add subtle ambient lighting
      // const ambientLight = new THREE.AmbientLight(0x090909)
      // scene.add(ambientLight)

      // add spotlight for the shadows
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-40, 60, 10)
      spotLight.castShadow = true
      scene.add(spotLight)

      // add the output of the renderer to the html element
      this.$el.appendChild(renderer.domElement)

      // call the render function

      const vertices = [
        new THREE.Vector3(1, 3, 1),
        new THREE.Vector3(1, 3, -1),
        new THREE.Vector3(1, -1, 1),
        new THREE.Vector3(1, -1, -1),
        new THREE.Vector3(-1, 3, -1),
        new THREE.Vector3(-1, 3, 1),
        new THREE.Vector3(-1, -1, -1),
        new THREE.Vector3(-1, -1, 1)
      ]

      const faces = [
        new THREE.Face3(0, 2, 1),
        new THREE.Face3(2, 3, 1),
        new THREE.Face3(4, 6, 5),
        new THREE.Face3(6, 7, 5),
        new THREE.Face3(4, 5, 1),
        new THREE.Face3(5, 0, 1),
        new THREE.Face3(7, 6, 2),
        new THREE.Face3(6, 3, 2),
        new THREE.Face3(5, 7, 0),
        new THREE.Face3(7, 2, 0),
        new THREE.Face3(1, 3, 4),
        new THREE.Face3(3, 6, 4)
      ]

      const geom = new THREE.Geometry()
      geom.vertices = vertices
      geom.faces = faces
      geom.computeFaceNormals()

      const materials = [
        new THREE.MeshLambertMaterial({ opacity: 0.6, color: 0x44ff44, transparent: true }),
        new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })
      ]

      this.mesh = SceneUtils.createMultiMaterialObject(geom, materials)
      this.mesh.children.forEach(function(e) {
        e.castShadow = true
      })
      //        mesh.children[0].translateX(0.5);
      //        mesh.children[0].translateZ(0.5);

      scene.add(this.mesh)

      // const controlPoints = []
      this.controlPoints = []
      // console.log(this.addControl(3, 5, 3))
      this.controlPoints.push(this.addControl(3, 5, 3))
      this.controlPoints.push(this.addControl(3, 5, 0))
      this.controlPoints.push(this.addControl(3, 0, 3))
      this.controlPoints.push(this.addControl(3, 0, 0))
      this.controlPoints.push(this.addControl(0, 5, 0))
      this.controlPoints.push(this.addControl(0, 5, 3))
      this.controlPoints.push(this.addControl(0, 0, 0))
      this.controlPoints.push(this.addControl(0, 0, 3))

      const gui = new dat.GUI()
      gui.add({
        clone: () => {
          const clonedGeometry = this.mesh.children[0].geometry.clone()
          const materials = [
            new THREE.MeshLambertMaterial({ opacity: 0.6, color: 0xff44ff, transparent: true }),
            new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })

          ]

          const mesh2 = SceneUtils.createMultiMaterialObject(clonedGeometry, materials)
          mesh2.children.forEach(function(e) {
            e.castShadow = true
          })

          mesh2.translateX(5)
          mesh2.translateZ(5)
          mesh2.name = 'clone'
          scene.remove(scene.getObjectByName('clone'))
          scene.add(mesh2)
        }
      }, 'clone')
      const that = this
      for (let i = 0; i < 8; i++) {
        const f1 = gui.addFolder('Vertices ' + (i + 1))
        f1.add(that.controlPoints[i], 'x', -10, 10)
        f1.add(that.controlPoints[i], 'y', -10, 10)
        f1.add(that.controlPoints[i], 'z', -10, 10)
      }
      this.scene = scene
      this.render()
    },
    addControl(x, y, z) {
      return { x, y, z }
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

      // this.vertices = []
      for (let i = 0; i < 8; i++) {
        this.vertices.push(new THREE.Vector3(this.controlPoints[i].x, this.controlPoints[i].y, this.controlPoints[i].z))
      }
      // console.log(vertices)
      this.mesh.children.forEach((e) => {
        e.geometry.vertices = this.vertices
        e.geometry.verticesNeedUpdate = true
        e.geometry.computeFaceNormals()
      })

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
