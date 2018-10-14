<template>
  <div class="example">
    <h2>Example 09.02 - Selecting objects</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as dat from 'dat.gui'
import stats from '@/pages/mixin/stats'
import mouse from '@/pages/mixin/mouse'
import windowResize from '@/pages/mixin/windowResize'
export default {
  name: 'Example02',
  mixins: [stats, windowResize, mouse],
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      cube: null,
      sphere: null,
      cylinder: null,
      step: 0,
      scalingStep: 0,
      tube: null
    }
  },
  mounted() {
    // this.initStats()
    this.initGui()
    this.initScene()
    this.initCamera()
    this.initRenderer()
    this.initLight()
    this.initModels()
    this.animate()
    // 事件
    this.renderer.domElement.addEventListener('mousedown', this.onDocumentMouseDown, false)
    this.renderer.domElement.addEventListener('mousemove', this.onDocumentMouseMove, false)
  },
  methods: {
    // once everything is loaded, we run our Three.js stuff.
    initScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      this.scene = new THREE.Scene()
    },
    initCamera() {
      // create a camera, which defines where we're looking at.
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)

      // position and point the camera to the center of the scene
      this.camera.position.x = -30
      this.camera.position.y = 40
      this.camera.position.z = 30
      this.camera.lookAt(this.scene.position)
    },
    initRenderer() {
      // create a render and set the size
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setClearColor(0xCCCCCC, 0.5)
      this.renderer.setSize(this.width, this.height)

      // add the output of the renderer to the html element
      this.$el.appendChild(this.renderer.domElement)
    },
    initLight() {
      // add subtle ambient lighting
      const ambientLight = new THREE.AmbientLight(0x0c0c0c)
      this.scene.add(ambientLight)

      // add spotlight for the shadows
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-40, 60, -10)

      this.scene.add(spotLight)
    },
    initModels() {
      // create the ground plane
      const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 15
      plane.position.y = 0
      plane.position.z = 0

      // add the plane to the scene
      this.scene.add(plane)

      // create a cube
      const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 })
      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

      // position the cube
      this.cube.position.set(-9, 3, 0)

      // add the cube to the scene
      this.scene.add(this.cube)

      const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
      const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff })
      this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

      // position the sphere
      this.sphere.position.set(20, 0, 2)

      // add the sphere to the scene
      this.scene.add(this.sphere)

      const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 20)
      const cylinderMaterial = new THREE.MeshLambertMaterial({ color: 0x77ff77 })
      this.cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)

      this.cylinder.position.set(0, 0, 1)

      this.scene.add(this.cylinder)
    },

    animate() {
      this.stats.update()

      // rotate the cube around its axes
      this.cube.rotation.x += this.controls.rotationSpeed
      this.cube.rotation.y += this.controls.rotationSpeed
      this.cube.rotation.z += this.controls.rotationSpeed

      // bounce the sphere up and down
      this.step += this.controls.bouncingSpeed
      this.sphere.position.x = 20 + (10 * (Math.cos(this.step)))
      this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(this.step)))

      // scale the cylinder
      this.scalingStep += this.controls.scalingSpeed
      const scaleX = Math.abs(Math.sin(this.scalingStep / 4))
      const scaleY = Math.abs(Math.cos(this.scalingStep / 5))
      const scaleZ = Math.abs(Math.sin(this.scalingStep / 7))
      this.cylinder.scale.set(scaleX, scaleY, scaleZ)

      // // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
      // this.raycaster.setFromCamera(this.mouse, this.camera)
      //
      // // 获取raycaster直线和所有模型相交的数组集合
      // const intersects = this.raycaster.intersectObjects([this.sphere, this.cylinder, this.cube])
      //
      // if (intersects.length > 0) {
      //   console.log(intersects[0])
      //
      //   intersects[0].object.material.transparent = true
      //   intersects[0].object.material.opacity = 0.1
      // }
      requestAnimationFrame(this.animate)

      // render using requestAnimationFrame
      this.renderer.render(this.scene, this.camera)
    },
    initGui() {
      this.controls = {
        rotationSpeed: 0.02,
        bouncingSpeed: 0.03,
        scalingSpeed: 0.03,
        showRay: false
      }

      const datGui = new dat.GUI()
      datGui.add(this.controls, 'rotationSpeed', 0, 0.5)
      datGui.add(this.controls, 'bouncingSpeed', 0, 0.5)
      datGui.add(this.controls, 'scalingSpeed', 0, 0.5)
      datGui.add(this.controls, 'showRay').onChange(() => {
        if (this.tube) this.scene.remove(this.tube)
      })
    }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    width: 100%;
    height: 800px;
    background-color: #eeeeee;
  }
</style>
