<template>
  <div class="example">
    <h2>5 Three.js一个好的结构书写</h2>
    <div class="htmledit_views">
      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-09/7.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-09/7.html</a>
      </p>
      <p>学习three.js也有两天了，现在也在不间断的学习相关知识，了解three.js的规则。也做了两个简单的案例，感受到了three.js的强大，研究了一些别人的代码，现在想找到一种适合自己的书写代码。</p>
      <p>今天，还真的找到了一种感觉特别适合自己的方法，自己写js的时候貌似也这么写。但是由于学了两个月的WebGL的基础，学的有点懵逼，感觉自己书写正常js的能力都快忘记了。今天，看到这个案例，感觉自己的灵感直接来到了。</p>
      <p>每个three.js案例基本上都会包括渲染器、相机、场景、光源和模型。我以后书写相关代码会把它们封装成一个个的方法，然后等待页面加载完后，调用一下即可。</p>
      <p>下面是我自己定义的方法名：</p>
      <p>初始化渲染器：initRender</p>
      <p>初始化相机：initCamera</p>
      <p>初始化场景：initScene</p>
      <p>初始化灯源：initLight</p>
      <p>初始化模型：initModel</p>
      <p>动画：animate</p>
      <p>绘制：draw</p>
      <p>下面是一个案例，生成了42条线，垂直交错：</p>
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

      this.renderer.setSize(this.width, this.height)

      this.$el.appendChild(this.renderer.domElement)

      this.renderer.setClearColor(0xffffff, 1.0)
    },
    // 相机

    initCamera() {
      this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 1, 1000)

      this.camera.position.x = 0

      this.camera.position.y = 900

      this.camera.position.z = 0

      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },

    // 场景

    initScene() {
      this.scene = new THREE.Scene()
    },
    // 光源

    initLight() {
      this.light = new THREE.DirectionalLight(0xFF0000, 1.0, 0)

      this.light.position.set(100, 100, 200)

      this.scene.add(this.light)
    },
    // 模型

    initModel() {
      // 轴辅助 （每一个轴的长度）

      const object = new THREE.AxesHelper(500)

      this.scene.add(object)

      const geometry = new THREE.Geometry()

      geometry.vertices.push(new THREE.Vector3(-500, 0, 0))

      geometry.vertices.push(new THREE.Vector3(500, 0, 0))

      for (let i = 0; i <= 20; i++) {
        const lineX = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: this.randomColor(), opacity: 1 }))

        lineX.position.z = (i * 50) - 500

        this.scene.add(lineX)

        const lineY = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: this.randomColor(), opacity: 1 }))

        lineY.position.x = (i * 50) - 500

        lineY.rotation.y = 90 * Math.PI / 180

        this.scene.add(lineY)
      }

      console.log(this.scene)
    },

    // 绘制

    draw() {
      this.initRender()

      this.initCamera()

      this.initScene()

      this.initLight()

      this.initModel()

      this.renderer.render(this.scene, this.camera)
    },
    // 生成随机颜色
    randomColor() {
      const arrHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
      let strHex = '0x'
      let index

      for (let i = 0; i < 6; i++) {
        index = Math.round(Math.random() * 15)

        strHex += arrHex[index]
      }
      console.log('strHex is ', strHex)
      return parseInt(strHex, 16) // eval(strHex)
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
