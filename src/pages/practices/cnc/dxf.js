+(function(root, undefined) {
  'use strict'

  var dxf = root.dxf = {}

  var ext = function(dest, src) {
      for (var p in src) {
        dest[p] = src[p]
      }
    },
    toInt = function(value) {
      return parseInt(value)
    },
    toBool = function(value) {
      return value === 'true'
    },
    toReal = function(value) {
      return parseFloat(value)
    },
    M_PI = Math.PI

  var colors = [
    [0, 0, 0], // unused
    [1, 0, 0], // 1
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1],
    [1, 0, 1],
    [1, 1, 1], // black or white
    [0.5, 0.5, 0.5],
    [0.75, 0.75, 0.75],
    [1, 0, 0], // 10
    [1, 0.5, 0.5],
    [0.65, 0, 0],
    [0.65, 0.325, 0.325],
    [0.5, 0, 0],
    [0.5, 0.25, 0.25],
    [0.3, 0, 0],
    [0.3, 0.15, 0.15],
    [0.15, 0, 0],
    [0.15, 0.075, 0.075],
    [1, 0.25, 0], // 20
    [1, 0.625, 0.5],
    [0.65, 0.1625, 0],
    [0.65, 0.4063, 0.325],
    [0.5, 0.125, 0],
    [0.5, 0.3125, 0.25],
    [0.3, 0.075, 0],
    [0.3, 0.1875, 0.15],
    [0.15, 0.0375, 0],
    [0.15, 0.0938, 0.075],
    [1, 0.5, 0], // 30
    [1, 0.75, 0.5],
    [0.65, 0.325, 0],
    [0.65, 0.4875, 0.325],
    [0.5, 0.25, 0],
    [0.5, 0.375, 0.25],
    [0.3, 0.15, 0],
    [0.3, 0.225, 0.15],
    [0.15, 0.075, 0],
    [0.15, 0.1125, 0.075],
    [1, 0.75, 0], // 40
    [1, 0.875, 0.5],
    [0.65, 0.4875, 0],
    [0.65, 0.5688, 0.325],
    [0.5, 0.375, 0],
    [0.5, 0.4375, 0.25],
    [0.3, 0.225, 0],
    [0.3, 0.2625, 0.15],
    [0.15, 0.1125, 0],
    [0.15, 0.1313, 0.075],
    [1, 1, 0], // 50
    [1, 1, 0.5],
    [0.65, 0.65, 0],
    [0.65, 0.65, 0.325],
    [0.5, 0.5, 0],
    [0.5, 0.5, 0.25],
    [0.3, 0.3, 0],
    [0.3, 0.3, 0.15],
    [0.15, 0.15, 0],
    [0.15, 0.15, 0.075],
    [0.75, 1, 0], // 60
    [0.875, 1, 0.5],
    [0.4875, 0.65, 0],
    [0.5688, 0.65, 0.325],
    [0.375, 0.5, 0],
    [0.4375, 0.5, 0.25],
    [0.225, 0.3, 0],
    [0.2625, 0.3, 0.15],
    [0.1125, 0.15, 0],
    [0.1313, 0.15, 0.075],
    [0.5, 1, 0], // 70
    [0.75, 1, 0.5],
    [0.325, 0.65, 0],
    [0.4875, 0.65, 0.325],
    [0.25, 0.5, 0],
    [0.375, 0.5, 0.25],
    [0.15, 0.3, 0],
    [0.225, 0.3, 0.15],
    [0.075, 0.15, 0],
    [0.1125, 0.15, 0.075],
    [0.25, 1, 0], // 80
    [0.625, 1, 0.5],
    [0.1625, 0.65, 0],
    [0.4063, 0.65, 0.325],
    [0.125, 0.5, 0],
    [0.3125, 0.5, 0.25],
    [0.075, 0.3, 0],
    [0.1875, 0.3, 0.15],
    [0.0375, 0.15, 0],
    [0.0938, 0.15, 0.075],
    [0, 1, 0], // 90
    [0.5, 1, 0.5],
    [0, 0.65, 0],
    [0.325, 0.65, 0.325],
    [0, 0.5, 0],
    [0.25, 0.5, 0.25],
    [0, 0.3, 0],
    [0.15, 0.3, 0.15],
    [0, 0.15, 0],
    [0.075, 0.15, 0.075],
    [0, 1, 0.25], // 100
    [0.5, 1, 0.625],
    [0, 0.65, 0.1625],
    [0.325, 0.65, 0.4063],
    [0, 0.5, 0.125],
    [0.25, 0.5, 0.3125],
    [0, 0.3, 0.075],
    [0.15, 0.3, 0.1875],
    [0, 0.15, 0.0375],
    [0.075, 0.15, 0.0938],
    [0, 1, 0.5], // 110
    [0.5, 1, 0.75],
    [0, 0.65, 0.325],
    [0.325, 0.65, 0.4875],
    [0, 0.5, 0.25],
    [0.25, 0.5, 0.375],
    [0, 0.3, 0.15],
    [0.15, 0.3, 0.225],
    [0, 0.15, 0.075],
    [0.075, 0.15, 0.1125],
    [0, 1, 0.75], // 120
    [0.5, 1, 0.875],
    [0, 0.65, 0.4875],
    [0.325, 0.65, 0.5688],
    [0, 0.5, 0.375],
    [0.25, 0.5, 0.4375],
    [0, 0.3, 0.225],
    [0.15, 0.3, 0.2625],
    [0, 0.15, 0.1125],
    [0.075, 0.15, 0.1313],
    [0, 1, 1], // 130
    [0.5, 1, 1],
    [0, 0.65, 0.65],
    [0.325, 0.65, 0.65],
    [0, 0.5, 0.5],
    [0.25, 0.5, 0.5],
    [0, 0.3, 0.3],
    [0.15, 0.3, 0.3],
    [0, 0.15, 0.15],
    [0.075, 0.15, 0.15],
    [0, 0.75, 1], // 140
    [0.5, 0.875, 1],
    [0, 0.4875, 0.65],
    [0.325, 0.5688, 0.65],
    [0, 0.375, 0.5],
    [0.25, 0.4375, 0.5],
    [0, 0.225, 0.3],
    [0.15, 0.2625, 0.3],
    [0, 0.1125, 0.15],
    [0.075, 0.1313, 0.15],
    [0, 0.5, 1], // 150
    [0.5, 0.75, 1],
    [0, 0.325, 0.65],
    [0.325, 0.4875, 0.65],
    [0, 0.25, 0.5],
    [0.25, 0.375, 0.5],
    [0, 0.15, 0.3],
    [0.15, 0.225, 0.3],
    [0, 0.075, 0.15],
    [0.075, 0.1125, 0.15],
    [0, 0.25, 1], // 160
    [0.5, 0.625, 1],
    [0, 0.1625, 0.65],
    [0.325, 0.4063, 0.65],
    [0, 0.125, 0.5],
    [0.25, 0.3125, 0.5],
    [0, 0.075, 0.3],
    [0.15, 0.1875, 0.3],
    [0, 0.0375, 0.15],
    [0.075, 0.0938, 0.15],
    [0, 0, 1], // 170
    [0.5, 0.5, 1],
    [0, 0, 0.65],
    [0.325, 0.325, 0.65],
    [0, 0, 0.5],
    [0.25, 0.25, 0.5],
    [0, 0, 0.3],
    [0.15, 0.15, 0.3],
    [0, 0, 0.15],
    [0.075, 0.075, 0.15],
    [0.25, 0, 1], // 180
    [0.625, 0.5, 1],
    [0.1625, 0, 0.65],
    [0.4063, 0.325, 0.65],
    [0.125, 0, 0.5],
    [0.3125, 0.25, 0.5],
    [0.075, 0, 0.3],
    [0.1875, 0.15, 0.3],
    [0.0375, 0, 0.15],
    [0.0938, 0.075, 0.15],
    [0.5, 0, 1], // 190
    [0.75, 0.5, 1],
    [0.325, 0, 0.65],
    [0.4875, 0.325, 0.65],
    [0.25, 0, 0.5],
    [0.375, 0.25, 0.5],
    [0.15, 0, 0.3],
    [0.225, 0.15, 0.3],
    [0.075, 0, 0.15],
    [0.1125, 0.075, 0.15],
    [0.75, 0, 1], // 200
    [0.875, 0.5, 1],
    [0.4875, 0, 0.65],
    [0.5688, 0.325, 0.65],
    [0.375, 0, 0.5],
    [0.4375, 0.25, 0.5],
    [0.225, 0, 0.3],
    [0.2625, 0.15, 0.3],
    [0.1125, 0, 0.15],
    [0.1313, 0.075, 0.15],
    [1, 0, 1], // 210
    [1, 0.5, 1],
    [0.65, 0, 0.65],
    [0.65, 0.325, 0.65],
    [0.5, 0, 0.5],
    [0.5, 0.25, 0.5],
    [0.3, 0, 0.3],
    [0.3, 0.15, 0.3],
    [0.15, 0, 0.15],
    [0.15, 0.075, 0.15],
    [1, 0, 0.75], // 220
    [1, 0.5, 0.875],
    [0.65, 0, 0.4875],
    [0.65, 0.325, 0.5688],
    [0.5, 0, 0.375],
    [0.5, 0.25, 0.4375],
    [0.3, 0, 0.225],
    [0.3, 0.15, 0.2625],
    [0.15, 0, 0.1125],
    [0.15, 0.075, 0.1313],
    [1, 0, 0.5], // 230
    [1, 0.5, 0.75],
    [0.65, 0, 0.325],
    [0.65, 0.325, 0.4875],
    [0.5, 0, 0.25],
    [0.5, 0.25, 0.375],
    [0.3, 0, 0.15],
    [0.3, 0.15, 0.225],
    [0.15, 0, 0.075],
    [0.15, 0.075, 0.1125],
    [1, 0, 0.25], // 240
    [1, 0.5, 0.625],
    [0.65, 0, 0.1625],
    [0.65, 0.325, 0.4063],
    [0.5, 0, 0.125],
    [0.5, 0.25, 0.3125],
    [0.3, 0, 0.075],
    [0.3, 0.15, 0.1875],
    [0.15, 0, 0.0375],
    [0.15, 0.075, 0.0938],
    [0.33, 0.33, 0.33], // 250
    [0.464, 0.464, 0.464],
    [0.598, 0.598, 0.598],
    [0.732, 0.732, 0.732],
    [0.866, 0.866, 0.866],
    [1, 1, 1]
  ]
  dxf.getColor = function(value) {
    return colors[value]
  }
  colors.forEach(function(color, i) {
    colors[i] = 'rgb(' + Math.floor(color[0] * 255) + ',' + Math.floor(color[1] * 255) + ',' + Math.floor(color[2] * 255) + ')'
  })

  var Attributes = dxf.Attributes = function(layer, color, color24, width, lineType, handle) {
    this.layer = layer || ''
    this.color = color || 0
    this.color24 = color24 == null ? -1 : color24
    this.width = width || 0
    this.lineType = lineType || 'BYLAYER'
    this.handle = handle == null ? -1 : handle
  }

  var Dxf = dxf.Dxf = function() {
    var self = this

    self.vertices = null
    self.maxVertices = 0
    self.vertexIndex = 0

    // ...same as integer
    self.groupCode = 0
    // Only the useful part of the group value
    self.groupValue = ''
    // Current entity type
    self.currentObjectType = ''
    // Stores the group codes
    self.values = {}
    // Attributes of the current entity (layer, color, width, line type)
    self.attrib = null

    var sections = self.sections = {
      headers: {},
      tables: {
        layers: {}
      },
      blocks: {},
      entities: []
    }

    self.handler = {
      $: self.addSetting,
      LAYER: self.addLayer,
      BLOCK: self.addBlock,
      ENDBLK: self.endBlock,
      LINE: self.addLine,
      POLYLINE: self.addPolyline,
      LWPOLYLINE: self.addPolyline,
      VERTEX: self.addVertex,
      ARC: self.addArc,
      ELLIPSE: self.addEllipse,
      CIRCLE: self.addCircle,
      INSERT: self.addInsert,
      TEXT: self.addText,
      MTEXT: self.addMText,
      ATTRIB: self.addAttrib,
      SEQEND: self.endSequence
    }
  }

  ext(Dxf.prototype, {
    hasValue: function(code) {
      return this.values.hasOwnProperty(code)
    },
    getIntValue: function(code, def) {
      if (!this.hasValue(code)) {
        return def
      }
      return toInt(this.values[code])
    },
    getStringValue: function(code, def) {
      if (!this.hasValue(code)) {
        return def
      }
      return this.values[code]
    },
    getRealValue: function(code, def) {
      if (!this.hasValue(code)) {
        return def
      }
      return toReal(this.values[code])
    },
    parse: function(text) {
      var self = this

      self.lines = text.split('\n')
      self.lineCount = self.lines.length
      self.index = 0
      self.currentObjectType = ''

      while (self.readDxfGroups()) { }
    },
    readDxfGroups: function() {
      var self = this,
        index = self.index,
        lineCount = self.lineCount,
        lines = self.lines,
        groupCode, groupValue

      if (index > lineCount - 2) {
        return false
      }
      groupCode = lines[index].trim()
      groupValue = lines[index + 1].trim()
      self.index += 2
      if (!groupCode) {
        return false
      }
      this.groupCode = toInt(groupCode)
      this.groupValue = groupValue

      this.processDXFGroup()

      return self.index < self.lineCount - 1
    },
    processDXFGroup: function() {
      var self = this,
        groupCode = self.groupCode,
        groupValue = self.groupValue

        // Indicates start of new entity or variable:
      if (groupCode === 0 || groupCode === 9) {
        // If new entity is encountered, the last one is complete.
        // Prepare default attributes for next entity:
        var layer = self.getStringValue(8, '0'),
          width
        // Compatibility with qcad1:
        if (self.hasValue(39) && !self.hasValue(370)) {
          width = self.getIntValue(39, -1)
        }
        // since autocad 2002:
        else if (self.hasValue(370)) {
          width = self.getIntValue(370, -1)
        }
        // default to BYLAYER:
        else {
          width = -1
        }

        var color = self.getIntValue(62, 256),
          color24 = self.getIntValue(420, -1),
          handle = self.getIntValue(5, -1),
          linetype = self.getStringValue(6, 'BYLAYER')

        self.attrib = new Attributes(layer, color, color24, width, linetype, handle)

        var handler = self.handler[self.currentObjectType]
        handler && handler.call(self)

        self.values = {}

        // Read DXF variable:
        if (groupValue[0] === '$') {
          self.currentObjectType = '$'
          self.settingKey = groupValue
        } else {
          self.currentObjectType = groupValue
        }
      } else {
        var handled = false

        if (self.currentObjectType === 'MTEXT') {
          handled = self.handleMTextData()
        } else if (self.currentObjectType === 'LWPOLYLINE') {
          handled = self.handleLWPolylineData()
        }

        if (!handled) {
          self.values[groupCode] = groupValue
        }
      }
    },
    addSetting: function() {
      var self = this,
        settingKey = self.settingKey,
        headers = self.sections.headers,
        values = self.values,
        c = toInt(Object.keys(values)[0])

      if (c >= 0 && c <= 9) {
        headers[settingKey] = values[c]
      } else if (c >= 10 && c <= 39) {
        if (c === 10) {
          headers[settingKey] = {
            x: self.getRealValue(c, 0.0),
            y: self.getRealValue(c + 10, 0.0),
            z: self.getRealValue(c + 20, 0.0)
          }
        }
      } else if (c >= 40 && c <= 59) {
        headers[settingKey] = self.getRealValue(c, 0.0)
      } else if (c >= 60 && c <= 99) {
        headers[settingKey] = self.getIntValue(c, 0)
      } else if (c >= 0) {
        headers[settingKey] = values[c]
      }
    },
    addLayer: function() {
      // correct some invalid attributes for layers:
      var self = this,
        attrib = self.attrib
      if (attrib.color === 256 || attrib.color === 0) {
        attrib.color = 7
      }
      if (attrib.width < 0) {
        attrib.width = 1
      }

      var lineType = attrib.lineType
      lineType = lineType.toUpperCase()
      if (lineType === 'BYLAYER' || lineType === 'BYBLOCK') {
        attrib.lineType = 'CONTINUOUS'
      }

      // add layer
      var name = self.getStringValue(2, '')
      if (!name) {
        return
      }
      var ld = new LayerData(name, self.getIntValue(70, 0))
      ld.attrib = attrib
      self.sections.tables.layers[name] = ld
    },
    addBlock: function() {
      var self = this,
        name = self.getStringValue(2, '')
      if (!name) {
        return
      }
      self.block = new BlockData(
        name,
        self.getIntValue(70, 0),
        self.getRealValue(10, 0.0),
        self.getRealValue(20, 0.0),
        self.getRealValue(30, 0.0)
      )
    },
    endBlock: function() {
      var self = this
      self.sections.blocks[self.block.name] = self.block
      self.block = null
    },
    addLine: function() {
      var self = this
      self.addEntity(new LineData(
        self.getRealValue(10, 0.0),
        self.getRealValue(20, 0.0),
        self.getRealValue(30, 0.0),
        self.getRealValue(11, 0.0),
        self.getRealValue(21, 0.0),
        self.getRealValue(31, 0.0))
      )
    },
    addEntity: function(entity) {
      var self = this
      entity.attrib = self.attrib;
      (self.block || self.sections).entities.push(entity)
    },
    addPolyline: function() {
      var self = this,
        vertices = self.vertices,
        i
      if (self.polyline) {
        throw 'polyline'
      }
      self.polyline = new PolylineData(
        self.maxVertices,
        self.getIntValue(71, 0),
        self.getIntValue(72, 0),
        self.getIntValue(70, 0)
      )

      self.maxVertices = Math.min(self.maxVertices, self.vertexIndex + 1)

      if (self.currentObjectType === 'LWPOLYLINE') {
        for (i = 0; i < self.maxVertices; i++) {
          self.polyline.points.push(new VertexData(
            vertices[i * 4],
            vertices[i * 4 + 1],
            vertices[i * 4 + 2],
            vertices[i * 4 + 3])
          )
        }
        self.vertices = null
        self.addEntity(self.polyline)
        self.polyline = null
      }
    },
    addVertex: function() {
      var self = this
      // vertex defines a face of the mesh if its vertex flags group has the
      // 128 bit set but not the 64 bit. 10, 20, 30 are irrelevant and set to
      // 0 in this case
      if ((self.getIntValue(70, 0) & 128) && !(self.getIntValue(70, 0) & 64)) {
        return
      }
      self.polyline.points.push(new VertexData(
        self.getRealValue(10, 0.0),
        self.getRealValue(20, 0.0),
        self.getRealValue(30, 0.0),
        self.getRealValue(42, 0.0))
      )
    },
    addArc: function() {
      var self = this
      self.addEntity(new ArcData(
        self.getRealValue(10, 0.0),
        self.getRealValue(20, 0.0),
        self.getRealValue(30, 0.0),
        self.getRealValue(40, 0.0),
        self.getRealValue(50, 0.0),
        self.getRealValue(51, 0.0))
      )
    },
    addCircle: function() {
      var self = this
      self.addEntity(new CircleData(
        self.getRealValue(10, 0.0),
        self.getRealValue(20, 0.0),
        self.getRealValue(30, 0.0),
        self.getRealValue(40, 0.0))
      )
    },
    addEllipse: function() {
      var self = this
      self.addEntity(new EllipseData(
        self.getRealValue(10, 0.0),
        self.getRealValue(20, 0.0),
        self.getRealValue(30, 0.0),
        self.getRealValue(11, 0.0),
        self.getRealValue(21, 0.0),
        self.getRealValue(31, 0.0),
        self.getRealValue(40, 1.0),
        self.getRealValue(41, 0.0),
        self.getRealValue(42, 2 * M_PI)
      ))
    },
    addInsert: function() {
      var self = this,
        name = self.getStringValue(2, '')
      if (!name) {
        return
      }
      self.addEntity(new InsertData(
        name,
        // insertion point
        self.getRealValue(10, 0.0),
        self.getRealValue(20, 0.0),
        self.getRealValue(30, 0.0),
        // scale:
        self.getRealValue(41, 1.0),
        self.getRealValue(42, 1.0),
        self.getRealValue(43, 1.0),
        // angle (deg):
        self.getRealValue(50, 0.0),
        // cols / rows:
        self.getIntValue(70, 1),
        self.getIntValue(71, 1),
        // spacing:
        self.getRealValue(44, 0.0),
        self.getRealValue(45, 0.0)
      ))
    },
    addMText: function() {
      var self = this,
        angle = 0.0,
        x, y

      if (self.hasValue(50)) {
        angle = (self.getRealValue(50, 0.0) * 2 * M_PI) / 360.0
      } else if (self.hasValue(11) && self.hasValue(21)) {
        x = self.getRealValue(11, 0.0)
        y = self.getRealValue(21, 0.0)

        if (Math.abs(x) < 1.0e-6) {
          if (y > 0.0) {
            angle = M_PI / 2.0
          } else {
            angle = M_PI / 2.0 * 3.0
          }
        } else {
          angle = Math.atan(y / x)
        }
      }
      self.addEntity(new MTextData(
        // insertion point
        self.getRealValue(10, 0.0),
        self.getRealValue(20, 0.0),
        self.getRealValue(30, 0.0),
        // X direction vector
        self.getRealValue(11, 0.0),
        self.getRealValue(21, 0.0),
        self.getRealValue(31, 0.0),
        // height
        self.getRealValue(40, 2.5),
        // width
        self.getRealValue(41, 0.0),
        // attachment point
        self.getIntValue(71, 1),
        // drawing direction
        self.getIntValue(72, 1),
        // line spacing style
        self.getIntValue(73, 1),
        // line spacing factor
        self.getRealValue(44, 1.0),
        // text
        self.getStringValue(1, ''),
        // style
        self.getStringValue(7, ''),
        // angle
        angle)
      )
    },
    handleMTextData: function() {
      var self = this,
        entities, entity
        // Special handling of text chunks for MTEXT entities:
      if (self.groupCode === 3) {
        entities = (self.block || self.sections).entities
        entity = entities[entities.length]
        if (entity instanceof MTextData) {
          entity.text = entity.text ? (entity.text + self.groupValue) : self.groupValue
        }
        return true
      }

      return false
    },
    handleLWPolylineData: function() {
      var self = this,
        groupCode = self.groupCode,
        groupValue = self.groupValue,
        maxVertices = self.maxVertices,
        vertexIndex = self.vertexIndex,
        vertices = self.vertices,
        i

        // Allocate LWPolyline vertices (group code 90):
      if (groupCode === 90) {
        maxVertices = self.maxVertices = toInt(groupValue)
        if (maxVertices > 0) {
          vertices = self.vertices = []
          for (i = 0; i < maxVertices; ++i) {
            vertices[i * 4] = 0.0
            vertices[i * 4 + 1] = 0.0
            vertices[i * 4 + 2] = 0.0
            vertices[i * 4 + 3] = 0.0
          }
        }
        self.vertexIndex = -1
        return true
      }

      // Process LWPolylines vertices (group codes 10/20/30/42):
      else if (groupCode === 10 || groupCode === 20 ||
                 groupCode === 30 || groupCode === 42) {
        if (vertexIndex < maxVertices - 1 && groupCode === 10) {
          vertexIndex = ++self.vertexIndex
        }

        if (groupCode <= 30) {
          if (vertexIndex >= 0 && vertexIndex < maxVertices) {
            vertices[4 * vertexIndex + (Math.floor(groupCode / 10) - 1)] = toReal(groupValue)
          }
        } else if (groupCode === 42 && vertexIndex < maxVertices) {
          vertices[4 * vertexIndex + 3] = toReal(groupValue)
        }
        return true
      }
      return false
    },
    addText: function() {
      var self = this
      self.addEntity(new TextData(
        // insertion point
        self.getRealValue(10, 0.0),
        self.getRealValue(20, 0.0),
        self.getRealValue(30, 0.0),
        // alignment point
        self.getRealValue(11, 0.0),
        self.getRealValue(21, 0.0),
        self.getRealValue(31, 0.0),
        // height
        self.getRealValue(40, 2.5),
        // x scale
        self.getRealValue(41, 1.0),
        // generation flags
        self.getIntValue(71, 0),
        // h just
        self.getIntValue(72, 0),
        // v just
        self.getIntValue(73, 0),
        // text
        self.getStringValue(1, ''),
        // style
        self.getStringValue(7, ''),
        // angle
        self.getRealValue(50, 0.0) * 2 * M_PI / 360.0
      ))
    },
    addAttrib: function() {
      var self = this
      self.addEntity(new TextData(
        // insertion point
        self.getRealValue(10, 0.0),
        self.getRealValue(20, 0.0),
        self.getRealValue(30, 0.0),
        // alignment point
        self.getRealValue(11, 0.0),
        self.getRealValue(21, 0.0),
        self.getRealValue(31, 0.0),
        // height
        self.getRealValue(40, 2.5),
        // x scale
        self.getRealValue(41, 1.0),
        // generation flags
        self.getIntValue(71, 0),
        // h just
        self.getIntValue(72, 0),
        // v just
        self.getIntValue(74, 0),
        // text
        self.getStringValue(1, ''),
        // style
        self.getStringValue(7, ''),
        // angle
        self.getRealValue(50, 0.0) * 2 * M_PI / 360.0
      ))
    },
    endSequence: function() {
      var self = this
      if (self.polyline) {
        self.addEntity(self.polyline)
        self.polyline = null
      }
    }
  })

  var LayerData = dxf.LayerData = function(name, flags) {
    /** Layer name. */
    this.name = name
    /** Layer flags. (1 = frozen, 2 = frozen by default, 4 = locked) */
    this.flags = flags
  }

  var BlockData = dxf.BlockData = function(name, flags, bpx, bpy, bpz) {
    /** Block name. */
    this.name = name
    /** Block flags. (not used currently) */
    this.flags = flags
    /** X Coordinate of base point. */
    this.bpx = bpx
    /** Y Coordinate of base point. */
    this.bpy = bpy
    /** Z Coordinate of base point. */
    this.bpz = bpz
    this.entities = []
  }

  var LineData = dxf.LineData = function(x1, y1, z1, x2, y2, z2) {
    var self = this

    /*! X Start coordinate of the point. */
    self.x1 = x1
    /*! Y Start coordinate of the point. */
    self.y1 = y1
    /*! Z Start coordinate of the point. */
    self.z1 = z1

    /*! X End coordinate of the point. */
    self.x2 = x2
    /*! Y End coordinate of the point. */
    self.y2 = y2
    /*! Z End coordinate of the point. */
    self.z2 = z2
  }

  var ArcData = dxf.ArcData = function(cx, cy, cz, radius, angle1, angle2) {
    var self = this

    /*! X Coordinate of center point. */
    self.cx = cx
    /*! Y Coordinate of center point. */
    self.cy = cy
    /*! Z Coordinate of center point. */
    self.cz = cz

    /*! Radius of arc. */
    self.radius = radius
    /*! Startangle of arc in degrees. */
    self.angle1 = angle1
    /*! Endangle of arc in degrees. */
    self.angle2 = angle2
  }

  var CircleData = dxf.CircleData = function(cx, cy, cz, radius) {
    var self = this

    /*! X Coordinate of center point. */
    self.cx = cx
    /*! Y Coordinate of center point. */
    self.cy = cy
    /*! Z Coordinate of center point. */
    self.cz = cz

    /*! Radius of arc. */
    self.radius = radius
  }

  var PolylineData = dxf.PolylineData = function(number, m, n, flags) {
    var self = this

    /*! Number of vertices in this polyline. */
    self.number = number
    /*! Number of vertices in m direction if polyline is a polygon mesh. */
    self.m = m
    /*! Number of vertices in n direction if polyline is a polygon mesh. */
    self.n = n
    /*! Flags */
    self.flags = flags
    self.points = []
  }

  var VertexData = dxf.VertexData = function(x, y, z, bulge) {
    var self = this

    /*! X Coordinate of the vertex. */
    self.x = x
    /*! Y Coordinate of the vertex. */
    self.y = y
    /*! Z Coordinate of the vertex. */
    self.z = z
    /*! Bulge of vertex.
     * (The tangent of 1/4 of the arc angle or 0 for lines) */
    self.bulge = bulge
  }

  var EllipseData = dxf.EllipseData = function(cx, cy, cz, mx, my, mz, ratio, angle1, angle2) {
    var self = this

    /*! X Coordinate of center point. */
    self.cx = cx
    /*! Y Coordinate of center point. */
    self.cy = cy
    /*! Z Coordinate of center point. */
    self.cz = cz

    /*! X coordinate of the endpoint of the major axis. */
    self.mx = mx
    /*! Y coordinate of the endpoint of the major axis. */
    self.my = my
    /*! Z coordinate of the endpoint of the major axis. */
    self.mz = mz

    /*! Ratio of minor axis to major axis.. */
    self.ratio = ratio
    /*! Startangle of ellipse in rad. */
    self.angle1 = angle1
    /*! Endangle of ellipse in rad. */
    self.angle2 = angle2
  }

  var InsertData = dxf.InsertData = function(name, ipx, ipy, ipz, sx, sy, sz, angle, cols, rows, colSp, rowSp) {
    var self = this

    /*! Name of the referred block. */
    self.name = name
    /*! X Coordinate of insertion point. */
    self.ipx = ipx || 0
    /*! Y Coordinate of insertion point. */
    self.ipy = ipy || 0
    /*! Z Coordinate of insertion point. */
    self.ipz = ipz || 0
    /*! X Scale factor. */
    self.sx = sx || 1
    /*! Y Scale factor. */
    self.sy = sy || 1
    /*! Z Scale factor. */
    self.sz = sz || 1
    /*! Rotation angle in degrees. */
    self.angle = angle || 0
    /*! Number of colums if we insert an array of the block or 1. */
    self.cols = cols || 0
    /*! Number of rows if we insert an array of the block or 1. */
    self.rows = rows || 0
    /*! Values for the spacing between cols. */
    self.colSp = colSp || 0
    /*! Values for the spacing between rows. */
    self.rowSp = rowSp || 0
  }

  var MTextData = dxf.MTextData = function(ipx, ipy, ipz, dirx, diry, dirz, height, width,
    attachmentPoint, drawingDirection, lineSpacingStyle, lineSpacingFactor, text, style, angle) {
    var self = this

    /*! X Coordinate of insertion point. */
    self.ipx = ipx
    /*! Y Coordinate of insertion point. */
    self.ipy = ipy
    /*! Z Coordinate of insertion point. */
    self.ipz = ipz
    /*! X Coordinate of X direction vector. */
    self.dirx = dirx
    /*! Y Coordinate of X direction vector. */
    self.diry = diry
    /*! Z Coordinate of X direction vector. */
    self.dirz = dirx
    /*! Text height */
    self.height = height
    /*! Width of the text box. */
    self.width = width
    /**
     * Attachment point.
     *
     * 1 = Top left, 2 = Top center, 3 = Top right,
     * 4 = Middle left, 5 = Middle center, 6 = Middle right,
     * 7 = Bottom left, 8 = Bottom center, 9 = Bottom right
     */
    self.attachmentPoint = attachmentPoint
    /**
     * Drawing direction.
     *
     * 1 = left to right, 3 = top to bottom, 5 = by style
     */
    self.drawingDirection = drawingDirection
    /**
     * Line spacing style.
     *
     * 1 = at least, 2 = exact
     */
    self.lineSpacingStyle = lineSpacingStyle
    /**
     * Line spacing factor. 0.25 .. 4.0
     */
    self.lineSpacingFactor = lineSpacingFactor
    /*! Text string. */
    self.text = text
    /*! Style string. */
    self.style = style
    /*! Rotation angle. */
    self.angle = angle
  }

  var TextData = dxf.TextData = function(ipx, ipy, ipz, apx, apy, apz, height, xScaleFactor,
    textGenerationFlags, hJustification, vJustification, text, style, angle) {
    var self = this

    /*! X Coordinate of insertion point. */
    self.ipx = ipx
    /*! Y Coordinate of insertion point. */
    self.ipy = ipy
    /*! Z Coordinate of insertion point. */
    self.ipz = ipz

    /*! X Coordinate of alignment point. */
    self.apx = apx
    /*! Y Coordinate of alignment point. */
    self.apy = apy
    /*! Z Coordinate of alignment point. */
    self.apz = apz

    /*! Text height */
    self.height = height
    /*! Relative X scale factor. */
    self.xScaleFactor = xScaleFactor
    /*! 0 = default, 2 = Backwards, 4 = Upside down */
    self.textGenerationFlags = textGenerationFlags
    /**
     * Horizontal justification.
     *
     * 0 = Left (default), 1 = Center, 2 = Right,
     * 3 = Aligned, 4 = Middle, 5 = Fit
     * For 3, 4, 5 the vertical alignment has to be 0.
     */
    self.hJustification = hJustification
    /**
     * Vertical justification.
     *
     * 0 = Baseline (default), 1 = Bottom, 2 = Middle, 3= Top
     */
    self.vJustification = vJustification
    /*! Text string. */
    self.text = text
    /*! Style (font). */
    self.style = style
    /*! Rotation angle of dimension text away from default orientation. */
    self.angle = angle
  }
}(this))
