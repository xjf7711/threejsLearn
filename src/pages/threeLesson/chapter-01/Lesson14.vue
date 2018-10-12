<template>
  <div class="example">
    <h2>14 THREE.JS绘制字体模型</h2>
    <div class="htmledit_views">
      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/16.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/16.html</a>
      </p>
      <p>使用three.js绘制字体模型，没有想象当中那么难。</p>
      <p><img src="https://img-blog.csdn.net/20170723195522813?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt="" width="100%"><br></p>
      <p>首先你需要实例化 THREE.FontLoader() 来进行json格式的文字格式加载，在加载成功的回调函数里面进行创建网格。</p>
      <p>然后通过THREE.TextBufferGeometry或者THREE.TextGeometry方法进行网格创建，并将需要设置的问题传入。</p>
      <p>再设置一个纹理，通过THREE.Mesh()函数创建成图形添加到场景当中即可。</p>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln" style="width:956px"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> fontModel;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">initModel</span>(<span class="hljs-params"/>) </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-keyword">var</span> font;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-keyword">var</span> loader = <span class="hljs-keyword">new</span> THREE.FontLoader();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        loader.load(<span class="hljs-string">"examples/fonts/gentilis_regular.typeface.json"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">res</span>) </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            font = <span class="hljs-keyword">new</span> THREE.TextBufferGeometry(<span class="hljs-string">"fdsfasd"</span>, {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">                <span class="hljs-attr">font</span>: res,</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">                <span class="hljs-attr">size</span>: <span class="hljs-number">100</span>,</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">                <span class="hljs-attr">height</span>: <span class="hljs-number">60</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            });</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            font.computeBoundingBox(); <span class="hljs-comment">// 运行以后设置font的boundingBox属性对象，如果不运行无法获得。</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            <span class="hljs-comment">//font.computeVertexNormals();</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            <span class="hljs-keyword">var</span> map = <span class="hljs-keyword">new</span> THREE.TextureLoader().load(<span class="hljs-string">"examples/textures/UV_Grid_Sm.jpg"</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="16"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            <span class="hljs-keyword">var</span> material = <span class="hljs-keyword">new</span> THREE.MeshLambertMaterial({<span class="hljs-attr">map</span>:map,<span class="hljs-attr">side</span>:THREE.DoubleSide});</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="17"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="18"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            fontModel = <span class="hljs-keyword">new</span> THREE.Mesh(font,material);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="19"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="20"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            <span class="hljs-comment">//设置位置</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="21"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">           fontModel.position.x = - (font.boundingBox.max.x - font.boundingBox.min.x)/<span class="hljs-number">2</span>; <span class="hljs-comment">//计算出整个模型的宽度的一半</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="22"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">           fontModel.position.y = - <span class="hljs-number">50</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="23"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">           fontModel.position.z = - <span class="hljs-number">30</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="24"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="25"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">            scene.add(fontModel);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="26"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        });</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="27"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>最后又调节了一下位置，就成了现在这个样子的代码。
      <p/>
      <p>最后放上所有的代码：</p>
      <p><br></p>
    </div>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import OrbitControls from 'threejs-orbit-controls'
export default {
  name: 'Lesson14',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      light: null,
      controls: null,
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

      this.$el.appendChild(this.renderer.domElement)
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
    // font模型

    initModel() {
      const loader = new THREE.FontLoader()

      loader.load(
        'static/threejs/examples/fonts/gentilis_regular.typeface.json',
        (res) => {
          const font = new THREE.TextBufferGeometry('adfasdfasfd', {
            font: res,
            size: 100,
            height: 60
          })

          font.center()

          const map = new THREE.TextureLoader().load(
            'static/threejs/examples/textures/UV_Grid_Sm.jpg'
          )

          const material = new THREE.MeshLambertMaterial({
            map: map,
            side: THREE.DoubleSide
          })

          const fontModel = new THREE.Mesh(font, material)

          this.scene.add(fontModel)
        }
      )
    },

    // 初始化性能插件

    initStats() {
      this.stats = new Stats()
      // this.renderer.domElement.append(stats.dom)
      this.$el.appendChild(this.stats.dom)
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
    // 窗口变动触发的函数

    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight

      this.camera.updateProjectionMatrix()

      this.render()

      this.renderer.setSize(this.width, this.height)
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
