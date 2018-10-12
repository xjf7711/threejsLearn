<template>
  <div class="example">
    <h2>7 Three.js内置几何</h2>
    <div class="htmledit_views">
      <p><img src="https://img-blog.csdn.net/20170706162250733?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""></p>
      <p>这个案例是官方案例，个人通过一个一个测试备注，感受模型如何配置参数，来生成理想的形状。three.js内置的这些几何确实够平常使用，还可以通过顶点实现效果。</p>
      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-09/9.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-09/9.html</a>
      </p>
      <p>案例代码：</p>
      <p/>
      <p/>
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
      light: null,
      cube: null,
      rotationBool: false
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

      // 设置canvas尺寸
      this.renderer.setSize(this.width, this.height)

      // 设置背景
      this.renderer.setClearColor(0x000000, 1.0)

      // 设置设备像素比
      this.renderer.setPixelRatio(window.devicePixelRatio)

      // 添加到dom

      this.$el.appendChild(this.renderer.domElement)
    },

    // 相机
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        1,
        2000
      )

      this.camera.position.y = 400
    },

    // 场景

    initScene() {
      this.scene = new THREE.Scene()
    },
    // 光源

    initLight() {
      // 添加环境光
      this.light = new THREE.AmbientLight(0x404040)
      this.scene.add(this.light)

      // 添加平衡光
      this.light = new THREE.DirectionalLight(0xffffff)
      this.light.position.set(0, 1, 0)

      this.scene.add(this.light)
    },
    // 模型

    initModel() {
      // 通过加载图片生成一个纹理

      const map = new THREE.TextureLoader().load(
        'static/threejs/examples/textures/UV_Grid_Sm.jpg'
      )

      // 定义纹理在水平和垂直方向简单的重复到无穷大。

      map.wrapS = map.wrapT = THREE.RepeatWrapping

      // 定义纹理的各向异性

      map.anisotropy = 16

      // 定义兰伯特网孔材质

      const material = new THREE.MeshLambertMaterial({
        map: map,
        side: THREE.DoubleSide
      })

      // 球形网格 （半径长度，水平块的密度，垂直块的密度）

      let object = new THREE.Mesh(new THREE.SphereGeometry(75, 20, 10), material)

      object.position.set(-400, 0, 200)

      this.scene.add(object)

      // 二十面体 （图形大小半径，大于零将不是二十面体，越大越圆滑）

      object = new THREE.Mesh(new THREE.IcosahedronGeometry(75, 0), material)

      object.position.set(-200, 0, 200)

      this.scene.add(object)

      // 八面体（图形大小半径，大于零将不是八面体，越大越圆滑）

      object = new THREE.Mesh(new THREE.OctahedronGeometry(75, 0), material)

      object.position.set(0, 0, 200)

      this.scene.add(object)

      // 四面体（图形大小半径，大于零将不是四面体，越大越圆滑）

      object = new THREE.Mesh(new THREE.TetrahedronGeometry(75, 0), material)

      object.position.set(200, 0, 200)

      this.scene.add(object)

      // 长方形平面 （x轴宽度，y轴高度，x方向分段数，y方向分段数）

      object = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100, 1, 1),
        material
      )

      object.position.set(-400, 0, 0)

      this.scene.add(object)

      // 立方体 （x轴宽度，y轴高度，z轴深度，沿宽面分段数，沿高度面分段数，沿深度面分段数）

      object = new THREE.Mesh(
        new THREE.BoxGeometry(100, 100, 100, 1, 1, 1),
        material
      )

      object.position.set(-200, 0, 0)

      this.scene.add(object)

      // 圆形平面 （半径，顶点密度，绘制起点弧度，绘制弧度）

      object = new THREE.Mesh(
        new THREE.CircleGeometry(50, 20, 0, Math.PI * 2),
        material
      )

      object.position.set(0, 0, 0)

      this.scene.add(object)

      // 空心圆平面 （内圆半径，外圆半径，分割面越大越圆滑，垂直外边分割面，开始绘制弧度，绘制弧度）

      object = new THREE.Mesh(
        new THREE.RingGeometry(10, 50, 10, 5, 0, Math.PI * 2),
        material
      )

      object.position.set(200, 0, 0)

      this.scene.add(object)

      // 圆柱体 （头部圆的半径，底部圆半径，高度，上下圆顶点个数，上下面切割线条数，上下面是否显示，开始弧度，绘制弧度）

      object = new THREE.Mesh(
        new THREE.CylinderGeometry(25, 75, 100, 40, 5),
        material
      )

      object.position.set(400, 0, 0)

      this.scene.add(object)

      // 车床模型

      const points = []

      for (let i = 0; i < 50; i++) {
        points.push(
          new THREE.Vector2(
            Math.sin(i * 0.2) * Math.sin(i * 0.1) * 15 + 50,
            (i - 5) * 2
          )
        )
      }

      // （一个vector2的数组分别代表xy轴，生成圆周段的数目，开始弧度，绘制弧度）

      object = new THREE.Mesh(new THREE.LatheGeometry(points, 20), material)

      object.position.set(-400, 0, -200)

      this.scene.add(object)

      // 救生圈 （救生圈半径，管道直径，基于管道横切顶点数，救生圈横切顶点个数）

      object = new THREE.Mesh(
        new THREE.TorusGeometry(50, 20, 20, 20),
        material
      )

      object.position.set(-200, 0, -200)

      this.scene.add(object)

      // 环面扭结模型 （图形半径，管道直径，基于管道横切定点数，根据图形半径横切顶点数，绕旋转对称轴的圈数，绕环面的圆的圈数）

      object = new THREE.Mesh(
        new THREE.TorusKnotGeometry(50, 10, 50, 20),
        material
      )

      object.position.set(0, 0, -200)

      this.scene.add(object)

      // 轴辅助 （每一个轴的长度）

      object = new THREE.AxesHelper(50)

      object.position.set(200, 0, -200)

      this.scene.add(object)

      // 箭头辅助（箭头头的方向必须是vecteor3，箭头起点必须是vector3，箭头长度，颜色）

      object = new THREE.ArrowHelper(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, 0, 0),
        50,
        0x00ffff
      )

      object.position.set(400, 0, -200)

      this.scene.add(object)
    },

    animate() {
      requestAnimationFrame(this.animate)
      this.render()
      // stats.update();
    },
    render() {
      const timer = Date.now() * 0.0001

      this.camera.position.x = Math.cos(timer) * 800

      this.camera.position.z = Math.sin(timer) * 800

      this.camera.lookAt(this.scene.position)

      for (let i = 0, l = this.scene.children.length; i < l; i++) {
        const object = this.scene.children[i]
        object.rotation.x = timer * 5
        object.rotation.y = timer * 2.5
      }
      this.renderer.render(this.scene, this.camera)
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
    // 绘制

    draw() {
      this.initRender()

      this.initCamera()

      this.initScene()

      this.initLight()

      this.initModel()
      this.animate()
      window.addEventListener('resize', this.onWindowResize, false)
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
