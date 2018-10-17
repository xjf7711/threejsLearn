<template>
  <div class="example">
    <h2>{{ title }}</h2>
    <!--<canvas id="mainCanvas" :width="width" :height="height"/>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import ColladaLoader from '@/assets/threejs/js/loaders/ColladaLoader'
import windowResize from '../../mixin/windowResize'
// import ColladaLoader from 'static/threejs/examples/js/loaders/ColladaLoader'
// import "static/threejs/examples/js/loaders/ColladaLoader";
import OrbitControls from 'threejs-orbit-controls'
import stats from '../../mixin/stats'
import animate from '../../mixin/animate'
export default {
  name: 'Example733',
  mixins: [stats, animate, windowResize],
  data() {
    return {
      title: '例 7.3.3',
      width: 700,
      height: 500,

      renderer: null,
      scene: null,
      camera: null,
      cameraControls: null,
      id: null
    }
  },
  mounted() {
    // THREE.ColladaLoader = ColladaLoader()
    this.init()
    this.initHelper()
    this.initCameraControls()
  },
  methods: {
    initHelper() {
      const axesHelper = new THREE.AxesHelper(10)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(10, 10)
      this.scene.add(gridHelper)
    },
    initCameraControls() {
      // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
      // 新建一个轨道控制器
      // 如果初始化时不传入第二个参数，orbitControl默认监听的是document，自然地整个文档范围内的所有相关事件都会被监听。
      // 相应的，解决方法自然是把场景所在的canvas作为第二个参数传进来
      this.cameraControls = new OrbitControls(this.camera, this.renderer.domElement)

      // Set to false to disable this control
      // 鼠标控制是否可用
      this.cameraControls.enabled = true

      // "target" sets the location of focus, where the object orbits around
      // 聚焦坐标
      // this.cameraControls.target = new THREE.Vector3() // 控制焦点
      this.cameraControls.target.set(0, 0, 0)
      this.camera.lookAt(this.cameraControls.target)
      // How far you can dolly in and out ( PerspectiveCamera only )
      // 最大最小相机移动距离(景深相机)
      this.cameraControls.minDistance = 10
      this.cameraControls.maxDistance = 180
      // How far you can orbit vertically, upper and lower limits.
      // Range is 0 to Math.PI radians.
      // 最大仰视角和俯视角
      this.cameraControls.minPolarAngle = 0.1 * Math.PI // radians
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
    },
    init() {
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setClearColor(0xdddddd)
      this.renderer.setSize(this.width, this.height)
      this.$el.appendChild(this.renderer.domElement)

      this.scene = new THREE.Scene()

      this.camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
      this.camera.position.set(15, 25, 25)
      this.camera.lookAt(new THREE.Vector3(0, 2, 0))
      // this.scene.add(this.camera)

      // const geo = new THREE.CubeGeometry(1, 1, 1)
      // const mtl = new THREE.MeshLambertMaterial({ color: 0xff0000 })
      // const mesh = new THREE.Mesh(geo, mtl)
      // this.scene.add(mesh)
      const loader = new ColladaLoader()

      // loader.load("/guide/lib/y5.dae", collada => {
      loader.load('static/threejs/guide/lib/port.dae', collada => {
        this.scene.add(collada)
        if (collada.scene.children.length > 0) {
          console.log(collada)
          this.scene.add(collada.scene.children[0])
          // this.render()
        }
      })

      const light = new THREE.DirectionalLight(0xffffff)
      light.position.set(20, 10, 5)
      this.scene.add(light)

      // this.id = setInterval(this.render, 200)
    }
    // render() {
    //   this.renderer && this.renderer.render(this.scene, this.camera)
    // }
  }
}
</script>

<style scoped>
.example {
  background-color: #eeeeee;
  width: 100%;
  height: 900px;
}
</style>
