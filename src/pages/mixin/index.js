/**
 * 混入的集合
 */
import * as THREE from 'three'
import OrbitControls from 'threejs-orbit-controls'
import * as dat from 'dat.gui'
import stats from './stats'
import animate from './animate'
import mouse from './mouse'
import clearWebGLContext from './clearWebGLContext'
import windowResize from './windowResize'
export default {
  mixins: [stats, animate, mouse, clearWebGLContext, windowResize],
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      cameraControls: null,
      gui: null,
      guiControls: null
    }
  },
  created() {
    // this.initScene()
    // this.initLight()
    // this.initHelper()
    // this.initModels()
    // this.initGui()
  },
  beforeMount() {
    this.initScene()
    this.initLight()
    this.initHelper()
    this.initModels()
  },
  mounted() {
    this.initCamera()
    this.initRenderer()
    this.initCameraControls()
    this.initGui()
    // // this.initScene()
    // this.initCamera()
    // // this.initLight()
    // this.initRenderer()
    // this.initCameraControls()
    // // this.initHelper()
    // this.initGui()
    // this.initModels()
  },
  methods: {
    // 场景
    initScene() {
      this.scene = new THREE.Scene()
      this.setScene()
    },
    setScene() {
      // this.scene.fog = new THREE.Fog(0xaaaaaa, 0.010, 200)
    },
    // 相机
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        1,
        10000
      )
      this.setCamera()
    },
    setCamera() {
      this.camera.position.set(30, 40, 50)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 渲染器
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer()
      this.setRenderer()
      this.renderer.setSize(this.width, this.height)
      this.renderer.setClearColor(0xaaaaff, 1.0)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = THREE.PCFShadowMap
      // console.log('this.renderer is ', this.renderer)
      this.$el.appendChild(this.renderer.domElement)
      // console.log('this.$el is ', this.$el)
    },
    setRenderer() {

    },
    initLight() {
      this.setLight()
    },
    setLight() {
      const ambientLigth = new THREE.AmbientLight(0x404040, 0, 5) // soft white light
      this.scene.add(ambientLigth)
      // white spotlight shining from the side, casting a shadow
      // const spotLight = new THREE.SpotLight(0xffffff)
      // spotLight.position.set(0, 20, 0)
      //
      // spotLight.castShadow = true
      // //
      // // spotLight.shadow.mapSize.width = 1024
      // // spotLight.shadow.mapSize.height = 1024
      // //
      // spotLight.shadow.camera.near = 500
      // spotLight.shadow.camera.far = 4000
      // spotLight.shadow.camera.fov = 30
      //
      // this.scene.add(spotLight)

      // add pointlight for the shadows
      // const pointLight = new THREE.PointLight(0xffffff, 0.8)
      // // pointLight.position.set(0, 14, 0)
      // this.camera.add(pointLight)
      // this.scene.add(pointLight)
      // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
      // directionalLight.position.set(-50, 50, -50)
      // this.scene.add(directionalLight)
      const hemiLight = new THREE.HemisphereLight(0xffffFF, 0x080820, 1)
      hemiLight.position.set(0, 500, 0)
      this.scene.add(hemiLight)

      // const hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6)
      // // const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
      // hemiLight.color.setHSL(0.6, 1, 0.6)
      // hemiLight.groundColor.setHSL(0.095, 1, 0.75)
      // hemiLight.position.set(0, 200, 0)
      // this.scene.add(hemiLight)

      // const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10)
      // this.scene.add(hemiLightHelper)
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
      this.cameraControls.target = new THREE.Vector3() // 控制焦点

      // How far you can dolly in and out ( PerspectiveCamera only )
      // 最大最小相机移动距离(景深相机)
      this.cameraControls.minDistance = 10
      this.cameraControls.maxDistance = 100
      // How far you can orbit vertically, upper and lower limits.
      // Range is 0 to Math.PI radians.
      // 最大仰视角和俯视角
      this.cameraControls.minPolarAngle = 0.01 * Math.PI // radians
      this.cameraControls.maxPolarAngle = 0.49 * Math.PI // radians
      // How far you can orbit horizontally, upper and lower limits.
      // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
      // 水平方向视角限制
      this.cameraControls.minAzimuthAngle = -1.95 * Math.PI // -Infinity // radians
      this.cameraControls.maxAzimuthAngle = 1.95 * Math.PI // Infinity // radians

      // Set to true to enable damping (inertia)
      // If damping is enabled, you must call controls.update() in your animation loop
      // 惯性滑动，滑动大小默认0.25
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.cameraControls.enableDamping = true
      // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
      this.cameraControls.dampingFactor = 0.25

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
      this.setCameraControls()
    },
    setCameraControls() { // 占位
    },
    initHelper() {
      this.setHelper()
    },
    setHelper() {
      const axesHelper = new THREE.AxesHelper(20)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(40, 20)
      this.scene.add(gridHelper)
    },
    initGui() {
      // this.guiControls = {
      //   // we need the first child, since it's a multimaterial
      // }
      //
      this.gui = new dat.GUI()
      this.gui.domElement.style.position = 'absolute'
      this.gui.domElement.style.right = '7px'
      this.gui.domElement.style.top = '137px'
      this.setGui()
    },
    setGui() { // 占位
    }
  }
}
