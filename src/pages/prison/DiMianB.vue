<template>
  <div class="example">
    <h2>底层</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
import OrbitControls from 'threejs-orbit-controls'
import GLTFLoader from 'three-gltf-loader'
export default {
  name: 'Jianjiaban',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      mouseControls: null,
      // directionalLight: null,
      step: 0,
      rotation: 0,
      gui: null,
      stats: null
    }
  },
  mounted() {
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    this.initStats()
    this.initScene()
    this.initCamera()
    this.initLight()
    this.initRenderer()
    this.initMouseControls()
    this.initHelper()
    this.initGui()
    this.initModels()
    this.render()
    window.onresize = this.onWindowResize
  },
  methods: {
    // 场景
    initScene() {
      this.scene = new THREE.Scene()
    },
    // 相机

    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        0.01,
        10000
      )

      this.camera.position.set(300, 400, 500)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 渲染器
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setClearColor(0xaaaaff, 1.0)
      this.renderer.setSize(this.width, this.height)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.$el.appendChild(this.renderer.domElement)
    },
    initLight() {
      const ambientLigth = new THREE.AmbientLight(0x404040, 0, 5) // soft white light
      this.scene.add(ambientLigth)

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1)
      // hemiLight.color.setHSL(0.6, 1, 0.6)
      // hemiLight.groundColor.setHSL(0.095, 1, 0.75)
      hemiLight.position.set(0, 20, 0)
      this.scene.add(hemiLight)

      const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 1)
      this.scene.add(hemiLightHelper)
    },
    initMouseControls() {
      // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
      // 新建一个轨道控制器
      // 如果初始化时不传入第二个参数，orbitControl默认监听的是document，自然地整个文档范围内的所有相关事件都会被监听。
      // 相应的，解决方法自然是把场景所在的canvas作为第二个参数传进来
      this.cameraControls = new OrbitControls(this.camera, this.renderer.domElement)

      // this.mouseControls.addEventListener('change', this.updateControls)

      // Set to false to disable this control
      // 鼠标控制是否可用
      this.cameraControls.enabled = true

      // "target" sets the location of focus, where the object orbits around
      // 聚焦坐标
      this.cameraControls.target = new THREE.Vector3() // 控制焦点

      // How far you can dolly in and out ( PerspectiveCamera only )
      // 最大最小相机移动距离(景深相机)
      this.cameraControls.minDistance = 0.1
      this.cameraControls.maxDistance = 1800
      // How far you can orbit vertically, upper and lower limits.
      // Range is 0 to Math.PI radians.
      // 最大仰视角和俯视角
      this.cameraControls.minPolarAngle = 0.1 * Math.PI // radians
      this.cameraControls.maxPolarAngle = 0.49 * Math.PI // radians
      // How far you can orbit horizontally, upper and lower limits.
      // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
      // 水平方向视角限制
      this.cameraControls.minAzimuthAngle = -0.95 * Math.PI // -Infinity // radians
      this.cameraControls.maxAzimuthAngle = 0.95 * Math.PI // Infinity // radians

      // Set to true to enable damping (inertia)
      // If damping is enabled, you must call controls.update() in your animation loop
      // 惯性滑动，滑动大小默认0.25
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.cameraControls.enableDamping = true
      // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
      this.cameraControls.dampingFactor = 0.15

      // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
      // Set to false to disable zooming
      // 滚轮是否可控制zoom，zoom速度默认1
      this.cameraControls.enableZoom = true
      this.cameraControls.zoomSpeed = 1.0

      // Set to false to disable rotating
      // 是否可旋转，旋转速度
      this.cameraControls.enableRotate = true
      this.cameraControls.rotateSpeed = 1.0

      // Set to false to disable panning
      // 是否可平移，默认移动速度为7px
      this.cameraControls.enablePan = true
      this.cameraControls.keyPanSpeed = 0.2	// pixels moved per arrow key push

      // Set to true to automatically rotate around the target
      // If auto-rotate is enabled, you must call controls.update() in your animation loop
      // 是否自动旋转，自动旋转速度。默认每秒30圈
      this.cameraControls.autoRotate = false
      this.cameraControls.autoRotateSpeed = 3.0 // 30 seconds per round when fps is 60

      // Set to false to disable use of the keys
      // 是否能使用键盘
      this.cameraControls.enableKeys = true

      // The four arrow keys
      // 默认键盘控制上下左右的键
      this.cameraControls.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }
      // Mouse buttons
      // 鼠标点击按钮
      // this.cameraControls.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT }
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(400)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(700, 20)
      this.scene.add(gridHelper)
    },
    initGui() {
      // this.controls = {
      //   // we need the first child, since it's a multimaterial
      // }
      //
      // this.gui = new dat.GUI()
    },
    initModels() {
      // const cubeGeometry = new THREE.CubeGeometry(10, 10, 10)
      // const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
      // const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
      // cubeMesh.position.set(0, 5, 0)
      // this.scene.add(cubeMesh)
      // this.jsonLoader()
      this.gltfLoader()
    },
    gltfLoader() { // 有问题
      const loader = new GLTFLoader()
      const uri = 'static/threejs/models/prison/dimianB.gltf'
      // const uri = 'static/threejs/examples/models/gltf/assassin/subzarmt.gltf'
      loader.load(
        uri,
        gltf => {
          console.log('gltf is ', gltf)
          // gltf.scene.children.forEach(child => {
          //   if (child.isMesh) {
          //     console.log(child.material)
          //     this.scene.add(child)
          //   }
          // })
          gltf.scene.position.set(0, 0, 0)
          // gltf.scene.scale.set(100, 100, 100)
          this.scene.add(gltf.scene)
          // gltf.animations // Array<THREE.AnimationClip>
          // gltf.scene // THREE.Scene
          // gltf.scenes // Array<THREE.Scene>
          // gltf.cameras // Array<THREE.Camera>
          // gltf.asset // Object
        },
        (xhr) => {
          if (xhr.lengthComputable) {
            const percentComplete = xhr.loaded / xhr.total * 100
            console.log(Math.round(percentComplete, 2) + '% loaded')
          }
        },
        error => {
          console.log('error is ', error)
        }
      )
    },
    jsonLoader() {
      const loader = new THREE.JSONLoader()
      const uri = 'static/threejs/models/prison/diMianB.json'
      console.log('uri is ' + uri)
      loader.load(uri, (geometry, mat) => {
        console.log('loader.load onload geometry is ', geometry)
        console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])
        this.mesh.position.set(113, 0.5, 20)

        this.scene.add(this.mesh)
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const percentComplete = xhr.loaded / xhr.total * 100
          console.log(Math.round(percentComplete, 2) + '% downloaded')
        }
      },
      error => {
        console.log('error is ', error)
      })
    },
    render() {
      this.stats.update()
      // if (this.mesh) {
      //   this.mesh.rotation.y += 0.006
      // }
      // render using requestAnimationFrame
      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    },
    // 初始化性能插件

    initStats() {
      this.stats = new Stats()
      this.stats.setMode(0) // 0: fps, 1: ms

      // Align top-left
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '20px'
      this.stats.domElement.style.top = '87px'
      this.$el.appendChild(this.stats.domElement)
    },
    // 窗口变动触发的函数
    onWindowResize() {
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
  background-color: #eeeeee;
  width: 100%;
  height: 900px;
}
</style>
