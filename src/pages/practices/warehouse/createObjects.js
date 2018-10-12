import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import ThreeBSP from '@/assets/threejs/libs/threebsp.js'
// import CommonClass from './common'
// const commonFunc = new CommonClass()
import { commonFunc } from './commonFunc'
/*
  添加对象
 */
export function InitAddObject(_this, _obj) {
  // console.log('InitAddObject begins. _obj is ', _obj)
  // const _this = this
  if (_obj.show == null || typeof (_obj.show) === 'undefined' || _obj.show) {
    let _tempObj = null
    switch (_obj.objType) {
      case 'cube':
        _tempObj = createCube(_this, _obj)
        addObject(_this, _tempObj)
        break
      case 'floor':
        console.log('_obj.objType is floor. _obj is ', _obj)
        _tempObj = createCube(_this, _obj)
        addObject(_this, _tempObj)
        break
      case 'wall':
        CreateWall(_this, _obj)
        break
      case 'plane':
        _tempObj = createPlaneGeometry(_this, _obj)
        addObject(_this, _tempObj)
        break
      case 'glasses':
        createGlasses(_this, _obj)
        break
      case 'emptyCabinet':
        _tempObj = createEmptyCabinet(_this, _obj)
        addObject(_this, _tempObj)
        break
      case 'cloneObj':
        _tempObj = commonFunc.cloneObj(_obj.copyfrom, _obj, _this)
        addObject(_this, _tempObj)
        break
      case 'line':
        _tempObj = createLine(_this, _obj)
        addObject(_this, _tempObj)
        break
      // case 'holeCube':
      //   CreateWall(_this, _obj)
      //   break
    }
  }
}

// 添加对象
function addObject(_this, _obj) {
  // const _this = msj3DObj
  // _this.objects.push(_obj)
  _this.scene.add(_obj)
}

// 创建地板
// function CreateFloor(_this, _obj) {
//   // console.log('CreateFloor begins. _obj is ', _obj)
//   // const _this = this
//   // console.log('CreateFloor. _cube is ', _cube)
//   return createCube(_this, _obj)
// }
// 创建墙体
function CreateWall(_this, _obj) {
  console.log('CreateWall begins. _obj is ', _obj)
  // if (_this == null) {
  //   _this = this
  // }
  const _commonThick = _obj.thick || 40 // 墙体厚度
  const _commonLength = _obj.length || 100 // 墙体厚度
  const _commonHeight = _obj.height || 300 // 强体高度
  const _commonSkin = _obj.style.skinColor || 0x98750f
  // 建立墙面
  _obj.wallData.forEach(wallobj => {
    // $.each(_obj.wallData, function(index, wallobj) {
    const wallLength = wallobj.length || _commonLength
    const wallWidth = wallobj.thick || _commonThick
    // const positionX = ((wallobj.startDot.x || 0) + (wallobj.endDot.x || 0)) / 2
    // const positionY = ((wallobj.startDot.y || 0) + (wallobj.endDot.y || 0)) / 2
    // const positionZ = ((wallobj.startDot.z || 0) + (wallobj.endDot.z || 0)) / 2
    const positionX = wallobj.x
    const positionY = wallobj.y
    const positionZ = wallobj.z
    // z相同 表示x方向为长度
    // if (wallobj.startDot.z === wallobj.endDot.z) {
    //   wallLength = Math.abs(wallobj.startDot.x - wallobj.endDot.x)
    //   wallWidth = wallobj.thick || _commonThick
    // } else if (wallobj.startDot.x === wallobj.endDot.x) {
    //   wallLength = wallobj.thick || _commonThick
    //   wallWidth = Math.abs(wallobj.startDot.z - wallobj.endDot.z)
    // }
    const cubeobj = {
      length: wallLength,
      width: wallWidth,
      height: wallobj.height || _commonHeight,
      rotation: wallobj.rotation,
      x: positionX,
      y: positionY,
      z: positionZ,
      uuid: wallobj.uuid,
      name: wallobj.name,
      style: {
        skinColor: _commonSkin,
        skin: wallobj.skin
      }
    }
    let _cube = createCube(_this, cubeobj)
    if (commonFunc.hasObj(wallobj.childrens) && wallobj.childrens.length > 0) {
      wallobj.childrens.forEach(walchildobj => {
        // $.each(wallobj.childrens, function(index, walchildobj) {
        // let _newobj = null
        const _newobj = CreateHole(_this, walchildobj)
        _cube = mergeModel(_this, walchildobj.op, _cube, _newobj)
      })
    }
    addObject(_this, _cube)
  })
}

// 挖洞
function CreateHole(_this, _obj) {
  // if (_this == null) {
  //   _this = this
  // }
  const _commonThick = 40 // 墙体厚度
  const _commonLength = 100 // 墙体厚度
  const _commonHeight = 300 // 强体高度
  const _commonSkin = 0x98750f
  // 建立墙面
  const wallLength = _obj.length || _commonLength
  const wallWidth = _obj.thick || _commonThick
  // const positionX = ((_obj.startDot.x || 0) + (_obj.endDot.x || 0)) / 2
  // const positionY = ((_obj.startDot.y || 0) + (_obj.endDot.y || 0)) / 2
  // const positionZ = ((_obj.startDot.z || 0) + (_obj.endDot.z || 0)) / 2
  const positionX = _obj.x
  const positionY = _obj.y
  const positionZ = _obj.z
  // z相同 表示x方向为长度
  // if (_obj.startDot.z === _obj.endDot.z) {
  //   wallLength = Math.abs(_obj.startDot.x - _obj.endDot.x)
  //   wallWidth = _obj.thick || _commonThick
  // } else if (_obj.startDot.x === _obj.endDot.x) {
  //   wallLength = _obj.thick || _commonThick
  //   wallWidth = Math.abs(_obj.startDot.z - _obj.endDot.z)
  // }
  const cubeobj = {
    length: wallLength,
    width: wallWidth,
    height: _obj.height || _commonHeight,
    rotation: _obj.rotation,
    x: positionX,
    uuid: _obj.uuid,
    name: _obj.name,
    y: positionY,
    z: positionZ,
    style: {
      skinColor: _commonSkin,
      skin: _obj.skin
    }
  }
  console.log('createHole cubeobj is ', cubeobj)
  return createCube(_this, cubeobj)
}

// 模型合并 使用ThreeBSP插件mergeOP计算方式 -表示减去 +表示加上
function mergeModel(_this, mergeOP, _fobj, _sobj) {
  if (_this == null) {
    _this = this
  }
  const fobjBSP = new ThreeBSP(_fobj)
  const sobjBSP = new ThreeBSP(_sobj)
  // let sobjBSP = new ThreeBSP(_sobj);
  let resultBSP = null
  if (mergeOP === '-') {
    resultBSP = fobjBSP.subtract(sobjBSP)
  } else if (mergeOP === '+') {
    // let subMesh = new THREE.Mesh(_sobj)
    _sobj.updateMatrix()
    _fobj.geometry.merge(_sobj.geometry, _sobj.matrix)
    return _fobj
    // resultBSP = fobjBSP.union(sobjBSP);
  } else if (mergeOP === '&') { // 交集
    resultBSP = fobjBSP.intersect(sobjBSP)
  } else {
    addObject(_this, _sobj)
    return _fobj
  }
  const cubeMaterialArray = []
  for (let i = 0; i < 1; i++) {
    cubeMaterialArray.push(new THREE.MeshLambertMaterial({
      // map: _this.createSkin(128, 128, { imgurl: '../datacenterdemo/res2/'+(i%11)+'.jpg' }),
      vertexColors: THREE.FaceColors
    }))
  }
  // let cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterialArray)
  const result = resultBSP.toMesh(cubeMaterialArray)
  result.material.shading = THREE.FlatShading
  result.geometry.computeFaceNormals()
  result.geometry.computeVertexNormals()
  result.uuid = _fobj.uuid + mergeOP + _sobj.uuid
  result.name = _fobj.name + mergeOP + _sobj.name
  result.material.needsUpdate = true
  result.geometry.buffersNeedUpdate = true
  result.geometry.uvsNeedUpdate = true
  let _foreFaceSkin = null
  for (let i = 0; i < result.geometry.faces.length; i++) {
    let _faceset = false
    for (let j = 0; j < _fobj.geometry.faces.length; j++) {
      if (result.geometry.faces[i].vertexNormals[0].x === _fobj.geometry.faces[j].vertexNormals[0].x &&
        result.geometry.faces[i].vertexNormals[0].y === _fobj.geometry.faces[j].vertexNormals[0].y &&
        result.geometry.faces[i].vertexNormals[0].z === _fobj.geometry.faces[j].vertexNormals[0].z &&
        result.geometry.faces[i].vertexNormals[1].x === _fobj.geometry.faces[j].vertexNormals[1].x &&
        result.geometry.faces[i].vertexNormals[1].y === _fobj.geometry.faces[j].vertexNormals[1].y &&
        result.geometry.faces[i].vertexNormals[1].z === _fobj.geometry.faces[j].vertexNormals[1].z &&
        result.geometry.faces[i].vertexNormals[2].x === _fobj.geometry.faces[j].vertexNormals[2].x &&
        result.geometry.faces[i].vertexNormals[2].y === _fobj.geometry.faces[j].vertexNormals[2].y &&
        result.geometry.faces[i].vertexNormals[2].z === _fobj.geometry.faces[j].vertexNormals[2].z) {
        result.geometry.faces[i].color.setHex(_fobj.geometry.faces[j].color.r * 0xff0000 + _fobj.geometry.faces[j].color.g * 0x00ff00 + _fobj.geometry.faces[j].color.b * 0x0000ff)
        _foreFaceSkin = _fobj.geometry.faces[j].color.r * 0xff0000 + _fobj.geometry.faces[j].color.g * 0x00ff00 + _fobj.geometry.faces[j].color.b * 0x0000ff
        _faceset = true
      }
    }
    if (_faceset === false) {
      for (let j = 0; j < _sobj.geometry.faces.length; j++) {
        if (result.geometry.faces[i].vertexNormals[0].x === _sobj.geometry.faces[j].vertexNormals[0].x &&
          result.geometry.faces[i].vertexNormals[0].y === _sobj.geometry.faces[j].vertexNormals[0].y &&
          result.geometry.faces[i].vertexNormals[0].z === _sobj.geometry.faces[j].vertexNormals[0].z &&
          result.geometry.faces[i].vertexNormals[1].x === _sobj.geometry.faces[j].vertexNormals[1].x &&
          result.geometry.faces[i].vertexNormals[1].y === _sobj.geometry.faces[j].vertexNormals[1].y &&
          result.geometry.faces[i].vertexNormals[1].z === _sobj.geometry.faces[j].vertexNormals[1].z &&
          result.geometry.faces[i].vertexNormals[2].x === _sobj.geometry.faces[j].vertexNormals[2].x &&
          result.geometry.faces[i].vertexNormals[2].y === _sobj.geometry.faces[j].vertexNormals[2].y &&
          result.geometry.faces[i].vertexNormals[2].z === _sobj.geometry.faces[j].vertexNormals[2].z &&
          result.geometry.faces[i].vertexNormals[2].z === _sobj.geometry.faces[j].vertexNormals[2].z) {
          result.geometry.faces[i].color.setHex(_sobj.geometry.faces[j].color.r * 0xff0000 + _sobj.geometry.faces[j].color.g * 0x00ff00 + _sobj.geometry.faces[j].color.b * 0x0000ff)
          _foreFaceSkin = _sobj.geometry.faces[j].color.r * 0xff0000 + _sobj.geometry.faces[j].color.g * 0x00ff00 + _sobj.geometry.faces[j].color.b * 0x0000ff
          _faceset = true
        }
      }
    }
    if (_faceset === false) {
      result.geometry.faces[i].color.setHex(_foreFaceSkin)
    }
    // result.geometry.faces[i].materialIndex = i
  }
  result.castShadow = true
  result.receiveShadow = true
  return result
}
// 创建盒子体
function createCube(_this, _obj) {
  // console.log('createCube begins. _obj is ', _obj)
  if (_this == null) {
    _this = this
  }
  const _length = _obj.length || 1000 // 默认1000
  const _width = _obj.width || _length
  const _height = _obj.height || 10
  const _x = _obj.x || 0
  const _y = _obj.y || 0
  const _z = _obj.z || 0
  const skinColor = _obj.style.skinColor || 0x98750f
  const cubeGeometry = new THREE.CubeGeometry(_length, _height, _width, 0, 0, 1)

  // 六面颜色
  for (let i = 0; i < cubeGeometry.faces.length; i += 2) {
    const hex = skinColor || Math.random() * 0x531844
    cubeGeometry.faces[i].color.setHex(hex)
    cubeGeometry.faces[i + 1].color.setHex(hex)
  }
  // 六面纹理
  let skin_up_obj = {
    vertexColors: THREE.FaceColors
  }
  let skin_down_obj = skin_up_obj
  let skin_fore_obj = skin_up_obj
  let skin_behind_obj = skin_up_obj
  let skin_left_obj = skin_up_obj
  let skin_right_obj = skin_up_obj
  let skin_opacity = 1
  if (_obj.style != null && typeof (_obj.style) !== 'undefined' &&
    _obj.style.skin != null && typeof (_obj.style.skin) !== 'undefined') {
    // 透明度
    if (_obj.style.skin.opacity != null && typeof (_obj.style.skin.opacity) !== 'undefined') {
      skin_opacity = _obj.style.skin.opacity
      console.log('skin_opacity is ' + skin_opacity)
    }
    // 上
    skin_up_obj = createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_up, cubeGeometry, 4)
    // 下
    skin_down_obj = createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_down, cubeGeometry, 6)
    // 前
    skin_fore_obj = createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_fore, cubeGeometry, 0)
    // 后
    skin_behind_obj = createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_behind, cubeGeometry, 2)
    // 左
    skin_left_obj = createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_left, cubeGeometry, 8)
    // 右
    skin_right_obj = createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_right, cubeGeometry, 10)
  }
  const cubeMaterialArray = []
  cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_fore_obj))
  cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_behind_obj))
  cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_up_obj))
  cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_down_obj))
  cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_right_obj))
  cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_left_obj))
  // let cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterialArray)
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterialArray)
  cube.castShadow = true
  cube.receiveShadow = true
  cube.uuid = _obj.uuid
  cube.name = _obj.name
  cube.position.set(_x, _y, _z)
  if (_obj.rotation != null && typeof (_obj.rotation) !== 'undefined' && _obj.rotation.length > 0) {
    _obj.rotation.forEach(rotation_obj => {
      // $.each(_obj.rotation, function(index, rotation_obj) {
      switch (rotation_obj.direction) {
        case 'x':
          cube.rotateX(rotation_obj.degree)
          break
        case 'y':
          cube.rotateY(rotation_obj.degree)
          break
        case 'z':
          cube.rotateZ(rotation_obj.degree)
          break
        case 'arb':
          cube.rotateOnAxis(new THREE.Vector3(rotation_obj.degree[0], rotation_obj.degree[1], rotation_obj.degree[2]), rotation_obj.degree[3])
          break
      }
    })
  }
  // console.log('createCube. cube is ', cube)
  return cube
}

// 创建玻璃
function createGlasses(_this, _obj) {
  // const _this = msj3DObj
  const tmpobj = createPlaneGeometry(_this, _obj)
  addObject(_this, tmpobj)
  _obj.rotation.y = Math.PI + _obj.rotation.y
  const tmpobj2 = createPlaneGeometry(_this, _obj)
  addObject(_this, tmpobj2)
}

// 创建二维平面-长方形
function createPlaneGeometry(_this, _obj) {
  // options={
  //    width:0,
  //    height:0,
  //    pic:"",
  //    transparent:true,
  //    opacity:1
  //    blending:false,
  //    position: { x:,y:,z:},
  //    rotation: { x:,y:,z:},
  // }

  const options = _obj
  let texture
  if (typeof options.pic === 'string') { // 传入的材质是图片路径，使用 textureloader加载图片作为材质
    const loader = new THREE.TextureLoader()
    loader.setCrossOrigin('anonymous') // this.crossOrigin
    texture = loader.load(options.pic, function() {}, undefined, function() {})
  } else {
    texture = new THREE.CanvasTexture(options.pic)
  }
  const MaterParam = { // 材质的参数
    map: texture,
    overdraw: true,
    side: THREE.FrontSide,
    // blending: THREE.AdditiveBlending,
    transparent: options.transparent,
    // needsUpdate:true,
    // premultipliedAlpha: true,
    opacity: options.opacity
  }
  if (options.blending) {
    MaterParam.blending = THREE.AdditiveBlending // 使用饱和度叠加渲染
  }
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(options.width, options.height, 1, 1),
    new THREE.MeshBasicMaterial(MaterParam)
  )
  plane.position.x = options.position.x
  plane.position.y = options.position.y
  plane.position.z = options.position.z
  plane.rotation.x = options.rotation.x
  plane.rotation.y = options.rotation.y
  plane.rotation.z = options.rotation.z
  return plane
}

// 创建空柜子
/* 参数demo
  {
    show:true,
    name: 'test',
    uuid: 'test',
    rotation: [{ direction: 'y', degree: 0.25*Math.PI}],//旋转     uuid:'',
    objType: 'emptyCabinet',
    transparent:true,
    size:{length:50,width:60,height:200, thick:2},
    position: { x: -220, y: 105, z: -150 },
    doors: {
        doorType:'lr',// ud门 lr左右门
        doorSize:[1],
        skins:[ {
            skinColor: 0x333333,
            skin_fore: {
                imgurl: "../datacenterdemo/res/rack_door_back.jpg",
            },
            skin_behind: {
                imgurl: "../datacenterdemo/res/rack_front_door.jpg",
            }
        }]
    },
    skin:{
      skinColor: 0xdddddd,

        skin:{
                skinColor: 0xdddddd,
                skin_up: { imgurl: "../datacenterdemo/res/rack_door_back.jpg" },
                skin_down: { imgurl: "../datacenterdemo/res/rack_door_back.jpg" },
                skin_fore: { imgurl: "../datacenterdemo/res/rack_door_back.jpg" },
                skin_behind: { imgurl: "../datacenterdemo/res/rack_door_back.jpg" },
                skin_left: { imgurl: "../datacenterdemo/res/rack_door_back.jpg" },
                skin_right: { imgurl: "../datacenterdemo/res/rack_door_back.jpg" },
        }

      }
    }
  */
function createEmptyCabinet(_this, _obj) { // _this, _obj
  // _this = msj3DObj
  // 创建五个面
  // 上
  const upobj = {
    show: true,
    uuid: '',
    name: '',
    objType: 'cube',
    length: _obj.size.length + 1,
    width: _obj.size.width,
    height: _obj.size.thick + 1,
    x: _obj.position.x + 1,
    y: _obj.position.y + (_obj.size.height / 2 - _obj.size.thick / 2),
    z: _obj.position.z,
    style: {
      skinColor: _obj.skin.skinColor,
      skin: _obj.skin.skin_up.skin
    }
  }
  const upcube = createCube(_this, upobj)
  // 左
  const leftobj = {
    show: true,
    uuid: '',
    name: '',
    objType: 'cube',
    length: _obj.size.length,
    width: _obj.size.thick,
    height: _obj.size.height,
    x: 0,
    y: -(_obj.size.height / 2 - _obj.size.thick / 2),
    z: 0 - (_obj.size.width / 2 - _obj.size.thick / 2) - 1,
    style: {
      skinColor: _obj.skin.skinColor,
      skin: _obj.skin.skin_left.skin
    }
  }
  const leftcube = createCube(_this, leftobj)
  let Cabinet = mergeModel(_this, '+', upcube, leftcube)
  // 右
  const Rightobj = {
    show: true,
    uuid: '',
    name: '',
    objType: 'cube',
    length: _obj.size.length,
    width: _obj.size.thick,
    height: _obj.size.height,
    x: 0,
    y: -(_obj.size.height / 2 - _obj.size.thick / 2),
    z: (_obj.size.width / 2 - _obj.size.thick / 2) + 1,
    style: {
      skinColor: _obj.skin.skinColor,
      skin: _obj.skin.skin_right.skin
    }
  }
  const Rightcube = createCube(_this, Rightobj)
  Cabinet = mergeModel(_this, '+', Cabinet, Rightcube)
  // 后
  const Behidobj = {
    show: true,
    uuid: '',
    name: '',
    objType: 'cube',
    length: _obj.size.thick,
    width: _obj.size.width,
    height: _obj.size.height,
    x: (_obj.size.length / 2 - _obj.size.thick / 2) + 1,
    y: -(_obj.size.height / 2 - _obj.size.thick / 2),
    z: 0,
    style: {
      skinColor: _obj.skin.skinColor,
      skin: _obj.skin.skin_behind.skin
    }
  }
  const Behindcube = createCube(_this, Behidobj)
  Cabinet = mergeModel(_this, '+', Cabinet, Behindcube)
  // 下
  const Downobj = {
    show: true,
    uuid: '',
    name: '',
    objType: 'cube',
    length: _obj.size.length + 1,
    width: _obj.size.width,
    height: _obj.size.thick,
    x: -1,
    y: -(_obj.size.height - _obj.size.thick) - 1,
    z: 0,
    style: {
      skinColor: _obj.skin.skinColor,
      skin: _obj.skin.skin_down.skin
    }
  }
  const Downcube = createCube(_this, Downobj)
  Cabinet = mergeModel(_this, '+', Cabinet, Downcube)

  const tempobj = new THREE.Object3D()
  tempobj.add(Cabinet)
  tempobj.name = _obj.name
  tempobj.uuid = _obj.uuid
  Cabinet.name = _obj.shellname
  _this.objects.push(Cabinet)
  // errorLog.js:17 TypeError: Cannot assign to read only property 'position' of object '#<Object3D>'
  // tempobj.position = Cabinet.position
  tempobj.position.set(Cabinet.position)
  // 门
  if (_obj.doors != null && typeof (_obj.doors) !== 'undefined') {
    const doors = _obj.doors
    if (doors.skins.length === 1) { // 单门
      const singledoorobj = {
        show: true,
        uuid: '',
        name: _obj.doors.doorname[0],
        objType: 'cube',
        length: _obj.size.thick,
        width: _obj.size.width,
        height: _obj.size.height,
        x: _obj.position.x - _obj.size.length / 2 - _obj.size.thick / 2,
        y: _obj.position.y,
        z: _obj.position.z,
        style: {
          skinColor: _obj.doors.skins[0].skinColor,
          skin: _obj.doors.skins[0]
        }
      }
      const singledoorcube = createCube(_this, singledoorobj)
      _this.objects.push(singledoorcube)
      tempobj.add(singledoorcube)
    } else if (doors.skins.length > 1) { // 多门

    }
  }

  if (_obj.rotation != null && typeof (_obj.rotation) !== 'undefined' && _obj.rotation.length > 0) {
    _obj.rotation.forEach(rotation_obj => {
      // $.each(_obj.rotation, function(index, rotation_obj) {
      switch (rotation_obj.direction) {
        case 'x':
          tempobj.rotateX(rotation_obj.degree)
          break
        case 'y':
          tempobj.rotateY(rotation_obj.degree)
          break
        case 'z':
          tempobj.rotateZ(rotation_obj.degree)
          break
        case 'arb':
          tempobj.rotateOnAxis(new THREE.Vector3(rotation_obj.degree[0], rotation_obj.degree[1], rotation_obj.degree[2]), rotation_obj.degree[3])
          break
      }
    })
  }
  return tempobj
}

function createLine(_this, _obj) {
  // 定义材质THREE.LineBasicMaterial . MeshBasicMaterial...都可以
  const material = new THREE.LineBasicMaterial({ color: _obj.style.skinColor }) // 0x0000ff
  // 空几何体，里面没有点的信息,不想BoxGeometry已经有一系列点，组成方形了。
  const geometry = new THREE.Geometry()
  // 给空白几何体添加点信息，这里写3个点，geometry会把这些点自动组合成线，面。
  geometry.vertices.push(_obj.startDot) // new THREE.Vector3(-10,0,0)
  geometry.vertices.push(_obj.endDot) // new THREE.Vector3(0,10,0)
  // 线构造
  return new THREE.Line(geometry, material)
}
// 创建皮肤参数对象
function createSkinOptionOnj(_this, flength, fwidth, _obj, _cube, _cubefacenub) {
  // console.log('commonFunc is ', commonFunc)
  if (commonFunc.hasObj(_obj)) {
    if (commonFunc.hasObj(_obj.imgurl)) {
      return {
        map: createSkin(flength, fwidth, _obj),
        transparent: true
      }
    } else {
      if (commonFunc.hasObj(_obj.skinColor)) {
        _cube.faces[_cubefacenub].color.setHex(_obj.skinColor)
        _cube.faces[_cubefacenub + 1].color.setHex(_obj.skinColor)
      }
      return {
        vertexColors: THREE.FaceColors
      }
    }
  } else {
    return {
      vertexColors: THREE.FaceColors
    }
  }
}

// 创建皮肤
function createSkin(flength, fwidth, _obj) {
  // let imgwidth = 128
  let imgheight = 128
  if (_obj.width != null && typeof (_obj.width) !== 'undefined') {
    // imgwidth = _obj.width
  }
  if (_obj.height != null && typeof (_obj.height) !== 'undefined') {
    imgheight = _obj.height
  }
  const texture = new THREE.TextureLoader().load(_obj.imgurl)
  let _repeat = false
  if (_obj.repeatx != null && typeof (_obj.repeatx) !== 'undefined' && _obj.repeatx === true) {
    texture.wrapS = THREE.RepeatWrapping
    _repeat = true
  }
  if (_obj.repeaty != null && typeof (_obj.repeaty) !== 'undefined' && _obj.repeaty === true) {
    texture.wrapT = THREE.RepeatWrapping
    _repeat = true
  }
  if (_repeat) {
    texture.repeat.set(flength / imgheight, fwidth / imgheight)
  }
  return texture
}

export function openRightDoor(_obj, func) {
  var doorstate = 'close'
  var tempobj = null
  if (_obj.doorState != null && typeof (_obj.doorState) !== 'undefined') {
    doorstate = _obj.doorState
    tempobj = _obj.parent
  } else {
    console.log('add parent')
    var _objparent = _obj.parent
    tempobj = new THREE.Object3D()
    tempobj.position.set(_obj.position.x - _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z)
    _obj.position.set(_obj.geometry.parameters.width / 2, 0, 0)
    tempobj.add(_obj)
    _objparent.add(tempobj)
  }
  _obj.doorState = (doorstate === 'close' ? 'open' : 'close')
  new TWEEN.Tween(tempobj.rotation).to({
    y: (doorstate === 'close' ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
  }, 10000).easing(TWEEN.Easing.Elastic.Out).start() // .onComplete(func()).start()
}

export function openLeftDoor(_obj, func) {
  var doorstate = 'close'
  var tempobj = null
  if (_obj.doorState != null && typeof (_obj.doorState) !== 'undefined') {
    doorstate = _obj.doorState
    tempobj = _obj.parent
  } else {
    console.log('add parent')
    var _objparent = _obj.parent
    tempobj = new THREE.Object3D()
    tempobj.position.set(_obj.position.x + _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z)
    _obj.position.set(-_obj.geometry.parameters.width / 2, 0, 0)
    tempobj.add(_obj)
    _objparent.add(tempobj)
  }
  _obj.doorState = (doorstate === 'close' ? 'open' : 'close')
  new TWEEN.Tween(tempobj.rotation).to({
    y: (doorstate === 'close' ? -0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
  }, 10000).easing(TWEEN.Easing.Elastic.Out).start()
}

export function opcabinetdoor(_obj) {
  var doorstate = 'close'
  var tempobj = null
  if (_obj.doorState != null && typeof (_obj.doorState) !== 'undefined') {
    doorstate = _obj.doorState
    tempobj = _obj.parent
  } else {
    console.log('add parent')
    var _objparent = _obj.parent
    tempobj = new THREE.Object3D()
    tempobj.position.set(_obj.position.x, _obj.position.y, _obj.position.z + _obj.geometry.parameters.depth / 2)
    _obj.position.set(0, 0, -_obj.geometry.parameters.depth / 2)
    tempobj.add(_obj)
    _objparent.add(tempobj)
  }
  _obj.doorState = (doorstate === 'close' ? 'open' : 'close')
  new TWEEN.Tween(tempobj.rotation).to({
    y: (doorstate === 'close' ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
  }, 1000).start()
}
