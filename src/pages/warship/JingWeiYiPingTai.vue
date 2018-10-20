<template>
  <div class="example">
    <h2>经纬仪平台</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import FBXLoader from 'three-fbxloader-offical'
import threeMixin from '../mixin/index'
export default {
  name: 'JingWeiYPingTai',
  mixins: [threeMixin],
  data() {
    return {
      // directionalLight: null,
      // step: 0,
      // rotation: 0
    }
  },
  methods: {
    initModels() {
      // this.jsonLoad()
      this.fbxLoad()
    },
    jsonLoad() {
      const loader = new THREE.JSONLoader()
      // const uri = 'static/threejs/models/dimianA.json'
      const uri = 'static/threejs/models/warship/jingWeiYiPingTai.json'
      // const uri = 'static/threejs/models/misc_chair01.json'
      console.log('uri is ' + uri)

      loader.load(uri, (geometry, mat) => {
        // console.log('loader.load onload geometry is ', geometry)
        // console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])
        this.mesh.position.set(0, 1.8, 0)
        // this.mesh.scale.x = 10
        // this.mesh.scale.y = 10
        // this.mesh.scale.z = 10

        // 如果json中没有纹理，则单独加载纹理。
        // const textureLoader = new THREE.TextureLoader()
        // const texture = textureLoader.load('static/threejs/models/warship/jingWeiYiPingTai_col.jpg')
        // this.mesh.material.mapBump = texture
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
    fbxLoad() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/warship/jingWeiYiPingTai.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        // correctly position the scene
        result.children[0].position.set(0, 4, 0)
        result.children[0].rotation.x = 0
        result.children[0].scale.set(0.02, 0.02, 0.02)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result.children[0])
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
