<template>
  <div class="example">
    <h2>舰甲板</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import mixin from '../mixin/index'
import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader'
export default {
  name: 'Jianjiaban',
  mixins: [mixin],
  data() {
    return {
      mesh: null
    }
  },
  methods: {
    initModels() {
      // this.jsonLoad()
      this.objLoad()
    },
    jsonLoad() {
      const loader = new THREE.JSONLoader()
      const uri = 'static/threejs/models/warship/jianjiaban.json'
      console.log('uri is ' + uri)
      loader.load(uri, (geometry, mat) => {
        // console.log('loader.load onload geometry is ', geometry)
        // console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])

        // this.mesh.scale.x = 10
        // this.mesh.scale.y = 10
        // this.mesh.scale.z = 10

        this.scene.add(this.mesh)
      }, res => {
        console.log('load onProgress res is ', res)
      }, error => {
        console.log('error is ', error)
      })
    },
    objLoad() {
      const mtlLoader = new MTLLoader()
      mtlLoader.setPath('static/threejs/models/warship/') // 路径
      mtlLoader.load(
        'jianjiaBan.mtl',
        mtl => {
          mtl.preload() // 预加载
          console.log('mtl is ', mtl)
          const objLoader = new OBJLoader()
          objLoader.setMaterials(mtl) // 有问题
          objLoader.setPath('static/threejs/models/warship/')
          objLoader.load('jianjiaBan.obj', object => {
            console.log('object is ', object)
            this.mesh = object.children[0]
            this.mesh.material.opacity = 0.9
            this.mesh.material.transparent = true
            this.mesh.material.depthTest = false
            // mesh.material.side = THREE.DoubleSide

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
            // object.position.set(20, 10, 8)
            // this.mesh = object.children[0]
            this.scene.add(this.mesh)
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
