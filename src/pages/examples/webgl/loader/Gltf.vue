<template>
  <div id="gltf">
    <h2>{{ title }}</h2>
    <div id="info">
      <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> -
      monster by <a href="http://www.3drt.com/downloads.htm" target="_blank" rel="noopener">3drt</a>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import GLTFLoader from 'three-gltf-loader'
// import GLTFLoader from '@/assets/threejs/js/loaders/GLTFLoader'
import OrbitControls from 'threejs-orbit-controls'
import Stats from 'stats.js'
import Detector from '@/assets/threejs/Detector.js'

export default {
  name: 'LoaderGLTF',
  data() {
    return {
      title: 'three.js webgl - glTF loader',
      width: 700,
      height: 500,

      renderer: null,
      scene: null,
      camera: null,
      envMap: null,
      stats: null,
      cameraControls: null
    }
  },
  created() {
    if (!Detector.webgl) Detector.addGetWebGLMessage()
  },
  mounted() {
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    // envmap
    var path = 'static/threejs/examples/textures/cube/Bridge2/'
    var format = '.jpg'
    this.envMap = new THREE.CubeTextureLoader().load([
      path + 'posx' + format, path + 'negx' + format,
      path + 'posy' + format, path + 'negy' + format,
      path + 'posz' + format, path + 'negz' + format
    ])
    this.initScene()
    this.initCamera()
    this.initRenderer()
    this.initLight()
    this.initModels()
    this.initHelper()
    this.initCameraControls()
    this.initStats()
    this.animate()
    window.addEventListener('resize', this.onWindowResize, false)
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene()
      this.scene.background = this.envMap
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        0.25,
        80
      )
      this.camera.position.set(-1.8, 0.9, 2.7)
    },
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      // this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)
      // this.renderer.setSize( window.innerWidth, window.innerHeight )
      // this.renderer.setClearColor(0xcccccc, 1.0)
      this.renderer.gammaOutput = true
      this.$el.appendChild(this.renderer.domElement)
    },
    initLight() {
      // const ambientLight = new THREE.AmbientLight(0xdddddd)
      // this.scene.add(ambientLight)
      const light = new THREE.HemisphereLight(0xbbbbff, 0x444422)
      light.position.set(0, 1, 0)
      this.scene.add(light)
    },
    initCameraControls() {
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
      // this.cameraControls.target = new THREE.Vector3() // 控制焦点
      this.cameraControls.target.set(0, -0.2, -0.2)
      // How far you can dolly in and out ( PerspectiveCamera only )
      // 最大最小相机移动距离(景深相机)
      this.cameraControls.minDistance = 0.4
      this.cameraControls.maxDistance = 80
      // How far you can orbit vertically, upper and lower limits.
      // Range is 0 to Math.PI radians.
      // 最大仰视角和俯视角
      // this.cameraControls.minPolarAngle = 0.1 * Math.PI // radians
      // this.cameraControls.maxPolarAngle = 2 * Math.PI // radians
      // How far you can orbit horizontally, upper and lower limits.
      // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
      // 水平方向视角限制
      // this.cameraControls.minAzimuthAngle = -0.95 * Math.PI // -Infinity // radians
      // this.cameraControls.maxAzimuthAngle = 0.95 * Math.PI // Infinity // radians

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
      // this.cameraControls.enableKeys = true

      // The four arrow keys
      // 默认键盘控制上下左右的键
      // this.cameraControls.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }
      // Mouse buttons
      // 鼠标点击按钮
      // this.cameraControls.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT }
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(5)
      this.scene.add(axesHelper)
    },
    initModels() {
      // const cubeGeometry = new THREE.CubeGeometry(0.1, 0.1, 0.1)
      // const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 })
      // const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
      // this.scene.add(cubeMesh)
      const that = this
      // model
      const loader = new GLTFLoader()
      // console.log('loader is ', loader)
      const uri = 'static/threejs/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf'
      loader.load(uri, function(gltf) {
        console.log('gltf is ', gltf)
        gltf.scene.traverse(function(child) {
          console.log('child is ', child)
          if (child.isMesh) {
            console.log('child.material is ', child.material)
            child.material.envMap = that.envMap
          }
        })
        // gltf.scene.scale.set(0.0100, 0.0100, .0100)
        that.scene.add(gltf.scene)
        console.log('that.scene is ', that.scene)
        // that.renderer.render(that.scene, that.camera)
        // that.render()
      })
    },
    initStats() {
      this.stats = new Stats()
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '20px'
      this.stats.domElement.style.top = '87px'
      this.$el.appendChild(this.stats.domElement)
    },
    onWindowResize() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.width, this.height)
    },
    animate() {
      this.stats.update()
      // this.cameraControls.update()
      requestAnimationFrame(this.animate)
      this.render()
    },
    render() {
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
#gltf {
  font-family: Monospace;
  background-color: #cccccc;
  color: #fff;
  margin: 0;
  overflow: hidden;
}
#info {
  color: #fff;
  /*position: absolute;*/
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
#info a {
  color: #f00;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
