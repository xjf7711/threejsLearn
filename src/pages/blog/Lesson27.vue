<template>
  <div class="example">
    <h2>27 Three.js的平行光THREE.DirectionalLight</h2>
    <div class="markdown_views">
      <h3 id="简介">
      <a name="t0"/>简介</h3>

      <p>THREE.DirectionalLight平行光可以看作距离很远的光。它发出的所有光线都是平行的。比如太阳光，由于太阳离我们很远，我们可以把太阳的光线看作是平行的。</p>

      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/29.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/29.html</a>
      </p>

      <h3 id="与点光源和聚光灯光源的区别">
      <a name="t1"/>与点光源和聚光灯光源的区别</h3>

      <p>最大的区别就是，点光源和聚光灯光源距离物体越远光线越暗。光是从一点发出的。 <br> 而被平行光照亮的整个区域接收到的光强是一样的。光是平行的。
      </p>

      <h3 id="平行光的特点">
      <a name="t2"/>平行光的特点</h3>

      <p>由于模型的阴影渲染会消耗很多的性能，所以我们需要设置平行光相关的区域能够显示阴影，和阴影显示的良好程度。如下几个属性：</p>

      <pre class="prettyprint" name="code"><code class="hljs avrasm has-numbering">        directionalLight<span class="hljs-preprocessor">.shadow</span><span class="hljs-preprocessor">.camera</span><span class="hljs-preprocessor">.near</span> = <span class="hljs-number">20</span><span class="hljs-comment">; //产生阴影的最近距离</span>
        directionalLight<span class="hljs-preprocessor">.shadow</span><span class="hljs-preprocessor">.camera</span><span class="hljs-preprocessor">.far</span> = <span class="hljs-number">200</span><span class="hljs-comment">; //产生阴影的最远距离</span>
        directionalLight<span class="hljs-preprocessor">.shadow</span><span class="hljs-preprocessor">.camera</span><span class="hljs-preprocessor">.left</span> = -<span class="hljs-number">50</span><span class="hljs-comment">; //产生阴影距离位置的最左边位置</span>
        directionalLight<span class="hljs-preprocessor">.shadow</span><span class="hljs-preprocessor">.camera</span><span class="hljs-preprocessor">.right</span> = <span class="hljs-number">50</span><span class="hljs-comment">; //最右边</span>
        directionalLight<span class="hljs-preprocessor">.shadow</span><span class="hljs-preprocessor">.camera</span><span class="hljs-preprocessor">.top</span> = <span class="hljs-number">50</span><span class="hljs-comment">; //最上边</span>
        directionalLight<span class="hljs-preprocessor">.shadow</span><span class="hljs-preprocessor">.camera</span><span class="hljs-preprocessor">.bottom</span> = -<span class="hljs-number">50</span><span class="hljs-comment">; //最下面</span>

        //这两个值决定使用多少像素生成阴影 默认<span class="hljs-number">512</span>
        directionalLight<span class="hljs-preprocessor">.shadow</span><span class="hljs-preprocessor">.mapSize</span><span class="hljs-preprocessor">.height</span> = <span class="hljs-number">1024</span><span class="hljs-comment">;</span>
        directionalLight<span class="hljs-preprocessor">.shadow</span><span class="hljs-preprocessor">.mapSize</span><span class="hljs-preprocessor">.width</span> = <span class="hljs-number">1024</span><span class="hljs-comment">;</span></code></pre>

      <h3 id="案例">
      <a name="t3"/>案例</h3>

      <p><img src="https://img-blog.csdn.net/20170822012524060?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" width="100%" alt="这里写图片描述" title=""></p>

      <p>打开辅助功能就能清清楚楚的看清楚最近距离和最远距离，这一块区域内的模型会显示阴影。 <br> 全部代码如下：
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
      ambientLight: null,
      directionalLight: null,
      controls: null,
      gui: null,
      stats: null,
      debug: false
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
        ambientLight: '#111111', // 环境光源

        directionalLight: '#ffffff', // 点光源

        intensity: 1, // 灯光强度

        visible: true, // 是否可见

        castShadow: true,

        exponent: 30,

        target: 'plane',

        debug: true
      }
      this.gui = gui
      const datGui = new dat.GUI()

      // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）

      datGui.addColor(gui, 'ambientLight').onChange((e) => {
        this.ambientLight.color = new THREE.Color(e)
      })

      datGui.addColor(gui, 'directionalLight').onChange((e) => {
        this.directionalLight.color = new THREE.Color(e)
      })

      datGui.add(gui, 'intensity', 0, 5).onChange((e) => {
        this.directionalLight.intensity = e
      })

      datGui.add(gui, 'visible').onChange((e) => {
        this.directionalLight.visible = e
      })

      datGui.add(gui, 'castShadow').onChange((e) => {
        this.directionalLight.castShadow = e
      })

      datGui.add(gui, 'debug').onChange((e) => {
        if (e) {
          this.debug = new THREE.CameraHelper(this.directionalLight.shadow.camera)

          this.debug.name = 'debug'

          this.scene.add(this.debug)
        } else {
          this.scene.remove(this.debug)
        }
      })
    },

    // 光源
    initLight() {
      this.ambientLight = new THREE.AmbientLight('#111111')

      this.scene.add(this.ambientLight)

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

      // console.log(directionalLight)

      // 告诉平行光需要开启阴影投射

      directionalLight.castShadow = true
      this.directionalLight = directionalLight
      this.scene.add(directionalLight)

      this.debug = new THREE.CameraHelper(directionalLight.shadow.camera)

      this.debug.name = 'debug'

      this.scene.add(this.debug)
    },
    // font模型

    initModel() {
      // 辅助工具

      const helper = new THREE.AxesHelper(10)

      this.scene.add(helper)

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

      const planeGeometry = new THREE.PlaneGeometry(100, 100)

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
