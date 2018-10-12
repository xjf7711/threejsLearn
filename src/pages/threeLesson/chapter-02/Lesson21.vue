<template>
  <div class="example">
    <h2>21 Three.js使用顶点绘制立方体</h2>
    <div class="markdown_views">
      <p>我们在学些WebGL基础的时候每天都是在一直研究顶点位置，法向量，绘制下标什么的。虽然复杂，但是毕竟原生，性能没得说。</p>

      <h5 id="threejs也给我们提供了相关的接口供我们使用原生的方法绘制模型">three.js也给我们提供了相关的接口供我们使用原生的方法绘制模型</h5>

      <p>下面是我的个人一个案例。</p>

      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/23.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/23.html</a>
      </p>

      <p>首先，我创建了一个空白的形状：</p>

      <pre class="prettyprint" name="code"><code class="language-javascript hljs  has-numbering">        <span class="hljs-comment">//立方体</span>
      <span class="hljs-keyword">var</span> cubeGeometry = <span class="hljs-keyword">new</span> THREE.Geometry();</code></pre>

      <p>立方体的形状如下：</p>

      <pre class="prettyprint" name="code"><code class="language-javascript hljs  has-numbering">        <span class="hljs-comment">// 创建一个立方体</span>
        <span class="hljs-comment">//    v6----- v5</span>
        <span class="hljs-comment">//   /|      /|</span>
        <span class="hljs-comment">//  v1------v0|</span>
        <span class="hljs-comment">//  | |     | |</span>
        <span class="hljs-comment">//  | |v7---|-|v4</span>
        <span class="hljs-comment">//  |/      |/</span>
      <span class="hljs-comment">//  v2------v3</span></code></pre>

      <p>然后添加了立方体的顶点，一共8个</p>

      <pre class="prettyprint" name="code"><code class="language-javascript hljs  has-numbering">        <span class="hljs-comment">//创建立方体的顶点</span>
        <span class="hljs-keyword">var</span> vertices = [
            <span class="hljs-keyword">new</span> THREE.Vector3(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">10</span>), <span class="hljs-comment">//v0</span>
            <span class="hljs-keyword">new</span> THREE.Vector3(-<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">10</span>), <span class="hljs-comment">//v1</span>
            <span class="hljs-keyword">new</span> THREE.Vector3(-<span class="hljs-number">10</span>, -<span class="hljs-number">10</span>, <span class="hljs-number">10</span>), <span class="hljs-comment">//v2</span>
            <span class="hljs-keyword">new</span> THREE.Vector3(<span class="hljs-number">10</span>, -<span class="hljs-number">10</span>, <span class="hljs-number">10</span>), <span class="hljs-comment">//v3</span>
            <span class="hljs-keyword">new</span> THREE.Vector3(<span class="hljs-number">10</span>, -<span class="hljs-number">10</span>, -<span class="hljs-number">10</span>), <span class="hljs-comment">//v4</span>
            <span class="hljs-keyword">new</span> THREE.Vector3(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, -<span class="hljs-number">10</span>), <span class="hljs-comment">//v5</span>
            <span class="hljs-keyword">new</span> THREE.Vector3(-<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, -<span class="hljs-number">10</span>), <span class="hljs-comment">//v6</span>
            <span class="hljs-keyword">new</span> THREE.Vector3(-<span class="hljs-number">10</span>, -<span class="hljs-number">10</span>, -<span class="hljs-number">10</span>) <span class="hljs-comment">//v7</span>
        ];

        cubeGeometry.vertices = vertices;</code></pre>

      <p>接着通过顶点的坐标生成了立方体的面</p>

      <pre class="prettyprint" name="code"><code class="language-javascript hljs  has-numbering">        <span class="hljs-comment">//创建立方的面</span>
        <span class="hljs-keyword">var</span> faces=[
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">0</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">1</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">1</span>,<span class="hljs-number">7</span>,<span class="hljs-number">2</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">6</span>,<span class="hljs-number">5</span>,<span class="hljs-number">4</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">6</span>,<span class="hljs-number">4</span>,<span class="hljs-number">7</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">1</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">5</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">7</span>),
            <span class="hljs-keyword">new</span> THREE.Face3(<span class="hljs-number">3</span>,<span class="hljs-number">7</span>,<span class="hljs-number">4</span>)
        ];

        cubeGeometry.faces = faces;</code></pre>

      <p>
        <strong>在这里需要注意：</strong> <br>
        <strong>（1）面是由三个顶点组成的一个三角形面，也是WebGL的实现面的方式。如果需要一个长方形，那就需要由两个三角形组合而成。</strong> <br>
        <strong>（2）如果要绘制的面是朝向相机的，那这个面的顶点的书写方式是逆时针绘制的，比如图上模型的第一个面的添加里面书写的是(0,1,2)。</strong> <br>
        <strong>（3）如果能使模型有灯光的效果，还需要设置法向量，让three.js自动生成即可，如下</strong>
      </p>

      <pre class="prettyprint" name="code"><code class="language-javascript hljs  has-numbering">        <span class="hljs-comment">//生成法向量</span>
        cubeGeometry.computeFaceNormals();</code></pre>

      <p>当前的这些步骤只是生成了形状，还需要和以前一样设置一个纹理，再通过THTEE.Mesh()方法生成网格</p>

      <pre class="prettyprint" name="code"><code class="language-javascript hljs  has-numbering">        <span class="hljs-keyword">var</span> cubeMaterial = <span class="hljs-keyword">new</span> THREE.MeshLambertMaterial({color: <span class="hljs-number">0x00ffff</span>});

      cube = <span class="hljs-keyword">new</span> THREE.Mesh(cubeGeometry, cubeMaterial);</code></pre>

      <p>这样就实现了一个立方体的绘制： <br>
      <img src="https://img-blog.csdn.net/20170805164634712?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

      <p>全部代码如下：</p>

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
    },

    // 初始化dat.GUI简化试验流程

    initGui() {
      // 声明一个保存需求修改的相关数据的对象
      const gui = {
        lightY: 30, // 灯光y轴的位置

        cubeX: 25, // 立方体的x轴位置

        cubeY: 10, // 立方体的x轴位置

        cubeZ: -5 // 立方体的z轴的位置
      }
      this.gui = gui
      const datGui = new dat.GUI()

      // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）

      datGui.add(gui, 'lightY', 0, 100)

      datGui.add(gui, 'cubeX', -30, 30)

      datGui.add(gui, 'cubeY', -30, 30)

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
      // 辅助工具

      const helper = new THREE.AxesHelper(10)

      this.scene.add(helper)

      // 创建一个立方体

      //    v6----- v5

      //   /|      /|

      //  v1------v0|

      //  | |     | |

      //  | |v7---|-|v4

      //  |/      |/

      //  v2------v3

      // 立方体

      const cubeGeometry = new THREE.Geometry()

      // 创建立方体的顶点

      const vertices = [

        new THREE.Vector3(10, 10, 10), // v0

        new THREE.Vector3(-10, 10, 10), // v1

        new THREE.Vector3(-10, -10, 10), // v2

        new THREE.Vector3(10, -10, 10), // v3

        new THREE.Vector3(10, -10, -10), // v4

        new THREE.Vector3(10, 10, -10), // v5

        new THREE.Vector3(-10, 10, -10), // v6

        new THREE.Vector3(-10, -10, -10) // v7

      ]

      cubeGeometry.vertices = vertices

      // 创建立方的面

      const faces = [

        new THREE.Face3(0, 1, 2),

        new THREE.Face3(0, 2, 3),

        new THREE.Face3(0, 3, 4),

        new THREE.Face3(0, 4, 5),

        new THREE.Face3(1, 6, 7),

        new THREE.Face3(1, 7, 2),

        new THREE.Face3(6, 5, 4),

        new THREE.Face3(6, 4, 7),

        new THREE.Face3(5, 6, 1),

        new THREE.Face3(5, 1, 0),

        new THREE.Face3(3, 2, 7),

        new THREE.Face3(3, 7, 4)

      ]

      cubeGeometry.faces = faces

      // 生成法向量

      cubeGeometry.computeFaceNormals()

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

      // 更新相关位置
      const light = this.light
      const gui = this.gui
      const cube = this.cube

      light.position.y = gui.lightY

      cube.position.x = gui.cubeX

      cube.position.y = gui.cubeY

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
