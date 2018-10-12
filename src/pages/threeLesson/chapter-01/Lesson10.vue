<template>
  <div class="example">
    <h2>10 Three.js使用orbit controls插件（轨道控制）来控制模型交互动作</h2>
    <div class="htmledit_views">
      <p>案例查看效果地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-09/12.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-09/12.html</a>
      </p>
      <p>这个效果相对于第八节的轨迹球插件使用上感觉要好，虽然轨迹球插件可以来回的滚动，但是容易分辨不清楚上下左右的关系，容易混乱，适合调试，而轨道控制插件orbit则适合客户使用，还不会产生混乱效果。下面讲一下使用。</p>
      <p>（1）首先引入插件，文件地址在官方案例的examples/js/controls/OrbitControls.js。</p>
      <p>（2）然后实例化函数，把相机和渲染器的dom传入，并设置相关设置。</p>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> controls;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">initControls</span>(<span class="hljs-params"/>) </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        controls = <span class="hljs-keyword">new</span> THREE.OrbitControls( camera, renderer.domElement );</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">// 如果使用animate方法时，将此函数删除</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//controls.addEventListener( 'change', render );</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">// 使动画循环使用时阻尼或自转 意思是否有惯性</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        controls.enableDamping = <span class="hljs-literal">true</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//动态阻尼系数 就是鼠标拖拽旋转灵敏度</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//controls.dampingFactor = 0.25;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//是否可以缩放</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        controls.enableZoom = <span class="hljs-literal">true</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//是否自动旋转</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="16"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        controls.autoRotate = <span class="hljs-literal">true</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="17"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//设置相机距离原点的最远距离</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="18"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        controls.minDistance  = <span class="hljs-number">200</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="19"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//设置相机距离原点的最远距离</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="20"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        controls.maxDistance  = <span class="hljs-number">600</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="21"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//是否开启右键拖拽</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="22"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        controls.enablePan = <span class="hljs-literal">true</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="23"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>（3）最后，在animate函数内调用orbit的update()更新。
      <p/>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">animate</span>(<span class="hljs-params"/>) </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//更新控制器</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        controls.update();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        render();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//更新性能插件</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        stats.update();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        requestAnimationFrame(animate);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>就实现了相关效果。下面是全部案例代码：
      <p/>
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
import OrbitControls from 'threejs-orbit-controls'
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

      controls.autoRotate = true

      // 设置相机距离原点的最远距离

      controls.minDistance = 200

      // 设置相机距离原点的最远距离

      controls.maxDistance = 600

      // 是否开启右键拖拽

      controls.enablePan = true

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
