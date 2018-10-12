import * as THREE from 'three'
import { dataJson } from './dataJson'
const Models = {
  LAZY_MIN: 1000,
  LAZY_MAX: 6000,
  CLEAR_COLOR: '#39609B',
  RES_PATH: 'res',
  lastElement: null,
  timer: null,
  scene: {},

  // all registered object creaters.
  _creators: {},

  // all registered object filters.
  _filters: {},

  // all registered shadow painters.
  _shadowPainters: {},

  init(_this) {
    console.log('models init begins. ')
    this.scene = _this.scene
    const time1 = new Date().getTime()
    this.loadRegister()
    // demo.loadData(network)
    this.loadData()
    const time2 = new Date().getTime()
    console.log('init time:  ' + (time2 - time1))
  },
  loadData() {
    console.log('loadData begins. ')
    // console.log('loadData network.getDataBox() is ', network.getDataBox())
    // 获取模型数据
    var json = this.filterJson(dataJson.objects) // network.getDataBox(),
    console.log(`loadData json is `, json)
    // var box = network.getDataBox()
    // console.log('loadData box is ', box)
    // network.setClearColor(demo.CLEAR_COLOR)

    var children = []
    var ops = []
    // var ids = []
    var shadowHost
    var shadowHostId
    for (var i = 0; i < json.length; i++) {
      var object = json[i]
      console.log(`object is ${JSON.stringify(object)}`)
      var op = object.op
      var style = object.style
      var client = object.client
      // var translate = object.translate || [0, 0, 0]
      var rotate = object.rotate || [0, 0, 0]
      var object3d = null

      if (object.type === 'path') {
        // object3d = this.createPathObject(object)
      }
      if (object.type === 'cube') {
        object3d = this.createCubeObject(object)
      }

      // if (object.shadowHost) {
      //   shadowHost = object3d
      //   shadowHostId = object3d.getId()
      //   // box.shadowHost = shadowHost
      // }

      var creator = this.getCreator(object.type)
      if (creator) {
        // creator(box, object)
        continue
      }

      if (object3d) {
        object3d.shadow = object.shadow
        // object3d.setRotation(rotate[0], rotate[1], rotate[2])
        object3d.rotateX(rotate[0])
        object3d.rotateY(rotate[1])
        object3d.rotateZ(rotate[2])
        if (style) {
          // object3d.s(style)
          console.log('object3d style is ', style)
          // console.log('object3d is ', object3d)
          // 六面颜色
          for (let i = 0; i < object3d.faces.length; i += 2) {
            const hex = style['m.color'] || Math.random() * 0x531844
            object3d.faces[i].color.setHex(hex)
            object3d.faces[i + 1].color.setHex(hex)
          }
        }
        if (client) {
          // for (var key in client) {
          //   // object3d.setClient(key, client[key])
          // }
        }
        if (op) {
          children.push(object3d)
          if (children.length > 1) {
            ops.push(op)
          }
          // ids.push(object3d.getId())
        } else {
          // box.add(object3d)
        }
        const material = new THREE.MeshPhongMaterial()
        object3d = new THREE.Mesh(object3d, material)
        this.scene.add(object3d)
      }
    }
    //
    // if (children.length > 0) {
    //   var combo = new mono.ComboNode(children, ops)
    //   combo.setNames(ids)
    //   combo.setClient('type', 'floorCombo')
    //   box.add(combo)
    //
    // lazy load floor shadow map.
    if (shadowHost && shadowHostId) {
      // setTimeout(function() { demo.updateShadowMap(combo, shadowHost, shadowHostId, box) }, demo.LAZY_MAX)
    }
  },

  filterJson(objects) { // box,
    console.log('filterJson begins. ')
    var newObjects = []
    for (var i = 0; i < objects.length; i++) {
      var object = objects[i]
      var type = object.type
      var filter = this.getFilter(type)
      // console.log(`filter is ${filter}`)
      if (filter) {
        var filteredObject = filter(object) // box,
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
  getFilter(type) {
    return this._filters[type]
  },
  registerFilter(type, filter) {
    // console.log(`type is ${type}, and filter is ${filter}`)
    this._filters[type] = filter
  },
  getRes(file) {
    return this.RES_PATH + '/' + file
  },

  getCreator(type) {
    return this._creators[type]
  },

  registerCreator(type, creator) {
    this._creators[type] = creator
  },
  copyProperties(from, to, ignores) {
    if (from && to) {
      for (var name in from) {
        if (ignores && ignores.indexOf(name) >= 0) {
          // ignore.
        } else {
          to[name] = from[name]
        }
      }
    }
  },

  createCubeObject(json) {
    var translate = json.translate || [0, 0, 0]
    var width = json.width
    var height = json.height
    var depth = json.depth
    // var sideColor = json.sideColor
    // var topColor = json.topColor

    // var object3d = new THREE.BoxGeometry(width, height, depth)
    // object3d.position.set(translate[0], translate[1] + height / 2, translate[2])
    // object3d.s({
    //   'm.color': sideColor,
    //   'm.ambient': sideColor,
    //   'left.m.lightmap.image': this.getRes('inside_lightmap.jpg'),
    //   'right.m.lightmap.image': this.getRes('outside_lightmap.jpg'),
    //   'front.m.lightmap.image': this.getRes('outside_lightmap.jpg'),
    //   'back.m.lightmap.image': this.getRes('inside_lightmap.jpg'),
    //   'top.m.color': topColor,
    //   'top.m.ambient': topColor,
    //   'bottom.m.color': topColor,
    //   'bottom.m.ambient': topColor
    // })
    // object3d.setClient('type', 'rack')

    const cubeGeometry = new THREE.CubeGeometry(width, height, depth)
    // const cubeMaterial = new THREE.MeshPhongMaterial({ color: sideColor })
    // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    // cube.position.set(translate[0], translate[1] + height / 2, translate[2])
    cubeGeometry.position = { x: translate[0], y: translate[1] + height / 2, z: translate[2] }
    return cubeGeometry
  },
  loadRegister() {
    console.log('loadRegister begins. ')
    this.registerFilter('floor', (json) => { // box,
      console.log('loadRegister floor json is ', json)
      return {
        type: 'cube',
        width: 1000,
        height: 10,
        depth: 1000,
        translate: [0, -10, 0],
        shadowHost: true,
        op: '+',
        style: {
          'm.type': 'phong',
          'm.color': '#BEC9BE',
          'm.ambient': '#BEC9BE',
          'top.m.type': 'basic',
          'top.m.texture.image': this.getRes('floor.jpg'),
          'top.m.texture.repeat': new THREE.Vector2(10, 10),
          'top.m.color': '#DAF0F5',
          'top.m.polygonOffset': true,
          'top.m.polygonOffsetFactor': 3,
          'top.m.polygonOffsetUnits': 3
        }
      }
    })
  }

}

export default Models

