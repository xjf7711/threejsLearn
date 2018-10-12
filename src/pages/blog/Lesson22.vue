<template>
  <div class="example">
    <h2>22 Three.js的网格对象MESH的属性和方法</h2>
    <div class="markdown_views">
      <p>创建一个网格需要一个几何体，以及一个或多个材质。当网格创建好之后，我们就可以将它添加到场景中并进行渲染。网格对象提供了几个属性和方法用于改变它在场景中的位置和显示效果。如下： <br>
        <img src="https://img-blog.csdn.net/20170806212252083?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""> <br> 还有一个属性就是visible属性，默认为true，如果设置为false，THREE.Mesh将不渲染到场景中。
      </p>

      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/24.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/24.html</a>
      </p>

      <p>mesh对象的前三个属性position，rotation和scale有三种设置方法。</p>

      <blockquote>
        <p>第一种，直接设置相关坐标轴</p>
      </blockquote>

      <pre class="prettyprint" name="code"><code class="hljs avrasm has-numbering">    cube<span class="hljs-preprocessor">.position</span><span class="hljs-preprocessor">.x</span> = <span class="hljs-number">5</span><span class="hljs-comment">;</span>
    cube<span class="hljs-preprocessor">.position</span><span class="hljs-preprocessor">.y</span> = <span class="hljs-number">6</span><span class="hljs-comment">;</span>
    cube<span class="hljs-preprocessor">.position</span><span class="hljs-preprocessor">.z</span> = <span class="hljs-number">7</span><span class="hljs-comment">;</span></code></pre>

      <hr>

      <blockquote>
        <p>第二种，一次性设置x，y和z坐标的值</p>
      </blockquote>

      <pre class="prettyprint" name="code"><code class="hljs cs has-numbering">    cube.position.<span class="hljs-keyword">set</span>(<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>); <span class="hljs-comment">//效果同第一种</span></code></pre>

      <hr>

      <blockquote>
        <p>第三种，因为它们都是一个THREE.Vector3对象，所以我们可以直接赋值一个新的对象给它</p>
      </blockquote>

      <pre class="prettyprint" name="code"><code class="hljs livecodeserver has-numbering">    cube.position = <span class="hljs-built_in">new</span> <span class="hljs-constant">THREE</span>.Vector3(<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>);<span class="hljs-comment"> //效果同上</span></code></pre>

      <hr>

      <p>为了形象的显示这些效果，我书写了一个案例： <br>
        <img src="https://img-blog.csdn.net/20170806214255831?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title="" width="100%">
        <br> 这个效果是使用dat.GUI实现的效果，具体效果自己将代码下载下来测试即可：
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
      controls: null,
      sphere: null,
      gui: null,
      stats: null,
      settings: null
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
      const cube = this.cube
      const settings = {

        positionX: 0,

        positionY: 5,

        positionZ: 0,

        rotationX: 0,

        rotationY: 0,

        rotationZ: 0,

        scaleX: 1,

        scaleY: 1,

        scaleZ: 1,

        translateX: 0,

        translateY: 0,

        translateZ: 0,

        translate: function() {
          // cube.translate(settings.translateX,settings.translateY,settings.translateZ);

          cube.translateX(settings.translateX)

          cube.translateY(settings.translateY)

          cube.translateZ(settings.translateZ)

          settings.positionX = cube.position.x

          settings.positionY = cube.position.y

          settings.positionZ = cube.position.z
        },

        visible: true

      }
      this.settings = settings

      // 初始化gui

      const gui = new dat.GUI()

      const position = gui.addFolder('position')

      position.add(settings, 'positionX', -30, 30).listen()

      position.add(settings, 'positionY', -30, 30).listen()

      position.add(settings, 'positionZ', -30, 30).listen()

      const scale = gui.addFolder('scale')

      scale.add(settings, 'scaleX', 0.01, 5)

      scale.add(settings, 'scaleY', 0.01, 5)

      scale.add(settings, 'scaleZ', 0.01, 5)

      const rotation = gui.addFolder('rotation')

      rotation.add(settings, 'rotationX', -2 * Math.PI, 2 * Math.PI)

      rotation.add(settings, 'rotationY', -2 * Math.PI, 2 * Math.PI)

      rotation.add(settings, 'rotationZ', -2 * Math.PI, 2 * Math.PI)

      const translate = gui.addFolder('translate')

      translate.add(settings, 'translateX', -5, 5)

      translate.add(settings, 'translateY', -5, 5)

      translate.add(settings, 'translateZ', -5, 5)

      translate.add(settings, 'translate')

      gui.add(settings, 'visible')
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

      // 立方体

      const cubeGeometry = new THREE.CubeGeometry(10, 10, 10)

      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff })

      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

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
      const cube = this.cube
      const settings = this.settings

      // 更新相关位置

      cube.position.set(settings.positionX, settings.positionY, settings.positionZ)

      cube.scale.set(settings.scaleX, settings.scaleY, settings.scaleZ)

      cube.rotation.set(settings.rotationX, settings.rotationY, settings.rotationZ)

      cube.visible = settings.visible

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
