w3dshow = function () { }
var Obj = null;
w3dshow.prototype.start = function () {
    //此处用于判断浏览器

    //开始
    var _this = this;
    Obj = _this;
    _this.initThree(_this.fId);
    _this.initCamera();
    _this.initScene();
    // _   26     //添加3D对象
    $.each(_this.objList, function (index,_obj) {
        _this.InitAddObject(_obj);
    });
    _this.initMouseCtrl();
    //创建按钮
    _this.addBtns(_this.btns);

    _this.animation();

}
/*
方法：初始化
fid 画布所属div的Id
option:参数 {
            antialias:true,//抗锯齿效果为设置有效
            clearCoolr:0xFFFFFF,
            showHelpGrid:false,//是否显示网格线
                }
*/
w3dshow.prototype.init = function (_fId, _option, _datajson) {
  //参数处理
  this.option = {};
  // this.opt 器
  this.camera = null;//摄像机
  this.scene = null;//场景
  this.SELECTED=null;
  this.objects = [];
  this.mouseClick = new THREE.Vector2();
  this.raycaster = new THREE.Raycaster();
  this.controls = null;//鼠标控制器
  this.objList = _datajson.objects;//对象列表
  this.eventList = _datajson.events;//事件对象列表
  this.btns = _datajson.btns;//按钮列表
  var _this = this;
}
//初始化渲染器
w3dshow.prototype.initThree = function () {
  var _this = this;
  _this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: _this.option.antialias });
  _this.oft = true;
  //事件
  _this.renderer.domElement.addEventListener('mousedown', _this.onDocumentMouseDown, false);
  _this.renderer.domElement.addEventListener('mousemove', _this.onDocumentMouseMove, false);
}
//初始化摄像机
w3dshow.prototype.initCamera = function () {
  var _this = this;
  _this.camera = new THREE.PerspectiveCamera(45, _this.width / _this.height, 1, 100000);
  _this.camera.name = 'mainCamera';
  _this.camera.position.x =0;
  // _thi  x: 0, y: 0, z: 0 });
_this.objects.push(_this.camera);
}
//创建场景
w3dshow.prototype.initScene=function() {
  var _this = this;
  _this.scene = new THREE.Scene();
}
//添加对象
w3dshow.prototype.addObject = function (_obj) {
  var _this = Obj;
  _this.objects.push(_obj);
  _this.scene.add(_obj);
}
//创建网格线
w3dshow.prototype.initHelpGrid = function () {
  ototype.initLight = function () {
    /*
    AmbientLight: 环境光，基础光源，它的颜色会被加载到整个场景和所有对象的当前颜色上。
PointLight：点光源，朝着所有方向都发射光线
SpotLight ：聚光灯光源：类型台灯，天花板上的吊灯，手电筒等
DirectionalLight：方向光，又称无限光，从这个发出的光源可以看做是平行光.
    */
    var _this = this;
    var light = new THREE.AmbientLight(0xcccccc);
    light.position.set(0, 0,0);
    _this.scene.add(light);
    var ligh
  }
//创建鼠标控制器
  w3dshow.prototype.initMouseCtrl=function() {
    // var _this = thi  140 }
//控制器回调
  w3dshow.prototype.updateControls = function () {

    //controls.update();
  }
//循环渲染界面
  w3dshow.prototype.animation = function () {
    var _this = Obj;
    if (TWEEN != null && typeof (TWEEN) != 'undefined') {
      TWEEN.update();
    }
  }

  /*
  添加对象
  */
  w3dshow.prototype.InitAddObject = function (_obj) {
    // 192
  }

//创建地板
  w3dshow.prototype.CreateFloor = function (_obj) {
  }
//创建墙体
  w3dshow.prototype.CreateWall = function (_this, _obj) {
    if (_this == null) {
      //。。。 249
      }
  }
//挖洞
      w3dshow.prototype.CreateHole = function (_this, _obj) {
        if (_this == null) {
          _this = this;
        }
        // 290
  }

//模型合并 使用ThreeBSP插件mergeOP计算方式 -表示减去 +表示加上
      w3dshow.prototype.mergeModel = function (_this, mergeOP, _fobj, _sobj) {
        result.uuid= _fobj.uuid+mergeOP+_sobj.uuid;
        result.name=_fobj.name+mergeOP+_sobj.name;
        result.material.needsUpdate = true;
        result.geometry.buffersNeedUpdate = true;
        result.geometry.uvsNeedUpdate = true;
        var _foreFaceSkin = null;
        for (var i = 0; i < result.geometry.faces.length; i++) {
          var _faceset = false;
          for (var j = 0; j < _fobj.geometry.faces.length; j++) {
            if (result.geometry.faces[i].vertexNormals[0].x === _fobj.geometry.faces[j].vertexNormals[0].x
              && result.geometry.faces[i].vertexNormals[0].y === _fobj.geometry.faces[j].vertexNormals[0].y
              && result.geometry.faces[i].vertexNormals[0].z === _fobj.geometry.faces[j].vertexNormals[0].z
              && result.geometry.faces[i].vertexNormals[1].x === _fobj.geometry.faces[j].vertexNormals[1].x
              && result.geometry.faces[i].vertexNormals[1].y === _fobj.geometry.faces[j].vertexNormals[1].y
              && result.geometry.faces[i].vertexNormals[1].z === _fobj.geometry.faces[j].vertexNormals[1].z
              && result.geometry.faces[i].vertexNormals[2].x === _fobj.geometry.faces[j].vertexNormals[2].x)
              // etry.faces[j].color.b * 0x0000ff;
            _faceset =true;
          }
        }
        if (_faceset === false){
          for(var j = 0; j < _sobj.geometry.faces.length; j++) {
            // if (result.geometry.faces[i].vertexNormals[0].x === _sobj.geometry.faces[j].vertexNormals[0].x
            //   && result.geometry.faces[i].vertexNormals[0].y === _sobj.geometry.faces[j].vertexNormals[0].y
            //   && result.geometry.faces[i].vertexNormals[0].z === _sobj.geometry.faces[j].vertexNormals[0].z
            //   && result.geometry.faces[i].vertexNormals[1].x === _sobj.geometry.faces[j].vertexNormals[1].x
            //   && result.geometry.faces[i].vertexNormals[1].y === _sobj.geometry.faces[j].vertexNormals[1].y
            // )
          }
        }
      }
      if (_faceset === false) {
        result.geometry.faces[i].color.setHex(_foreFaceSkin);
      }
      // result.geometry.faces[i].materialIndex = i
    }
    result.castShadow = true;
    result.receiveShadow = true;
    return result;
  }
//创建盒子体
  w3dshow.prototype.createCube = function (_this, _obj) {
    if (_this == null) {
      _this = this;
    }
    var _length = _obj.length || 1000;//默认1000
    var _width = _obj.width || _length;
    var _h
    var skin_up_obj = {
      vertexColors: THREE.FaceColors
    }
    var skin_down_obj = skin_up_obj,
      skin_fore_obj = skin_up_obj,
      skin_behind_obj = skin_up_obj,
      skin_left_obj = skin_up_obj,
      skin_right_obj = skin_up_obj;
    var skin_opacity = 1;
    if (_obj.style != null && typeof (_obj.style) != 'undefined'
      && _obj.style.skin != null && typeof (_obj.style.skin) != 'undefined') {
      //透明度
      if (_obj.style.skin.opacity != null && typeof (_obj.style.skin.opacity) != 'undefined') {
        skin_opacity = _obj.style.skin.opacity;
        console.log(skin_opacity)
      }
      //上
      skin_up_obj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_up, cubeGeometry, 4);
      //下
      skin_down_obj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_down, cubeGeometry, 6);
      //前
      skin_fore_obj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_fore, cubeGeometry, 0);
      //后
      skin_behind_obj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_behind, cubeGeometry, 2);
      //左
      skin_left_obj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_left, cubeGeometry, 8);
      //右
      skin_right_obj = _this.createSkinOptionOnj(_this, _length, _width, _obj.style.skin.skin_right, cubeGeometry, 10);
    }
    var cubeMaterialArray = [];
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_fore_obj));
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_behind_obj));
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_up_obj));
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_down_obj));
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_right_obj));
    cubeMaterialArray.push(new THREE.MeshLambertMaterial(skin_left_obj));
    var cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterialArray);
    cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.uuid = _obj.uuid;
    cube.name = ''
    // break;
  // case 'z':
  //   cube.rotateZ(rotation_obj.degree);
  //   break;
  // case 'arb':
  //   cube.rotateOnAxis(new THREE.Vector3(rotation_obj.degree[0], rotation_obj.degree[1], rotation_obj.degree[2]), rotation_obj.degree[3]);
  //   break;
  // }
// });
// }

return cube;
}
//创建二维平面-长方形
w3dshow.prototype.createPlaneGeometry = function (_this,_obj) {
  //options={
  //    width:0,
  //    height:0,
  //    pic:"",
  //    transparent:true,
  //    opacity:1
  //    blending:false,
  //position: { x:,y:,z:},
  //rotation: { x:,y:,z:},
  //}

  var  options = _obj;
  if (typeof options.pic == "string") {//传入的材质是图片路径，使用 textureloader加载图片作为材质
    var loader = new THREE.TextureLoader();
    loader.setCrossOrigin(this.crossOrigin);
    var texture = loader.load(options.pic, function () { }, undefined, function () { });
  } else {
    var texture = new THREE.CanvasTexture(options.pic)
  }
  var MaterParam = {//材质的参数
    map: texture,
    overdraw: true,
    side: THREE.FrontSide,
    //              blending: THREE.AdditiveBlending,
    transparent: options.transparent,
    //needsUpdate:true,
    //premultipliedAlpha: true,
    opacity: options.opacity
  }
  if (options.blending) {
    MaterParam.blending = THREE.AdditiveBlending//使用饱和度叠加渲染
  }
  var plane = new THREE.Mesh(
    new THREE.PlaneGeometry(options.width, options.height, 1, 1),
    new THREE.MeshBasicMaterial(MaterParam)
  );
  plane.position.x = options.position.x;
  plane.rotation.z = options.rotation.z;
  return plane;
}
//创建空柜子
w3dshow.prototype.createEmptyCabinet = function (_this, _obj) {
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
  var _this = Obj;
  //创建五个面
  //上
  var upobj= {
    show: true,
    uuid: "",
    name: '',
    objType: 'cube',
    length: _obj.size.length+1,
    width: _obj.size.width ,
    height: _obj.size.thick + 1,
    x: _obj.position.x+1,
    y: _obj.position.y+(_obj.size.height/2-_obj.size.thick/2),
    z:_obj.position.z,
    style: {
      skinColor: _obj.skin.skinColor,
      skin: _obj.skin.skin_up.skin
    }
  }
  var upcube = _this.createCube(_this, upobj);
  //左
  var leftobj = {
    show: true,
    uuid: "",
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
  var leftcube = _this.createCube(_this, leftobj);
  var Cabinet = _this.mergeModel(_this, '+', upcube, leftcube);
  //右
  var Rightobj = {
    show: true,
    uuid: "",
    name: '',
    objType: 'cube',
    length: _obj.size.length,
    width: _obj.size.thick,
    height: _obj.size.height,
    x: 0,
    y: -(_obj.size.height / 2 - _obj.size.thick / 2),
    z: (_obj.size.width / 2 - _obj.size.thick / 2)+1,
    style: {
      skinColor: _obj.skin.skinColor,
      skin: _obj.skin.skin_right.skin
    }
  }
  var Rightcube = _this.createCube(_this, Rightobj);
  Cabinet = _this.mergeModel(_this, '+', Cabinet, Rightcube);
  //后
  var Behidobj = {
    show: true,
    uuid: "",
    name: '',
    objType: 'cube',
    length: _obj.size.thick,
    width: _obj.size.width,
    height: _obj.size.height,
    x: (_obj.size.length / 2 - _obj.size.thick / 2)+1,
    y: -(_obj.size.height / 2 - _obj.size.thick / 2),
    z:0,
    style: {
      skinColor: _obj.skin.skinColor,
      skin: _obj.skin.skin_behind.skin
    }
  }
  var Behindcube = _this.createCube(_this, Behidobj);
  Cabinet = _this.mergeModel(_this, '+', Cabinet, Behindcube);
  //下
  var Downobj = {
    show: true,
    uuid: "",
    name: '',
    objType: 'cube',
    length: _obj.size.length + 1,
    width: _obj.size.width,
    height: _obj.size.thick
  }
  tempobj.name = _obj.name;
  tempobj.uuid = _obj.uuid;
  Cabinet.name = _obj.shellname,
    _this.objects.push(Cabinet);
  tempobj.position = Cabinet.position;
  //门
  if (_obj.doors != null && typeof (_obj.doors) !== 'undefined') {
    var doors = _obj.doors;
    if (doors.skins.length == 1) {//单门
      var singledoorobj = {
        show: true,
        uuid: "",
        name: _obj.doors.doorname[0],
        objType: 'cube',
        length: _obj.size.thick,
        width: _obj.size.width,
        height: _obj.size.height,
        x: _obj.position.x - _obj.size.length / 2 - _obj.size.thick / 2,
        y: _obj.position.y,
      }
        tempobj.add(singledoorcube);
    } else if (doors.skins.length > 1) {//多门


      }

    }

    if (_obj.rotation != null && typeof (_obj.rotation) != 'undefined' && _obj.rotation.length > 0) {
      $.each(_obj.rotation, function (index, rotation_obj) {
        switch (rotation_obj.direction) {
          case 'x':
            tempobj.rotateX(rotation_obj.degree);
            break;
         }
    })
    tation.y;
    var tmpobj2 = _this.createPlaneGeometry(_this, _obj);
    dth = 128
    imgheight=128;
    if (_obj.width != null&& typeof (_obj.width) != 'undefined') {
      imgwidth = _obj.width;
    }
    if (_obj.height != null && typeof (_obj.height) != 'undefined') {
      imgheight = _obj.height;
    }
    var texture = new THREE.TextureLoader().load(_obj.imgurl);
    var _repeat = false;
    if (_obj.repeatx != null && typeof (_obj.repeatx) != 'undefined' && _obj.repeatx==true) {
      texture.wrapS = THREE.RepeatWrapping;
      _repeat = true;
    }
    if (_obj.repeaty != null && typeof (_obj.repeaty) != 'undefined' && _obj.repeaty == true) {
      texture.wrapT = THREE.RepeatWrapping;
      _repeat = true;
      if (_this.commonFunc.hasObj(_obj.imgurl)) {
        return {
          map: _this.createSkin(flength, fwidth, _obj),transparent:true
        }
      } else {
        if (_this.commonFunc.hasObj(_obj.skinColor)) {
          _cube.faces[_cubefacenub].color.setHex(_obj.skinColor);
          _cube.faces[_cubefacenub + 1].color.setHex(_obj.skinColor);
        }
        $.each(_this.objects, function (index,_obj) {
          if (_obj.name != null && _obj.name != '') {
            if (_obj.name == _objname) {
              findedobj = _obj;
              return true;
            }
          }
        });
        return findedobj;
      },
      //复制对象
      // cloneObj: function (_objname, newparam) {
/*newparam
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
tion) {
                case 'x':
                    newobj.rotateX(rotation_obj.degree);
                    break;
                case 'y':
834         }
newobj.name = newparam.name;
newobj.uuid = newparam.uuid;
return h > 0) {
        $.each(_obj.material.materials, function (index,obj) {
            obj.emissive.setHex(_color);
        });
    }
}
},
//添加图片标识
addIdentification: function (_objname, _obj) {
/*
879     },
//添加文字
makeTextSprite: function (_objname, parameters)
{
var _this = Obj;
909         sprite.name = parameters.name;
sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);
_this.addObject(sprite);
}
}
w3dshow.prototype.loadObj = function (_obj) {
var jsload  927         });
}

//添加按钮
w3dshow.prototype.addBtns = function (_btnobjs) {
_obj.btnTitle + '" id="' + _obj.btnid + '" />');

var dbclick =0;
w3dshow.prototype.onDocumentMouseDown = function (event) {
dbclick++;
var _this = Obj;
984
}


w3dshow.prototype.addTestObj = function () {

var _this = Obj;

//  0*Math.PI, z: 0 },
//    blending: false
//});
}
*/

