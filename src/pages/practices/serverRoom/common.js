import * as THREE from 'three'
// 通用方法
export default {
  // 判断对象
  hasObj(_obj) {
    // if (_obj != null && typeof (_obj) !== 'undefined') {
    //   return true
    // } else {
    //   return false
    // }
    return (_obj != null && typeof (_obj) !== 'undefined')
  },
  // 查找对象
  findObject(_objname, _objects) {
    // const _this = msj3DObj
    // console.log('findObject. this.objects is ', _objects)
    let findedobj = null
    _objects.forEach(_obj => {
      // $.each(_this.objects, function(index, _obj) {
      if (_obj.name != null && _obj.name !== '') {
        if (_obj.name === _objname) {
          findedobj = _obj
          return true
        }
      }
    })
    return findedobj
  },
  // 复制对象
  cloneObj(_objname, newparam, _this) {
    // console.log('_objname is ' + _objname + ' newparam is ', newparam)
    /* newparam
      {
      show: true,
      uuid:
      copyfrom: 'cabinet1_1',
      name:
      childrenname:[]
      objType: 'cloneObj',
      position:{x:y:z:}//相对复制品的
      scale:{x:1,y:1,z:1}
        rotation: [{ direction: 'y', degree: 0.25*Math.PI}],//旋转     uuid:'',
      }
    */
    // const _this = msj3DObj
    const fobj = this.findObject(_objname, _this.objects)
    // console.log('fobj is ', fobj)
    // let newobj = newobj = fobj.clone()??
    const newobj = fobj.clone()
    if (newobj.children != null && newobj.children.length > 1) {
      newobj.children.forEach((obj, index) => {
        // $.each(newobj.children, function(index, obj) {
        obj.name = newparam.childrenname[index]
        _this.objects.push(obj)
      })
    }
    // 位置
    if (this.hasObj(newparam.position)) {
      newobj.position.x = newparam.position.x
      newobj.position.y = newparam.position.y
      newobj.position.z = newparam.position.z
    }
    // 大小
    if (this.hasObj(newparam.scale)) {
      newobj.scale.x = newparam.scale.x
      newobj.scale.y = newparam.scale.y
      newobj.scale.z = newparam.scale.z
    }
    // 角度
    if (this.hasObj(newparam.rotation)) {
      newparam.rotation.forEach((index, rotation_obj) => {
        // $.each(newparam.rotation, function(index, rotation_obj) {
        switch (rotation_obj.direction) {
          case 'x':
            newobj.rotateX(rotation_obj.degree)
            break
          case 'y':
            newobj.rotateY(rotation_obj.degree)
            break
          case 'z':
            newobj.rotateZ(rotation_obj.degree)
            break
          case 'arb':
            newobj.rotateOnAxis(new THREE.Vector3(rotation_obj.degree[0], rotation_obj.degree[1], rotation_obj.degree[2]), rotation_obj.degree[3])
            break
        }
      })
    }
    newobj.name = newparam.name
    newobj.uuid = newparam.uuid
    return newobj
  },
  // 设置表皮颜色
  setSkinColor(_objname, _color, _this) {
    // const _this = msj3DObj
    const _obj = this.findObject(_objname)
    if (this.hasObj(_obj.material.emissive)) {
      _obj.material.emissive.setHex(_color)
    } else if (this.hasObj(_obj.material.materials)) {
      if (_obj.material.materials.length > 0) {
        _obj.material.materials.forEach(obj => {
          // $.each(_obj.material.materials, function(index, obj) {
          obj.emissive.setHex(_color)
        })
      }
    }
  },
  // 添加图片标识
  /*
    {
      name:'test',
      size:{x:20,y:20},
      position:{x:0,y:100,z:0},
      imgurl: '../datacenterdemo/res/connection.png'
    }
  */
  addIdentification(_objname, _obj, _this) {
    // const _this = msj3DObj
    const _fobj = this.findObject(_objname)
    const loader = new THREE.TextureLoader()
    const texture = loader.load(_obj.imgurl, function() {}, undefined, function() {})
    const spriteMaterial = new THREE.SpriteMaterial({
      map: texture,
      useScreenCoordinates: false
    })
    const sprite = new THREE.Sprite(spriteMaterial)
    sprite.name = _obj.name
    sprite.position.x = _fobj.position.x + _obj.position.x
    sprite.position.y = _fobj.position.y + _obj.position.y
    sprite.position.z = _fobj.position.z + _obj.position.z
    if (this.hasObj(_obj.size)) {
      sprite.scale.set(_obj.size.x, _obj.size.y)
    } else {
      sprite.scale.set(1, 1)
    }
    _this.addObject(sprite)
  },
  // 添加文字
  makeTextSprite(_objname, parameters, _this) {
    // const _this = msj3DObj
    const _fobj = this.findObject(_objname)
    if (parameters === undefined) parameters = {}
    const fontface = parameters.hasOwnProperty('fontface') ? parameters['fontface'] : 'Arial'
    const fontsize = parameters.hasOwnProperty('fontsize') ? parameters['fontsize'] : 18
    const borderThickness = parameters.hasOwnProperty('borderThickness') ? parameters['borderThickness'] : 4
    const textColor = parameters.hasOwnProperty('textColor') ? parameters['textColor'] : {
      r: 0,
      g: 0,
      b: 0,
      a: 1.0
    }
    const message = parameters.hasOwnProperty('message') ? parameters['message'] : 'helloMsj3D'
    const x = parameters.hasOwnProperty('position') ? parameters['position'].x : 0
    const y = parameters.hasOwnProperty('position') ? parameters['position'].y : 0
    const z = parameters.hasOwnProperty('position') ? parameters['position'].z : 0
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    context.font = 'Bold ' + fontsize + 'px ' + fontface
    // const metrics = context.measureText(message)
    // const textWidth = metrics.width
    context.lineWidth = borderThickness
    context.fillStyle = 'rgba(' + textColor.r + ', ' + textColor.g + ', ' + textColor.b + ', 1.0)'
    context.fillText(message, borderThickness, fontsize + borderThickness)
    const texture = new THREE.Texture(canvas)
    texture.needsUpdate = true
    const spriteMaterial = new THREE.SpriteMaterial({
      map: texture,
      useScreenCoordinates: false
    })
    const sprite = new THREE.Sprite(spriteMaterial)
    sprite.position.x = _fobj.position.x + x
    sprite.position.y = _fobj.position.y + y
    sprite.position.z = _fobj.position.z + z
    sprite.name = parameters.name
    sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize)
    _this.addObject(sprite)
  }
}
