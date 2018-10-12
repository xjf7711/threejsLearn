<template>
  <div class="example" @click="handleClick">
    <h2>04 THREE.JS一个案例详解</h2>
    <div id="article_content" class="article_content clearfix csdn-tracking-statistics" data-pid="blog" data-mod="popu_307" data-dsm="post">
      <link rel="stylesheet" href="https://csdnimg.cn/release/phoenix/template/css/ck_htmledit_views-e2445db1a8.css">
      <div class="htmledit_views">
        <p>之前根绝官网书写了两个简单的案例，今天开始写了一个教程书里面的案例。</p>
        <p>
        <img src="https://img-blog.csdn.net/20170704103723877?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""><br></p><p>案例查看地址：<a href="http://www.wjceo.com/blog/threejs/2018-02-09/6.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-09/6.html</a></p><p>（1）创建了渲染器，并传值对象antialias设置为true，告诉Three.js要启用抗锯齿（antialiased）渲染。抗锯齿可以避免绘制物体边缘时产生的锯齿。</p>
        <p>（2）创建场景。</p>
        <p>（3）创建相机，设置相机的投影视角，并设置相机的位置。</p>
        <p>（4）创建一个平行光光源（directional light），在这里我们设置了平行光的一个点，而光线的照射方向就是设置的这个点指向原点的方向。</p>
        <p>（5）从48到60行，我们开始绘制立方体。首先我们使用了THREE.ImageUtils.loadTexture方法来加载纹理。然后改变了立方体的材质，MeshBasicMaterial用于定义属性简单的材质，比如固定颜色或是透明。这种材质不会对光照做出任何响应。所以我们用另一种类型的材质来代替它，这就是MeshPhongMaterial。这种类型的材质应用了一种相对简单、仿真度高而又性能优越的着色器模型，也就是著名的“Phong着色法”（Phong shading）。我们现在就可以分辨出立方体的边缘。立方体朝向光源方向的面将会更加明亮，而背对光源的面则会相对阴暗。</p><p>在51行，实例化材质的时候，我们将纹理传入进去。Phong内置的着色器结合光源的设置、材质颜色和纹理映射的像素值，使得每一个像素显示正确的颜色，并形成最后的图像效果。</p><p>然后我们又创建了一个立方体的集合体，将构造好的几何体、材质和纹理都放到了Three.js的网格中，并存储在变量cube中。</p>
        <p>最后，把cube网格加入场景当中，立方体就可以直接显示了。</p>
        <p>（6）在62到74行，我们生命一个rotationBool变量来代表模型是否旋转的变量。这里我们直接制作了一个动画，动画里面，每次渲染一次页面，判断是否动画旋转。</p>
        <p>在Three.js中，每个物体都有位置（position）、旋转（rotation）和缩放（scale）属性。通过给网格cube的相关属性的赋值，即可修改物体的样式。（在为物体旋转变量赋值时，我们需要注意，大部分的3D图形系统都使用了弧度制（radians）来度量角度。弧度是只单位圆上相应角度的圆弧长度（例如，弧度制的2π就是角度值的360°）。Math.PI相当于180°，因此当我们赋值mesh.rotation.x = Math.PI/12的时候，实际上是绕着x轴旋转了15°）。</p><p>requestAnimationFrame()方法是为了重绘使用的。使用它，浏览器可以极大地优化动画的性能表现。因为它会综合考虑所有的绘制请求，把它们都放到同一个重绘步骤中。尤其是在多标签浏览器中，当动画页面处于后台时，浏览器将停止重绘以节省资源提高性能。这个函数呗装专门设置用于制作页面动画，当然也包括WebGL中的动画。</p><p>（7）最后一步是给body绑定了一个点击事件，只要点击body，动画就会暂停。</p>
        <p>案例代码：</p>
      </div>
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
      cube: null,
      rotationBool: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 创建渲染器，添加到dom当中, antialias（是否启用抗锯齿）

      this.renderer = new THREE.WebGLRenderer({ antialias: true })

      // 设置渲染器的尺寸

      this.renderer.setSize(this.width, this.height)

      // 将渲染器放置到页面当中

      this.$el.appendChild(this.renderer.domElement)

      // 创建场景

      this.scene = new THREE.Scene()

      // 创建相机，设置位置

      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        4000
      )

      // 设置相机的位置

      this.camera.position.set(0, 0, 3)

      // 创建一个平行光光源照射到物体上

      const light = new THREE.DirectionalLight(0xffffff, 1.5)

      // 设置平型光照射方向，照射方向为设置的点照射到原点

      light.position.set(0, 0, 1)

      // 将灯光放到场景当中

      this.scene.add(light)

      // 创建一个接受光照并带有纹理映射的立方体，并添加到场景中

      // 首先，获取到纹理
      const loader = new THREE.TextureLoader()
      const map = loader.load('static/threejs/examples/textures/disturb.jpg')

      // 然后创建一个phong材质来处理着色，并传递给纹理映射

      const material = new THREE.MeshPhongMaterial({ map: map })

      // 创建一个立方体的几何体

      const geometry = new THREE.CubeGeometry(1, 1, 1)

      // 将集合体和材质放到一个网格中

      this.cube = new THREE.Mesh(geometry, material)

      // 将立方体网格添加到场景中

      this.scene.add(this.cube)

      // 声明一个判断是否旋转的变量

      this.rotationBool = true
      this.animate()
    },
    handleClick() {
      console.log('this.rotationBool is ' + this.rotationBool)
      this.rotationBool = !this.rotationBool
      this.animate()
    },
    animate() {
      if (this.renderer.render) {
        this.renderer.render(this.scene, this.camera)

        if (this.rotationBool) {
          this.cube.rotation.x += 0.02

          this.cube.rotation.y += 0.02
        }

        requestAnimationFrame(this.animate)
      }
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
