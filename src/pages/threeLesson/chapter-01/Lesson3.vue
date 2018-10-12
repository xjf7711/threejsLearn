<template>
  <div class="example">
    <h2>3 Three.js绘制线</h2>
    <p>相对于上一节来说，只是模型方面有区别，这里是先使用线纹理的方法设置线的纹理，然后使用几何对象或者缓冲区几何对象生成顶点坐标，最后调用Line方法绘制出来线。</p>
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

      const scene = new THREE.Scene()

      // 设置相机（视野，显示口的宽高比，近裁剪面，远裁剪面）

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      // 设置相机的视点

      camera.position.set(0, 0, 100)

      // 设置相机的朝向

      camera.lookAt(new THREE.Vector3(0, 0, 0))

      // 渲染器

      const renderer = new THREE.WebGLRenderer()

      // 设置渲染器的高度和宽度，如果加上第三个值 false，则按场景大小显示，等比例缩放

      renderer.setSize(this.width, this.height, false)

      // 将渲染器添加到html当中

      this.$el.appendChild(renderer.domElement)

      // 定义线的基本材料，我们可以使用LineBasicMaterial（实线材料）和LineDashedMaterial（虚线材料）

      const material = new THREE.LineBasicMaterial({ color: 0x0000ff })

      // 设置具有几何顶点的几何（Geometry）或缓冲区几何（BufferGeometry）设置顶点位置，看名字就知道了，
      // 一个是直接将数据保存在js里面的，另一个是保存在WebGL缓冲区内的，而且肯定保存到WebGL缓冲区内的效率更高

      const geometry = new THREE.Geometry()

      geometry.vertices.push(new THREE.Vector3(-10, 0, 0))

      geometry.vertices.push(new THREE.Vector3(0, 10, 0))

      geometry.vertices.push(new THREE.Vector3(10, 0, 0))

      // 使用Line方法将线初始化

      const line = new THREE.Line(geometry, material)

      // 将线添加到场景

      scene.add(line)

      // 使用渲染器渲染出场景和相机

      renderer.render(scene, camera)
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
