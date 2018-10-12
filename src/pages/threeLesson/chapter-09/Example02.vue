<template>
  <div class="example">
    <h2>Example 09.02 - Selecting objects</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
// import Projector from '@/assets/threejs/libs/Projector'
export default {
  name: 'Example02',
  data() {
    return {
      stats: null,
      width: 0,
      height: 0,
      scene: null,
      camera: null,
      renderer: null,
      cube: null,
      sphere: null,
      cylinder: null,
      step: 0,
      scalingStep: 0,
      tube: null,
      raycaster: null
    }
  },
  mounted() {
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    this.mouse = new THREE.Vector2()
    this.raycaster = new THREE.Raycaster()
    this.main()
  },
  methods: {
    main() {
      this.initStats()
      this.initGui()
      this.initScene()
      this.initCamera()
      this.initRenderer()
      this.initLight()
      this.initModels()

      // const projector = new Projector() -- 没有用到
      // document.addEventListener('mousedown', this.onDocumentMouseDown, false)
      // document.addEventListener('mousemove', this.onDocumentMouseMove, false)

      // call the render function
      // const step = 0
      // const scalingStep = 0

      this.render()

      // let projector = new Projector()
      // let tube
    },
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

      // 事件
      this.renderer.domElement.addEventListener('mousedown', this.onDocumentMouseDown, false)
      this.renderer.domElement.addEventListener('mousemove', this.onDocumentMouseMove, false)

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

    render() {
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

      // render using requestAnimationFrame
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.render)
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
    },
    initStats() {
      this.stats = new Stats()

      this.stats.setMode(0) // 0: fps, 1: ms

      // Align top-left
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '0px'
      this.stats.domElement.style.top = '0px'

      this.$el.appendChild(this.stats.domElement)
    },
    onDocumentMouseDown(event) {
      // event.preventDefault()
      // 将鼠标点击位置的屏幕坐标转成threejs中的标准坐标,具体解释见代码释义
      // const mouse = new THREE.Vector2()
      // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
      this.mouse.x = ((event.clientX - 200) / this.width) * 2 - 1
      this.mouse.y = -((event.clientY - 138) / this.height) * 2 + 1

      // 新建一个三维单位向量 假设z方向就是0.5
      // 根据照相机，把这个向量转换到视点坐标系
      // const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(this.camera)
      // 在视点坐标系中形成射线,射线的起点向量是照相机， 射线的方向向量是照相机到点击的点，这个向量应该归一标准化。
      // const raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())

      // const vector = new THREE.Vector3((event.clientX / this.width) * 2 - 1, -(event.clientY / this.height) * 2 + 1, 0.5)
      // // vector = vector.unproject(this.camera)
      // this.projector.unprojectVector(vector, this.camera)
      // const raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())
      // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
      this.raycaster.setFromCamera(this.mouse, this.camera)

      // 获取raycaster直线和所有模型相交的数组集合
      const intersects = this.raycaster.intersectObjects([this.sphere, this.cylinder, this.cube])

      if (intersects.length > 0) {
        console.log(intersects[0])

        intersects[0].object.material.transparent = true
        intersects[0].object.material.opacity = 0.1
      }
    },
    onDocumentMouseMove(event) {
      if (this.controls.showRay) {
        // const vector = new THREE.Vector3((event.clientX / this.width) * 2 - 1, -(event.clientY / this.height) * 2 + 1, 0.5)
        // // unproject函数，将屏幕上的点击位置转换成Three.js场景中的坐标 --无效
        // // vector = vector.unproject(this.camera)
        // this.projector.unprojectVector(vector, this.camera) -- 偏上
        // const raycaster = new THREE.Raycaster()
        // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.

        this.mouse.x = ((event.clientX - 200) / this.width) * 2 - 1
        this.mouse.y = -((event.clientY - 138) / this.height) * 2 + 1

        // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera)
        // const raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())
        const intersects = this.raycaster.intersectObjects([this.sphere, this.cylinder, this.cube])

        if (intersects.length > 0) {
          const points = []
          points.push(new THREE.Vector3(-30, 39.8, 30))
          points.push(intersects[0].point)

          const mat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.6 })
          const tubeGeometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 60, 0.001)

          if (this.tube) this.scene.remove(this.tube)

          if (this.controls.showRay) {
            this.tube = new THREE.Mesh(tubeGeometry, mat)
            this.scene.add(this.tube)
          }
        }
      }
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
