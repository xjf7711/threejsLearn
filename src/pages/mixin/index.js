/**
 * 混入的集合
 */
import * as THREE from 'three'
// import OrbitControls from 'threejs-orbit-controls'
import * as dat from 'dat.gui'
import stats from './stats'
import animate from './animate'
import mouse from './mouse'
import clearWebGLContext from './clearWebGLContext'
import windowResize from './windowResize'
import { trackballControls, orbitControls } from './utils'

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
    this.initHelper()
  },
  mounted() {
    this.initCamera()
    this.initRenderer()
    this.initLight()
    this.initModels()
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
      this.renderer.setClearColor(new THREE.Color(0xaaaaff), 1.0)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMapSoft = true
      this.renderer.shadowMap.type = THREE.PCFShadowMap
      // console.log('this.renderer is ', this.renderer)
      this.$el.appendChild(this.renderer.domElement)
      // console.log('this.$el is ', this.$el)
    },
    setRenderer() {

    },
    initLight() {
      this.setAmbientLight()
      this.setSpotLight()
      this.setDirectionalLight()
      this.setPointLight()
      this.setHemisphereLight()
    },
    setAmbientLight() {
      const ambientLigth = new THREE.AmbientLight(0x404040, 0, 5) // soft white light
      this.scene.add(ambientLigth)
    },
    setSpotLight() {
      // white spotlight shining from the side, casting a shadow
      const position = new THREE.Vector3(-10, 30, 40)
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.copy(position)
      spotLight.shadow.mapSize.width = 2048
      spotLight.shadow.mapSize.height = 2048
      spotLight.shadow.camera.fov = 15
      spotLight.castShadow = true
      spotLight.decay = 2
      spotLight.penumbra = 0.05
      spotLight.name = 'spotLight'

      this.scene.add(spotLight)
    },
    setPointLight() {
      // add pointlight for the shadows
      const pointLight = new THREE.PointLight(0xffffff, 0.8)
      // pointLight.position.set(0, 14, 0)
      this.camera.add(pointLight)
      this.scene.add(pointLight)
    },
    setDirectionalLight() {
      // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
      // directionalLight.position.set(-50, 50, -50)
      // this.scene.add(directionalLight)
      const position = new THREE.Vector3(100, 200, 200)
      const dirLight = new THREE.DirectionalLight(0xffffff)
      dirLight.position.copy(position)
      dirLight.shadow.mapSize.width = 2048
      dirLight.shadow.mapSize.height = 2048
      dirLight.castShadow = true

      dirLight.shadow.camera.left = -200
      dirLight.shadow.camera.right = 200
      dirLight.shadow.camera.top = 200
      dirLight.shadow.camera.bottom = -200

      this.scene.add(dirLight)
    },
    setHemisphereLight() {
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
      this.cameraControls = orbitControls(this.camera, this.renderer.domElement)
      this.setCameraControls()
    },
    initTrackballControls() {
      this.cameraControls = trackballControls(this.camera, this.renderer.domElement)
      this.setCameraControls()
    },
    setCameraControls() {},
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
      this.gui.domElement.style.top = '87px'
      this.$el.appendChild(this.gui.domElement)
      this.setGui()
    },
    setGui() { // 占位
    }
  }
}
