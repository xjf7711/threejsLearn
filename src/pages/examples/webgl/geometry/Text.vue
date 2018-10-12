<template>
  <div id="geometry-text">
    <div id="info">
      <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a>
      - procedural 3D text by
      <a href="http://www.lab4games.net/zz85/blog" target="_blank" rel="noopener">zz85</a> &amp; alteredq
      <br>type to enter new text, drag to spin the text
      <br>
      <span id="color" class="button">change color</span>,
      <span id="font" class="button">change font</span>,
      <span id="weight" class="button">change weight</span>,
      <span id="bevel" class="button">change bevel</span>
      <a id="permalink" href="#">permalink</a>
    </div>

  </div>
</template>

<script>
import * as THREE from 'three'
import Detector from '@/assets/threejs/Detector'
import { GeometryUtils } from '@/assets/threejs/js/utils/GeometryUtils.js'
export default {
  name: 'GeometryText',
  data() {
    return {
      width: 700,
      height: 500,

      renderer: null,
      scene: null,
      camera: null,

      materials: null,
      pointLight: null,

      group: null,
      textMesh1: null,
      textMesh2: null,
      textGeo: null,
      cameraTarget: null,
      // container: null,

      permalink: '',
      hex: '',
      // color: '',
      fHeight: 20,
      size: 70,
      hover: 30,
      curveSegments: 4,

      bevelThickness: 2,
      bevelSize: 1.5,
      bevelSegments: 3,
      bevelEnabled: true,
      font: undefined,

      fontName: 'optimer', // helvetiker, optimer, gentilis, droid sans, droid serif
      fontWeight: 'bold', // normal bold
      text: 'three.js :)',

      firstLetter: true,

      targetRotation: 0,
      targetRotationOnMouseDown: 0,

      mouseX: 0,
      mouseXOnMouseDown: 0,
      mirror: true,
      fontMap: {
        'helvetiker': 0,
        'optimer': 1,
        'gentilis': 2,
        'droid/droid_sans': 3,
        'droid/droid_serif': 4
      },
      weightMap: {
        regular: 0,
        bold: 1
      },
      fontIndex: 1
    }
  },
  computed: {
    halfX() {
      return this.width / 2
    },
    halfY() {
      return this.height / 2
    },
    reverseFontMap() {
      const reverseFontMap = []
      for (const i in this.fontMap) {
        reverseFontMap[this.fontMap[i]] = i
      }
      // console.log('reverseFontMap is ', reverseFontMap)
      return reverseFontMap
    },
    reverseWeightMap() {
      const reverseWeightMap = []
      for (const i in this.weightMap) {
        reverseWeightMap[this.weightMap[i]] = i
      }
      return reverseWeightMap
    }
  },
  mounted() {
    if (!Detector.webgl) {
      Detector.addGetWebGLMessage()
    }
    console.log('Detector.webgl ' + Detector.webgl) // true

    THREE.Cache.enabled = true

    this.init()
    this.animate()
  },
  methods: {
    init() {
      const container = document.createElement('div')
      document.getElementById('geometry-text').appendChild(container)

      this.permalink = document.getElementById('permalink')

      // CAMERA

      this.camera = new THREE.PerspectiveCamera(
        30,
        this.width / this.height,
        1,
        1500
      )
      this.camera.position.set(0, 400, 700)

      this.cameraTarget = new THREE.Vector3(0, 150, 0)

      // SCENE

      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0x000000)
      this.scene.fog = new THREE.Fog(0x000000, 250, 1400)

      // LIGHTS

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.125)
      dirLight.position.set(0, 0, 1).normalize()
      this.scene.add(dirLight)

      this.pointLight = new THREE.PointLight(0xffffff, 1.5)
      this.pointLight.position.set(0, 100, 90)
      this.scene.add(this.pointLight)

      // Get text from hash
      //  不要用hash, 用params
      // const hash = document.location.hash.substr(1)

      // if (hash.length !== 0) {
      //   const colorhash = hash.substring(0, 6)
      //   const fonthash = hash.substring(6, 7)
      //   // todo fonthash
      //   console.log('fonthash is ' + fonthash)
      //   const weighthash = hash.substring(7, 8)
      //   const bevelhash = hash.substring(8, 9)
      //   const texthash = hash.substring(10)
      //
      //   this.hex = colorhash
      //   this.pointLight.color.setHex(parseInt(colorhash, 16))
      //
      //   this.fontName = this.reverseFontMap[parseInt(fonthash)]
      //   this.fontWeight = this.reverseWeightMap[parseInt(weighthash)]
      //
      //   this.bevelEnabled = parseInt(bevelhash)
      //
      //   this.text = decodeURI(texthash)
      //
      //   this.updatePermalink()
      // } else {
      this.pointLight.color.setHSL(Math.random(), 1, 0.5)
      this.hex = this.decimalToHex(this.pointLight.color.getHex())
      // }

      this.materials = [
        new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
        new THREE.MeshPhongMaterial({ color: 0xffffff }) // side
      ]

      this.group = new THREE.Group()
      this.group.position.y = 100

      this.scene.add(this.group)

      this.loadFont()

      const plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(10000, 10000),
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          opacity: 0.5,
          transparent: true
        })
      )
      plane.position.y = 100
      plane.rotation.x = -Math.PI / 2
      this.scene.add(plane)

      // RENDERER

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)
      container.appendChild(this.renderer.domElement)

      // STATS

      // stats = new Stats();
      // container.appendChild( stats.dom );

      // EVENTS

      document.addEventListener('mousedown', this.onDocumentMouseDown, false)
      document.addEventListener('touchstart', this.onDocumentTouchStart, false)
      document.addEventListener('touchmove', this.onDocumentTouchMove, false)
      document.addEventListener('keypress', this.onDocumentKeyPress, false)
      document.addEventListener('keydown', this.onDocumentKeyDown, false)

      document.getElementById('color').addEventListener(
        'click',
        () => {
          this.pointLight.color.setHSL(Math.random(), 1, 0.5)
          this.hex = this.decimalToHex(this.pointLight.color.getHex())

          this.updatePermalink() // 跳转
        },
        false
      )

      document.getElementById('font').addEventListener(
        'click',
        () => {
          this.fontIndex++

          this.fontName = this.reverseFontMap[
            this.fontIndex % this.reverseFontMap.length
          ]

          this.loadFont()
        },
        false
      )

      document.getElementById('weight').addEventListener(
        'click',
        () => {
          if (this.fontWeight === 'bold') {
            this.fontWeight = 'regular'
          } else {
            this.fontWeight = 'bold'
          }

          this.loadFont()
        },
        false
      )

      document.getElementById('bevel').addEventListener(
        'click',
        () => {
          this.bevelEnabled = !this.bevelEnabled

          this.refreshText()
        },
        false
      )

      //

      window.addEventListener('resize', this.onWindowResize, false)
    },

    decimalToHex(d) {
      const hex = Number(d).toString(16)
      this.hex = '000000'.substr(0, 6 - hex.length) + hex
      return this.hex.toUpperCase()
    },

    onWindowResize() {
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.width, this.height)
    },
    boolToNum(b) {
      return b ? 1 : 0
    },
    updatePermalink() {
      const link =
        this.hex +
        this.fontMap[this.fontName] +
        this.weightMap[this.fontWeight] +
        this.boolToNum(this.bevelEnabled) +
        '#' +
        encodeURI(this.text)
      console.log('updatePermalink link is ' + link)
      this.permalink.href = '#' + link
      // window.location.hash = link
    },
    onDocumentKeyDown(event) {
      if (this.firstLetter) {
        this.firstLetter = false
        this.text = ''
      }

      const keyCode = event.keyCode

      // backspace

      if (keyCode === 8) {
        event.preventDefault()

        this.text = this.text.substring(0, this.text.length - 1)
        this.refreshText()

        return false
      }
    },
    onDocumentKeyPress(event) {
      const keyCode = event.which

      // backspace

      if (keyCode === 8) {
        event.preventDefault()
      } else {
        const ch = String.fromCharCode(keyCode)
        this.text += ch

        this.refreshText()
      }
    },
    loadFont() {
      const loader = new THREE.FontLoader()
      console.log('this.fontName is ' + this.fontName)

      const url = 'static/threejs/examples/fonts/' + this.fontName + '_' + this.fontWeight + '.typeface.json'
      // loader.load('/examples/fonts/optimer_bold.typeface.json', response=> {

      loader.load(url, font => {
        this.font = font

        this.refreshText()
      })
    },
    createText() {
      this.textGeo = new THREE.TextGeometry(this.text, {
        font: this.font,

        size: this.size,
        height: this.fHeight,
        curveSegments: this.curveSegments,

        bevelThickness: this.bevelThickness,
        bevelSize: this.bevelSize,
        bevelEnabled: this.bevelEnabled,

        material: 0,
        extrudeMaterial: 1
      })

      this.textGeo.computeBoundingBox()
      this.textGeo.computeVertexNormals()

      // "fix" side normals by removing z-component of normals for side faces
      // (this doesn't work well for beveled geometry as then we lose nice curvature around z-axis)

      if (!this.bevelEnabled) {
        const triangleAreaHeuristics = 0.1 * (this.fHeight * this.size)

        for (let i = 0; i < this.textGeo.faces.length; i++) {
          const face = this.textGeo.faces[i]

          if (face.materialIndex === 1) {
            for (let j = 0; j < face.vertexNormals.length; j++) {
              face.vertexNormals[j].z = 0
              face.vertexNormals[j].normalize()
            }

            const va = this.textGeo.vertices[face.a]
            const vb = this.textGeo.vertices[face.b]
            const vc = this.textGeo.vertices[face.c]

            // let s = THREE.GeometryUtils.triangleArea( va, vb, vc );
            const s = GeometryUtils.triangleArea(va, vb, vc)
            if (s > triangleAreaHeuristics) {
              for (let j = 0; j < face.vertexNormals.length; j++) {
                face.vertexNormals[j].copy(face.normal)
              }
            }
          }
        }
      }

      const centerOffset =
        -0.5 *
        (this.textGeo.boundingBox.max.x - this.textGeo.boundingBox.min.x)

      this.textMesh1 = new THREE.Mesh(this.textGeo, this.materials)

      this.textMesh1.position.x = centerOffset
      this.textMesh1.position.y = this.hover
      this.textMesh1.position.z = 0

      this.textMesh1.rotation.x = 0
      this.textMesh1.rotation.y = Math.PI * 2

      this.group.add(this.textMesh1)

      if (this.mirror) {
        this.textMesh2 = new THREE.Mesh(this.textGeo, this.materials)

        this.textMesh2.position.x = centerOffset
        this.textMesh2.position.y = -this.hover
        this.textMesh2.position.z = this.fHeight

        this.textMesh2.rotation.x = Math.PI
        this.textMesh2.rotation.y = Math.PI * 2

        this.group.add(this.textMesh2)
      }
    },
    refreshText() {
      this.updatePermalink()

      this.group.remove(this.textMesh1)
      if (this.mirror) this.group.remove(this.textMesh2)

      if (!this.text) return

      this.createText()
    },
    onDocumentMouseDown(event) {
      event.preventDefault()

      document.addEventListener('mousemove', this.onDocumentMouseMove, false)
      document.addEventListener('mouseup', this.onDocumentMouseUp, false)
      document.addEventListener('mouseout', this.onDocumentMouseOut, false)

      this.mouseXOnMouseDown = event.clientX - this.halfX
      this.targetRotationOnMouseDown = this.targetRotation
    },
    onDocumentMouseMove(event) {
      this.mouseX = event.clientX - this.halfX

      this.targetRotation =
        this.targetRotationOnMouseDown +
        (this.mouseX - this.mouseXOnMouseDown) * 0.02
    },
    onDocumentMouseUp(event) {
      document.removeEventListener(
        'mousemove',
        this.onDocumentMouseMove,
        false
      )
      document.removeEventListener('mouseup', this.onDocumentMouseUp, false)
      document.removeEventListener('mouseout', this.onDocumentMouseOut, false)
    },
    onDocumentMouseOut(event) {
      document.removeEventListener(
        'mousemove',
        this.onDocumentMouseMove,
        false
      )
      document.removeEventListener('mouseup', this.onDocumentMouseUp, false)
      document.removeEventListener('mouseout', this.onDocumentMouseOut, false)
    },
    onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
        event.preventDefault()

        this.mouseXOnMouseDown = event.touches[0].pageX - this.halfX
        this.targetRotationOnMouseDown = this.targetRotation
      }
    },
    onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault()

        this.mouseX = event.touches[0].pageX - this.halfX
        this.targetRotation =
          this.targetRotationOnMouseDown +
          (this.mouseX - this.mouseXOnMouseDown) * 0.05
      }
    },
    animate() {
      requestAnimationFrame(this.animate)

      this.render()
      // stats.update();
    },
    render() {
      this.group.rotation.y +=
        (this.targetRotation - this.group.rotation.y) * 0.05

      this.camera.lookAt(this.cameraTarget)

      this.renderer.clear()
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
#geometrh-text {
  font-family: Monospace;
  background-color: #bbbbbb;
  color: #fff;
  margin: 0;
  overflow: hidden;
}
#info {
  /*position: absolute;*/
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
#info a,
.button {
  color: #f00;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
