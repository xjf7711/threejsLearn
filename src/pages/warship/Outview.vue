<template>
  <div class="example">
    <h2>舰艇外观</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import Sky from '@/assets/threejs/js/objects/Sky.js'
import Water from '@/assets/threejs/js/objects/Water.js'
import mixin from '../mixin/index'
import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader'
import ColladaLoader from 'three-collada-loader'
import GLTFLoader from 'three-gltf-loader'
import FBXLoader from 'three-fbxloader-offical'
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
    this.updateSun()
  },
  methods: {
    setCamera() {
      this.camera.position.set(300, 400, 500)
    },
    setLight() {
      this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      this.scene.add(this.directionalLight)
      const hemiLight = new THREE.HemisphereLight(0xffffFF, 0x080820, 1)
      hemiLight.position.set(0, 500, 0)
      this.scene.add(hemiLight)
    },
    setCameraControls() {
      this.cameraControls.minDistance = 10
      this.cameraControls.maxDistance = 2000
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
      this.fbxLoad()
      // this.gltfLoad()
      // this.daeLoad()
      // this.objLoad()
      // this.jsonLoad()
      this.drawSky()
      this.drawOcean()
      // this.drawSphere()
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
    fbxLoad() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/warship/Outview.fbx'
      loader.load(uri, (result) => {
        // correctly position the scene
        result.scale.set(0.02, 0.02, 0.02)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result)
      })
    },
    gltfLoad() {
      const that = this
      // model
      const loader = new GLTFLoader()
      // console.log('loader is ', loader)
      const uri = 'static/threejs/models/warship/Outview.gltf'
      loader.load(uri, function(gltf) {
        console.log('gltf is ', gltf)
        gltf.scene.traverse(function(child) {
          console.log('child is ', child)
          if (child.isMesh) {
            console.log('child.material is ', child.material)
            child.material.envMap = that.envMap
          }
        })
        // gltf.scene.scale.set(0.0100, 0.0100, .0100)
        that.scene.add(gltf.scene.children[0])
        console.log('that.scene is ', that.scene)
        // that.renderer.render(that.scene, that.camera)
        // that.render()
      })
    },
    mtlObjLoad() {
      const mtlLoader = new MTLLoader()
      mtlLoader.setPath('static/threejs/models/') // 路径

      mtlLoader.load('butterfly.mtl', mtl => {
        mtl.preload() // 预加载
        console.log('mtl is ', mtl)
        const objLoader = new OBJLoader()
        objLoader.setMaterials(mtl)
        objLoader.setPath('static/threejs/models/')
        objLoader.load('butterfly.obj', object => {
          console.log('object is ', object)
          // configure the wings
          const wing2 = object.children[5]
          const wing1 = object.children[4]

          wing1.material.opacity = 0.6
          wing1.material.transparent = true
          wing1.material.depthTest = false
          wing1.material.side = THREE.DoubleSide

          wing2.material.opacity = 0.6
          wing2.material.depthTest = false
          wing2.material.transparent = true
          wing2.material.side = THREE.DoubleSide

          object.scale.set(140, 140, 140)
          this.mesh = object
          this.scene.add(this.mesh)

          object.rotation.x = 0.2
          object.rotation.y = -1.3
        })
      })
    },
    objLoad() {
      const loader = new OBJLoader()
      // const uri = 'static/threejs/models/juxing.obj'
      // const uri = 'static/threejs/models/warship/jianjiaBan.obj'
      const uri = 'static/threejs/models/warship/yatch/file.obj'
      // console.log('uri is ' + uri)
      // const baseUri = require('@/assets/threejs/models/')
      loader.load(uri, loadedMesh => {
        // const material = new THREE.MeshLambertMaterial({ color: 0x5C3A21 })
        // loadedMesh is a group of meshes. For
        // each mesh set the material, and compute the information
        // three.js needs for rendering.
        console.log('loadedMesh is ', loadedMesh)
        loadedMesh.children.forEach(function(child) {
          // child.material = material
          // child.geometry.computeFaceNormals()
          // child.geometry.computeVertexNormals()
          // 如果json中没有纹理，则单独加载纹理。
          const textureLoader = new THREE.TextureLoader()
          const texture = textureLoader.load('static/threejs/models/warship/yatch/Arch48_leather.jpg')
          child.material.map = texture
        })

        this.mesh = loadedMesh
        // loadedMesh.scale.set(200, 200, 200)
        // loadedMesh.rotation.x = -0.3
        // 如果json中没有纹理，则单独加载纹理。
        // const textureLoader = new THREE.TextureLoader()
        // const texture = textureLoader.load('static/threejs/models/warship/yatch/Arch48_leather.jpg')
        // this.mesh.material.map = texture
        this.scene.add(loadedMesh)
      })
    },
    daeLoad() {
      const loader = new ColladaLoader()
      // loader.setPath('static/threejs/models/dae/') // 路径 无效
      const uri = 'static/threejs/models/warship/dae/file.dae'
      // const uri = 'static/threejs/models/dimaianA.dae'
      // const uri = 'static/threejs/models/dae/zx503.dae'
      loader.load(uri, result => {
        console.log('daeLoad onload result is ', result)
        // this.mesh = result.scene.children[0].children[0].clone()
        this.mesh = result.scene.children[0].clone()
        // this.mesh = result.scene.children[4].clone()
        // this.mesh = result.scene.clone()
        // this.mesh.scale.set(4, 4, 4)
        // this.mesh.position.set(0, 0, 0)
        // this.mesh.rotation.x = 0
        // this.mesh.rotation.y = 0
        // this.mesh.rotation.z = 0
        this.scene.add(this.mesh)
      })
    },
    jsonLoad() {
      const loader = new THREE.JSONLoader()
      // const uri = 'static/threejs/models/warship/yatch/file.obj'
      const uri = 'static/threejs/models/warship/outview.json'
      // const uri = 'static/threejs/models/misc_chair01.json'
      console.log('uri is ' + uri)

      loader.load(uri, (geometry, mat) => {
        // console.log('loader.load onload geometry is ', geometry)
        // console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])

        // this.mesh.scale.x = 10
        // this.mesh.scale.y = 10
        // this.mesh.scale.z = 10

        this.scene.add(this.mesh)
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const percentComplete = xhr.loaded / xhr.total * 100
          console.log(Math.round(percentComplete, 2) + '% downloaded')
        }
      },
      error => {
        console.log('error is ', error)
      })
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
</script>

<style scoped>
  .example {
    padding: 20px;
    background-color: #eeeeee;
    width: 100%;
    height: 900px;
  }
</style>
