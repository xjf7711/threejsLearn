<template>
  <div class="example">
    <h2>上甲板</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
// import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
// import OrbitControls from 'threejs-orbit-controls'
// import clearWebGLContext from '../mixin/clearWebGLContext'
// import animate from '../mixin/animate'
// import stats from '../mixin/stats'
// import windowResize from '../mixin/windowResize'
import mixin from '../mixin/index'
import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader'
export default {
  name: 'Jianjiaban',
  mixins: [mixin],
  data() {
    return {
      step: 0,
      rotation: 0
    }
  },
  mounted() {
  },
  methods: {
    setCamera() {
      this.camera.position.set(300, 400, 500)
    },
    // setLight() {
    //   this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    //   this.scene.add(this.directionalLight)
    // },
    setCameraControls() {
      this.cameraControls.minDistance = 10
      this.cameraControls.maxDistance = 1000
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(200)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(300, 20)
      this.scene.add(gridHelper)
    },
    initModels() {
      // this.objLoad()
      this.jsonLoad()
    },
    objLoad() {
      const mtlLoader = new MTLLoader()
      mtlLoader.setPath('static/threejs/models/warship/') // 路径

      mtlLoader.load(
        'jianjiaBan4.mtl',
        mtl => {
          mtl.preload() // 预加载
          console.log('mtl is ', mtl)
          const objLoader = new OBJLoader()
          objLoader.setMaterials(mtl) // 有问题
          objLoader.setPath('static/threejs/models/warship/')
          objLoader.load('jianjiaBan4.obj', object => {
            console.log('object is ', object)
            const mesh = object.children[0]
            // mesh.material.opacity = 0.9
            // mesh.material.transparent = true
            // mesh.material.depthTest = false
            mesh.material.side = THREE.DoubleSide

            // configure the wings
            // const wing2 = object.children[5]
            // const wing1 = object.children[4]
            //
            // wing1.material.opacity = 0.6
            // wing1.material.transparent = true
            // wing1.material.depthTest = false
            // wing1.material.side = THREE.DoubleSide
            //
            // wing2.material.opacity = 0.6
            // wing2.material.depthTest = false
            // wing2.material.transparent = true
            // wing2.material.side = THREE.DoubleSide

            // object.scale.set(2, 2, 2)
            object.position.set(20, 10, 8)
            this.mesh = object
            this.scene.add(object)
          })
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
    jsonLoad() {
      const loader = new THREE.JSONLoader()
      // const uri = 'static/threejs/models/dimianA.json'
      const uri = 'static/threejs/models/warship/shangJiaBan.json'
      // const uri = 'static/threejs/models/misc_chair01.json'
      console.log('uri is ' + uri)
      loader.load(uri, (geometry, mat) => {
        // console.log('loader.load onload geometry is ', geometry)
        // console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])

        // this.mesh.scale.x = 10
        // this.mesh.scale.y = 10
        // this.mesh.scale.z = 10

        // 如果json中没有纹理，则单独加载纹理。
        // const textureLoader = new THREE.TextureLoader()
        // const texture = textureLoader.load('static/threejs/models/warship/shangJiaBan_col.jpg')
        // this.mesh.material.map = texture
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
