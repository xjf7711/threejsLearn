import * as THREE from 'three'
// import TrackballControls from 'three-trackballcontrols-es6'
import OrbitControls from 'threejs-orbit-controls'
const TrackballControls = require('three-trackballcontrols')

export function trackballControls(camera, rendererDom) {
  var trackballControls = new TrackballControls(camera, rendererDom)
  trackballControls.rotateSpeed = 1.0
  trackballControls.zoomSpeed = 1.2
  trackballControls.panSpeed = 0.8
  trackballControls.noZoom = false
  trackballControls.noPan = false
  trackballControls.staticMoving = true
  trackballControls.dynamicDampingFactor = 0.3
  trackballControls.keys = [65, 83, 68]
  return trackballControls
}
export function orbitControls(camera, rendererDom) { // 占位
  // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
  // 新建一个轨道控制器
  // 如果初始化时不传入第二个参数，orbitControl默认监听的是document，自然地整个文档范围内的所有相关事件都会被监听。
  // 相应的，解决方法自然是把场景所在的canvas作为第二个参数传进来
  const orbitControls = new OrbitControls(camera, rendererDom)

  // this.mouseControls.addEventListener('change', this.updateControls)

  // Set to false to disable this control
  // 鼠标控制是否可用
  orbitControls.enabled = true

  // "target" sets the location of focus, where the object orbits around
  // 聚焦坐标
  orbitControls.target = new THREE.Vector3() // 控制焦点

  // How far you can dolly in and out ( PerspectiveCamera only )
  // 最大最小相机移动距离(景深相机)
  orbitControls.minDistance = 10
  orbitControls.maxDistance = 100
  // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.
  // 最大仰视角和俯视角
  orbitControls.minPolarAngle = 0.01 * Math.PI // radians
  orbitControls.maxPolarAngle = 0.49 * Math.PI // radians
  // How far you can orbit horizontally, upper and lower limits.
  // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
  // 水平方向视角限制
  orbitControls.minAzimuthAngle = -1.95 * Math.PI // -Infinity // radians
  orbitControls.maxAzimuthAngle = 1.95 * Math.PI // Infinity // radians

  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop
  // 惯性滑动，滑动大小默认0.25
  // 使动画循环使用时阻尼或自转 意思是否有惯性
  orbitControls.enableDamping = true
  // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
  orbitControls.dampingFactor = 0.25

  // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming
  // 滚轮是否可控制zoom，zoom速度默认1
  orbitControls.enableZoom = true
  orbitControls.zoomSpeed = 1.0

  // Set to false to disable rotating
  // 是否可旋转，旋转速度
  orbitControls.enableRotate = true
  orbitControls.rotateSpeed = 1.0

  // Set to false to disable panning
  // 是否可平移，默认移动速度为7px
  orbitControls.enablePan = true
  orbitControls.keyPanSpeed = 0.2	// pixels moved per arrow key push

  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop
  // 是否自动旋转，自动旋转速度。默认每秒30圈
  orbitControls.autoRotate = false
  orbitControls.autoRotateSpeed = 3.0 // 30 seconds per round when fps is 60

  // Set to false to disable use of the keys
  // 是否能使用键盘
  orbitControls.enableKeys = true

  // The four arrow keys
  // 默认键盘控制上下左右的键
  orbitControls.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }
  // Mouse buttons
  // 鼠标点击按钮
  // orbitControls.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT }
  // this.setCameraControls()
  return orbitControls
}
