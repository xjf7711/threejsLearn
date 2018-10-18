import * as THREE from 'three'
import Sky from '@/assets/threejs/js/objects/Sky.js'
import Water from '@/assets/threejs/js/objects/Water.js'
import mixin from './index'
export default {
  name: 'Ocean',
  mixins: [mixin],
  data() {
    return {
      directionalLight: null,
      step: 0,
      rotation: 0,
      water: null,
      sky: null,
      cubeCamera: null,
      sphere: null,
      parameters: null
    }
  },
  created() {
    this.parameters = {
      distance: 400,
      inclination: 0.49,
      azimuth: 0.205
    }
    this.cubeCamera = new THREE.CubeCamera(1, 20000, 256)
    this.cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter
  },
  mounted() {
    // this.initCamera()
    // this.initRenderer()
    // this.initCameraControls()
    this.updateSun()
  },
  methods: {
    setLight() {
      this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      this.scene.add(this.directionalLight)
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(500)
      this.scene.add(axesHelper)
      // const gridHelper = new THREE.GridHelper(1000, 20)
      // this.scene.add(gridHelper)
    },
    setGui() {
      const skyFolder = this.gui.addFolder('Sky')
      skyFolder.add(this.parameters, 'inclination', 0, 0.5, 0.0001).onChange(this.updateSun)
      skyFolder.add(this.parameters, 'azimuth', 0, 1, 0.0001).onChange(this.updateSun)
      skyFolder.open()

      const uniforms = this.water.material.uniforms
      //
      const waterFolder = this.gui.addFolder('Water')
      waterFolder.add(uniforms.distortionScale, 'value', 0, 8, 0.1).name('distortionScale')
      waterFolder.add(uniforms.size, 'value', 0.1, 10, 0.1).name('size')
      waterFolder.add(uniforms.alpha, 'value', 0.9, 1, 0.001).name('alpha')
      waterFolder.open()
    },
    initModels() {
      this.drawSky()
      this.drawOcean()
      this.drawSphere()
    },
    render() {
      const time = performance.now() * 0.001
      // 异步加载，需做判断
      if (this.sphere) this.sphere.position.y = Math.sin(time) * 20 + 5
      if (this.sphere) this.sphere.rotation.x = time * 0.5
      if (this.sphere) this.sphere.rotation.z = time * 0.51

      this.water.material.uniforms.time.value += 1.0 / 60.0
      this.renderer && this.renderer.render(this.scene, this.camera)
    },
    drawSphere() {
      //
      const geometry = new THREE.IcosahedronBufferGeometry(20, 1)
      const count = geometry.attributes.position.count

      const colors = []
      const color = new THREE.Color()

      for (let i = 0; i < count; i += 3) {
        color.setHex(Math.random() * 0xffffff)

        colors.push(color.r, color.g, color.b)
        colors.push(color.r, color.g, color.b)
        colors.push(color.r, color.g, color.b)
      }

      geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

      const material = new THREE.MeshStandardMaterial({
        vertexColors: THREE.VertexColors,
        roughness: 0.0,
        flatShading: true,
        envMap: this.cubeCamera.renderTarget.texture,
        side: THREE.DoubleSide
      })

      this.sphere = new THREE.Mesh(geometry, material)
      this.scene.add(this.sphere)
    },
    drawSky() {
      // Skybox
      this.sky = new Sky()
      this.sky.scale.setScalar(10000)
      this.scene.add(this.sky)
    },
    drawOcean() {
      // Water
      const waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000)

      this.water = new Water(
        waterGeometry,
        {
          textureWidth: 512,
          textureHeight: 512,
          waterNormals: new THREE.TextureLoader().load('static/threejs/examples/textures/waternormals.jpg', function(texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping
          }),
          alpha: 1.0,
          sunDirection: this.directionalLight.position.clone().normalize(),
          sunColor: 0xffffff,
          waterColor: 0x001e0f,
          distortionScale: 3.7,
          fog: this.scene.fog !== undefined
        }
      )
      // this.water.position.y = 8
      this.water.rotation.x = -Math.PI / 2

      this.scene.add(this.water)
    },
    drawWater() {
      const waterGeometry = new THREE.PlaneBufferGeometry(20000, 20000)
      const params = {
        color: '#ffffff',
        scale: 4,
        flowX: 1,
        flowY: 1
      }
      const water = new Water(waterGeometry, {
        color: params.color,
        scale: params.scale,
        flowDirection: new THREE.Vector2(params.flowX, params.flowY),
        textureWidth: 1024,
        textureHeight: 1024
      })

      water.position.y = 8
      water.rotation.x = Math.PI * -0.5
      water.receiveShadow = true
      this.scene.add(water)
    },
    updateSun() {
      const theta = Math.PI * (this.parameters.inclination - 0.5)
      const phi = 2 * Math.PI * (this.parameters.azimuth - 0.5)

      this.directionalLight.position.x = this.parameters.distance * Math.cos(phi)
      this.directionalLight.position.y = this.parameters.distance * Math.sin(phi) * Math.sin(theta)
      this.directionalLight.position.z = this.parameters.distance * Math.sin(phi) * Math.cos(theta)

      this.sky.material.uniforms.sunPosition.value = this.directionalLight.position.copy(this.directionalLight.position)
      this.water.material.uniforms.sunDirection.value.copy(this.directionalLight.position).normalize()

      this.cubeCamera.update(this.renderer, this.scene)
    }
  }
}
