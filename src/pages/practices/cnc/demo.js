var network
var box
var font = '80px MicrosoftYaHei,sans-serif', px = 100, py = 40
var bidFinder
var typeFinder
var jichuangBids = []
function init(htmlElementId) {
  make.Default.path = './make/'

  network = new mono.Network3D()
  network.setClearColor('#000000')
  network.setClearAlpha(0)
  network.setBackgroundImage('./images/bg_network.jpg')
  box = network.getDataBox()
  var camera = new mono.PerspectiveCamera(30, 1.5, 30, 30000)
  camera.setPosition(0, 200, 1000)
  network.setCamera(camera)

  bidFinder = new mono.QuickFinder(box, 'bid', 'client')
  typeFinder = new mono.QuickFinder(box, 'type', 'client')

  var interaction = network.getDefaultInteraction()
  interaction.maxDistance = 10000
  interaction.minDistance = 100
  interaction.zoomSpeed = 3
  interaction.panSpeed = 0.2
  network.isSelectable = function(element) { return false }

  document.getElementById('3d_view').appendChild(network.getRootView())
  mono.Utils.autoAdjustNetworkBounds(network, document.documentElement, 'clientWidth', 'clientHeight')

  box.add(new mono.AmbientLight('white'))

  var pointLight = new mono.PointLight(0xFFFFFF, 0.3)
  pointLight.setPosition(0, 5000, 1000)
  box.add(pointLight)

  var pointLight = new mono.PointLight(0xFFFFFF, 0.3)
  pointLight.setPosition(0, 5000, -1000)
  box.add(pointLight)

  network.setShowFps(true)

  var findFirstObjectByMouse = function(network, e) {
    var objects = network.getElementsByMouseEvent(e)
    if (objects.length) {
      for (var i = 0; i < objects.length; i++) {
        var first = objects[i]
        var object3d = first.element
        if (!(object3d instanceof mono.Billboard)) {
          return first
        }
      }
    }
    return null
  }

  network.getRootView().addEventListener('dblclick', function(e) {
    var firstClickObject = findFirstObjectByMouse(network, e)
    var camera = network.getCamera()
    var interaction = network.getDefaultInteraction()
    if (firstClickObject) {
        	var element = firstClickObject.element
      if (element.getClient('animation')) {
        make.Default.playAnimation(element, element.getClient('animation'))
      } else {
        var oldTarget = camera.t()
		        var newTarget = firstClickObject.point
        animateCamera(camera, interaction, oldTarget, newTarget)
      }
    }
  })
  registerModels()
  loadDxfFile()
}

function animateCamera(camera, interaction, oldPoint, newPoint, onDone) {
  var offset = camera.getPosition().sub(camera.getTarget())
  var animation = new twaver.Animate({
    from: 0,
    to: 1,
    dur: 500,
    easing: 'easeBoth',
    onUpdate: function(value) {
      var x = oldPoint.x + (newPoint.x - oldPoint.x) * value
      var y = oldPoint.y + (newPoint.y - oldPoint.y) * value
      var z = oldPoint.z + (newPoint.z - oldPoint.z) * value
      var target = new mono.Vec3(x, y, z)
      camera.lookAt(target)
      interaction.target = target
      var position = new mono.Vec3().addVectors(offset, target)
      camera.setPosition(position)
    }
  })
  animation.onDone = onDone
  animation.play()
}

function registerModels() {
  make.Default.registerObj('kaijuanji', 'kaijuanji', '../obj/')
  make.Default.registerObj('shukongjichuang', 'shukongjichuang', '../obj/')
  make.Default.registerObj('shukongjichuang2', 'shukongjichuang2', '../obj/')
  make.Default.registerObj('chechuang', 'chechuang', '../obj/')

  make.Default.register('wall', function(json, callback) {
    json.height = 200
    json.id = 'twaver.idc.wall'
    return make.Default.load(json, callback)
  })

  make.Default.register('caodi', function(json, callback) {
    json.id = 'twaver.idc.floor'
    json.image = './images/caodi.jpg'
    json.client = {
      type: 'caodi'
    }
    json.position = json.position || [0, 0, 0]
    json.position[1] = -3
    return make.Default.load(json, callback)
  })

  make.Default.register('chuang', function(json, callback) {
    json.id = 'twaver.idc.window'
    json.image = './images/chuang.jpg'
    json.transparent = false
    json.position = json.position || [0, 0, 0]
    json.position[1] = 0
    return make.Default.load(json, callback)
  })

  make.Default.register('xian', function(json, callback) {
    var width = json.width
    var height = json.depth
    var position = json.position || [0, 0, 0]
    var spot = new mono.Cube(width, 1, height)
    spot.s({
      'm.visible': false
    })
    spot.s({
      'm.type': 'basic',
      'top.m.visible': true,
      'm.color': '#e1c356',
      'm.ambient': '#e1c356'
    })

    spot.setPosition(position[0], 2, position[2])
    if (callback) callback(spot)
    return spot
  })

  make.Default.register('xian1', function(json, callback) {
    var width = json.width
    var height = json.depth
    var position = json.position || [0, 0, 0]
    var spot = new mono.Cube(width, 1, height)
    spot.s({
      'm.visible': false
    })
    spot.s({
      'm.type': 'phong',
      'm.transparent': false,
      'top.m.visible': true,
      'm.color': '#E0E0E0',
      'm.ambient': '#E0E0E0',
      'top.m.texture.image': 'images/xian1.jpg',
      'top.m.texture.repeat': new mono.Vec2(6, 1),
      'm.specularStrength': 2

    })

    spot.setPosition(position[0], 1, position[2])
    if (callback) callback(spot)
    return spot
  })
}

function loadDxfFile() {
  loadFile('./room.dxf', function(text) {
    var importDxf = new ImportDxf()
    var dxfs = importDxf.loadDxf(text)
    var jsons = []
    for (var i = 0; i < dxfs.length; i++) {
        	var dxfjson = dxfs[i]
        	if (dxfjson.id == 'twaver.idc.wall') {
        		dxfjson.height = 500
        		dxfjson.showFloor = true
        		var children = dxfjson.children
        		if (children && children.length > 0) {
			        for (var j = 0; j < children.length; j++) {
			            children[j].height = 400
			            if (children[j].id == 'twaver.idc.door') {
			            	if (!children[j].client) children[j].client = {}
			            	children[j].client.leftImage = './images/ldoor.jpg'
			            	children[j].client.rightImage = './images/rdoor.jpg'
			            	children[j].client.envmap = [null, null, null, null, null, null]
			            	children[j].color = '#FFFFFF'
			            } else if (children[j].id == 'twaver.idc.window') {
			            	children[j].id = 'chuang'
			            	children[j].height = 350
			            }
			        }
			    }
			    dxfjson.children = children
        	} else if (dxfjson.id == 'twaver.idc.floor') {
        		dxfjson.image = './images/floor.jpg'
        	} else if (dxfjson.id == 'twaver.idc.column') {
        		dxfjson.height = 500
        		dxfjson.image = './images/column.jpg'
        	} else if (dxfjson.id == 'twaver.park.tree') {
        		dxfjson.position = dxfjson.position || [0, 0, 0]
        		dxfjson.position[1] = -4
        		dxfjson.scale = [2, 5, 2]
        	}
        	jsons.push(dxfjson)
    }
    make.Default.load(jsons, function(object3ds) {
        	if (object3ds && object3ds.length > 0) {
        for (var i = 0; i < object3ds.length; i++) {
          var object3d = object3ds[i]
          box.addByDescendant(object3d)
          var type = object3d.getClient('type')
          if (type && type != 'wall' && type != 'column' && type != 'floor' && type != 'caodi') {
                    	object3d.setClient('bid', type + i)
                    	jichuangBids.push(object3d.getClient('bid'))
                    	if (type == 'kaijuanji' || type == 'shukongjichuang2' || type == 'shukongjichuang') {
                    		object3d.setPositionY(object3d.getPositionY() + 3)
                    	}
                    	if (type == 'shukongjichuang2' || type == 'shukongjichuang') {
                    		object3d.setStyle('m.envmap.image', make.Default.getEnvMap('envmap3'))
                    		object3d.setStyle('m.reflectRatio', 0.5)
                    	}
          }
        }
      }
      document.getElementById('loading').style.display = 'none'
      zoomToOverview()
      createBillboards()
      showAlarms()
      createAlarms()
      loadShadowObject()
      showStatus()
    })
  })
}

function showStatus() {
  setInterval(changeStatus, 2000)
}

function changeStatus() {
  resetStatus()
  var radoms = []
  for (var i = 0; i < 2; i++) {
    var number = parseInt(Math.random() * jichuangBids.length)
    if (radoms.indexOf(number) >= 0) {
      continue
    } else {
      radoms.push(number)
    }
    var bid = jichuangBids[number]
    var jichuang = bidFinder.findFirst(bid)
    if (box.getAlarmBox().getDataById(jichuang.getId())) {
      return
    }
    jichuang.s({
      'm.color': 'orange',
      'm.ambient': 'orange'
    })
    jichuang.getDescendants().forEach(function(child) {
      if (!(child instanceof mono.Billboard)) {
        child.s({
          'm.color': 'orange',
          'm.ambient': 'orange'
        })
      }
    })
  }
}

function resetStatus() {
  for (var i = 0; i < jichuangBids.length; i++) {
    var bid = jichuangBids[i]
    var jichuang = bidFinder.findFirst(bid)
    if (box.getAlarmBox().getDataById(jichuang.getId())) {
      continue
    }
    var color = '#969696', ambient = '#969696'
    if (jichuang.getClient('type') == 'shukongjichuang' || jichuang.getClient('type') == 'shukongjichuang2') {
      ambient = 'white'
    }
    console.log(color, ambient)
    jichuang.s({
      'm.color': color,
      'm.ambient': ambient
    })
    jichuang.getDescendants().forEach(function(child) {
      if (!(child instanceof mono.Billboard)) {
        console.log(child.getStyle('m.texture.imge'))
        child.s({
          'm.color': color,
          'm.ambient': ambient
        })
      }
    })
  }
}

function showAlarms() {
  setInterval(createAlarms, 10000)
}

function showBillboards() {
  setInterval(createBillboards, 10000)
}

function createAlarms() {
  box.getAlarmBox().clear()
  var radoms = []
  for (var i = 0; i < 2; i++) {
    var number = parseInt(Math.random() * jichuangBids.length)
    if (radoms.indexOf(number) >= 0) {
      continue
    } else {
      radoms.push(number)
    }
    var bid = jichuangBids[number]
    var jichuang = bidFinder.findFirst(bid)
    var alarm = new mono.Alarm(jichuang.getId(), jichuang.getId(), mono.AlarmSeverity.CRITICAL)
    box.getAlarmBox().add(alarm)
  }
}

function createBillboards() {
  for (var i = 0; i < 2; i++) {
    var number = parseInt(Math.random() * jichuangBids.length)
    var bid = jichuangBids[number]
    var jichuang = bidFinder.findFirst(bid)
    var billboard = createBillboard(i)
    billboard.setParent(jichuang)
    billboard.setPositionY(300)
    box.add(billboard)
  }
}

function createBillboard(i) {
  var billboard = new mono.Billboard()
  var parts = ['CW09-12-503', 'CW09-12-506']
  var part = parts[i || 0]
  var text = '加工零件：' + part + '\n加工时间：3H20M\n空转时间：1H\nCNC报警：无'
  var size = getTextSize(text, font, px, py)
  var w = size.w, h = size.h, w1 = mono.Utils.nextPowerOfTwo(size.w), h1 = mono.Utils.nextPowerOfTwo(size.h)
  billboard.s({
    'm.texture.image': createTextBillboardImage(text),
    'm.texture.offset': new mono.Vec2(0, (h1 - h) / h1),
    'm.texture.repeat': new mono.Vec2(w / w1, h / h1),
    'm.vertical': true
  })
  setInterval(function() {
    var i = parseInt(Math.random() * 7) + 1
    var text = '加工零件：' + part + '\n加工时间：3H20M\n空转时间：1H\nCNC报警：3n' + i
    billboard.setStyle('m.texture.image', createTextBillboardImage(text))
  }, 1000)
  billboard.setScale(size.w / 2, size.h / 2, 1)
  return billboard
}

function zoomToOverview() {
  network.zoomEstimateOverview(45)

  var camera = network.getCamera()
  var p = camera.p()
  var t = camera.t()
  camera.setPosition(p.x + 2500, p.y + 3500, p.z + 3500)
  setTimeout(function() {
    mono.Utils.playCameraAnimation(camera, new mono.Vec3(p.x + 500, p.y - 2500, p.z + 500), t, 500)
  }, 1000)
}

function loadFile(url, onLoad) {
  if (url) {
    var request = new XMLHttpRequest()
    if (onLoad !== undefined) {
      request.addEventListener('load', function(event) {
        onLoad(event.target.responseText)
      }, false)
    }
    request.open('GET', url, true)
    request.send(null)
  }
}

function getTextSize(text, font, px, py) {
  var canvas = document.createElement('canvas')
  var context = canvas.getContext('2d')
  var values = text.split('\n')
  var maxWidth = 0
  context.font = font
  for (var i = 0; i < values.length; i++) {
    var label = values[i]
    var width = context.measureText(label).width
    if (width > maxWidth) {
      maxWidth = width
    }
  }
  var height = context.measureText('e').width * values.length * 3 + 4
  var size = { w: maxWidth + px, h: height + py }
  return size
}

function createTextBillboardImage(text) {
  var canvas = document.createElement('canvas')

  var context = canvas.getContext('2d')
  var values = text.split('\n')
  var size = getTextSize(text, font, px, py)
  var w = size.w, h = size.h

  canvas.height = mono.Utils.nextPowerOfTwo(size.h)
  canvas.width = mono.Utils.nextPowerOfTwo(size.w)
  var r = 20
  var r1 = 30
  context.save()
  context.globalAlpha = 0.8
  context.fillStyle = '#FE642E'
  context.beginPath()
  context.moveTo(r, 0)
  context.lineTo(w - r, 0)
  context.arcTo(w, 0, w, r, r)
  context.lineTo(w, h - r - r1)
  context.arcTo(w, h - r1, w - r, h - r1, r)
  context.lineTo(w / 2 + r1 - 5, h - r1)
  context.lineTo(w / 2, h)
  context.lineTo(w / 2 - r1 + 5, h - r1)
  context.lineTo(r, h - r1)
  context.arcTo(0, h - r1, 0, h - r1 - r, r)
  context.lineTo(0, r)
  context.arcTo(0, 0, r, 0, r)
  context.closePath()
  context.fill()

  context.restore()
  context.fillStyle = 'white'
  context.textBaseline = 'top'
  context.font = font
  var length = context.measureText('o').width
  for (var i = 0; i < values.length; i++) {
    	context.fillText(values[i], px / 2, py / 2 + length * i * 2.5)
  }
  return canvas.toDataURL()
}

var loadShadowObject = function() {
  var floor = typeFinder.findFirst('floor')
  if (!floor) {
    return
  }
  var databox = network.getDataBox()
  var fbb = floor.getBoundingBox()
  var floorHeight = fbb.max.z - fbb.min.z
  var floorWidth = fbb.max.x - fbb.min.x

  var shadowCanvas = createShadowImage(databox, floorWidth, floorHeight, fbb)
  var shadowcube = new mono.Cube(floorWidth, 1, floorHeight)
  shadowcube.s({
    'm.transparent': true,
    'm.opacity': '0.001',
    'top.m.opacity': '0.6',
    'top.m.texture.image': shadowCanvas

  })
  var pos = floor.getPosition()
  shadowcube.p(pos.x - 40, pos.y + 3, pos.z - 30)
  databox.add(shadowcube)
}

function createShadowImage(databox, floorWidth, floorHeight, floorBoundingBox) {
  var maxValue = Math.max(2048, Math.max(floorWidth, floorHeight))
  var scale = maxValue / 2048
  var canvas = document.createElement('canvas')
  var fWidth = mono.Utils.nextPowerOfTwo(floorWidth / scale)
  var fHeight = mono.Utils.nextPowerOfTwo(floorHeight / scale)
  var scaleW = floorWidth / fWidth, scaleH = floorHeight / fHeight
  canvas['width'] = fWidth
  canvas['height'] = fHeight
  var context = canvas.getContext('2d')
  context.beginPath()
  context.rect(0, 0, fWidth, fHeight)
  // context.fillStyle = 'white';
  // context.globalAlpha = 0;
  // context.fill();
  var wall = typeFinder.findFirst('wall')
  var wbb = wall ? wall.getBoundingBox() : null
  databox.forEach(function(data) {
    var position = data.getWorldPosition()
    var rotate = data.getRotation()
    if (data.getClient('type') == 'wall' || data.getClient('type') == 'innerWall' || data.getClient('type') == 'glassWall') {
      var pathData = data.getClient('data')
      var translateX = (wbb.min.x + 20) / scaleW
      var translateY = (wbb.min.z + 20) / scaleH

      context.save()
      context.translate(-translateX, -translateY)
      context.rotate(rotate)
      context.beginPath()
      var first = true
      for (var j = 0; j < pathData.length; j++) {
        if (first) {
          context.moveTo(pathData[j][0] / scaleW, pathData[j][1] / scaleH)
          first = false
        } else {
          context.lineTo(pathData[j][0] / scaleW, pathData[j][1] / scaleH)
        }
      }
      context.lineTo(pathData[0][0] / scaleW, pathData[0][1] / scaleH)

      context.lineWidth = 30
      context.strokeStyle = '#666'
      context.shadowColor = '#000'
      context.shadowBlur = 150
      if (data.getClient('type') == 'innerWall' || data.getClient('type') == 'glassWall') {
        var translateX = (wbb.min.x + 20) / scaleW
        var translateY = (wbb.min.z + 20) / scaleH

        context.translate(-translateX, -translateY)
        context.lineWidth = 4
        context.shadowBlur = 40
      }
      context.shadowOffsetX = 0
      context.shadowOffsetY = 0
      context.stroke()
      context.stroke()

      context.restore()
    } else if (data.getClient('type') == 'column') {
      var translateX = (wbb.min.x + 20) / scaleW
      var translateY = (wbb.min.z + 20) / scaleH

      context.save()
      context.translate(-translateX, -translateY)
      var box = data.getBoundingBox()
      var size = box.size()
      var width = (size.x || 60) / scale
      var height = (size.y || 200) / scale
      var depth = (size.z || 80) / scale
      var width = width * 0.99
      var lineWidth = depth * 0.99

      context.beginPath()
      context.moveTo(position.x / scaleW - width / 2, position.z / scaleH)
      context.lineTo(position.x / scaleW + width / 2, position.z / scaleH)

      context.lineWidth = lineWidth
      context.strokeStyle = '#666'
      context.shadowColor = '#000'
      context.shadowBlur = 150
      context.shadowOffsetX = 0
      context.shadowOffsetY = 0
      context.stroke()
      context.stroke()
      context.stroke()

      context.restore()
    }
  })
  // console.log(window.open(canvas.toDataURL("image/png")),'aa.png');
  return canvas
}
