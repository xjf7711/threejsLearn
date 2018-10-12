<template>
  <div class="example">
    <div class="htmledit_views">
      <p>首先使用我们先用three.js创建一个立方体的hello world类型的案例。</p>
      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-09/4.html" rel="nofollow" target="_blank">
          http://www.wjceo.com/blog/threejs/2018-02-09/4.html
        </a>
      </p>
      <p/>
      <p>（1）首先引入了three.js的库文件，就和引入jq一样。</p>
      <p>（2）创建场景（17行）</p>
      <p>（3）创建相机，并设置视野，显示的宽高比，近裁剪面，远裁剪面（19行）</p>
      <p>（4）创建渲染器，并设置属性，放置到dom中（21-25行）</p>
      <p>（5）创建一个立方体模型，并放入到场景（28-34）</p>
      <p>（6）设置相机的位置（36行）</p>
      <p>（7）设置一个动画函数，并使用渲染器把场景和相机渲染出来，每秒60帧，显示出来，就变成了动画。<br><br></p>
    </div>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example1',
  data() {
    return {
      title: '2 Three.js的hello world',
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      cube: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
    // 创建场景

      this.scene = new THREE.Scene()

      // 设置相机（视野，显示口的宽高比，近裁剪面，远裁剪面）

      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      // 渲染器

      this.renderer = new THREE.WebGLRenderer({ antialias: true })

      // 设置渲染器的高度和宽度，如果加上第三个值 false，则按场景大小显示，等比例缩放

      this.renderer.setSize(window.innerWidth, window.innerHeight, false)

      // 将渲染器添加到html当中

      this.$el.appendChild(this.renderer.domElement)

      // 盒子模型（BoxGeometry），这是一个包含立方体所有顶点和填充面的对象。

      const geometry = new THREE.BoxGeometry(1, 2, 1)

      // 使用网孔基础材料（MeshBasicMaterial）进行着色器，这里只绘制了一个绿色

      const material = new THREE.MeshBasicMaterial({ color: 0x00ffff })

      // 使用网孔(Mesh)来承载几何模型

      this.cube = new THREE.Mesh(geometry, material)

      // 将模型添加到场景当中

      this.scene.add(this.cube)

      // 将相机沿z轴偏移5

      this.camera.position.z = 5

      this.animate()
    },

    // 设置一个动画函数
    animate() {
      // 一秒钟调用60次，也就是以每秒60帧的频率来绘制场景。

      requestAnimationFrame(this.animate)

      // console.log(cube.rotation);

      // 每次调用模型的沿xy轴旋转0.01

      this.cube.rotation.x += 0.01

      this.cube.rotation.y += 0.01

      // 使用渲染器把场景和相机都渲染出来

      this.renderer.render(this.scene, this.camera)
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
