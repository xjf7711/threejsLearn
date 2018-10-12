!(function (a, b) {
  function c(a, b, c) {
    var f = 220,
      g = 40
    if (a <= 0 || b <= 0) return void alert('数据行列异常！');
    (g = 24 * a), (f = 100 * b)
    var h = new twaver.HTMLNode({
        size: {
          width: 10,
          height: 10
        },
        styles: {
          'body.type': 'vector',
          'vector.fill': !0,
          'vector.fill.color': 'green',
          'attachment.htmllabel.hyperlink': !0,
          'label.position': 'topright.bottomright',
          'label.yoffset': 0,
          'label.fill': !0,
          'label.fill.color': 'rgba(0,0,0,0.1)'
        },
        clients: {
          rows: a,
          cols: b
        },
        toolTip: c
      }),
      i = document.createElement('div')
    i.keepDefault = !0
    for (var j = d(f, g), k = 0; a > k; k++) {
      var l = document.createElement('tr')
      j.appendChild(l)
      for (var m = 0; b > m; m++) {
        if (k === 0) var n = e('参数' + (m + 1))
        else var n = e(parseInt(200 * Math.random()))
        l.appendChild(n)
      }
    }
    return i.appendChild(j), h.setName(i), h
  }

  function d(a, b) {
    var c = document.createElement('table')
    return (
      (c.cellpadding = '0'),
      (c.cellspacing = '0'),
      (c.style.width = a + 'px'),
      (c.style.height = b + 'px'),
      (c.style.borderCollapse = 'collapse'),
      (c.style.borderSpacing = '0'),
      (c.style.borderWidth = '1px'),
      (c.style.borderColor = '#d6d6d6'),
      (c.style.borderStyle = 'solid'),
      c
    )
  }

  function e(a) {
    var b = document.createElement('td')
    return (
      (b.innerText = a),
      (b.style.borderWidth = '1px'),
      (b.style.borderColor = '#d6d6d6'),
      (b.style.borderStyle = 'solid'),
      (b.style.width = '80px'),
      (b.style.height = '24px'),
      (b.style.lineHeight = '24px'),
      (b.style.textAlign = 'center'),
      (b.style.color = '#333'),
      (b.style.backgroundColor = '#f2ffff'),
      (b.id = 'clitd-' + new Date().getTime()),
      (b.onclick = function () {
        alert('TODO ' + this.id)
      }),
      b
    )
  }

  function f() {
    twaver.Util.registerImage('currentDirection', {
        w: 32,
        h: 24,
        lineWidth: "<%= getClient('currentDirection.lineWidth')%>",
        lineColor: "<%= getClient('currentDirection.lineColor')%>",
        origin: {
          x: 0,
          y: 0
        },
        v: [{
            shape: 'line',
            p1: {
              x: 30,
              y: 12
            },
            p2: {
              x: 22,
              y: 6
            }
          },
          {
            shape: 'line',
            p1: {
              x: 0,
              y: 12
            },
            p2: {
              x: 30,
              y: 12
            }
          }
        ]
      }),
      twaver.Util.registerImage('singleSwitchHT', {
        w: 32,
        h: 24,
        lineWidth: '<%= getClient("switch.lineWidth") || 2 %>',
        lineColor: '<%= getClient("switch.lineColor") || "#658DC1"%>',
        origin: {
          x: 0,
          y: 0
        },
        v: [{
            shape: 'line',
            p1: {
              x: 4,
              y: 11
            },
            p2: {
              x: 30,
              y: 1
            },
            state: ['开启']
          },
          {
            shape: 'line',
            p1: {
              x: 4,
              y: 11
            },
            p2: {
              x: 31,
              y: 9
            },
            state: ['闭合']
          },
          {
            shape: 'circle',
            cx: 2.5,
            cy: 12,
            r: 2
          },
          {
            shape: 'circle',
            cx: 28,
            cy: 12,
            r: 2
          }
        ]
      }),
      twaver.Util.registerImage('singleSwitchHB', {
        w: 32,
        h: 24,
        lineWidth: '<%= getClient("switch.lineWidth") || 2 %>',
        lineColor: '<%= getClient("switch.lineColor") || "#658DC1"%>',
        origin: {
          x: 0,
          y: 0
        },
        v: [{
            shape: 'line',
            p1: {
              x: 4,
              y: 13
            },
            p2: {
              x: 30,
              y: 23
            },
            state: ['开启']
          },
          {
            shape: 'line',
            p1: {
              x: 4,
              y: 13
            },
            p2: {
              x: 31,
              y: 15
            },
            state: ['闭合']
          },
          {
            shape: 'circle',
            cx: 2.5,
            cy: 12,
            r: 2
          },
          {
            shape: 'circle',
            cx: 28,
            cy: 12,
            r: 2
          }
        ]
      }),
      twaver.Util.registerImage('singleSwitchVR', {
        w: 24,
        h: 32,
        lineWidth: '<%= getClient("switch.lineWidth") || 2 %>',
        lineColor: '<%= getClient("switch.lineColor") || "#658DC1"%>',
        origin: {
          x: 0,
          y: 0
        },
        v: [{
            shape: 'line',
            p1: {
              x: 13,
              y: 26
            },
            p2: {
              x: 24,
              y: 1
            },
            state: ['开启']
          },
          {
            shape: 'line',
            p1: {
              x: 13,
              y: 26
            },
            p2: {
              x: 15,
              y: 0
            },
            state: ['闭合']
          },
          {
            shape: 'circle',
            cx: 12,
            cy: 27.5,
            r: 2
          },
          {
            shape: 'circle',
            cx: 12,
            cy: 2,
            r: 2
          }
        ]
      }),
      twaver.Util.registerImage('singleSwitchVL', {
        w: 24,
        h: 32,
        lineWidth: '<%= getClient("switch.lineWidth") || 2 %>',
        lineColor: '<%= getClient("switch.lineColor") || "#658DC1"%>',
        origin: {
          x: 0,
          y: 0
        },
        v: [{
            shape: 'line',
            p1: {
              x: 11,
              y: 26
            },
            p2: {
              x: 0,
              y: 1
            },
            state: ['开启']
          },
          {
            shape: 'line',
            p1: {
              x: 11,
              y: 26
            },
            p2: {
              x: 9,
              y: 0
            },
            state: ['闭合']
          },
          {
            shape: 'circle',
            cx: 12,
            cy: 27.5,
            r: 2
          },
          {
            shape: 'circle',
            cx: 12,
            cy: 2,
            r: 2
          }
        ]
      })
  }
  var g = (a.make = {}),
    h = {},
    i = {},
    j = [],
    k = {};
  (g.Default = {
    path: './',
    resPath: '',
    getImagePath: function (a) {
      return this.path + this.resPath + 'res/images/' + (a || '')
    },
    register: function (a, b, c) {
      (c = c || {}),
      (c.name = c.name || a),
      (c.modelDefaultParameters = c.modelDefaultParameters || {}),
      (c.description = c.description || c.name),
      h[a] && console.log(a, ' already exist'),
        (h[a] = b)
      var d = c.category || '',
        e = i[d] || {};
      (e[a] = b),
      (i[d] = e),
      (k[a] = c),
      j.indexOf(d) == -1 && j.push(d),
        this.checkModelDefaultParameters(c.modelDefaultParameters)
    },
    checkModelDefaultParameters: function (a) {
      if (a) {
        for (var c in a) {
          var d = a[c]
          d instanceof Object || ((d = {
              value: d
            }), (a[c] = d)),
            (d.propertyName = c),
            (d.hidden = !!d.hidden),
            (d.propertyType =
              d.propertyType || g.Default.PARAMETER_PROPERTY_TYPE_FIELD),
            (d.type = d.type || g.Default.PARAMETER_TYPE_STRING),
            (d.category = d.category || g.Default.PARAMETER_CATEGORY_DETAIL),
            (d.editable = d.editable === b ? !0 : !!d.editable),
            (d.index = d.index === b ? 100 : parseInt(d.index))
        }
      }
    },
    remove: function (a) {
      if (h[a]) {
        (h[a] = b), delete h[a]
        var c = g.Default.getCategory(a),
          d = i[c]
        delete d[a]
        var e = 0
        for (var f in d) f && e++
        if (e == 0) {
          for (var f = 0; f < j.length; f++) {
            var l = j.indexOf(c)
            l >= 0 && j.splice(l, 1)
          }
        }
        delete k[a]
      } else console.log(a, ' not exist')
    },
    getCategories: function () {
      return j
    },
    getCreatorsForCategory: function (a) {
      return i[a]
    },
    getCreator: function (a) {
      return h[a]
    },
    getModelDefaultParameters: function (a) {
      var b = this.getParameters(a)
      return b.modelDefaultParameters
    },
    getDescription: function (a) {
      var b = this.getParameters(a)
      return b.description
    },
    getName: function (a) {
      var b = this.getParameters(a)
      return b.name
    },
    getIcon: function (a) {
      var b = this.getParameters(a)
      return this.path + b.icon
    },
    isAsync: function (a) {
      var b = this.getParameters(a)
      return b.async
    },
    isCombo: function (a) {
      var b = this.getParameters(a)
      return b.combo
    },
    getCategory: function (a) {
      var b = this.getParameters(a)
      return b.category
    },
    getOrder: function (a) {
      var b = this.getParameters(a)
      return b.order || 0
    },
    getType: function (a) {
      var b = this.getParameters(a)
      return b.type
    },
    getOtherParameter: function (a, b) {
      var c = this.getParameters(a)
      return c[b]
    },
    registerIcon: function (a, b) {
      var c = this.getParameters(a)
      if (c) return (c.icon = b), c.icon
    },
    registerDescription: function (a, b) {
      var c = this.getParameters(a)
      return (c.description = b), c.description
    },
    registerName: function (a, b) {
      var c = this.getParameters(a)
      return (c.name = b), c.name
    },
    registerOther: function (a, b, c) {
      var d = e[b],
        e = this.getParameters(a)
      return (
        (e[b] = c),
        b === 'modelDefaultParameters' &&
        (console.warn(
            'rewrite modelDefaultParameters: id={0}, oldValue={}, newValue={}',
            a,
            d,
            c
          ),
          this.checkModelDefaultParameters(c)),
        d
      )
    },
    appendModelDefaultParameter: function (a, b, c, d, e, f, g) {},
    getParameters: function (a) {
      return k[a] || {}
    },
    load: function (a, b) {
      var c
      if (a instanceof Array) {
        var d = {}
        if (b) {
          var e = function (c, d) {
            var e = a.length
            return (function (a) {
              (c.datas = c.datas || []),
              c.datas.push(a),
                c._total === e && b(c.datas)
            })(d)
          }
          d._total = 0
          for (var f = 0; f < a.length; f++) {
            var g = a[f]
            this.load(g, function (a) {
              d._total++, e(d, a)
            })
          }
          return null
        }
        c = []
        for (var f = 0; f < a.length; f++) {
          var g = a[f],
            h = this.load(g)
          h && c.push(h)
        }
      } else {
        var i = {}
        typeof a === 'string' ? (i.id = a) : (i = a),
          (i = this.filterJson(i)),
          b ? this._load(i, b) : (c = this._load(i))
      }
      return c
    },
    _load: function (a, b) {
      var c = a.id,
        d = this.getCreator(c)
      if (!d) return console.log('unknown id: ', c), null
      if (!b) {
        var e = d(a)
        return g.Default._setObjectClientId(e, c), e
      }
      d(a, function (a) {
        g.Default._setObjectClientId(a, c), b && b(a)
      })
    },
    _setObjectClientId: function (a, b) {
      a &&
        (a instanceof mono.Element || a instanceof twaver.Data) &&
        a.setClient('id', b)
    },
    copyArray: function (a, b, c) {
      if (((b = []), a)) {
        for (var d, e = 0, f = a.length; f > e; e++) {
          (d = {}), this.copyProperties(a[e], d), b.push(d)
        }
      }
      return b
    },
    copyProperties: function (a, c, d) {
      if (a && c) {
        for (var e in a) {
          (d && d.indexOf(e) >= 0) ||
          e.startsWith('_') ||
            (c[e] === b &&
              (a[e] instanceof Array ?
                (c[e] = []) :
                a[e] instanceof Function ?
                (c[e] = a[e]) :
                a[e] instanceof Object ?
                (c[e] = {}) :
                (c[e] = a[e])),
              a[e] instanceof Object &&
              c[e] instanceof Object &&
              g.Default.copyProperties(a[e], c[e]))
        }
      }
    },
    getModelDefaultParametersValues: function (a, b) {
      var c = this.getModelDefaultParameters(a),
        d = {}
      for (var e in c) {
        var f = c[e];
        (b && b(f)) ||
        (f.propertyType == g.Default.PARAMETER_PROPERTY_TYPE_CLIENT ?
          ((d.client = d.client || {}), (d.client[e] = f.value)) :
          f.propertyType == g.Default.PARAMETER_PROPERTY_TYPE_STYLE ?
          ((d.style = d.style || {}), (d.style[e] = f.value)) :
          (d[e] = f.value))
      }
      return d
    },
    getModelDefaultParameterProperties: function (a) {
      var b = this,
        c = [],
        d = this.getModelDefaultParameters(a)
      if (!d) return c
      d.id ||
        (d.id = {
          propertyName: 'id',
          name: '模型ID',
          category: g.Default.PARAMETER_CATEGORY_BASIC,
          editable: !1,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
          type: g.Default.PARAMETER_TYPE_STRING,
          exportable: !1,
          index: -2
        }),
        d.objectId ||
        (d.objectId = {
          propertyName: 'objectId',
          name: '实例ID',
          category: g.Default.PARAMETER_CATEGORY_BASIC,
          editable: !1,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
          type: g.Default.PARAMETER_TYPE_STRING,
          exportable: !1,
          index: -1
        })
      for (var e in d) c.push(d[e])
      return (
        c.sort(function (a, b) {
          return a.index - b.index
        }),
        (c = c.map(function (a) {
          return b.modelParameterToProperty(a)
        }))
      )
    },
    _getNameFromPropertyName: function (a) {
      for (var b = a.split('.'), c = '', d = 0; d < b.length; d++) {
        b[d].length > 0 &&
          (c +=
            b[d].substring(0, 1).toUpperCase() +
            b[d].substring(1, b[d].length)),
          d < b.length - 1 && (c += ' ')
      }
      return c
    },
    modelParameterToProperty: function (a) {
      var b = new twaver.Property()
      return (
        b.setCategoryName(a.category),
        a.name || (a.name = this._getNameFromPropertyName(a.propertyName)),
        b.setName(a.name),
        b.setEditable(a.editable),
        b.setPropertyType(a.propertyType),
        b.setPropertyName(a.propertyName),
        b.setValueType(a.type),
        b.setEnumInfo(a.enumInfo),
        (b.isVisible = function () {
          return !a.hidden
        }),
        b
      )
    },
    filterJson: function (a) {
      var c = this.getModelDefaultParameters(a.id)
      for (var d in c) {
        var e = c[d].propertyType || 'client',
          f = c[d].value
        e == g.Default.PARAMETER_PROPERTY_TYPE_STYLE ?
          (a.style && a.style[d] !== b) ||
          ((a.style = a.style || {}), (a.style[d] = f)) :
          e == g.Default.PARAMETER_PROPERTY_TYPE_CLIENT ?
          (a.client && a.client[d] !== b) ||
          ((a.client = a.client || {}), (a.client[d] = f)) :
          a[d] === b && (a[d] = f)
      }
      return a
    },
    UNIT_HEIGHT: 4.445,
    EQUIPMENT_WIDTH: 45.5,
    RACK_OFFSET_X: 7.25,
    RACK_OFFSET_Y: 6.655,
    RACK_WIDTH: 60,
    getUnitHeight: function () {
      return this.UNIT_HEIGHT
    },
    getEquipmentWidth: function () {
      return this.EQUIPMENT_WIDTH
    },
    getEquipmentHeight: function (a) {
      return (
        parseInt(a) > 0 ||
        console.error(
          "method getEquipmentHeight's first argument scale value is zero"
        ),
        this.UNIT_HEIGHT * a
      )
    },
    getRackWidth: function () {
      return this.RACK_WIDTH
    },
    getRackHeight: function (a) {
      return (
        parseInt(a) > 0 ||
        console.error(
          "method getRackHeight's first argument scale value is zero"
        ),
        this.RACK_OFFSET_Y + this.UNIT_HEIGHT * parseInt(a) + this.RACK_OFFSET_Y
      )
    }
  }),
  (g.Default.toJson = function (a, b) {
    if (a instanceof mono.Element || a instanceof twaver.Data) {
      var c = a.getClient('id'),
        d = g.Default.getModelDefaultParameters(c),
        e = {},
        f = null,
        h = null
      for (var i in d) {
        if (d[i].exportable !== !1) {
          var j = d[i].propertyType,
            h = d[i].value
          j == g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR ?
            ((f = a[_twaver.getter(i)]()),
              g.Default.equals(f, h) || (e[i] = f)) :
            j == g.Default.PARAMETER_PROPERTY_TYPE_FIELD ?
            ((f = a[i]), g.Default.equals(f, h) || (e[i] = f)) :
            j == g.Default.PARAMETER_PROPERTY_TYPE_STYLE ?
            ((f = a.getStyle(i)),
              g.Default.equals(f, h) ||
              ((e.style = e.style || {}), (e.style[i] = f))) :
            j == g.Default.PARAMETER_PROPERTY_TYPE_CLIENT &&
            ((f = a.getClient(i)),
              g.Default.equals(f, h) ||
              ((e.client = e.client || {}), (e.client[i] = f)))
        }
      }
      return (
        (e.id = c),
        g.Default.EXPORT_OBJECT_ID && (e.objectId = a.getId()),
        b && (e = b(e)),
        e
      )
    }
    return b && (a = b(a)), a
  }),
  (g.Default.copy = function (a, b, c, d, e) {
    var f = function (a, b, c, d, e) {
      e = e || {}
      var f = {},
        h = g.Default.getParameters(b)
      d instanceof Function
        ?
        (f = d(h) || {}) :
        g.Default.copyProperties(d, f),
        e.copyParamCoverage || g.Default.copyProperties(h, f),
        g.Default.register(
          a,
          function (a, d) {
            var e = {
              id: b
            }
            c instanceof Function ? c(a) : g.Default.copyProperties(c, e),
              g.Default.copyProperties(a, e)
            var f = g.Default.load(e, d)
            return f
          },
          f
        )
    }
    f(a, b, c, d, e)
  }),
  (g.Default.PARAMETER_CATEGORY_BASIC = 'BASIC'),
  (g.Default.PARAMETER_CATEGORY_DETAIL = 'Detail'),
  (g.Default.PARAMETER_TYPE_STRING = 'string'),
  (g.Default.PARAMETER_TYPE_BOOLEAN = 'boolean'),
  (g.Default.PARAMETER_TYPE_COLOR = 'color'),
  (g.Default.PARAMETER_TYPE_INT = 'int'),
  (g.Default.PARAMETER_TYPE_NUMBER = 'number'),
  (g.Default.PARAMETER_TYPE_IMAGE = 'image'),
  (g.Default.PARAMETER_TYPE_ARRAY_STRING = 'array.string'),
  (g.Default.PARAMETER_TYPE_ARRAY_NUMBER = 'array.number'),
  (g.Default.PARAMETER_TYPE_ARRAY_INT = 'array.int'),
  (g.Default.PARAMETER_PROPERTY_TYPE_FIELD = 'field'),
  (g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR = 'accessor'),
  (g.Default.PARAMETER_PROPERTY_TYPE_STYLE = 'style'),
  (g.Default.PARAMETER_PROPERTY_TYPE_CLIENT = 'client'),
  (String.prototype.replaceAll = function (a, b, c) {
    return RegExp.prototype.isPrototypeOf(a) ?
      this.replace(a, b) :
      this.replace(new RegExp(a, c ? 'gi' : 'g'), b)
  }),
  (String.prototype.format = function (a) {
    var b = this
    if (arguments.length > 1) {
      for (var c = [], d = 0; d < arguments.length; d++) c.push(arguments[d])
      a = c
    }
    if (a) {
      if (a instanceof Array) {
        a.forEach(function (a, c) {
          a instanceof Object && (a = JSON.stringify(a)),
            (b = b.replaceAll('{' + c + '}', a))
        })
      } else {
        if (!(a instanceof Object)) return b.replaceAll('{}', a)
        for (var e in a) {
          var f = a[e]
          f instanceof Object && (f = JSON.stringify(f)),
            (b = b.replaceAll('{' + e + '}', f))
        }
      }
    }
    return b
  }),
  (g.Default.getId = function (a) {
    return a.getClient('id')
  }),
  (g.Default.objectWrapper = function (a, b, c, d) {
    a.__defineGetter__(b, function () {
        var d = a['___' + b]
        return c && (d = c.call(a, d, a)), d
      }),
      a.__defineSetter__(b, function (c) {
        var e = a[b]
        d && (c = d.call(a, c, a)),
          e !== c &&
          ((a['___' + b] = c),
            this.firePropertyChange && this.firePropertyChange(b, e, c))
      })
  }),
  (g.Default.equals = function (a, b) {
    return a instanceof Object && b instanceof Object ?
      JSON.stringify(a) == JSON.stringify(b) :
      a == b
  }),
  (g.Default.EXPORT_OBJECT_ID = !0),
  (g.Utils3D = {
    positionFloor: 'floor-top',
    _objMap: {},
    _objObject: {},
    _envMaps: {
      envmap1: 'envmap1.jpg',
      envmap2: 'envmap2.jpg',
      envmap3: 'envmap3.jpg'
    },
    getEnvMap: function (a) {
      var b = g.Default.getImagePath() + g.Default._envMaps[a]
      return [b, b, b, b, b, b]
    },
    getOBjPath: function () {
      return this.path + 'obj/'
    },
    createFloorForWall: function (a) {
      var b = {
          type: 'twaver.floor',
          data: a.getClient('data')
        },
        c = this.getCreator(b.type)
      if (c) {
        var d = this.loadData(b)
        d.setParent(a)
      }
    },
    createCombo: function (a, b) {
      var c = [],
        d = [],
        e = [],
        f = [] 
      !a || a instanceof Array || (a = [a])
      for (var g = 0; g < a.length; g++) {
        var h = a[g],
          i = h.op || '+',
          j = h.style,
          k = h.client,
          l = h.position || [0, 0, 0],
          m = h.rotation || [0, 0, 0],
          n = h.scale || [1, 1, 1],
          o = null
        if (
          (h.type === 'cube' && (o = this.createCube(h)),
            h.type === 'cylinder' && (o = this.createCylinder(h)),
            h.type === 'sphere' && (o = this.createSphere(h)),
            h.type === 'polygon' && (o = this.createPolygon(h)),
            h.type === 'torus' && (o = this.createTorus(h)),
            h.type === 'path' && (o = this.createPathCube(h)),
            h.type === 'pathNode' && (o = this.createPathNode(h)),
            h.type === 'shapeNode' && (o = this.createShapeNode(h)),
            o)
        ) {
          if (
            (m && !h.rotationAnchor && o.setRotation(m[0], m[1], m[2]),
              h.rotationAnchor)
          ) {
            var p = o.getPosition()
            l = [l[0] + p.x, l[1] + p.y, l[2] + p.z]
          }
          o.setPosition(l[0], l[1], l[2]),
            o.setScale(n[0], n[1], n[2]),
            j && o.s(j),
            k && o.c(k),
            h.op ?
            (o.getChildren().size() > 0 &&
              (c = c.concat(o.getChildren().toArray())),
              c.push(o),
              o.getChildren().size() > 0 ?
              o.getChildren().forEach(function () {
                e.push(i)
              }) :
              c.length > 1 && e.push(i),
              f.push(o.getId())) :
            d.push(o)
        }
      }
      if (c.length > 0) {
        var q
        return (
          (q = b ?
            new mono.ComboNode(c, e, !1, b) :
            new mono.ComboNode(c, e)),
          q.setNames(f),
          q
        )
      }
      return d.length == 1 ? d[0] : d
    },
    setMainObject: function (a) {
      function b(a, b) {
        if (a) {
          var c = a.getBoundingBox(),
            d = b.getBoundingBox(),
            e = c.min,
            f = c.max,
            g = d.min,
            h = d.max;
          (f.x - e.x < h.x - g.x || f.z - e.z < h.z - g.z) && (a = b)
        } else a = b
        return a
      }
      var c = null
      if (a instanceof Array) {
        for (var d = 0; d < a.length; d++) {
          var e = a[d]
          e instanceof mono.Entity && (c = b(c, e))
        }
        for (var d = 0; d < a.length; d++) {
          var e = a[d]
          e instanceof mono.Entity && c != e && a[d].setParent(c)
        }
      } else c = a
      return c && c.setClient('main', !0), c
    },
    createCube: function (a) {
      var b,
        c = a.width,
        d = a.height,
        e = a.depth,
        f = a.color,
        g = a.rotation || [0, 0, 0],
        h = a.rotationAnchor,
        i = a.topColor || f,
        j = a.image,
        k = a.frontImage
      if (
        ((b = a.id ?
            new mono.Cube({
              id: a.id,
              width: c,
              height: d,
              depth: e
            }) :
            new mono.Cube(c, d, e)),
          b.s({
            'm.color': f,
            'm.ambient': f,
            'left.m.lightmap.image': this.getImagePath('inside_lightmap.jpg'),
            'right.m.lightmap.image': this.getImagePath('outside_lightmap.jpg'),
            'front.m.lightmap.image': this.getImagePath('outside_lightmap.jpg'),
            'back.m.lightmap.image': this.getImagePath('inside_lightmap.jpg'),
            'top.m.color': i,
            'top.m.ambient': i,
            'bottom.m.color': i,
            'bottom.m.ambient': i
          }),
          j && b.setStyle('m.texture.image', j),
          k && b.setStyle('front.m.texture.image', k),
          h)
      ) {
        var l, m
        h === 'left' &&
          ((l = new mono.Vec3(c / 2, 0, 0)), (m = new mono.Vec3(0, 1, 0))),
          h === 'right' &&
          ((l = new mono.Vec3(-c / 2, 0, 0)), (m = new mono.Vec3(0, 1, 0))),
          b.rotateFromAxis(m.clone(), l.clone(), g[1])
      } else b.setRotation(g[0], g[1], g[2])
      return b
    },
    createCylinder: function (a) {
      var b = a.radius,
        c = a.topRadius || b,
        d = a.bottomRadius || b,
        e = a.height,
        f = a.color,
        g = a.image,
        h = new mono.Cylinder(c, d, e)
      return (
        h.s({
          'm.normalType': mono.NormalTypeSmooth,
          'm.type': 'phong',
          'm.color': f,
          'm.ambient': f,
          'side.m.lightmap.image': this.getImagePath('inside_lightmap.jpg')
        }),
        g && h.setStyle('m.texture.image', g),
        h
      )
    },
    createSphere: function (a) {
      var b = a.radius,
        c = a.color || '#F5F5F5',
        d = a.image,
        e = new mono.Sphere(b)
      return (
        e.s({
          'm.normalType': mono.NormalTypeSmooth,
          'm.type': 'phong',
          'm.color': c,
          'm.ambient': c,
          'm.lightmap.image': this.getImagePath('inside_lightmap.jpg')
        }),
        d && e.setStyle('m.texture.image', d),
        e
      )
    },
    createPolygon: function (a) {
      var b = a.radius || 100,
        c = a.topRadius || b,
        d = a.bottomRadius || b,
        e = a.height || 200,
        f = a.radialSegments || 3,
        g = a.color || '#F5F5F5',
        h = a.topColor || g,
        i = a.smooth || !0,
        j = a.image,
        k = new mono.Cylinder(c, d, e, f, i)
      return (
        k.s({
          'm.normalType': mono.NormalTypeSmooth,
          'm.type': 'phong',
          'm.color': g,
          'm.ambient': g,
          'top.m.color': h,
          'top.m.ambient': h,
          'bottom.m.color': h,
          'bottom.m.ambient': h,
          'side.m.lightmap.image': this.getImagePath('inside_lightmap.jpg')
        }),
        j && k.setStyle('m.texture.image', j),
        k
      )
    },
    createTorus: function (a) {
      var b = a.radius || 50,
        c = a.tube || 30,
        d = a.tubularSegments || 3,
        e = a.radialSegments || 6,
        f = a.color || '#F5F5F5',
        g = a.image,
        h = new mono.Torus(b, c, d, e)
      return (
        h.s({
          'm.normalType': mono.NormalTypeSmooth,
          'm.type': 'phong',
          'm.color': f,
          'm.ambient': f,
          'm.lightmap.image': this.getImagePath('outside_lightmap.jpg')
        }),
        g && h.setStyle('m.texture.image', g),
        h
      )
    },
    createPathNodePath: function (a) {
      var b
      if (a[0] && a[0] instanceof Array) {
        for (var c = 0; c < a.length; c++) {
          var d = a[c]
          b
            ?
            d[0] === 'c' ?
            b.quadraticCurveTo(d[1], d[2], d[3], d[4], d[5], d[6]) :
            b.lineTo(d[0], 0, d[1]) :
            ((b = new mono.Path()), b.moveTo(d[0], 0, d[1]))
        }
      } else {
        for (var c = 0; c < a.length; c += 3) {
          b
            ?
            b.lineTo(a[c], a[c + 1], a[c + 2]) :
            ((b = new mono.Path()), b.moveTo(a[c], a[c + 1], a[c + 2]))
        }
      }
      return b
    },
    createPathNode: function (a) {
      var b,
        c = a.radius,
        d = a.pathImage,
        e = a.repeat || 50,
        f = a.offset || new mono.Vec2(0, 0),
        g = a.startCap || 'plain',
        h = a.endCap || 'plain',
        i = a.pathWidth,
        j = a.pathHeight,
        k = i / 2,
        l = j / 2,
        m = [{
            x: k,
            y: -l
          },
          {
            x: k,
            y: l
          },
          {
            x: -k,
            y: l
          },
          {
            x: -k,
            y: -l
          }
        ],
        n = this.createPathNodePath(a.data),
        o = n.getLength()
      return (
        i && j ?
        (b = new mono.PathNode({
          path: n,
          shape: m,
          segments: 10,
          segmentsR: 5
        })) :
        ((n = mono.PathNode.prototype.adjustPath(n, 5)),
          (b = new mono.PathNode(n, c, 3))),
        b.s({
          'm.texture.image': d,
          'm.texture.repeat': new mono.Vec2(o / e, 1),
          'm.texture.offset': f
        }),
        g && b.setStartCap(g),
        h && b.setEndCap(h),
        b
      )
    },
    createShapeNodePath: function (a) {
      var b
      if (a[0] && a[0] instanceof Array) {
        for (var c = 0; c < a.length; c++) {
          var d = a[c]
          b
            ?
            d[0] === 'c' ?
            b.quadraticCurveTo(d[1], -d[2], 0, d[3], -d[4], 0) :
            b.lineTo(d[0], -d[1], 0) :
            ((b = new mono.Path()), b.moveTo(d[0], -d[1], 0))
        }
      } else {
        for (var c = 0; c < a.length; c += 2) {
          b
            ?
            b.lineTo(a[c], -a[c + 1], 0) :
            ((b = new mono.Path()), b.moveTo(a[c], -a[c + 1], 0))
        }
      }
      return b
    },
    createShapeNode: function (a) {
      var c = a.repeat || 100,
        d = a.amount || 2,
        e = !0;
      (a.vertical !== null || a.vertical != b) && (e = a.vertical)
      var f,
        g = this.createShapeNodePath(a.data)
      return (
        (f = a.id ?
          new mono.ShapeNode({
            id: a.id,
            path: g
          }) :
          new mono.ShapeNode(g)),
        a.curveSegments && f.setCurveSegments(a.curveSegments),
        f.setAmount(d),
        f.setVertical(e),
        f.setRepeat(c),
        f
      )
    },
    createPathCube: function (a) {
      var b = a.width,
        c = a.height,
        d = a.data,
        e = a.insideColor,
        f = a.outsideColor,
        g = a.asideColor,
        h = a.zsideColor,
        i = a.topColor,
        j = a.bottomColor,
        k = a.insideImage || a.image,
        l = a.outsideImage || a.image,
        m = a.insideMap,
        n = a.outsideMap,
        o = a.repeat || a.height,
        p = a.closed,
        q = this.createShapeNodePath(d)
      p && q.closePath()
      var r = new mono.PathCube(q, b, c)
      return (
        r.s({
          'outside.m.color': f,
          'inside.m.type': 'basic',
          'inside.m.color': e,
          'aside.m.color': g || f,
          'zside.m.color': h || f,
          'top.m.color': i,
          'bottom.m.color': j || i,
          'inside.m.lightmap.image': m,
          'outside.m.lightmap.image': n,
          'aside.m.lightmap.image': n,
          'zside.m.lightmap.image': n,
          'inside.m.texture.image': k,
          'outside.m.texture.image': l
        }),
        r.setRepeat(o),
        r
      )
    },
    getPicInfo: function (a, b) {
      var c = {}
      typeof b === 'string' && (b = [b])
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = e.substring(0, e.indexOf('.')).toLowerCase();
        (e = a + e), (c[f] = e)
      }
      return c
    },
    getRByD: function (a) {
      return (a * Math.PI) / 180
    },
    getDByR: function (a) {
      return (180 * a) / Math.PI
    },
    getRsByDs: function (a) {
      var b
      if (a && a.length > 0) {
        b = []
        for (var c = 0; c < a.length; c++) b.push(g.Default.getRByD(a[c]))
      }
      return b
    },
    setObject3dCSProps: function (a, b) {
      b.client && a.c(b.client), b.style && a.s(b.style)
    },
    cloneObjElement: function (a, b) {
      var c = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
        d = a.scale || [1, 1, 1],
        e = a.position || [0, 0, 0]
      e[1] = parseFloat(e[1]) || 0
      var f = this._objObject[a.name],
        h = f.getBoundingBoxWithChildren(),
        i = (h.max.y - h.min.y) / 2,
        j = f.clonePrefab()
      if ((a._id && (j._id = a._id), a.client)) {
        for (var k in a.client) j.setClient(k, a.client[k])
      }
      return (
        a.s && j.s(a.s),
        j.setClient('type', a.name),
        j.setClient('showShadow', a.showShadow),
        a.showShadow && j.setClient('shadowImage', a.shadowImage),
        j.setClient('json', a),
        j.setScale(d[0], d[1], d[2]),
        j.setPosition(e[0], e[1] + i * d[1], e[2]),
        j.setRotation(c[0], c[1], c[2]),
        b && b(j),
        j
      )
    },
    createObj: function (a, b) {
      var c = this
      if (this._objObject[a.name]) {
        var d = (a.path && c.path + a.path) || this.getOBjPath(),
          e = (a.shadowImage = d + a.name + 'S.png')
        return this.cloneObjElement(a, b)
      }
      if (!this._objMap[a.name]) {
        this._objMap[a.name] = []
        var d = (a.path && c.path + a.path) || this.getOBjPath(),
          f = d + a.name + '.obj',
          g = d + a.name + '.mtl'
        a.scale || [1, 1, 1]
        if (a.showShadow) {
          var e = (a.shadowImage = d + a.name + 'S.png')
          twaver.Util.registerImageByUrl(e, e)
        }
        var h = new mono.OBJMTLLoader()
        h.load(f, g, null, function (b) {
          a.merged && (b = mono.Utils.mergeElements(b.getDescendants())),
            (c._objObject[a.name] = b),
            c._objMap[a.name].forEach(function (a) {
              return c.cloneObjElement(a.json, a.callback)
            })
        })
      }
      this._objMap[a.name].push({
        json: a,
        callback: b
      })
    },
    getTextSize: function (a, b, c, d) {
      var e = document.createElement('canvas'),
        f = e.getContext('2d'),
        g = a.split('\n'),
        h = 0
      f.font = b
      for (var i = 0; i < g.length; i++) {
        var j = g[i],
          k = f.measureText(j).width
        k > h && (h = k)
      }
      var l = f.measureText('e').width * g.length * 3 + 4,
        m = {
          w: h + c,
          h: l + d
        }
      return m
    },
    generateTextCanvas: function (a, b, c, d, e) {
      var f = document.createElement('canvas'),
        c = c || 'bold 80px 微软雅黑,sans-serif',
        h = 100,
        i = 40,
        j = f.getContext('2d'),
        k = a.split('\n'),
        l = g.Default.getTextSize(a, c, h, i),
        m = l.w,
        n = l.h,
        o = {
          width: m,
          height: n
        };
      (f.height = mono.Utils.nextPowerOfTwo(l.h)),
      (f.width = mono.Utils.nextPowerOfTwo(l.w)),
      d &&
        (j.save(),
          (j.globalAlpha = 1),
          (j.fillStyle = e || '#FE642E'),
          j.beginPath(),
          j.moveTo(0, 0),
          j.lineTo(m, 0),
          j.lineTo(m, n),
          j.lineTo(0, n),
          j.closePath(),
          j.fill()),
        j.restore(),
        (j.fillStyle = b || 'white'),
        (j.textBaseline = 'middle'),
        (j.textAlign = 'center'),
        (j.font = c)
      var p = j.measureText('o').width
      if (k.length == 1) j.fillText(k[0], f.width / 2, f.height / 2)
      else {
        for (var q = 0; q < k.length; q++) {
          j.fillText(k[q], m / 2, n / 2 + p * q * 2.5)
        }
      }
      return (f.drawRect = o), f
    },
    generateShadowNode: function (a) {
      var b = null,
        c = a.getDescendants()
      if (
        (c.forEach(function (a) {
            a instanceof mono.Entity &&
              a.getClient('type') &&
              a.getClient('type') == 'floor' &&
              (b = a)
          }),
          b)
      ) {
        var d = b.getBoundingBox(),
          e = d.max.z - d.min.z,
          f = d.max.x - d.min.x,
          h = g.Default.createShadowImage(a, b),
          i = new mono.Cube(f, 1, e)
        i.s({
          'm.visible': !1,
          'top.m.visible': !0,
          'top.m.transparent': !0,
          'top.m.texture.image': h
        })
        var j = b.getBoundingBox()
        return (
          i.p((j.max.x + j.min.x) / 2, 3, (j.max.z + j.min.z) / 2),
          i.setParent(b),
          i
        )
      }
    },
    _getWorldRotation: function (a) {
      var b = new mono.Mat4().extractRotation(a.worldMatrix),
        c = new mono.Vec3()
      return c.setEulerFromRotationMatrix(b), c
    },
    createShadowImage: function (a, b) {
      var c = b.getBoundingBox(),
        d = c.max.z - c.min.z,
        e = c.max.x - c.min.x,
        f = Math.max(2048, Math.max(e, d)),
        h = f / 2048,
        i = document.createElement('canvas'),
        j = mono.Utils.nextPowerOfTwo(e / h),
        k = mono.Utils.nextPowerOfTwo(d / h),
        l = e / j,
        m = d / k;
      (i.width = j), (i.height = k)
      var n = i.getContext('2d')
      n.beginPath(), n.rect(0, 0, j, k)
      var o = a ? a.getBoundingBox() : null,
        p = -(o.max.x + o.min.x) / 2,
        q = -(o.max.z + o.min.z) / 2,
        r = a.getDescendants()
      a.getPosition()
      return (
        r.push(a),
        r.forEach(function (a) {
          var b = a.getWorldPosition(),
            c = j / 2 + b.x / l,
            d = k / 2 + b.z / m,
            e = g.Default._getWorldRotation(a),
            f = a.getClient('type')
          if (f == 'wall' || f == 'inner_wall' || f == 'glass_wall') {
            var h = a.getClient('data')
            if (
              (n.save(),
                n.translate(c, d),
                console.log(c, d),
                n.beginPath(),
                h[0] && h[0] instanceof Array)
            ) {
              for (var i = 0; i < h.length; i++) {
                i == 0 ?
                  n.moveTo(h[i][0] / l + p / l, h[i][1] / m + q / m) :
                  n.lineTo(h[i][0] / l + p / l, h[i][1] / m + q / m)
              }
              f == 'wall' &&
                n.lineTo(h[0][0] / l + p / l, h[0][1] / m + q / m)
            } else {
              for (var i = 0; i < h.length; i += 2) {
                i == 0 ?
                  n.moveTo(h[i] / l + p / l, h[i + 1] / m + q / m) :
                  n.lineTo(h[i] / l + p / l, h[i + 1] / m + q / m)
              }
              f == 'wall' && n.lineTo(h[0] / l + p / l, h[1] / m + q / m)
            }
            (n.lineWidth = 20 / l),
            (n.strokeStyle = '#ccc'),
            (n.shadowColor = '#000'),
            (n.shadowBlur = 300 / l),
            (f == 'inner_wall' || f == 'glass_wall') &&
            (n.translate(c, d),
              (n.lineWidth = 10 / l),
              (n.shadowBlur = 300 / l)),
            (n.shadowOffsetX = 0),
            (n.shadowOffsetY = 0),
            n.stroke(),
              n.stroke(),
              n.stroke(),
              n.stroke(),
              n.restore()
          }
          var o = a.getClient('showShadow'),
            r = a.getClient('shadowImage')
          if (o) {
            var s = a.getBoundingBox(),
              t = s.size(),
              u = (t.x / l) * 0.99,
              v = (depth = (t.z / m) * 0.99)
            if (
              (e.y % (Math.PI / 2) == 0 &&
                ((u = (t.x / m) * 0.99), (v = depth = (t.z / l) * 0.99)),
                e.y % Math.PI == 0 &&
                ((u = (t.x / l) * 0.99), (v = depth = (t.z / m) * 0.99)),
                r)
            ) {
              var w = twaver.Util.getImageAsset(r)
              if (!w) return
              console.log(t),
                n.save(),
                n.translate(c + p / l, d + q / m),
                n.rotate(-e.y)
              var x = 0.3 * Math.max(u, depth)
              n.drawImage(
                  w.getImage(),
                  -u / 2 - x / 2,
                  -depth / 2 - x / 2 - 10,
                  u + x,
                  depth + x + 20
                ),
                n.drawImage(
                  w.getImage(),
                  -u / 2 - x / 2,
                  -depth / 2 - x / 2 - 10,
                  u + x,
                  depth + x + 20
                ),
                n.restore()
            } else {
              n.save(),
                n.translate(c + p / l, d + q / m),
                n.rotate(-e.y),
                n.beginPath(),
                n.moveTo(-u / 2, 0),
                n.lineTo(u / 2, 0),
                (n.lineWidth = v),
                (n.strokeStyle = 'gray'),
                (n.shadowColor = '#333'),
                (n.shadowBlur = 80),
                (n.shadowOffsetX = 0),
                (n.shadowOffsetY = 0),
                n.stroke(),
                n.stroke(),
                n.restore()
            }
          }
        }),
        i
      )
    },
    getPathBoundingBox: function (a) {
      var b = {},
        c = {
          centerPoint: {
            x: 0,
            y: 0
          },
          min: {
            x: 0,
            y: 0
          },
          max: {
            x: 0,
            y: 0
          },
          size: {
            x: 0,
            y: 0
          }
        }
      if (a.length == 0) return c
      var d, e, f, g
      if (a[0] instanceof Array) {
        (d = a[0][0]), (e = a[0][0]), (f = -a[0][1]), (g = -a[0][1])
        for (var h = 1; h < a.length; h++) {
          (d = Math.min(d, a[h][0])),
          (e = Math.max(e, a[h][0])),
          (f = Math.min(f, -a[h][1])),
          (g = Math.max(g, -a[h][1]))
        }
      } else {
        if (a.length < 2) return c;
        (d = a[0]), (e = a[0]), (f = -a[1]), (g = -a[1])
        for (var h = 2; h < a.length; h += 2) {
          (d = Math.min(d, a[h])),
          (e = Math.max(e, a[h])),
          (f = Math.min(f, -a[h + 1])),
          (g = Math.max(g, -a[h + 1]))
        }
      }
      return (
        (b.centerPoint = {
          x: (d + e) / 2,
          y: (f + g) / 2
        }),
        (b.min = {
          x: d,
          y: f
        }),
        (b.max = {
          x: e,
          y: g
        }),
        (b.size = {
          x: e - d,
          y: g - f
        }),
        b
      )
    },
    setPositionY: function (a, b) {
      if (typeof b === 'number') a.setPositionY(b)
      else if (b == g.Default.positionFloor) {
        var c = a.getBoundingBox().size()
        a.setPositionY(c.y / 2)
      }
    },
    playAnimation: function (a, b, c) {
      var d = b.split(':')
      if (d[0] === 'move') {
        var e = d[1]
        this.animateMove(a, e, c)
      }
      if (d[0] === 'rotation') {
        var f = d[1],
          g = d[2],
          h = parseInt(d[3]) || 1e3,
          i = parseInt(d[4]),
          j = d[5]
        this.animateRotate(a, f, g, h, i, j, c)
      }
    },
    animateMove: function (a, b, c) {
      var d = a
        .getBoundingBox()
        .size()
        .multiply(a.getScale()),
        e = 0.8,
        f = new mono.Vec3(0, 0, 1),
        g = 0
      b === 'right' && ((f = new mono.Vec3(1, 0, 0)), (g = d.x)),
        b === 'left' && ((f = new mono.Vec3(-1, 0, 0)), (g = d.x)),
        b === 'top' && ((f = new mono.Vec3(0, 1, 0)), (g = d.y)),
        b === 'bottom' && ((f = new mono.Vec3(0, -1, 0)), (g = d.y)),
        b === 'front' && ((f = new mono.Vec3(0, 0, 1)), (g = d.z)),
        b === 'back' && ((f = new mono.Vec3(0, 0, -1)), (g = d.z)),
        (g *= e),
        a.getClient('animated') && (f = f.negate())
      var h = a.getPosition().clone()
      a.setClient('animated', !a.getClient('animated')),
        new twaver.Animate({
          from: 0,
          to: 1,
          dur: 2e3,
          easing: 'bounceOut',
          onUpdate: function (b) {
            a.setPosition(h.clone().add(f.clone().multiplyScalar(g * b)))
          },
          onDone: function () {
            c && c()
          }
        }).play()
    },
    animateRotate: function (a, c, d, e, f, g, h) {
      g = g || 'easeInStrong'
      var i = a
        .getBoundingBox()
        .size()
        .multiply(a.getScale()),
        j = 0,
        k = 1
      a.getClient('animated') && (k = -1),
        a.setClient('animated', !a.getClient('animated'))
      var l, m
      if (c === 'left') {
        l = new mono.Vec3(-i.x / 2, 0, 0)
        var m = new mono.Vec3(0, 1, 0)
      }
      if (c === 'right') {
        l = new mono.Vec3(i.x / 2, 0, 0)
        var m = new mono.Vec3(0, 1, 0)
      }
      if (c === 'center-z') {
        l = new mono.Vec3(0, 0, 0)
        var m = new mono.Vec3(0, 0, 1)
      }
      var n = new twaver.Animate({
        from: j,
        to: k,
        dur: e,
        delay: f,
        easing: g,
        onUpdate: function (c) {
          this.lastValue === b && (this.lastValue = 0),
            a.rotateFromAxis(
              m.clone(),
              l.clone(),
              (Math.PI / 180) * -d * (c - this.lastValue)
            ),
            (this.lastValue = c)
        },
        onDone: function () {
          delete this.lastValue, h && h()
        }
      })
      n.play()
    }
  })
  for (var l in g.Utils3D) g.Default[l] = g.Utils3D[l]
  g.Default.register(
      'twaver.cube',
      function (a, b) {
        a.rotation = g.Default.getRsByDs(a.rotation || [0, 0, 0])
        var c = g.Default.createCube(a),
          d = a.position || [0, 0, 0]
        return c.p(d[0], d[1], d[2]), b && b(c), c
      }, {
        category: '基本模型',
        type: 'mono.Element',
        name: '立方体',
        icon: 'model/idc/icons/cube.png',
        description: '立方体是make里面提供的最基本的模型，可以用这种模型扩展出各种立方体形状的模型，比如箱子，柱子，盒子等。支持更改长，宽，高，贴图等基本参数',
        modelDefaultParameters: {
          width: {
            name: '宽',
            value: 100,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          height: {
            name: '高',
            value: 100,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          depth: {
            name: '深',
            value: 100,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          color: {
            name: '颜色',
            value: 'white',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          image: {
            name: '贴图',
            value: b,
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          position: {
            value: [0, 0, 0],
            name: '位置',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          },
          rotation: {
            value: [0, 0, 0],
            name: '旋转角度',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          }
        }
      }
    ),
    g.Default.register(
      'twaver.cylinder',
      function (a, b) {
        var c = g.Default.createCylinder(a)
        return b && b(c), c
      }, {
        category: '基本模型',
        type: 'mono.Element',
        name: '圆柱体',
        icon: 'model/idc/icons/cylinder.png',
        description: '圆柱体是make中提供的最基本模型，支持更改半径，高度的参数。可以更改这些参数扩展出各个圆柱体形状的模型，比如圆形柱子，桌子腿，瓶子，圆筒等',
        modelDefaultParameters: {
          topRadius: {
            name: '顶半径',
            value: 60,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          bottomRadius: {
            name: '底半径',
            value: 60,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          height: {
            name: '高',
            value: 100,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          color: {
            name: '颜色',
            value: 'white',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          image: {
            name: '贴图',
            value: b,
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          position: {
            value: [0, 0, 0],
            name: '位置',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          },
          rotation: {
            value: [0, 0, 0],
            name: '旋转角度',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          }
        }
      }
    ),
    g.Default.register(
      'twaver.sphere',
      function (a, b) {
        var c = g.Default.createSphere(a)
        return b && b(c), c
      }, {
        category: '基本模型',
        type: 'mono.Element',
        name: '球体',
        icon: 'model/idc/icons/sphere.png',
        description: '球体是make中提供的最基本模型，支持更改半径的参数。可以更改这些参数扩展出各个球体形状的模型，比如圆球等',
        modelDefaultParameters: {
          radius: {
            name: '半径',
            value: 80,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          color: {
            name: '颜色',
            value: '#F5F5F5',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          image: {
            name: '贴图',
            value: b,
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          position: {
            value: [0, 0, 0],
            name: '位置',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          },
          rotation: {
            value: [0, 0, 0],
            name: '旋转角度',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          }
        }
      }
    ),
    g.Default.register(
      'twaver.polygon',
      function (a, b) {
        var c = g.Default.createPolygon(a)
        return b && b(c), c
      }, {
        category: '基本模型',
        type: 'mono.Element',
        name: '多边形',
        icon: 'model/idc/icons/polygon.png',
        description: '多边形是make中提供的最基本模型，支持更改半径，高度，边数的参数。可以更改这些参数扩展出各个多边形状的模型，比如多边形柱子，多边形箱子，各种支架等',
        modelDefaultParameters: {
          color: {
            name: '颜色',
            value: 'white',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          image: {
            name: '贴图',
            value: b,
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          topRadius: {
            name: '顶半径',
            value: 100,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          bottomRadius: {
            name: '底半径',
            value: 100,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          height: {
            name: '高',
            value: 200,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          radialSegments: {
            name: '边数',
            value: 3,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          position: {
            value: [0, 0, 0],
            name: '位置',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          },
          rotation: {
            value: [0, 0, 0],
            name: '旋转角度',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          }
        }
      }
    ),
    g.Default.register(
      'twaver.torus',
      function (a, b) {
        var c = g.Default.createTorus(a)
        return b && b(c), c
      }, {
        category: '基本模型',
        type: 'mono.Element',
        name: '圆环',
        icon: 'model/idc/icons/torus.png',
        description: '圆环体是make中提供的最基本模型，支持更改半径，高度，扁平程度，管半径的参数。可以更改这些参数扩展出各个圆环体形状的模型，比如轮胎等',
        modelDefaultParameters: {
          color: {
            name: '颜色',
            value: 'white',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          image: {
            name: '贴图',
            value: b,
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          radius: {
            name: '半径',
            value: 50,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          tube: {
            name: '内外径差',
            value: 30,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          tubularSegments: {
            name: '扁平程度',
            value: 3,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          radialSegments: {
            name: '边数',
            value: 6,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          position: {
            value: [0, 0, 0],
            name: '位置',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          },
          rotation: {
            value: [0, 0, 0],
            name: '旋转角度',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          }
        }
      }
    )
  var m = 0
  g.Default.register(
      'twaver.combo',
      function (a, b) {
        var c = 'pack_' + m++,
          d = a.data
        if (d && mono.Utils.isArray(d)) {
          for (var e = null, f = null, h = 0; h < d.length; h++) {
            (f = g.Default.load(d[h])),
            e ? f.setParent(e) : (e = f),
              f.setClient ?
              f.setClient('pack', c) :
              ((f.client = f.client || {}), (f.client.pack = c))
          }
          return b && b(e), e
        }
      }, {
        type: 'mono.Element',
        name: '组合模型',
        description: '组合模型，可以把多个不同的模型组合在一块，组成一个新的模型，传如参数是一个数组'
      }
    ),
    (g.Default.registerObj = function (a, b, c, d, e) {
      var f = function (a, d) {
        return (
          (a.name = b),
          (a.path = c),
          e == 0 ? (a.showShadow = !1) : (a.showShadow = !0),
          a.merged == null && (a.merged = !0),
          g.Default.createObj(a, d)
        )
      };
      (d = d || {}), (d.async = !0), g.Default.register(a, f, d)
    }),
    (g.Utils2D = {
      create2dShapeNode: function (a) {
        var b = a.position || [0, 0, 0],
          c = a.data,
          d = a.image,
          e = (a.objType, a.objectId),
          f = a.closed,
          h = new g.Default.WallShapeNode(e)
        a.objType == 'innerWall' ?
          (h = new g.Default.InnerWallShapeNode(e)) :
          a.objType == 'floor' ?
          (h = new g.Default.FloorShapeNode(e)) :
          a.objType == 'cable' && (h = new g.Default.LineWidthShapeNode(e))
        var i = g.Default.create2dShapePath(c, b)
        return (
          g.Default.objectWrapper(h, 'id', function () {
            return this.getClient('id')
          }),
          g.Default.objectWrapper(h, 'objectId', function () {
            return this.getId()
          }),
          h.setSegments(i.segments),
          h.setPoints(i.points),
          f && h.setClient('closed', !0),
          d && h.setClient('imageSrc', d),
          g.Default.setObject2dCSProps(h, a),
          h
        )
      },
      create2dShapePath: function (a, b) {
        var c = new twaver.List(),
          d = new twaver.List()
        if (a.length > 0) {
          if ((c.add('moveto'), a[0] instanceof Array)) {
            d.add({
              x: parseFloat(a[0][0]) + parseFloat(b[0]),
              y: parseFloat(a[0][1]) + parseFloat(b[2])
            })
            for (var e = 1; e < a.length; e++) {
              var f = a[e]
              f[0] == 'c' ?
                (c.add('quadto'),
                  d.add({
                    x: parseFloat(f[1]) + parseFloat(b[0]),
                    y: parseFloat(f[2]) + parseFloat(b[2])
                  }),
                  d.add({
                    x: parseFloat(f[3]) + parseFloat(b[0]),
                    y: parseFloat(f[4]) + parseFloat(b[2])
                  })) :
                (c.add('lineto'),
                  d.add({
                    x: parseFloat(f[0]) + parseFloat(b[0]),
                    y: parseFloat(f[1]) + parseFloat(b[2])
                  }))
            }
          } else {
            d.add({
              x: parseFloat(a[0]) + parseFloat(b[0]),
              y: parseFloat(a[1]) + parseFloat(b[2])
            })
            for (var e = 2; e < a.length; e += 2) {
              c.add('lineto'),
                d.add({
                  x: parseFloat(a[e]) + parseFloat(b[0]),
                  y: parseFloat(a[e + 1]) + parseFloat(b[2])
                })
            }
          }
        }
        return {
          segments: c,
          points: d
        }
      },
      setObject2dCSProps: function (a, b) {
        var c = b.style,
          d = b.client
        if (c)
          for (var e in c) a.setStyle(e, c[e])
        if (d)
          for (var e in d) a.setClient(e, d[e])
      },
      createBlockObject: function (a, b) {
        var c = a.objectId,
          d = new g.Default.Block(c)
        b == 'door' ?
          (d = new g.Default.Door(c)) :
          b == 'window' && (d = new g.Default.Window(c)),
          a.width && d.setClient('length', a.width)
        var e = a.client || {}
        return (
          d.setClient('edgeIndex', e.edgeIndex || 1),
          d.setClient('offset', e.offset || 0),
          g.Default.setObject2dCSProps(d, a),
          d
        )
      },
      createNode: function (a) {
        var b = a.position || [0, 0, 0],
          c = a.rotation || [0, 0, 0],
          d = a.width || 50,
          e = a.depth || 50,
          f = a.image,
          h = a.objectId,
          i = new twaver.Follower(h)
        return (
          g.Default.objectWrapper(i, 'id', function () {
            return this.getClient('id')
          }),
          g.Default.objectWrapper(i, 'objectId', function () {
            return this.getId()
          }),
          i.setSize(parseFloat(d), parseFloat(e)),
          i.setCenterLocation({
            x: parseFloat(b[0]),
            y: parseFloat(b[2])
          }),
          i.setAngle(c[1]),
          i.setClient('positionY', b[1]),
          f ?
          i.setImageUrl(f) :
          (i.setStyle('body.type', 'vector'),
            i.setStyle('vector.shape', 'rectangle')),
          i.setStyle('select.style', 'border'),
          i.setStyle('select.color', '#F07819'),
          i.setStyle('select.width', 0.7),
          i.setStyle('vector.outline.width', 1),
          i.setStyle('vector.outline.color', '#BEC9BE'),
          i.setStyle('label.position', 'center'),
          g.Default.setObject2dCSProps(i, a),
          i
        )
      },
      createFollower: function (a) {
        var b = a,
          a = {}
        g.Default.copyProperties(b, a),
          (a.id = a.objectId || _twaver.id()),
          (a.depth = a.depth || 5),
          (a.position = a.position || [0, 0, 0]),
          (a.rotation = a.rotation || [0, 0, 0])
        var c = new twaver.Follower(a)
        return (
          g.Default.objectWrapper(c, 'id', function () {
            return c.getClient('id')
          }),
          g.Default.objectWrapper(c, 'objectId', function () {
            return c.getId()
          }),
          g.Default.objectWrapper(c, 'depth'),
          g.Default.objectWrapper(c, 'position', null, function (a) {
            return this.setLocation({
              x: a[0],
              y: a[1]
            }), a
          }),
          g.Default.objectWrapper(c, 'rotation', null, function (a) {
            return this.setAngle(a[2]), a
          }),
          (c.depth = a.depth),
          (c.position = a.position),
          (c.rotation = a.rotation),
          c.addPropertyChangeListener(function (a) {
            var b = a.property,
              c = a.source
            b == 'location' ?
              ((c.position[0] = a.newValue.x), (c.position[1] = a.newValue.y)) :
              b == 'angle' && (c.rotation[2] = a.newValue)
          }, c),
          a.x && c.setX(a.x),
          a.y && c.setY(a.y),
          (c.z = a.z),
          a.location &&
          (a.location instanceof Array ?
            c.setLocation({
              x: a.location[0],
              y: a.location[1]
            }) :
            c.setLocation(a.location)),
          a.centerLocation &&
          (a.centerLocation instanceof Array ?
            c.setCenterLocation({
              x: a.centerLocation[0],
              y: a.centerLocation[1]
            }) :
            c.setCenterLocation(a.centerLocation)),
          a.size && c.setSize(a.size),
          a.angle && c.setAngle(a.angle),
          c.setStyle('select.style', 'border'),
          c.setStyle('select.color', '#F07819'),
          c.setStyle('select.width', 0.7),
          c.setStyle('vector.outline.color', '#BEC9BE'),
          g.Default.setObject2dCSProps(c, a),
          c
        )
      },
      align: function (a, b) {
        if (b && a && !(a.size() < 2)) {
          var c = this['_align_' + b]
          c && c.call(this, a)
        }
      },
      _align_up: function (a) {
        for (var b = a.get(0).getLocation().y, c = 1; c < a.size(); c++) {
          b = Math.min(b, a.get(c).getLocation().y)
        }
        a.forEach(function (a) {
          a.setY(b)
        })
      },
      _align_down: function (a) {
        for (
          var b = a.get(0).getLocation().y + a.get(0).getSize().height, c = 1; c < a.size(); c++
        ) {
          b = Math.max(b, a.get(c).getLocation().y + a.get(c).getSize().height)
        }
        a.forEach(function (a) {
          a.setY(b - a.getSize().height)
        })
      },
      _align_left: function (a) {
        for (var b = a.get(0).getLocation().x, c = 1; c < a.size(); c++) {
          b = Math.min(b, a.get(c).getLocation().x)
        }
        a.forEach(function (a) {
          a.setX(b)
        })
      },
      _align_right: function (a) {
        for (
          var b = a.get(0).getLocation().x + a.get(0).getSize().width, c = 1; c < a.size(); c++
        ) {
          b = Math.max(b, a.get(c).getLocation().x + a.get(c).getSize().width)
        }
        a.forEach(function (a) {
          a.setX(b - a.getSize().width)
        })
      },
      _align_center: function (a) {
        for (var b = 0, c = 0; c < a.size(); c++) {
          b += a.get(c).getCenterLocation().y
        }
        var d = b / a.size()
        a.forEach(function (a) {
          a.setY(d - a.getSize().height / 2)
        })
      },
      _align_middle: function (a) {
        for (var b = 0, c = 0; c < a.size(); c++) {
          b += a.get(c).getCenterLocation().x
        }
        var d = b / a.size()
        a.forEach(function (a) {
          a.setX(d - a.getSize().width / 2)
        })
      },
      flow: function (a, b, c) {
        if (b && a && !(a.size() < 2)) {
          var d = this['_flow_' + b]
          d && d.call(this, a, c)
        }
      },
      _flow_hor: function (a, b) {
        this.sort(a, function (a, b) {
            return a.getLocation().y - b.getLocation().y
          }),
          this.sort(a, function (a, b) {
            return a.getLocation().x - b.getLocation().x
          })
        for (var c = a.get(0), d = 1; d < a.size(); d++) {
          var e = a.get(d),
            f = c.getLocation().x
          e.setX(f + b), (c = e)
        }
      },
      _flow_ver: function (a, b) {
        this.sort(a, function (a, b) {
            return a.getLocation().x - b.getLocation().x
          }),
          this.sort(a, function (a, b) {
            return a.getLocation().y - b.getLocation().y
          })
        for (var c = a.get(0), d = 1; d < a.size(); d++) {
          var e = a.get(d),
            f = c.getLocation().y
          e.setY(f + b), (c = e)
        }
      },
      sort: function (a, b) {
        for (var c, d, e, f, g = a.size(), h = 0; g > h; h++) {
          c = a.get(h)
          for (var i = h + 1; g > i; i++) {
            (d = a.get(i)),
            (e = b ? b(c, d) : 0),
            e > 0 && ((f = d), (d = c), (c = f), a.set(h, c), a.set(i, d))
          }
        }
      },
      wrapper: function (a, b) {
        g.Default.objectWrapper(a, 'id', function () {
            return this.getClient('id')
          }),
          g.Default.objectWrapper(a, 'objectId', function () {
            return this.getId()
          }),
          g.Default.objectWrapper(a, 'width'),
          g.Default.objectWrapper(a, 'height'),
          g.Default.objectWrapper(a, 'depth'),
          g.Default.objectWrapper(a, 'px'),
          g.Default.objectWrapper(a, 'py'),
          g.Default.objectWrapper(a, 'pz'),
          g.Default.objectWrapper(a, 'rx'),
          g.Default.objectWrapper(a, 'ry'),
          g.Default.objectWrapper(a, 'rz'),
          g.Default.objectWrapper(a, 'position'),
          g.Default.objectWrapper(a, 'rotation'),
          b &&
          b.forEach(function (b) {
            g.Default.objectWrapper(a, b)
          })
      }
    })
  for (var l in g.Utils2D) g.Default[l] = g.Utils2D[l]
  var n = {
      cisco_2950: {
        height: 1,
        data: [{
            id: 'twaver.idc.cisco_2950.panel'
          },
          {
            position: [412, 28, 0],
            id: 'twaver.idc.port_02.panel'
          },
          {
            position: [432, 28, 0],
            id: 'twaver.idc.port_02.panel'
          },
          {
            client: {
              bid: '1'
            },
            position: [44, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '2'
            },
            position: [58, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '3'
            },
            position: [73, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '4'
            },
            position: [88, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '5'
            },
            position: [103, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '6'
            },
            position: [118, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '7'
            },
            position: [133, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '8'
            },
            position: [147, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '9'
            },
            position: [165, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '10'
            },
            position: [180, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '11'
            },
            position: [195, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '12'
            },
            position: [210, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '13'
            },
            position: [225, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '14'
            },
            position: [240, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '15'
            },
            position: [255, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '16'
            },
            position: [269, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '17'
            },
            position: [288, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '18'
            },
            position: [303, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '19'
            },
            position: [318, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '20'
            },
            position: [333, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '21'
            },
            position: [348, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '22'
            },
            position: [363, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '23'
            },
            position: [377, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '24'
            },
            position: [391, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          }
        ]
      },
      cisco_2960: {
        height: 1,
        data: [{
            id: 'twaver.idc.cisco_2960.panel'
          },
          {
            client: {
              bid: '1'
            },
            position: [214, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '2'
            },
            position: [214, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '3'
            },
            position: [229, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '4'
            },
            position: [229, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '5'
            },
            position: [244, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '6'
            },
            position: [244, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '7'
            },
            position: [259, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '8'
            },
            position: [259, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '9'
            },
            position: [274, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '10'
            },
            position: [274, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '11'
            },
            position: [289, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '12'
            },
            position: [289, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '13'
            },
            position: [309, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '14'
            },
            position: [309, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '15'
            },
            position: [324, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '16'
            },
            position: [324, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '17'
            },
            position: [339, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '18'
            },
            position: [339, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '19'
            },
            position: [354, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '20'
            },
            position: [354, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '21'
            },
            position: [369, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '22'
            },
            position: [369, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '23'
            },
            position: [384, 14, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '24'
            },
            position: [384, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '25'
            },
            position: [408, 27, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '26'
            },
            position: [432, 27, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          }
        ]
      },
      h3c_s1050t: {
        height: 1,
        data: [{
            id: 'twaver.idc.h3c_s1050t.panel'
          },
          {
            client: {
              bid: '9'
            },
            position: [74, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '11'
            },
            position: [90, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '13'
            },
            position: [106, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '15'
            },
            position: [122, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '17'
            },
            position: [138, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '19'
            },
            position: [154, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '21'
            },
            position: [170, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '2'
            },
            position: [10, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '4'
            },
            position: [26, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '6'
            },
            position: [42, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '8'
            },
            position: [58, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '10'
            },
            position: [74, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '12'
            },
            position: [90, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '14'
            },
            position: [106, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '16'
            },
            position: [122, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '18'
            },
            position: [138, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '20'
            },
            position: [154, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '22'
            },
            position: [170, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '24'
            },
            position: [186, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '1'
            },
            position: [10, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '3'
            },
            position: [26, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '5'
            },
            position: [42, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '7'
            },
            position: [58, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '23'
            },
            position: [186, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '25'
            },
            position: [210, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '26'
            },
            position: [210, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '27'
            },
            position: [226, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '28'
            },
            position: [226, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '29'
            },
            position: [242, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '30'
            },
            position: [242, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '31'
            },
            position: [258, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '32'
            },
            position: [258, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '33'
            },
            position: [274, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '34'
            },
            position: [274, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '35'
            },
            position: [290, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '36'
            },
            position: [290, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '37'
            },
            position: [306, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '38'
            },
            position: [306, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '39'
            },
            position: [322, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '40'
            },
            position: [322, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '41'
            },
            position: [338, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '42'
            },
            position: [338, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '43'
            },
            position: [354, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '44'
            },
            position: [354, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '45'
            },
            position: [370, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '46'
            },
            position: [370, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '47'
            },
            position: [386, 12, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '48'
            },
            position: [386, 24, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '49'
            },
            position: [416, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '50'
            },
            position: [435, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          }
        ]
      },
      h3c_s1224: {
        height: 1,
        data: [{
            id: 'twaver.idc.h3c_s1224.panel'
          },
          {
            client: {
              bid: '1'
            },
            position: [29, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '2'
            },
            position: [29, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '3'
            },
            position: [49, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '4'
            },
            position: [49, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '5'
            },
            position: [69, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '6'
            },
            position: [69, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '7'
            },
            position: [88, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '8'
            },
            position: [88, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '9'
            },
            position: [125, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '10'
            },
            position: [125, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '11'
            },
            position: [145, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '12'
            },
            position: [145, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '13'
            },
            position: [165, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '14'
            },
            position: [165, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '15'
            },
            position: [185, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '16'
            },
            position: [185, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '17'
            },
            position: [222, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '18'
            },
            position: [222, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '19'
            },
            position: [242, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '20'
            },
            position: [242, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '21'
            },
            position: [262, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '22'
            },
            position: [262, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '23'
            },
            position: [281, 12, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '24'
            },
            position: [281, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          }
        ]
      },
      hw_s2700: {
        height: 1,
        data: [{
            id: 'twaver.idc.hw_s2700.panel'
          },
          {
            position: [33, 14, 0],
            id: 'twaver.idc.jack3.panel'
          },
          {
            position: [67, 14, 0],
            id: 'twaver.idc.switch_01.panel'
          },
          {
            client: {
              bid: '1'
            },
            position: [98, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '2'
            },
            position: [98, 26, 10],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '3'
            },
            position: [113, 13, 10],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '4'
            },
            position: [113, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '5'
            },
            position: [128, 13, 20],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '6'
            },
            position: [128, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '7'
            },
            position: [143, 13, 30],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '8'
            },
            position: [143, 26, 20],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '9'
            },
            position: [167, 13, 10],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '10'
            },
            position: [167, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '11'
            },
            position: [182, 13, 20],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '12'
            },
            position: [182, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '13'
            },
            position: [197, 13, 30],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '14'
            },
            position: [197, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '15'
            },
            position: [212, 13, 40],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '16'
            },
            position: [212, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '17'
            },
            position: [237, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '18'
            },
            position: [237, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '19'
            },
            position: [252, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '20'
            },
            position: [252, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '21'
            },
            position: [267, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '22'
            },
            position: [267, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '23'
            },
            position: [282, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '24'
            },
            position: [282, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '29'
            },
            position: [399, 25, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '27'
            },
            position: [379, 13, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '28'
            },
            position: [379, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '26'
            },
            position: [358, 26, 0],
            id: 'twaver.idc.port_01.panel'
          },
          {
            client: {
              bid: '25'
            },
            position: [340, 26, 0],
            id: 'twaver.idc.port_01.panel'
          }
        ]
      },
      hw_s3700: {
        height: 1,
        data: [{
            id: 'twaver.idc.hw_s3700.panel'
          },
          {
            position: [35, 15, 0],
            id: 'twaver.idc.jack3.panel'
          },
          {
            position: [70, 15, 0],
            id: 'twaver.idc.switch_01.panel'
          },
          {
            client: {
              bid: '1'
            },
            position: [98, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '2'
            },
            position: [98, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '3'
            },
            position: [113, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '4'
            },
            position: [113, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '5'
            },
            position: [128, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '6'
            },
            position: [128, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '7'
            },
            position: [143, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '8'
            },
            position: [143, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '9'
            },
            position: [168, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '10'
            },
            position: [168, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '11'
            },
            position: [183, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '12'
            },
            position: [183, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '13'
            },
            position: [198, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '14'
            },
            position: [198, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '15'
            },
            position: [213, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '16'
            },
            position: [213, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '17'
            },
            position: [237, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '18'
            },
            position: [237, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '19'
            },
            position: [252, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '20'
            },
            position: [252, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '21'
            },
            position: [267, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '22'
            },
            position: [267, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '23'
            },
            position: [282, 13, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '24'
            },
            position: [282, 26, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '30'
            },
            position: [379.3911044003451, 25.61816220880069, 0],
            rotation: [0, 0, 180],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '31'
            },
            position: [399, 25, 0],
            id: 'twaver.idc.rj4502.panel'
          },
          {
            client: {
              bid: '29'
            },
            position: [379, 13, 0],
            id: 'twaver.idc.rj4503.panel'
          },
          {
            client: {
              bid: '28'
            },
            position: [358, 26, 0],
            id: 'twaver.idc.port_01.panel'
          },
          {
            client: {
              bid: '27'
            },
            position: [341, 26, 0],
            id: 'twaver.idc.port_01.panel'
          },
          {
            client: {
              bid: '26'
            },
            position: [321, 26, 0],
            id: 'twaver.idc.port_01.panel'
          },
          {
            client: {
              bid: '25'
            },
            position: [304, 26, 0],
            id: 'twaver.idc.port_01.panel'
          }
        ]
      }
    },
    o = function (a) {
      return a.indexOf('/') > 0 ? a : g.Default.path + 'model/idc/images/' + a
    },
    p = function (a) {
      return a.indexOf('/') > 0 ? a : g.Default.path + 'model/idc/icons/' + a
    },
    q = function () {
      return {
        bid: {
          value: '',
          name: '业务ID',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        position: {
          value: [0, 0, 0],
          name: '位置',
          type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
          editable: !1
        },
        rotation: {
          value: [0, 0, 0],
          name: '旋转角度',
          type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
          editable: !1
        }
      }
    },
    r = function (a, b, c) {
      var d = {
          width: {
            value: a,
            name: '宽',
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          height: {
            value: b,
            name: '高',
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          depth: {
            value: c,
            name: '深',
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          }
        },
        e = q()
      return g.Default.copyProperties(e, d), d
    },
    s = function (a) {
      var a = a || '42U'
      return r(60, a, 80)
    },
    t = function (a) {
      var b = s(a),
        c = {
          cutWidth: {
            name: '内宽',
            value: 45.5,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          frontImage: {
            name: '正面图片',
            value: '',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          backImage: {
            name: '背面图片',
            value: 'rack_back_door.png',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          topImage: {
            name: '顶部图片',
            value: 'rack_top.png',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          sideImage: {
            name: '侧面图片',
            value: 'rack_side.png',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          fontDoorImage: {
            name: '门正面图片',
            value: 'rack_front_door.jpg',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          backDoorImage: {
            name: '门反面图片',
            value: 'rack_door_back.png',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          insideTopImage: {
            name: '内部顶贴图',
            value: 'inside_top.jpg',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          insideSideImage: {
            name: '内部侧贴图',
            value: 'inside_side.jpg',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          insideBackImage: {
            name: '内部后贴图',
            value: 'inside_back.jpg',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          doorAngle: {
            name: '机柜开门角度',
            value: -150,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          evnmap: {
            name: '机柜环境贴图',
            value: 'envmap1',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          reflectRatio: {
            name: '环境反射率',
            value: 1,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          }
        }
      return g.Default.copyProperties(c, b), b
    },
    u = function (a, b) {
      var a = parseInt(a),
        c = o('rack.png')
      return (
        b < 100 ?
        (c = o('rack' + a + 'u.png')) :
        a == 42 ?
        (c = o('rack-120.png')) :
        a == 47 && (c = o('rack47U-120.png')),
        c
      )
    }
  g.Default.register(
    'twaver.idc.rack',
    function (a, b) {
      (a = a || {}), (a.client = a.client || {}), (a.style = a.style || {})
      var c = a.position || [0, 0, 0],
        d = c[0],
        e = c[1],
        f = c[2],
        h = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
        i = a.width,
        j = a.height,
        k = a.depth,
        l = a.cutWidth,
        m = o(a.backImage),
        n = o(a.sideImage),
        p = o(a.topImage),
        q = a.frontImage || o('rack' + parseInt(j) + 'u.png'),
        r = g.Default.getRackHeight(j),
        s = a.doorAngle,
        t = g.Default.getEnvMap(a.evnmap),
        u = a.reflectRatio,
        v = o(a.insideTopImage),
        w = o(a.insideSideImage),
        x = o(a.insideBackImage),
        y = o(a.fontDoorImage),
        z = o(a.backDoorImage),
        A = a.doorTransparent || !1,
        B = 2 * g.Default.RACK_OFFSET_Y,
        C = new mono.Cube(i, r, k)
      C.s({
        'm.color': '#666666',
        'm.ambient': '#ffffff',
        'm.specular': '#e5e5e5',
        'm.type': 'phong',
        'm.specularStrength': 3,
        'left.m.texture.image': n,
        'right.m.texture.image': n,
        'top.m.texture.image': p,
        'bottom.m.texture.image': p,
        'back.m.texture.image': m,
        'front.m.texture.image': q,
        'front.m.specularStrength': 2
      })
      var D = new mono.Cube(l, r - B + 1, 0.7 * k)
      D.s({
          'm.type': 'basic',
          'm.lightmap.image': g.Default.getImagePath('outside_lightmap.jpg'),
          'back.m.texture.image': x,
          'left.m.texture.image': w,
          'left.m.texture.flipX': !0,
          'right.m.texture.image': w,
          'top.m.texture.image': v,
          'top.m.texture.flipY': !0,
          'bottom.m.texture.image': v
        }),
        D.setPosition(0, 0, C.getDepth() / 2 - D.getDepth() / 2 + 2)
      var E
      E = a.objectId ?
        new mono.ComboNode({
          id: a.objectId,
          combos: [C, D],
          operators: ['-']
        }) :
        new mono.ComboNode([C, D], ['-'])
      for (var F in a.client) E.setClient(F, a.client[F])
      var G = new mono.Cube(i, r, 2)
      return (
        G.s({
          'm.type': 'phong',
          'm.transparent': A,
          'front.m.texture.image': y,
          'back.m.texture.image': z,
          'm.envmap.image': t,
          'm.reflectRatio': u
        }),
        G.setParent(E),
        G.setClient(
          'animation',
          'rotation:right:{}:1000:0:bounceOut'.format(s || '-150')
        ),
        G.setClient('type', 'rack_door'),
        G.setClient('inbuilt', !0),
        G.setPosition(0, 0, k / 2 + 1),
        (E.rackDoor = G),
        E.setPosition(d, 0, f),
        g.Default.setPositionY(E, e),
        E.setClient('type', 'rack'),
        E.setClient('showShadow', !0),
        E.setRotation(h[0], h[1], h[2]),
        g.Default.setObject3dCSProps(E, a),
        b && b(E),
        E
      )
    }, {
      name: '机柜',
      category: '机柜模型',
      description: '机房最常见的模型。机柜是由机柜的主体和机柜门组成的，机柜门支持动画打开，关闭。 支持42U-47U高度，默认42U的高度。模型上还支持常见的长，宽，机柜贴图的设置',
      icon: p('rack.png'),
      type: 'rack',
      sdkCategory: 'rack',
      modelDefaultParameters: t('42U')
    }
  )
  for (
    var v = function (a) {
        g.Default.register(
          'twaver.idc.rack' + a,
          function (b, c) {
            var d = {
              id: 'twaver.idc.rack',
              height: a + 'U'
            }
            return g.Default.copyProperties(b, d), g.Default.load(d, c)
          }, {
            childrenSize: a,
            name: a + 'U机柜',
            description: a +
              'U机柜, 机房最常见的模型。机柜是由机柜的主体和机柜门组成的，机柜门支持动画打开，关闭',
            icon: p('rack.png'),
            category: '机柜模型',
            type: 'mono.Element',
            sdkCategory: 'rack',
            modelDefaultParameters: t(a + 'U')
          }
        )
      },
      w = 42; w <= 47; w++
  ) {
    v(w)
  }
  g.Default.register(
    'twaver.idc.rack1',
    function (a, b) {
      var c = a.position || [0, 0, 0],
        d = c[0],
        e = c[1],
        f = c[2],
        h = a.width,
        i = a.height,
        j = a.depth,
        k = g.Default.getRackHeight(i),
        l = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
        m = o('white.png'),
        n = 2 * g.Default.RACK_OFFSET_Y,
        p = u(i, h),
        q = new mono.Cube(h, k, j)
      q.s({
        'm.type': 'phong',
        'm.color': '#557E7A',
        'm.ambient': '#557E7A',
        'm.specularStrength': 50,
        'm.lightmap.image': g.Default.getImagePath('outside_lightmap.jpg'),
        'm.normalmap.image': g.Default.getImagePath('metal_normalmap.jpg'),
        'm.specularmap.image': g.Default.getImagePath('outside_lightmap.jpg'),
        'm.envmap.image': g.Default.getEnvMap('envmap1'),
        'front.m.normalmap.image': g.Default.getImagePath(
          'outside_lightmap.jpg'
        ),
        'front.m.texture.image': p,
        'front.m.texture.repeat': new mono.Vec2(1, 1),
        'front.m.specularmap.image': o('white.png'),
        'front.m.specularStrength': 200,
        'front.m.envmap.image': [m, m, m, m, m, m]
      })
      var r = new mono.Cube(45.5, k - n, 0.7 * j)
      r.s({
          'm.type': 'basic',
          'm.color': '#888888',
          'm.ambient': '#888888',
          'm.lightmap.image': g.Default.getImagePath('inside_lightmap.jpg'),
          'left.m.texture.image': o('rack_panel.png'),
          'right.m.texture.image': o('rack_panel.png'),
          'back.m.texture.image': o('rack_panel.png')
        }),
        r.setPosition(0, 0, q.getDepth() / 2 - r.getDepth() / 2 + 2)
      var s
      s = a.objectId ?
        new mono.ComboNode({
          id: a.objectId,
          combos: [q, r],
          operators: ['-']
        }) :
        new mono.ComboNode([q, r], ['-'])
      var t = new mono.Cube(h, k, 2)
      return (
        t.s({
          'm.type': 'phong',
          'm.color': '#A5F1B5',
          'm.ambient': '#A4F4EC',
          'front.m.texture.image': o('rack_front_door.jpg'),
          'back.m.texture.image': o('rack_door_back.png'),
          'm.envmap.image': g.Default.getEnvMap('envmap1')
        }),
        t.setParent(s),
        t.setPosition(0, 0, j / 2 + 1),
        t.setClient('type', 'rack_door'),
        t.setClient('animation', 'rotation:right:-150:1000:0:bounceOut'),
        t.setClient('inbuilt', !0),
        s.p(d, 0, f),
        s.setRotation(l[0], l[1], l[2]),
        g.Default.setPositionY(s, e),
        s.setClient('type', 'rack'),
        g.Default.setObject3dCSProps(s, a),
        b && b(s),
        s
      )
    }, {
      name: '机柜1',
      description: '机房最常见的模型。和"twaver.idc.rack"区别在于这种类型的机柜加了环境贴图，是另外一种风格的机柜样式',
      icon: p('rack1.png'),
      category: '机柜模型',
      type: 'rack',
      sdkCategory: 'rack',
      modelDefaultParameters: s('47U')
    }
  )
  var x = function () {
    var a = s(),
      b = {
        image: {
          name: '贴图',
          value: 'rack_wrap.jpg',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }
      }
    return g.Default.copyProperties(b, a), a
  }
  g.Default.register(
    'twaver.idc.simpleRack',
    function (a, b) {
      var c = a.position || [0, 0, 0],
        d = c[0],
        e = c[1],
        f = c[2],
        h = a.width,
        i = a.height,
        j = a.depth
      i = g.Default.getRackHeight(i)
      var k,
        l = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
        m = o(a.image)
      return (
        (k = a.objectId ?
          new mono.Cube({
            id: a.objectId,
            width: h,
            height: i,
            depth: j
          }) :
          new mono.Cube(h, i, j)),
        k.s({
          'm.type': 'phong',
          'm.color': '#666666',
          'm.ambient': '#ffffff',
          'm.specular': '#e5e5e5',
          'm.specularStrength': 2,
          'm.texture.image': m
        }),
        k.setWrapMode('six-each'),
        k.p(d, 0, f),
        k.setRotation(l[0], l[1], l[2]),
        g.Default.setPositionY(k, e),
        k.setClient('type', 'rack'),
        k.setClient('showShadow', !0),
        g.Default.setObject3dCSProps(k, a),
        b && b(k),
        k
      )
    }, {
      name: '简单机柜',
      description: '机柜的简单实现，一个cube加一个贴图，外观和twaver.idc.rack一样，但没有门和内部结构，可用于不关注内部细节时显示',
      icon: p('racks.png'),
      category: '机柜模型',
      type: 'rack',
      sdkCategory: 'rack',
      modelDefaultParameters: x()
    }
  )
  var y = function (a) {
      var b = o('head_rack.png')
      return a == 220 && (b = o('head_rack1.jpg')), b
    },
    z = function () {
      var a = r(60, 200, 80)
      return (
        (a.color = {
          name: '颜色',
          value: 'white',
          type: g.Default.PARAMETER_TYPE_COLOR,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }),
        (a.frontImage = {
          name: '前贴图',
          value: '',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }),
        (a.backImage = {
          name: '后贴图',
          value: 'head_rack_side.png',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }),
        (a.topImage = {
          name: '顶图片',
          value: 'head_rack_side.png',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }),
        (a.sideImage = {
          name: '边贴图',
          value: 'head_rack_side.png',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }),
        a
      )
    }
  g.Default.register(
    'twaver.idc.headerRack',
    function (a, b) {
      var c = a.position || [0, 0, 0],
        d = c[0],
        e = c[1],
        f = c[2],
        h = a.width,
        i = a.height,
        j = a.depth,
        k = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
        l = a.color,
        m = o(a.sideImage),
        n = o(a.topImage) || m,
        p = o(a.backImage) || m,
        q = a.frontImage
      q || (q = y(i))
      var r
      return (
        (r = a.objectId ?
          new mono.Cube({
            id: a.objectId,
            width: h,
            height: i,
            depth: j
          }) :
          new mono.Cube(h, i, j)),
        r.s({
          'm.type': 'phong',
          'm.color': l,
          'm.ambient': l,
          'm.specular': '#FFFFFF',
          'm.specularStrength': 3,
          'm.lightmap.image': g.Default.getImagePath('outside_lightmap.jpg'),
          'm.specularmap.image': g.Default.getImagePath('outside_lightmap.jpg'),
          'm.texture.image': m,
          'top.m.texture.image': n,
          'back.m.texture.image': p,
          'front.m.texture.image': q,
          'front.m.envmap.image': g.Default.getEnvMap('envmap1'),
          'm.reflectRatio': 0.2
        }),
        r.p(d, 0, f),
        r.setRotation(k[0], k[1], k[2]),
        g.Default.setPositionY(r, e),
        r.setClient('type', 'header_rack'),
        r.setClient('showShadow', !0),
        g.Default.setObject3dCSProps(r, a),
        b && b(r),
        r
      )
    }, {
      name: '列头柜',
      description: '机房常见设备之一，列头柜支持修改长，宽，高，颜色参数。',
      icon: p('headerRack.png'),
      category: '机柜模型',
      type: 'header_rack',
      sdkCategory: 'rack',
      modelDefaultParameters: z()
    }
  )
  var A = {
      1: 'equipment_front-1U.png',
      2: 'equipment_front-2U.png',
      3: 'equipment_front-3U.png',
      4: 'equipment_front-4U.png',
      5: 'equipment_front-5U.png',
      6: 'equipment_front-6U.png',
      7: 'equipment_front-7U.png',
      8: 'equipment_front-8U.png'
    },
    B = function (a, b) {
      var c = q(),
        d = {
          width: {
            value: 45,
            name: '宽',
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          height: {
            value: a,
            name: '高(U)',
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            editable: !1
          },
          depth: {
            value: 50,
            name: '深',
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          frontImage: {
            value: b || A[a],
            name: '正面贴图',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          }
        }
      return g.Default.copyProperties(c, d), d
    },
    C = function (a, b) {
      return {
        size: a,
        type: 'server',
        category: '设备模型',
        name: a + 'U设备',
        icon: p(b || 'server1.png'),
        description: a +
          'U的服务器设备。高度为U数，宽度默认是45cm。支持修改宽度，深度和贴图。',
        modelDefaultParameters: B(a)
      }
    }
  g.Default.register(
    'twaver.idc.equipment',
    function (a, b) {
      var c = a.position || [0, 0, 0],
        d = c[0],
        e = c[1],
        f = c[2],
        h = a.width,
        i = parseInt(a.height || 1),
        j = a.depth,
        k = 4.445 * i,
        l = A,
        m = a.cut,
        n = new mono.Cube(h - 2, k - 1, j)
      n.s({
        'm.color': '#666',
        'm.ambient': '#666',
        'm.type': 'phong',
        'm.side': mono.DoubleSide,
        'm.texture.image': o('rack_inside.png'),
        'm.lightmap.image': g.Default.getImagePath('outside_lightmap.jpg')
      })
      var p = new mono.Cube(parseFloat(h) + 5, parseFloat(k), 1),
        q = o('server.png')
      m || (q = o(a.frontImage || l[i])),
        p.s({
          'm.type': 'phong',
          'm.color': '#333',
          'm.ambient': '#333',
          'm.texture.image': o('rack_inside.png'),
          'front.m.transparent': !0,
          'm.side': mono.DoubleSide,
          'front.m.texture.image': q,
          'front.m.texture.repeat': new mono.Vec2(1, 1),
          'front.m.color': '#fff',
          'front.m.ambient': '#fff'
        }),
        p.p(0, 0, n.getDepth() / 2 + p.getDepth() / 2)
      var r
      if (
        ((r = a.objectId ?
            new mono.ComboNode({
              id: a.objectId,
              combos: [n, p],
              operators: ['+']
            }) :
            new mono.ComboNode([n, p], ['+'])),
          a.client)
      ) {
        for (var s in a.client) r.setClient(s, a.client[s])
      }
      return (
        r.setClient('animation', 'move:front:1:1000:0:bounceOut'),
        r.p(d, 0, f),
        g.Default.setPositionY(r, e),
        g.Default.setObject3dCSProps(r, a),
        b && b(r),
        r
      )
    },
    C(2, 'server2.png')
  )
  for (
    var D = function (a) {
        g.Default.register(
          'twaver.idc.equipment{}'.format(a),
          function (b, c) {
            var d = {
              id: 'twaver.idc.equipment',
              height: a
            }
            return g.Default.copyProperties(b, d), g.Default.load(d, c)
          },
          C(a, 'server{}.png'.format(a))
        )
      },
      w = 1; w <= 8; w++
  ) {
    D(w)
  }
  g.Default.register(
    'twaver.idc.equipment8-1',
    function (a, b) {
      return (
        (a.id = 'twaver.idc.equipment'),
        (a.height = a.height || 8),
        (a.cut = !0),
        g.Default.load(a, b)
      )
    }, {
      type: 'server',
      category: '设备模型',
      name: '8U机框',
      icon: p('server8-1.png'),
      description: 'U的服务器设备。这是一种挖空的机架，支持修改宽度和深度',
      modelDefaultParameters: B(8)
    }
  )
  var E = function () {
    var a = r(5, 50, 50)
    return (
      (a.color = {
        name: '颜色',
        value: 'white',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      }),
      (a.image = {
        value: 'card2.png',
        name: '贴图',
        type: g.Default.PARAMETER_TYPE_IMAGE,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      }),
      a
    )
  }
  g.Default.register(
    'twaver.idc.card',
    function (a, b) {
      var c = a.position || [0, 0, 0],
        d = c[0],
        e = c[1],
        f = c[2],
        h = a.width,
        i = a.height,
        j = a.depth,
        k = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
        l = a.color || 'white',
        m = o(a.image || 'card2.png'),
        n = [{
            type: 'cube',
            width: h,
            height: i,
            depth: 1,
            position: [0, 0, 0],
            rotation: k,
            op: '+',
            style: {
              'm.color': l,
              'm.ambient': l,
              'm.texture.image': o('gray.png'),
              'front.m.texture.image': m,
              'back.m.texture.image': m
            }
          },
          {
            type: 'cube',
            width: 1,
            height: 0.95 * i,
            depth: j,
            position: [0, 0, -j / 2],
            rotation: k,
            op: '+',
            style: {
              'm.color': l,
              'm.ambient': l,
              'm.texture.image': o('gray.png'),
              'left.m.texture.image': o('card_body.png'),
              'right.m.texture.image': o('card_body.png'),
              'left.m.texture.flipX': !0,
              'm.transparent': !0,
              'm.lightmap.image': g.Default.getImagePath('outside_lightmap.jpg')
            }
          }
        ],
        p = g.Default.createCombo(n, a.objectId)
      return p.p(d, e, f), g.Default.setObject3dCSProps(p, a), b && b(p), p
    }, {
      category: '设备模型',
      type: 'card',
      name: '板卡',
      icon: p('card.png'),
      description: '板卡',
      modelDefaultParameters: E()
    }
  )
  var F = function () {
    return {
      image: {
        name: '贴图',
        value: 'floor.jpg',
        type: g.Default.PARAMETER_TYPE_IMAGE,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      repeat: {
        name: '重复次数',
        value: 200,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      data: {
        name: '点位置',
        value: '',
        type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      position: {
        value: [0, 0, 0],
        name: '位置',
        type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
        editable: !1
      },
      rotation: {
        value: [0, 0, 0],
        name: '旋转角度',
        type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
        editable: !1
      }
    }
  }
  g.Default.register(
    'twaver.idc.floor',
    function (a, b) {
      var c = a.data,
        d = o(a.image),
        e = a.repeat,
        f = a.position || [0, 0, 0],
        h = {
          type: 'shapeNode',
          data: c,
          vertical: !0,
          repeat: e,
          position: f,
          client: {
            type: 'floor'
          },
          style: {
            'm.type': 'basic',
            'm.texture.image': d
          }
        },
        i = g.Default.createCombo([h])
      return g.Default.setObject3dCSProps(i, a), b && b(i), i
    }, {
      category: '房间模型',
      type: 'floor',
      name: '地板',
      icon: p('floor.png'),
      description: '地板是和墙，内墙一起使用的。用来创建3d机房的房间轮廓',
      modelDefaultParameters: F()
    }
  )
  var G = function () {
    var a = r(60, 260, 60)
    return (
      (a.color = {
        value: '#E8E8E8',
        name: '颜色',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      }),
      (a.topColor = {
        value: '#F7F7F7',
        name: '顶部颜色',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      }),
      (a.image = {
        value: '',
        name: '贴图',
        type: g.Default.PARAMETER_TYPE_IMAGE,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      }),
      a
    )
  }
  g.Default.register(
    'twaver.idc.column',
    function (a, b) {
      var c = a.width,
        d = a.height,
        e = a.depth,
        f = a.position || [0, 0, 0],
        h = a.color,
        i = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
        j = o(a.image),
        k = new mono.Cube(c, d, e)
      return (
        k.s({
          'm.type': 'basic',
          'm.color': h,
          'm.lightmap.image': g.Default.getImagePath('inside_lightmap1.png'),
          'top.m.lightmap.image': o('white.png'),
          'top.m.color': a.topColor,
          'm.polygonOffset': !0,
          'm.polygonOffsetFactor': 6,
          'm.polygonOffsetUnits': 3
        }),
        k.c({
          type: 'column'
        }),
        a.image &&
        (k.setStyle('left.m.texture.image', j),
          k.setStyle('right.m.texture.image', j),
          k.setStyle('front.m.texture.image', j),
          k.setStyle('back.m.texture.image', j)),
        k.p(f[0], 0, f[2]),
        k.setRotation(i[0], i[1], i[2]),
        g.Default.setPositionY(k, f[1]),
        g.Default.setObject3dCSProps(k, a),
        b && b(k),
        k
      )
    }, {
      category: '房间模型',
      type: 'column',
      name: '柱子',
      icon: p('column.png'),
      sdkCategory: 'floor-child',
      description: '柱子一般是加在房间外墙上，有些机房会在通道内也会有柱子对象',
      modelDefaultParameters: G()
    }
  )
  var H = function (a, b, c) {
      var d = 0,
        e = {
          x: a[0],
          y: a[2]
        },
        f = [],
        c = c || [0, 0, 0]
      if (b[0] instanceof Array) {
        for (var g = 0; g < b.length; g++) f.push(b[g])
        f.push(b[0])
        for (var g = 0; g < f.length - 1; g++) {
          var h = {
              x: f[g][0] + c[0],
              y: f[g][1] + c[2]
            },
            i = {
              x: f[g + 1][0] + c[0],
              y: f[g + 1][1] + c[2]
            }
          I(e, h, i, 10) && (d = Math.atan((h.y - i.y) / (h.x - i.x)))
        }
      } else {
        for (var g = 0; g < b.length; g++) f.push(b[g])
        f.push(b[0]), f.push(b[1])
        for (var g = 0; g < f.length - 2; g += 2) {
          var h = {
              x: f[g] + c[0],
              y: f[g + 1] + c[2]
            },
            i = {
              x: f[g + 2] + c[0],
              y: f[g + 3] + c[2]
            }
          I(e, h, i, 10) && (d = Math.atan((h.y - i.y) / (h.x - i.x)))
        }
      }
      return (180 * -d) / Math.PI
    },
    I = function (a, b, c, d) {
      d < 0 && (d = 0)
      var e = J(a, b, c)
      return (
        d >= e &&
        a.x >= Math.min(b.x, c.x) - d &&
        a.x <= Math.max(b.x, c.x) + d &&
        a.y >= Math.min(b.y, c.y) - d &&
        a.y <= Math.max(b.y, c.y) + d
      )
    },
    J = function (a, b, c) {
      if (b.x === c.x) return Math.abs(a.x - b.x)
      var d = (c.y - b.y) / (c.x - b.x),
        e = (c.x * b.y - b.x * c.y) / (c.x - b.x)
      return Math.abs(d * a.x - a.y + e) / Math.sqrt(d * d + 1)
    },
    K = function () {
      return {
        data: {
          name: '坐标点',
          value: [],
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        closed: {
          name: '是否合并',
          value: !1,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        showFloor: {
          name: '是否显示地板',
          value: !1,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        floorId: {
          name: '地板编号',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        wallDepth: {
          name: '墙厚度',
          value: 30,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        wallHeight: {
          name: '墙高度',
          value: 261,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        insideColor: {
          name: '内墙颜色',
          value: '#EFEFEF',
          type: g.Default.PARAMETER_TYPE_COLOR,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        outsideColor: {
          name: '外墙颜色',
          value: '#DCE8E9',
          type: g.Default.PARAMETER_TYPE_COLOR,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        asideColor: {
          name: '外墙颜色',
          value: '#B8CAD5',
          type: g.Default.PARAMETER_TYPE_COLOR,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        zsideColor: {
          name: '外墙颜色',
          value: '#B8CAD5',
          type: g.Default.PARAMETER_TYPE_COLOR,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        topColor: {
          name: '顶部颜色',
          value: '#F7FEFF',
          type: g.Default.PARAMETER_TYPE_COLOR,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        bottomColor: {
          name: '底部颜色',
          value: '#F7FEFF',
          type: g.Default.PARAMETER_TYPE_COLOR,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        insideImage: {
          name: '内墙贴图',
          value: '',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        outsideImage: {
          name: '外墙贴图',
          value: 'wall.png',
          type: g.Default.PARAMETER_TYPE_COLOR,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        insideMap: {
          name: '内墙Light贴图',
          value: 'inside_lightmap.jpg',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        outsideMap: {
          name: '外墙Light贴图',
          value: 'outside_lightmap.jpg',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        repeat: {
          name: '重复高度',
          value: '130',
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        children: {
          name: '孩子对象',
          value: [],
          hidden: !0,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }
      }
    }
  g.Default.register(
    'twaver.idc.wall',
    function (a, b) {
      var c = [],
        d = (a.client || {}, a.wallDepth),
        e = a.position || [0, 0, 0]
      e[1] = parseFloat(e[1]) || 0
      var f = a.outsideImage ? $(a.outsideImage) : null,
        h = a.insideMap ? g.Default.getImagePath(a.insideMap) : null,
        i = a.outsideMap ? g.Default.getImagePath(a.outsideMap) : null,
        j = {
          type: 'path',
          op: '+',
          width: d,
          height: a.wallHeight,
          insideColor: a.insideColor,
          outsideColor: a.outsideColor,
          asideColor: a.asideColor,
          zsideColor: a.zsideColor,
          topColor: a.topColor,
          bottomColor: a.bottomColor,
          insideImage: a.insideImage,
          outsideImage: f,
          insideMap: h,
          outsideMap: i,
          repeat: a.repeat,
          position: e,
          data: a.data,
          closed: a.closed
        }
      if ((c.push(j), a.children)) {
        for (var k = 0; k < a.children.length; k++) {
          (a.children[k].inbuilt = !0), (a.children[k].depth = d + 6)
          var l = H(a.children[k].position, a.data, a.position)
          a.children[k].rotation = [0, l, 0]
          var m = g.Default.load(a.children[k])
          c = c.concat(m)
        }
      }
      for (var n = [], o = [], k = 0; k < c.length; k++) {
        var p = c[k]
        p.op ? n.push(p) : o.push(p)
      }
      var q = g.Default.createCombo(n)
      if (
        (a.style && q.s(a.style),
          q.setClient('data', a.data),
          q.setClient('type', 'wall'),
          o.length > 0)
      ) {
        for (var k = 0; k < o.length; k++) {
          var r = o[k],
            s = g.Default.createCombo(r)
          s.setParent && s.setParent(q)
        }
      }
      if ((g.Default.setObject3dCSProps(q, a), a.showFloor)) {
        var e = a.position || [0, 0, 0],
          t = a.floorId || 'twaver.idc.floor',
          u = g.Default.load({
            id: t,
            data: a.data,
            position: [e[0], -1, e[2]]
          })
        u.setParent(q)
      }
      return b && b(q), q
    }, {
      category: '房间模型',
      type: 'wall',
      name: '外墙',
      icon: p('wall.png'),
      description: '外墙是和内墙，地板一起使用的。用来创建3d机房的房间轮廓',
      sdkCategory: 'floor',
      modelDefaultParameters: K()
    }
  )
  var L = function (a) {
    var b = K()
    return (
      (b.closed.value = !0), (b.showFloor.value = !0), (b.data.value = a), b
    )
  }
  g.Default.register(
      'twaver.idc.wall1',
      function (a, b) {
        return (a.id = 'twaver.idc.wall'), g.Default.load(a, b)
      }, {
        category: '房间模型',
        type: 'wall',
        name: '外墙1',
        icon: p('wall1.png'),
        description: '固定形状的房间，带地板',
        sdkCategory: 'floor',
        modelDefaultParameters: L([
          [-2e3, -2e3],
          [2e3, -2e3],
          [2e3, 2e3],
          [-2e3, 2e3]
        ])
      }
    ),
    g.Default.register(
      'twaver.idc.wall2',
      function (a, b) {
        return (a.id = 'twaver.idc.wall'), g.Default.load(a, b)
      }, {
        category: '房间模型',
        type: 'wall',
        name: '外墙2',
        icon: p('wall2.png'),
        description: '固定形状的房间，带地板',
        sdkCategory: 'floor',
        modelDefaultParameters: L([
          [-2500, -2500],
          [0, -2550],
          [0, 0],
          [2500, 0],
          [2500, 2500],
          [-2500, 2500]
        ])
      }
    ),
    g.Default.register(
      'twaver.idc.wall3',
      function (a, b) {
        return (a.id = 'twaver.idc.wall'), g.Default.load(a, b)
      }, {
        category: '房间模型',
        type: 'wall',
        name: '外墙3',
        icon: p('wall3.png'),
        description: '固定形状的房间，带地板',
        sdkCategory: 'floor',
        modelDefaultParameters: L([
          [-2500, -500],
          [-1300, -500],
          [-1300, -2500],
          [1300, -2500],
          [1300, -500],
          [2500, -500],
          [2500, 2500],
          [-2500, 2500]
        ])
      }
    ),
    g.Default.register(
      'twaver.idc.wall4',
      function (a, b) {
        return (a.id = 'twaver.idc.wall'), g.Default.load(a, b)
      }, {
        category: '房间模型',
        type: 'wall',
        name: '外墙4',
        icon: p('wall4.png'),
        description: '固定形状的房间，带地板',
        sdkCategory: 'floor',
        modelDefaultParameters: L([
          [-2500, -500],
          [-1500, -500],
          [-1e3, -2500],
          [1e3, -2500],
          [1500, -500],
          [2500, -500],
          [2500, 2500],
          [-2500, 2500]
        ])
      }
    )
  var M = function () {
    var a = K()
    return (
      (a.wallDepth.value = 20),
      (a.outsideColor.value = '#EFEFEF'),
      (a.outsideImage.value = ''),
      delete a.showFloor,
      delete a.closed,
      a
    )
  }
  g.Default.register(
    'twaver.idc.innerWall',
    function (a, b) {
      var c = [],
        d = (a.client || {}, a.wallDepth),
        e = a.wallHeight,
        f = a.insideMap ? g.Default.getImagePath(a.insideMap) : null,
        h = a.outsideMap ? g.Default.getImagePath(a.outsideMap) : null,
        i = {
          type: 'path',
          op: '+',
          width: d,
          height: e,
          insideColor: a.insideColor,
          outsideColor: a.outsideColor,
          asideColor: a.asideColor,
          zsideColor: a.zsideColor,
          topColor: a.topColor,
          bottomColor: a.bottomColor,
          insideImage: a.insideImage,
          outsideImage: a.outsideImage,
          insideMap: f,
          outsideMap: h,
          repeat: a.repeat,
          position: a.position,
          data: a.data,
          style: {
            'm.polygonOffset': !0,
            'm.polygonOffsetFactor': 6,
            'm.polygonOffsetUnits': 3
          }
        }
      if ((c.push(i), a.children)) {
        for (var j = 0; j < a.children.length; j++) {
          (a.children[j].inbuilt = !0), (a.children[j].depth = d + 6)
          var k = H(a.children[j].position, a.data, a.position)
          a.children[j].rotation = [0, k, 0]
          var l = g.Default.load(a.children[j])
          c = c.concat(l)
        }
      }
      for (var m = [], n = [], j = 0; j < c.length; j++) {
        var o = c[j]
        o.op ? m.push(o) : n.push(o)
      }
      var p = g.Default.createCombo(m)
      if (
        (a.style && p.s(a.style),
          p.setClient('data', a.data),
          p.setClient('type', 'inner_wall'),
          n.length > 0)
      ) {
        for (var j = 0; j < n.length; j++) {
          var q = n[j],
            r = g.Default.createCombo(q)
          r.setParent && r.setParent(p)
        }
      }
      return g.Default.setObject3dCSProps(p, a), b && b(p), p
    }, {
      category: '房间模型',
      type: 'innerWall',
      name: '内墙',
      icon: p('innerWall.png'),
      description: '内墙是和外墙，地板一起使用的。用来创建3d机房的房间轮廓',
      sdkCategory: 'floor-child',
      modelDefaultParameters: M()
    }
  )
  var N = function () {
    return {
      data: {
        name: '坐标点',
        value: [],
        type: g.Default.PARAMETER_TYPE_STRING,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      wallDepth: {
        name: '墙面厚度',
        value: 20,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      wallHeight: {
        name: '墙高度',
        value: 261,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      insideColor: {
        name: '内墙颜色',
        value: '#62F3FF',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      outsideColor: {
        name: '外墙颜色',
        value: '#62F3FF',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      asideColor: {
        name: '外墙颜色',
        value: '#000000',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      zsideColor: {
        name: '外墙颜色',
        value: '#333333',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      topColor: {
        name: '顶部颜色',
        value: '#F7F7F7',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      bottomColor: {
        name: '底部颜色',
        value: '#D6E4EC',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      insideImage: {
        name: '内墙贴图',
        value: 'glass_wall.png',
        type: g.Default.PARAMETER_TYPE_IMAGE,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      outsideImage: {
        name: '外墙贴图',
        value: 'glass_wall.png',
        type: g.Default.PARAMETER_TYPE_IMAGE,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      repeat: {
        name: '重复高度',
        value: 260,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      children: {
        name: '孩子对象',
        value: '',
        hidden: !0,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      }
    }
  }
  g.Default.register(
    'twaver.idc.glassWall',
    function (a, b) {
      var c = [],
        d = (a.client || {}, a.wallDepth),
        e = o(a.insideImage),
        f = o(a.outsideImage),
        h = {
          type: 'path',
          op: '+',
          width: d,
          height: a.wallHeight,
          floorShadow: !0,
          repeat: a.repeat,
          position: a.position,
          data: a.data,
          insideColor: a.insideColor,
          outsideColor: a.outsideColor,
          asideColor: a.asideColor,
          zsideColor: a.zsideColor,
          topColor: a.topColor,
          bottomColor: a.bottomColor,
          insideImage: e,
          outsideImage: f,
          style: {
            'm.type': 'phong',
            'm.polygonOffset': !0,
            'm.polygonOffsetFactor': 6,
            'm.polygonOffsetUnits': 2,
            'm.transparent': !0,
            'm.specularStrength': 100,
            'm.envmap.image': g.Default.getEnvMap('envmap2'),
            'm.specularmap.image': o('white.png')
          }
        }
      if ((c.push(h), a.children)) {
        for (var i = 0; i < a.children.length; i++) {
          a.children[i].inbuilt = !0
          var j = g.Default.load(a.children[i])
          c = c.concat(j)
        }
      }
      for (var k = [], l = [], i = 0; i < c.length; i++) {
        var m = c[i]
        m.op ? k.push(m) : l.push(m)
      }
      var n = g.Default.createCombo(k)
      if (
        (a.style && n.s(a.style),
          n.setClient('data', a.data),
          n.setClient('type', 'glass_wall'),
          l.length > 0)
      ) {
        for (var i = 0; i < l.length; i++) {
          var p = l[i],
            q = g.Default.createCombo(p)
          q.setParent && q.setParent(n)
        }
      }
      return g.Default.setObject3dCSProps(n, a), b && b(n), n
    }, {
      category: '房间模型',
      type: 'innerWall',
      name: '内墙',
      icon: p('innerWall.png'),
      description: '内墙是和外墙，地板一起使用的。用来创建3d机房的房间轮廓',
      sdkCategory: 'floor-child',
      modelDefaultParameters: N()
    }
  )
  var O = function () {
    var a = N(),
      b = {
        glassImage: {
          name: '玻璃贴图',
          value: '',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        glassColor: {
          name: '玻璃颜色',
          value: '#01A9DB',
          type: g.Default.PARAMETER_TYPE_COLOR,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        glassOpacity: {
          name: '玻璃透明度',
          value: '0.5',
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }
      }
    return (
      g.Default.copyProperties(b, a),
      (a.insideColor.value = '#B8CAD5'),
      (a.outsideColor.value = '#A5BDDD'),
      (a.asideColor.value = '#D6E4EC'),
      (a.zsideColor.value = '#D6E4EC'),
      (a.topColor.value = '#D6E4EC'),
      (a.bottomColor.value = '#D6E4EC'),
      (a.insideImage.value = ''),
      (a.outsideImage.value = ''),
      a
    )
  }
  g.Default.register(
    'twaver.idc.glassWall2',
    function (a, b) {
      var c = [],
        d = a.wallDepth,
        e = a.wallHeight,
        f = 0.6 * e,
        h = a.position || [0, 0, 0],
        i = {
          type: 'path',
          op: '+',
          width: d,
          height: e,
          insideColor: a.insideColor,
          outsideColor: a.outsideColor,
          asideColor: a.asideColor,
          zsideColor: a.zsideColor,
          topColor: a.topColor,
          bottomColor: a.bottomColor,
          repeat: a.repeat,
          position: a.position,
          data: a.data,
          closed: a.closed
        }
      c.push(i)
      var j = {
        type: 'path',
        width: d + 2,
        height: f,
        op: '-',
        position: [0 + h[0], ((e - f) / 3) * 2 + h[1], 0 + h[2]],
        insideColor: a.insideColor,
        outsideColor: a.outsideColor,
        asideColor: a.asideColor,
        zsideColor: a.zsideColor,
        topColor: a.topColor,
        bottomColor: a.bottomColor,
        data: a.data,
        closed: a.closed
      }
      c.push(j)
      var k = {
        type: 'path',
        width: 1,
        height: f,
        op: '+',
        position: [0 + h[0], ((e - f) / 3) * 2 + h[1], 0 + h[2]],
        insideImage: a.glassImage,
        outsideImage: a.glassImage,
        topColor: a.topColor,
        bottomColor: 'json.bottomColor',
        style: {
          'm.type': 'phong',
          'm.transparent': !0,
          'm.opacity': a.glassOpacity,
          'm.color': a.glassColor,
          'm.ambient': a.glassColor,
          'm.specularStrength': 100,
          'm.envmap.image': g.Default.getEnvMap('envmap1'),
          'm.specularmap.image': g.Default.getImagePath('metal_normalmap1.jpg')
        },
        data: a.data,
        closed: a.closed
      }
      if ((c.push(k), a.children)) {
        for (var l = 0; l < a.children.length; l++) {
          (a.children[l].inbuilt = !0), (a.children[l].depth = d + 6)
          var m = H(a.children[l].position, a.data, a.position)
          a.children[l].rotation = [0, m, 0]
          var n = g.Default.load(a.children[l])
          c = c.concat(n)
        }
      }
      for (var o = [], p = [], l = 0; l < c.length; l++) {
        var q = c[l]
        q.op ? o.push(q) : p.push(q)
      }
      var r = g.Default.createCombo(o)
      if (
        (a.style && r.s(a.style),
          r.setClient('data', a.data),
          r.setClient('type', 'wall'),
          p.length > 0)
      ) {
        for (var l = 0; l < p.length; l++) {
          var s = p[l],
            t = g.Default.createCombo(s)
          t.setParent && t.setParent(r)
        }
      }
      if ((g.Default.setObject3dCSProps(r, a), a.showFloor)) {
        var h = a.position || [0, 0, 0],
          u = a.floorId || 'twaver.idc.floor',
          v = g.Default.load({
            id: u,
            data: a.data,
            position: [h[0], -1, h[2]]
          })
        v.setParent(r)
      }
      return b && b(r), r
    }, {
      category: '房间模型',
      type: 'innerWall',
      name: '内墙',
      icon: p('innerWall.png'),
      description: '内墙是和外墙，地板一起使用的。用来创建3d机房的房间轮廓',
      sdkCategory: 'floor',
      modelDefaultParameters: O()
    }
  )
  var P = function () {
    var a = r(120, 150, 50),
      b = {
        image: {
          name: '贴图',
          value: 'window.png',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        transparent: {
          name: '是否透明',
          value: !0,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        glassDepth: {
          name: '玻璃厚度',
          value: 4,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }
      }
    return g.Default.copyProperties(b, a), a
  }
  g.Default.register(
    'twaver.idc.window',
    function (a) {
      var b = a.position || [0, 0, 0],
        c = b[0],
        d = b[1],
        e = b[2],
        f = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
        h = a.width,
        i = a.height,
        j = a.depth,
        k = (a.client, a.glassDepth),
        l = 5,
        m = 45,
        n = 10,
        p = o(a.image),
        q = (a.transparent, a.platform),
        r = {
          type: 'cube',
          width: h,
          height: i,
          depth: j,
          rotation: f,
          position: [c, d + 30 + i / 2, e],
          op: '-',
          sideColor: '#EFEFEF',
          topColor: '#EFEFEF'
        },
        s = {
          type: 'cube',
          width: h - 0.5,
          height: i - 0.5,
          depth: k,
          rotation: f,
          position: [c, d + 30 + i / 2, e],
          op: '+',
          style: {
            'm.color': '#F0F0F0',
            'm.ambient': '#F0F0F0',
            'm.type': 'phong',
            'm.specularStrength': 0.1,
            'm.envmap.image': g.Default.getEnvMap('envmap1'),
            'm.texture.repeat': new mono.Vec2(1, 1),
            'm.texture.image': p
          },
          client: {
            type: 'window'
          }
        }
      a.transparent != 0 &&
        ((s.style['front.m.transparent'] = !0),
          (s.style['back.m.transparent'] = !0))
      var t = [r, s]
      return (
        q &&
        t.push({
          type: 'cube',
          width: h,
          height: l,
          depth: m,
          position: [c, d, e + n],
          rotation: f,
          op: '+',
          sideColor: '#A5BDDD',
          topColor: '#D6E4EC'
        }),
        a.inbuilt ? t : g.Default.createCombo(t)
      )
    }, {
      category: '房间模型',
      type: 'window',
      name: '窗户',
      icon: p('window.png'),
      description: '窗户一般不单独使用，是加在内墙或外墙模型上，作为这类模型的孩子对象',
      sdkCategory: 'floor-child',
      modelDefaultParameters: P()
    }
  )
  var Q = function () {
    var a = r(100, 180, 26),
      b = {
        color: {
          name: '颜色',
          value: '#9E9E9E',
          type: g.Default.PARAMETER_TYPE_COLOR,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        image: {
          name: '贴图',
          value: 'door_right.png',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        transparent: {
          name: '是否透明',
          value: !0,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }
      }
    return g.Default.copyProperties(b, a), a
  }
  g.Default.register(
    'twaver.idc.door1',
    function (a) {
      var c = a.position || [0, 0, 0],
        d = c[0],
        e = c[1],
        f = c[2],
        h = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
        i = a.width,
        j = a.height,
        k = a.depth,
        l = 10,
        m = 2,
        n = o(a.image),
        p = !0,
        q = a.color
      a.client
      a.transparent != null && a.transparent != b && (p = a.transparent)
      var r = [{
          type: 'cube',
          width: i,
          height: j,
          depth: k,
          op: '+',
          position: [d, e + j / 2, f],
          rotation: h,
          sideColor: '#CDCDCD',
          topColor: '#CDCDCD',
          style: {
            'm.type': 'phong',
            'm.specularStrength': 50
          }
        },
        {
          type: 'cube',
          width: i - l,
          height: j - l / 2 - m,
          depth: k + 2,
          op: '-',
          position: [d, e + m + j / 2, f],
          rotation: h,
          sideColor: '#FEFEFE',
          topColor: '#FEFEFE'
        },
        {
          type: 'cube',
          width: i - l - 2,
          height: j - l / 2 - m - 2,
          depth: 2,
          position: [d, e + m + 1 + j / 2, f],
          sideColor: q,
          topColor: q,
          rotation: h,
          style: {
            'top.m.polygonOffset': !0,
            'top.m.polygonOffsetFactor': 100,
            'top.m.polygonOffsetUnits': 20,
            'm.type': 'phong',
            'm.transparent': p,
            'front.m.texture.image': n,
            'back.m.texture.image': n,
            'front.m.texture.flipX': !0,
            'm.specularStrength': 100,
            'm.envmap.image': p ? g.Default.getEnvMap('envmap2') : null,
            'm.specularmap.image': o('white.png')
          },
          client: {
            animation: 'rotation:left:-80:1000:0:bounceOut',
            type: 'door'
          }
        }
      ]
      return a.inbuilt ? r : g.Default.createCombo(r)
    }, {
      category: '房间模型',
      type: 'door',
      name: '单开门',
      icon: p('door.png'),
      description: '门一般不单独使用，是加在内墙或外墙模型上，作为这类模型的孩子对象',
      sdkCategory: 'floor-child',
      modelDefaultParameters: Q()
    }
  )
  var R = function () {
      var a = r(205, 180, 26),
        b = {
          color: {
            name: '颜色',
            value: '#9E9E9E',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          leftImage: {
            name: '左门贴图',
            value: 'door_left.png',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          rightImage: {
            name: '右门贴图',
            value: 'door_right.png',
            type: g.Default.PARAMETER_TYPE_IMAGE,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          frame: {
            name: '显示门框',
            value: !0,
            type: g.Default.PARAMETER_TYPE_BOOLEAN,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          acs: {
            name: '显示门禁',
            value: !1,
            type: g.Default.PARAMETER_TYPE_BOOLEAN,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          }
        }
      return g.Default.copyProperties(b, a), a
    },
    S = function (a) {
      var b = a.position || [0, 0, 0],
        c = b[0],
        d = b[1],
        e = b[2],
        f = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
        h = a.width || 205,
        i = a.height || 180,
        j = a.depth || 26,
        k = 10,
        l = 0,
        m = (a.client, a.color),
        n = a.acs,
        p = a.frame,
        q = o(a.leftImage),
        r = o(a.rightImage),
        s = a.envmap,
        t = []
      return (
        p &&
        t.push({
          type: 'cube',
          width: h,
          height: i,
          depth: j,
          op: '+',
          position: [c, d + i / 2, e],
          rotation: f,
          sideColor: '#CDCDCD',
          topColor: '#CDCDCD',
          style: {
            'm.type': 'phong',
            'm.specularStrength': 50
          }
        }),
        t.push({
          type: 'cube',
          width: h - k,
          height: i - k / 2 - l,
          depth: j + 2,
          op: '-',
          position: [c, d + l + i / 2, e],
          rotation: f,
          sideColor: '#FEFEFE',
          topColor: '#FEFEFE'
        }),
        t.push({
          type: 'cube',
          width: (h - k) / 2 - 2,
          height: i - k / 2 - l - 2,
          depth: 2,
          position: [c - (h - k) / 4 + 1, d + l + 1 + i / 2, e],
          sideColor: m,
          topColor: m,
          rotation: f,
          rotationAnchor: 'left',
          style: {
            'top.m.polygonOffset': !0,
            'top.m.polygonOffsetFactor': 100,
            'top.m.polygonOffsetUnits': 20,
            'm.type': 'phong',
            'm.transparent': !0,
            'front.m.texture.image': q,
            'back.m.texture.image': r,
            'm.specularStrength': 100,
            'm.envmap.image': s,
            'm.specularmap.image': o('white.png')
          },
          client: {
            animation: 'rotation:left:-90:1000:0:bounceOut',
            type: 'door'
          }
        }),
        t.push({
          type: 'cube',
          width: (h - k) / 2 - 2,
          height: i - k / 2 - l - 2,
          depth: 2,
          position: [c + (h - k) / 4 - 1, d + l + 1 + i / 2, e],
          sideColor: m,
          topColor: m,
          rotation: f,
          rotationAnchor: 'right',
          style: {
            'top.m.polygonOffset': !0,
            'top.m.polygonOffsetFactor': 100,
            'top.m.polygonOffsetUnits': 20,
            'm.type': 'phong',
            'm.transparent': !0,
            'front.m.texture.image': r,
            'back.m.texture.image': q,
            'm.specularStrength': 100,
            'm.envmap.image': s,
            'm.specularmap.image': o('white.png')
          },
          client: {
            animation: 'rotation:right:90:1000:0:bounceOut',
            type: 'door'
          }
        }),
        n &&
        t.push({
          type: 'cube',
          width: 11.6,
          height: 11.6,
          depth: 2,
          rotation: f,
          rotationAnchor: 'left',
          position: [c + h / 2 + 8, (i - k / 2 - l - 2) / 2, e + 10],
          style: {
            'm.color': '#ffffff',
            'm.ambient': '#ffffff',
            'm.specular': '#FFFFFF',
            'm.type': 'phong',
            'm.texture.image': o('rack_inside.png'),
            'front.m.texture.image': o('acs.jpg')
          }
        }),
        t
      )
    }
  g.Default.register(
    'twaver.idc.door',
    function (a) {
      var b = S(a)
      return a.inbuilt ? b : g.Default.createCombo(b)
    }, {
      category: '房间模型',
      type: 'door',
      name: '双开门',
      icon: p('door.png'),
      description: '门一般不单独使用，是加在内墙或外墙模型上，作为这类模型的孩子对象',
      sdkCategory: 'floor-child',
      modelDefaultParameters: R()
    }
  )
  var T = function () {
    return {
      height: {
        name: '高',
        value: 5,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      color: {
        name: '颜色',
        value: '#abc',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      label: {
        name: '标签',
        value: '',
        type: g.Default.PARAMETER_TYPE_STRING,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      labelColor: {
        name: '标签颜色',
        value: 'red',
        type: g.Default.PARAMETER_TYPE_COLOR,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      data: {
        name: '坐标点',
        value: [],
        type: g.Default.PARAMETER_TYPE_STRING,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      opacity: {
        name: '透明度',
        value: 0.05,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      }
    }
  }
  g.Default.register(
    'twaver.idc.area',
    function (a, c) {
      var d = a.height,
        e = a.position || [0, 0, 0],
        f = a.color,
        h = a.client || {},
        i = h.label || a.label,
        j = h.labelPositionX || a.labelPositionX,
        k = h.labelPositionZ || a.labelPositionZ,
        l = h.labelColor || a.labelColor,
        m = h.labelFont || a.labelFont,
        n = a.opacity,
        o = g.Default.createShapeNodePath(a.data),
        p = new mono.ShapeNode(o)
      if (
        (p.s({
            'm.type': 'phong',
            'm.side': 'both',
            'm.color': f,
            'm.ambient': f,
            'm.transparent': !0,
            'm.opacity': n
          }),
          p.setAmount(d),
          p.setVertical(!0),
          p.setClient('type', 'area'),
          (p.renderDepth = -100),
          p.p(e[0], e[1], e[2]),
          i)
      ) {
        var q = g.Default.getPathBoundingBox(a.data).size,
          r = p.getBoundingBox(),
          s = r.min,
          t = r.max,
          u = new mono.Cube(q.x, 1, q.y),
          v = g.Default.generateTextCanvas(i, l, m, !1),
          w = v.drawRect
        u.s({
            'm.transparent': !0,
            'top.m.texture.image': v,
            'm.texture.repeat': new mono.Vec2(
              w.width / v.width,
              w.height / v.height
            ),
            'm.texture.offset': new mono.Vec2(
              (v.width - w.width) / 2 / v.width,
              (v.height - w.height) / 2 / v.height
            )
          }),
          u.setSelectable(!1),
          (j === null || j === b) && (j = (s.x + t.x) / 2),
          (k === null || k === b) && (k = (s.z + t.z) / 2),
          u.p(j, (s.y + t.y) / 2 + 2, k),
          u.setParent(p)
      }
      return g.Default.setObject3dCSProps(p, a), c && c(p), p
    }, {
      category: '房间模型',
      type: 'area',
      name: '区域',
      icon: p('area.png'),
      description: '区域是加在某个房间上的。用来对房间进一步细分。可以指定区域的高度，文字，颜色等属性',
      sdkCategory: 'room',
      modelDefaultParameters: T()
    }
  )
  var U = function () {
    return {
      rackWidth: {
        name: '机柜宽度',
        value: 60,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      rackHeight: {
        name: '机柜高度',
        value: 200,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      rackDepth: {
        name: '机柜深度',
        value: 80,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      rackNumber: {
        name: '机柜数量',
        value: 20,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      aisleDepth: {
        name: '通道深度',
        value: 140,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      windowAnimationType: {
        name: '天窗类型',
        value: 2,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      doorAnimationType: {
        name: '门动画类型',
        value: 2,
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      isSingle: {
        name: '是否为单通道',
        value: !1,
        type: g.Default.PARAMETER_TYPE_BOOLEAN,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      },
      side: {
        name: '单通道类型',
        value: 'left',
        type: g.Default.PARAMETER_TYPE_STRING,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
      }
    }
  }
  g.Default.register(
      'twaver.idc.aisle1',
      function (a, b) {
        a.isSingle = !0
        var c = a.side || 'left'
        return (
          (a.side = c),
          (a.id = 'twaver.idc.aisle'),
          (aisle = g.Default.load(a, b)),
          aisle
        )
      }, {
        category: '通道模型',
        type: 'channel',
        name: '单通道，由通道门和天窗组成。可以设置通道内摆放的机柜数和通道的高度',
        icon: p('channel.png'),
        description: '',
        sdkCategory: 'channel',
        modelDefaultParameters: U()
      }
    ),
    g.Default.register(
      'twaver.idc.aisle',
      function (a, b) {
        var c = a.position || [0, 0, 0],
          d = c[0],
          e = c[1],
          f = c[2],
          h = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
          i = a.axis || 'x',
          j = a.client,
          k = parseFloat(a.rackNumber),
          l = parseFloat(a.rackWidth),
          m = (k / 2) * l,
          n = parseFloat(a.rackHeight),
          p = parseFloat(a.rackDepth),
          q = parseFloat(a.aisleDepth),
          r = a.windowAnimationType,
          s = a.doorAnimationType,
          t = a.isSingle,
          u = a.side,
          v = [],
          w = [],
          x = 2 * p + q,
          y = new mono.Cube(m, n, x)
        y.s({
            'm.transparent': !0,
            'm.opacity': 0.001
          }),
          y.setPosition(0, n / 2 + 1, 0)
        var z = [],
          A = 0,
          B = 0,
          C = 0
        t &&
          ((x = p + (q / 2) * 2 - 5),
            (s = s || 1),
            u == 'left' ?
            ((A = -p / 2 + 2.5), (B = q / 2 - 2), (C = -q / 4)) :
            ((A = p / 2 - 2.5), (B = -q / 2 + 2), (C = q / 4)),
            v.push({
              type: 'cube',
              width: m + 5,
              height: n,
              depth: 5,
              op: '+',
              position: [0, 0, B],
              style: {
                'm.type': 'phong',
                'm.side': 'both',
                'm.color': '#62F3FF',
                'm.ambient': '#62F3FF',
                'm.envmap.image': g.Default.getEnvMap('envmap2'),
                'm.transparent': !0,
                'm.texture.image': o('skylight01-1.png'),
                'm.polygonOffset': !0,
                'm.polygonOffsetFactor': 6,
                'm.polygonOffsetUnits': 3
              }
            }))
        for (var D = -1; D < 2; D += 2) {
          v.push({
            type: 'cube',
            width: m + 5,
            height: 12,
            depth: 2,
            op: '+',
            position: [0, n / 2, ((q - 5) / 2) * D],
            style: {
              'm.type': 'phong',
              'm.color': '#666666',
              'm.ambient': '#0c0c0c',
              'm.specular': '#e5e5e5',
              'm.specularStrength': 3
            }
          })
        }
        for (var D = -1; D < 2; D += 2) {
          v.push({
            type: 'cube',
            width: 10,
            height: 16,
            depth: x,
            op: '+',
            position: [(m / 2 + 5) * D, n / 2 - 3, A],
            style: {
              'm.type': 'phong',
              'm.color': '#666666',
              'm.ambient': '#0c0c0c',
              'm.specular': '#e5e5e5',
              'm.specularStrength': 3
            }
          })
        }
        for (var D = -1; D < 2; D += 2) {
          var E = 'door1',
            F = 'move:front:0.8'
          s == 1 && (F = 'rotation:front:-120:1000:0:bounceOut'),
            D == 1 &&
            ((E = 'door2'),
              s == 1 && (F = 'rotation:front:120:1000:0:bounceOut')),
            w.push({
              type: 'cube',
              width: 5,
              height: n - 5,
              depth: q / 2,
              position: [(m / 2) * D, 0, q / 4],
              style: {
                'm.type': 'phong',
                'm.color': '#62F3FF',
                'm.ambient': '#62F3FF',
                'm.envmap.image': g.Default.getEnvMap('envmap2'),
                'left.m.transparent': !0,
                'left.m.texture.image': o('right-door.png'),
                'right.m.transparent': !0,
                'right.m.texture.image': o('left-door.png')
              },
              client: {
                animation: F,
                'animation-group': E
              }
            })
        }
        for (var D = -1; D < 2; D += 2) {
          var E = 'door1',
            F = 'move:back:0.8'
          s == 1 && (F = 'rotation:back:120:1000:0:bounceOut'),
            D == 1 &&
            ((E = 'door2'),
              s == 1 && (F = 'rotation:back:-120:1000:0:bounceOut')),
            w.push({
              type: 'cube',
              width: 5,
              height: n - 5,
              depth: q / 2,
              position: [(m / 2) * D, 0, -q / 4],
              style: {
                'm.type': 'phong',
                'm.color': '#62F3FF',
                'm.ambient': '#62F3FF',
                'm.envmap.image': g.Default.getEnvMap('envmap2'),
                'left.m.transparent': !0,
                'left.m.texture.image': o('left-door.png'),
                'right.m.transparent': !0,
                'right.m.texture.image': o('right-door.png')
              },
              client: {
                animation: F,
                'animation-group': E
              }
            })
        }
        var j = {}
        r == 2 &&
          (j = {
            animation: 'rotation:center-z:90:1000:0:bounceOut',
            'animation-group': 'skylight'
          })
        for (var D = 0; k / 2 > D; D++) {
          var G = {
            type: 'cube',
            width: l,
            height: 2,
            depth: q,
            position: [(-l * k) / 4 + l / 2 + D * l, n / 2 + 6, 0],
            style: {
              'm.type': 'phong',
              'm.color': '#00ECFF',
              'm.ambient': '#00ECFF',
              'm.envmap.image': g.Default.getEnvMap('envmap2'),
              'm.transparent': !0,
              'm.texture.image': o('skylight.png')
            },
            client: j
          }
          w.push(G)
        }
        var H = g.Default.createCombo(v)
        z.push(H)
        for (var I = g.Default.createCombo(w), D = 0; D < I.length; D++) {
          z.push(I[D])
        }
        y.setClient('real_channel', z)
        for (var D = 0; D < z.length; D++) z[D].setParent(y)
        return (
          y.p(d, 0, f),
          g.Default.setPositionY(y, e),
          y.setDepth(x),
          y.setClient('type', 'aisle'),
          i === 'z' ?
          y.setRotation(0, Math.PI / 2, 0) :
          y.setRotation(h[0], h[1], h[2]),
          (y.getSkyLights = function () {
            return I
          }),
          g.Default.setObject3dCSProps(y, a),
          b && b(y),
          y
        )
      }, {
        category: '通道模型',
        type: 'channel',
        name: '通道',
        icon: p('channel.png'),
        description: '通道是机房中用于摆放机柜的节能模块，分为单通道和双通道，由通道门和天窗组成。可以设置通道内摆放的机柜数和通道的高度',
        sdkCategory: 'channel',
        modelDefaultParameters: U()
      }
    ),
    g.Default.register(
      'twaver.idc.simpleAisle',
      function (a, b) {
        var c = a.position || [0, 0, 0],
          d = c[0],
          e = c[1],
          f = c[2],
          h = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
          i = a.axis || 'x',
          j = parseFloat(a.rackNumber),
          k = parseFloat(a.rackWidth) + 1,
          l = (j / 2) * k,
          m = parseFloat(a.rackHeight),
          n = parseFloat(a.rackDepth),
          p = parseFloat(a.aisleDepth),
          q = (a.windowAnimationType, a.doorAnimationType),
          r = a.isSingle,
          s = a.side || 'left',
          t = 2 * n + p,
          u = new mono.Cube(l, m, t)
        u.s({
          'm.transparent': !0,
          'm.opacity': 0.001
        })
        var v = [],
          w = 0,
          x = 0,
          y = 0
        if (r) {
          (t = n + p - 5),
          (q = a.doorAnimationType || 1),
          s == 'left' ?
            ((w = -n / 2 + 2.5), (x = 68), (y = n / 2)) :
            ((w = n / 2 - 2.5), (x = -68), (y = -n / 2))
          var z = new mono.Cube(l + 5, m, 5)
          z.p(0, 0, x + y),
            z.s({
              'm.type': 'phong',
              'm.side': 'both',
              'm.color': '#62F3FF',
              'm.ambient': '#62F3FF',
              'm.envmap.image': g.Default.getEnvMap('envmap1'),
              'm.transparent': !0,
              'm.texture.image': o('skylight01.png'),
              'm.polygonOffset': !0,
              'm.polygonOffsetFactor': 6,
              'm.polygonOffsetUnits': 3
            }),
            v.push(z)
        }
        var A = new mono.Cube(l, m, p)
        A.p(0, 0, y),
          A.s({
            'm.type': 'phong',
            'm.transparent': !0,
            'm.side': 'both',
            'front.m.opacity': 0,
            'back.m.opacity': 0,
            'bottom.m.opacity': 0,
            'left.m.color': '#62F3FF',
            'left.m.ambient': '#62F3FF',
            'left.m.texture.image': o('door.png'),
            'left.m.envmap.image': g.Default.getEnvMap('envmap1'),
            'right.m.color': '#62F3FF',
            'right.m.ambient': '#62F3FF',
            'right.m.texture.image': o('door.png'),
            'right.m.envmap.image': g.Default.getEnvMap('envmap1'),
            'top.m.color': '#62F3FF',
            'top.m.ambient': '#62F3FF',
            'top.m.texture.image': o('skylight01.png'),
            'top.m.envmap.image': g.Default.getEnvMap('envmap1')
          }),
          v.push(A)
        for (var B = 0; B < v.length; B++) v[B].setParent(u)
        return (
          u.p(d, 0, f),
          g.Default.setPositionY(u, e),
          u.setDepth(t),
          u.setClient('type', 'aisle'),
          i === 'z' ?
          u.setRotation(0, Math.PI / 2, 0) :
          u.setRotation(h[0], h[1], h[2]),
          b && b(u),
          u
        )
      }, {
        category: '通道模型',
        type: 'channel',
        name: '通道',
        icon: p('channel.png'),
        description: '同上。区别在于 简单通道只是没有细节，是用几个cube加贴图组成，通道窗户不能打开。主要用于和真实通道之间的切换。',
        sdkCategory: 'channel',
        modelDefaultParameters: U()
      }
    )
  var V = function () {
    var a = r(100, 200, 80),
      b = {
        sideImage: {
          name: '侧面贴图',
          value: 'air-condition-side.jpg',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        frontImage: {
          name: '正面贴图',
          value: 'air-condition-front.jpg',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        backImage: {
          name: '正面贴图',
          value: 'air-condition-side.jpg',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        topImage: {
          name: '顶部贴图',
          value: 'air-condition-top.jpg',
          type: g.Default.PARAMETER_TYPE_IMAGE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }
      }
    return g.Default.copyProperties(b, a), a
  }
  g.Default.register(
      'twaver.idc.airCondition',
      function (a, b) {
        var c = a.position || [0, 0, 0],
          d = c[0],
          e = c[1],
          f = c[2],
          h = a.width,
          i = a.height,
          j = a.depth,
          k = o(a.sideImage),
          l = o(a.topImage),
          m = o(a.frontImage),
          n = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
          p = new mono.Cube(h, i, j)
        return (
          p.s({
            'm.type': 'phong',
            'm.color': '#557E7A',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.specularmap.image': g.Default.getImagePath('outside_lightmap.jpg'),
            'm.texture.image': k,
            'front.m.texture.image': m,
            'top.m.texture.image': l,
            'front.m.envmap.image': g.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2
          }),
          p.setPosition(d, 0, f),
          p.setRotation(n[0], n[1], n[2]),
          g.Default.setPositionY(p, e),
          g.Default.setObject3dCSProps(p, a),
          p.setClient('type', 'airCondition'),
          p.setClient('showShadow', !0),
          b && b(p),
          p
        )
      }, {
        name: '空调',
        description: '精密空调是机房中用于散热，排风的模块，保证机房的恒温恒湿。支持修改长，宽，高基本参数',
        icon: p('airCondition.png'),
        category: '环境模型',
        type: 'airCondition',
        modelDefaultParameters: V()
      }
    ),
    g.Default.register(
      'twaver.idc.airCondition1',
      function (a, b) {
        var c,
          d = a.position || [0, 0, 0],
          e = d[0],
          f = d[1],
          h = d[2],
          i = a.width,
          j = a.height,
          k = a.depth,
          l = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
          m = a.color || '#FFFFFF'
        return (
          (c = a.objectId ?
            new mono.Cube({
              id: a.objectId,
              width: i,
              height: j,
              depth: k
            }) :
            new mono.Cube(i, j, k)),
          c.s({
            'm.type': 'phong',
            'm.color': m,
            'm.ambient': m,
            'm.texture.image': o('air-condition1-side.jpg'),
            'front.m.texture.image': o('air-condition1-front.jpg'),
            'back.m.texture.image': o('air-condition1-back.jpg'),
            'top.m.texture.image': o('air-condition1-top.jpg'),
            'front.m.envmap.image': g.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.5
          }),
          c.p(e, 0, h),
          c.setRotation(l[0], l[1], l[2]),
          g.Default.setPositionY(c, f),
          c.setClient('type', 'airCondition'),
          c.setClient('showShadow', !0),
          g.Default.setObject3dCSProps(c, a),
          b && b(c),
          c
        )
      }, {
        name: '空调',
        description: '精密空调是机房中用于散热，排风的模块，保证机房的恒温恒湿。支持修改长，宽，高基本参数',
        icon: p('airCondition1.png'),
        category: '环境模型',
        type: 'airCondition',
        modelDefaultParameters: r(188, 174, 75)
      }
    ),
    g.Default.register(
      'twaver.idc.airCondition2',
      function (a, b) {
        return (
          (a.id = 'twaver.idc.airCondition1'),
          (a.color = '#A4F4EC'),
          g.Default.load(a, b)
        )
      }, {
        name: '空调',
        description: '精密空调是机房中用于散热，排风的模块，保证机房的恒温恒湿。支持修改长，宽，高基本参数',
        icon: p('airCondition2.png'),
        category: '环境模型',
        type: 'airCondition',
        modelDefaultParameters: r(188, 174, 75)
      }
    ),
    g.Default.register(
      'twaver.idc.switchgear',
      function (a, b) {
        var c,
          d = a.position || [0, 0, 0],
          e = d[0],
          f = d[1],
          h = d[2],
          i = a.width,
          j = a.height,
          k = a.depth,
          l = g.Default.getRsByDs(a.rotation) || [0, 0, 0]
        return (
          (c = a.objectId ?
            new mono.Cube({
              id: a.objectId,
              width: i,
              height: j,
              depth: k
            }) :
            new mono.Cube(i, j, k)),
          c.s({
            'm.type': 'phong',
            'm.color': '#666666',
            'm.ambient': '#ffffff',
            'm.specular': '#e5e5e5',
            'm.specularStrength': 2,
            'm.texture.image': o('switch_wrap.jpg'),
            'm.envmap.image': g.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2
          }),
          c.setWrapMode('six-each'),
          c.p(e, 0, h),
          c.setRotation(l[0], l[1], l[2]),
          g.Default.setPositionY(c, f),
          c.setClient('type', 'switchgear'),
          c.setClient('showShadow', !0),
          g.Default.setObject3dCSProps(c, a),
          b && b(c),
          c
        )
      }, {
        name: '开关柜',
        description: '机房常见设备之一，开关柜支持修改长，宽，高等基本参数。',
        icon: p('switchgear.png'),
        category: '机柜模型',
        type: 'switchgear',
        modelDefaultParameters: r(60, 180, 60)
      }
    ),
    g.Default.register(
      'twaver.idc.pdc',
      function (a, b) {
        var c,
          d = a.position || [0, 0, 0],
          e = d[0],
          f = d[1],
          h = d[2],
          i = a.width,
          j = a.height,
          k = a.depth,
          l = g.Default.getRsByDs(a.rotation) || [0, 0, 0]
        return (
          (c = a.objectId ?
            new mono.Cube({
              id: a.objectId,
              width: i,
              height: j,
              depth: k
            }) :
            new mono.Cube(i, j, k)),
          c.s({
            'm.type': 'phong',
            'm.color': '#ffffff',
            'm.ambient': '#ffffff',
            'm.specularStrength': 2,
            'm.texture.image': o('pdc_wrap.jpg'),
            'm.envmap.image': g.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2
          }),
          c.setWrapMode('six-each'),
          c.p(e, 0, h),
          c.setRotation(l[0], l[1], l[2]),
          g.Default.setPositionY(c, f),
          c.setClient('type', 'pdc'),
          c.setClient('showShadow', !0),
          g.Default.setObject3dCSProps(c, a),
          b && b(c),
          c
        )
      }, {
        name: '配电柜',
        description: '机房常见设备之一，配电柜支持修改长，宽，高等基本参数。',
        icon: p('pdc.png'),
        category: '机柜模型',
        type: 'pdc',
        modelDefaultParameters: r(60, 180, 60)
      }
    ),
    g.Default.register(
      'twaver.idc.ups',
      function (a, b) {
        var c = a.position || [0, 0, 0],
          d = c[0],
          e = c[1],
          f = c[2],
          h = a.width,
          i = a.height,
          j = a.depth,
          k = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
          l = new mono.Cube(h, i, j)
        return (
          l.s({
            'm.type': 'phong',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.specularmap.image': g.Default.getImagePath(
              'outside_lightmap.jpg'
            ),
            'm.texture.image': o('ups-side.jpg'),
            'top.m.texture.image': o('ups-top.jpg'),
            'front.m.texture.image': o('ups-front.jpg'),
            'front.m.envmap.image': g.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2
          }),
          l.setPosition(d, 0, f),
          g.Default.setPositionY(l, e),
          l.setRotation(k[0], k[1], k[2]),
          l.setClient('showShadow', !0),
          g.Default.setObject3dCSProps(l, a),
          b && b(l),
          l
        )
      }, {
        name: 'UPS',
        description: '用于给单台计算机、计算机网络系统或其它垫子设备如电磁阀、压力变送器等提供稳定、不间断的电力供应，保证机房在突发情况下也能正常运转',
        icon: p('ups.png'),
        category: '环境模型',
        type: 'ups',
        modelDefaultParameters: r(80, 200, 60)
      }
    ),
    g.Default.register(
      'twaver.idc.battery',
      function (a, b) {
        var c = a.position || [0, 0, 0],
          d = c[0],
          e = c[1],
          f = c[2],
          h = a.width,
          i = a.height,
          j = a.depth,
          k = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
          l = new mono.Cube(h, i, j)
        return (
          l.s({
            'm.type': 'phong',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.transparent': !0,
            'm.specularmap.image': g.Default.getImagePath(
              'outside_lightmap.jpg'
            ),
            'm.texture.image': o('battery-side.png'),
            'front.m.texture.image': o('battery-front.png'),
            'back.m.texture.image': o('battery-front.png'),
            'top.m.texture.image': o('battery-top.jpg'),
            'front.m.envmap.image': g.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2
          }),
          l.setRotation(k[0], k[1], k[2]),
          l.setPosition(d, 0, f),
          l.setClient('showShadow', !0),
          g.Default.setPositionY(l, e),
          g.Default.setObject3dCSProps(l, a),
          b && b(l),
          l
        )
      }, {
        name: '蓄电池',
        description: '机房蓄电池用于给UPS或其他设备不间断供电，保证机房的稳定运行',
        icon: p('battery.png'),
        category: '环境模型',
        type: 'battery',
        modelDefaultParameters: r(150, 80, 60)
      }
    ),
    g.Default.register(
      'twaver.idc.alternator',
      function (a, b) {
        var c = a.position || [0, 0, 0],
          d = c[0],
          e = c[1],
          f = c[2],
          h = a.width,
          i = a.height,
          j = a.depth,
          k = new mono.Cube(h, i, j)
        return (
          k.s({
            'm.type': 'phong',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.specularmap.image': g.Default.getImagePath(
              'outside_lightmap.jpg'
            ),
            'm.texture.image': o('alternator-side.jpg'),
            'front.m.texture.image': o('alternator-front.jpg'),
            'back.m.texture.image': o('alternator-front.jpg'),
            'top.m.texture.image': o('alternator-top.jpg'),
            'bottom.m.texture.image': o('alternator-top.jpg')
          }),
          k.setPosition(d, 0, f),
          g.Default.setPositionY(k, e),
          k.setClient('showShadow', !0),
          g.Default.setObject3dCSProps(k, a),
          b && b(k),
          k
        )
      }, {
        name: '发电机',
        description: '发电机也是保证机房正常工作的设备之一，在电停的时候发电机自动启动，电来时候，自动停止工作',
        icon: p('alternator.png'),
        category: '环境模型',
        type: 'alternator',
        modelDefaultParameters: r(200, 107, 85)
      }
    ),
    g.Default.register(
      'twaver.idc.camera',
      function (a, b) {
        var c = a.position || [0, 0, 0],
          d = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
          e = c[0],
          f = c[1],
          h = c[2],
          i = new mono.Cylinder(8, 8, 30)
        i.s({
            'm.type': 'phong',
            'm.texture.image': o('bbb.png'),
            'top.m.texture.image': o('camera.png'),
            'bottom.m.texture.image': o('eee.png')
          }),
          i.setRotationX((Math.PI / 3) * 2)
        var j = new mono.Cylinder(12, 12, 40),
          k = new mono.Cylinder(10, 10, 40),
          l = new mono.Cube(20, 40, 20),
          m = new mono.ComboNode([j, l, k], ['+', '-'])
        m.s({
            'm.type': 'phong',
            'm.color': '#333',
            'm.ambient': '#333'
          }),
          m.setRotationX((Math.PI / 3) * 2)
        var n = new mono.Path()
        n.moveTo(0, 0, 0),
          n.lineTo(0, -20, 0),
          n.lineTo(0, -22, -1),
          n.lineTo(0, -24, -24),
          n.lineTo(0, -24, -40)
        var p = new mono.PathNode(n, 10, 4, 10, 'round', 'round')
        p.s({
          'm.type': 'phong',
          'm.color': '#333',
          'm.ambient': '#333'
        })
        var q = new mono.ComboNode([i, m, p], ['+', '+'])
        return q.p(e, f, h), q.setRotation(d[0], d[1], d[2]), b && b(q), q
      }, {
        name: '摄像头',
        description: '机房摄像头，这种类型的摄像头只在某个固定的角度监控视频。支持修改旋转角度',
        icon: p('camera.png'),
        category: '环境模型',
        type: 'camera',
        modelDefaultParameters: q()
      }
    ),
    g.Default.register(
      'twaver.idc.camera1',
      function (a, b) {
        var c = a.position || [0, 0, 0],
          d = g.Default.getRsByDs(a.rotation) || [0, 0, 0],
          e = c[0],
          f = c[1],
          h = c[2],
          i = new mono.Sphere(10)
        i.s({
          'm.type': 'phong',
          'm.color': '#ADADAD',
          'm.ambient': '#ADADAD',
          'm.envmap.image': g.Default.getEnvMap('envmap1')
        })
        var j = new mono.Path()
        j.moveTo(0, 0), j.lineTo(0, 8)
        var k = new mono.PathNode(j, 20, 3, 20, 'plain', 'round')
        k.s({
            'm.type': 'phong',
            'm.color': '#DFDAD0',
            'm.ambient': '#DFDAD0'
          }),
          k.setPositionY(12),
          k.setParent(i),
          (j = new mono.Path()),
          j.moveTo(0, 0),
          j.lineTo(0, 0.5)
        var l = new mono.PathNode(j, 20, 12, 20, 'plain', 'round')
        l.s({
            'm.type': 'phong',
            'm.color': '#DFDAD0',
            'm.ambient': '#DFDAD0',
            'm.specularStrength': 20
          }),
          l.setScaleY(1.7),
          l.setParent(i)
        var j = new mono.Path()
        j.moveTo(0, 0, 0),
          j.lineTo(0, 14, 0),
          j.curveTo(0, 15, 0, -1, 15, 0),
          j.lineTo(-10, 15, 0),
          j.curveTo(-12, 15, 0, -15, 13, 0)
        var m = new mono.PathNode(j, 10, 2, 10, 'plain', 'plain')
        return (
          m.s({
            'm.type': 'phong',
            'm.color': '#DFDAD0',
            'm.ambient': '#DFDAD0'
          }),
          m.setPosition(0, 12, 0),
          m.setParent(i),
          i.setPosition(e, f, h),
          i.setRotation(d[0], d[1], d[2]),
          b && b(i),
          i
        )
      }, {
        name: '摄像头1',
        description: '360度无死角摄像头，这种类型的摄像头监控的范围更广一些',
        icon: p('camera1.png'),
        category: '环境模型',
        type: 'camera',
        modelDefaultParameters: q()
      }
    ),
    g.Default.register(
      'twaver.idc.ACS',
      function (a, b) {
        var c = a.position || [0, 0, 0],
          d = c[0],
          e = c[1],
          f = c[2],
          h = a.width,
          i = a.height,
          j = a.depth,
          k = (g.Default.getRsByDs(a.rotation) || [0, 0, 0],
            g.Default.createCombo({
              type: 'cube',
              width: h,
              height: i,
              depth: j,
              position: [d, e, f],
              style: {
                'm.color': '#ffffff',
                'm.ambient': '#ffffff',
                'm.specular': '#FFFFFF',
                'm.type': 'phong',
                'm.texture.image': o('rack_inside.png'),
                'front.m.texture.image': o('acs.jpg')
              }
            }))
        return b && b(k), k
      }, {
        name: '门禁',
        description: '门禁一般不单独创建，是和门一起使用的，放在门边上的一种控制系统',
        icon: p('acs.png'),
        category: '房间模型',
        type: 'acs',
        modelDefaultParameters: r(11.6, 11.6, 2)
      }
    ),
    g.Default.register(
      'twaver.idc.watercable',
      function (a, b) {
        var c = a.position || [0, 0, 0],
          d = a.color || '#B45F04',
          e = {
            type: 'pathNode',
            data: a.data,
            radius: 100,
            repeat: 25,
            pathImage: o('flow.jpg'),
            style: {
              'm.type': 'phong',
              'm.specularStrength': 50,
              'm.color': d,
              'm.ambient': d
            },
            client: {
              type: 'cable'
            }
          },
          f = g.Default.createCombo(e)
        return (
          f.setStartCap('plain'),
          f.setEndCap('plain'),
          f.setPosition(c[0], c[1], c[2]),
          f.setClient('showShadow', !0),
          b && b(f),
          f
        )
      }, {
        name: '水浸线',
        description: '水浸线描述',
        icon: p('cable.png'),
        category: '环境模型',
        type: 'watercable',
        modelDefaultParameters: {
          color: {
            name: '颜色',
            value: 'white',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          },
          data: {
            name: '点位置',
            value: '',
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
          }
        }
      }
    ),
    g.Default.registerObj(
      'twaver.idc.yangan',
      'yangan',
      './model/idc/obj/', {},
      !1
    ),
    g.Default.registerObj(
      'twaver.idc.changuanqi',
      'wendu',
      './model/idc/obj/', {},
      !1
    ),
    g.Default.registerObj(
      'twaver.idc.shuangjian',
      'shuangjian',
      './model/idc/obj/', {},
      !1
    ),
    g.Default.registerObj(
      'twaver.idc.shuijin',
      'shuijin',
      './model/idc/obj/', {},
      !1
    ),
    g.Default.registerObj(
      'twaver.idc.generator',
      'fadianji1',
      './model/idc/obj/', {
        name: '发电机',
        description: '发电机描述',
        icon: p('cable.png'),
        category: '环境模型',
        type: 'generator',
        modelDefaultParameters: {}
      }
    ),
    g.Default.registerObj('twaver.idc.fire', 'miehuoqi', './model/idc/obj/', {
      name: '灭火器',
      description: '灭火器描述',
      icon: p('cable.png'),
      category: '环境模型',
      type: 'fire',
      modelDefaultParameters: {}
    }),
    g.Default.registerObj(
      'twaver.idc.fireExtinguisherBox',
      'miehuosystem',
      './model/idc/obj/'
    ),
    g.Default.registerObj(
      'twaver.idc.dianchizu',
      'dianchizu',
      './model/idc/obj/'
    )
  var W = function (a) {
      return g.Default.path + 'model/idc/icons/device/' + a + '_front.png'
    },
    X = function (a) {
      return g.Default.path + 'model/idc/images/device/' + a + '_front.png'
    },
    Y = function (a, b) {
      var c = b.height
      g.Default.copy(
        'twaver.idc.' + a + '.device',
        'twaver.idc.equipment' + c,
        function (c) {
          (c.height = b.height), (c.frontImage = X(a))
        }, {
          icon: W(a)
        }
      )
    }
  for (var Z in n) Y(Z, n[Z])
  !(function (a, b) {
      g.Default.register('twaver.wh.storageRack', function (a) {
          for (
            var b = a.height || 200,
              c = a.width || 150,
              d = a.depth || 50,
              e = a.position || [0, 0, 0],
              f = a.level || 4,
              h = a.levelGap || 50,
              i = a.offset || 20,
              j = [],
              k = [
                [-c / 2, 0, -d / 2],
                [-c / 2, 0, d / 2],
                [c / 2, 0, -d / 2],
                [c / 2, 0, d / 2]
              ],
              l = 0; l < k.length; l++
          ) {
            j.push({
              type: 'cube',
              op: '+',
              width: 4,
              depth: 4,
              height: b,
              sideColor: '#243D84',
              position: k[l]
            })
          }
          for (
            var m = [
                [-c / 2, 0, 0],
                [-c / 2, (b - 40) / 2, 0],
                [-c / 2, -(b - 40) / 2, 0],
                [c / 2, 0, 0],
                [c / 2, (b - 40) / 2, 0],
                [c / 2, -(b - 40) / 2, 0]
              ],
              l = 0; l < m.length; l++
          ) {
            j.push({
              type: 'cube',
              op: '+',
              width: 2,
              depth: d,
              height: 2,
              sideColor: '#243D84',
              position: m[l]
            })
          }
          for (
            var n = [
                [c / 2, (b - 40) / 4, 0],
                [c / 2, -(b - 40) / 4, 0],
                [-c / 2, (b - 40) / 4, 0],
                [-c / 2, -(b - 40) / 4, 0]
              ],
              o = Math.sqrt(d * d + (((b - 40) / 2) * (b - 40)) / 2),
              p = Math.atan2((b - 40) / 2, d),
              l = 0; l < n.length; l++
          ) {
            j.push({
              type: 'cube',
              op: '+',
              width: 2,
              depth: o,
              height: 2,
              sideColor: '#243D84',
              rotation: [l % 2 == 0 ? p : -p, 0, 0],
              position: n[l]
            })
          }
          for (var l = 0; f > l; l++) {
            j.push({
              type: 'cube',
              op: '+',
              width: c,
              height: 2,
              depth: 2,
              sideColor: '#D73E27',
              position: [0, i + h * l - b / 2, d / 2]
            })
          }
          for (var l = 0; f > l; l++) {
            j.push({
              type: 'cube',
              op: '+',
              width: c,
              height: 2,
              depth: 2,
              sideColor: '#D73E27',
              position: [0, i + h * l - b / 2, -d / 2]
            })
          }
          var q = g.Default.createCombo(j)
          return q.p(e[0], 0, e[2]), g.Default.setPositionY(q, e[1]), q
        }),
        g.Default.register('twaver.wh.ware', function (a) {
          var b = a.width || 40,
            c = a.depth || 50,
            d = a.height || 40,
            e = a.position || [0, 0, 0],
            f = a.color || 'orange',
            h = {
              width: b,
              depth: c,
              height: d,
              sideColor: f,
              position: e
            }
          return g.Default.createCube(h)
        })
    })(a),
    (function (a, b) {
      var c = function (a) {
          return g.Default.path + 'model/park/images/' + a
        },
        d = function (a, b, d, e, f, h) {
          var i
          if (g.Default._treeInstance) {
            i = g.Default._treeInstance.clonePrefab()
          } else {
            var j = 100,
              k = 80,
              l = c('tree.png'),
              m = [],
              n = new mono.Cylinder(1, 5, k, 10, 1, !1, !1)
            n.s({
              'm.type': 'phong',
              'm.color': '#411212',
              'm.ambient': '#411212',
              'm.texture.repeat': new mono.Vec2(10, 4),
              'm.specularmap.image': g.Default.getImagePath(
                'metal_normalmap.jpg'
              ),
              'm.normalmap.image': g.Default.getImagePath('metal_normalmap.jpg')
            })
            for (var o = 5, p = 0; o > p; p++) {
              var q = new mono.Cube(j, k, 0.01)
              q.s({
                  'm.transparent': !0,
                  'front.m.visible': !0,
                  'front.m.texture.image': l,
                  'back.m.visible': !0,
                  'back.m.texture.image': l
                }),
                q.setSelectable(!1),
                q.setEditable(!1),
                q.setParent(n),
                q.setRotationY((Math.PI * p) / o),
                m.push(q)
            }
            (g.Default._treeInstance = new mono.ComboNode(m)),
            g.Default._treeInstance.setClient(
                'tree.original.y',
                (n.getHeight() / 2) * f
              ),
              (i = g.Default._treeInstance)
          }
          return (
            g.Default.setPositionY(i, b),
            i.setPosition(
              a,
              i.getClient('tree.original.y') + i.getPositionY(),
              d
            ),
            i.setScale(e, f, h),
            i
          )
        },
        e = function (a, b, d, e, f, h) {
          var i = [{
              type: 'cube',
              width: a,
              height: b,
              depth: d,
              op: '+',
              position: [0, 0, 0],
              style: {
                'm.color': '#E0E0E0',
                'm.ambient': '#E0E0E0',
                'm.specular': '#ADADAD',
                'm.specularStrength': 50,
                'm.type': 'phong',
                'm.texture.image': f
              }
            },
            {
              type: 'cube',
              width: a - 0.5,
              height: 2,
              depth: d - 0.5,
              op: '-',
              position: [0, b / 2 - 1, 0],
              style: {
                'm.color': '#E0E0E0',
                'm.ambient': '#E0E0E0',
                'm.specular': '#FFFFFF',
                'm.type': 'phong',
                'm.texture.image': c('ding02.png')
              }
            }
          ]
          if (h) {
            var j = h.cutWidth,
              k = h.cutDepth,
              l = h.cutposition,
              m = h.cutPics,
              n = h.cutX,
              o = n ? l[0] - 0.5 : l[0] + 0.5
            i = i.concat([{
                type: 'cube',
                width: j,
                height: b,
                depth: k,
                op: '+',
                position: [o, 0, l[2] - 0.5],
                style: {
                  'm.color': '#ffffff',
                  'm.ambient': '#ffffff',
                  'm.specular': '#FFFFFF',
                  'm.type': 'phong',
                  'm.texture.image': c('ding01.png')
                }
              },
              {
                type: 'cube',
                width: j,
                height: b,
                depth: k,
                op: '-',
                position: l,
                style: {
                  'm.color': '#ffffff',
                  'm.ambient': '#ffffff',
                  'm.specular': '#FFFFFF',
                  'm.type': 'phong',
                  'm.texture.image': m
                }
              }
            ])
          }
          var p = g.Default.createCombo(i)
          return (
            typeof e[1] === 'number' ?
            p.p(e[0], e[1], e[2]) :
            p.p(e[0], 0, e[2]),
            p
          )
        },
        f = function (a, b) {
          var d = new mono.Cube(a + 5, 0.1, b + 5)
          return (
            d.s({
              'm.texture.image': c('shuinidi.jpg')
            }), d.p(0, 0.5, 0), d
          )
        }
      g.Default.register('twaver.park.tree', function (a, b) {
          var c = a.scale || [2, 2, 2],
            e = c[0],
            f = c[1],
            g = c[2],
            h = (a.delay || !0, a.position || [0, 0, 0]),
            i = h[0],
            j = h[1],
            k = h[2],
            l = d(i, j, k, e, f, g)
          return b && b(l), l
        }),
        g.Default.register('twaver.park.fountain', function (a) {
          var b = a.radius || 16,
            d = new mono.Cube(2 * b, 0.1, 2 * b)
          d.s({
            'm.transparent': !0,
            'm.opacity': 0.001
          })
          var e = [{
                type: 'cylinder',
                radius: 16,
                height: 2,
                op: '+',
                position: [0, 0, 0],
                style: {
                  'm.texture.image': c('cizhuan.png')
                }
              },
              {
                type: 'cylinder',
                radius: 15,
                height: 2,
                op: '-',
                position: [0, 0, 0],
                style: {
                  'm.texture.image': c('cizhuan.png')
                }
              },
              {
                type: 'cylinder',
                radius: 15,
                height: 1,
                op: '+',
                position: [0, 0, 0],
                style: {
                  'm.texture.image': c('shui.png')
                }
              },
              {
                type: 'cylinder',
                radius: 6,
                height: 2,
                op: '+',
                position: [0, 1, 0],
                style: {
                  'm.texture.image': c('cizhuan.png')
                }
              },
              {
                type: 'cylinder',
                radius: 5,
                height: 2,
                op: '-',
                position: [0, 1, 0],
                style: {
                  'm.texture.image': c('cizhuan.png')
                }
              },
              {
                type: 'cylinder',
                radius: 5,
                height: 1,
                op: '+',
                position: [0, 2, 0],
                style: {
                  'm.texture.image': c('shui.png')
                }
              },
              {
                type: 'cylinder',
                radius: 1,
                height: 3,
                op: '+',
                position: [0, 3, 0],
                style: {
                  'm.texture.image': c('cizhuan.png')
                }
              },
              {
                type: 'cylinder',
                topRadius: 1.85,
                bottomRadius: 0.01,
                height: 2,
                op: '+',
                position: [0, 5.5, 0],
                style: {
                  'm.texture.image': c('cizhuan.png'),
                  'top.m.texture.image': c('shui.png')
                }
              }
            ],
            f = g.Default.createCombo(e)
          return f.setParent(d), d
        }),
        g.Default.register('twaver.park.fountain1', function (a) {
          var b = a.width || 20.8,
            d = a.height || 1,
            e = a.depth || 9,
            f = a.position || [0, 0, 0],
            h = [{
                type: 'cube',
                width: b,
                height: d,
                depth: e,
                op: '+',
                style: {
                  'm.color': '#E0E0E0',
                  'm.ambient': '#E0E0E0'
                }
              },
              {
                type: 'cube',
                width: b - 2,
                height: 0.5,
                depth: e - 2,
                position: [0, 0.5, 0],
                op: '-',
                style: {
                  'm.texture.image': c('cizhuan.png'),
                  'bottom.m.texture.image': c('shui.png')
                }
              },
              {
                type: 'cube',
                width: 0.6 * b,
                height: d,
                depth: 0.6 * e,
                op: '+',
                position: [0, 1, 0],
                style: {
                  'm.color': '#E0E0E0',
                  'm.ambient': '#E0E0E0'
                }
              },
              {
                type: 'cube',
                width: 0.6 * (b - 2),
                height: 0.5,
                depth: 0.6 * (e - 2),
                position: [0, 1.5, 0],
                op: '-',
                style: {
                  'm.texture.image': c('cizhuan.png'),
                  'bottom.m.texture.image': c('shui.png')
                }
              },
              {
                type: 'cube',
                width: 0.1 * b,
                height: 1.5,
                depth: 0.1 * e,
                op: '+',
                position: [0, 1.5, 0],
                style: {
                  'm.color': '#E0E0E0',
                  'm.ambient': '#E0E0E0',
                  'top.m.texture.image': c('shui.png')
                }
              }
            ],
            i = g.Default.createCombo(h)
          return i.p(f[0], f[1], f[2]), i
        }),
        g.Default.register('twaver.park.parterre', function (a) {
          for (
            var b = a.width || 26.75,
              d = (a.height || 1, a.depth || 4.8),
              e = a.position || [0, 0, 0],
              f = [{
                  type: 'pathNode',
                  pathWidth: 4,
                  pathHeight: 5,
                  data: [
                    [-b / 2, 0, 0],
                    [b / 2, 0, 0]
                  ],
                  op: '+',
                  style: {
                    'm.type': 'phong',
                    'm.color': '#ADADAD',
                    'm.ambient': '#ADADAD'
                  }
                },
                {
                  type: 'cube',
                  width: b + d,
                  height: d / 2,
                  depth: d,
                  position: [0, 2, 0],
                  op: '-',
                  style: {
                    'm.color': '#E0E0E0',
                    'm.ambient': '#E0E0E0',
                    'm.texture.repeat': new mono.Vec2(10, 2),
                    'm.texture.image': c('hua04.png')
                  }
                },
                {
                  type: 'cube',
                  width: b + d,
                  height: d / 2,
                  depth: d,
                  position: [0, 1 - d / 2, 0],
                  op: '-',
                  style: {
                    'm.color': '#E0E0E0',
                    'm.ambient': '#E0E0E0'
                  }
                }
              ],
              h = g.Default.createCombo(f),
              i = [
                [-12, 1, 0],
                [-4, 1, 0],
                [4, 1, 0],
                [12, 1, 0]
              ],
              j = 0; j < i.length; j++
          ) {
            var k = {
                id: 'twaver.park.tree',
                scale: [0.03, 0.03, 0.03],
                position: i[j]
              },
              l = g.Default.load(k)
            l.setParent(h)
          }
          return h.p(e[0], e[1], e[2]), h
        }),
        g.Default.register('twaver.park.floor', function (a) {
          var b = a.width || 350,
            d = a.depth || 350,
            e = new mono.Cube(b, 0.1, d)
          e.s({
            'm.transparent': !0,
            'm.opacity': 0.001
          })
          for (
            var f = [{
                  type: 'cube',
                  width: b,
                  height: 0.2,
                  depth: d,
                  position: [0, -1, 0],
                  style: {
                    'm.color': '#ffffff',
                    'm.ambient': '#ffffff',
                    'm.specular': '#FFFFFF',
                    'm.type': 'phong',
                    'top.m.texture.image': c('caodi.jpg'),
                    'top.m.texture.repeat': new mono.Vec2(5, 5)
                  },
                  client: {
                    type: 'floor'
                  }
                },
                {
                  type: 'pathNode',
                  pathWidth: 24,
                  pathHeight: 2,
                  pathImage: c('way.png'),
                  repeat: new mono.Vec2(60, 2),
                  offset: new mono.Vec2(0, 0.75),
                  position: [0, 0, 0],
                  scale: [1, 0.01, 1],
                  data: [
                    [140, 0, -100],
                    [140, 0, 100],
                    ['c', 140, 0, 140, 100, 0, 140],
                    [-100, 0, 140],
                    ['c', -140, 0, 140, -140, 0, 100],
                    [-140, 0, -100],
                    ['c', -140, 0, -140, -100, 0, -140],
                    [100, 0, -140],
                    ['c', 140, 0, -140, 140, 0, -100]
                  ]
                },
                {
                  type: 'cube',
                  width: 31.16,
                  depth: 53.6,
                  height: 0.1,
                  position: [0, 1, 100],
                  style: {
                    'm.texture.image': c('b1.png'),
                    'm.texture.repeat': new mono.Vec2(10, 20)
                  }
                }
              ],
              h = g.Default.createCombo(f),
              i = 0; i < h.length; i++
          ) {
            h[i].setParent(e)
          }
          return e
        }),
        g.Default.register('twaver.park.building1', function (a) {
          var b = a.width || 15,
            d = a.height || 12,
            h = a.depth || 70,
            i = a.position || [0, 0, 0],
            j = [
              c('qm06-2.png'),
              c('qm01-1.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm01-3.png'),
              c('qm01-3.png')
            ],
            k = e(b, d, h, i, j),
            l = f(b, h)
          l.p(0, -d / 2, 0), l.setParent(k)
          var m = new mono.Cube(5, 2, 50)
          return (
            m.s({
              'm.texture.image': c('qm01-5.png'),
              'top.m.texture.image': c('qm01-4.png')
            }),
            m.p(-b / 2 + 5, d / 2, -h / 2 + 30),
            m.setParent(k),
            g.Default.setPositionY(k, i[1]),
            k
          )
        }),
        g.Default.register('twaver.park.building2', function (a) {
          var b = a.width || 50,
            d = a.height || 18,
            h = a.depth || 12,
            i = a.position || [0, 0, 0],
            j = [
              c('qm02-2.png'),
              c('qm02-2.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm02-1.png'),
              c('qm02-1.png')
            ],
            k = e(b, d, h, i, j),
            l = f(b, h)
          l.p(0, -d / 2, 0), l.setParent(k)
          var m = [
              c('qm02-4.png'),
              c('qm02-4.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm02-4.png'),
              c('qm02-4.png')
            ],
            n = e(3, 3, 3, [-b / 4, d / 2 - 2, -h / 2 + 3], m)
          n.setParent(k)
          var o = e(3, 3, 3, [b / 4, d / 2 - 2, -h / 2 + 3], m)
          o.setParent(k)
          var p = e(5, 5, 5, [b / 2 - 5, d / 2 - 2, h / 2 - 5], m)
          return (
            p.setParent(k),
            k.setClient('type', 'building'),
            g.Default.setPositionY(k, i[1]),
            k
          )
        }),
        g.Default.register('twaver.park.building3', function (a) {
          var b = a.width || 30,
            d = a.height || 9,
            h = a.depth || 15,
            i = a.position || [0, 0, 0],
            j = [
              c('qm.png'),
              c('qm.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm03-1.png'),
              c('qm03-1.png')
            ],
            k = e(b, d, h, i, j),
            l = f(b, h)
          return (
            l.p(0, -d / 2, 0),
            l.setParent(k),
            k.setClient('type', 'building'),
            g.Default.setPositionY(k, i[1]),
            k
          )
        }),
        g.Default.register('twaver.park.building4', function (a) {
          var b = a.width || 30,
            d = a.height || 30,
            h = a.depth || 15,
            i = a.position || [0, 0, 0],
            j = [
              c('qm04-1.png'),
              c('qm04-1.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm04-2.png'),
              c('qm04-3.png')
            ],
            k = e(b, d, h, i, j),
            l = f(b, h)
          l.p(0, -d / 2, 0), l.setParent(k)
          var m = [
              c('qm.png'),
              c('qm.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm.png'),
              c('qm.png')
            ],
            n = e(6, 3, 3, [-b / 2 + 5, d / 2 - 1, h / 2 - 5], m)
          n.setParent(k)
          var o = e(4, 3, 4, [0, d / 2 - 1, -h / 2 + 5], m)
          o.setParent(k)
          var p = [
              c('qm.png'),
              c('qm.png'),
              c('qm.png'),
              c('qm.png'),
              c('qm.png'),
              c('qm.png')
            ],
            q = e(6, 3, 6, [b / 2 - 4, d / 2 - 1, -h / 2 + 5], p)
          return (
            q.setParent(k),
            k.setClient('type', 'building'),
            g.Default.setPositionY(k, i[1]),
            k
          )
        }),
        g.Default.register('twaver.park.building5', function (a) {
          var b = 70,
            d = 60,
            h = 50,
            i = a.position || [0, 0, 0],
            j = [
              c('qm05-1.png'),
              c('qm05-1.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm05-2.png'),
              c('qm05-2.png')
            ],
            k = e(b, d, h, i, j),
            l = f(b + 10, h + 10)
          l.p(0, -d / 2, 0), l.setParent(k)
          var m = [
              c('qm.png'),
              c('qm.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm.png'),
              c('qm.png')
            ],
            n = e(10, 5, 10, [b / 2 - 10, d / 2, -h / 2 + 10], m)
          n.setParent(k)
          var o = e(20, 5, 20, [-b / 2 + 20, d / 2, 0], m)
          o.setParent(k)
          var p = 8.5,
            q = [{
                type: 'cube',
                width: 16,
                height: 1,
                depth: 6,
                op: '+',
                position: [0, p, 0],
                style: {
                  'm.texture.image': c('qm.png')
                }
              },
              {
                type: 'cube',
                width: 1,
                height: p,
                depth: 1,
                position: [7.5, p / 2, 2.5],
                op: '+',
                style: {
                  'm.texture.image': c('qm.png')
                }
              },
              {
                type: 'cube',
                width: 1,
                height: p,
                depth: 1,
                position: [-7.5, p / 2, 2.5],
                op: '+',
                style: {
                  'm.texture.image': c('qm.png')
                }
              },
              {
                type: 'cube',
                width: 1,
                height: p,
                depth: 1,
                position: [7.5, p / 2, -2.5],
                op: '+',
                style: {
                  'm.texture.image': c('qm.png')
                }
              },
              {
                type: 'cube',
                width: 1,
                height: p,
                depth: 1,
                position: [-7.5, p / 2, -2.5],
                op: '+',
                style: {
                  'm.texture.image': c('qm.png')
                }
              },
              {
                type: 'cube',
                width: 0.5,
                height: p,
                depth: 0.5,
                position: [5.5, p / 2, 2.5],
                op: '+',
                style: {
                  'm.texture.image': c('qm.png')
                }
              },
              {
                type: 'cube',
                width: 0.5,
                height: p,
                depth: 0.5,
                position: [-5.5, p / 2, 2.5],
                op: '+',
                style: {
                  'm.texture.image': c('qm.png')
                }
              }
            ],
            r = g.Default.createCombo(q)
          return (
            r.p(16, -d / 2, h / 2 + 3),
            r.setParent(k),
            k.setClient('type', 'building'),
            g.Default.setPositionY(k, i[1]),
            k
          )
        }),
        g.Default.register('twaver.park.building6', function (a) {
          var b = a.width || 60.11,
            d = a.height || 18,
            h = a.depth || 17.81,
            i = a.position || [0, 0, 0],
            j = [
              c('qm06-4.png'),
              c('qm06-3.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm06-2.png'),
              c('qm06-2.png')
            ],
            k = b - 47,
            l = h / 2,
            m = [-b / 2 + k / 2, 0, h / 2 - l / 2],
            n = [
              c('qm06-4.png'),
              c('qm06-4.png'),
              null,
              null,
              c('qm06-1.png'),
              c('qm06-1.png')
            ],
            o = {
              cutWidth: k,
              cutDepth: l,
              cutposition: m,
              cutPics: n
            },
            p = e(b, d, h, i, j, o),
            q = f(b, h)
          q.p(0, -d / 2, 0), q.setParent(p)
          var r = [
              c('qm06-4.png'),
              c('qm06-4.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm06-4.png'),
              c('qm06-4.png')
            ],
            s = e(6, 3, 6, [b / 2 - 6, d / 2 - 2, -h / 2 + 7], r)
          s.setParent(p)
          var t = e(6, 3, 6, [-6, d / 2 - 2, -h / 2 + 7], r)
          return t.setParent(p), g.Default.setPositionY(p, i[1]), p
        }),
        g.Default.register('twaver.park.building7', function (a) {
          var b = a.width || 49.72,
            d = a.height || 18,
            f = a.depth || 34.77,
            h = a.position || [0, 0, 0],
            i = [
              c('qm07-3.png'),
              c('qm07-3.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm07-1.png'),
              c('qm07-1.png')
            ],
            j = b - 15,
            k = f - 14,
            l = [-b / 2 + j / 2, 0, f / 2 - k / 2],
            m = [
              c('qm07-5.png'),
              c('qm07-5.png'),
              null,
              null,
              c('qm07-4.png'),
              c('qm07-4.png')
            ],
            n = {
              cutWidth: j,
              cutDepth: k,
              cutposition: l,
              cutPics: m
            },
            o = e(b, d, f, h, i, n),
            p = [
              c('qm.png'),
              c('qm.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm.png'),
              c('qm.png')
            ],
            q = e(6, 3, 6, [b / 2 - 6, d / 2, -f / 2 + 7], p)
          return q.setParent(o), g.Default.setPositionY(o, h[1]), o
        }),
        g.Default.register('twaver.park.building8', function (a) {
          var b = a.width || 69.86,
            d = a.height || 40,
            f = a.depth || 49.61,
            h = a.position || [0, 0, 0],
            i = [
              c('qm08-5.png'),
              c('qm08-5.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm08-4.jpg'),
              c('qm08-1.png')
            ],
            j = b - 20,
            k = f - 21,
            l = [b / 2 - j / 2, 0, f / 2 - k / 2],
            m = [
              c('qm08-5.png'),
              c('qm08-5.png'),
              null,
              null,
              c('qm08-1.png'),
              c('qm08-1.png')
            ],
            n = {
              cutWidth: j,
              cutDepth: k,
              cutposition: l,
              cutX: !0,
              cutPics: m
            },
            o = e(b, d, f, h, i, n),
            p = [
              c('qm08-6.png'),
              c('qm08-6.png'),
              c('ding01.png'),
              c('ding01.png'),
              c('qm08-6.png'),
              c('qm08-6.png')
            ],
            q = e(6, 3, 6, [-b / 2 + 8, d / 2 - 1, -f / 2 + 7], p)
          q.setParent(o)
          var r = e(3, 3, 6, [b / 2 - 6, d / 2 - 1, -f / 2 + 7], p)
          return (
            r.setParent(o),
            o.setClient('type', 'building'),
            g.Default.setPositionY(o, h[1]),
            o
          )
        }),
        g.Default.register('twaver.park.park', function (a) {
          var b = [],
            c = [
              [-110, 0, 115],
              [-100, 0, 115],
              [-84, 0, 115],
              [-74, 0, 115],
              [-64, 0, 115],
              [-54, 0, 115],
              [-44, 0, 115],
              [-34, 0, 115],
              [-24, 0, 115],
              [74, 0, 115],
              [64, 0, 115],
              [54, 0, 115],
              [44, 0, 115],
              [34, 0, 115],
              [24, 0, 115],
              [13, 0, 22],
              [13, 0, 14],
              [13, 0, -22],
              [13, 0, -14],
              [22, 0, 22],
              [22, 0, 14],
              [22, 0, 5],
              [22, 0, -22],
              [22, 0, -14],
              [22, 0, -5],
              [-13, 0, 22],
              [-13, 0, 14],
              [-13, 0, -22],
              [-13, 0, -14],
              [-22, 0, 22],
              [-22, 0, 14],
              [-22, 0, 5],
              [-22, 0, -22],
              [-22, 0, -14],
              [-22, 0, -5],
              [-115, 0, -115],
              [-105, 0, -115],
              [-95, 0, -115],
              [-85, 0, -115],
              [-75, 0, -115],
              [-65, 0, -115],
              [-55, 0, -115],
              [55, 0, -115],
              [65, 0, -115],
              [75, 0, -115],
              [85, 0, -115],
              [95, 0, -115],
              [105, 0, -115],
              [115, 0, -115],
              [40, 0, -30],
              [48, 0, -30],
              [56, 0, -30],
              [64, 0, -30],
              [80, 0, -30],
              [88, 0, -30],
              [-42, 0, 22],
              [-42, 0, 14],
              [-42, 0, 8],
              [-42, 0, -22],
              [-42, 0, -14],
              [-42, 0, -8]
            ]
          b.push({
            id: 'twaver.park.floor'
          })
          for (var d = 0; d < c.length; d++) {
            var e = c[d]
            b.push({
              id: 'twaver.park.tree',
              scale: [0.04, 0.04, 0.04],
              position: e
            })
          }
          return (
            (b = b.concat([{
                id: 'twaver.park.fountain'
              },
              {
                id: 'twaver.park.fountain1',
                position: [-105, 0.5, 105]
              }
            ])),
            g.Default.load({
              id: 'twaver.combo',
              data: b
            })
          )
        })
    })(a)
  var $ = function (a) {
    return a.indexOf('/') > 0 ? a : g.Default.path + 'model/idc/images/' + a
  };
  (g.Default.ImageShapeNode = function () {
    g.Default.ImageShapeNode.superClass.constructor.apply(this, arguments),
      this.setClient('showFloor', !0),
      this.setClient('closed', !0),
      this.setClient('focusColor', 'green'),
      this.setClient('resizeBorderWidth', 10),
      this.setClient('resizeBorderLength', 18),
      this.setClient('resizeBorderGap', 10),
      this.setClient('resizeBorderColor', 'yellow'),
      this.setClient('size', {
        x: 0,
        y: 300,
        z: 10
      }),
      this.setClient('fill', !0),
      this.setClient('imageSrc', 'floor.png'),
      this.setStyle('vector.outline.color', '#333333'),
      this.setStyle('vector.outline.width', 10),
      this.setStyle('vector.fill.color', 'rgba(184,211,240,0.5)'),
      this.setStyle('select.style', 'none'),
      this.setClient('repeat', 1e3),
      this.setClient('dimLeadLength', 35),
      this.setClient('dimLineOffset', 0.7),
      this.setClient('dimLineWidth', 1),
      this.setClient('dimColor', '#F07819'),
      this.setClient('dimTextGap', 5),
      this.setClient('dimTextFont', '12px Arial'),
      this.setClient('dimArrowWidth', 8),
      this.setClient('dimArrowHeight', 3),
      this.setClient('coordTextColor', 'white'),
      this.setClient('coordTextFont', '12px Arial'),
      this.setClient('coordTextOffsetX', 0),
      this.setClient('coordTextOffsetY', 20),
      this.setClient('coordTextAlign', 'center'),
      this.setClient('coordTextBaseline', 'middle'),
      this.setClient('coordTextBackground', 'rgba(240,120,25,0.7)'),
      this.setClient('decimalNumber', 0)
  }),
  twaver.Util.ext('make.Default.ImageShapeNode', twaver.ShapeNode, {
      getCanvasUIClass: function () {
        return g.Default.ImageShapeNodeUI
      },
      getElementUIClass: function () {
        return g.Default.ImageShapeNodeUI
      },
      getVectorUIClass: function () {
        return g.Default.ImageShapeNodeUI
      },
      onChildRemoved: function (a, b) {
        this.refreshChilden()
      },
      onChildAdded: function (a, b) {
        this.refreshChilden()
      },
      onPropertyChanged: function (a) {
        g.Default.ImageShapeNode.superClass.onPropertyChanged.call(this, a),
          a.property === 'points' && this.refreshChilden()
      },
      checkBlockOnEdge: function (a) {
        var b = !1
        return (
          this.getChildren().forEach(function (c) {
            c.getClient('edgeIndex') === a && (b = !0)
          }),
          b
        )
      },
      refreshChilden: function () {
        this.getChildren().forEach(function (a) {
          a.refresh && a.refresh()
        })
      },
      isPointOnPoints: function (a) {
        for (var b = this.getPoints(), c = 0; c < b.size(); c++) {
          if (_twaver.math.getDistance(a, b.get(c)) <= 10) return !0
        }
        return !1
      },
      getPointIndex: function (a) {
        var b = this.getPoints()
        if (b.size() < 2) return -1
        for (var c = 0; c < b.size(); c++) {
          if (_twaver.math.getDistance(a, b.get(c)) <= 10) return -1
        }
        for (var d, e = b.get(0), c = 1; c < b.size(); c++) {
          if (((d = b.get(c)), this.isPointOnLine(a, e, d, 10))) return c - 1
          e = d
        }
        return (
          (e = b.get(0)), this.isPointOnLine(a, e, d, 10) ? b.size() - 1 : -1
        )
      },
      isPointOnLine: function (a, b, c, d) {
        d < 0 && (d = 0)
        var e = this.getDistanceFromPointToLine(a, b, c)
        return (
          d >= e &&
          a.x >= Math.min(b.x, c.x) - d &&
          a.x <= Math.max(b.x, c.x) + d &&
          a.y >= Math.min(b.y, c.y) - d &&
          a.y <= Math.max(b.y, c.y) + d
        )
      },
      getDistanceFromPointToLine: function (a, b, c) {
        if (b.x === c.x) return Math.abs(a.x - b.x)
        var d = (c.y - b.y) / (c.x - b.x),
          e = (c.x * b.y - b.x * c.y) / (c.x - b.x)
        return Math.abs(d * a.x - a.y + e) / Math.sqrt(d * d + 1)
      },
      setOffsetYofPoints: function (a) {
        this.offsetY = a
      },
      setOffsetXofPoints: function (a) {
        this.offsetX = a
      },
      getOffsetYofPoints: function () {
        return this.offsetY || 0
      },
      getOffsetXofPoints: function () {
        return this.offsetX || 0
      },
      setNegatedYInterval: function (a) {
        this.negatedYInterval = a
      },
      getNegatedYInterval: function () {
        return this.negatedYInterval
      }
    }),
    (g.Default.ImageShapeNodeUI = function (a, b) {
      g.Default.ImageShapeNodeUI.superClass.constructor.apply(this, arguments)
    }),
    twaver.Util.ext(
      'make.Default.ImageShapeNodeUI',
      twaver.vector.ShapeNodeUI, {
        drawDefaultBody: function (a) {
          var b = this._element
          if (b._points && !(b._points.size() < 1)) {
            var c = this._getZoomPoints(),
              d = b._segments,
              e = b.getStyle('vector.outline.width'),
              f = b.getStyle('vector.outline.pattern'),
              g = b.getStyle('vector.outline.width'),
              h = b.getStyle('vector.outline.color'),
              i = b.getClient('closed'),
              j = twaver.Util.getRect(c),
              k = a
            e > 0 && twaver.Util.grow(j, e, e)
            var l,
              m = this._network.isSelected(this._element),
              n = this._element.getClient('resizeBorderWidth'),
              o = this._element.getClient('resizeBorderLength'),
              p = this._element.getClient('resizeBorderGap'),
              q = this._element.getClient('resizeBorderColor')
            m && (l = _twaver.clone(j)),
              (k = this.setShadow(this, k)),
              k.beginPath()
            var r = $(b.getClient('imageSrc'))
            if (r) {
              var s = twaver.Util.getImageAsset(r)
              s
                ?
                (k.fillStyle = k.createPattern(s.getImage(), 'repeat')) :
                twaver.Util.registerImageByUrl(r, r, null, function () {
                  b.setClient('imageSrc-trigger', 1)
                })
            }
            (k.lineWidth = g),
            (k.strokeStyle = h),
            _twaver.g.drawLinePoints(k, c, f, d, i),
              b.getClient('fill') && k.fill(),
              k.stroke()
            var t = b.getClient('focusIndex')
            if (t >= 0) {
              var u = c.get(t),
                v = c.get(t === c.size() - 1 ? 0 : t + 1)
              k.beginPath(),
                (k.strokeStyle = b.getClient('focusColor')),
                k.moveTo(u.x, u.y),
                k.lineTo(v.x, v.y),
                k.stroke()
            }
            if (m) {
              (k.lineWidth = n + 2),
              (k.strokeStyle = 'black'),
              k.beginPath(),
                (this._borderLines = [])
              var w, x, y;
              (w = {
                x: l.x - p,
                y: l.y - p
              }),
              (x = {
                x: w.x,
                y: w.y + o
              }),
              (y = {
                x: w.x + o,
                y: w.y
              }),
              this._addBorderLine(k, w, x, y),
                (w = {
                  x: l.x + l.width + p,
                  y: l.y - p
                }),
                (x = {
                  x: w.x - o,
                  y: w.y
                }),
                (y = {
                  x: w.x,
                  y: w.y + o
                }),
                this._addBorderLine(k, w, x, y),
                (w = {
                  x: l.x + l.width + p,
                  y: l.y + l.height + p
                }),
                (x = {
                  x: w.x,
                  y: w.y - o
                }),
                (y = {
                  x: w.x - o,
                  y: w.y
                }),
                this._addBorderLine(k, w, x, y),
                (w = {
                  x: l.x - p,
                  y: l.y + l.height + p
                }),
                (x = {
                  x: w.x + o,
                  y: w.y
                }),
                (y = {
                  x: w.x,
                  y: w.y - o
                }),
                this._addBorderLine(k, w, x, y),
                k.stroke(),
                k.beginPath(),
                (k.lineWidth = n),
                (k.strokeStyle = q),
                (o -= 1),
                (w = {
                  x: l.x - p,
                  y: l.y - p
                }),
                (x = {
                  x: w.x,
                  y: w.y + o
                }),
                (y = {
                  x: w.x + o,
                  y: w.y
                }),
                k.moveTo(x.x, x.y),
                k.lineTo(w.x, w.y),
                k.lineTo(y.x, y.y),
                (w = {
                  x: l.x + l.width + p,
                  y: l.y - p
                }),
                (x = {
                  x: w.x - o,
                  y: w.y
                }),
                (y = {
                  x: w.x,
                  y: w.y + o
                }),
                k.moveTo(x.x, x.y),
                k.lineTo(w.x, w.y),
                k.lineTo(y.x, y.y),
                (w = {
                  x: l.x + l.width + p,
                  y: l.y + l.height + p
                }),
                (x = {
                  x: w.x,
                  y: w.y - o
                }),
                (y = {
                  x: w.x - o,
                  y: w.y
                }),
                k.moveTo(x.x, x.y),
                k.lineTo(w.x, w.y),
                k.lineTo(y.x, y.y),
                (w = {
                  x: l.x - p,
                  y: l.y + l.height + p
                }),
                (x = {
                  x: w.x + o,
                  y: w.y
                }),
                (y = {
                  x: w.x,
                  y: w.y - o
                }),
                k.moveTo(x.x, x.y),
                k.lineTo(w.x, w.y),
                k.lineTo(y.x, y.y),
                k.stroke()
            }
            m && (this.drawCoord(k), this.drawDim(k))
          }
        },
        validateBodyBounds: function () {
          g.Default.ImageShapeNodeUI.superClass.validateBodyBounds.call(this)
          var a = this._element
          if (a._points && !(a._points.size() < 1)) {
            var b = this._getZoomPoints()
            if (!(b.size() < 2)) {
              var c = a.getStyle('vector.outline.width'),
                d = this.getPathRect('vector', !0)
              c > 0 && twaver.Util.grow(d, c, c)
              var e = this._network.isSelected(this._element),
                f = this._element.getClient('resizeBorderWidth'),
                h = this._element.getClient('resizeBorderGap')
              e &&
                twaver.Util.grow(
                  d,
                  ((f + h) / this._network.getZoom()) * 2 + 2,
                  ((f + h) / this._network.getZoom()) * 2 + 2
                ),
                this.addBodyBounds(d)
            }
          }
        },
        _addBorderLine: function (a, b, c, d) {
          this._borderLines.push({
              point1: c,
              point2: b
            }),
            this._borderLines.push({
              point1: b,
              point2: d
            }),
            a.moveTo(c.x, c.y),
            a.lineTo(b.x, b.y),
            a.lineTo(d.x, d.y)
        },
        isPointOnBorderLine: function (a) {
          if (!this._borderLines) return null
          for (
            var b = this._element.getClient('resizeBorderWidth'), c = 0; c < this._borderLines.length; c++
          ) {
            var d = this._borderLines[c]
            if (this._element.isPointOnLine(a, d.point1, d.point2, b)) {
              return Math.floor(c / 2)
            }
          }
          return null
        },
        drawDim: function (a) {
          function b(a, b, e) {
            if (e != 0) {
              var f = _twaver.math.getCenterPoint(a, b),
                g = (angle1 = _twaver.math.getAngle(a, b))
              b.x < a.x && (g = Math.PI + g)
              var h = e.toFixed(2),
                k = d.measureText(h).width,
                l = _twaver.math.createMatrix(g, a.x, a.y),
                n = l.transform({
                  x: a.x,
                  y: a.y - i
                }),
                q = l.transform({
                  x: a.x,
                  y: a.y - i * j
                })
              l = _twaver.math.createMatrix(g, b.x, b.y)
              var r = l.transform({
                  x: b.x,
                  y: b.y - i
                }),
                s = l.transform({
                  x: b.x,
                  y: b.y - i * j
                }),
                t = c.getPointBetween(q, s, 0.5 - (k / 2 + m) / e),
                u = c.getPointBetween(q, s, 0.5 + (k / 2 + m) / e),
                v = c.getPointBetween(q, s, o / e)
              l = _twaver.math.createMatrix(g, v.x, v.y)
              var w = l.transform({
                  x: v.x,
                  y: v.y - p
                }),
                x = l.transform({
                  x: v.x,
                  y: v.y + p
                }),
                y = c.getPointBetween(q, s, 1 - o / e)
              l = _twaver.math.createMatrix(g, y.x, y.y)
              var z = l.transform({
                  x: y.x,
                  y: y.y - p
                }),
                A = l.transform({
                  x: y.x,
                  y: y.y + p
                })
              d.beginPath(),
                d.moveTo(a.x, a.y),
                d.lineTo(n.x, n.y),
                d.moveTo(b.x, b.y),
                d.lineTo(r.x, r.y),
                d.moveTo(q.x, q.y),
                d.lineTo(t.x, t.y),
                d.moveTo(u.x, u.y),
                d.lineTo(s.x, s.y),
                d.moveTo(q.x, q.y),
                d.lineTo(w.x, w.y),
                d.moveTo(q.x, q.y),
                d.lineTo(x.x, x.y),
                d.moveTo(s.x, s.y),
                d.lineTo(z.x, z.y),
                d.moveTo(s.x, s.y),
                d.lineTo(A.x, A.y),
                d.stroke(),
                d.save(),
                (f = {
                  x: (q.x + s.x) / 2,
                  y: (q.y + s.y) / 2
                }),
                d.translate(f.x, f.y),
                d.rotate(angle1),
                d.translate(-f.x, -f.y),
                d.fillText(h, f.x, f.y),
                d.restore()
            }
          }
          var c = this,
            d = a,
            e = this._element,
            f = this._getZoomPoints(),
            g = e.getPoints()
          if (f && !(f.size() < 2) && this._network.isSelected(e)) {
            var h = this.getBodyRect(),
              i = e.getClient('dimLeadLength'),
              j = e.getClient('dimLineOffset'),
              k = e.getClient('dimLineWidth'),
              l = e.getClient('dimColor'),
              m = e.getClient('dimTextGap'),
              n = e.getClient('dimTextFont'),
              o = e.getClient('dimArrowWidth'),
              p = e.getClient('dimArrowHeight'),
              q = {
                x: h.x - i,
                y: h.y - i,
                width: h.width + 2 * i,
                height: h.height + 2 * i
              }
            this.isClockwise() && (i = -i),
              this.addBodyBounds(q),
              (d = this.setShadow(this, d)),
              (d.strokeStyle = l),
              (d.lineWidth = k),
              (d.fillStyle = l),
              (d.font = n),
              (d.textAlign = 'center'),
              (d.textBaseline = 'middle')
            for (
              var r = f.get(0), s = g.get(0), t = 1, u = f.size(); u > t; t++
            ) {
              var v = f.get(t),
                w = g.get(t),
                x = _twaver.math.getDistance(s, w);
              (s = w), b(r, v, x), (r = v)
            }
            if (u > 2) {
              var x = _twaver.math.getDistance(s, g.get(0))
              b(r, f.get(0), x)
            }
          }
        },
        getPointBetween: function (a, b, c) {
          return {
            x: a.x + (b.x - a.x) * c,
            y: a.y + (b.y - a.y) * c
          }
        },
        isClockwise: function (a) {
          var b = this._element,
            a = b.getPoints()
          if (!a || a.size() < 2) return !0
          for (var c = 0, d = a.size(), e = 0; d > e; e++) {
            var f = a.get(e),
              g = a.get(e + 1 === d ? 0 : e + 1)
            c += (g.x - f.x) * (g.y + f.y)
          }
          return c > 0
        },
        drawCoord: function (a) {
          var b = a,
            c = this._element,
            d = this._getZoomPoints(),
            e = c.getPoints()
          if (d && e) {
            var f = this.getBodyRect(),
              g = c.getClient('coordTextColor'),
              h = c.getClient('coordTextFont'),
              i = c.getClient('coordTextOffsetX'),
              j = c.getClient('coordTextOffsetY'),
              k = c.getClient('coordTextAlign'),
              l = c.getClient('coordTextBaseline'),
              m = c.getClient('coordTextBackground'),
              n = c.getClient('decimalNumber'),
              o = {
                x: f.x - 100,
                y: f.y - 50,
                width: f.width + 200,
                height: f.height + 100
              }
            this.addBodyBounds(o),
              (b = this.setShadow(this, b)),
              b.save(),
              (b.font = h)
            for (var p = 0, q = d.size(); q > p; p++) {
              var r = d.get(p),
                s = e.get(p),
                t =
                '(' +
                (r.x + c.getOffsetXofPoints()).toFixed(n) +
                ', ' +
                (
                  r.y * (c.getNegatedYInterval() ? -1 : 1) +
                  c.getOffsetYofPoints()
                ).toFixed(n) +
                ')'
              s &&
                (t =
                  '(' +
                  (s.x + c.getOffsetXofPoints()).toFixed(n) +
                  ', ' +
                  (
                    s.y * (c.getNegatedYInterval() ? -1 : 1) +
                    c.getOffsetYofPoints()
                  ).toFixed(n) +
                  ')')
              var u = _twaver.g.getTextSize(b.font, t);
              (b.fillStyle = m),
              b.fillRect(
                  r.x - u.width / 2 + i,
                  r.y - u.height / 2 + j,
                  u.width,
                  u.height
                ),
                (b.fillStyle = g),
                (b.textAlign = k),
                (b.textBaseline = l),
                b.fillText(t, r.x, r.y + j)
            }
            b.restore()
          }
        }
      }
    ),
    (g.Default.WallShapeNode = function () {
      g.Default.WallShapeNode.superClass.constructor.apply(this, arguments)
    }),
    twaver.Util.ext(g.Default.WallShapeNode, g.Default.ImageShapeNode, {}),
    (g.Default.InnerWallShapeNode = function () {
      g.Default.InnerWallShapeNode.superClass.constructor.apply(
          this,
          arguments
        ),
        this.setClient('imageSrc', 'room.png'),
        this.setStyle('vector.outline.color', '#333333'),
        this.setStyle('vector.outline.width', 5),
        this.setClient('closed', !1),
        this.setClient('showFloor', !1),
        this.setClient('focusColor', 'green'),
        this.setClient('resizeBorderWidth', 10),
        this.setClient('resizeBorderLength', 25),
        this.setClient('resizeBorderGap', 10),
        this.setClient('resizeBorderColor', 'yellow'),
        this.setClient('size', {
          x: 0,
          y: 230,
          z: 4
        }),
        this.setClient('repeat', {
          row: 1,
          column: 1
        })
    }),
    twaver.Util.ext(g.Default.InnerWallShapeNode, g.Default.WallShapeNode, {}),
    (g.Default.FloorShapeNode = function () {
      g.Default.FloorShapeNode.superClass.constructor.apply(this, arguments),
        this.setClient('imageSrc', 'floor.png'),
        this.setStyle('vector.outline.color', '#FFFFFF'),
        this.setStyle('vector.outline.width', 0),
        this.setClient('closed', !0),
        this.setClient('focusColor', 'blue'),
        this.setClient('repeat', 100),
        this.setClient('size', {
          x: 0,
          y: 0,
          z: 0.1
        })
    }),
    twaver.Util.ext(
      'make.Default.FloorShapeNode',
      g.Default.ImageShapeNode, {}
    ),
    (g.Default.LineWidthShapeNode = function () {
      g.Default.LineWidthShapeNode.superClass.constructor.apply(
          this,
          arguments
        ),
        this.setStyle('vector.outline.color', '#B45F04'),
        this.setStyle('vector.outline.width', 5),
        this.setStyle('vector.fill.color', 'rgba(184,211,240,0)'),
        this.setClient('closed', !1),
        this.setClient('size', {
          x: 0,
          y: 0,
          z: 0.1
        }),
        this.setClient('transparent', !1),
        this.setClient('opacity', 1),
        this.setClient('fill', !1)
    }),
    twaver.Util.ext(g.Default.LineWidthShapeNode, g.Default.ImageShapeNode, {}),
    (g.Default.Block = function () {
      g.Default.Block.superClass.constructor.apply(this, arguments),
        this.setClient('length', 90),
        this.setClient('edgeIndex', -1),
        this.setClient('offset', 0.5),
        this.setClient('gap', 0),
        this.setClient('angle', 0),
        this.setClient('focus', !1),
        this.setStyle('vector.outline.width', 2),
        this.setStyle('vector.outline.color', 'gray'),
        this.setStyle('vector.fill.color', 'white'),
        this.setSize(0, 0),
        this.setClient('fullWidth', !1),
        this.setClient('horizontalFlip', !1),
        this.setImage('image_block'),
        this.setClient('height', this.blockHeight),
        this.setClient('positionY', this.positionY)
    }),
    twaver.Util.ext('make.Default.Block', twaver.Node, {
      onPropertyChanged: function (a) {
        g.Default.Block.superClass.onPropertyChanged.call(this, a),
          !this.getParent() ||
          (a.property !== 'C:length' &&
            a.property !== 'C:edgeIndex' &&
            a.property !== 'C:offset' &&
            a.property !== 'C:gap') ||
          this.refresh()
      },
      refresh: function () {
        var a = this.getParent(),
          b = this.getClient('edgeIndex'),
          c = this.getClient('offset'),
          d = a.getPoints()
        if (d && b >= 0 && b < d.size()) {
          var e = d.get(b),
            f = d.get(b === d.size() - 1 ? 0 : b + 1),
            g = f.x - e.x,
            h = f.y - e.y,
            i = {
              x: e.x + g * c,
              y: e.y + h * c
            },
            j = this.getAngle(g, h),
            k = this.getStyle('vector.outline.width'),
            l = this.getClient('gap'),
            m = this.getClient('length') / 2 + k / 2,
            n = a.getStyle('vector.outline.width') / 2 + k / 2 + l,
            o = twaver.Util.getRect([
              twaver.Util.transformPoint(i, j, -m, -n).point,
              twaver.Util.transformPoint(i, j, m, -n).point,
              twaver.Util.transformPoint(i, j, m, n).point,
              twaver.Util.transformPoint(i, j, -m, n).point
            ])
          this.setSize(o.width, o.height),
            this.setCenterLocation(i),
            this.setClient('angle', j),
            this.setClient(
              'leftPoint',
              twaver.Util.transformPoint(i, j, -m, 0).point
            ),
            this.setClient(
              'rightPoint',
              twaver.Util.transformPoint(i, j, m, 0).point
            )
        }
      },
      getAngle: function (a, b) {
        return a === 0 ?
          b === 0 ?
          0 :
          b > 0 ?
          Math.PI / 2 :
          -Math.PI / 2 :
          Math.atan(b / a)
      },
      getEdgeIndex: function () {
        return this.getClient('edgeIndex')
      },
      isDoor: function () {
        return this instanceof g.Default.Door
      },
      isWindow: function () {
        return this instanceof g.Default.Window
      },
      isCutoff: function () {
        return this instanceof g.Default.Cutoff
      },
      getBlockWidth: function () {
        return Math.abs(this.getClient('length'))
      },
      getBlockHeight: function () {
        return Math.abs(this.getClient('height'))
      },
      getBlockDepth: function () {
        return Math.abs(this.getClient('depth'))
      },
      getBlockPicture: function () {
        return this.getClient('picture')
      },
      getBlockPositionY: function () {
        return Math.abs(this.getClient('positionY'))
      }
    }),
    (g.Default.Door = function () {
      g.Default.Door.superClass.constructor.apply(this, arguments),
        this.setClient('positionY', 0),
        this.setClient('length', 205)
    }),
    twaver.Util.ext('make.Default.Door', g.Default.Block, {}),
    (g.Default.Window = function () {
      g.Default.Window.superClass.constructor.apply(this, arguments),
        this.setClient('positionY', 100),
        this.setClient('length', 120)
    }),
    twaver.Util.ext('make.Default.Window', g.Default.Block, {}),
    (g.Default.Cutoff = function () {
      g.Default.Cutoff.superClass.constructor.apply(this, arguments),
        this.setClient('positionY', 100)
    }),
    twaver.Util.ext('make.Default.Cutoff', g.Default.Block, {}),
    twaver.Util.registerImage('image_block', {
      rotate: '<%=getClient("angle")*180/Math.PI%>',
      diameter: function (a, b) {
        var c = 10,
          d = a.getParent()
        return (
          d &&
          (c = d.getStyle('vector.outline.width') + 2 * a.getClient('gap')),
          c
        )
      },
      v: [{
          shape: 'rect',
          rect: function (a, b) {
            var c = a.getClient('length')
            c && (c = Math.abs(c))
            var d = a.getParent(),
              e = 10
            d &&
              (e = d.getStyle('vector.outline.width') + 2 * a.getClient('gap'))
            var f = this.diameter(a, b)
            return c > f && (c -= f), (e = e), [-c / 2, -e / 2, c, e]
          },
          lineWidth: '<%=getStyle("vector.outline.width")%>',
          lineColor: '<%if(getClient("focus")){return "green"}else{return getStyle("vector.outline.color")}%>',
          fill: '<%=getStyle("vector.fill.color")%>'
        },
        {
          shape: 'line',
          x1: function (a, b) {
            if (a instanceof g.Default.Window || a instanceof g.Default.Door) {
              var c = a.getClient('length')
              c && (c = Math.abs(c))
              var d = this.diameter(a, b)
              return c > d && (c -= d), -c / 2
            }
            return 0
          },
          y1: 0,
          x2: function (a, b) {
            if (a instanceof g.Default.Window || a instanceof g.Default.Door) {
              var c = a.getClient('length')
              c && (c = Math.abs(c))
              var d = this.diameter(a, b)
              return c > d && (c -= d), c / 2
            }
            return 0
          },
          y2: 0,
          lineWidth: '<%=getStyle("vector.outline.width")%>',
          lineColor: '<%if(getClient("focus")){return "green"}else{return getStyle("vector.outline.color")}%>',
          lineDash: function (a) {
            return a instanceof g.Default.Door ? [10, 2] : void 0
          }
        },
        {
          shape: 'circle',
          cx: function (a, b) {
            var c = a.getClient('length')
            c && (c = Math.abs(c))
            var d = this.diameter(a, b)
            return c > d && (c -= d), -c / 2
          },
          cy: 0,
          r: function (a, b) {
            if (b == null || !b.getSelectionModel().contains(a)) return 0
            var c = a.getParent(),
              d = 10
            return (
              c &&
              (d =
                c.getStyle('vector.outline.width') + 2 * a.getClient('gap')),
              (d = d),
              d / 2
            )
          },
          lineWidth: 1,
          fill: 'yellow',
          stroke: 'black'
        },
        {
          shape: 'circle',
          cx: function (a, b) {
            var c = a.getClient('length')
            c && (c = Math.abs(c))
            var d = this.diameter(a, b)
            return c > d && (c -= d), c / 2
          },
          cy: 0,
          r: function (a, b) {
            if (b == null || !b.getSelectionModel().contains(a)) return 0
            var c = a.getParent(),
              d = 10
            return (
              c &&
              (d =
                c.getStyle('vector.outline.width') + 2 * a.getClient('gap')),
              (d = d),
              d / 2
            )
          },
          lineWidth: 1,
          fill: 'yellow',
          stroke: 'black'
        }
      ]
    })
  var p = function (a) {
      return a.indexOf('/') > 0 ? a : g.Default.path + 'model/idc/icons/' + a
    },
    o = function (a) {
      return a.indexOf('/') > 0 ? a : g.Default.path + 'model/idc/images/' + a
    },
    _ = function (a) {
      return a.indexOf('/') > 0 ?
        a :
        a.length > 4 && a.lastIndexOf('.svg') == a.length - 4 ?
        g.Default.path + 'model/idc/svg/' + a :
        g.Default.path + 'model/idc/svg/' + a + '.svg'
    },
    aa = {
      wall: 100,
      innerWall: 200,
      wallChild: 300,
      innerWallChild: 400,
      area: 500,
      channel: 600,
      rack: 700,
      default: 800
    },
    ba = function (a, b, c, d, e, f, g, h, i) {
      return {
        name: a || '外墙',
        description: b || '外墙说明',
        icon: p(c || 'column.png'),
        category: d || '默认模型',
        categoryNumber: e || 10,
        order: f || 10,
        type: h || 'twaver.Node',
        layer: i || aa['default'],
        modelDefaultParameters: g || {}
      }
    },
    ca = function (a, c) {
      a = a || {}
      var d = {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        width: {
          name: '宽度',
          value: a.width,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '厚度',
          value: a.depth,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
          hidden: !1
        },
        x: {
          name: 'X轴位置',
          value: 0,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
          exportable: !1
        },
        y: {
          name: 'Z轴位置',
          value: 0,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
          exportable: !1
        },
        angle: {
          name: 'Y轴旋转',
          value: 0,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
          exportable: !1
        }
      }
      return c === !1 && ((d.width.editable = !1), (d.height.editable = !1)), d
    },
    da = function (a) {
      return (
        (a = a || {}), {
          bid: {
            name: '业务ID',
            value: b,
            type: g.Default.PARAMETER_TYPE_STRING,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
          },
          width: {
            name: '宽度',
            value: a.width,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          height: {
            name: '厚度',
            value: a.depth,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
            hidden: !1
          },
          x: {
            name: 'X轴位置',
            value: 0,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
            exportable: !1
          },
          y: {
            name: 'Z轴位置',
            value: 0,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
            exportable: !1
          },
          position: {
            name: '位置',
            value: [0, 0, 0],
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            hidden: !0
          },
          angle: {
            name: 'Y轴旋转',
            value: 0,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
            exportable: !1
          }
        }
      )
    },
    ea = function (a) {
      return (
        (a = a || {}), {
          bid: {
            name: '业务ID',
            value: b,
            type: g.Default.PARAMETER_TYPE_STRING,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
          },
          x: {
            name: 'X轴位置',
            value: 0,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
            exportable: !1
          },
          y: {
            name: 'Z轴位置',
            value: 0,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
            exportable: !1
          },
          position: {
            name: '位置',
            value: [0, 0, 0],
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            hidden: !0
          },
          angle: {
            name: 'Y轴旋转',
            value: 0,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
            exportable: !1
          },
          color: {
            name: '颜色',
            value: '#B45F04',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            hidden: !0
          },
          'vector.outline.color': {
            name: '颜色',
            value: '#B45F04',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE,
            exportable: !1
          }
        }
      )
    },
    fa = function (a) {
      return (
        (a = a || {}), {
          bid: {
            name: '业务ID',
            value: b,
            type: g.Default.PARAMETER_TYPE_STRING,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
          },
          x: {
            name: 'X轴位置',
            value: 0,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
            exportable: !1
          },
          y: {
            name: 'Z轴位置',
            value: 0,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
            exportable: !1
          },
          position: {
            name: '位置',
            value: [0, 200, 0],
            type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            hidden: !0
          },
          positionY: {
            name: '离地高度',
            value: 200,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT,
            exportable: !1
          },
          angle: {
            name: 'Y轴旋转',
            value: 0,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
            exportable: !1
          }
        }
      )
    }
  g.Default.register(
      'twaver.idc.wall.top',
      function (a) {
        var b = {
          objType: 'wall',
          client: {
            data: a.data,
            type: 'wall'
          }
        }
        g.Default.copyProperties(a, b)
        var c = g.Default.create2dShapeNode(b),
          d = a.children
        return (
          d &&
          d.forEach(function (a) {
            var b = g.Default.load(a)
            b.setParent(c)
          }),
          c
        )
      },
      ba(
        '外墙',
        '外墙说明',
        'wall.png',
        '2d房间模型',
        10,
        10, {},
        'wall',
        aa.wall
      )
    ),
    g.Default.register(
      'twaver.idc.wall1.top',
      function (a) {
        var b = {
          id: 'twaver.idc.wall.top',
          data: [
            [-2e3, -2e3],
            [2e3, -2e3],
            [2e3, 2e3],
            [-2e3, 2e3]
          ]
        }
        return g.Default.copyProperties(a, b), g.Default.load(b)
      },
      ba(
        '外墙1',
        '外墙说明',
        'wall1.png',
        '2d房间模型',
        10,
        20, {},
        'wall1',
        aa.wall
      )
    ),
    g.Default.register(
      'twaver.idc.wall2.top',
      function (a) {
        var b = {
            id: 'twaver.idc.wall.top'
          },
          c = {
            data: [
              [-2500, -2500],
              [0, -2500],
              [0, 0],
              [2500, 0],
              [2500, 2500],
              [-2500, 2500]
            ]
          }
        return (
          g.Default.copyProperties(a, b),
          g.Default.copyProperties(c, b),
          g.Default.load(b)
        )
      },
      ba(
        '外墙2',
        '外墙说明',
        'wall2.png',
        '2d房间模型',
        10,
        20, {},
        'wall2',
        aa.wall
      )
    ),
    g.Default.register(
      'twaver.idc.wall3.top',
      function (a) {
        var b = {
            id: 'twaver.idc.wall.top'
          },
          c = {
            data: [
              [-2500, -500],
              [-1300, -500],
              [-1300, -2500],
              [1300, -2500],
              [1300, -500],
              [2500, -500],
              [2500, 2500],
              [-2500, 2500]
            ]
          }
        return (
          g.Default.copyProperties(a, b),
          g.Default.copyProperties(c, b),
          g.Default.load(b)
        )
      },
      ba(
        '外墙3',
        '外墙说明',
        'wall3.png',
        '2d房间模型',
        10,
        20, {},
        'wall3',
        aa.wall
      )
    ),
    g.Default.register(
      'twaver.idc.wall4.top',
      function (a) {
        var b = {
            id: 'twaver.idc.wall.top'
          },
          c = {
            data: [
              [-2500, -500],
              [-1500, -500],
              [-1e3, -2500],
              [1e3, -2500],
              [1500, -500],
              [2500, -500],
              [2500, 2500],
              [-2500, 2500]
            ]
          }
        return (
          g.Default.copyProperties(a, b),
          g.Default.copyProperties(c, b),
          g.Default.load(b)
        )
      },
      ba(
        '外墙4',
        '外墙说明',
        'wall4.png',
        '2d房间模型',
        10,
        20, {},
        'wall4',
        aa.wall
      )
    ),
    g.Default.register(
      'twaver.idc.innerWall.top',
      function (a) {
        var b = {
          objType: 'innerWall',
          client: {
            data: a.data,
            type: 'innerWall'
          }
        }
        g.Default.copyProperties(a, b)
        var c = g.Default.create2dShapeNode(b),
          d = a.children
        return (
          d &&
          d.forEach(function (a) {
            var b = g.Default.load(a)
            b.setParent(c)
          }),
          c
        )
      },
      ba(
        '内墙',
        '内墙说明',
        'innerWall.png',
        '2d房间模型',
        10,
        20, {},
        'innerWall',
        aa.innerWall
      )
    ),
    g.Default.copy(
      'twaver.idc.glassWall.top',
      'twaver.idc.innerWall.top', {}, {
        name: '玻璃内墙1',
        icon: p('glasswall1.png')
      }
    ),
    g.Default.copy(
      'twaver.idc.glassWall2.top',
      'twaver.idc.innerWall.top', {}, {
        name: '玻璃内墙2',
        icon: p('glasswall2.png')
      }
    ),
    g.Default.register(
      'twaver.idc.floor.top',
      function (a) {
        var b = {
          objType: 'floor',
          client: {
            data: a.data,
            type: 'floor'
          }
        }
        g.Default.copyProperties(a, b)
        var c = g.Default.create2dShapeNode(b)
        return c
      },
      ba(
        '楼层',
        '楼层说明',
        'column.png',
        '2d房间模型',
        10,
        20, {},
        'floor',
        aa.wallChild
      )
    )
  var ga = function () {
    var a = {
      bid: {
        name: '业务ID',
        value: b,
        type: g.Default.PARAMETER_TYPE_STRING,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
      },
      width: {
        name: '宽度',
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
        editable: !1
      },
      height: {
        name: '厚度',
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
        editable: !1
      },
      label: {
        name: '标签',
        value: '标签',
        type: g.Default.PARAMETER_TYPE_STRING,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
      },
      'label.xoffset': {
        name: '标签位置X',
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
      },
      'label.yoffset': {
        name: '标签位置Z',
        type: g.Default.PARAMETER_TYPE_NUMBER,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
      },
      'label.color': {
        name: '标签颜色',
        value: 'red',
        type: g.Default.PARAMETER_TYPE_STRING,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
      },
      'label.font': {
        name: '标签字体',
        value: 'bold 180px 微软雅黑,sans-serif',
        type: g.Default.PARAMETER_TYPE_STRING,
        propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
      }
    }
    return a
  }
  g.Default.register(
      'twaver.idc.area.top',
      function (a) {
        var b = {
          objType: 'floor',
          client: {
            data: a.data,
            type: 'area'
          },
          style: {
            'shapenode.closed': !0,
            'vector.outline.color': '#B45F04',
            'vector.outline.width': 4,
            'label.position': 'topleft.bottomright'
          }
        }
        g.Default.copyProperties(a, b),
          (b.data = b.data || []),
          (b.position = b.position || [0, 0, 0])
        var c = new twaver.ShapeNode(a.objectId),
          d = a.children
        d &&
          d.forEach(function (a) {
            var b = g.Default.load(a)
            b.setParent(c)
          })
        var e = g.Default.create2dShapePath(b.data, b.position)
        return (
          c.setSegments(e.segments),
          c.setPoints(e.points),
          g.Default.setObject2dCSProps(c, b),
          c
        )
      },
      ba(
        '机房',
        '机房说明',
        'area.png',
        '2d房间模型',
        10,
        10,
        ga(),
        'area',
        aa.area
      )
    ),
    g.Default.register(
      'twaver.idc.door.top',
      function (a) {
        var b = {
          client: {
            type: 'door',
            bid: a.bid
          }
        }
        g.Default.copyProperties(a, b)
        var c = g.Default.createBlockObject(b, 'door')
        return c
      },
      ba(
        '门',
        '门说明',
        'door.png',
        '2d房间模型',
        10,
        30, {},
        'door',
        aa.wallChild
      )
    ),
    g.Default.copy(
      'twaver.idc.door1.top',
      'twaver.idc.door.top', {}, {
        icon: p('door1.png')
      }
    ),
    g.Default.register(
      'twaver.idc.window.top',
      function (a) {
        var b = {
          client: {
            type: 'window',
            bid: a.bid
          }
        }
        g.Default.copyProperties(a, b)
        var c = g.Default.createBlockObject(b, 'window')
        return c
      },
      ba(
        '窗户',
        '窗户说明',
        'window.png',
        '2d房间模型',
        10,
        40, {},
        'window',
        aa.wallChild
      )
    ),
    g.Default.register(
      'twaver.idc.column.top',
      function (a) {
        var b = {
          client: {
            type: 'column',
            bid: a.bid
          },
          style: {
            'vector.fill.color': '#BDBCBC'
          }
        }
        g.Default.copyProperties(a, b)
        var c = g.Default.createNode(b)
        return c
      },
      ba(
        '柱子',
        '柱子说明',
        'column.png',
        '2d房间模型',
        10,
        40, {},
        'column',
        aa.wallChild
      )
    ),
    g.Default.register(
      'twaver.idc.rack.top',
      function (a) {
        a.client = a.client || {}
        var b = {
          image: a.image || _('racktop'),
          width: a.width,
          depth: a.depth,
          client: {
            type: a.client.type || 'rack'
          }
        }
        g.Default.copyProperties(a, b)
        var c = g.Default.createNode(b)
        return c
      },
      ba(
        '42U机柜',
        '机柜说明',
        'rack.png',
        '2d机柜模型',
        20,
        60,
        da({
          width: 60,
          depth: 80,
          height: g.Default.getRackHeight(47)
        }),
        'rack',
        aa.rack
      )
    )
  for (
    var ha = function (a) {
        g.Default.register(
          'twaver.idc.rack' + a + '.top',
          function (a) {
            return (a.id = 'twaver.idc.rack.top'), g.Default.load(a)
          },
          ba(
            a + 'U机柜',
            '机柜说明',
            'rack.png',
            '2d机柜模型',
            20,
            10 + 10 * (a - 42),
            da({
              width: 60,
              depth: 80,
              height: g.Default.getRackHeight(a)
            }),
            'rack',
            aa.rack
          )
        )
      },
      w = 42; w <= 47; w++
  ) {
    ha(w)
  }
  g.Default.register(
    'twaver.idc.headerRack.top',
    function (a) {
      return (
        (a.id = 'twaver.idc.rack.top'),
        (a.image = a.image || _('headerracktop')),
        (a.client = a.client || {}),
        (a.client.type = 'header_rack'),
        g.Default.load(a)
      )
    },
    ba(
      '列头柜',
      '列头柜说明',
      'headerRack.png',
      '2d机柜模型',
      20,
      30,
      ca({
        width: 60,
        depth: 80,
        height: 200
      }),
      'header_rack',
      aa.rack
    )
  )
  var ia = function () {
      return {
        bid: {
          name: 'BID',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        x: {
          name: 'X轴位置',
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
          exportable: !1
        },
        y: {
          name: 'Z轴位置',
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
          exportable: !1
        },
        angle: {
          name: 'Y轴旋转',
          value: 0,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
          exportable: !1
        },
        rackWidth: {
          name: '机柜宽度',
          value: 60,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        rackDepth: {
          name: '机柜深度',
          value: 80,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        rackNumber: {
          name: '机柜数量',
          value: 20,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        aisleDepth: {
          name: '通道深度',
          value: 140,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        isSingle: {
          name: '是否为单通道',
          value: !1,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        side: {
          name: '单通道类型',
          value: 'left',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
        },
        showRack: {
          name: '显示机柜',
          value: !0,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        }
      }
    },
    ja = function (a, b) {
      if (a.getClient('showRack')) {
        var c = a.getClient(b)
        if (c) return c
      }
      return ''
    },
    ka = function () {
      var a = {
        font: '20px arial',
        origin: {
          x: 0,
          y: 0
        },
        clip: !0,
        v: [{
          shape: 'draw',
          draw: function (a, b, c) {
            var d = b.rackNumber,
              e = !!b.isSingle,
              f = b.rackWidth,
              g = b.rackDepth,
              h = b.aisleDepth,
              i = b.side || 'right',
              j = e ? d : d / 2,
              k = f * j,
              l = h + g * (e ? 1 : 2),
              m = f - 4,
              n = b.getClient('channel.color') || '#61B6ef',
              o = (b.getClient('channel.label.font') || '24px arial',
                b.getClient('channel.location.font') || '20px arial'),
              p = b.getClient('channel.rackText.font') || '10px arial',
              q = (b.getClient('channel.label.color') || '#61B6ef',
                b.getClient('channel.location.color') || '#61B6ef'),
              r = b.getClient('channel.rackText.color') || '#61B6ef',
              s = 2,
              t = Math.floor((s - 1) / 2),
              u = 20,
              v = -10
            if (
              (a.drawShape({
                  shape: 'rect',
                  rect: [0, 0, k, l],
                  fill: '#f5f5f5',
                  lineWidth: 3,
                  lineColor: n
                }),
                e)
            ) {
              if (i == 'right') {
                for (var w = 0; j > w; w++) {
                  var x = w * f,
                    y = 0
                  a.drawShape({
                      shape: 'rect',
                      rect: [x, y, f, g],
                      lineWidth: 1
                    }),
                    a.drawShape({
                      shape: 'text',
                      text: ja(b, '1-' + (w + 1)),
                      textAlign: 'center',
                      textBaseline: 'center',
                      font: p,
                      fill: r,
                      w: m,
                      x: x + f / 2,
                      y: y + g / 2 + ((w % s) - t) * u + v
                    }),
                    a.drawShape({
                      shape: 'text',
                      text: '1-' + (w + 1),
                      textAlign: 'center',
                      textBaseline: 'center',
                      font: o,
                      fill: q,
                      x: x + f / 2,
                      y: y + g + 14
                    })
                }
                a.drawShape({
                  shape: 'rect',
                  rect: [0, g, k, h],
                  lineWidth: 1
                })
              } else {
                for (
                  a.drawShape({
                    shape: 'rect',
                    rect: [0, 0, k, h],
                    lineWidth: 1
                  }),
                  w = 0; j > w; w++
                ) {
                  var x = w * f,
                    y = h
                  a.drawShape({
                      shape: 'rect',
                      rect: [x, y, f, g],
                      lineWidth: 1
                    }),
                    a.drawShape({
                      shape: 'text',
                      text: ja(b, '1-' + (w + 1)),
                      textAlign: 'center',
                      textBaseline: 'center',
                      font: p,
                      fill: r,
                      w: m,
                      x: x + f / 2,
                      y: y + g / 2 + ((w % s) - t) * u + v
                    }),
                    a.drawShape({
                      shape: 'text',
                      text: '1-' + (w + 1),
                      textAlign: 'center',
                      textBaseline: 'center',
                      font: o,
                      fill: q,
                      x: x + f / 2,
                      y: y - 14
                    })
                }
              }
            } else {
              for (var w = 0; j > w; w++) {
                var x = w * f,
                  y = 0
                a.drawShape({
                    shape: 'rect',
                    rect: [x, y, f, g],
                    lineWidth: 1
                  }),
                  a.drawShape({
                    shape: 'text',
                    text: ja(b, '1-' + (w + 1)),
                    textAlign: 'center',
                    textBaseline: 'center',
                    font: p,
                    fill: r,
                    w: m,
                    x: x + f / 2,
                    y: y + g / 2 + ((w % s) - t) * u + v
                  }),
                  a.drawShape({
                    shape: 'text',
                    text: '1-' + (w + 1),
                    textAlign: 'center',
                    textBaseline: 'center',
                    font: o,
                    fill: q,
                    x: x + f / 2,
                    y: y + g + 14
                  })
              }
              for (
                a.drawShape({
                  shape: 'rect',
                  rect: [0, g, k, h],
                  lineWidth: 1
                }),
                w = 0; j > w; w++
              ) {
                var x = w * f,
                  y = g + h
                a.drawShape({
                    shape: 'rect',
                    rect: [x, y, f, g],
                    lineWidth: 1
                  }),
                  a.drawShape({
                    shape: 'text',
                    text: ja(b, '2-' + (w + 1)),
                    textAlign: 'center',
                    textBaseline: 'center',
                    font: p,
                    fill: r,
                    w: m,
                    x: x + f / 2,
                    y: y + g / 2 + ((w % s) - t) * u + v
                  }),
                  a.drawShape({
                    shape: 'text',
                    text: '2-' + (w + 1),
                    textAlign: 'center',
                    textBaseline: 'center',
                    font: o,
                    fill: q,
                    x: x + f / 2,
                    y: y - 14
                  })
              }
            }
          }
        }]
      }
      return a
    },
    la = function (a) {
      var b, c
      return (
        a.isSingle ?
        ((b = a.rackWidth * a.rackNumber), (c = a.aisleDepth + a.rackDepth)) :
        ((b = (a.rackWidth * a.rackNumber) / 2),
          (c = a.aisleDepth + 2 * a.rackDepth)), {
          width: b,
          height: c
        }
      )
    }
  g.Default.register(
      'twaver.idc.aisle.top',
      function (a) {
        function b(a, b) {
          return (
            this.ready &&
            setTimeout(function () {
              var a = la(b)
              b.setSize(a)
            }, 1),
            a
          )
        }
        a.client = a.client || {}
        var c = la(a),
          d = {
            width: c.width,
            depth: c.height,
            client: {
              type: a.client.type || 'channel'
            }
          }
        g.Default.copyProperties(a, d)
        var e = ka()
        d.image = e
        var f = g.Default.createNode(d)
        return (
          (f.ready = !1),
          f.setStyle('label.font', '30px arial'),
          f.setStyle('label.color', '#61B6ef'),
          g.Default.objectWrapper(f, 'rackWidth', null, b),
          g.Default.objectWrapper(f, 'rackDepth', null, b),
          g.Default.objectWrapper(f, 'rackHeight', null, b),
          g.Default.objectWrapper(f, 'rackNumber', null, b),
          g.Default.objectWrapper(f, 'aisleDepth', null, b),
          g.Default.objectWrapper(f, 'isSingle', null, b),
          g.Default.objectWrapper(f, 'side', null, b),
          (f.rackWidth = a.rackWidth),
          (f.rackDepth = a.rackDepth),
          (f.rackHeight = a.rackHeight),
          (f.rackNumber = a.rackNumber),
          (f.aisleDepth = a.aisleDepth),
          (f.isSingle = a.isSingle),
          (f.side = a.side),
          (f.ready = !0),
          f
        )
      },
      ba(
        '通道',
        '通道说明',
        'channel.png',
        '2d机柜模型',
        20,
        30,
        ia(),
        'channel',
        aa.channel
      )
    ),
    g.Default.register(
      'twaver.idc.airCondition.top',
      function (a) {
        return (
          (a.id = 'twaver.idc.rack.top'),
          (a.width = 100),
          (a.depth = 80),
          (a.client = a.client || {}),
          (a.client.type = 'airCondition'),
          g.Default.load(a)
        )
      },
      ba(
        '空调',
        '空调说明',
        'airCondition.png',
        '2d机柜模型',
        20,
        30,
        ca({
          width: 100,
          depth: 80,
          height: 200
        })
      )
    ),
    g.Default.copy(
      'twaver.idc.airCondition1.top',
      'twaver.idc.airCondition.top', {},
      ba(
        '空调1',
        '空调说明',
        'airCondition1.png',
        '2d机柜模型',
        20,
        30,
        ca({
          width: 188,
          depth: 75,
          height: 174
        })
      )
    ),
    g.Default.copy(
      'twaver.idc.airCondition2.top',
      'twaver.idc.airCondition.top', {},
      ba(
        '空调2',
        '空调说明',
        'airCondition2.png',
        '2d机柜模型',
        20,
        30,
        ca({
          width: 188,
          depth: 75,
          height: 174
        })
      )
    ),
    g.Default.register('twaver.idc.model.top', function (a) {
      var b = {
        image: a.image || _('upstop'),
        width: a.width || 80,
        depth: a.depth || 60,
        client: {
          type: 'model'
        }
      }
      g.Default.copyProperties(a, b)
      var c = g.Default.createNode(b)
      return c
    }),
    g.Default.register(
      'twaver.idc.alternator.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.image = a.image || p('alternator.png'))
        var b = g.Default.load(a)
        return b
      },
      ba(
        '发电机',
        '发电机说明',
        'alternator.png',
        '2d机柜模型',
        20,
        30,
        ca({
          width: 200,
          depth: 85,
          height: 107
        })
      )
    ),
    g.Default.register(
      'twaver.idc.switchgear.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.width = a.width || 60),
        (a.depth = a.depth || 60)
        var b = g.Default.load(a)
        return b
      },
      ba(
        '开关柜',
        '开关柜说明',
        'switchgear.png',
        '2d机柜模型',
        20,
        30,
        ca({
          width: 60,
          depth: 60,
          height: 180
        })
      )
    ),
    g.Default.register(
      'twaver.idc.pdc.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.width = a.width || 60),
        (a.depth = a.depth || 60)
        var b = g.Default.load(a)
        return b
      },
      ba(
        '配电柜',
        '配电柜说明',
        'pdc.png',
        '2d机柜模型',
        20,
        30,
        ca({
          width: 60,
          depth: 60,
          height: 180
        })
      )
    ),
    g.Default.register(
      'twaver.idc.ups.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.image = a.image || _('upstop')),
        (a.width = a.width || 80),
        (a.depth = a.depth || 60)
        var b = g.Default.load(a)
        return b
      },
      ba(
        'ups',
        'UPS说明',
        'ups.png',
        '2d机柜模型',
        20,
        30,
        ca({
          width: 60,
          depth: 80,
          height: 200
        })
      )
    ),
    g.Default.register(
      'twaver.idc.battery.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.image = a.image || _('batterytop')),
        (a.width = a.width || 150),
        (a.depth = a.depth || 60)
        var b = g.Default.load(a)
        return b
      },
      ba(
        '蓄电池',
        '蓄电池说明',
        'battery.png',
        '2d机柜模型',
        20,
        30,
        ca({
          width: 150,
          depth: 60,
          height: 80
        })
      )
    ),
    g.Default.register(
      'twaver.idc.yangan.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.image = a.image || _('yangan')),
        (a.width = 33.51),
        (a.depth = 33.51)
        var b = g.Default.load(a)
        return b
      },
      ba('烟感', '烟感说明', 'yangan.png', '2d环境模型', 20, 30, fa())
    ),
    g.Default.register(
      'twaver.idc.changuanqi.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.image = a.image || _('wendu')),
        (a.width = a.width || 5.14),
        (a.depth = a.depth || 10.52)
        var b = g.Default.load(a)
        return b
      },
      ba('传感器', '传感器说明', 'wendu.png', '2d环境模型', 20, 30, fa())
    ),
    g.Default.register(
      'twaver.idc.shuangjian.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.image = a.image || _('shuangjian')),
        (a.width = a.width || 9.21),
        (a.depth = a.depth || 15.92)
        var b = g.Default.load(a)
        return b
      },
      ba('双鉴', '双鉴说明', 'shuangjian.png', '2d环境模型', 20, 30, fa())
    ),
    g.Default.register(
      'twaver.idc.shuijin.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.image = a.image || _('shuijin')),
        (a.width = a.width || 31.98),
        (a.depth = a.depth || 31.98)
        var b = g.Default.load(a)
        return b
      },
      ba('水浸', '水浸说明', 'shuijin.png', '2d环境模型', 20, 30, fa())
    ),
    g.Default.register(
      'twaver.idc.watercable.top',
      function (a) {
        var b = {
          objType: 'cable',
          client: {
            data: a.data,
            type: 'cable'
          }
        }
        g.Default.copyProperties(a, b)
        var c = g.Default.create2dShapeNode(b)
        return c.setStyle('vector.outline.color', a.color || '#B45F04'), c
      },
      ba(
        '水浸线',
        '水浸说明',
        'cable.png',
        '2d环境模型',
        20,
        30,
        ea(),
        'watercable'
      )
    ),
    g.Default.register(
      'twaver.idc.camera.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.image = a.image || p('camera.png')),
        (a.width = 33.51),
        (a.depth = 33.51),
        (a.style = a.style || {
          'label.font': '10px',
          'label.position': 'bottom'
        })
        var b = g.Default.load(a)
        return b
      },
      ba('摄像头1', '摄像头说明', 'camera.png', '2d环境模型', 20, 30, fa())
    ),
    g.Default.register(
      'twaver.idc.camera1.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.image = a.image || p('camera1.png')),
        (a.width = 33.51),
        (a.depth = 33.51),
        (a.style = a.style || {
          'label.font': '10px',
          'label.position': 'bottom'
        })
        var b = g.Default.load(a)
        return b
      },
      ba('摄像头2', '摄像头说明', 'camera1.png', '2d环境模型', 20, 30, fa())
    ),
    g.Default.register(
      'twaver.idc.generator.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.width = a.width || 425),
        (a.depth = a.depth || 233)
        var b = g.Default.load(a)
        return b
      },
      ba(
        '发电机',
        '发电机说明',
        'generator.png',
        '2d机柜模型',
        20,
        30,
        ca({
          width: 425,
          depth: 233,
          height: 180
        })
      )
    ),
    g.Default.register(
      'twaver.idc.fire.top',
      function (a) {
        (a.id = 'twaver.idc.model.top'),
        (a.width = a.width || 23.9382),
        (a.depth = a.depth || 23.9382)
        var b = g.Default.load(a)
        return b
      },
      ba(
        '灭火器',
        '灭火器说明',
        'fire.png',
        '2d机柜模型',
        20,
        30,
        ca({
          width: 23.9382,
          depth: 23.9382,
          height: 90.116
        })
      )
    )
  var ma = function (a, b) {
    var b = b || 'twaver.idc.rack{}.front'.format(a),
      c = '{}U机柜'.format(a),
      d = 'rack.png'.format(a),
      e = 'rack{}U.svg'.format(a),
      f = g.Default.RACK_OFFSET_X,
      h = g.Default.RACK_OFFSET_Y,
      i = g.Default.RACK_WIDTH,
      j = g.Default.getRackHeight(a)
    g.Default.register(
      b,
      function (c) {
        return (
          g.Default.copyProperties({
              imageUrl: _(e),
              width: i,
              height: j,
              client: {
                id: b,
                host: !0,
                childrenSize: a,
                offsetX: f,
                offsetY: h
              }
            },
            c
          ),
          g.Default.createFollower(c)
        )
      }, {
        name: c,
        category: '机柜',
        icon: p(d),
        offsetX: f,
        offsetY: h,
        host: !0
      }
    )
  }
  ma(42, 'twaver.idc.rack.front')
  for (var w = 42; w <= 47; w++) ma(w)
  for (
    var na = function (a, b) {
        return {
          imageUrl: b.image ? o(b.image) : _('u-0' + a),
          width: g.Default.getEquipmentWidth(),
          height: g.Default.getEquipmentHeight(a),
          client: {
            size: a,
            category: 'server'
          }
        }
      },
      oa = function (a, c) {
        return {
          name: a + 'U设备',
          modelDefaultParameters: {
            bid: {
              name: 'BID',
              value: b,
              type: g.Default.PARAMETER_TYPE_STRING,
              propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            loc: {
              name: '位置',
              value: 0,
              type: g.Default.PARAMETER_TYPE_INT,
              propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            panel: {
              name: '面板',
              value: 'twaver.idc.equipment.newPanel',
              type: g.Default.PARAMETER_TYPE_STRING,
              propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            }
          },
          description: c,
          category: '设备2D',
          icon: p('server' + a + '.png')
        }
      },
      pa = function (a, b, c) {
        (b = b || 'twaver.idc.equipment' + a + '.front'),
        g.Default.register(
          b,
          function (b) {
            var c = {}
            return (
              g.Default.copyProperties(na(a, b), c),
              b.image && delete b.image,
              g.Default.copyProperties(b, c),
              g.Default.createFollower(c)
            )
          },
          oa(a, c)
        )
      },
      qa = 1; qa <= 8; qa++
  ) {
    pa(qa)
  }
  pa(2, 'twaver.idc.equipment.front', '{}U的服务器设备'.format(2)),
    pa(
      8,
      'twaver.idc.equipment8-1.front',
      '{}U的服务器设备。这是一种挖空的机架'.format(8)
    )
  var ra = function (a) {
      return {
        name: a.label,
        modelDefaultParameters: {
          width: {
            name: '宽度',
            value: 10 * g.Default.getEquipmentWidth(),
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          height: {
            name: '高度',
            value: 10 * g.Default.getEquipmentHeight(1),
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          }
        },
        category: '面板背板',
        icon: p(a.label + '.png'),
        host: !0
      }
    },
    sa = function (a, b) {
      var c = 'twaver.idc.' + a + '.panel'
      g.Default.register(
        c,
        function (b) {
          g.Default.copyProperties({
              imageUrl: _(a),
              client: {
                category: 'networkDevice-panel',
                host: !0,
                editable: !0
              }
            },
            b
          )
          var c = g.Default.createFollower(b)
          return c
        },
        ra(b)
      )
    },
    ta = {
      hw_s2700: {
        label: 'hw_s2700',
        width: 44,
        height: 442
      },
      hw_s3700: {
        label: 'hw_s3700',
        width: 44,
        height: 442
      },
      cisco_2950: {
        label: 'cisco_2950',
        width: 44,
        height: 442
      },
      cisco_2960: {
        label: 'cisco_2960',
        width: 44,
        height: 442
      },
      h3c_s1050t: {
        label: 'h3c_s1050t',
        width: 44,
        height: 442
      },
      h3c_s1224: {
        label: 'h3c_s1224',
        width: 44,
        height: 442
      }
    }
  for (var Z in ta) sa(Z, ta[Z])
  g.Default.register(
      'twaver.idc.network.panel',
      function (a) {
        return (
          g.Default.copyProperties({
              style: {
                'body.type': 'vector',
                'vector.shape': 'rectangle',
                'vector.fill': !0
              },
              client: {
                category: 'networkDevice-panel',
                host: !0,
                resizeable: !0,
                editable: !0
              }
            },
            a
          ),
          g.Default.createFollower(a)
        )
      }, {
        name: '设备',
        modelDefaultParameters: {
          width: {
            name: '宽度',
            value: 10 * g.Default.getEquipmentWidth(),
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          height: {
            name: '高度',
            value: 10 * g.Default.getEquipmentHeight(1),
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          'vector.fill.color': {
            name: '背景色',
            value: '#444444',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
          }
        },
        category: '面板背板',
        icon: p('networkDevicePanel.jpg'),
        host: !0
      }
    ),
    g.Default.register(
      'twaver.idc.card.panel',
      function (a) {
        return (
          g.Default.copyProperties({
              style: {
                'body.type': 'vector',
                'vector.shape': 'rectangle',
                'vector.fill': !0
              },
              client: {
                category: 'networkDevice-panel',
                host: !0,
                resizeable: !0,
                editable: !0
              }
            },
            a
          ),
          g.Default.createFollower(a)
        )
      }, {
        name: '设备',
        modelDefaultParameters: {
          width: {
            name: '宽度',
            value: 50,
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          height: {
            name: '高度',
            value: 500,
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          'vector.fill.color': {
            name: '背景色',
            value: '#444444',
            type: g.Default.PARAMETER_TYPE_COLOR,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
          }
        },
        category: '面板背板',
        icon: p('networkDevicePanel.jpg'),
        host: !0
      }
    )
  for (
    var ua = function (a) {
        return {
          imageUrl: _(a + 'u'),
          width: 10 * g.Default.getEquipmentWidth(),
          height: 10 * g.Default.getEquipmentHeight(a),
          client: {
            size: a,
            category: 'device-panel',
            host: !0
          }
        }
      },
      va = function (a) {
        return {
          name: a + 'U设备',
          category: '面板背板',
          icon: p('' + a + 'u.png'),
          host: !0
        }
      },
      wa = function (a) {
        var b = 'twaver.idc.equipment' + a + '.panel'
        g.Default.register(
          b,
          function (c) {
            return (
              g.Default.copyProperties(ua(a, c.scale), c),
              (c.client.id = b),
              g.Default.createFollower(c)
            )
          },
          va(a)
        )
      },
      qa = 1; qa <= 8; qa++
  ) {
    wa(qa)
  }
  var xa = function (a) {
      var c = {
        width: {
          name: '宽度',
          value: a.width,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: a.height,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        position: {
          name: '位置[x,y,z]',
          value: [0, 0, 0],
          type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
          hidden: !0
        },
        x: {
          name: 'X轴位置',
          value: 0,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
          exportable: !1
        },
        y: {
          name: 'Y轴位置',
          value: 0,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
          exportable: !1
        },
        rotation: {
          name: '旋转[x,y,z]',
          value: [0, 0, 0],
          type: g.Default.PARAMETER_TYPE_ARRAY_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
          hidden: !0
        },
        angle: {
          name: 'Z轴旋转',
          value: 0,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
          exportable: !1
        },
        decoration: {
          name: '装饰部件',
          value: a.decoration,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT,
          hidden: !0
        }
      }
      a.decoration ||
        (c.bid = {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT,
          index: 0
        })
      var d = {
        name: a.label,
        modelDefaultParameters: c,
        category: '面板部件',
        icon: p(Z + '.png')
      }
      return d
    },
    ya = function (a, b) {
      var c = 'twaver.idc.' + a + '.panel'
      g.Default.register(
        c,
        function (b) {
          g.Default.copyProperties({
              imageUrl: _(a),
              client: {
                category: 'device-panel-comp',
                host: !1
              }
            },
            b
          )
          var c = g.Default.createFollower(b)
          return c
        },
        xa(b)
      )
    },
    za = {
      DP: {
        label: 'DP',
        width: 16.91,
        height: 6.3,
        decoration: !0
      },
      AV: {
        label: 'AV',
        width: 30.04,
        height: 8,
        decoration: !0
      },
      'DVI-24-1': {
        label: 'DVI-24-1',
        width: 35.07,
        height: 7.8,
        decoration: !0
      },
      HDMI: {
        label: 'HDMI',
        width: 13.91,
        height: 5.17,
        decoration: !0
      },
      'DVI-24-5': {
        label: 'DVI-24-5',
        width: 35.07,
        height: 7.8,
        decoration: !0
      },
      MicroHDMI: {
        label: 'MicroHDMI',
        width: 5.91,
        height: 2.88,
        decoration: !0
      },
      VGA: {
        label: 'VGA',
        width: 24.62,
        height: 7.94,
        decoration: !0
      },
      'ball-black': {
        label: 'ball-black',
        width: 5,
        height: 5
      },
      'ball-green': {
        label: 'ball-green',
        width: 5,
        height: 5
      },
      'ball-yellow': {
        label: 'ball-yellow',
        width: 5,
        height: 5
      },
      'ball-red': {
        label: 'ball-red',
        width: 5,
        height: 5
      },
      'button-power': {
        label: 'button-power',
        width: 17.92,
        height: 17.92
      },
      ground: {
        label: 'ground',
        width: 12,
        height: 12
      },
      idc15: {
        label: 'idc15',
        width: 39.1,
        height: 12.55
      },
      idc25: {
        label: 'idc25',
        width: 53.1,
        height: 12.55
      },
      dell: {
        label: 'dell',
        width: 17.92,
        height: 17.92
      },
      SCART: {
        label: 'SCART',
        width: 23.71,
        height: 8.39
      },
      USB: {
        label: 'USB',
        width: 12,
        height: 4.6
      },
      idc37: {
        label: 'idc37',
        width: 69.5,
        height: 12.55
      },
      jack3: {
        label: 'jack3',
        width: 26,
        height: 20.49
      },
      led: {
        label: 'led',
        width: 12.35,
        height: 3.53
      },
      logo_HBC: {
        label: 'logo_HBC',
        width: 18,
        height: 4.52
      },
      logo_cisco01: {
        label: 'logo_cisco01',
        width: 13,
        height: 6.85
      },
      miniHDMI: {
        label: 'miniHDMI',
        width: 10.41,
        height: 2.41
      },
      logo_cisco02: {
        label: 'logo_cisco02',
        width: 21,
        height: 11.85
      },
      mini_USB: {
        label: 'mini_USB',
        width: 6.82,
        height: 3.11
      },
      port38: {
        label: 'port38',
        width: 33.6,
        height: 6.95
      },
      idc9: {
        label: 'idc9',
        width: 30.8,
        height: 12.55
      },
      logo_HUAWEI: {
        label: 'logo_HUAWEI',
        width: 25,
        height: 5.89
      },
      port_1394_4pin: {
        label: 'port_1394_4pin',
        width: 6,
        height: 3.78
      },
      port_13w3: {
        label: 'port_13w3',
        width: 54.59,
        height: 15.5
      },
      port_5din: {
        label: 'port_5din',
        width: 15,
        height: 15
      },
      mirco_usb: {
        label: 'mirco_usb',
        width: 7.18,
        height: 1.94
      },
      port_1394_6pin: {
        label: 'port_1394_6pin',
        width: 11.22,
        height: 5.15
      },
      port_4din: {
        label: 'port_4din',
        width: 15,
        height: 15
      },
      port_6din: {
        label: 'port_6din',
        width: 15,
        height: 15
      },
      port_bnc: {
        label: 'port_bnc',
        width: 18.19,
        height: 15
      },
      port_8din: {
        label: 'port_8din',
        width: 15,
        height: 15
      },
      port_card34: {
        label: 'port_card34',
        width: 35.36,
        height: 5.2
      },
      port_card54: {
        label: 'port_card54',
        width: 54,
        height: 5.2
      },
      port_db9: {
        label: 'port_db9',
        width: 18,
        height: 9.28
      },
      'ps2-mouse': {
        label: 'ps2-mouse',
        width: 10,
        height: 10
      },
      port_db25: {
        label: 'port_db25',
        width: 38,
        height: 8.29
      },
      'ps2-keyboard': {
        label: 'ps2-keyboard',
        width: 10,
        height: 10
      },
      rj11: {
        label: 'rj11',
        width: 9.26,
        height: 10.9
      },
      radiator: {
        label: 'radiator',
        width: 31.65,
        height: 31.68
      },
      'radiator-2': {
        label: 'radiator-2',
        width: 78,
        height: 16.33
      },
      rj4502: {
        label: 'rj4502',
        width: 13.06,
        height: 9.55
      },
      port_db36: {
        label: 'port_db36',
        width: 50,
        height: 13.28
      },
      rj4503: {
        label: 'rj4503',
        width: 13.78,
        height: 9.55
      },
      'screw-black': {
        label: 'screw-black',
        width: 9,
        height: 9
      },
      rj4504: {
        label: 'rj4504',
        width: 18,
        height: 12.6
      },
      'screw-gray': {
        label: 'screw-gray',
        width: 12,
        height: 12
      },
      'usb-printer': {
        label: 'usb-printer',
        width: 8.12,
        height: 10.05
      },
      warn: {
        label: 'warn',
        width: 14,
        height: 14
      },
      ypbpr: {
        label: 'ypbpr',
        width: 28.66,
        height: 16.96
      },
      rj4501: {
        label: 'rj4501',
        width: 13.77,
        height: 9.55
      },
      switch_01: {
        label: 'switch_01',
        width: 11.39,
        height: 21.64
      },
      port_01: {
        label: 'port_01',
        width: 14.2,
        height: 9.94
      },
      port_02: {
        label: 'port_02',
        width: 7.7,
        height: 6.94
      }
    }
  for (var Z in za) ya(Z, za[Z])
  g.Default.register('twaver.idc.panel.loader', function (a) {
    var b = a.data || [],
      c = a.scale || 1,
      d = a.x || 0,
      e = a.y || 0
    if (b && b.length != 0) {
      b.forEach(function (a) {
        a.scale = c
      })
      var f = g.Default.load(b)
      if (g.Default.getOtherParameter(b[0].id, 'host')) {
        for (var h = f, i = h[0], j = 1; j < h.length; j++) {
          h[j].setMovable(!1),
            h[j].setHost(i),
            h[j].setParent(i),
            i.addChild(h[j])
        }
        return i.setLocation(d, e), i
      }
      var k = [],
        l = {},
        m = [],
        n = []
      return (
        f.forEach(function (a, b) {
          if (
            ((a.index = b),
              g.Default.getOtherParameter(g.Default.getId(a), 'link'))
          ) {
            n.push(a)
          } else {
            m.push(a)
            var c = a.getClient('bid')
            c && c.length > 0 && (l[c] = a)
          }
        }),
        m.forEach(function (a) {
          a.setMovable(!1), k.push(a)
        }),
        n.forEach(function (a) {
          var c = b[a.index]
          a.setFromNode(l[c.from]), a.setToNode(l[c.to]), k.push(a)
        }),
        k
      )
    }
  })
  var Aa = function (a) {
      return g.Default.path + 'model/idc/icons/device/' + a + '_front.png'
    },
    Ba = function (a) {
      return g.Default.path + 'model/idc/images/device/' + a + '_front.png'
    },
    Ca = function (a, b) {
      var c = b.height
      g.Default.copy(
          'twaver.idc.' + a + '.device.front',
          'twaver.idc.equipment' + c + '.front',
          function (b) {
            b.image = Ba(a)
          }, {
            icon: Aa(a)
          }
        ),
        g.Default.copy(
          'twaver.idc.' + a + '.panel.loader',
          'twaver.idc.panel.loader', {
            data: b.data
          }
        )
    }
  g.Default.devicePanel = n
  for (var Z in n) Ca(Z, n[Z]);
  (twaver.HorizontalLine = function (a) {
    twaver.HorizontalLine.superClass.constructor.call(this, a),
      this.setClient('connectable', !0)
  }),
  twaver.Util.ext('twaver.HorizontalLine', twaver.ShapeNode, {
      getVectorUIClass: function () {
        return twaver.vector.HorizontalLineUI
      },
      setPoints: function (a) {
        a || (a = new twaver.List())
        var b = new twaver.List(this._points),
          c = this
        a.forEach(function (a) {
            a.y !== c._location.y && (a.y = c._location.y)
          }),
          (this._points = a),
          this.firePointsChange(b, this._points)
      }
    }),
    (twaver.vector.HorizontalLineUI = function (a, b) {
      twaver.vector.HorizontalLineUI.superClass.constructor.call(this, a, b)
    }),
    twaver.Util.ext(
      'twaver.vector.HorizontalLineUI',
      twaver.vector.ShapeNodeUI, {
        drawDefaultBody: function (a) {
          twaver.vector.HorizontalLineUI.superClass.drawDefaultBody.apply(
              this,
              arguments
            ),
            this.drawIntersectionPoint(a)
        },
        drawIntersectionPoint: function (a) {
          var b = this._element.getClient('IntersectionPoint')
          b &&
            _twaver.g.strokeRect(
              a, {
                x: b.x - 1,
                y: b.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
        }
      }
    ),
    (twaver.VerticalLine = function (a) {
      twaver.VerticalLine.superClass.constructor.call(this, a),
        this.setClient('connectable', !0)
    }),
    twaver.Util.ext('twaver.VerticalLine', twaver.ShapeNode, {
      getVectorUIClass: function () {
        return twaver.vector.VerticalLineUI
      },
      setPoints: function (a) {
        a || (a = new twaver.List())
        var b = new twaver.List(this._points),
          c = this
        a.forEach(function (a) {
            a.x !== c._location.x && (a.x = c._location.x)
          }),
          (this._points = a),
          this.firePointsChange(b, this._points)
      }
    }),
    (twaver.vector.VerticalLineUI = function (a, b) {
      twaver.vector.VerticalLineUI.superClass.constructor.call(this, a, b)
    }),
    twaver.Util.ext('twaver.vector.VerticalLineUI', twaver.vector.ShapeNodeUI, {
      drawDefaultBody: function (a) {
        twaver.vector.VerticalLineUI.superClass.drawDefaultBody.apply(
            this,
            arguments
          ),
          this.drawIntersectionPoint(a)
      },
      drawIntersectionPoint: function (a) {
        var b = this._element.getClient('IntersectionPoint')
        b &&
          _twaver.g.strokeRect(
            a, {
              x: b.x - 1,
              y: b.y - 1,
              width: 2,
              height: 2
            },
            'orange'
          )
      }
    }),
    (twaver.Point = function (a) {
      twaver.Point.superClass.constructor.call(this, a),
        this.setClient('connectable', !0)
    }),
    twaver.Util.ext('twaver.Point', twaver.Node, {
      getVectorUIClass: function () {
        return twaver.vector.PointUI
      },
      setRadius: function (a) {
        this.setSize(a, a)
      },
      getRadius: function () {
        return this._width || this._height
      }
    }),
    (twaver.vector.PointUI = function (a, b) {
      twaver.vector.PointUI.superClass.constructor.call(this, a, b)
    }),
    twaver.Util.ext('twaver.vector.PointUI', twaver.vector.NodeUI, {
      drawVectorBody: function (a) {
        twaver.vector.PointUI.superClass.drawVectorBody.apply(this, arguments),
          this.drawIntersectionPoint(a)
      },
      drawIntersectionPoint: function (a) {
        var b = this.getZoomBodyRect()
        if (
          ((this._hotPoint1 = {
              x: b.x,
              y: b.y + b.height / 2
            }),
            (this._hotPoint2 = {
              x: b.x + b.width,
              y: b.y + b.height / 2
            }),
            b)
        ) {
          if (this._element.getClient('drawIntersectionPoint1')) {
            var c = this._hotPoint1
            _twaver.g.strokeRect(
              a, {
                x: c.x - 1,
                y: c.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
          } else if (this._element.getClient('drawIntersectionPoint2')) {
            var d = this._hotPoint2
            _twaver.g.strokeRect(
              a, {
                x: d.x - 1,
                y: d.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
          }
        }
      }
    }),
    (twaver.Switch = function (a) {
      twaver.Switch.superClass.constructor.call(this, a),
        this.setClient('connectable', !0)
    }),
    twaver.Util.ext('twaver.Switch', twaver.Node, {
      getVectorUIClass: function () {
        return twaver.vector.SwitchUI
      }
    }),
    (twaver.vector.SwitchUI = function (a, b) {
      twaver.vector.SwitchUI.superClass.constructor.call(this, a, b)
    }),
    twaver.Util.ext('twaver.vector.SwitchUI', twaver.vector.NodeUI, {
      drawVectorBody: function (a) {
        twaver.vector.SwitchUI.superClass.drawVectorBody.apply(this, arguments),
          this.drawIntersectionPoint(a)
      },
      drawIntersectionPoint: function (a) {
        var b = this.getZoomBodyRect()
        if (
          ((this._hotPoint1 = {
              x: b.x,
              y: b.y + b.height / 2
            }),
            (this._hotPoint2 = {
              x: b.x + b.width,
              y: b.y + b.height / 2
            }),
            b)
        ) {
          if (this._element.getClient('drawIntersectionPoint1')) {
            var c = this._hotPoint1
            _twaver.g.strokeRect(
              a, {
                x: c.x - 1,
                y: c.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
          } else if (this._element.getClient('drawIntersectionPoint2')) {
            var d = this._hotPoint2
            _twaver.g.strokeRect(
              a, {
                x: d.x - 1,
                y: d.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
          }
        }
      }
    }),
    (twaver.SwitchV = function (a) {
      twaver.SwitchV.superClass.constructor.call(this, a),
        this.setClient('connectable', !0)
    }),
    twaver.Util.ext('twaver.SwitchV', twaver.Node, {
      getVectorUIClass: function () {
        return twaver.vector.SwitchVUI
      }
    }),
    (twaver.vector.SwitchVUI = function (a, b) {
      twaver.vector.SwitchVUI.superClass.constructor.call(this, a, b)
    }),
    twaver.Util.ext('twaver.vector.SwitchVUI', twaver.vector.NodeUI, {
      drawVectorBody: function (a) {
        twaver.vector.SwitchVUI.superClass.drawVectorBody.apply(
            this,
            arguments
          ),
          this.drawIntersectionPoint(a)
      },
      drawIntersectionPoint: function (a) {
        var b = this.getZoomBodyRect()
        if (
          ((this._hotPoint1 = {
              x: b.x + b.width / 2,
              y: b.y
            }),
            (this._hotPoint2 = {
              x: b.x + b.width / 2,
              y: b.y + b.height
            }),
            b)
        ) {
          if (this._element.getClient('drawIntersectionPoint1')) {
            var c = this._hotPoint1
            _twaver.g.strokeRect(
              a, {
                x: c.x - 1,
                y: c.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
          } else if (this._element.getClient('drawIntersectionPoint2')) {
            var d = this._hotPoint2
            _twaver.g.strokeRect(
              a, {
                x: d.x - 1,
                y: d.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
          }
        }
      }
    }),
    (twaver.Resistor = function (a) {
      twaver.Resistor.superClass.constructor.call(this, a),
        this.setClient('connectable', !0)
    }),
    twaver.Util.ext('twaver.Resistor', twaver.Node, {
      getVectorUIClass: function () {
        return twaver.vector.ResistorUI
      }
    }),
    (twaver.vector.ResistorUI = function (a, b) {
      twaver.vector.ResistorUI.superClass.constructor.call(this, a, b)
    }),
    twaver.Util.ext('twaver.vector.ResistorUI', twaver.vector.NodeUI, {
      drawVectorBody: function (a) {
        twaver.vector.ResistorUI.superClass.drawVectorBody.apply(
            this,
            arguments
          ),
          this.drawIntersectionPoint(a)
      },
      drawIntersectionPoint: function (a) {
        var b = this.getZoomBodyRect()
        if (
          ((this._hotPoint1 = {
              x: b.x,
              y: b.y + b.height / 2
            }),
            (this._hotPoint2 = {
              x: b.x + b.width,
              y: b.y + b.height / 2
            }),
            b)
        ) {
          if (this._element.getClient('drawIntersectionPoint1')) {
            var c = this._hotPoint1
            _twaver.g.strokeRect(
              a, {
                x: c.x - 1,
                y: c.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
          } else if (this._element.getClient('drawIntersectionPoint2')) {
            var d = this._hotPoint2
            _twaver.g.strokeRect(
              a, {
                x: d.x - 1,
                y: d.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
          }
        }
      }
    }),
    (twaver.ResistorV = function (a) {
      twaver.ResistorV.superClass.constructor.call(this, a),
        this.setClient('connectable', !0)
    }),
    twaver.Util.ext('twaver.ResistorV', twaver.Node, {
      getVectorUIClass: function () {
        return twaver.vector.ResistorVUI
      }
    }),
    (twaver.vector.ResistorVUI = function (a, b) {
      twaver.vector.ResistorVUI.superClass.constructor.call(this, a, b)
    }),
    twaver.Util.ext('twaver.vector.ResistorVUI', twaver.vector.NodeUI, {
      drawVectorBody: function (a) {
        twaver.vector.ResistorUI.superClass.drawVectorBody.apply(
            this,
            arguments
          ),
          this.drawIntersectionPoint(a)
      },
      drawIntersectionPoint: function (a) {
        var b = this.getZoomBodyRect()
        if (
          ((this._hotPoint1 = {
              x: b.x + b.width / 2,
              y: b.y
            }),
            (this._hotPoint2 = {
              x: b.x + b.width / 2,
              y: b.y + b.height
            }),
            b)
        ) {
          if (this._element.getClient('drawIntersectionPoint1')) {
            var c = this._hotPoint1
            _twaver.g.strokeRect(
              a, {
                x: c.x - 1,
                y: c.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
          } else if (this._element.getClient('drawIntersectionPoint2')) {
            var d = this._hotPoint2
            _twaver.g.strokeRect(
              a, {
                x: d.x - 1,
                y: d.y - 1,
                width: 2,
                height: 2
              },
              'orange'
            )
          }
        }
      }
    }),
    f()
  var Da = function (a) {
      return a.indexOf('/') > 0 ? a : g.Default.path + 'model/ele/icons/' + a
    },
    Ea = function (a, b, c, d, e, f, g, h, i) {
      return {
        name: a || '外墙',
        description: b || '外墙说明',
        icon: Da(c || 'column.png'),
        category: d || '默认模型',
        categoryNumber: e || 10,
        order: f || 10,
        type: i || 'twaver.Node',
        modelDefaultParameters: h,
        interaction: g
      }
    }
  g.Default.register(
      'twaver.ele.text.panel',
      function (a) {
        var b = {
            client: {
              data: a.data,
              type: 'text'
            },
            style: {
              'body.type': 'vector',
              'vector.fill': !1,
              'vector.outline.width': 0,
              'label.position': 'center',
              'label.color': (a.style && a.style['label.color']) || '#658DC1',
              'label.font': (a.style && a.style['label.font']) || '30px arial',
              'label.rotate.angle': (a.style && a.style['label.rotate.angle']) || 0
            }
          },
          c = {
            size: {
              width: 100,
              height: 30
            },
            x: a.x,
            y: a.y,
            name: a.name || 'Please Input Name'
          },
          d = new twaver.Node(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          a.centerLocation &&
          d.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          d
        )
      },
      Ea('文字', '文字', 'text.png', '基本', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_PROPERTY_TYPE_STYLE,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'label.rotate.angle': {
          name: '角度',
          value: 0,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'label.color': {
          name: '颜色',
          value: '#658DC1',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'label.font': {
          name: '字体',
          value: '30px arial',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        }
      })
    ),
    g.Default.register(
      'twaver.ele.horizontalLine.panel',
      function (a) {
        var b = 100,
          c = {
            client: {
              data: a.data,
              type: 'twaver.HorizontalLine',
              id: 'twaver.ele.horizontalLine.panel'
            },
            style: {
              'vector.outline.width': (a.style && a.style['vector.outline.width']) || 2,
              'vector.outline.color': (a.style && a.style['vector.outline.color']) || '#658DC1',
              'label.rotate.angle': (a.style && a.style['label.rotate.angle']) || 0
            }
          },
          d = {
            x: a.x,
            y: a.y,
            name: a.name || '',
            width: a.width || b,
            height: a.height || 1
          },
          e = new twaver.HorizontalLine(d)
        if (
          (g.Default.copyProperties(a, c),
            g.Default.setObject2dCSProps(e, c),
            g.Default.objectWrapper(
              e,
              'points',
              function () {
                var a = this.getPoints()
                return a ? a._as : []
              },
              function (a) {
                var b = new twaver.List()
                return (
                  a &&
                  a.forEach(function (a) {
                    b.add(a)
                  }),
                  this.setPoints(b),
                  a
                )
              }
            ),
            a.points && (e.points = a.points),
            a.centerLocation)
        ) {
          var f = {
              x: a.centerLocation.x - b / 2,
              y: a.centerLocation.y
            },
            h = {
              x: a.centerLocation.x + b / 2,
              y: a.centerLocation.y
            }
          e.addPoint(f), e.addPoint(h)
        }
        return e
      },
      Ea('横线', '横线', 'horizontalLine.png', '基本', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        width: {
          name: '宽度',
          value: 100,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: 100,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'vector.outline.width': {
          name: '线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.outline.color': {
          name: '颜色',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'shapenode.closed': {
          name: '封闭',
          value: !1,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        points: {
          name: '顶点',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
          hidden: !0
        }
      })
    ),
    g.Default.register(
      'twaver.ele.verticalLine.panel',
      function (a) {
        var b = 100,
          c = {
            client: {
              data: a.data,
              type: 'twaver.VerticalLine',
              id: 'twaver.ele.verticalLine.panel'
            },
            style: {
              'vector.outline.width': (a.style && a.style['vector.outline.width']) || 2,
              'vector.outline.color': (a.style && a.style['vector.outline.color']) || '#658DC1',
              'label.rotate.angle': (a.style && a.style['label.rotate.angle']) || 0
            }
          },
          d = {
            x: a.x,
            y: a.y,
            name: a.name || '',
            width: a.width || b,
            height: a.height || 1
          },
          e = new twaver.VerticalLine(d)
        if (
          (g.Default.copyProperties(a, c),
            g.Default.setObject2dCSProps(e, c),
            g.Default.objectWrapper(
              e,
              'points',
              function () {
                var a = this.getPoints()
                return a ? a._as : []
              },
              function (a) {
                var b = new twaver.List()
                return (
                  a &&
                  a.forEach(function (a) {
                    b.add(a)
                  }),
                  this.setPoints(b),
                  a
                )
              }
            ),
            a.points && (e.points = a.points),
            a.centerLocation)
        ) {
          var f = {
              x: a.centerLocation.x,
              y: a.centerLocation.y - b / 2
            },
            h = {
              x: a.centerLocation.x,
              y: a.centerLocation.y + b / 2
            }
          e.addPoint(f), e.addPoint(h)
        }
        return e
      },
      Ea('竖线', '竖线', 'verticalLine.png', '基本', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        width: {
          name: '宽度',
          value: 100,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: 100,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'vector.outline.width': {
          name: '线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.outline.color': {
          name: '颜色',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'shapenode.closed': {
          name: '封闭',
          value: !1,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        points: {
          name: '顶点',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
          hidden: !0
        }
      })
    )
  var Fa = Ea('画线', '画线', 'drawLine.png', '基本', 10, 10, 'createLink', {
    bid: {
      name: '业务ID',
      value: b,
      type: g.Default.PARAMETER_TYPE_STRING,
      propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
    },
    'link.color': {
      name: '颜色',
      value: '',
      type: g.Default.PARAMETER_TYPE_STRING,
      propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
    },
    from: {
      name: '起始点',
      value: b,
      type: g.Default.PARAMETER_TYPE_STRING,
      propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
    },
    to: {
      name: '结束点',
      value: b,
      type: g.Default.PARAMETER_TYPE_STRING,
      propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD
    }
  });
  (Fa.link = !0),
  g.Default.register(
      'twaver.ele.wire.panel',
      function (a) {
        var b = {
            id: a.objectId
          },
          c = new twaver.Link()
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(c, b),
          g.Default.objectWrapper(c, 'from', function () {
            var a = this.getFromNode()
            if (a) return a.getClient('bid')
          }),
          g.Default.objectWrapper(c, 'to', function () {
            var a = this.getToNode()
            if (a) return a.getClient('bid')
          }),
          c
        )
      },
      Fa
    ),
    g.Default.register(
      'twaver.ele.polyline.panel',
      function (a) {
        var b = {
            client: {
              data: a.data
            },
            style: {
              'vector.fill': !1,
              'shapenode.closed': !1,
              'vector.outline.width': (a.style && a.style['vector.outline.width']) || 2,
              'vector.outline.color': (a.style && a.style['vector.outline.color']) || '#658DC1',
              'label.rotate.angle': (a.style && a.style['label.rotate.angle']) || 0
            }
          },
          c = {
            id: a.objectId,
            x: a.x || 0,
            y: a.y || 0,
            name: a.name || '',
            width: a.width || 1,
            height: a.height || 1
          },
          d = new twaver.ShapeNode(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          g.Default.objectWrapper(
            d,
            'points',
            function () {
              var a = this.getPoints()
              return a ? a._as : []
            },
            function (a) {
              var b = new twaver.List()
              return (
                a &&
                a.forEach(function (a) {
                  b.add(a)
                }),
                this.setPoints(b),
                a
              )
            }
          ),
          a.points && (d.points = a.points),
          d
        )
      },
      Ea('画折线', '画折线', 'draw.png', '基本', 10, 10, 'createPolyLink', {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        'link.color': {
          name: '颜色',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.outline.width': {
          name: '线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.outline.color': {
          name: '颜色',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.fill': {
          name: '填充',
          value: '',
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'shapenode.closed': {
          name: '封闭',
          value: !1,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        points: {
          name: '顶点',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_FIELD,
          hidden: !0
        }
      })
    ),
    g.Default.register(
      'twaver.ele.point.panel',
      function (a) {
        var b = {
            client: {
              data: a.data,
              type: 'twaver.Node'
            },
            style: {
              'body.type': 'vector',
              'vector.fill': !1,
              'vector.outline.width': (a.style && a.style['vector.outline.width']) || 1.5,
              'vector.outline.color': (a.style && a.style['vector.outline.color']) || '#658DC1',
              'vector.shape': 'circle'
            }
          },
          c = {
            x: a.x,
            y: a.y,
            name: a.name || '',
            size: {
              width: a.radius || 10,
              height: a.radius || 10
            }
          },
          d = new twaver.Point(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          a.centerLocation &&
          d.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          d
        )
      },
      Ea('VCC', 'VCC', 'vcc.png', '组件', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        radius: {
          name: '半径',
          value: 5,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'vector.outline.width': {
          name: '线宽',
          value: 1.5,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.outline.color': {
          name: '颜色',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        }
      })
    ),
    g.Default.register(
      'twaver.ele.switchHT.panel',
      function (a) {
        var b = {
            client: {
              data: a.data,
              type: 'twaver.Node',
              'switch.lineWidth': (a.client && a.client['switch.lineWidth']) || 2,
              'switch.lineColor': (a.client && a.client['switch.lineColor']) || '#658DC1'
            },
            style: {
              'image.state': (a.style && a.style['image.state']) || '开启',
              'body.type': 'default.vector',
              'vector.fill': !1,
              'vector.outline.width': 0
            }
          },
          c = {
            x: a.x,
            y: a.y,
            name: a.name || '',
            image: 'singleSwitchHT'
          },
          d = new twaver.Switch(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          a.centerLocation &&
          d.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          d
        )
      },
      Ea('开关1', '开关1', 'switch1.png', '组件', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        width: {
          name: '宽度',
          value: 5,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: 5,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'switch.lineWidth': {
          name: '线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        'switch.lineColor': {
          name: '颜色',
          value: '#658DC1',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        'image.state': {
          name: '状态',
          value: '开启',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        }
      })
    ),
    g.Default.register(
      'twaver.ele.switchHB.panel',
      function (a) {
        var b = {
            client: {
              data: a.data,
              type: 'twaver.Node',
              'switch.lineWidth': (a.client && a.client['switch.lineWidth']) || 2,
              'switch.lineColor': (a.client && a.client['switch.lineColor']) || '#658DC1'
            },
            style: {
              'image.state': (a.style && a.style['image.state']) || '开启',
              'body.type': 'default.vector',
              'vector.fill': !1,
              'vector.outline.width': 0
            }
          },
          c = {
            x: a.x,
            y: a.y,
            name: a.name || '',
            image: 'singleSwitchHB'
          },
          d = new twaver.Switch(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          a.centerLocation &&
          d.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          d
        )
      },
      Ea('开关2', '开关2', 'switch2.png', '组件', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        width: {
          name: '宽度',
          value: 5,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: 5,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'switch.lineWidth': {
          name: '线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        'switch.lineColor': {
          name: '颜色',
          value: '#658DC1',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        'image.state': {
          name: '状态',
          value: '开启',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        }
      })
    ),
    g.Default.register(
      'twaver.ele.switchVR.panel',
      function (a) {
        var b = {
            client: {
              data: a.data,
              type: 'twaver.Node',
              'switch.lineWidth': (a.client && a.client['switch.lineWidth']) || 2,
              'switch.lineColor': (a.client && a.client['switch.lineColor']) || '#658DC1'
            },
            style: {
              'image.state': (a.style && a.style['image.state']) || '开启',
              'body.type': 'default.vector',
              'vector.fill': !1,
              'vector.outline.width': 0
            }
          },
          c = {
            x: a.x,
            y: a.y,
            name: a.name || '',
            image: 'singleSwitchVR'
          },
          d = new twaver.SwitchV(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          a.centerLocation &&
          d.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          d
        )
      },
      Ea('开关3', '开关3', 'switch3.png', '组件', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        width: {
          name: '宽度',
          value: 5,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: 5,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'switch.lineWidth': {
          name: '线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        'switch.lineColor': {
          name: '颜色',
          value: '#658DC1',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        'image.state': {
          name: '状态',
          value: '开启',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        }
      })
    ),
    g.Default.register(
      'twaver.ele.switchVL.panel',
      function (a) {
        var b = {
            client: {
              data: a.data,
              type: 'twaver.Node',
              'switch.lineWidth': (a.client && a.client['switch.lineWidth']) || 2,
              'switch.lineColor': (a.client && a.client['switch.lineColor']) || '#658DC1'
            },
            style: {
              'image.state': (a.style && a.style['image.state']) || '开启',
              'body.type': 'default.vector',
              'vector.fill': !1,
              'vector.outline.width': 0
            }
          },
          c = {
            x: a.x,
            y: a.y,
            name: a.name || '',
            image: 'singleSwitchVL'
          },
          d = new twaver.SwitchV(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          a.centerLocation &&
          d.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          d
        )
      },
      Ea('开关4', '开关4', 'switch4.png', '组件', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        width: {
          name: '宽度',
          value: 5,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: 5,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'switch.lineWidth': {
          name: '线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        'switch.lineColor': {
          name: '颜色',
          value: '#658DC1',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        'image.state': {
          name: '状态',
          value: '开启',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        }
      })
    ),
    g.Default.register(
      'twaver.ele.resistor.panel',
      function (a) {
        var b = {
            client: {
              data: a.data,
              type: 'twaver.Node',
              host: !1
            },
            style: {
              'body.type': 'vector',
              'vector.fill': !1,
              'vector.outline.width': (a.style && a.style['vector.outline.width']) || 2,
              'vector.outline.color': (a.style && a.style['vector.outline.color']) || '#658DC1'
            }
          },
          c = {
            size: {
              width: a.width || 40,
              height: a.height || 18
            },
            x: a.x,
            y: a.y,
            name: a.name || ''
          },
          d = new twaver.Resistor(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          a.centerLocation &&
          d.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          d
        )
      },
      Ea('电阻1', '电阻1', 'resistor1.png', '组件', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        width: {
          name: '宽度',
          value: 40,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: 18,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'vector.outline.width': {
          name: '线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.outline.color': {
          name: '颜色',
          value: '#658DC1',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        }
      })
    ),
    g.Default.register(
      'twaver.ele.resistor2.panel',
      function (a) {
        var b = {
            client: {
              data: a.data,
              type: 'twaver.Node',
              host: !1
            },
            style: {
              'body.type': 'vector',
              'vector.fill': !1,
              'vector.outline.width': (a.style && a.style['vector.outline.width']) || 2,
              'vector.outline.color': (a.style && a.style['vector.outline.color']) || '#658DC1'
            }
          },
          c = {
            size: {
              width: a.width || 18,
              height: a.height || 40
            },
            x: a.x,
            y: a.y,
            name: a.name || ''
          },
          d = new twaver.ResistorV(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          a.centerLocation &&
          d.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          d
        )
      },
      Ea('电阻2', '电阻2', 'resistor2.png', '组件', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        width: {
          name: '宽度',
          value: 18,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: 40,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'vector.outline.width': {
          name: '线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.outline.color': {
          name: '颜色',
          value: '#658DC1',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        }
      })
    ),
    g.Default.register(
      'twaver.ele.current.panel',
      function (a) {
        var b = {
            client: {
              data: a.data,
              type: 'twaver.Node'
            },
            style: {
              'body.type': 'vector',
              'label.position': 'center',
              'vector.fill': (a.style && a.style['vector.fill']) || !1,
              'vector.fill.color': (a.style && a.style['vector.fill.color']) || '#658DC1',
              'vector.outline.width': (a.style && a.style['vector.outline.width']) || 2,
              'vector.outline.color': (a.style && a.style['vector.outline.color']) || '#658DC1',
              'label.rotate.angle': (a.style && a.style['label.rotate.angle']) || 0
            }
          },
          c = {
            size: {
              width: a.width || 32,
              height: a.height || 24
            },
            x: a.x,
            y: a.y,
            name: a.name || '0.512mA'
          },
          d = new twaver.Node(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          a.centerLocation &&
          d.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          d
        )
      },
      Ea('电流', '电流', 'i.png', '组件', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        width: {
          name: '宽度',
          value: 32,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: 24,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'label.rotate.angle': {
          name: '角度',
          value: 0,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.outline.width': {
          name: '边框线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.outline.color': {
          name: '边框颜色',
          value: '#658DC1',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.fill': {
          name: '填充',
          value: !1,
          type: g.Default.PARAMETER_TYPE_BOOLEAN,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        },
        'vector.fill.color': {
          name: '填充色',
          value: '#658DC1',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
        }
      })
    ),
    g.Default.register(
      'twaver.ele.currentDirection.panel',
      function (a) {
        var b = {
            client: {
              data: a.data,
              type: 'twaver.Node',
              'currentDirection.lineWidth': (a.client && a.client['currentDirection.lineWidth']) || 2,
              'currentDirection.lineColor': (a.client && a.client['currentDirection.lineColor']) ||
                '#658DC1'
            }
          },
          c = {
            angle: a.angle,
            size: {
              width: a.width || 32,
              height: a.height || 24
            },
            x: a.x,
            y: a.y,
            name: a.name || '',
            image: 'currentDirection'
          },
          d = new twaver.Node(c)
        return (
          g.Default.copyProperties(a, b),
          g.Default.setObject2dCSProps(d, b),
          a.centerLocation &&
          d.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          d
        )
      },
      Ea('方向', '方向', 'direction.png', '组件', 10, 10, null, {
        bid: {
          name: '业务ID',
          value: b,
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        name: {
          name: '内容',
          value: '',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        x: {
          name: 'x坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        y: {
          name: 'y坐标',
          value: 0,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        angle: {
          name: '角度',
          value: 0,
          type: g.Default.PARAMETER_TYPE_NUMBER,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        width: {
          name: '宽度',
          value: 32,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        height: {
          name: '高度',
          value: 24,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
        },
        'currentDirection.lineWidth': {
          name: '线宽',
          value: 2,
          type: g.Default.PARAMETER_TYPE_INT,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
        'currentDirection.lineColor': {
          name: '颜色',
          value: '#658DC1',
          type: g.Default.PARAMETER_TYPE_STRING,
          propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        }
      })
    ),
    g.Default.register(
      'com.electric.table.panel',
      function (a) {
        var b = c(2, 3, '数据表格')
        return (
          a.centerLocation &&
          b.setCenterLocation(a.centerLocation.x, a.centerLocation.y),
          a.x && a.y && b.setLocation(a.x, a.y),
          b
        )
      }, {
        name: 'Table',
        category: '组件',
        type: 'twaver.HTMLNode',
        modelDefaultParameters: {
          name: {
            name: '内容',
            value: null,
            type: g.Default.PARAMETER_TYPE_STRING,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          x: {
            name: '表格x坐标',
            value: 0,
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          y: {
            name: '表格y坐标',
            value: 0,
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          'label.rotate.angle': {
            name: '表格角度',
            value: 0,
            type: g.Default.PARAMETER_TYPE_NUMBER,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
          },
          rows: {
            name: '表格行数',
            value: 2,
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
          },
          cols: {
            name: '表格列数',
            value: 3,
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
          },
          bid: {
            name: '表格业务ID',
            value: null,
            type: g.Default.PARAMETER_TYPE_STRING,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_CLIENT
          },
          id: {
            name: '表格唯一标识',
            value: null,
            type: g.Default.PARAMETER_TYPE_STRING,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          'attachment.htmllabel.hyperlink': {
            name: 'Dom是否有效',
            value: !0,
            type: g.Default.PARAMETER_TYPE_BOOLEAN,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
          },
          width: {
            name: '拖动区域宽度',
            value: 0,
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          height: {
            name: '拖动区域高度',
            value: 0,
            type: g.Default.PARAMETER_TYPE_INT,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
          },
          'vector.fill.color': {
            name: '拖动区域颜色',
            value: null,
            type: g.Default.PARAMETER_TYPE_STRING,
            propertyType: g.Default.PARAMETER_PROPERTY_TYPE_STYLE
          }
        }
      }
    ),
    g.Default.register('twaver.ele.panel.loader', function (a) {
      var b = a.data || []
      if (b && b.length != 0) {
        var c = g.Default.load(b),
          d = [],
          e = {},
          f = [],
          h = []
        return (
          c.forEach(function (a, b) {
            if (
              ((a.index = b),
                g.Default.getOtherParameter(g.Default.getId(a), 'link'))
            ) {
              h.push(a)
            } else {
              f.push(a)
              var c = a.getClient('bid')
              c && c.length > 0 && (e[c] = a)
            }
          }),
          f.forEach(function (a) {
            a.setMovable(!1), d.push(a)
          }),
          h.forEach(function (a) {
            var c = b[a.index]
            a.setFromNode(e[c.from]), a.setToNode(e[c.to]), d.push(a)
          }),
          d
        )
      }
    })
})(window)
