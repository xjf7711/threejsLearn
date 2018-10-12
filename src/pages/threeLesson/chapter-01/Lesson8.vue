<template>
  <div class="example">
    <h2>{{ title }}</h2>
    <div class="htmledit_views">
      <p>这是three.js的一个组件，需要额外的引入文件，文件的地址是在官方下载的案例的examples/js/controls/TrackballControls.js。</p>
      <p>只需要和案例里面一样设置相关的属性，并在实例化的时候讲相机传入。就可以实现交互效果。</p>
      <p>可以实现的效果：</p>
      <p>鼠标按住左键可以旋转模型</p>
      <p>鼠标按住右键拖拽可以移动模型</p>
      <p>鼠标滚轮可以缩放模型</p>
      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-09/10.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-09/10.html</a>
      </p>
      <p>案例代码：</p>
      <p/>
    </div>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
// import TrackballControls from '@/assets/threejs/js/controls/TrackballControls'
import TrackballControls from 'three-trackballcontrols'
export default {
  name: 'Example8',
  data() {
    return {
      title: '8 Three.js使用轨迹球插件（trackball）增加对模型的交互功能',
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      light: null,
      controls: null,
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
    // 模型

    initModel() {
      const map = new THREE.TextureLoader().load('static/threejs/examples/textures/UV_Grid_Sm.jpg')

      const material = new THREE.MeshLambertMaterial({ map: map })

      const cube = new THREE.Mesh(new THREE.BoxGeometry(100, 200, 100, 1, 1, 1), material)

      this.scene.add(cube)
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
