<template>
  <div class="example">
    <h2>26 Three.js的聚光灯光源THREE.SpotLight</h2>
    <div class="markdown_views">
      <h3 id="介绍">
      <a name="t0"/>介绍</h3>

      <p>THREE.SpotLight（聚光灯灯源）是最常使用的光源之一。THREE.SpotLight是一种具有锥形效果的光源。比如：手电筒。</p>

      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/28.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/28.html</a>
      </p>

      <h3 id="相关属性">
      <a name="t1"/>相关属性</h3>

      <p>由于Three.js的版本更新过快，有可能有我没有测试的属性已经被抛弃了，如果大家有知道的已经被抛弃掉的记得给我留言。</p>

      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>angle（角度）</td>
            <td>光源发射出的光束的宽度。单位是弧度，默认值为Math.PI/3</td>
          </tr>
          <tr>
            <td>castShadow（投影）</td>
            <td>如果设置为true，这个光源就会产生阴影</td>
          </tr>
          <tr>
            <td>color（颜色）</td>
            <td>光源的颜色</td>
          </tr>
          <tr>
            <td>distance（距离）</td>
            <td>光源照射的距离。默认为0，这意味着光线的强度不会随着距离增加而减弱</td>
          </tr>
          <tr>
            <td>exponent（光强衰减指数）</td>
            <td>使用THREE.SpotLight光源，发射的光线的强度随着光源距离的增加而减弱。exponent属性决定了光线前度递减的速度。使用低值，从光源发出的光线将到达远程的物体，而使用高值，光线仅能到达非常接近THREE.SpotLight光源的物体</td>
          </tr>
          <tr>
            <td>intensity（强度）</td>
            <td>光源找色的强度，默认为1</td>
          </tr>
          <tr>
            <td>onlyShadow（仅阴影）已经废弃</td>
            <td>如果此属性设置为“true”，则该光源只生成阴影，而不会在场景中添加任何光照</td>
          </tr>
          <tr>
            <td>position（位置）</td>
            <td>光源在场景中的位置</td>
          </tr>
          <tr>
            <td>shadowBias（阴影偏移）</td>
            <td>用来偏置阴影的位置。当你使用非常薄的对象时，可以使用它来解决一些奇怪的效果。如果你看到奇怪的阴影效果，将该属性设置为很小的值（如0.01）通常可以解决问题。此属性默认为0</td>
          </tr>
          <tr>
            <td>shadowCameraFar（投影远点）</td>
            <td>到距离光源的哪一个位置之内可以生产阴影。默认5000</td>
          </tr>
          <tr>
            <td>shadowCameraFov（投影视场）</td>
            <td>用于生成阴影的视场有多大，默认50</td>
          </tr>
          <tr>
            <td>shadowCameraNear（投影近点）</td>
            <td>从距离光源的哪一个位置开始生成阴影，默认50</td>
          </tr>
          <tr>
            <td>shadowCameraVisible（投影方式可见）新版本推荐使用THREE.CameraHelper( light.shadow.camera )</td>
            <td>如果该属性设置为“true”，你可以看到光源在哪里以及如何生成阴影的。默认值为“false”</td>
          </tr>
          <tr>
            <td>shadowDarkness（阴影暗度）</td>
            <td>定义了阴影徐然的暗度。在场景渲染之后无法更改，默认0.5</td>
          </tr>
          <tr>
            <td>shadowMapWidth和shadowMapHeight（阴影映射宽度和阴影映射高度）</td>
            <td>决定了有多少像素用来生成阴影。当阴影具有锯齿状边缘或看起来不光滑时，可以增加这个值。在场景渲染之后无法更改。</td>
          </tr>
          <tr>
            <td>target（目标）</td>
            <td>使用THREE.SpotLight光源时，它的指向很重要。使用target属性，你可以将THREE.SpotLight光源指向场景中特定对象或位置。注意，此属性需要一个THREE.Object3D对象（如THREE.Mesh）。</td>
          </tr>
          <tr>
            <td>visible（是否可见）</td>
            <td>如果该属性设置为“true”（默认值），该光源就会打开，如果设置为“false”，该光源就会关闭</td>
          </tr>
        </tbody>
      </table>

      <h3 id="案例代码">
      <a name="t2"/>案例代码</h3>

      <p><img src="https://img-blog.csdn.net/20170818134520454?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" width="100%" alt="这里写图片描述" title=""></p>

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
      spotLight: null,
      controls: null,
      gui: null,
      stats: null,
      cube: null,
      plane: null,
      debug: null
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
        ambientLight: '#111111', // 环境光源

        spotLight: '#ffffff', // 点光源

        lightY: 30, // 灯光y轴的位置

        distance: 0, // 点光源距离

        intensity: 1, // 灯光强度

        visible: true, // 是否可见

        angle: Math.PI / 3,

        castShadow: true,

        exponent: 30,

        target: 'plane',

        debug: true

      }
      this.gui = gui
      const datGui = new dat.GUI()

      // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
      const spotLight = this.spotLight
      datGui.addColor(gui, 'ambientLight').onChange((e) => {
        spotLight.color = new THREE.Color(e)
      })

      datGui.addColor(gui, 'spotLight').onChange(function(e) {
        spotLight.color = new THREE.Color(e)
      })

      datGui.add(gui, 'lightY', 0, 100).onChange(function(e) {
        spotLight.position.y = gui.lightY
      })

      datGui.add(gui, 'distance', 0, 200).onChange(function(e) {
        spotLight.distance = e
      })

      datGui.add(gui, 'intensity', 0, 5).onChange(function(e) {
        spotLight.intensity = e
      })

      datGui.add(gui, 'visible').onChange(function(e) {
        spotLight.visible = e
      })

      datGui.add(gui, 'angle', 0, Math.PI * 2).onChange(function(e) {
        spotLight.angle = e
      })

      datGui.add(gui, 'castShadow').onChange(function(e) {
        spotLight.castShadow = e
      })

      datGui.add(gui, 'exponent', 0, 100).onChange(function(e) {
        spotLight.exponent = e
      })
      const that = this
      datGui.add(gui, 'debug').onChange(function(e) {
        if (e) {
          const debug = new THREE.CameraHelper(spotLight.shadow.camera)
          that.scene.add(debug)
        } else {
          that.scene.remove(this.debug)
        }
      })

      datGui.add(gui, 'target', ['plane', 'cube']).onChange(function(e) {
        switch (e) {
          case 'plane':

            spotLight.target = that.plane

            break

          case 'cube':

            spotLight.target = that.cube

            break
        }
      })
    },

    // 光源
    initLight() {
      const ambientLight = new THREE.AmbientLight('#111111')

      this.scene.add(ambientLight)

      const spotLight = new THREE.SpotLight('#ffffff')

      spotLight.position.set(15, 30, 10)

      console.log(spotLight)

      // 告诉平行光需要开启阴影投射

      spotLight.castShadow = true
      this.spotLight = spotLight
      this.scene.add(spotLight)

      this.debug = new THREE.CameraHelper(spotLight.shadow.camera)

      this.scene.add(this.debug)
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

      cube.position.x = 30

      cube.position.y = 5

      cube.position.z = -5

      // 告诉立方体需要投射阴影

      cube.castShadow = true
      this.cube = cube
      this.scene.add(cube)

      // 底部平面

      const planeGeometry = new THREE.PlaneGeometry(100, 100)

      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xaaaaaa })

      const plane = new THREE.Mesh(planeGeometry, planeMaterial)

      plane.rotation.x = -0.5 * Math.PI

      plane.position.y = -0

      // 告诉底部平面需要接收阴影

      plane.receiveShadow = true
      this.plane = plane
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

      controls.minDistance = 50

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
      this.initGui()
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
