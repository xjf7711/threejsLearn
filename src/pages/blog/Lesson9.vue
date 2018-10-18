<template>
  <div class="example">
    <h2>9 Three.js使用性能插件stats进行性能监听</h2>
    <div class="htmledit_views">
      <p>stats性能插件添加了以后，会默认在左上角显示性能帧数，每次刷新所用时间，占用内存。鼠标左键点击可进行切换，默认显示每秒的帧数。</p>
      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-09/11.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-09/11.html</a>
      </p>
      <p><img src="https://img-blog.csdn.net/20170712101416220?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt="">&nbsp;&nbsp;<img src="https://img-blog.csdn.net/20170712101422555?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt="">&nbsp;&nbsp;<img src="https://img-blog.csdn.net/20170712101437732?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""><br></p>
      <p>首先需要将stats插件引入，地址是官网下载文件里面的examples/js/libs/stats.min.js。</p>
      <p>然后需要实例化一个组件，然后添加到dom当中。</p>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//初始化性能插件</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> stats;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">initStats</span>(<span class="hljs-params"/>) </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        stats = <span class="hljs-keyword">new</span> Stats();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-built_in">document</span>.body.appendChild(stats.dom);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>需要在requestAnimationFrame()函数调用里面更新stats。
      <p/>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">animate</span>(<span class="hljs-params"/>) </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//更新控制器</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        controls.update();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        render();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//更新性能插件</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        stats.update();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        requestAnimationFrame(animate);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>
      <p>就这样，页面当中就会显示出来正常插件效果了。</p>
      <p>设置默认显示的监听。</p>
      <p>Stats.prototype.setMode()方法可以设置插件的默认监听</p>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">stats.setMode(<span class="hljs-number">0</span>); <span class="hljs-comment">//默认的监听fps</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">stats.setMode(<span class="hljs-number">1</span>); <span class="hljs-comment">//默认的监听画面渲染时间</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">stats.setMode(<span class="hljs-number">2</span>); <span class="hljs-comment">//默认的监听当前的不知道是啥</span></div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre><br>
      <p/>
      <p>案例也是用的上一节的案例写的，全部代码：</p>
      <p/>
      <p/>
    </div>
    <div ref="canvas"/>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import TrackballControls from '@/assets/threejs/js/controls/TrackballControls'
// import TrackballControls from 'three-trackballcontrols'
export default {
  name: 'Example9',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      light: null,
      controls: null,
      stats: null,
      cube: null
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

      this.$refs.canvas.appendChild(this.renderer.domElement)
    },
    // 相机

    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        1,
        10000
      )

      this.camera.position.set(0, 0, 400)
    },

    // 场景

    initScene() {
      this.scene = new THREE.Scene()
    },
    // 光源

    initLight() {
      this.scene.add(new THREE.AmbientLight(0x404040))

      this.light = new THREE.DirectionalLight(0xffffff)

      this.light.position.set(1, 1, 1)

      this.scene.add(this.light)
    },
    // 模型

    initModel() {
      const map = new THREE.TextureLoader().load(
        'static/threejs/examples/textures/UV_Grid_Sm.jpg'
      )

      const material = new THREE.MeshLambertMaterial({ map: map })

      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(100, 200, 100, 1, 1, 1),
        material
      )

      this.scene.add(cube)
    },

    // 初始化性能插件

    initStats() {
      this.stats = new Stats()
      // this.renderer.domElement.append(stats.dom)
      this.$refs.canvas.appendChild(this.stats.dom)
    },

    // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放

    // var controls;

    initControls() {
      const controls = new TrackballControls(this.camera)

      // 旋转速度

      controls.rotateSpeed = 5

      // 变焦速度

      controls.zoomSpeed = 3

      // 平移速度

      controls.panSpeed = 0.8

      // 是否不变焦

      controls.noZoom = false

      // 是否不平移

      controls.noPan = false

      // 是否开启移动惯性

      controls.staticMoving = false

      // 动态阻尼系数 就是灵敏度

      controls.dynamicDampingFactor = 0.3

      // 未知，占时先保留

      // controls.keys = [ 65, 83, 68 ];

      controls.addEventListener('change', this.render)
      this.controls = controls
    },

    render() {
      this.renderer.render(this.scene, this.camera)
    },

    animate() {
      // 更新控制器

      this.controls.update()

      this.render()
      // 更新性能插件

      this.stats.update()
      requestAnimationFrame(this.animate)
    },

    // 绘制

    draw() {
      this.initRender()

      this.initCamera()

      this.initScene()

      this.initLight()

      this.initModel()

      this.initControls()

      this.initStats()

      this.animate()
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
