<template>
  <div class="example">
    <div class="blog-content-box">
      <div class="article-title-box">
        <h1 class="title-article">58 Three.js 通过THREE.Raycaster给模型绑定点击事件</h1>
      </div>
      <article>
        <div id="article_content" class="article_content clearfix csdn-tracking-statistics" data-pid="blog" data-mod="popu_307" data-dsm="post">
          <div class="markdown_views">
            <h2 id="简介">
            <a name="t0"/>简介</h2>

            <p>由于浏览器是一个 2d视口，而在里面显示 three.js的内容是 3d场景，所以，现在有一个问题就是如何将 2d视口的 x和 y坐标转换成 three.js场景中的 3d坐标。好在
            three.js已经有了解决相关问题的方案，那就是THREE.Raycaster射线，用于鼠标拾取（计算出鼠标移过的三维空间中的对象）等等。我们看一张图片： <br>
              <img src="https://img-blog.csdn.net/20180114022340458?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""> <br> 这张图片偷自：
              <a href="https://segmentfault.com/a/1190000010490845" rel="nofollow" target="_blank">https://segmentfault.com/a/1190000010490845</a> <br>
              我们一般都会设置三维场景的显示区域，如果，指明当前显示的2d坐标给THREE.Raycaster的话，它将生成一条从显示的起点到终点的一条射线。也就是说，我们再屏幕上点击了一个点，在three.js里面获取的则是一条直线。</p>

            <h2 id="threeraycaster构造函数和对象方法">
            <a name="t1"/>THREE.Raycaster构造函数和对象方法</h2>

            <h3 id="实例化">
            <a name="t2"/>实例化</h3>

            <pre class="prettyprint" name="code"><code class="hljs delphi has-numbering">new Raycaster( origin, direction, <span class="hljs-keyword">near</span>, <span class="hljs-keyword">far</span> );</code></pre>

            <p>
              origin — 光线投射的起点向量。 <br>
              direction  — 光线投射的方向向量，应该是被归一化的。 <br>
              near — 投射近点，用来限定返回比near要远的结果。near不能为负数。缺省为0。 <br>
              far — 投射远点，用来限定返回比far要近的结果。far不能比near要小。缺省为无穷大。</p>

            <h3 id="方法">
            <a name="t3"/>方法</h3>

            <h4 id="setfromcamera">setFromCamera</h4>

            <p>用一个新的原点和方向向量来更新射线（ray）。</p>

            <pre class="prettyprint" name="code"><code class="hljs avrasm has-numbering"><span class="hljs-preprocessor">.setFromCamera</span> ( coords, camera )</code></pre>

            <p>
              coords — 鼠标的二维坐标，在归一化的设备坐标(NDC)中，也就是X 和 Y 分量应该介于 -1 和 1 之间。 <br>
              camera — 射线起点处的相机，即把射线起点设置在该相机位置处。</p>

            <h4 id="intersectobject">intersectObject</h4>

            <p>检查射线和物体之间的所有交叉点（包含或不包含后代）。交叉点返回按距离排序，最接近的为第一个。 返回一个交叉点对象数组。</p>

            <pre class="prettyprint" name="code"><code class="hljs cs has-numbering">.intersectObject ( <span class="hljs-keyword">object</span>, recursive )</code></pre>

            <p>
              object — 用来检测和射线相交的物体。 <br>
              recursive — 如果为true，它还检查所有后代。否则只检查该对象本身。缺省值为false。</p>

            <h5 id="返回数组每一个对象的内容">返回数组每一个对象的内容</h5>

            <pre class="prettyprint" name="code"><code class="hljs r has-numbering">[ { distance, point, face, faceIndex, indices, object }, <span class="hljs-keyword">...</span> ]</code></pre>

            <p>
              distance – 射线的起点到相交点的距离 <br>
              point – 在世界坐标中的交叉点 <br>
              face – 相交的面 <br>
              faceIndex – 相交的面的索引 <br>
              indices – 组成相交面的顶点索引 <br>
              object – 相交的对象</p>

            <p>当一个网孔(Mesh)对象和一个缓存几何模型(BufferGeometry)相交时，faceIndex 将是 undefined，并且 indices 将被设置； 而当一个网孔(Mesh)对象和一个几何模型(Geometry)相交时，indices 将是 undefined。</p>

            <p>当计算这个对象是否和射线相交时，Raycaster 把传递的对象委托给 raycast 方法。 这允许 meshes 对于光线投射的响应可以不同于 lines 和 pointclouds。</p>

            <p>
            <em>注意</em>，对于网格，面（faces）必须朝向射线原点，这样才能被检测到；通过背面的射线的交叉点将不被检测到。 为了光线投射一个对象的正反两面，你得设置 material 的 side 属性为 THREE.DoubleSide。</p>

            <h2 id="点击事件实现案例">
            <a name="t4"/>点击事件实现案例</h2>

            <pre class="prettyprint" name="code"><code class="hljs mel has-numbering"><span class="hljs-comment">//声明raycaster和mouse变量</span>
    let raycaster = new THREE.Raycaster();
    let <span class="hljs-keyword">mouse</span> = new THREE.Vector2();

    function onMouseClick( <span class="hljs-keyword">event</span> ) {

        <span class="hljs-comment">//通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.</span>

        <span class="hljs-keyword">mouse</span>.x = ( <span class="hljs-keyword">event</span>.clientX / <span class="hljs-keyword">window</span>.innerWidth ) * <span class="hljs-number">2</span> - <span class="hljs-number">1</span>;
        <span class="hljs-keyword">mouse</span>.y = - ( <span class="hljs-keyword">event</span>.clientY / <span class="hljs-keyword">window</span>.innerHeight ) * <span class="hljs-number">2</span> + <span class="hljs-number">1</span>;

        <span class="hljs-comment">// 通过鼠标点的位置和当前相机的矩阵计算出raycaster</span>
        raycaster.setFromCamera( <span class="hljs-keyword">mouse</span>, <span class="hljs-keyword">camera</span> );

        <span class="hljs-comment">// 获取raycaster直线和所有模型相交的数组集合</span>
        let intersects = raycaster.intersectObjects( scene.children );

        console.<span class="hljs-keyword">log</span>(intersects);

        <span class="hljs-comment">//将所有的相交的模型的颜色设置为红色，如果只需要将第一个触发事件，那就数组的第一个模型改变颜色即可</span>
        <span class="hljs-keyword">for</span> ( let i = <span class="hljs-number">0</span>; i &lt; intersects.length; i++ ) {

            intersects[ i ].object.material.<span class="hljs-keyword">color</span>.set( <span class="hljs-number">0xff0000</span> );

        }

    }

            <span class="hljs-keyword">window</span>.addEventListener( <span class="hljs-string">'click'</span>, onMouseClick, false );</code></pre>

            <p>思路：先通过当前点击位置的坐标和相机计算出
            raycaster线，然后计算出相交的所有模型，修改模型的纹理。</p>

            <h2 id="案例代码">
            <a name="t5"/>案例代码</h2>

            <p><img src="https://img-blog.csdn.net/20180114024449844?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

            <p>查看案例效果：
              <a href="http://www.wjceo.com/blog/threejs/2018-02-13/60.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-13/60.html</a>
            </p>
          </div>
        </div>
      </article>
    </div>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
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
      raycaster: null
    }
  },
  mounted() {
    this.raycaster = new THREE.Raycaster()
    this.draw()
  },
  methods: {
    // 渲染器
    initRender() {
      this.width = this.$el.clientWidth

      this.height = this.$el.clientHeight

      this.renderer = new THREE.WebGLRenderer({
        antialias: true, alpha: true
      })

      this.renderer.setSize(this.width, this.height)

      // 告诉渲染器需要阴影效果
      // this.renderer.shadowMap.enabled = true
      // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap
      this.renderer.setClearColor(0xffffff)
      this.$el.appendChild(this.renderer.domElement)
    },
    // 相机

    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        75,
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
    },
    // 模型
    initModel() {
      // 辅助工具

      const helper = new THREE.AxesHelper(10)

      this.scene.add(helper)

      const s = 25
      const cube = new THREE.CubeGeometry(s, s, s)

      for (let i = 0; i < 3; i++) {
        const material = new THREE.MeshBasicMaterial({ color: this.randomColor() })
        const mesh = new THREE.Mesh(cube, material)
        mesh.position.x = 60 * (2.0 * Math.random() - 1.0)
        mesh.position.y = 60 * (2.0 * Math.random() - 1.0)
        mesh.position.z = 60 * (2.0 * Math.random() - 1.0)

        mesh.rotation.x = Math.random() * Math.PI
        mesh.rotation.y = Math.random() * Math.PI
        mesh.rotation.z = Math.random() * Math.PI

        mesh.updateMatrix()
        this.scene.add(mesh)
      }
    },
    // 初始化dat.GUI简化试验流程

    initGui() {
      // 声明一个保存需求修改的相关数据的对象
      //
      // const gui = {
      // }
      // this.gui = gui
      // const datGui = new dat.GUI()

    },
    // 初始化性能插件

    initStats() {
      this.stats = new Stats()

      // Align top-left
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '0px'
      this.stats.domElement.style.top = '0px'

      this.$el.appendChild(this.stats.domElement)
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
      // this.controls.update()

      // this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.animate)
    },

    // 绘制

    draw() {
      this.initRender()
      this.initScene()
      this.initCamera()
      this.initLight()
      this.initModel()
      this.initGui()
      this.initControls()
      this.initStats()
      this.animate()

      window.addEventListener('click', this.onMouseClick, false)
      window.onresize = this.onWindowResize
    },
    randomColor() {
      const arrHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
      let strHex = '#'
      let index
      for (let i = 0; i < 6; i++) {
        index = Math.round(Math.random() * 15)
        strHex += arrHex[index]
      }
      return strHex
    },
    onMouseClick(event) {
      event.preventDefault()
      // 将鼠标点击位置的屏幕坐标转成threejs中的标准坐标,具体解释见代码释义
      const mouse = new THREE.Vector2()
      // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      // 声明raycaster和mouse变量
      // this.raycaster = new THREE.Raycaster()
      // 通过鼠标点的位置和当前相机的矩阵计算出raycaster  --位置有偏差
      this.raycaster.setFromCamera(mouse, this.camera)
      // 获取raycaster直线和所有模型相交的数组集合
      const intersects = this.raycaster.intersectObjects(this.scene.children)
      console.log('intersects is ', intersects)
      // 将所有的相交的模型的颜色设置为红色，如果只需要将第一个触发事件，那就数组的第一个模型改变颜色即可
      for (let i = 0; i < intersects.length; i++) {
        intersects[ i ].object.material.color.set(0xff0000)
      }
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
