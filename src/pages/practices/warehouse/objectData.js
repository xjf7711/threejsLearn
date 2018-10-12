export const objList = [
  // 地板
  {
    show: true,
    uuid: '',
    name: 'floor',
    objType: 'floor',
    length: 2000,
    width: 1500,
    height: 10,
    x: 0,
    y: 0,
    z: 0,
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    rotation: [{ direction: 'x', degree: 0 }], // 旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
    pic: '',
    style: {
      skinColor: 16777215,
      skin: { skin_up: { skinColor: 1529655, side: 1, opacity: 1 }}
    },
    showSortNub: 4,
    animation: null,
    dbclickEvents: null,
    scale: { x: 1, y: 1, z: 1 }
  },
  {
    show: true,
    uuid: '',
    name: 'line_5',
    objType: 'line',
    length: 3,
    width: 40,
    height: 2,
    x: 601.986,
    y: 8.801,
    z: -730.723,
    startDot: {
      x: 600,
      y: 5,
      z: -750
    },
    endDot: {
      x: 600,
      y: 5,
      z: -690
    },
    style: { skinColor: 16777215 },
    showSortNub: 5
  },
  // 墙体
  {
    show: true,
    uuid: '',
    name: 'wall',
    objType: 'wall',
    thick: 20,
    length: 100,
    height: 240,
    wallData: [
      {
        show: true,
        uuid: '',
        name: 'wall_0',
        // objType: 'holeCube',
        length: 1500,
        thick: 10,
        height: 200,
        rotation: [
          { direction: 'x', degree: 0 },
          { direction: 'y', degree: 0.5 * Math.PI },
          { direction: 'z', degree: 0 }
        ],
        x: -1000,
        y: 100,
        z: 0,
        style: {
          skinColor: 9095650,
          skin: {
            skin_up: { skinColor: 14540253 },
            skin_down: { skinColor: 14540253 },
            skin_fore: { skinColor: 14540253 },
            skin_behind: { skinColor: 14540253 },
            skin_left: { skinColor: 14610158 },
            skin_right: { skinColor: 14540253 }
          }
        },
        showSortNub: 15,
        scale: { x: 1, y: 1, z: 1 }
      },
      {
        show: true,
        uuid: '',
        name: 'wall_1',
        // objType: 'holeCube',
        length: 1500,
        thick: 10,
        height: 200,
        rotation: [
          { direction: 'x', degree: 0 },
          { direction: 'y', degree: 0.5 * Math.PI },
          { direction: 'z', degree: 0 }
        ],
        x: 1000,
        y: 100,
        z: 0,
        style: {
          skinColor: 9095650,
          skin: {
            skin_up: { skinColor: 14540253 },
            skin_down: { skinColor: 14540253 },
            skin_fore: { skinColor: 14540253 },
            skin_behind: { skinColor: 14540253 },
            skin_left: { skinColor: 14610158 },
            skin_right: { skinColor: 14540253 }
          }
        },
        showSortNub: 15,
        scale: { x: 1, y: 1, z: 1 }
      },
      {
        show: true,
        uuid: '',
        name: 'wall_2',
        // objType: 'holeCube',
        length: 2000,
        thick: 10,
        height: 200,
        rotation: [
          { direction: 'x', degree: 0 },
          { direction: 'y', degree: 0 },
          { direction: 'z', degree: 0 }
        ],
        x: 0,
        y: 100,
        z: 755,
        style: {
          skinColor: 9095650,
          skin: {
            skin_up: { skinColor: 14540253 },
            skin_down: { skinColor: 14540253 },
            skin_fore: { skinColor: 14540253 },
            skin_behind: { skinColor: 14540253 },
            skin_left: { skinColor: 14610158 },
            skin_right: { skinColor: 14540253 }
          }
        },
        showSortNub: 15,
        scale: { x: 1, y: 1, z: 1 }
      },
      {
        show: true,
        uuid: '',
        name: 'wall_3',
        objType: 'holeCube',
        length: 2000,
        thick: 10,
        height: 200,
        rotation: [
          { direction: 'x', degree: 0 },
          { direction: 'y', degree: 0 },
          { direction: 'z', degree: 0 }
        ],
        x: 0,
        y: 100,
        z: -755,
        style: {
          skinColor: 9095650,
          skin: {
            skin_up: { skinColor: 14540253 },
            skin_down: { skinColor: 14540253 },
            skin_fore: { skinColor: 14540253 },
            skin_behind: { skinColor: 14540253 },
            skin_left: { skinColor: 14610158 },
            skin_right: { skinColor: 14540253 }
          }
        },
        childrens: [
          {
            op: '-',
            show: true,
            uuid: '',
            name: 'doorhole1',
            objType: 'windowHole',
            thick: 10,
            height: 200,
            length: 220,
            x: -500,
            y: 0,
            z: 0,
            style: { skinColor: 9095650 }
          },
          {
            op: '-',
            show: true,
            uuid: '',
            name: 'doorhole2',
            objType: 'windowHole',
            thick: 10,
            height: 200,
            length: 220,
            x: 500,
            y: 0,
            z: 0,
            style: { skinColor: 9095650 }
          },
          {
            op: '-',
            show: true,
            uuid: '',
            name: 'winhole1',
            objType: 'windowHole',
            thick: 10,
            height: 120,
            length: 160,
            x: 200,
            y: 20,
            z: 0,
            style: { skinColor: 9095650 }
          },
          {
            op: '-',
            show: true,
            uuid: '',
            name: 'winhole2',
            objType: 'windowHole',
            thick: 10,
            height: 120,
            length: 160,
            x: 0,
            y: 20,
            z: 0,
            style: { skinColor: 9095650 }
          },
          {
            op: '-',
            show: true,
            uuid: '',
            name: 'winhole3',
            objType: 'windowHole',
            thick: 10,
            height: 120,
            length: 160,
            x: -200,
            y: 20,
            z: 0,
            style: { skinColor: 9095650 }
          },
          {
            op: '-',
            show: true,
            uuid: '',
            name: 'winhole4',
            objType: 'windowHole',
            thick: 10,
            height: 120,
            length: 160,
            x: 800,
            y: 20,
            z: 0,
            style: { skinColor: 9095650 }
          },
          {
            op: '-',
            show: true,
            uuid: '',
            name: 'winhole5',
            objType: 'windowHole',
            thick: 10,
            height: 120,
            length: 160,
            x: -800,
            y: 20,
            z: 0,
            style: { skinColor: 9095650 }
          }
        ],
        showSortNub: 16,
        scale: { x: 1, y: 1, z: 1 }
      }
    ],
    style: {
      skinColor: 0x8ac9e2
    }
  },
  {
    name: 'pot2_3',
    objType: 'cylinder',
    radiusTop: 16,
    radiusBottom: 8,
    height: 40,
    segmentsX: 2,
    segmentsY: 0,
    openEnded: false,
    position: { x: -104.675, y: 41.756, z: -735 },
    scale: { x: 1, y: 1, z: 1 },
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 1.5707963267948966 },
      { direction: 'z', degree: 0 }
    ],
    style: {
      skinColor: 16776960,
      skin: {
        skin_up: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_down: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_side: {
          skinColor: 16777215,
          opacity: 1,
          imgurl: '../../img/3dImg/flower.gif'
        }
      }
    },
    showSortNub: 32,
    show: true,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    name: 'pot3_3',
    objType: 'cylinder',
    radiusTop: 16,
    radiusBottom: 8,
    height: 40,
    segmentsX: 2,
    segmentsY: 0,
    openEnded: false,
    position: { x: -678.846, y: 41.756, z: -735 },
    scale: { x: 1, y: 1, z: 1 },
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 1.5707963267948966 },
      { direction: 'z', degree: 0 }
    ],
    style: {
      skinColor: 16776960,
      skin: {
        skin_up: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_down: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_side: {
          skinColor: 16777215,
          opacity: 1,
          imgurl: '../../img/3dImg/flower.gif'
        }
      }
    },
    showSortNub: 32,
    show: true,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    name: 'pot4_3',
    objType: 'cylinder',
    radiusTop: 16,
    radiusBottom: 8,
    height: 40,
    segmentsX: 2,
    segmentsY: 0,
    openEnded: false,
    position: { x: 656.887, y: 41.756, z: -735 },
    scale: { x: 1, y: 1, z: 1 },
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 1.5707963267948966 },
      { direction: 'z', degree: 0 }
    ],
    style: {
      skinColor: 16776960,
      skin: {
        skin_up: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_down: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_side: {
          skinColor: 16777215,
          opacity: 1,
          imgurl: '../../img/3dImg/flower.gif'
        }
      }
    },
    showSortNub: 32,
    show: true,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    name: 'pot2_2',
    objType: 'cylinder',
    radiusTop: 16,
    radiusBottom: 8,
    height: 40,
    segmentsX: 2,
    segmentsY: 0,
    openEnded: false,
    position: { x: -104.987, y: 41.756, z: -735 },
    scale: { x: 1, y: 1, z: 1 },
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    style: {
      skinColor: 16776960,
      skin: {
        skin_up: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_down: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_side: {
          skinColor: 16777215,
          opacity: 1,
          imgurl: '../../img/3dImg/flower.gif'
        }
      }
    },
    showSortNub: 32,
    show: true,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    name: 'pot3_2',
    objType: 'cylinder',
    radiusTop: 16,
    radiusBottom: 8,
    height: 40,
    segmentsX: 2,
    segmentsY: 0,
    openEnded: false,
    position: { x: -678.595, y: 41.756, z: -735 },
    scale: { x: 1, y: 1, z: 1 },
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    style: {
      skinColor: 16776960,
      skin: {
        skin_up: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_down: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_side: {
          skinColor: 16777215,
          opacity: 1,
          imgurl: '../../img/3dImg/flower.gif'
        }
      }
    },
    showSortNub: 32,
    show: true,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    name: 'pot4_2',
    objType: 'cylinder',
    radiusTop: 16,
    radiusBottom: 8,
    height: 40,
    segmentsX: 2,
    segmentsY: 0,
    openEnded: false,
    position: { x: 658.116, y: 41.756, z: -735 },
    scale: { x: 1, y: 1, z: 1 },
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    style: {
      skinColor: 16776960,
      skin: {
        skin_up: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_down: { skinColor: 16777215, side: 1, opacity: 1 },
        skin_side: {
          skinColor: 16777215,
          opacity: 1,
          imgurl: '../../img/3dImg/flower.gif'
        }
      }
    },
    showSortNub: 32,
    show: true,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    show: true,
    name: 'doorLeft_44',
    uuid: '',
    actionSign: 'doorLeft',
    objType: 'cube',
    castShadow: false,
    width: 4,
    height: 190,
    length: 104,
    x: 553,
    y: 100,
    z: -755,
    style: {
      skinColor: 9095650,
      skin: {
        skin_up: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_down: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_fore: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_behind: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_left: {
          skinColor: 5325886,
          side: 1,
          opacity: 1,
          imgurl: 'static/threejs/resource/door_left.png'
        },
        skin_right: {
          skinColor: 5325886,
          side: 1,
          opacity: 1,
          imgurl: 'static/threejs/resource/door_right.png'
        }
      }
    },
    dbclickEvents: {
      obj_eventParamInfo: [{ name: '', remark: '' }],
      obj_event: 'openLeftDoor(runobj,function(){});'
    },
    showSortNub: 44,
    customType1: '',
    customType2: '',
    animation: null,
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    thick: null,
    scale: { x: 1, y: 1, z: 1 },
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    show: true,
    uuid: '',
    name: 'door_case1',
    objType: 'cube2',
    length: 15,
    width: 15,
    height: 190,
    x: 388.523,
    y: 100,
    z: -754.724,
    style: {
      skinColor: 16777215,
      skin: {
        skin_up: { skinColor: 14540253, side: 1, opacity: 1 },
        skin_down: { skinColor: 14079702, side: 1, opacity: 1 },
        skin_fore: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_behind: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_left: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_right: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        }
      }
    },
    showSortNub: 46,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    thick: null,
    scale: { x: 1, y: 1, z: 1 },
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    show: true,
    uuid: '',
    name: 'door_case2',
    objType: 'cube2',
    length: 15,
    width: 15,
    height: 190,
    x: 612.609,
    y: 100,
    z: -754.724,
    style: {
      skinColor: 16777215,
      skin: {
        skin_up: { skinColor: 14540253, side: 1, opacity: 1 },
        skin_down: { skinColor: 14079702, side: 1, opacity: 1 },
        skin_fore: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_behind: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_left: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_right: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        }
      }
    },
    showSortNub: 46,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    thick: null,
    scale: { x: 1, y: 1, z: 1 },
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    show: true,
    uuid: '',
    name: 'door_case3',
    objType: 'cube2',
    length: 240,
    width: 15,
    height: 5,
    x: 500,
    y: 197.5,
    z: -754.724,
    style: {
      skinColor: 16777215,
      skin: {
        skin_up: { skinColor: 14540253, side: 1, opacity: 1 },
        skin_down: { skinColor: 14079702, side: 1, opacity: 1 },
        skin_fore: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_behind: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_left: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_right: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        }
      }
    },
    showSortNub: 46,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    thick: null,
    scale: { x: 1, y: 1, z: 1 },
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    show: true,
    castShadow: false,
    name: 'doorRight_45',
    actionSign: 'doorRight',
    uuid: '',
    objType: 'cube',
    width: 4,
    height: 190,
    length: 104,
    x: 448,
    y: 100,
    z: -755,
    style: {
      skinColor: 9095650,
      skin: {
        skin_up: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_down: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_fore: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_behind: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_left: {
          skinColor: 5325886,
          side: 1,
          opacity: 1,
          imgurl: 'static/threejs/resource/door_right.png'
        },
        skin_right: {
          skinColor: 5325886,
          side: 1,
          opacity: 1,
          imgurl: 'static/threejs/resource/door_left.png'
        }
      }
    },
    dbclickEvents: {
      obj_eventParamInfo: [{ name: '', remark: '' }],
      obj_event: 'openRightDoor(runobj,function(){});'
    },
    showSortNub: 45,
    customType1: '',
    customType2: '',
    animation: null,
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    thick: null,
    scale: { x: 1, y: 1, z: 1 },
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    show: true,
    uuid: '',
    name: 'door_case6',
    objType: 'cube2',
    length: 240,
    width: 15,
    height: 5,
    x: -500,
    y: 197.5,
    z: -754.724,
    style: {
      skinColor: 16777215,
      skin: {
        skin_up: { skinColor: 14540253, side: 1, opacity: 1 },
        skin_down: { skinColor: 14079702, side: 1, opacity: 1 },
        skin_fore: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_behind: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_left: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_right: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        }
      }
    },
    showSortNub: 46,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    thick: null,
    scale: { x: 1, y: 1, z: 1 },
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    show: true,
    uuid: '',
    name: 'door_case4',
    objType: 'cube2',
    length: 15,
    width: 15,
    height: 190,
    x: -388.523,
    y: 100,
    z: -754.724,
    style: {
      skinColor: 16777215,
      skin: {
        skin_up: { skinColor: 14540253, side: 1, opacity: 1 },
        skin_down: { skinColor: 14079702, side: 1, opacity: 1 },
        skin_fore: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_behind: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_left: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_right: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        }
      }
    },
    showSortNub: 46,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    thick: null,
    scale: { x: 1, y: 1, z: 1 },
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    show: true,
    uuid: '',
    name: 'door_case5',
    objType: 'cube2',
    length: 15,
    width: 15,
    height: 190,
    x: -612.609,
    y: 100,
    z: -754.724,
    style: {
      skinColor: 16777215,
      skin: {
        skin_up: { skinColor: 14540253, side: 1, opacity: 1 },
        skin_down: { skinColor: 14079702, side: 1, opacity: 1 },
        skin_fore: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_behind: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_left: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        },
        skin_right: {
          skinColor: 14079702,
          side: 1,
          opacity: 1,
          imgurl: '../../img/images3D/1502887864239_2.jpg'
        }
      }
    },
    showSortNub: 46,
    customType1: '',
    customType2: '',
    animation: null,
    dbclickEvents: null,
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    thick: null,
    scale: { x: 1, y: 1, z: 1 },
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    show: true,
    castShadow: false,
    name: 'doorRight_1',
    actionSign: 'doorRight',
    uuid: '',
    objType: 'cube',
    width: 4,
    height: 190,
    length: 104,
    x: -553,
    y: 100,
    z: -755,
    style: {
      skinColor: 9095650,
      skin: {
        skin_up: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_down: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_fore: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_behind: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_left: {
          skinColor: 5325886,
          side: 1,
          opacity: 1,
          imgurl: 'static/threejs/resource/door_right.png'
        },
        skin_right: {
          skinColor: 5325886,
          side: 1,
          opacity: 1,
          imgurl: 'static/threejs/resource/door_left.png'
        }
      }
    },
    dbclickEvents: {
      obj_eventParamInfo: [{ name: '', remark: '' }],
      obj_event: 'openRightDoor(runobj,function(){});'
    },
    showSortNub: 45,
    customType1: '',
    customType2: '',
    animation: null,
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    thick: null,
    scale: { x: 1, y: 1, z: 1 },
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  },
  {
    show: true,
    name: 'doorLeft_2',
    uuid: '',
    actionSign: 'doorLeft',
    objType: 'cube',
    castShadow: false,
    width: 4,
    height: 190,
    length: 104,
    x: -448,
    y: 100,
    z: -755,
    style: {
      skinColor: 9095650,
      skin: {
        skin_up: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_down: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_fore: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_behind: { skinColor: 5325886, side: 1, opacity: 1 },
        skin_left: {
          skinColor: 5325886,
          side: 1,
          opacity: 1,
          imgurl: 'static/threejs/resource/door_left.png'
        },
        skin_right: {
          skinColor: 5325886,
          side: 1,
          opacity: 1,
          imgurl: 'static/threejs/resource/door_right.png'
        }
      }
    },
    dbclickEvents: {
      obj_eventParamInfo: [{ name: '', remark: '' }],
      obj_event: 'openLeftDoor(runobj,function(){});'
    },
    showSortNub: 44,
    customType1: '',
    customType2: '',
    animation: null,
    rotation: [
      { direction: 'x', degree: 0 },
      { direction: 'y', degree: 0 },
      { direction: 'z', degree: 0 }
    ],
    thick: null,
    scale: { x: 1, y: 1, z: 1 },
    BindDevId: null,
    BindDevName: null,
    devInfo: null,
    BindMeteId: null,
    BindMeteName: null
  }
]

