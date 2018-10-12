<template>
  <div class="example">
    <h2>28 THREE.JS的特殊光源THREE.HEMISPHERELIGHT户外光照光源</h2>
    <div class="markdown_views">
      <h3 id="简介">
      <a name="t0"/>简介</h3>

      <p>此光源可以创建出更加贴近自然的户外光照效果。就是为了模拟在户外场景中的反光效果。</p>

      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/30.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/30.html</a>
      </p>

      <h3 id="光源简单的创建">
      <a name="t1"/>光源简单的创建</h3>

      <p>首先实例化函数：</p>

      <pre class="prettyprint" name="code"><code class="hljs cs has-numbering"><span class="hljs-keyword">var</span> hemiLight = <span class="hljs-keyword">new</span> THREE.HemisphereLight(天空的反光颜色,地面的反光颜色,光的强度);</code></pre>

      <p>然后设置光的位置</p>

      <pre class="prettyprint" name="code"><code class="hljs sql has-numbering">hemiLight.position.<span class="hljs-operator"><span class="hljs-keyword">set</span>(<span class="hljs-number">0</span>,<span class="hljs-number">500</span>,<span class="hljs-number">0</span>);</span></code></pre>

      <p>最后添加到场景当中去</p>

      <pre class="prettyprint" name="code"><code class="hljs avrasm has-numbering">scene<span class="hljs-preprocessor">.add</span>(hemiLight)<span class="hljs-comment">;</span></code></pre>

      <h3 id="相关属性">
      <a name="t2"/>相关属性</h3>

      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>groundColor</td>
            <td>从地面发出的光线的颜色</td>
          </tr>
          <tr>
            <td>color</td>
            <td>从天空发出的光线的颜色</td>
          </tr>
          <tr>
            <td>intensity</td>
            <td>光线照射的强度</td>
          </tr>
        </tbody>
      </table>

      <h3 id="案例代码">
      <a name="t3"/>案例代码</h3>
      <p><img width="100%" src="https://img-blog.csdn.net/20170825011813300?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""> <br> 这个案例是通过three.js上一节的代码修改而成，可以调节相关属性：
      </p>
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
      hemiLight: null,
      directionalLight: null,
      controls: null,
      sphere: null,
      gui: null,
      debug: null,
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

    // 初始化dat.GUI简化试验流程

    initGui() {
      // 声明一个保存需求修改的相关数据的对象

      const gui = {
        directionalLight: '#ffffff', // 点光源

        directionalLightIntensity: 1, // 灯光强度

        visible: true, // 是否可见

        castShadow: true,

        exponent: 30,

        target: 'plane',

        debug: false,

        groundColor: '#00ff00',

        skyColor: '#0000ff',

        hemiLightIntensity: 0.3

      }
      this.gui = gui
      const datGui = new dat.GUI()

      // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
      const hemiLight = this.hemiLight
      datGui.addColor(gui, 'skyColor').onChange(function(e) {
        hemiLight.color = new THREE.Color(e)
      })

      datGui.addColor(gui, 'groundColor').onChange(function(e) {
        hemiLight.groundColor = new THREE.Color(e)
      })

      datGui.add(gui, 'hemiLightIntensity', 0, 1).onChange(function(e) {
        hemiLight.intensity = e
      })
      const directionalLight = this.directionalLight
      datGui.addColor(gui, 'directionalLight').onChange(function(e) {
        directionalLight.color = new THREE.Color(e)
      })

      datGui.add(gui, 'directionalLightIntensity', 0, 5).onChange(function(e) {
        directionalLight.intensity = e
      })

      datGui.add(gui, 'visible').onChange(function(e) {
        directionalLight.visible = e
      })

      datGui.add(gui, 'castShadow').onChange(function(e) {
        directionalLight.castShadow = e
      })

      datGui.add(gui, 'debug').onChange((e) => {
        if (e) {
          this.debug = new THREE.CameraHelper(directionalLight.shadow.camera)

          this.debug.name = 'debug'

          this.scene.add(this.debug)
        } else {
          this.debug = this.scene.getObjectByName('debug')

          this.scene.remove(this.debug)
        }
      })
    },

    // 光源
    initLight() {
      const hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.3)

      hemiLight.position.set(0, 500, 0)

      this.scene.add(hemiLight)

      const directionalLight = new THREE.DirectionalLight('#ffffff')

      directionalLight.position.set(-40, 60, -10)

      directionalLight.shadow.camera.near = 20 // 产生阴影的最近距离

      directionalLight.shadow.camera.far = 200 // 产生阴影的最远距离

      directionalLight.shadow.camera.left = -50 // 产生阴影距离位置的最左边位置

      directionalLight.shadow.camera.right = 50 // 最右边

      directionalLight.shadow.camera.top = 50 // 最上边

      directionalLight.shadow.camera.bottom = -50 // 最下面

      // 这两个值决定使用多少像素生成阴影 默认512

      directionalLight.shadow.mapSize.height = 1024

      directionalLight.shadow.mapSize.width = 1024

      console.log(directionalLight)

      // 告诉平行光需要开启阴影投射

      directionalLight.castShadow = true

      this.directionalLight = directionalLight

      this.scene.add(directionalLight)
    },
    // font模型

    initModel() {
      // 辅助工具

      const helper = new THREE.AxisHelper(10)

      this.scene.add(helper)

      // 球体

      const sphereGeometry = new THREE.SphereGeometry(10, 30, 30)

      const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xeeeeee })

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

      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xaaaaaa })

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

      // 更新控制器
      this.controls.update()

      this.render()

      requestAnimationFrame(this.animate)
    },

    // 绘制

    draw() {
      this.initRender()

      this.initScene()

      this.initCamera()

      this.initLight()

      this.initGui()
      this.initModel()
      this.initControls()

      this.initStats()

      this.animate()

      window.onresize = this.onWindowResize
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
