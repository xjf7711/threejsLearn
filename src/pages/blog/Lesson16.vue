<template>
  <div class="example">
    <h2>16 Three.js使用dat.GUI简化试验流程</h2>
    <div class="htmledit_views">
      <h1>
      <a name="t0"/>简介</h1>
      <p>使用这个插件的最省事的地方在于，调试很方便的调节相关的值，从而影响最后绘制的结果。而dat.GUI实现的东西也很简单，理解起来也很好理解。</p>
      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/18.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/18.html</a>
      </p>
      <p>我们实例化dat.GUI对象后，会在右上角显示出一些可以调节的参数，比如：</p>
      <p><img src="https://img-blog.csdn.net/20170731223444155?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""><br></p>
      <p>这就是今天的案例制作出来的五个可以调节的属性。而且实现起来也很简单，而且大部分是需要我们做的，除了上面的这个控制台不是我们写出来的。</p>
      <h1>
      <a name="t1"/>引入方式</h1>
      <p>首先，你需要将库文件引入到页面当中：</p>
      <p/>
      <pre><code class="language-html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"examples/js/libs/dat.gui.min.js"</span>&gt;</span><span class="undefined"/><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code><div class="hljs-button" data-title="复制"/></pre>然后，你可以声明一个对象，对象内包括所有需要修改的属性，比如：
      <p/>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        gui = {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            <span class="hljs-attr">lightY</span>:<span class="hljs-number">30</span>, <span class="hljs-comment">//灯光y轴的位置</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            sphereX:<span class="hljs-number">0</span>, <span class="hljs-comment">//球的x轴的位置</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            sphereZ:<span class="hljs-number">0</span>, <span class="hljs-comment">//球的z轴的位置</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            cubeX:<span class="hljs-number">25</span>, <span class="hljs-comment">//立方体的x轴位置</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            cubeZ:<span class="hljs-number">-5</span> <span class="hljs-comment">//立方体的z轴的位置</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        };</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>这是本人书写的案例相关的属性，和上面图片的能够对比起来。
      <p/>
      <p><br></p>
      <p>下一步，你就需要实力化dat.GUI对象，然后把相关需要控制的属性调用属性相关的add(对象，属性，最小值，最大值)方法，将属性控制添加进去：</p>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> datGui = <span class="hljs-keyword">new</span> dat.GUI();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        datGui.add(gui,<span class="hljs-string">"lightY"</span>,<span class="hljs-number">0</span>,<span class="hljs-number">100</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        datGui.add(gui,<span class="hljs-string">"sphereX"</span>,<span class="hljs-number">-30</span>,<span class="hljs-number">30</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        datGui.add(gui,<span class="hljs-string">"sphereZ"</span>,<span class="hljs-number">-30</span>,<span class="hljs-number">30</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        datGui.add(gui,<span class="hljs-string">"cubeX"</span>,<span class="hljs-number">0</span>,<span class="hljs-number">60</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        datGui.add(gui,<span class="hljs-string">"cubeZ"</span>,<span class="hljs-number">-30</span>,<span class="hljs-number">30</span>);</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>
      <p/>
      <p><br></p>到了这一步，dat.GUI对象，就可以控制这些值了，我们再需要做的就是，在每一次渲染的animate函数里面讲相关的值修改掉，这样就能实现这个效果了。
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//更新相关位置</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        light.position.y = gui.lightY;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        sphere.position.x = gui.sphereX;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        sphere.position.z = gui.sphereZ;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        cube.position.x = gui.cubeX;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        cube.position.z = gui.cubeZ;</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>
      <p/>
      <p>到这里就实现效果了。</p>
      <h1>
      <a name="t2"/>常用方法</h1>
      <h2>
      <a name="t3"/>gui.addFolder()</h2>
      <p>此方法是添加一个栏目，返回一个栏目对象，具有下拉菜单的功能，如果在当前栏目下面添加功能按钮，需要按下面的方式书写</p>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-keyword">var</span> lightFolder = gui.addFolder(<span class="hljs-string">'Light'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        lightFolder.add(param, <span class="hljs-string">'width'</span>, <span class="hljs-number">0.1</span>, <span class="hljs-number">100</span>).onChange(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">val</span>) </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            rectLight.width = val;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        });</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>
      <p/>
      <p><br></p>
      <h2>
      <a name="t4"/>gui.add()</h2>
      <p>这个方法是常用的添加方法，可以添加一个普通按钮，最小传入两个值，三四个值是设置范围</p>
      <p>将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）<br></p>
      <p/>
      <p>如果对象里面的类是一个函数，如果需要触发的点击事件，只传入两个值就好了，点击的时候就可以触发到相关事件。</p>
      <p/>
      <pre><code class="language-javascript hljs">        gui.add(controls, <span class="hljs-string">'addCube'</span>);</code><div class="hljs-button" data-title="复制"/></pre>
      <h2>
      <a name="t5"/>gui.addColor()</h2>
      <p>这个方法添加的按钮时一个标准的颜色选择器，比如：</p>
      <p/>
      <pre><code class="language-html hljs xml">        gui.addColor(param, 'color')</code><div class="hljs-button" data-title="复制"/></pre><br>
      <p/>
      <h2>
      <a name="t6"/>.onChange()</h2>
      <p/>
      <p>这个方法是可以触发的回调函数，在值发生变动的时候会触发当前函数，比如</p>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        gui.addColor(param, <span class="hljs-string">'color'</span>).onChange(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">val</span>) </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            rectLight.color.setHex(val);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        });</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre><br>
      <p/>
      <h2>
      <a name="t7"/>.listen()</h2>
      <p>如果当前只是想显示当前的值，而且监听当前的变化，就这么写：</p>
      <p/>
      <p/>
      <pre><code class="language-javascript hljs">        gui.add(obj, <span class="hljs-string">'key'</span>).listen();</code><div class="hljs-button" data-title="复制"/></pre>
      <h1>
      <a name="t8"/>效果案例</h1>
      <div><br></div>
      <p><img src="https://img-blog.csdn.net/20170731224255748?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""><br></p>
      <p><br></p>下面附上我的全部代码：
      <p><br><br></p>
      <p><br></p>
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

      const helper = new THREE.AxesHelper(30)

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
