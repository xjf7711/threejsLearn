import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'

import OrbitControls from 'threejs-orbit-controls'

import { jsonData } from './jsonData'
import { InitAddObject } from './createModels'
export function createRoom(fId) {
  const roomStation = new RoomClass(fId)
  roomStation.initThree()
//   render()
}

// function render() {
// //   this.stats.update()
// //   if (this.mesh) {
// //     this.mesh.rotation.y += 0.006
// //     this.mesh.rotation.x += 0.006
// //     // mesh.rotation.y+=0.006;
// //   }
//   // render using requestAnimationFrame
//   requestAnimationFrame(render)
// //   this.renderer.render(this.scene, this.camera)
// }
let roomObj = null
class RoomClass {
  constructor(fId) {
    this.fId = fId
    this.width = document.getElementById(fId).clientWidth - 40
    this.height = document.getElementById(fId).clientHeight - 100
    console.log('constructor this.width is ' + this.width)
    // 复制机柜
    for (var i = 1; i <= 3; i++) {
      for (var j = 1; j <= 6; j++) {
        if (i !== 1 || j !== 1) {
          jsonData.objects.push({
            show: true,
            copyfrom: 'cabinet1_1',
            name: 'cabinet' + i + '_' + j,
            childrenname: ['cabinet' + i + '_' + j + '_shell', 'cabinet' + i + '_' + j + '_door_01'],
            uuid: '',
            objType: 'cloneObj',
            position: { x: -(i - 1) * 200, y: 0, z: (j - 1) * 100 },
            scale: { x: 1, y: 1, z: 1 }
          })
        }
      }
    }
    this.objList = jsonData.objects
    this.btns = jsonData.btns // 控制按钮
    this.eventList = jsonData.events // 事件对象列表

    this.SELECTED = null
    this.objects = []
    this.mouseClick = new THREE.Vector2()
    this.raycaster = new THREE.Raycaster()
    // window.onresize = this.onWindowResize
  }
  // 绘制
  initThree() {
    roomObj = this
    this.initStats()
    this.initRenderer()
    this.initScene()
    this.initCamera()
    this.initLight()
    this.initMouseCtrl()
    // this.initCameraControl()
    // this.initGui()
    this.initHelpGrid()
    this.initModels()
    // 创建按钮
    this.addBtns(this.btns)

    RoomClass.animation()
    // this.render()
    window.onresize = this.onWindowResize
  }

  // 创建场景
  initScene() {
    this.scene = new THREE.Scene()
  }

  // 初始化摄像机
  initCamera() {
    // const _this = this
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 100000)
    this.camera.name = 'mainCamera'
    this.camera.position.x = 1000
    this.camera.position.y = 1000
    this.camera.position.z = -1900
    this.camera.up.x = 0
    this.camera.up.y = 1
    this.camera.up.z = 0
    this.camera.lookAt({
      x: 0,
      y: 0,
      z: 0
    })
    // this.objects.push(this.camera)
  }
  // initCameraControl() {
  //   this.cameraControls = new OrbitControls(this.camera, this.renderer.domElement)
  //   // How far you can dolly in and out ( PerspectiveCamera only )
  //   // 最大最小相机移动距离(景深相机)
  //   this.cameraControls.minDistance = 400
  //   this.cameraControls.maxDistance = 4000
  // }

  // 渲染器
  initRenderer() {
    // this.renderer = new THREE.WebGLRenderer()
    // this.renderer.setClearColor(0xaaaaff, 1.0)
    // this.renderer.setSize(this.width, this.height)
    // // 告诉渲染器需要阴影效果
    // this.renderer.shadowMap.enabled = true
    // document.getElementById(this.fId).appendChild(this.renderer.domElement)
    // const _this = this
    this.renderer = new THREE.WebGLRenderer({
      alpha: true
    //   antialias: this.option.antialias
    })
    // console.log('initRenderer this.width is ' + this.width + ', this.height is ' + this.height)
    this.renderer.setSize(this.width, this.height)
    document.getElementById(this.fId).appendChild(this.renderer.domElement)
    // $('#' + _this.fId).append(_this.renderer.domElement)

    // console.log('this.option.clearColor is ' + this.option.clearCoolr)
    // this.renderer.setClearColor(this.option.clearCoolr, 1.0)
    this.renderer.setClearColor(0xdddddd, 1.0)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMapSoft = true
    // document.getElementById(_this.fId).appendChild(_this.renderer.domElement)
    // 事件
    this.renderer.domElement.addEventListener('mousedown', this.onDocumentMouseDown, false)
    this.renderer.domElement.addEventListener('mousemove', this.onDocumentMouseMove, false)
  }
  // 灯光布置
  initLight() {
    /*
       AmbientLight: 环境光，基础光源，它的颜色会被加载到整个场景和所有对象的当前颜色上。
       PointLight：点光源，朝着所有方向都发射光线
       SpotLight ：聚光灯光源：类型台灯，天花板上的吊灯，手电筒等
       DirectionalLight：方向光，又称无限光，从这个发出的光源可以看做是平行光.
     */
    // const _this = this
    const AmbientLight = new THREE.AmbientLight(0xcccccc)
    AmbientLight.position.set(0, 0, 0)
    this.scene.add(AmbientLight)
    const PointLight = new THREE.PointLight(0x555555)
    PointLight.shadow.camera.near = 1
    PointLight.shadow.camera.far = 5000
    PointLight.position.set(0, 550, 0)
    PointLight.castShadow = true // 表示这个光是可以产生阴影的
    this.scene.add(PointLight)
  }
  initGui() {
    this.controls = {
      // we need the first child, since it's a multimaterial
    }
    this.gui = new dat.GUI()
  }
  // 创建网格线
  initHelpGrid() {
    // const _this = this
    // if (this.option.showHelpGrid) {
    // const GridHelper = new THREE.GridHelper(1600, 30)
    // this.scene.add(GridHelper)
    // }

    // 三维坐标轴
    const axesHelper = new THREE.AxesHelper(1000)
    this.scene.add(axesHelper)
  }
  // 创建鼠标控制器
  initMouseCtrl() {
    // const _this = this
    // 添加轨道控制器
    // 新建一个轨道控制器
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    // this.controls.addEventListener('change', this.updateControls)
    // How far you can dolly in and out ( PerspectiveCamera only )
    // 最大最小相机移动距离(景深相机)
    this.controls.minDistance = 400
    this.controls.maxDistance = 4000
  }
  // 控制器回调
  updateControls() {

    // controls.update();
  }
  initModels() {
    // const cubeGeometry = new THREE.BoxGeometry(250, 250, 250)
    // const material = new THREE.MeshNormalMaterial() // MeshBasicMaterial({ color: 0xff0000 })
    // const cube = new THREE.Mesh(cubeGeometry, material)
    // cube.position.set(0, 125, 0)
    // this.scene.add(cube)

    // 添加3D对象
    // console.log('this.objList is ', this.objList)
    this.objList.forEach(_obj => {
      InitAddObject(roomObj, _obj)
    })
  }

  // 初始化性能插件
  initStats() {
    this.stats = new Stats()
    this.stats.setMode(0) // 0: fps, 1: ms

    // Align top-left
    this.stats.domElement.style.position = 'absolute'
    this.stats.domElement.style.left = '20px'
    this.stats.domElement.style.top = '87px'
    document.getElementById(this.fId).appendChild(this.stats.domElement)
  }

  // 添加按钮
  addBtns(_btnObjs) {
    const _this = roomObj
    if (_btnObjs != null && _btnObjs.length > 0) {
      const toolbar = document.createElement('div')
      toolbar.className = 'toolbar'
      toolbar.id = 'toolbar'
      // document.getElementById(_this.fId).parent.innerHTML += '<div id="toolbar" class="toolbar" ></div>'
      document.getElementById(_this.fId).appendChild(toolbar)
      // $('#' + _this.fId).after('<div id="toolbar" class="toolbar" ></div>')
      _btnObjs.forEach(_obj => {
      // $.each(_btnObjs, function(index, _obj) {
        const btnImg = document.createElement('img')
        btnImg.src = _obj.btnimg
        btnImg.title = _obj.btnTitle
        btnImg.id = _obj.btnid
        document.getElementById('toolbar').appendChild(btnImg)
        // document.getElementById('toolbar').innerHTML += ' <img src="' + _obj.btnimg + '" title="' + _obj.btnTitle + '" id="' + _obj.btnid + '" />'
        // $('#toolbar').append(' <img src="' + _obj.btnimg + '" title="' + _obj.btnTitle + '" id="' + _obj.btnid + '" />')
        document.getElementById(_obj.btnid).addEventListener('click', _obj.event)
        // $('#' + _obj.btnid).on('click', _obj.event)
      })
    }
  }

  // 循环渲染界面
  static animation() {
    const _this = roomObj
    _this.stats.update()
    if (TWEEN != null && typeof (TWEEN) !== 'undefined') {
      TWEEN.update()
    }
    requestAnimationFrame(RoomClass.animation)
    _this.renderer.render(_this.scene, _this.camera)
  }

  static render() {
    const _this = roomObj
    _this.stats.update()
    if (_this.mesh) {
      _this.mesh.rotation.y += 0.006
      _this.mesh.rotation.x += 0.006
      // mesh.rotation.y += 0.006;
    }
    // render using requestAnimationFrame
    requestAnimationFrame(RoomClass.render)
    _this.renderer.render(_this.scene, _this.camera)
  }

  // 窗口变动触发的函数
  onWindowResize() {
    const _this = roomObj
    console.log('onWindowResize roomObj.fId is ', roomObj.fId)
    console.log('onWindowResize this.fId is ', this.fId)
    _this.width = document.getElementById(_this.fId).clientWidth - 40
    _this.height = document.getElementById(_this.fId).clientHeight - 100
    _this.camera.aspect = _this.width / _this.height

    _this.camera.updateProjectionMatrix()

    // this.render()

    _this.renderer.setSize(_this.width, _this.height)
  }

  /*
   * 事件部分
   */
  onDocumentMouseDown(event) {
    // console.log('OnDocumentMouseDown begins. event is ', event)
    const _this = roomObj
    _this.dbclick++
    setTimeout(() => {
      _this.dbclick = 0
    }, 500)
    event.preventDefault()
    if (_this.dbclick >= 2) {
      console.log('this.dbclick >= 2')
      // console.log('_this.')
      _this.raycaster.setFromCamera(_this.mouseClick, _this.camera)
      console.log('_this.raycaster is ', _this.raycaster)
      // console.log('_this.objects is ', _this.objects)
      const intersects = _this.raycaster.intersectObjects(_this.scene.children) // _this.objects
      console.log('intersects is ', intersects)
      if (intersects.length > 0) {
        _this.controls.enabled = false
        _this.SELECTED = intersects[0].object
        if (_this.eventList != null && _this.eventList.dbclick != null && _this.eventList.dbclick.length > 0) {
          _this.eventList.dbclick.forEach(_obj => {
            // $.each(_this.eventList.dbclick, function(index, _obj) {
            if (typeof (_obj.obj_name) === 'string') {
              if (_obj.obj_name === _this.SELECTED.name) {
                _obj.obj_event(_this.SELECTED)
              }
            } else if (_obj.findObject != null || typeof (_obj.findObject) === 'function') {
              if (_obj.findObject(_this.SELECTED.name)) {
                _obj.obj_event(_this.SELECTED)
              }
            }
          })
        }
        _this.controls.enabled = true
      }
    }
  }

  onDocumentMouseMove(event) {
    // console.log('onDocumentMouseMove begins. ')
    event.preventDefault()
    const _this = roomObj
    _this.mouseClick.x = ((event.clientX - 200) / _this.width) * 2 - 1
    _this.mouseClick.y = -((event.clientY - 180) / _this.height) * 2 + 1
    _this.raycaster.setFromCamera(_this.mouseClick, _this.camera)

    // // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
    // // this.raycaster.setFromCamera(this.mouse, this.camera)
    // const intersects = _this.raycaster.intersectObjects(_this.scene.children)
    // // console.log('intersects is  ', intersects)
    // if (intersects.length > 0) {
    //   const points = []
    //   points.push(new THREE.Vector3(800, 500, -1800)) // (-30, 39.8, 30)
    //   points.push(intersects[0].point)
    //
    //   const tubeGeometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 64, 1)
    //   const mat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.6 })
    //
    //   if (_this.tube) _this.scene.remove(_this.tube)
    //
    //   // if (this.controls.showRay) {
    //   _this.tube = new THREE.Mesh(tubeGeometry, mat)
    //   _this.scene.add(_this.tube)
    //   // }
    // }
  }
}
