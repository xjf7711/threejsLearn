import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
export function openRightDoor(_obj, func) {
  console.log('openRightDoor begins. and _obj is ', _obj)
  var doorstate = 'close'
  var tempobj = null
  if (_obj.doorState != null && typeof (_obj.doorState) !== 'undefined') {
    doorstate = _obj.doorState
    tempobj = _obj.parent
  } else {
    console.log('openRightDoor _obj.parent is ', _obj.parent) // scene
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
