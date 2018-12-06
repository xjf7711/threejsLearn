<template>
  <div id="cloth">
    <div id="info">Simple Cloth Simulation<br>
      Verlet integration with relaxed constraints<br>
      <a @click="wind = !wind">Wind</a> |
      <a @click="sphere.visible = !sphere.visible">Ball</a> |
      <a @click="togglePins">Pins</a>
    </div>
  </div>

</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import Detector from '@/assets/threejs/Detector'
// const Detector = require('@/assets/threejs/Detector')
import OrbitControls from 'threejs-orbit-controls'
// const OrbitControls = require('@/assets/threejs/js/controls/OrbitControls.js')
import {
  cloth,
  clothFunction,
  ballSize,
  MASS,
  tmpForce,
  TIMESTEP_SQ,
  satisfyConstraints,
  diff,
  // windForce,
  // simulate,
  ballPosition
} from '@/assets/threejs/js/Cloth.js'
export default {
  name: 'Cloth',
  data() {
    return {
      pinsFormation: [],
      pins: [6],

      gravity: null,
      wind: true,
      windForce: new THREE.Vector3(0, 0, 0),
      width: 700,
      height: 600,

      container: null,
      stats: null,

      camera: null,
      scene: null,
      renderer: null,

      clothGeometry: null,
      sphere: null,
      object: null,
      lastTime: null
    }
  },
  mounted() {
    if (!Detector.webgl) Detector.addGetWebGLMessage()

    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100

    /* testing cloth simulation */
    this.pinsFormation.push(this.pins)

    this.pins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.pinsFormation.push(this.pins)

    this.pins = [0]
    this.pinsFormation.push(this.pins)

    this.pins = [] // cut the rope ;)
    this.pinsFormation.push(this.pins)

    this.pins = [0, cloth.w] // classic 2 this.pins
    this.pinsFormation.push(this.pins)

    this.pins = this.pinsFormation[1]

    const GRAVITY = 981 * 1.4
    this.gravity = new THREE.Vector3(0, -GRAVITY, 0).multiplyScalar(MASS)
    // this.container = document.createElement('div')
    // document.getElementById('cloth').appendChild(this.container)

    this.initScene()
    this.initCamera()
    this.initLight()
    this.initRenderer()

    this.initCameraControls()
    this.initModels()
    // performance monitor

    this.initStats()

    window.addEventListener('resize', this.onWindowResize, false)

    this.sphere.visible = false

    this.animate()
  },
  methods: {
    initCamera() {
      // this.camera
      this.camera = new THREE.PerspectiveCamera(
        30,
        this.width / this.height,
        1,
        10000
      )
      this.camera.position.set(1000, 50, 1500)
    },
    initLight() {
      // lights
      this.scene.add(new THREE.AmbientLight(0x666666))

      const light = new THREE.DirectionalLight(0xdfebff, 1)
      light.position.set(50, 200, 100)
      light.position.multiplyScalar(1.3)

      light.castShadow = true

      light.shadow.mapSize.width = 1024
      light.shadow.mapSize.height = 1024
      const d = 300

      light.shadow.camera.left = -d
      light.shadow.camera.right = d
      light.shadow.camera.top = d
      light.shadow.camera.bottom = -d

      light.shadow.camera.far = 1000

      this.scene.add(light)
    },
    initScene() {
      // scene
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xcce0ff)
      this.scene.fog = new THREE.Fog(0xcce0ff, 500, 10000)
    },
    initRenderer() {
      // this.renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)
      // this.renderer.shadowMap.renderSingleSided = false;
      this.renderer.shadowSide = false

      this.$el.appendChild(this.renderer.domElement)

      this.renderer.gammaInput = true
      this.renderer.gammaOutput = true

      this.renderer.shadowMap.enabled = true
    },
    initCameraControls() {
      // controls
      const controls = new OrbitControls(this.camera, this.renderer.domElement)
      controls.maxPolarAngle = Math.PI * 0.5
      controls.minDistance = 500
      controls.maxDistance = 5000
    },
    initModels() {
      // cloth material
      const loader = new THREE.TextureLoader()
      const clothTexture = loader.load(
        'static/threejs/examples/textures/patterns/circuit_pattern.png'
      )
      clothTexture.anisotropy = 16

      const clothMaterial = new THREE.MeshLambertMaterial({
        map: clothTexture,
        side: THREE.DoubleSide,
        alphaTest: 0.5
      })

      // cloth geometry
      // console.log('cloth is ', cloth)
      this.clothGeometry = new THREE.ParametricGeometry(
        clothFunction,
        cloth.w,
        cloth.h
      )
      // this.clothGeometry = new THREE.ParametricGeometry( THREE.ParametricGeometries.klein, 25, 25 );
      // cloth mesh

      const object = new THREE.Mesh(this.clothGeometry, clothMaterial)
      object.position.set(0, 0, 0)
      object.castShadow = true
      this.scene.add(object)

      object.customDepthMaterial = new THREE.MeshDepthMaterial({
        depthPacking: THREE.RGBADepthPacking,
        map: clothTexture,
        alphaTest: 0.5
      })

      // this.sphere

      const ballGeo = new THREE.SphereBufferGeometry(ballSize, 32, 16)
      const ballMaterial = new THREE.MeshLambertMaterial()

      this.sphere = new THREE.Mesh(ballGeo, ballMaterial)
      this.sphere.castShadow = true
      this.sphere.receiveShadow = true
      this.scene.add(this.sphere)

      // ground
      const url = 'static/threejs/examples/textures/terrain/grasslight-big.jpg'
      const groundTexture = loader.load(url)
      groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping
      groundTexture.repeat.set(25, 25)
      groundTexture.anisotropy = 16

      const groundMaterial = new THREE.MeshLambertMaterial({
        map: groundTexture
      })

      const groundMesh = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(20000, 20000),
        groundMaterial
      )
      groundMesh.position.y = -250
      groundMesh.rotation.x = -Math.PI / 2
      groundMesh.receiveShadow = true
      this.scene.add(groundMesh)

      // poles

      const poleGeo = new THREE.BoxBufferGeometry(5, 375, 5)
      const poleMat = new THREE.MeshLambertMaterial()

      const poleMesh1 = new THREE.Mesh(poleGeo, poleMat)
      poleMesh1.position.x = -125
      poleMesh1.position.y = -62
      poleMesh1.receiveShadow = true
      poleMesh1.castShadow = true
      this.scene.add(poleMesh1)

      // const poleMesh2 = new THREE.Mesh(poleGeo, poleMat)
      const poleMesh2 = poleMesh1.clone()
      poleMesh2.position.x = 125
      poleMesh2.position.y = -62
      poleMesh2.receiveShadow = true
      poleMesh2.castShadow = true
      this.scene.add(poleMesh2)

      const boxMesh = new THREE.Mesh(new THREE.BoxBufferGeometry(255, 5, 5), poleMat)
      boxMesh.position.y = -250 + 750 / 2
      boxMesh.position.x = 0
      boxMesh.receiveShadow = true
      boxMesh.castShadow = true
      this.scene.add(boxMesh)

      const gg = new THREE.BoxBufferGeometry(10, 10, 10)
      const poleBox1 = new THREE.Mesh(gg, poleMat)
      poleBox1.position.y = -250
      poleBox1.position.x = 125
      poleBox1.receiveShadow = true
      poleBox1.castShadow = true
      this.scene.add(poleBox1)

      const poleBox2 = new THREE.Mesh(gg, poleMat)
      poleBox2.position.y = -250
      poleBox2.position.x = -125
      poleBox2.receiveShadow = true
      poleBox2.castShadow = true
      this.scene.add(poleBox2)
    },
    initStats() {
      this.stats = new Stats()
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '20px'
      this.stats.domElement.style.top = '82px'
      this.$el.appendChild(this.stats.domElement)
    },
    togglePins() {
      this.pins = this.pinsFormation[
        ~~(Math.random() * this.pinsFormation.length)
      ]
    },
    onWindowResize() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.width, this.height)
    },

    animate() {
      requestAnimationFrame(this.animate)

      const time = Date.now()

      const windStrength = Math.cos(time / 7000) * 20 + 40
      // ? windForce
      this.windForce.set(
        Math.sin(time / 2000),
        Math.cos(time / 3000),
        Math.sin(time / 1000)
      )
      this.windForce.normalize()
      this.windForce.multiplyScalar(windStrength)

      this.simulate(time) // , this.clothGeometry, this.sphere
      this.render()
      this.stats.update()
    },
    render() {
      const p = cloth.particles

      for (let i = 0, il = p.length; i < il; i++) {
        this.clothGeometry.vertices[i].copy(p[i].position)
      }

      this.clothGeometry.verticesNeedUpdate = true

      this.clothGeometry.computeFaceNormals()
      this.clothGeometry.computeVertexNormals()

      this.sphere.position.copy(ballPosition)

      this.renderer.render(this.scene, this.camera)
    },
    simulate(time) {
      if (!this.lastTime) {
        this.lastTime = time
        return
      }

      let i
      let il
      let particles
      let particle
      // let pt
      // let constraints
      let constraint
      let pos

      // Aerodynamics forces

      if (this.wind) {
        let face
        let normal
        const faces = this.clothGeometry.faces

        particles = cloth.particles

        for (i = 0, il = faces.length; i < il; i++) {
          face = faces[ i ]
          normal = face.normal

          tmpForce.copy(normal).normalize().multiplyScalar(normal.dot(this.windForce))
          particles[ face.a ].addForce(tmpForce)
          particles[ face.b ].addForce(tmpForce)
          particles[ face.c ].addForce(tmpForce)
        }
      }

      for (particles = cloth.particles, i = 0, il = particles.length; i < il; i++) {
        particle = particles[ i ]
        particle.addForce(this.gravity)

        particle.integrate(TIMESTEP_SQ)
      }

      // Start Constraints

      const constraints = cloth.constraints
      il = constraints.length

      for (i = 0; i < il; i++) {
        constraint = constraints[ i ]
        satisfyConstraints(constraint[ 0 ], constraint[ 1 ], constraint[ 2 ])
      }

      // Ball Constraints

      ballPosition.z = -Math.sin(Date.now() / 600) * 90 // + 40;
      ballPosition.x = Math.cos(Date.now() / 400) * 70

      if (this.sphere.visible) {
        for (particles = cloth.particles, i = 0, il = particles.length; i < il; i++) {
          particle = particles[ i ]
          pos = particle.position
          diff.subVectors(pos, ballPosition)
          if (diff.length() < ballSize) {
            // collided
            diff.normalize().multiplyScalar(ballSize)
            pos.copy(ballPosition).add(diff)
          }
        }
      }

      // Floor Constraints

      for (particles = cloth.particles, i = 0, il = particles.length; i < il; i++) {
        particle = particles[ i ]
        pos = particle.position
        if (pos.y < -250) {
          pos.y = -250
        }
      }

      // Pin Constraints

      for (i = 0, il = this.pins.length; i < il; i++) {
        const xy = this.pins[ i ]
        const p = particles[ xy ]
        p.position.copy(p.original)
        p.previous.copy(p.original)
      }
    }
  }
}
</script>

<style scoped>
#cloth {
  font-family: Monospace;
  background-color: #dddddd;
  color: #000;
  margin: 0;
  overflow: hidden;
  padding: 20px;
  width: 100%;
  height: 900px;
}

#info {
  /* position: absolute; */
  padding: 10px;
  width: 100%;
  text-align: center;
}

a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
