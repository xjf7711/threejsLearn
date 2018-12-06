<template>
  <div class="example">
    <h2>80 Three.js 的基础动画</h2>
    <div class="markdown_views">
      <h2 id="简介">
      <a name="t0"/>简介</h2>

      <p>模型导入到上一节也就先告一段落了，接下来，我将学习动画方面的知识。在这之前，我先复习了一下基础变化的相关知识。 <br> 基础动画就是缩放、位置和旋转，也就是配置模型的
      scale、position和rotation。我直接写了一个案例，来实现三种动画。</p>

      <h2 id="实现案例">
      <a name="t1"/>实现案例</h2>

      <p>案例查看地址：
      <a href="http://www.wjceo.com/blog/threejs/2018-03-25/140.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-03-25/140.html</a> <br> - 首先，我们创建了三个添加动画的模型：立方体、球和圆柱。</p>

      <pre class="prettyprint" name="code"><code class="hljs cs has-numbering">sphere = <span class="hljs-keyword">new</span> THREE.Mesh(sphereGeometry, sphereMaterial);
      cube = <span class="hljs-keyword">new</span> THREE.Mesh(cubeGeometry, cubeMaterial);
      cylinder = <span class="hljs-keyword">new</span> THREE.Mesh(cylinderGeometry, cylinderMaterial);</code></pre>
      <ul>
        <li>然后在render里面分别修改它们的scale、 position和 rotation。</li>
      </ul>

      <pre class="prettyprint" name="code"><code class="hljs avrasm has-numbering">//处理位置变化的球的移动
      positionStep += gui<span class="hljs-preprocessor">.positionStep</span><span class="hljs-comment">;</span>
sphere<span class="hljs-preprocessor">.position</span><span class="hljs-preprocessor">.x</span> = <span class="hljs-number">10</span>*Math<span class="hljs-preprocessor">.cos</span>(positionStep) - <span class="hljs-number">10</span><span class="hljs-comment">;</span>
sphere<span class="hljs-preprocessor">.position</span><span class="hljs-preprocessor">.y</span> = <span class="hljs-number">5</span> + Math<span class="hljs-preprocessor">.abs</span>(Math<span class="hljs-preprocessor">.sin</span>(positionStep))*<span class="hljs-number">10</span><span class="hljs-comment">;</span>

//处理立方体的旋转
cube<span class="hljs-preprocessor">.rotation</span><span class="hljs-preprocessor">.x</span> += gui<span class="hljs-preprocessor">.rotationStep</span><span class="hljs-comment">;</span>
cube<span class="hljs-preprocessor">.rotation</span><span class="hljs-preprocessor">.y</span> += gui<span class="hljs-preprocessor">.rotationStep</span><span class="hljs-comment">;</span>
cube<span class="hljs-preprocessor">.rotation</span><span class="hljs-preprocessor">.z</span> += gui<span class="hljs-preprocessor">.rotationStep</span><span class="hljs-comment">;</span>

//处理圆柱体的缩放
scaleStep += gui<span class="hljs-preprocessor">.scaleStep</span><span class="hljs-comment">;</span>
cylinder<span class="hljs-preprocessor">.scale</span><span class="hljs-preprocessor">.x</span> = Math<span class="hljs-preprocessor">.abs</span>(Math<span class="hljs-preprocessor">.sin</span>(scaleStep))<span class="hljs-comment">;</span>
cylinder<span class="hljs-preprocessor">.scale</span><span class="hljs-preprocessor">.y</span> = Math<span class="hljs-preprocessor">.abs</span>(Math<span class="hljs-preprocessor">.cos</span>(scaleStep))<span class="hljs-comment">;</span>
cylinder<span class="hljs-preprocessor">.scale</span><span class="hljs-preprocessor">.z</span> = Math<span class="hljs-preprocessor">.abs</span>(Math<span class="hljs-preprocessor">.sin</span>(scaleStep))<span class="hljs-comment">;</span></code></pre>

      <h2 id="案例代码">
      <a name="t2"/>案例代码</h2>

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
      rectLight: null,
      rectLightHelper: null,
      controls: null,
      sphere: null,
      gui: null,
      stats: null,
      scaleStep: 0,
      positionStep: 0
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
        scaleStep: 0.01,
        rotationStep: 0.03,
        positionStep: 0.05
      }
      this.gui = gui
      const datGui = new dat.GUI()

      // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
      datGui.add(gui, 'scaleStep', 0, 1)
      datGui.add(gui, 'rotationStep', 0, 1)
      datGui.add(gui, 'positionStep', 0, 1)
    },
    // 光源
    initLight() {
      this.scene.add(new THREE.AmbientLight(0x444444))

      const light = new THREE.PointLight(0xffffff)

      light.position.set(15, 50, 10)

      // 告诉平行光需要开启阴影投射
      light.castShadow = true
      this.scene.add(light)
    },
    // 模型
    initModel() {
      // 球

      const sphereGeometry = new THREE.SphereGeometry(5, 200, 200)

      const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xaaaaaa })

      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

      sphere.position.x = -10

      sphere.position.y = 5

      sphere.position.z = 10

      // 告诉球需要投射阴影

      sphere.castShadow = true
      this.sphere = sphere
      this.scene.add(sphere)

      // 辅助工具

      const helper = new THREE.AxesHelper(50)

      this.scene.add(helper)

      // 立方体

      const cubeGeometry = new THREE.CubeGeometry(10, 10, 8)

      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff })

      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

      cube.position.x = 15

      cube.position.y = 5

      cube.position.z = -5

      // 告诉立方体需要投射阴影

      cube.castShadow = true
      this.cube = cube
      this.scene.add(cube)

      // 创建圆柱体

      const cylinderGeometry = new THREE.CylinderGeometry(5, 5, 10, 40, 20)

      const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0xff5f4d })

      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)

      cylinder.position.set(-15, 5, -10)

      cylinder.castShadow = true
      this.cylinder = cylinder
      this.scene.add(cylinder)

      // 底部平面

      const planeGeometry = new THREE.PlaneGeometry(100, 100)

      const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa })

      const plane = new THREE.Mesh(planeGeometry, planeMaterial)

      plane.rotation.x = -0.5 * Math.PI

      plane.position.y = 0

      // 告诉底部平面需要接收阴影

      plane.receiveShadow = true

      this.scene.add(plane)
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
      // 处理简单动画

      // 处理位置变化的球的移动
      const gui = this.gui
      this.positionStep += gui.positionStep
      const sphere = this.sphere
      sphere.position.x = 10 * Math.cos(this.positionStep) - 10

      sphere.position.y = 5 + Math.abs(Math.sin(this.positionStep)) * 10

      // 处理立方体的旋转
      const cube = this.cube
      cube.rotation.x += gui.rotationStep

      cube.rotation.y += gui.rotationStep

      cube.rotation.z += gui.rotationStep

      // 处理圆柱体的缩放

      this.scaleStep += gui.scaleStep
      const cylinder = this.cylinder
      cylinder.scale.x = Math.abs(Math.sin(this.scaleStep))

      cylinder.scale.y = Math.abs(Math.cos(this.scaleStep))

      cylinder.scale.z = Math.abs(Math.sin(this.scaleStep))
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

      this.renderer.render(this.scene, this.camera)
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
      // this.initStats()
      // this.animate()

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
