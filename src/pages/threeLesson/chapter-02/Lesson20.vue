<template>
  <div class="example">
    <h2>20 THREE.JS实现场景所有物体使用相同的材质</h2>
    <div class="htmledit_views">
      <p>scene.overrideMaterial可以强制场景内的所有的物体使用相同的指定材质来绘制图形。</p>
      <p>案例查看地址
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/22.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/22.html</a>
      </p>
      <p><br></p>
      <p>具体使用案例，我在案例中给场景的相关属性添加了：</p>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//场景内所有模型都使用同一种材质</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        scene.overrideMaterial = <span class="hljs-keyword">new</span> THREE.MeshStandardMaterial({<span class="hljs-attr">color</span>:<span class="hljs-number">0x00ffff</span>});</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>然后发现场景内的所有模型材质都相同了，如图
      <p/>
      <p><img src="https://img-blog.csdn.net/20170805114819728?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""><br><br></p>
    </div>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import OrbitControls from 'threejs-orbit-controls'
export default {
  name: 'Example15',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      light: null,
      controls: null,
      sphere: null,
      gui: null,
      stats: null
    }
  },
  mounted() {
    this.draw()
  },
  methods: {
    // 渲染器
    initRender() {
      this.width = this.$el.clientWidth

      this.height = this.$el.clientHeight

      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      })

      this.renderer.setSize(this.width, this.height)

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
        1000
      )

      this.camera.position.set(0, 40, 100)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },

    // 场景

    initScene() {
      this.scene = new THREE.Scene()

      // 场景内所有模型都使用同一种材质

      this.scene.overrideMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffff
      })
    },

    // 初始化dat.GUI简化试验流程

    initGui() {
      // 声明一个保存需求修改的相关数据的对象

      const gui = {

        lightY: 30, // 灯光y轴的位置

        sphereX: 0, // 球的x轴的位置

        sphereZ: 0, // 球的z轴的位置

        cubeX: 25, // 立方体的x轴位置

        cubeZ: -5 // 立方体的z轴的位置

      }
      this.gui = gui
      const datGui = new dat.GUI()

      // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）

      datGui.add(gui, 'lightY', 0, 100)

      datGui.add(gui, 'sphereX', -30, 30)

      datGui.add(gui, 'sphereZ', -30, 30)

      datGui.add(gui, 'cubeX', 0, 60)

      datGui.add(gui, 'cubeZ', -30, 30)
    },

    // 光源
    initLight() {
      this.scene.add(new THREE.AmbientLight(0x444444))

      const light = new THREE.PointLight(0xffffff)

      light.position.set(15, 30, 10)

      // 告诉平行光需要开启阴影投射

      light.castShadow = true
      this.light = light
      this.scene.add(light)
    },
    // font模型

    initModel() {
      // 上面的球

      const sphereGeometry = new THREE.SphereGeometry(5, 200, 200)

      const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xaaaaaa })

      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

      sphere.position.y = 5

      // 告诉球需要投射阴影

      sphere.castShadow = true
      this.sphere = sphere
      this.scene.add(sphere)

      // 光源的球

      const spGeometry = new THREE.SphereGeometry(0.5, 20, 20)

      const spMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff })

      const sp = new THREE.Mesh(spGeometry, spMaterial)

      sp.position.set(15, 30, 10)

      this.scene.add(sp)

      // 辅助工具

      const helper = new THREE.AxesHelper(10)

      this.scene.add(helper)

      // 立方体

      const cubeGeometry = new THREE.CubeGeometry(10, 10, 8)

      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff })

      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

      cube.position.x = 25

      cube.position.y = 5

      cube.position.z = -5

      // 告诉立方体需要投射阴影

      cube.castShadow = true

      this.cube = cube
      this.scene.add(cube)

      // 底部平面

      const planeGeometry = new THREE.PlaneGeometry(100, 100)

      const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa })

      const plane = new THREE.Mesh(planeGeometry, planeMaterial)

      plane.rotation.x = -0.5 * Math.PI

      plane.position.y = -0

      // 告诉底部平面需要接收阴影

      plane.receiveShadow = true

      this.scene.add(plane)
    },

    // 初始化性能插件

    initStats() {
      this.stats = new Stats()
      // this.renderer.domElement.append(stats.dom)
      this.$el.appendChild(this.stats.dom)
    },

    // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放

    initControls() {
      const controls = new OrbitControls(this.camera, this.renderer.domElement)

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

      controls.minDistance = 100

      // 设置相机距离原点的最远距离

      controls.maxDistance = 200

      // 是否开启右键拖拽

      controls.enablePan = true

      this.controls = controls
    },

    render() {
      this.renderer.render(this.scene, this.camera)
    },
    // 窗口变动触发的函数

    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight

      this.camera.updateProjectionMatrix()

      this.render()

      this.renderer.setSize(this.width, this.height)
    },

    animate() {
      // 更新控制器
      this.render()

      // 更新性能插件
      this.stats.update()

      // 更新相关位置
      const light = this.light
      const gui = this.gui
      const sphere = this.sphere
      const cube = this.cube

      light.position.y = gui.lightY

      sphere.position.x = gui.sphereX

      sphere.position.z = gui.sphereZ

      cube.position.x = gui.cubeX

      cube.position.z = gui.cubeZ

      // 更新控制器
      this.controls.update()

      this.render()

      requestAnimationFrame(this.animate)
    },

    // 绘制

    draw() {
      this.initGui()
      this.initRender()

      this.initScene()

      this.initCamera()

      this.initLight()

      this.initModel()

      this.initControls()

      this.initStats()

      this.animate()

      window.onresize = this.onWindowResize
    },
    handleClick() {
      this.draw()
    }
  }
}
</script>

<style scoped>
.example {
  padding: 20px;
  /*background-color: #ddd;*/
  width: 100%;
  height: 800px;
}
</style>
