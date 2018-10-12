<template>
  <div class="example">
    <h2>29 Three.js的特殊光源THREE.RectAreaLight窗口射入光线模拟</h2>
    <div class="markdown_views">
      <h3 id="简介">
      <a name="t0"/>简介</h3>

      <p>这种光在整个面上均匀地发射出一个矩形平面。这可以用来模拟像明亮的窗户或带状照明的东西。</p>

      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/31.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/31.html</a>
      </p>

      <h3 id="简单创建">
      <a name="t1"/>简单创建</h3>

      <p>由于是特殊光源，而且比较复杂，所以此灯光需要额外引入插件来创建</p>

      <pre class="prettyprint" name="code"><code class="hljs xml has-numbering"><span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"examples/js/lights/RectAreaLightUniformsLib.js"</span>&gt;</span><span class="javascript"/><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span></code></pre>

      <p>然后就可以实例化了</p>

      <pre class="prettyprint" name="code"><code class="hljs cs has-numbering"><span class="hljs-keyword">var</span> rectLight = <span class="hljs-keyword">new</span> THREE.RectAreaLight(颜色, 光的强度, 宽度, 高度);</code></pre>

      <p>最后添加到场景当中即可</p>

      <h3 id="案例代码">
      <a name="t2"/>案例代码</h3>

      <p><img width="700" src="https://img-blog.csdn.net/20170831004859023?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

    </div>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import '@/assets/threejs/js/lights/RectAreaLightUniformsLib'
import OrbitControls from 'threejs-orbit-controls'
export default {
  name: 'Lesson29',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      rectLight: null,
      rectLightHelper: null,
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
    },

    // 光源
    initLight() {
      const ambientLight = new THREE.AmbientLight(0x111111)

      this.scene.add(ambientLight)

      const rectLight = new THREE.RectAreaLight(0xffffff, 500, 10, 10)

      rectLight.position.set(5, 10, -20)
      this.rectLight = rectLight
      this.scene.add(rectLight)

      // TODO: ensure RectAreaLight handles target param correctly

      this.rectLightHelper = new THREE.RectAreaLightHelper(rectLight)

      this.scene.add(this.rectLightHelper)
    },
    // font模型

    initModel() {
      // 辅助工具

      const helper = new THREE.AxesHelper(10)

      this.scene.add(helper)

      // 球体

      const sphereGeometry = new THREE.SphereGeometry(10, 30, 30)

      const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff00ff })

      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

      sphere.position.set(-20, 20, 0)

      sphere.castShadow = true

      this.scene.add(sphere)

      // 立方体

      const cubeGeometry = new THREE.CubeGeometry(10, 10, 10)

      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff })

      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

      cube.position.x = 30

      cube.position.y = 5

      cube.position.z = -5

      // 告诉立方体需要投射阴影

      cube.castShadow = true

      this.scene.add(cube)

      // 底部平面

      const planeGeometry = new THREE.PlaneGeometry(5000, 5000, 20, 20)

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

    // 初始化dat.GUI简化试验流程

    initGui() {
      // 声明一个保存需求修改的相关数据的对象
      const rectLight = this.rectLight
      const param = {

        motion: true,

        width: rectLight.width,

        height: rectLight.height,

        color: rectLight.color.getHex(),

        intensity: rectLight.intensity

      }

      const datGui = new dat.GUI()

      // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）

      // const lightFolder = gui.addFolder('Light');

      datGui.add(param, 'width', 0.1, 100).onChange(function(val) {
        rectLight.width = val
      })

      datGui.add(param, 'height', 0.1, 100).onChange(function(val) {
        rectLight.height = val
      })

      datGui.addColor(param, 'color').onChange(function(val) {
        rectLight.color.setHex(val)
      })

      datGui.add(param, 'intensity', 0.0, 1000).onChange(function(val) {
        rectLight.intensity = val
      })

      datGui.open()
    },

    render() {
      this.rectLightHelper.update()
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

      // 更新控制器
      this.controls.update()

      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.animate)
    },

    // 绘制

    draw() {
      this.initRender()

      this.initScene()

      this.initCamera()

      this.initLight()

      this.initModel()

      this.initControls()

      this.initStats()
      this.initGui()

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
