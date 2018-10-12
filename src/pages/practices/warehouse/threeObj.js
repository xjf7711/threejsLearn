import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'
import ThreeClass from './ThreeClass'
const Aobjects = []
Aobjects.push({
  'show': true,
  'uuid': '',
  'name': 'floor',
  'objType': 'floor',
  'length': 2000,
  'width': 1500,
  'height': 1,
  'x': 0,
  'y': 0,
  'z': 0,
  'style': {
    'skinColor': 16777215,
    'skin': {
      'skin_up': {
        'skinColor': 1529655,
        'side': 1,
        'opacity': 1
      }
    }
  },
  'showSortNub': 4,
  'animation': null,
  'dbclickEvents': null,
  'scale': {
    'x': 1,
    'y': 1,
    'z': 1
  }
})
Aobjects.push({
  'show': true,
  'uuid': '',
  'name': 'line_5',
  'objType': 'line',
  'length': 3,
  'width': 40,
  'height': 2,
  'x': 601.986,
  'y': 8.801,
  'z': -730.723,
  'style': {
    'skinColor': 16777215
  },
  'showSortNub': 5
})
Aobjects.push({
  'show': true,
  'uuid': '',
  'name': 'wall_16',
  'objType': 'holeCube',
  'length': 2000,
  'width': 10,
  'height': 200,
  'rotation': {
    '0': {
      'direction': 'x',
      'degree': 0
    },
    '1': {
      'direction': 'y',
      'degree': 0
    },
    '2': {
      'direction': 'z',
      'degree': 0
    }
  },
  'x': 0,
  'y': 100,
  'z': -755,
  'style': {
    'skinColor': 9095650,
    'skin': {
      'skin_up': {
        'skinColor': 14540253
      },
      'skin_down': {
        'skinColor': 14540253
      },
      'skin_fore': {
        'skinColor': 14540253
      },
      'skin_behind': {
        'skinColor': 14540253
      },
      'skin_left': {
        'skinColor': 14610158
      },
      'skin_right': {
        'skinColor': 14540253
      }
    }
  },
  'childrens': [{
    'op': '-',
    'show': true,
    'uuid': '',
    'name': 'doorhole1',
    'objType': 'cube',
    'width': 10,
    'height': 200,
    'length': 220,
    'x': -500,
    'y': 0,
    'z': 0,
    'style': {
      'skinColor': 9095650
    }
  },
  {
    'op': '-',
    'show': true,
    'uuid': '',
    'name': 'doorhole2',
    'objType': 'cube',
    'width': 10,
    'height': 200,
    'length': 220,
    'x': 500,
    'y': 0,
    'z': 0,
    'style': {
      'skinColor': 9095650
    }
  },
  {
    'op': '-',
    'show': true,
    'uuid': '',
    'name': 'winhole1',
    'objType': 'cube',
    'width': 10,
    'height': 120,
    'length': 160,
    'x': 200,
    'y': 20,
    'z': 0,
    'style': {
      'skinColor': 9095650
    }
  },
  {
    'op': '-',
    'show': true,
    'uuid': '',
    'name': 'winhole2',
    'objType': 'cube',
    'width': 10,
    'height': 120,
    'length': 160,
    'x': 0,
    'y': 20,
    'z': 0,
    'style': {
      'skinColor': 9095650
    }
  },
  {
    'op': '-',
    'show': true,
    'uuid': '',
    'name': 'winhole3',
    'objType': 'cube',
    'width': 10,
    'height': 120,
    'length': 160,
    'x': -200,
    'y': 20,
    'z': 0,
    'style': {
      'skinColor': 9095650
    }
  },
  {
    'op': '-',
    'show': true,
    'uuid': '',
    'name': 'winhole4',
    'objType': 'cube',
    'width': 10,
    'height': 120,
    'length': 160,
    'x': 800,
    'y': 20,
    'z': 0,
    'style': {
      'skinColor': 9095650
    }
  },
  {
    'op': '-',
    'show': true,
    'uuid': '',
    'name': 'winhole5',
    'objType': 'cube',
    'width': 10,
    'height': 120,
    'length': 160,
    'x': -800,
    'y': 20,
    'z': 0,
    'style': {
      'skinColor': 9095650
    }
  }],
  'showSortNub': 16,
  'scale': {
    'x': 1,
    'y': 1,
    'z': 1
  }
})
const initOption = { // 画布参数
  antialias: true,
  loadSyn: false, // 是否启用异步加载
  showHelpGrid: true, // 是否显示网格线
  clearCoolr: 0x002323,
  clearColorOp: 1
}
let dbclick = 0
const mouseClick = new THREE.Vector2()

const raycaster = new THREE.Raycaster()

// var Aobjects = []// 对象列表
let warehouseObj = {}
export function initThree(fId) {
  // warehouseObj.initObj3D(fId, initOption, Aobjects)
  warehouseObj = new ThreeClass(fId, initOption, Aobjects)
  warehouseObj.start() // 开始吧
  animation()
  // 事件

  warehouseObj.renderer.domElement.addEventListener('mousedown', onDocumentMouseDown, false)
  warehouseObj.renderer.domElement.addEventListener('mousemove', onDocumentMouseMove, false)
}

// 循环渲染界面
function animation() {
  if (TWEEN != null && typeof (TWEEN) !== 'undefined') {
    TWEEN.update()
  }
  requestAnimationFrame(animation)
  warehouseObj.renderer.render(warehouseObj.scene, warehouseObj.camera)
}

/**
 * 事件部分
 */

// 鼠标按下事件

function onDocumentMouseDown(event) {
  warehouseObj.dbclick++
  // let _this = Obj3DObj
  setTimeout(() => {
    console.log('setTimeout dbclick is ' + dbclick)
    dbclick = 0
  }, 500)
  event.preventDefault()
  if (dbclick >= 2) {
    raycaster.setFromCamera(mouseClick, warehouseObj.camera)
    const intersects = raycaster.intersectObjects(warehouseObj.objects)
    if (intersects.length > 0) {
      warehouseObj.controls.enabled = false
      warehouseObj.SELECTED = intersects[0].object
      if (warehouseObj.eventList != null && warehouseObj.eventList.dbclick != null && warehouseObj.eventList.dbclick.length > 0) {
        warehouseObj.eventList.dbclick.forEach(_obj => {
          if (typeof (_obj.obj_name) === 'string') {
            if (_obj.obj_name === warehouseObj.SELECTED.name) {
              _obj.obj_event(warehouseObj.SELECTED)
            }
          } else if (_obj.findObject != null || typeof (_obj.findObject) === 'function') {
            if (_obj.findObject(warehouseObj.SELECTED.name)) {
              _obj.obj_event(warehouseObj.SELECTED)
            }
          }
        })
      }
      warehouseObj.controls.enabled = true
    }
  }
}

function onDocumentMouseMove(event) {
  event.preventDefault()
  // let _this = Obj3DObj
  //
  // console.log('mouseClick is ', mouseClick)
  // console.log('raycaster is ', raycaster)
  mouseClick.x = (event.clientX / warehouseObj.width) * 2 - 1
  mouseClick.y = -(event.clientY / warehouseObj.height) * 2 + 1
  raycaster.setFromCamera(mouseClick, warehouseObj.camera)
}
