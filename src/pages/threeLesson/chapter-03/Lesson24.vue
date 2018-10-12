<template>
  <div class="example">
    <h2>24 Three.js的环境光源THREE.AmbientLight</h2>
    <div class="markdown_views">
      <h2 id="作用">
      <a name="t0"/>作用</h2>

      <p>场景当中添加了THREE.AmbientLight光源，光源的颜色将会影响全局的每一个物体每一个面的颜色。该光源没有特别得来源方向，也不会产生阴影。 <br> 通常不会使用THREE.AmbientLight作为场景内的唯一光源，一般配合点光源或者平行光等光源使用。其作用是为了弱化阴影或给场景添加一些额外的颜色。个人感觉重要的作用是，不添加环境光源，如果点光源照射不到的面，three.js压根就不绘制照射不到的面。
      </p>

      <h2 id="注意事项">
      <a name="t1"/>注意事项</h2>

      <p>配置THREE.AmbientLight的颜色用色应该尽量保守。如果你指定的颜色过于明亮，那么你和快就会发现画面的颜色过于饱和了。</p>

      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/26.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/26.html</a>
      </p>

      <h2 id="使用">
      <a name="t2"/>使用</h2>

      <p>（1）首先实例化一个THREE.AmbientLight对象。</p>

      <pre class="prettyprint" name="code"><code class="hljs cs has-numbering"><span class="hljs-keyword">var</span> ambientLight = <span class="hljs-keyword">new</span> THREE.AmbientLight(color); <span class="hljs-comment">//括号内传入指定颜色</span></code></pre>

      <p>（2）将实例化的对象添加到scene场景当中。</p>

      <pre class="prettyprint" name="code"><code class="hljs avrasm has-numbering">scene<span class="hljs-preprocessor">.add</span>(ambientLight)<span class="hljs-comment">;</span></code></pre>

      <h2 id="修改实例化好的threeambientlight对象颜色">
      <a name="t3"/>修改实例化好的THREE.AmbientLight对象颜色</h2>

      <p>（1）在实例化THREE.AmbientLight对象的时候，可以直接传入字符串’#ffffff’或者十六位进制值 0xffffff的方式，也可以和webgl原生一样传入三个值，分别对应rgb的值（值的范围是0~1）。 <br> （2）如果已经实例化成功了，还需要修改当前对象的值，就需要使用到THREE.Color对象，创建一个新的或者修改当前THREE.Color对象的内部属性。例子：
      </p>

      <pre class="prettyprint" name="code"><code class="hljs avrasm has-numbering">ambientLight<span class="hljs-preprocessor">.color</span> = new THREE<span class="hljs-preprocessor">.Color</span>(<span class="hljs-string">"#eeeeee"</span>)<span class="hljs-comment">;</span></code></pre>

      <h2 id="threecolor对象方法">
      <a name="t4"/>THREE.Color对象方法</h2>

      <table>
        <thead>
          <tr>
            <th>函数名</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>set(value)</td>
            <td>将当前颜色设置为指定的十六进制值。这个值可以是字符串、数值或是已有的THREE.Color实例。</td>
          </tr>
          <tr>
            <td>setHex(value)</td>
            <td>将当前颜色设置为指定的十六进制值。</td>
          </tr>
          <tr>
            <td>setRGB(r,g,b)</td>
            <td>根据提供的RGB值设置颜色，参数范围从0到1</td>
          </tr>
          <tr>
            <td>setHSL(h,s,l)</td>
            <td>根据提供的HSL值设置颜色。参数范围从0到1</td>
          </tr>
          <tr>
            <td>setStyle(style)</td>
            <td>根据css设置颜色的方式来设置颜色。例如使用”rgb(255,0,0)”、”#fff”、”red”</td>
          </tr>
          <tr>
            <td>copy(color)</td>
            <td>从提供的颜色对象复制颜色值到当前对象</td>
          </tr>
          <tr>
            <td>copyGammaToLinear(color)</td>
            <td>通常在内部使用，用THREE.Color提供的示例设置对象的颜色。颜色由伽马色彩空间转换到线性色彩空间得来的。伽马色彩空间也使用RGB颜色，但是会使用指数系数而不是线性系数</td>
          </tr>
          <tr>
            <td>copyLinearToGamma(color)</td>
            <td>通常在内部使用。用THREE.Color提供的示例设置对象的颜色，颜色通常是有线性色彩空间转换到伽马色彩空间得来的</td>
          </tr>
          <tr>
            <td>convertGammaToLinear()</td>
            <td>将当前颜色从伽马色彩空间转换到线性色彩空间</td>
          </tr>
          <tr>
            <td>convertLinearToGamma()</td>
            <td>将当前颜色从线性色彩空间转换到干嘛色彩空间</td>
          </tr>
          <tr>
            <td>getHex()</td>
            <td>以十六进制值形式从颜色对象中获取颜色值</td>
          </tr>
          <tr>
            <td>getHexString()</td>
            <td>以十六进制字符串形式从颜色对象中获取颜色值</td>
          </tr>
          <tr>
            <td>getStyle()</td>
            <td>以css值得形式从颜色对象中获取颜色值</td>
          </tr>
          <tr>
            <td>getHSL(optionalTarget)</td>
            <td>以HSL值得形式从颜色对象中获取颜色值。如果提供了optionTarget对象，Three.js将吧h、s和l属性设置到该对象</td>
          </tr>
          <tr>
            <td>offsetHSL(h,s,l)</td>
            <td>将提供的h、s和l值添加到当前颜色的h、s和l值上</td>
          </tr>
          <tr>
            <td>add(color)</td>
            <td>将r、g和b值添加到当前颜色</td>
          </tr>
          <tr>
            <td>addColors(color1,color2)</td>
            <td>通常在内部使用，将color1和color2相加，再将得到的值设置到当前颜色</td>
          </tr>
          <tr>
            <td>addScalar(s)</td>
            <td>通常在内部使用，在当前颜色RGB分量上添加值，谨记参数范围从0到1</td>
          </tr>
          <tr>
            <td>multiply(color)</td>
            <td>通常在内部使用，将当前颜色的RGB值与THREE.Color对象的RGB值相乘</td>
          </tr>
          <tr>
            <td>multiplyScalar(s)</td>
            <td>通常在内部使用，将当前颜色RGB值与提供的RGB值相乘，谨记参数范围从0到1</td>
          </tr>
          <tr>
            <td>lerp(color,alpha)</td>
            <td>通常在内部使用，找出介于对象的颜色和提供的颜色之间的颜色，alpha属性定义了当前颜色与提供的颜色的差距</td>
          </tr>
          <tr>
            <td>equals(color)</td>
            <td>如果THREE.Color对象实例提供的颜色的RGB值与当前颜色相等，则返回true</td>
          </tr>
          <tr>
            <td>formArray(array)</td>
            <td>与setRGB方法具有相同的功能，只是RGB值是通过数字数组的方式作为参数传入</td>
          </tr>
          <tr>
            <td>toArray()</td>
            <td>返回三个元素的数组：[r,g,b]</td>
          </tr>
          <tr>
            <td>clone()</td>
            <td>复制当前颜色</td>
          </tr>
        </tbody>
      </table>

      <h2 id="案例代码">
      <a name="t5"/>案例代码</h2>

      <p>直接引入相关的js文件，打开调节右上角的dat.GUI就可以清晰看到环境变量对物体颜色的影响。</p>
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
  name: 'Example24',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      light: null,
      ambientLight: null,
      pointLight: null,
      controls: null,
      sphere: null,
      gui: null,
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
      this.renderer.setClearColor(0xcccccc, 0.8)
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

        pointLight: '#ffffff', // 点光源

        lightY: 30, // 灯光y轴的位置

        cubeX: 5, // 立方体的x轴位置

        cubeY: 5, // 立方体的x轴位置

        cubeZ: -5 // 立方体的z轴的位置
      }
      this.gui = gui
      const datGui = new dat.GUI()

      // 将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）

      datGui.addColor(gui, 'ambientLight').onChange(function(e) {
        this.ambientLight.color = new THREE.Color(e)
      })

      datGui.addColor(gui, 'pointLight').onChange(function(e) {
        this.pointLight.color = new THREE.Color(e)
      })

      datGui.add(gui, 'lightY', 0, 100)

      datGui.add(gui, 'cubeX', -30, 30)

      datGui.add(gui, 'cubeY', -30, 30)

      datGui.add(gui, 'cubeZ', -30, 30)
    },

    // 光源
    initLight() {
      this.ambientLight = new THREE.AmbientLight('#111111')

      this.scene.add(this.ambientLight)

      this.pointLight = new THREE.PointLight('#ffffff')

      this.pointLight.position.set(15, 30, 10)

      // 告诉平行光需要开启阴影投射

      this.pointLight.castShadow = true

      this.scene.add(this.pointLight)
    },
    // 模型

    initModel() {
      // 辅助工具

      const helper = new THREE.AxesHelper(20)

      this.scene.add(helper)

      // 创建一个立方体

      //    v6----- v5

      //   /|      /|

      //  v1------v0|

      //  | |     | |

      //  | |v7---|-|v4

      //  |/      |/

      //  v2------v3

      // 立方体

      const cubeGeometry = new THREE.CubeGeometry(10, 10, 10)

      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff })

      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

      cube.position.x = 5

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

      this.scene.add(plane)
    },

    // 初始化性能插件

    initStats() {
      this.stats = new Stats()
      // this.renderer.domElement.appendChild(this.stats.domElement)
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
      // 更新性能插件
      this.stats.update()

      // 更新相关位置
      const pointLight = this.pointLight
      const gui = this.gui
      const cube = this.cube

      // 更新相关位置

      pointLight.position.y = gui.lightY

      cube.position.x = gui.cubeX

      cube.position.y = gui.cubeY

      cube.position.z = gui.cubeZ

      // 更新控制器
      this.controls.update()
      requestAnimationFrame(this.animate)
      this.render()
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
