<template>
  <div class="example">
    <h2>15 THREE.JS实现阴影效果</h2>
    <div class="htmledit_views">
      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/17.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/17.html</a>
      </p>
      <p><br></p>
      <p>作为webgl的插件，three.js肯定没有原生webgl那样，添加一个阴影这么费劲。所以，经过博主一小时的研究（笨人不聪明，已经是极限速度了）。终于将阴影效果做了出来，并且还发现一些容易犯错的地方。先上张图避避邪：</p>
      <p><img src="https://img-blog.csdn.net/20170727111621378?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""><br></p>
      <p>实现这个效果其实很简单，只需要设置几个属性就可以实现当前的效果。而上面的材质问题我将放到下一节：</p>
      <p>（1）首先需要告诉渲染器我需要阴影，你给我生成阴影：</p>
      <p/>
      <pre><code class="language-javascript hljs">renderer.shadowMap.enabled = <span class="hljs-literal">true</span>;</code><div class="hljs-button" data-title="复制"/></pre>（2）然后告诉灯光，我需要阴影：
      <p/>
      <p/>
      <pre><code class="language-javascript hljs"> light.castShadow = <span class="hljs-literal">true</span>;</code><div class="hljs-button" data-title="复制"/></pre>（3）告诉模型哪些需要投射阴影：
      <p/>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//告诉球需要投射阴影</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        sphere.castShadow = <span class="hljs-literal">true</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//告诉立方体需要投射阴影</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        cube.castShadow = <span class="hljs-literal">true</span>;</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre>（4）最后告诉最底下的平面长方形你要接受阴影：
      <p/>
      <p/>
      <pre><code class="language-javascript hljs">plane.receiveShadow = <span class="hljs-literal">true</span>;</code><div class="hljs-button" data-title="复制"/></pre>上面四步只要设置好了，就可以实现阴影的效果了。
      <p/>
      <p><br></p>
      <p>
        <span style="color:#ff0000;">注意事项：你的模型的材质一定要选择对灯光有反应的材质，要不然不会出现效果，博主就是因为这个问题导致好长时间没有整出来阴影。</span>
      </p>
      <p><br></p>
      <p>案例全部代码：</p>
      <p/>
      <p/>
    </div>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import TrackballControls from '@/assets/threejs/js/controls/TrackballControls'
// import TrackballControls from 'three-trackballcontrols'
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
    // 光源

    initLight() {
      this.scene.add(new THREE.AmbientLight(0x444444))

      const light = new THREE.SpotLight(0xffffff)

      light.position.set(60, 30, 1)

      // 告诉平行光需要开启阴影投射

      light.castShadow = true

      this.scene.add(light)
    },
    // font模型

    initModel() {
      // 上面的球

      const sphereGeometry = new THREE.SphereGeometry(5, 20, 20)

      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0x7777ff
      })

      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

      sphere.position.y = 5

      // 告诉球需要投射阴影

      sphere.castShadow = true

      this.scene.add(sphere)

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

      this.render()

      requestAnimationFrame(this.animate)
    },

    // 绘制

    draw() {
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
