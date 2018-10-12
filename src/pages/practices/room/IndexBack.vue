<template>
  <div class="example">
    <h2>3D room</h2>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import OrbitControls from 'threejs-orbit-controls'
import ThreeBSP from '@/assets/threejs/libs/threebsp.js'
import TWEEN from '@tweenjs/tween.js'
// import ColladaLoader from '@/assets/threejs/js/loaders/ColladaLoader'
export default {
  name: 'RoomIndex',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      cameraControls: null,
      renderer: null,
      controls: null,
      // directionalLight: null,
      step: 0,
      rotation: 0,
      gui: null,
      stats: null,
      mesh: null,
      sphere: null,
      cube: null,
      clock: new THREE.Clock(),
      dummy: new THREE.Object3D(), // 仿制品
      matArrayA: [],
      matArrayB: [],
      door_state: true // 默认是门是关闭的
    }
  },
  mounted() {
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    this.draw()
  },
  methods: {
    // 绘制
    draw() {
      this.initStats()
      this.initScene()
      this.initHelper()
      this.initCamera()
      this.initLight()
      this.initRenderer()
      this.initControls()
      this.initGui()
      this.initObjects()
      this.render()
      // window.onresize = this.onWindowResize
      this.initEvent()
    },
    initHelper() {
      const axexHelper = new THREE.AxesHelper(1000)
      this.scene.add(axexHelper)
      const gridHelper = new THREE.GridHelper(1600, 40)
      this.scene.add(gridHelper)
    },
    // 1.场景
    initScene() {
      this.scene = new THREE.Scene()
    },
    // 2.相机
    initCamera() {
      const VIEW_ANGLE = 75
      const ASPECT = this.width / this.height
      const NEAR = 0.1
      const FAR = 10000
      this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR)
      this.camera.position.set(-900, 1000, 1800)
      this.camera.lookAt(this.scene.position)
      this.camera.lookAt(0, 0, 0)
    },
    // 3.渲染器
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setClearColor(0x4682B4, 1.0)
      this.renderer.setSize(this.width, this.height)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.$el.appendChild(this.renderer.domElement)
    },
    // 4.事件
    initEvent() {
      window.onResize = this.onWindowResize
      window.addEventListener('keydown', this.onkeyDown)
      // THREEx.WindowResize(renderer, camera);
      // THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
    },
    // 5.控制
    initControls() {
      this.cameraControls = new OrbitControls(this.camera, this.renderer.domElement)
    },
    // 6.光源
    initLight() {
      // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不同
      // A start, 第二个参数是光源强度
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)// 模拟远处类似太阳的光源
      directionalLight.position.set(0, 100, 0).normalize()
      this.scene.add(directionalLight)
      // A end
      const ambient = new THREE.AmbientLight(0xffffff, 1) // AmbientLight,影响整个场景的光源
      ambient.position.set(0, 0, 0)
      this.scene.add(ambient)
      // let pointlight = new THREE.PointLight(0x000000,1.5,2000);
      // scene.add(pointlight);
    },
    initGui() {
      this.controls = {
        // we need the first child, since it's a multimaterial
      }

      this.gui = new dat.GUI()
    },
    // 初始化OBJ对象
    initObjects() {
      // 墙纹理
      this.createWallMaterail()
      this.createFloor()
      this.createLayout()
    },
    createFloor() {
      const loader = new THREE.TextureLoader()
      loader.load('static/threejs/floor.jpg', (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(10, 10)
        // const floorGeometry = new THREE.BoxGeometry(1600, 1100, 1)
        const floorGeometry = new THREE.PlaneGeometry(1600, 1100)
        const floorMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.position.y = -0.5
        floor.rotation.x = Math.PI / 2
        this.scene.add(floor)
      })

      // 茶色：0x58ACFA   透明玻璃色：0XECF1F3
      const glass_material = new THREE.MeshBasicMaterial({ color: 0XECF1F3 })
      glass_material.opacity = 0.4
      glass_material.transparent = true

      const left_wall = this.returnWallObject(20, 200, 1100, 0, this.matArrayB, -801, 100, 0)
      const left_cube = this.returnWallObject(20, 110, 1100, 0, this.matArrayB, -801, 100, 0)
      this.createResultBsp(left_wall, left_cube, 1)
      this.createCubeWall(1, 110, 1100, 0, glass_material, -801, 100, 0)

      const right_wall = this.returnWallObject(20, 200, 1100, 1, this.matArrayB, 801, 100, 0)
      const right_cube = this.returnWallObject(20, 110, 1100, 0, this.matArrayB, 801, 100, 0)
      this.createResultBsp(right_wall, right_cube, 1)
      this.createCubeWall(1, 110, 1100, 0, glass_material, 801, 100, 0)
    },
    // 墙上挖门，通过两个几何体生成BSP对象
    createResultBsp(bsp, less_bsp, mat) {
      let material
      switch (mat) {
        case 1:
          material = new THREE.MeshPhongMaterial({ color: 0x9cb2d1, specular: 0x9cb2d1, shininess: 30, transparent: true, opacity: 1 })
          break
        case 2:
          material = new THREE.MeshPhongMaterial({ color: 0xafc0ca, specular: 0xafc0ca, shininess: 30, transparent: true, opacity: 1 })
          break
        default:
      }

      const sphere1BSP = new ThreeBSP(bsp)
      const cube2BSP = new ThreeBSP(less_bsp)// 0x9cb2d1 淡紫,0xC3C3C3 白灰 , 0xafc0ca灰
      const resultBSP = sphere1BSP.subtract(cube2BSP)
      const result = resultBSP.toMesh(material)
      result.material.flatshading = THREE.FlatShading
      result.geometry.computeFaceNormals() // 重新计算几何体侧面法向量
      result.geometry.computeVertexNormals()
      result.material.needsUpdate = true // 更新纹理
      result.geometry.buffersNeedUpdate = true
      result.geometry.uvsNeedUpdate = true
      this.scene.add(result)
    },
    // 创建墙
    createCubeWall(width, height, depth, angle, material, x, y, z) {
      const cubeGeometry = new THREE.BoxGeometry(width, height, depth)
      const cube = new THREE.Mesh(cubeGeometry, material)
      cube.position.x = x
      cube.position.y = y
      cube.position.z = z
      cube.rotation.y += angle * Math.PI // -逆时针旋转,+顺时针
      this.scene.add(cube)
    },
    // 返回墙对象
    returnWallObject(width, height, depth, angle, material, x, y, z) {
      const cubeGeometry = new THREE.BoxGeometry(width, height, depth)
      const cube = new THREE.Mesh(cubeGeometry, material)
      cube.position.x = x
      cube.position.y = y
      cube.position.z = z
      cube.rotation.y += angle * Math.PI
      return cube
    },
    // 创建墙纹理
    createWallMaterail() {
      this.matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca })) // 前  0xafc0ca :灰色
      this.matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca })) // 后
      this.matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xd6e4ec })) // 上  0xd6e4ec： 偏白色
      this.matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xd6e4ec })) // 下
      this.matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca })) // 左    0xafc0ca :灰色
      this.matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca })) // 右

      this.matArrayB.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca })) // 前  0xafc0ca :灰色
      this.matArrayB.push(new THREE.MeshPhongMaterial({ color: 0x9cb2d1 })) // 后  0x9cb2d1：淡紫
      this.matArrayB.push(new THREE.MeshPhongMaterial({ color: 0xd6e4ec })) // 上  0xd6e4ec： 偏白色
      this.matArrayB.push(new THREE.MeshPhongMaterial({ color: 0xd6e4ec })) // 下
      this.matArrayB.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca })) // 左   0xafc0ca :灰色
      this.matArrayB.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca })) // 右
    },
    // 创建房间布局
    createLayout() {
      // 墙面1 立方体比较长的面  左一
      this.createCubeWall(10, 200, 900, 0, this.matArrayB, -651, 100, 0)
      // 墙面2  立方体比较长的面   右一
      this.createCubeWall(10, 200, 900, 1, this.matArrayB, 651, 100, 0)
      // 墙面3 门对面的墙 立方体比较短的面
      this.createCubeWall(10, 200, 1310, 1.5, this.matArrayB, 0, 100, -451)

      // 墙面4   带门的面
      const wall = this.returnWallObject(1310, 200, 10, 0, this.matArrayB, 0, 100, 455)
      // 门框
      const door_cube = this.returnWallObject(100, 180, 10, 0, this.matArrayB, 0, 90, 455)
      this.createResultBsp(wall, door_cube, 1)

      // 为墙面安装门,右门
      const loader = new THREE.TextureLoader()
      loader.load('static/threejs/models/alien.png', texture => {
        const doorgeometry = new THREE.BoxGeometry(100, 180, 2)
        const doormaterial = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff })
        doormaterial.opacity = 1.0
        doormaterial.transparent = true
        const door = new THREE.Mesh(doorgeometry, doormaterial)
        door.position.set(-50, 0, 0)
        const door1 = door.clone()
        door1.position.set(50, 0, 0)
        door1.visible = false
        this.dummy.add(door)
        this.dummy.add(door1)
        this.dummy.position.set(50, 90, 451)
        this.scene.add(this.dummy)
      })

      // 房间A:隔墙1
      this.createCubeWall(10, 200, 250, 0, this.matArrayA, -151, 100, 325)
      // 房间A:隔墙2  无门
      this.createCubeWall(10, 200, 220, 0.5, this.matArrayA, -256, 100, 201)
      // 厨房：隔墙3
      this.createCubeWall(350, 200, 10, 0, this.matArrayA, 481, 100, 131)
      // 厨房：隔墙4 无门
      this.createCubeWall(10, 200, 200, 0, this.matArrayA, 301, 100, 225)
      // 房间B
      this.createCubeWall(350, 200, 10, 0, this.matArrayA, -471, 100, -50)
      // 房间B  无门
      this.createCubeWall(200, 200, 10, 0.5, this.matArrayA, 0, 100, -350)
      // 房间C
      this.createCubeWall(220, 200, 10, 0, this.matArrayA, 540, 100, -50)
      // 房间C 无门
      this.createCubeWall(200, 200, 10, 0.5, this.matArrayA, 250, 100, -350)
      // 厕所
      const cube = this.returnWallObject(10, 200, 260, 0.5, this.matArrayA, 125, 100, -250)
      // 厕所门框
      const door_cube1 = this.returnWallObject(10, 160, 80, 0.5, this.matArrayA, 155, 90, -250)
      this.createResultBsp(cube, door_cube1, 2)

      // 茶色：0x58ACFA   透明玻璃色：0XECF1F3
      const glass_material = new THREE.MeshBasicMaterial({ color: 0x58ACFA })
      glass_material.opacity = 0.6
      glass_material.transparent = true
      this.createCubeWall(1, 180, 80, 0.5, glass_material, 155, 90, -250)
    },

    // Enter=13,Space=32;
    onkeyDown(event) {
      switch (event.keyCode) {
        case 13:
          console.log(event.keyCode)
          if (this.door_state) {
            this.dummy.rotation.y += 0.5 * Math.PI
            this.door_state = false
          } else {
            this.dummy.rotation.y -= 0.5 * Math.PI
            this.door_state = true
          }
          break
        default:
          console.log(event.keyCode)
          break
      }
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
      TWEEN.update()
      this.update()
    },
    update() {
      // const delta = this.clock.getDelta()
      // const moveDistance = 200 * delta
      // const rotateAngle = Math.PI / 2 * delta
      this.cameraControls.update()
    },
    render() {
      this.stats.update()

      // render using requestAnimationFrame
      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    },
    // 初始化性能插件

    initStats() {
      this.stats = new Stats()
      this.stats.setMode(0) // 0: fps, 1: ms

      // Align top-left
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '0px'
      this.stats.domElement.style.top = '0px'
      this.$el.appendChild(this.stats.domElement)
    },
    // 窗口变动触发的函数

    onWindowResize() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.camera.aspect = this.width / this.height

      this.camera.updateProjectionMatrix()

      // this.render()

      this.renderer.setSize(this.width, this.height)
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
