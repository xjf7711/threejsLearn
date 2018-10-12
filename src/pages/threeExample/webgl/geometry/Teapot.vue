<template>
  <div id="teapot" :width="width" :height="height">
    <div id="info">
      <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - the Utah Teapot<br >
      from <a href="https://www.udacity.com/course/interactive-3d-graphics--cs291">Udacity Interactive 3D Graphics</a>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import OrbitControls from 'threejs-orbit-controls'
import Detector from '@/assets/threejs/Detector'

import TeapotBufferGeometry from '@/assets/threejs/js/geometries/TeapotBufferGeometry.js'

// import { dat } from '@/assets/three/libs/dat.gui.min.js'
import * as dat from 'dat.gui'
// 'js/libs/dat.gui.min.js'

// 'js/geometries/TeapotBufferGeometry.js'

export default {
  name: 'Teapot',
  data() {
    return {
      title: 'teapot',
      width: 700,
      height: 400,
      camera: null,
      scene: null,
      renderer: null,
      // cameraControls: null,
      effectController: null,
      teapotSize: 400,
      ambientLight: null,
      light: null,
      skybox: null,

      tess: -1, // force initialization
      bBottom: null,
      bLid: null,
      bBody: null,
      bFitLid: null,
      bNonBlinn: null,
      shading: null,
      wireMaterial: null,
      flatMaterial: null,
      gouraudMaterial: null,
      phongMaterial: null,
      texturedMaterial: null,
      reflectiveMaterial: null,

      teapot: undefined,
      textureCube: null,

      diffuseColor: null,
      specularColor: null
    }
  },
  mounted() {
    // allocate these just once
    this.diffuseColor = new THREE.Color()
    this.specularColor = new THREE.Color()

    if (!Detector.webgl) Detector.addGetWebGLMessage()
    console.log('Detector.webgl ' + Detector.webgl)

    this.init()
    this.render()
  },
  methods: {
    init() {
      const container = document.createElement('div')
      document.getElementById('teapot').appendChild(container)

      const canvasWidth = this.width
      const canvasHeight = this.height

      // CAMERA
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        1,
        80000
      )
      this.camera.position.set(-600, 550, 1300)

      // LIGHTS
      this.ambientLight = new THREE.AmbientLight(0x333333) // 0.2

      this.light = new THREE.DirectionalLight(0xffffff, 1.0)
      // direction is set in GUI

      // RENDERER
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(canvasWidth, canvasHeight)
      this.renderer.gammaInput = true
      this.renderer.gammaOutput = true
      container.appendChild(this.renderer.domElement)

      // EVENTS
      window.addEventListener('resize', this.onWindowResize, false)

      // CONTROLS
      const cameraControls = new OrbitControls(
        this.camera,
        this.renderer.domElement
      )
      cameraControls.addEventListener('change', this.render)

      // TEXTURE MAP
      const textureMap = new THREE.TextureLoader().load(
        'static/threejs/examples/textures/UV_Grid_Sm.jpg'
      )
      textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping
      textureMap.anisotropy = 16

      // REFLECTION MAP
      const path = 'static/threejs/examples/textures/cube/skybox/'
      const urls = [
        path + 'px.jpg',
        path + 'nx.jpg',
        path + 'py.jpg',
        path + 'ny.jpg',
        path + 'pz.jpg',
        path + 'nz.jpg'
      ]

      this.textureCube = new THREE.CubeTextureLoader().load(urls)

      // MATERIALS
      const materialColor = new THREE.Color()
      materialColor.setRGB(1.0, 1.0, 1.0)

      this.wireMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
      })

      this.flatMaterial = new THREE.MeshPhongMaterial({
        color: materialColor,
        specular: 0x000000,
        flatShading: true,
        side: THREE.DoubleSide
      })

      this.gouraudMaterial = new THREE.MeshLambertMaterial({
        color: materialColor,
        side: THREE.DoubleSide
      })

      this.phongMaterial = new THREE.MeshPhongMaterial({
        color: materialColor,
        side: THREE.DoubleSide
      })

      this.texturedMaterial = new THREE.MeshPhongMaterial({
        color: materialColor,
        map: textureMap,
        side: THREE.DoubleSide
      })

      this.reflectiveMaterial = new THREE.MeshPhongMaterial({
        color: materialColor,
        envMap: this.textureCube,
        side: THREE.DoubleSide
      })

      // scene itself
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xaaaaaa)

      this.scene.add(this.ambientLight)
      this.scene.add(this.light)

      // GUI
      this.setupGui()
    },

    // EVENT HANDLERS

    onWindowResize() {
      const canvasWidth = this.width
      const canvasHeight = this.height

      this.renderer.setSize(canvasWidth, canvasHeight)

      this.camera.aspect = canvasWidth / canvasHeight
      this.camera.updateProjectionMatrix()

      this.render()
    },
    setupGui() {
      this.effectController = {
        shininess: 40.0,
        ka: 0.17,
        kd: 0.51,
        ks: 0.2,
        metallic: true,

        hue: 0.121,
        saturation: 0.73,
        lightness: 0.66,

        lhue: 0.04,
        lsaturation: 0.01, // non-zero so that fractions will be shown
        llightness: 1.0,

        // bizarrely, if you initialize these with negative numbers, the sliders
        // will not show any decimal places.
        lx: 0.32,
        ly: 0.39,
        lz: 0.7,
        newTess: 15,
        bottom: true,
        lid: true,
        body: true,
        fitLid: false,
        nonblinn: false,
        newShading: 'glossy'
      }

      let h = null

      const gui = new dat.GUI()

      // material (attributes)

      h = gui.addFolder('Material control')

      h.add(this.effectController, 'shininess', 1.0, 400.0, 1.0)
        .name('shininess')
        .onChange(this.render)
      h.add(this.effectController, 'kd', 0.0, 1.0, 0.025)
        .name('diffuse strength')
        .onChange(this.render)
      h.add(this.effectController, 'ks', 0.0, 1.0, 0.025)
        .name('specular strength')
        .onChange(this.render)
      h.add(this.effectController, 'metallic').onChange(this.render)

      // material (color)

      h = gui.addFolder('Material color')

      h.add(this.effectController, 'hue', 0.0, 1.0, 0.025)
        .name('hue')
        .onChange(this.render)
      h.add(this.effectController, 'saturation', 0.0, 1.0, 0.025)
        .name('saturation')
        .onChange(this.render)
      h.add(this.effectController, 'lightness', 0.0, 1.0, 0.025)
        .name('lightness')
        .onChange(this.render)

      // light (point)

      h = gui.addFolder('Lighting')

      h.add(this.effectController, 'lhue', 0.0, 1.0, 0.025)
        .name('hue')
        .onChange(this.render)
      h.add(this.effectController, 'lsaturation', 0.0, 1.0, 0.025)
        .name('saturation')
        .onChange(this.render)
      h.add(this.effectController, 'llightness', 0.0, 1.0, 0.025)
        .name('lightness')
        .onChange(this.render)
      h.add(this.effectController, 'ka', 0.0, 1.0, 0.025)
        .name('ambient')
        .onChange(this.render)

      // light (directional)

      h = gui.addFolder('Light direction')

      h.add(this.effectController, 'lx', -1.0, 1.0, 0.025)
        .name('x')
        .onChange(this.render)
      h.add(this.effectController, 'ly', -1.0, 1.0, 0.025)
        .name('y')
        .onChange(this.render)
      h.add(this.effectController, 'lz', -1.0, 1.0, 0.025)
        .name('z')
        .onChange(this.render)

      h = gui.addFolder('Tessellation control')
      h.add(this.effectController, 'newTess', [
        2,
        3,
        4,
        5,
        6,
        8,
        10,
        15,
        20,
        30,
        40,
        50
      ])
        .name('Tessellation Level')
        .onChange(this.render)
      h.add(this.effectController, 'lid')
        .name('display lid')
        .onChange(this.render)
      h.add(this.effectController, 'body')
        .name('display body')
        .onChange(this.render)
      h.add(this.effectController, 'bottom')
        .name('display bottom')
        .onChange(this.render)
      h.add(this.effectController, 'fitLid')
        .name('snug lid')
        .onChange(this.render)
      h.add(this.effectController, 'nonblinn')
        .name('original scale')
        .onChange(this.render)

      // shading
      h = gui
        .add(this.effectController, 'newShading', [
          'wireframe',
          'flat',
          'smooth',
          'glossy',
          'textured',
          'reflective'
        ])
        .name('Shading')
        .onChange(this.render)
    },

    //

    render() {
      if (
        this.effectController.newTess !== this.tess ||
        this.effectController.bottom !== this.bBottom ||
        this.effectController.lid !== this.bLid ||
        this.effectController.body !== this.bBody ||
        this.effectController.fitLid !== this.bFitLid ||
        this.effectController.nonblinn !== this.bNonBlinn ||
        this.effectController.newShading !== this.shading
      ) {
        this.tess = this.effectController.newTess
        this.bBottom = this.effectController.bottom
        this.bLid = this.effectController.lid
        this.bBody = this.effectController.body
        this.bFitLid = this.effectController.fitLid
        this.bNonBlinn = this.effectController.nonblinn
        this.shading = this.effectController.newShading

        this.createNewTeapot()
      }

      // We're a bit lazy here. We could check to see if any material attributes changed and update
      // only if they have. But, these calls are cheap enough and this is just a demo.
      this.phongMaterial.shininess = this.effectController.shininess
      this.texturedMaterial.shininess = this.effectController.shininess

      this.diffuseColor.setHSL(
        this.effectController.hue,
        this.effectController.saturation,
        this.effectController.lightness
      )
      if (this.effectController.metallic) {
        // make colors match to give a more metallic look
        this.specularColor.copy(this.diffuseColor)
      } else {
        // more of a plastic look
        this.specularColor.setRGB(1, 1, 1)
      }

      this.diffuseColor.multiplyScalar(this.effectController.kd)
      this.flatMaterial.color.copy(this.diffuseColor)
      this.gouraudMaterial.color.copy(this.diffuseColor)
      this.phongMaterial.color.copy(this.diffuseColor)
      this.texturedMaterial.color.copy(this.diffuseColor)

      this.specularColor.multiplyScalar(this.effectController.ks)
      this.phongMaterial.specular.copy(this.specularColor)
      this.texturedMaterial.specular.copy(this.specularColor)

      // Ambient's actually controlled by the light for this demo
      this.ambientLight.color.setHSL(
        this.effectController.hue,
        this.effectController.saturation,
        this.effectController.lightness * this.effectController.ka
      )

      this.light.position.set(
        this.effectController.lx,
        this.effectController.ly,
        this.effectController.lz
      )
      this.light.color.setHSL(
        this.effectController.lhue,
        this.effectController.lsaturation,
        this.effectController.llightness
      )

      // skybox is rendered separately, so that it is always behind the teapot.
      if (this.shading === 'reflective') {
        this.scene.background = this.textureCube
      } else {
        this.scene.background = null
      }

      this.renderer.render(this.scene, this.camera)
    },

    // Whenever the teapot changes, the scene is rebuilt from scratch (not much to it).
    createNewTeapot() {
      if (this.teapot !== undefined) {
        this.teapot.geometry.dispose()
        this.scene.remove(this.teapot)
      }

      const teapotGeometry = new TeapotBufferGeometry(
        this.teapotSize,
        this.tess,
        this.effectController.bottom,
        this.effectController.lid,
        this.effectController.body,
        this.effectController.fitLid,
        !this.effectController.nonblinn
      )

      this.teapot = new THREE.Mesh(
        teapotGeometry,
        this.shading === 'wireframe'
          ? this.wireMaterial
          : this.shading === 'flat'
            ? this.flatMaterial
            : this.shading === 'smooth'
              ? this.gouraudMaterial
              : this.shading === 'glossy'
                ? this.phongMaterial
                : this.shading === 'textured'
                  ? this.texturedMaterial
                  : this.reflectiveMaterial
      ) // if no match, pick Phong

      this.scene.add(this.teapot)
    }
  }
}
</script>

<style scoped>
#teapot {
  color: #fff;
  font-family: Monospace;
  font-size: 13px;
  text-align: center;
  font-weight: bold;

  background-color: #000;
  margin: 0;
  overflow: hidden;
}

#info {
  position: absolute;
  padding: 10px;
  width: 100%;
  text-align: center;
  color: #fff;
}

a {
  color: blue;
}
</style>
