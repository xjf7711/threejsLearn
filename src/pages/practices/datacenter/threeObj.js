import * as THREE from 'three'
import { dataJson } from './dataJson'
import SceneUtils from '@/assets/threejs/js/utils/SceneUtils'
export const threeObj = {
  // all registered object creaters.
  _creators: {},
  // all registered object filters.
  _filters: {},
  init: function(_this) {
    console.log('init begins.')
    // const cubeGeometry = new THREE.BoxGeometry(250, 250, 250)
    // const cubeMaterial = new THREE.MeshNormalMaterial() // MeshBasicMaterial({ color: 0xff0000 })
    // _this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    // _this.cube.position.set(0, 125, 0)
    // _this.scene.add(_this.cube)

    const planeGeometry = new THREE.PlaneGeometry(200, 100)
    const planeMeterial = new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide, transparent: true, opacity: 0.9 })
    const plane = new THREE.Mesh(planeGeometry, planeMeterial)

    plane.position.set(250, 100, 10)
    _this.scene.add(plane)

    const path = new THREE.Path()
    path.lineTo(0, 80)
    // path.quadraticCurveTo(110, 1000, 0.2, 1)
    path.moveTo(80, 80)
    path.lineTo(1000, 1000)
    path.lineTo(1000, 500)
    path.lineTo(0, 0)

    const points = path.getPoints()

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 })

    const line = new THREE.Line(lineGeometry, lineMaterial)
    // line.rotation.x = -0.5 * Math.PI
    _this.scene.add(line)

    const length = 800
    const width = 200

    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.lineTo(0, width)
    shape.lineTo(length, width)
    shape.lineTo(length, 0)
    shape.lineTo(0, 0)
    // add trangle 必须闭合
    const trangle = new THREE.Path()
    trangle.moveTo(150, 150)
    trangle.lineTo(350, 150)
    trangle.lineTo(350, 60)
    trangle.lineTo(150, 60)
    trangle.lineTo(150, 150)
    shape.holes.push(trangle)
    console.log('shape is ', shape)
    const extrudeSettings = {
      steps: 1,
      depth: 40, // THREE.ExtrudeBufferGeometry: amount has been renamed to depth.
      bevelEnabled: false
    }

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    const mesh = this.createMesh(geometry)
    // const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
    // const mesh = new THREE.Mesh(geometry, material)
    // // mesh.rotation.x = -0.5 * Math.PI
    _this.scene.add(mesh)

    this.loadData(_this)
  },
  // 创建模型
  createMesh(geom) {
    // assign two materials
    const meshMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
    meshMaterial.side = THREE.DoubleSide
    const wireFrameMat = new THREE.MeshBasicMaterial()
    wireFrameMat.wireframe = true

    // create a multimaterial
    return SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]) //
  },
  loadData: function(_this) {
    console.log('loadData begins. ')
    const json = threeObj.filterJson(_this.scene, dataJson.objects)
    console.log('loadData json is ', json)
    // const box = network.getDataBox()
    const box = _this.scene
    // network.setClearColor(threeObj.CLEAR_COLOR)

    const children = []
    const ops = []
    const ids = []
    // let shadowHost
    // let shadowHostId
    for (let i = 0; i < json.length; i++) {
      const object = json[i]
      const op = object.op
      const style = object.style
      const client = object.client
      // const translate = object.translate || [0, 0, 0]
      const rotate = object.rotate || [0, 0, 0]
      let object3d = null

      if (object.type === 'path') {
        object3d = this.createPathObject(object)
      }
      if (object.type === 'cube') {
        object3d = this.createCubeObject(object)
      }

      if (object.shadowHost) {
        // shadowHost = object3d
        // shadowHostId = object3d.getId()
        // box.shadowHost = shadowHost
      }

      const creator = threeObj.getCreator(object.type)
      if (creator) {
        creator(box, object)
        continue
      }

      if (object3d) {
        object3d.shadow = object.shadow
        object3d.setRotation(rotate[0], rotate[1], rotate[2])
        if (style) {
          object3d.s(style)
        }
        if (client) {
          for (const key in client) {
            object3d.setClient(key, client[key])
          }
        }
        if (op) {
          children.push(object3d)
          if (children.length > 1) {
            ops.push(op)
          }
          ids.push(object3d.getId())
        } else {
          box.add(object3d)
        }
      }
    }

    if (children.length > 0) {
      // const combo = new THREE.ComboNode(children, ops)
      // combo.setNames(ids)
      // combo.setClient('type', 'floorCombo')
      // box.add(combo)
      //
      // // lazy load floor shadow map.
      // if (shadowHost && shadowHostId) {
      //   setTimeout(function() { threeObj.updateShadowMap(combo, shadowHost, shadowHostId, box) }, threeObj.LAZY_MAX)
      // }
    }
  },
  filterJson: function(box, objects) {
    let newObjects = []

    for (let i = 0; i < objects.length; i++) {
      const object = objects[i]
      const type = object.type
      const filter = this.getFilter(type)
      if (filter) {
        const filteredObject = filter(box, object)
        if (filteredObject) {
          if (filteredObject instanceof Array) {
            newObjects = newObjects.concat(filteredObject)
          } else {
            this.copyProperties(object, filteredObject, ['type'])
            newObjects.push(filteredObject)
          }
        }
      } else {
        newObjects.push(object)
      }
    }

    return newObjects
  },

  getFilter: function(type) {
    return this._filters[type]
  },

  copyProperties: function(from, to, ignores) {
    if (from && to) {
      for (const name in from) {
        if (ignores && ignores.indexOf(name) >= 0) {
          // ignore.
        } else {
          to[name] = from[name]
        }
      }
    }
  },
  getCreator: (type) => {
    return this._creators[type]
  },
  registerFilter: function(type, filter) {
    this._filters[type] = filter
  },

  createPathObject: json => {
    const translate = json.translate || [0, 0, 0]
    const pathWidth = json.width
    const pathHeight = json.height
    const pathData = json.data
    const path = this.create2DPath(pathData)
    const pathInsideColor = json.insideColor
    const pathOutsideColor = json.outsideColor
    const pathTopColor = json.topColor

    const object3d = this.createWall(path, pathWidth, pathHeight, pathInsideColor, pathOutsideColor, pathTopColor)
    object3d.setPosition(translate[0], translate[1], -translate[2])
    object3d.shadow = json.shadow

    return object3d
  },
  // 创建墙的路线
  create2DPath: function(pathData) {
    let path
    for (let j = 0; j < pathData.length; j++) {
      const point = pathData[j]
      if (path) {
        path.lineTo(point[0], point[1], 0)
      } else {
        path = new THREE.Path()
        path.moveTo(point[0], point[1], 0)
      }
    }
    return path
  },
  createWall: function(path, thick, height, insideColor, outsideColor, topColor) {
    // let wall = new mono.PathCube(path, thick, height)
    // wall.s({
    //   'outside.m.color': outsideColor,
    //   'inside.m.type': 'basic',
    //   'inside.m.color': insideColor,
    //   'aside.m.color': outsideColor,
    //   'zside.m.color': outsideColor,
    //   'top.m.color': topColor,
    //   'bottom.m.color': topColor,
    //   'inside.m.lightmap.image': demo.getRes('inside_lightmap.jpg'),
    //   'outside.m.lightmap.image': demo.getRes('outside_lightmap.jpg'),
    //   'aside.m.lightmap.image': demo.getRes('outside_lightmap.jpg'),
    //   'zside.m.lightmap.image': demo.getRes('outside_lightmap.jpg')
    // })
    // return wall
  },
  createCubeObject: function(json) {
    console.log('createCubeObject begins.')
    const translate = json.translate || [0, 0, 0]
    const width = json.width
    const height = json.height
    const depth = json.depth
    const sideColor = json.sideColor
    const topColor = json.topColor

    const object3d = new THREE.CubeGeometry(width, height, depth)
    object3d.setPosition(translate[0], translate[1] + height / 2, translate[2])
    object3d.s({
      'm.color': sideColor,
      'm.ambient': sideColor,
      'left.m.lightmap.image': threeObj.getRes('inside_lightmap.jpg'),
      'right.m.lightmap.image': threeObj.getRes('outside_lightmap.jpg'),
      'front.m.lightmap.image': threeObj.getRes('outside_lightmap.jpg'),
      'back.m.lightmap.image': threeObj.getRes('inside_lightmap.jpg'),
      'top.m.color': topColor,
      'top.m.ambient': topColor,
      'bottom.m.color': topColor,
      'bottom.m.ambient': topColor
    })
    object3d.setClient('type', 'rack')
    return object3d
  }

}
