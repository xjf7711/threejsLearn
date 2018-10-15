<template>
  <div class="example">
    <h2>舰艇外观</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
// import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
import OrbitControls from 'threejs-orbit-controls'
import Sky from '@/assets/threejs/js/objects/Sky.js'
import Water from '@/assets/threejs/js/objects/Water.js'
import stats from '../mixin/stats'
import clearWebGLContext from '../mixin/clearWebGLContext'
import windowResize from '../mixin/windowResize'
// import animate from '../mixin/animate'
// import Water from '@/assets/threejs/js/objects/Water2.js'
export default {
  name: 'Outview',
  mixins: [clearWebGLContext, stats, windowResize],
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      cameraControls: null,
      directionalLight: null,
      step: 0,
      rotation: 0,
      gui: null,
      stats: null,
      water: null,
      sky: null,
      myReq: null
    }
  },
  mounted() {
    this.initScene()
    this.initCamera()
    this.initLight()
    this.initRenderer()
    this.initCameraControls()
    this.initHelper()
    this.initGui()
    this.initModels()
    this.animate()
  },
  beforeDestroy() {
    cancelAnimationFrame(this.myReq)
  },
  methods: {
    // 场景
    initScene() {
      this.scene = new THREE.Scene()
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
      this.renderer.shadowMap.type = THREE.PCFShadowMap
      this.$el.appendChild(this.renderer.domElement)
    },
    initLight() {
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
      this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      // this.directionalLight.position.set(-50, 50, -50)
      this.scene.add(this.directionalLight)
      // const hemiLight = new THREE.HemisphereLight(0xffffFF, 0x080820, 1)
      // hemiLight.position.set(0, 500, 0)
      // this.scene.add(hemiLight)
      // const hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6)
      // const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
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

      // this.cameraControls.addEventListener('change', this.updateControls)

      // Set to false to disable this control
      // 鼠标控制是否可用
      this.cameraControls.enabled = true

      // "target" sets the location of focus, where the object orbits around
      // 聚焦坐标
      // this.cameraControls.target = new THREE.Vector3() // 控制焦点
      this.cameraControls.target.set(0, 10, 0)
      this.camera.lookAt(this.cameraControls.target)
      // How far you can dolly in and out ( PerspectiveCamera only )
      // 最大最小相机移动距离(景深相机)
      this.cameraControls.minDistance = 80
      this.cameraControls.maxDistance = 1800
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
    initHelper() {
      const axesHelper = new THREE.AxesHelper(500)
      this.scene.add(axesHelper)
      // const gridHelper = new THREE.GridHelper(1000, 20)
      // this.scene.add(gridHelper)
    },
    initGui() {
      // this.controls = {
      //   // we need the first child, since it's a multimaterial
      // }
      //
      // this.gui = new dat.GUI()
    },
    initModels() {
      // GROUND
      // const groundGeo = new THREE.PlaneBufferGeometry(10000, 10000)
      // const groundMat = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x050505 })
      // groundMat.color.setHSL(0.095, 1, 0.75)
      //
      // const ground = new THREE.Mesh(groundGeo, groundMat)
      // ground.rotation.x = -Math.PI / 2
      // ground.position.y = 3
      // this.scene.add(ground)
      // ground.receiveShadow = true

      this.loadObj()
      // this.drawSky()
      // this.drawOcean()
      // this.updateSun()
    },

    animate() {
      this.stats.update()
      // this.water.material.uniforms.time.value += 1.0 / 60.0
      this.myReq = requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    },
    loadObj() {
      const loader = new THREE.JSONLoader()
      // const uri = 'static/threejs/models/dimianA.json'
      const uri = 'static/threejs/models/warship/outview.json'
      // const uri = 'static/threejs/models/misc_chair01.json'
      console.log('uri is ' + uri)

      loader.load(uri, (geometry, mat) => {
        // console.log('loader.load onload geometry is ', geometry)
        // console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])

        // this.mesh.scale.x = 10
        // this.mesh.scale.y = 10
        // this.mesh.scale.z = 10

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
    drawSky() {
      // Skybox
      this.sky = new Sky()
      this.sky.scale.setScalar(10000)
      this.scene.add(this.sky)
    },
    drawOcean() {
      // Water
      const waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000)

      this.water = new Water(
        waterGeometry,
        {
          textureWidth: 512,
          textureHeight: 512,
          waterNormals: new THREE.TextureLoader().load('static/threejs/examples/textures/waternormals.jpg', function(texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping
          }),
          alpha: 1.0,
          sunDirection: this.directionalLight.position.clone().normalize(),
          sunColor: 0xffffff,
          waterColor: 0x001e0f,
          distortionScale: 3.7,
          fog: this.scene.fog !== undefined
        }
      )
      this.water.position.y = 8
      this.water.rotation.x = -Math.PI / 2

      this.scene.add(this.water)
    },
    drawWater() {
      const waterGeometry = new THREE.PlaneBufferGeometry(20000, 20000)
      const params = {
        color: '#ffffff',
        scale: 4,
        flowX: 1,
        flowY: 1
      }
      const water = new Water(waterGeometry, {
        color: params.color,
        scale: params.scale,
        flowDirection: new THREE.Vector2(params.flowX, params.flowY),
        textureWidth: 1024,
        textureHeight: 1024
      })

      water.position.y = 8
      water.rotation.x = Math.PI * -0.5
      water.receiveShadow = true
      this.scene.add(water)
    },
    updateSun() {
      var parameters = {
        distance: 400,
        inclination: 0.49,
        azimuth: 0.205
      }

      const cubeCamera = new THREE.CubeCamera(1, 20000, 256)
      cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter
      var theta = Math.PI * (parameters.inclination - 0.5)
      var phi = 2 * Math.PI * (parameters.azimuth - 0.5)

      this.directionalLight.position.x = parameters.distance * Math.cos(phi)
      this.directionalLight.position.y = parameters.distance * Math.sin(phi) * Math.sin(theta)
      this.directionalLight.position.z = parameters.distance * Math.sin(phi) * Math.cos(theta)

      this.sky.material.uniforms.sunPosition.value = this.directionalLight.position.copy(this.directionalLight.position)
      this.water.material.uniforms.sunDirection.value.copy(this.directionalLight.position).normalize()

      cubeCamera.update(this.renderer, this.scene)
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
