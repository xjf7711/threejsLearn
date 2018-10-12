<template>
  <div class="example">
    <div class="blog-content-box">
      <div class="article-title-box">
        <h1 class="title-article">1 重新启程，WebGL框架three.js</h1>
      </div>
      <div class="article-info-box">
        <div class="article-bar-top d-flex">
          <span class="time">2017年07月03日 11:24:08</span>
        </div>
      </div>
      <article>
        <div id="article_content" class="article_content clearfix csdn-tracking-statistics" data-pid="blog" data-mod="popu_307" data-dsm="post">
          <link rel="stylesheet" href="https://csdnimg.cn/release/phoenix/template/css/ck_htmledit_views-e2445db1a8.css">
          <div class="htmledit_views">
            <p>查看一个简单的案例：
              <a href="http://www.wjceo.com/blog/threejs/2018-02-07/3.html" rel="nofollow" target="_blank">
                http://www.wjceo.com/blog/threejs/2018-02-07/3.html
              </a>
            </p>
            <p>从今天开始，我学习WebGL基础将占时告一段落，开始学习WebGL的流行框架three.js。经验告诉我，学习一种语言，如果入门能力差，最好从框架开始学，虽然会被掩盖很多的原理方面的东西，但是，你能直接做出来一些东西，给自己充足的信心，能让自己做下去。如果你连东西都做不出来，时间长了肯定会想着放弃，学习框架可以使使学习的坡度前期不会那么陡。直接用原生搞，学了好些天，连立方体都画不出来，用框架直接一天就出来了。等你能做着东西再了解原理，何乐不为呢。</p>
            <p>那么，three.js有那些特点呢？</p><p>（1）three.js掩盖了3D渲染的细节。</p>
            <p>three.js将WebGL原生API的细节抽象化，将3D场景拆解为网格、材质和光源（即它内置了图形编程常用的一些对象种类）。</p>
            <p>（2）three.js是面向对象的。</p><p>开发者可以使用上层的JavaScript对象，而不是仅仅调用JavaScript函数。</p>
            <p>（3）three.js功能非常丰富。</p>
            <p>除了封装WebGL原始API之外，three.js还包含了许多使用的内置对象，可以方便地应用于游戏开发、动画制作、幻灯片制作、高分辨率模型和一些特殊的视觉效果制作。</p>
            <p>（4）three.js速度很快。</p><p>three.js采用了3D图形最佳实践来证明在不失可用性的前提下，保持极高的性能。</p><p>（5）three.js支持交互。</p>
            <p>WebGL本身并不提供拾取（picking）功能（即是否知道鼠标正处于某个物体上）。而three.js则固化了拾取支持，这就使得你可以轻松为你的应用添加交互功能。</p>
            <p>（6）three.js包含数学库</p><p>three.js拥有一个强大易用的数学库，你可以在其中进行矩阵、投影和矢量运算。</p>
            <p>（7）three.js内置文件格式支持。</p>
            <p>你可以使用流行的3D建模软件导出文本格式的文件，然后使用three.js加载，也可以使用three.js自己的JSON格式或二进制格式。</p>
            <p>（8）three.js扩展性很强</p>
            <p>为three.js添加新的特性或进行自定义优化是很容易的事情。如果你需要某个特殊的数据结构，那么直需要封装到three.js即可。</p>
            <p>（9）three.js同时支持HTML5 2D Canvas</p>
            <p>尽管WebGL日益流行，但是仍然有一些环境尚未支持。three.js可以同时在2D画布中渲染大部分的3D内容，尤其是在那些无法成功获取3D上下文的地方，可以让你的代码平滑的回滚到其他解决方案。</p>
            <p>缺点：</p>
            <p>three.js不是一个游戏引擎，也不是一个虚拟现实平台。它缺少一些在这些系统中常用的特性，比如公告板、头像和物理引擎。如果需要这些东西，需要自己对three.js进行二次封装了。</p>
            <p>介绍three.js框架的好处就说到这吧，总之，在我的想法里面，three.js对于WebGL就相当于jquery对于js。让你能够忘记原生的好框架。</p>
            <p>如果你还想继续了解three.js，请去three.js官网查看一下案例，会让你燃起前所未有的热情的。</p>
          </div>
        </div>
      </article>
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
      title: '1 WEBGL框架THREE.JS优势简介',
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
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.width / this.height,
        0.1,
        1000
      )
      // 渲染器
      // const renderer = new THREE.WebGLRenderer({
      //   canvas: document.getElementById('mainCanvas')
      // })
      // renderer.setClearColor(0x0000ff) // black

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      // 设置渲染器的高度和宽度，如果加上第三个值 false，则按场景大小显示，等比例缩放
      // console.log('window ', this.width)
      this.renderer.setSize(this.width, this.height, false)
      // 将渲染器添加到html当中
      // console.log('this.$el is ', this.$el)
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
