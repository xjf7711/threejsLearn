<template>
  <div class="example">
    <h2>88 Three.js 导入FBX格式骨骼绑定模型</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
// import '@/assets/threejs/js/libs/inflate.min.js'
// import FBXLoader from '@/assets/threejs/js/loaders/FBXLoader'
import FBXLoader from 'three-fbxloader-offical'
import Detector from '@/assets/threejs/Detector'
import OrbitControls from 'threejs-orbit-controls'

export default {
  name: 'Lesson88',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      // directionalLight: null,
      gui: null,
      stats: null,
      clock: new THREE.Clock(),
      mixer: null,
      meshHelper: null,
      action: null
    }
  },
  mounted() {
    this.width = this.$el.clientWidth - 40

    this.height = this.$el.clientHeight - 100
    // 兼容性判断
    if (!Detector.webgl) Detector.addGetWebGLMessage()

    // 绘制
    this.initGui()
    this.initRender()
    this.initScene()
    this.initCamera()
    this.initLight()
    this.initHelper()
    this.initModel()
    this.initControls()
    this.initStats()

    this.animate()
    window.onresize = this.onWindowResize
  },
  methods: {
    // 渲染器
    initRender() {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)
      this.renderer.setClearColor(0xeeeeee)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap
      this.$el.appendChild(this.renderer.domElement)
    },
    // 相机
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        0.1,
        2000
      )

      this.camera.position.set(100, 200, 300)
      // this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },

    // 场景
    initScene() {
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xa0a0a0)

      this.scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000)
    },

    // 光源
    initLight() {
      const ambientLight = new THREE.AmbientLight(0x444444)
      this.scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff)
      directionalLight.position.set(0, 200, 100)
      directionalLight.castShadow = true

      directionalLight.shadow.camera.top = 180
      directionalLight.shadow.camera.bottom = -100
      directionalLight.shadow.camera.left = -120
      directionalLight.shadow.camera.right = 120

      // 告诉平行光需要开启阴影投射
      directionalLight.castShadow = true
      this.scene.add(directionalLight)
    },
    initHelper() {
      // 辅助工具
      const axesHelper = new THREE.AxesHelper(50)
      this.scene.add(axesHelper)
      const arrowHelper = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 1, 0xcccccc, 1, 1)
      this.scene.add(arrowHelper)
      // 添加地板割线
      const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000)
      grid.material.opacity = 0.2
      grid.material.transparent = true
      this.scene.add(grid)
    },
    // 模型
    initModel() {
      // 地板
      var mesh = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(2000, 2000),
        new THREE.MeshPhongMaterial({ color: 0xffffff, depthWrite: false }))

      mesh.rotation.x = -Math.PI / 2
      mesh.receiveShadow = true
      this.scene.add(mesh)

      // 加载模型

      var loader = new FBXLoader()
      loader.load('static/threejs/models/fbx/Samba Dancing.fbx', mesh => {
        console.log('FBXLoader loaded, mesh is ', mesh)

        // 添加骨骼辅助
        this.meshHelper = new THREE.SkeletonHelper(mesh)
        this.scene.add(this.meshHelper)

        // 设置模型的每个部位都可以投影
        mesh.traverse(function(child) {
          if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })

        // AnimationMixer是场景中特定对象的动画播放器。当场景中的多个对象独立动画时，可以为每个对象使用一个AnimationMixer
        this.mixer = mesh.mixer = new THREE.AnimationMixer(mesh)

        // mixer.clipAction 返回一个可以控制动画的AnimationAction对象  参数需要一个AnimationClip 对象
        // AnimationAction.setDuration 设置一个循环所需要的时间，当前设置了一秒
        // 告诉AnimationAction启动该动作
        this.action = this.mixer.clipAction(mesh.animations[0])
        this.action.play()
        this.scene.add(mesh)
      })
    },

    // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
    initControls() {
      const controls = new OrbitControls(this.camera, this.renderer.domElement)
      // 设置控制器的中心点
      controls.target.set(0, 100, 0)
      // 如果使用animate方法时，将此函数删除
      // controls.addEventListener( 'change', render );
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      controls.enableDamping = true
      // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
      // controls.dampingFactor = 0.25;
      // 是否可以缩放
      controls.enableZoom = true
      // 是否自动旋转
      controls.autoRotate = false
      // 设置相机距离原点的最远距离
      controls.minDistance = 1
      // 设置相机距离原点的最远距离
      controls.maxDistance = 2000
      // 是否开启右键拖拽
      controls.enablePan = true
      this.controls = controls
    },

    // 初始化性能插件
    initStats() {
      this.stats = new Stats()
      // this.renderer.domElement.append(stats.dom)
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '20px'
      this.stats.domElement.style.top = '87px'
      this.$el.appendChild(this.stats.domElement)
    },

    // 初始化dat.GUI简化试验流程
    initGui() {
      // 声明一个保存需求修改的相关数据的对象
      const gui = {
        animation: true,
        helper: true // 模型辅助线
      }
      const datGui = new dat.GUI()
      datGui.domElement.style.position = 'absolute'
      datGui.domElement.style.right = '5px'
      datGui.domElement.style.top = '137px'
      // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
      datGui.add(gui, 'animation').onChange((e) => {
        if (e) {
          this.action.play()
        } else {
          this.action.stop()
        }
      })
      datGui.add(gui, 'helper').onChange((e) => {
        this.meshHelper.visible = e
      })
    },

    render() {
      this.renderer.render(this.scene, this.camera)
    },
    // 窗口变动触发的函数
    onWindowResize() {
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
      // this.render()
      this.renderer.setSize(this.width, this.height)
    },

    animate() {
      // 更新性能插件
      this.stats.update()
      const time = this.clock.getDelta()
      if (this.mixer) {
        this.mixer.update(time)
      }
      // this.controls.update()
      // requestAnimationFrame(this.animate)
      // 更新控制器
      this.render()
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
