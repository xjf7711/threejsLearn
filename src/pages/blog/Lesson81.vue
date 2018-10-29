<template>
  <div class="example">
    <h2>81 Three.js 使用TWEEN插件实现动画</h2>
    <div class="markdown_views">
      <h2 id="简介">
      <a name="t0"/>简介</h2>

      <p>
        Tween.js是一个轻量级的 JavaScript库，中文官网是：
        <a href="http://www.createjs.cc/tweenjs/" rel="nofollow" target="_blank">http://www.createjs.cc/tweenjs/</a>。通过这个库可以很容易地实现某个属性在两个值之间的进行过渡，而且起始值和结束值之间的所有中间值都会自动计算出来，这个过程叫作
        tweening（补间）。基础请查看：
        <a href="https://blog.csdn.net/qq_30100043/article/details/79697349#t19" rel="nofollow" target="_blank">Tween.js补间动画插件入门</a>
      </p>

      <h2 id="实现案例">
      <a name="t1"/>实现案例</h2>

      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-03-27/141.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-03-27/141.html</a>
      </p>

      <ul>
        <li>首先需要引入 Tween.js插件文件</li>
      </ul>

      <pre class="prettyprint" name="code"><code class="hljs xml has-numbering"><span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"/lib/js/libs/tween.min.js"</span>&gt;</span><span class="javascript"/><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span></code></pre>

      <ul>
        <li>我们实例化对象，案例里面，我们创建了两个补间：tween和 tweenBack。 tween补间定义了 position的属性如何从1过渡到0， tweenBack刚好相反。通过使用 chain()方法可以将这两个补间衔接起来，这样当动画启动之后，程序就会在这两个补间循环。代码最后定义的是 onUpdate方法，这个方法通过获取当前的 position的值重新生成了所有顶点的 y轴的位置。</li>
      </ul>

      <pre class="prettyprint" name="code">
        <code class="hljs avrasm has-numbering">const position = {
          <span class="hljs-built_in">y</span>:
          <span class="hljs-number">1</span>}
          <span class="hljs-comment">;</span>tween = new TWEEN
          <span class="hljs-preprocessor">.Tween</span>(position)
          <span class="hljs-preprocessor">.to</span>({
          <span class="hljs-built_in">y</span>:
          <span class="hljs-number">0</span>},
          <span class="hljs-number">5000</span>)
          <span class="hljs-comment">;</span>tween
          <span class="hljs-preprocessor">.easing</span>(TWEEN
          <span class="hljs-preprocessor">.Easing</span>
          <span class="hljs-preprocessor">.Sinusoidal</span>
          <span class="hljs-preprocessor">.InOut</span>)
          <span class="hljs-comment">;</span>const tweenBack = new TWEEN
          <span class="hljs-preprocessor">.Tween</span>(position)
          <span class="hljs-preprocessor">.to</span>({
          <span class="hljs-built_in">y</span>:
          <span class="hljs-number">1</span>},
          <span class="hljs-number">5000</span>)
          <span class="hljs-comment">;</span>tweenBack
          <span class="hljs-preprocessor">.easing</span>(TWEEN
          <span class="hljs-preprocessor">.Easing</span>
          <span class="hljs-preprocessor">.Sinusoidal</span>
          <span class="hljs-preprocessor">.InOut</span>)
          <span class="hljs-comment">;</span>tween
          <span class="hljs-preprocessor">.chain</span>(tweenBack)
          <span class="hljs-comment">;</span>tweenBack
          <span class="hljs-preprocessor">.chain</span>(tween)
          <span class="hljs-comment">;</span>const count = geometry
          <span class="hljs-preprocessor">.getAttribute</span>(
          <span class="hljs-string">"position"</span>)
          <span class="hljs-preprocessor">.count</span>
          <span class="hljs-comment">;</span>

//获取一下模型的最矮处
geometry<span class="hljs-preprocessor">.computeBoundingBox</span>()<span class="hljs-comment">;</span>
const minY = geometry<span class="hljs-preprocessor">.boundingBox</span><span class="hljs-preprocessor">.min</span><span class="hljs-preprocessor">.y</span><span class="hljs-comment">;</span>

const onUpdate = function () {
    const <span class="hljs-built_in">y</span> = this<span class="hljs-preprocessor">.y</span><span class="hljs-comment">;</span>

    const arr = []<span class="hljs-comment">;</span>
    for (const i = <span class="hljs-number">0</span><span class="hljs-comment">; i &lt; count; i++) {</span>
        arr<span class="hljs-preprocessor">.push</span>(geometry<span class="hljs-preprocessor">.localPosition</span>[i * <span class="hljs-number">3</span>])<span class="hljs-comment">;</span>
        arr<span class="hljs-preprocessor">.push</span>((geometry<span class="hljs-preprocessor">.localPosition</span>[i * <span class="hljs-number">3</span> + <span class="hljs-number">1</span>]-minY) * <span class="hljs-built_in">y</span>)<span class="hljs-comment">;</span>
        arr<span class="hljs-preprocessor">.push</span>(geometry<span class="hljs-preprocessor">.localPosition</span>[i * <span class="hljs-number">3</span> + <span class="hljs-number">2</span>])<span class="hljs-comment">;</span>
    }

    geometry<span class="hljs-preprocessor">.getAttribute</span>(<span class="hljs-string">"position"</span>)<span class="hljs-preprocessor">.array</span> = new Float32Array(arr)<span class="hljs-comment">;</span>

    geometry<span class="hljs-preprocessor">.getAttribute</span>(<span class="hljs-string">"position"</span>)<span class="hljs-preprocessor">.needsUpdate</span> = true<span class="hljs-comment">;</span>

}<span class="hljs-comment">;</span>

tween<span class="hljs-preprocessor">.onUpdate</span>(onUpdate)<span class="hljs-comment">;</span>
tweenBack<span class="hljs-preprocessor">.onUpdate</span>(onUpdate)<span class="hljs-comment">;</span></code></pre>

      <ul>
        <li>补间动画需要在模型加载完成后就启动，所以我们在下面的函数末尾调用
        <code>tween.start()</code>。</li>
      </ul>

      <pre class="prettyprint" name="code">
        <code class="hljs sql has-numbering">tween.<span class="hljs-operator"><span class="hljs-keyword">start</span>();</span>
      </code>
      </pre>

      <ul>
        <li>当补间启动后，我们还需要告知
          <code>Tween.js</code>库什么时候来更新所有的补间，所以我们在每次刷新时，调用
        <code>TWEEN.update()</code>方法：</li>
      </ul>

      <pre class="prettyprint" name="code"><code class="hljs mel has-numbering">function <span class="hljs-keyword">render</span>() {

      TWEEN.update();

    <span class="hljs-keyword">renderer</span>.<span class="hljs-keyword">render</span>(scene, <span class="hljs-keyword">camera</span>);
}</code></pre>

      <h2 id="案例代码">
      <a name="t2"/>案例代码</h2>

    </div>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
import PLYLoader from '@/assets/threejs/js/loaders/PLYLoader'
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
      rectLight: null,
      rectLightHelper: null,
      controls: null,
      sphere: null,
      gui: null,
      stats: null,
      scaleStep: 0,
      positionStep: 0,
      tween: null
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
      this.renderer.setClearColor(0xffffff)
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

      this.camera.position.set(0, 0, 50)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },

    // 场景

    initScene() {
      this.scene = new THREE.Scene()
    },

    // 初始化dat.GUI简化试验流程

    initGui() {
      // 声明一个保存需求修改的相关数据的对象
      // const gui = {}
      //
      // const datGui = new dat.GUI()
      // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
    },

    // 光源
    initLight() {
      this.scene.add(new THREE.AmbientLight(0x444444))

      const light = new THREE.PointLight(0xffffff)

      light.position.set(0, 50, 50)

      // 告诉平行光需要开启阴影投射

      light.castShadow = true

      this.scene.add(light)
    },
    // 模型
    initModel() {
      // 辅助工具

      const helper = new THREE.AxesHelper(50)

      this.scene.add(helper)

      const loader = new PLYLoader()

      loader.load(
        'static/threejs/examples/models/ply/binary/Lucy100k.ply',
        geometry => {
          console.log('geometry is ', geometry)
          // 更新顶点的法向量
          geometry.computeVertexNormals()

          // 创建纹理，并将模型添加到场景道中

          const material = new THREE.MeshStandardMaterial({ color: 0x0055ff })

          const mesh = new THREE.Mesh(geometry, material)

          mesh.rotation.y = Math.PI

          mesh.scale.set(0.02, 0.02, 0.02)

          this.scene.add(mesh)

          // 保存一份默认的顶点信息

          const position = geometry.getAttribute('position').array
          console.log('position is ', position)
          geometry.localPosition = []

          for (let i = 0; i < position.length; i++) {
            geometry.localPosition.push(position[i])
          }

          // 初始化tween动画

          this.initTween(geometry)
        }
      )
    },

    // 添加tween动画
    initTween(geometry) {
      const position = { y: 1 }

      const tween = new TWEEN.Tween(position).to({ y: 0 }, 5000)
      // this.tween = tween
      tween.easing(TWEEN.Easing.Sinusoidal.InOut)

      const tweenBack = new TWEEN.Tween(position).to({ y: 1 }, 5000)

      tweenBack.easing(TWEEN.Easing.Sinusoidal.InOut)

      tween.chain(tweenBack)

      tweenBack.chain(tween)

      const count = geometry.getAttribute('position').count

      // 获取一下模型的最矮处

      geometry.computeBoundingBox()

      const minY = geometry.boundingBox.min.y

      const onUpdate = function() {
        // console.log(this.y)
        const y = this.y // ??

        const arr = []

        for (let i = 0; i < count; i++) {
          arr.push(geometry.localPosition[i * 3])

          arr.push((geometry.localPosition[i * 3 + 1] - minY) * y)

          arr.push(geometry.localPosition[i * 3 + 2])
        }

        geometry.getAttribute('position').array = new Float32Array(arr)

        geometry.getAttribute('position').needsUpdate = true
      }

      tween.onUpdate(onUpdate)

      tweenBack.onUpdate(onUpdate)

      tween.start()
    },
    // 初始化性能插件

    initStats() {
      this.stats = new Stats()
      // Align top-left
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '0px'
      this.stats.domElement.style.top = '0px'
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
      TWEEN.update()

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

      // this.renderer.render(this.scene, this.camera)
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
