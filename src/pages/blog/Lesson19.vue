<template>
  <div class="example">
    <h2>19 Three.js实现雾化效果</h2>
    <div class="htmledit_views">
      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/21.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/21.html</a>
      </p>
      <p>如果使用three.js实现雾化效果很简单，只需要在给场景scene对象的fog属性添加值就好了，比如：</p>
      <p/>
      <pre onclick="hljs.copyCode(event)"><code class="language-javascript hljs">        scene.fog = <span class="hljs-keyword">new</span> THREE.Fog(<span class="hljs-number">0xffffff</span>,<span class="hljs-number">100</span>,<span class="hljs-number">120</span>);</code><div class="hljs-button" data-title="复制"/></pre>这样就给场景添加了雾化的效果，在实例化雾化的对象的时候，需要传三个值（雾的颜色，雾化开始的距离相机的位置，全雾化距离相机的位置）。
      <p/>
      <p><img src="https://img-blog.csdn.net/20170805110114061?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""><br><br></p>
      <p>添加上了就会显示以上的效果，设置雾化的过程比较短，所以雾化的效果比较明显。</p>
      <p><br></p>
      <p>还有一个种是随着距离呈指数增长的雾化效果，只需要设置雾的颜色和浓度即可。如：</p>
      <p/>
      <pre onclick="hljs.copyCode(event)"><code class="language-javascript hljs">scene.fog = <span class="hljs-keyword">new</span> THREE.FogExp2(<span class="hljs-number">0xffffff</span>,<span class="hljs-number">0.02</span>);</code><div class="hljs-button" data-title="复制"/></pre>效果如下：
      <p/>
      <p><img src="https://img-blog.csdn.net/20170805111303116?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""><br><br></p>
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
      this.scene.fog = new THREE.Fog(0xff00ff, 80, 120)
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

      const helper = new THREE.AxesHelper(10)

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

      const planeGeometry = new THREE.PlaneGeometry(1000, 1000)

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
