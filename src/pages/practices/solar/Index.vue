<template>
  <div class="example">
    <h2>Solar System</h2>
    <!--<canvas :width="width" :height="height" id="mainCanvas"></canvas>-->
    <!--——Use W A S D and your mouse to move-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
import FirstPersonControls from '@/assets/threejs/js/controls/FirstPersonControls'
// import FirstPersonControls from 'first-person-controls'
// import '@/assets/threejs/fonts/helvetiker_regular.typeface'

export default {
  name: 'SolarSystem',
  data() {
    return {
      canvas: null,
      width: 0,
      height: 0,
      scene: null, // 场景
      camera: null, // 镜头
      renderer: null, // 渲染器
      stats: null, // 帧率器
      controls: null, // 第一人称控制
      stars: [],
      starNames: {}, // 指向显示的星星名字对象
      displayName: '', // 当前显示名字
      clock: new THREE.Clock(), // 第一人称控制需要
      step: 0,
      lookAtMesh: null,
      Sun: null,
      mouse: null,
      raycaster: null,
      font: null
    }
  },
  created() {

  },
  mounted() {
    /* 画布大小*/
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    this.canvas = document.getElementById('mainCanvas')
    this.mouse = new THREE.Vector2() // 鼠标屏幕向量
    this.raycaster = new THREE.Raycaster() // 指向镭射
    this.draw()
    // listen to the resize events
    window.addEventListener('resize', this.onResize, false)
    // window.addEventListener('mousemove', this.onMouseMove, false)
  },
  methods: {
    /* 初始化*/
    draw() {
      this.initStats()
      this.initRenderer()
      this.initScene()
      this.initCamera()
      this.initLight()
      this.initModels()
      this.initControls()
      /* 初始化指向显示名字*/
      this.displayPlanetName()
      // this.fontLoader()
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
      this.renderer.render(this.scene, this.camera)
      // this.move()
      requestAnimationFrame(() => this.move())
    },
    // 渲染器
    initRenderer() {
      console.log('initRender begins')
      /* renderer*/
      this.renderer = new THREE.WebGLRenderer(
        // { canvas: document.getElementById('mainCanvas')}
      )
      this.renderer.setSize(this.width, this.height)
      this.renderer.shadowMap.enabled = true // 辅助线
      this.renderer.shadowMapSoft = true // 柔和阴影
      this.renderer.setClearColor(0xffffff, 0) // 0 透明

      // 绑定事件
      this.renderer.domElement.addEventListener('mousemove', this.onMouseMove, false)

      this.$el.appendChild(this.renderer.domElement)
    },

    // 场景
    initScene() {
      console.log('initScene begins')
      this.scene = new THREE.Scene()
    },

    /* camera 相机*/
    initCamera() {
      console.log('initCamera begins')
      const cameraFar = 3000 // 镜头视距
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, cameraFar)
      this.camera.position.set(-200, 50, 0)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
      this.scene.add(this.camera)
    },

    // 光源
    initLight() {
      console.log('initLight begins')
      // 环境光
      const ambient = new THREE.AmbientLight(0x999999)
      this.scene.add(ambient)

      /* 太阳光*/
      const sunLight = new THREE.PointLight(0xddddaa, 1.5, 500)
      this.scene.add(sunLight)
    },
    // 模型
    initModels() {
      console.log('initModels begins')
      // 辅助工具
      const helper = new THREE.AxesHelper(10)
      this.scene.add(helper)

      this.Sun = new THREE.Mesh() // 因为Loader是异步，要先创建对象，否则this.move中this.Sun为null
      /* sun skin pic*/
      const Loader = new THREE.TextureLoader()
      Loader.load('static/threejs/solar/img/sunCore.jpg', (sunSkinPic) => {
        /* sun*/
        this.Sun = new THREE.Mesh(new THREE.SphereGeometry(12, 16, 16),
          new THREE.MeshLambertMaterial({
            // color: 0xffff00,
            emissive: 0xdd4422,
            map: sunSkinPic
          })
        )
        this.Sun.name = 'Sun'
        this.Sun.castShadow = true
        this.Sun.receiveShadow = true
        this.scene.add(this.Sun)
        this.renderer.render(this.scene, this.camera)
      }, () => {}, err => {
        console.log(err)
      })

      /* opacity sun*/
      const opSun = new THREE.Mesh(new THREE.SphereGeometry(14, 16, 16),
        new THREE.MeshLambertMaterial({
          color: 0xff0000,
          emissive: 0xdd4422, /* */
          transparent: true,
          opacity: 0.35
        })
      )

      opSun.name = 'Sun'
      this.scene.add(opSun)

      /* planets*/
      // 水星
      const Mercury = this.initPlanet('Mercury', 0.02, 0, 'rgb(124,131,203)', 20, 2)
      this.stars.push(Mercury)
      // 金星
      const Venus = this.initPlanet('Venus', 0.012, 0, 'rgb(190,138,44)', 30, 4)
      this.stars.push(Venus)
      // 地球
      const Earth = this.initPlanet('Earth', 0.010, 0, 'rgb(46,69,119)', 40, 5)
      this.stars.push(Earth)
      // 木星
      const Mars = this.initPlanet('Mars', 0.008, 0, 'rgb(210,81,16)', 50, 4)
      this.stars.push(Mars)
      // 木星
      const Jupiter = this.initPlanet('Jupiter', 0.006, 0, 'rgb(254,208,101)', 70, 9)
      this.stars.push(Jupiter)
      // 土星
      const Saturn = this.initPlanet('Saturn', 0.005, 0, 'rgb(210,140,39)', 100, 7, {
        color: 'rgb(136,75,30)',
        innerRedius: 9,
        outerRadius: 11
      })
      this.stars.push(Saturn)
      // 天王
      const Uranus = this.initPlanet('Uranus', 0.003, 0, 'rgb(49,168,218)', 120, 4)
      this.stars.push(Uranus)
      // 海王
      const Neptune = this.initPlanet('Neptune', 0.002, 0, 'rgb(84,125,204)', 150, 3)
      this.stars.push(Neptune)

      /* 背景星星*/
      const particles = 20000 // 星星数量
      /* buffer做星星*/
      const bufferGeometry = new THREE.BufferGeometry()

      const positions = new Float32Array(particles * 3)
      const colors = new Float32Array(particles * 3)

      const color = new THREE.Color()

      const gap = 1000 // 定义星星的最近出现位置

      for (let i = 0; i < positions.length; i += 3) {
        // positions
        /* -2gap < x < 2gap */
        let x = (Math.random() * gap * 2) * (Math.random() < 0.5 ? -1 : 1)
        let y = (Math.random() * gap * 2) * (Math.random() < 0.5 ? -1 : 1)
        let z = (Math.random() * gap * 2) * (Math.random() < 0.5 ? -1 : 1)

        /* 找出x,y,z中绝对值最大的一个数*/
        const biggest = Math.abs(x) > Math.abs(y) ? Math.abs(x) > Math.abs(z) ? 'x' : 'z'
          : Math.abs(y) > Math.abs(z) ? 'y' : 'z'

        const pos = { x, y, z }

        /* 如果最大值比n要小（因为要在一个距离之外才出现星星）则赋值为n（-n）*/
        if (Math.abs(pos[biggest]) < gap) pos[biggest] = pos[biggest] < 0 ? -gap : gap

        x = pos['x']
        y = pos['y']
        z = pos['z']

        positions[ i ] = x
        positions[ i + 1 ] = y
        positions[ i + 2 ] = z

        // colors

        /* 70%星星有颜色*/
        const hasColor = Math.random() > 0.3
        let vx, vy, vz

        if (hasColor) {
          vx = (Math.random() + 1) / 2
          vy = (Math.random() + 1) / 2
          vz = (Math.random() + 1) / 2
        } else {
          vx = 1
          vy = 1
          vz = 1
        }

        /* let vx = ( Math.abs(x) / n*2 ) ;
          var vy = ( Math.abs(y) / n*2 ) ;
          var vz = ( Math.abs(z) / n*2 ) ;*/

        color.setRGB(vx, vy, vz)

        colors[ i ] = color.r
        colors[ i + 1 ] = color.g
        colors[ i + 2 ] = color.b
      }

      bufferGeometry.addAttribute('position', new THREE.BufferAttribute(positions, 3))
      bufferGeometry.addAttribute('color', new THREE.BufferAttribute(colors, 3))
      bufferGeometry.computeBoundingSphere()

      /* 星星的material*/
      const material = new THREE.PointsMaterial({ size: 6, vertexColors: THREE.VertexColors })
      const particleSystem = new THREE.Points(bufferGeometry, material) // 背景星星
      this.scene.add(particleSystem)
    },
    // 初始化dat.GUI简化试验流程

    initGui() {
      // 声明一个保存需求修改的相关数据的对象
      //
      // const gui = {
      // }
      // this.gui = gui
      // const datGui = new dat.GUI()

    },
    // 初始化性能插件

    initStats() {
      console.log('initStats begins')
      /* stats帧率统计*/
      this.stats = new Stats()
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '20px'
      this.stats.domElement.style.top = '87px'
      this.$el.appendChild(this.stats.dom)
    },

    // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
    initControls() {
      console.log('initControls begins')
      /* 镜头控制*/
      this.controls = new FirstPersonControls(this.camera, this.renderer.domElement)
      this.controls.movementSpeed = 100
      this.controls.lookSpeed = 0.125
      this.controls.lookVertical = true
      console.log('this.controls is ', this.controls)
    },

    /* 鼠标指针指向响应*/
    onMouseMove(event) {
      // console.log('onMouseMove begins')
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
      this.mouse.x = ((event.clientX - 200) / this.width) * 2 - 1
      this.mouse.y = -((event.clientY - 180) / this.height) * 2 + 1
    },

    /**
       * 初始化行星
       * @param  {[type]} speed    [description]
       * @param  {[type]} angle    [description]
       * @param  {[type]} color    [description]
       * @param  {[type]} distance [description]
       * @param  {[type]} volume   [description]
       * @param  {[type]} ringMsg  [description]
       * @return {[type]}          [description]
       */
    initPlanet(name, speed, angle, color, distance, volume, ringMsg) {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(volume, 16, 16),
        new THREE.MeshLambertMaterial({ color })
      )
      mesh.position.x = distance
      mesh.receiveShadow = true
      mesh.castShadow = true

      mesh.name = name

      /* 轨道*/
      const track = new THREE.Mesh(new THREE.RingGeometry(distance - 0.2, distance + 0.2, 64, 1),
        new THREE.MeshBasicMaterial({ color: 0x888888, side: THREE.DoubleSide })
      )
      track.rotation.x = -Math.PI / 2
      this.scene.add(track)

      const star = {
        name,
        speed,
        angle,
        distance,
        volume,
        Mesh: mesh
      }

      /* 如果有碎星带*/
      if (ringMsg) {
        const ring = new THREE.Mesh(new THREE.RingGeometry(ringMsg.innerRedius, ringMsg.outerRadius, 32, 6),
          new THREE.MeshBasicMaterial({ color: ringMsg.color, side: THREE.DoubleSide, opacity: 0.7, transparent: true })
        )

        ring.name = `Ring of ${name}`
        ring.rotation.x = -Math.PI / 3
        ring.rotation.y = -Math.PI / 4
        this.scene.add(ring)

        star.ring = ring
      }

      this.scene.add(mesh)

      return star
    },

    /* 初始化指向显示星星名字*/
    displayPlanetName() {
      const fontLoader = new THREE.FontLoader()
      fontLoader.load('static/threejs/examples/fonts/helvetiker_regular.typeface.json', (font) => {
        this.font = font
        console.log('this.stars is', this.stars)
        this.stars.forEach(star =>
          this.nameConstructor(star.name, star.volume)
        )
        this.nameConstructor('Sun', 12)
      })
    },
    /* 根据行星名字和体积构造显示名字*/
    nameConstructor(name, volume) {
      const planetName = new THREE.Mesh(
        new THREE.TextGeometry(name, {
          font: this.font,
          size: 4,
          height: 4
        }),
        new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      )
      console.log('planetName is ', planetName)
      planetName.volume = volume
      planetName.visible = false
      this.starNames[name] = planetName
      this.scene.add(planetName)
    },
    /* 行星移动*/
    move() {
      // console.log('move begins')
      // /* 行星公转*/
      this.stars.forEach(star =>
        this.moveEachStar(star)
      )
      this.stats.update()
      /* 太阳自转*/
      this.Sun.rotation.y = (this.Sun.rotation.y === 2 * Math.PI ? 0.0008 * Math.PI : this.Sun.rotation.y + 0.0008 * Math.PI)

      /* 鼠标视角控制*/
      this.controls.update(this.clock.getDelta())

      /* 限制相机在xyz正负400以内*/
      this.camera.position.x = THREE.Math.clamp(this.camera.position.x, -400, 400)
      this.camera.position.y = THREE.Math.clamp(this.camera.position.y, -400, 400)
      this.camera.position.z = THREE.Math.clamp(this.camera.position.z, -400, 400)

      // /* 鼠标指向行星显示名字*/
      // console.log('this.mouse is ', this.mouse)
      this.raycaster.setFromCamera(this.mouse, this.camera)
      /* 交汇点对像*/
      const intersects = this.raycaster.intersectObjects(this.scene.children)
      if (intersects.length > 0) {
        /* 取第一个交汇对像（最接近相机）*/
        const obj = intersects[ 0 ].object

        const name = obj.name
        /* 把上一个显示隐藏*/
        this.displayName && (this.displayName.visible = false)

        /* 如果是有设定名字的东西*/
        if (this.starNames[name]) {
          this.starNames[name].visible = true
          this.displayName = this.starNames[name]
          /* 复制行星位置*/
          this.displayName.position.copy(obj.position)
          /* 文字居中*/
          this.displayName.geometry.center()
          /* 显示在行星的上方（y轴）*/
          this.displayName.position.y = this.starNames[name].volume + 4
          /* 面向相机*/
          this.displayName.lookAt(this.camera.position)
        }
      } else {
        this.displayName && this.displayName.visible && (this.displayName.visible = false)
      }

      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(() => this.move())
    },

    /* 每一颗行星的公转*/
    moveEachStar(star) {
      star.angle += star.speed
      if (star.angle > Math.PI * star.distance) {
        star.angle -= Math.PI * star.distance
      }

      star.Mesh.position.set(star.distance * Math.sin(star.angle), 0, star.distance * Math.cos(star.angle))

      /* 碎星带*/
      if (star.ring) {
        star.ring.position.set(star.distance * Math.sin(star.angle), 0, star.distance * Math.cos(star.angle))
      }
    },
    onResize() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.width, this.height)
    }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    background-color: #ddd;
    width: 100%;
    height: 800px;
  }
</style>
