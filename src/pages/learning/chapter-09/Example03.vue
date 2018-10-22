<template>
  <div class="example">
    <h2>Example 09.03 - Animation tween </h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
// import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
// import stats from '@/pages/mixin/stats'
// import mouse from '@/pages/mixin/mouse'
// import windowResize from '@/pages/mixin/windowResize'
import PLYLoader from '@/assets/threejs/js/loaders/PLYLoader'
// const PLYLoader = require('three-ply-loader')
// PLYLoader(THREE)
// import { BaseLoaderScene } from './js/baseLoaderScene'
import threeMixin from '../../mixin/index'
export default {
  name: 'Example03',
  mixins: [threeMixin],
  data() {
    return {
      // scene: null,
      // camera: null,
      // camControls: null,
      // renderer: null,
      // loadedGeometry: null,
      // pointCloud: null
      mesh: null,
      posSrc: { pos: 1 }
    }
  },
  mounted() {
    // this.initStats()
    // this.initScene()
    // this.initCamera()
    // this.initRenderer()
    // this.initLight()
    // this.initModels()
    // // call the render function
    // this.animate()
  },
  methods: {
    // // once everything is loaded, we run our Three.js stuff.
    // initScene() {
    //   // create a scene, that will hold all our elements such as objects, cameras and lights.
    //   this.scene = new THREE.Scene()
    // },
    // initRenderer() {
    //   // create a render and set the size
    //   this.renderer = new THREE.WebGLRenderer()
    //   this.renderer.setClearColor(0x000, 1.0)
    //   this.renderer.setSize(this.width, this.height)
    //   this.renderer.shadowMap.enabled = true
    //
    //   // add the output of the renderer to the html element
    //   this.$el.appendChild(this.renderer.domElement)
    // },
    // initCamera() {
    //   // create a camera, which defines where we're looking at.
    //   this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
    //
    //   // position and point the camera to the center of the scene
    //   this.camera.position.x = 10
    //   this.camera.position.y = 10
    //   this.camera.position.z = 10
    //   this.camera.lookAt(new THREE.Vector3(0, -2, 0))
    // },
    // initLight() {
    //   // add subtle ambient lighting
    //   // const ambientLight = new THREE.AmbientLight(0xFFFFFF)
    //   // this.scene.add(ambientLight)
    //
    //   // add spotlight for the shadows
    //   const spotLight = new THREE.SpotLight(0xffffff)
    //   spotLight.position.set(20, 20, 20)
    //
    //   this.scene.add(spotLight)
    // },
    initHelper() {
      // 辅助工具
      const helper = new THREE.AxesHelper(50)
      this.scene.add(helper)
    },
    initModels() {
      var tween = new TWEEN.Tween(this.posSrc).to({ pos: 0 }, 2000)
      tween.easing(TWEEN.Easing.Bounce.InOut)

      var tweenBack = new TWEEN.Tween(this.posSrc).to({ pos: 1 }, 2000)
      tweenBack.easing(TWEEN.Easing.Bounce.InOut)

      tweenBack.chain(tween)
      tween.chain(tweenBack)

      tween.start()

      // var loaderScene = new BaseLoaderScene(this.camera, false, false, function(mesh) {
      //   TWEEN.update()
      //
      //   var positionArray = mesh.geometry.attributes['position']
      //   var origPosition = mesh.geometry.origPosition
      //
      //   for (let i = 0; i < positionArray.count; i++) {
      //     var oldPosX = origPosition.getX(i)
      //     var oldPosY = origPosition.getY(i)
      //     var oldPosZ = origPosition.getZ(i)
      //     positionArray.setX(i, oldPosX * posSrc.pos)
      //     positionArray.setY(i, oldPosY * posSrc.pos)
      //     positionArray.setZ(i, oldPosZ * posSrc.pos)
      //   }
      //   positionArray.needsUpdate = true
      // })

      var loader = new PLYLoader()
      loader.load('static/threejs/learning/assets/models/carcloud/carcloud.ply', (geometry) => {
        var material = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 1,
          opacity: 0.6,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          map: this.generateSprite()
        })

        // copy the original position, so we can referene that when tweening
        var origPosition = geometry.attributes['position'].clone()
        geometry.origPosition = origPosition

        var group = new THREE.Points(geometry, material)
        group.scale.set(2.5, 2.5, 2.5)
        this.mesh = group
        this.scene.add(group)
        // loaderScene.render(group, this.camera)
      })
    },
    render() {
      if (this.mesh) {
        TWEEN.update()

        var positionArray = this.mesh.geometry.attributes['position']
        var origPosition = this.mesh.geometry.origPosition

        for (let i = 0; i < positionArray.count; i++) {
          var oldPosX = origPosition.getX(i)
          var oldPosY = origPosition.getY(i)
          var oldPosZ = origPosition.getZ(i)
          positionArray.setX(i, oldPosX * this.posSrc.pos)
          positionArray.setY(i, oldPosY * this.posSrc.pos)
          positionArray.setZ(i, oldPosZ * this.posSrc.pos)
        }
        positionArray.needsUpdate = true
      }
    },
    // from THREE.js examples
    generateSprite() {
      const canvas = document.createElement('canvas')
      canvas.width = 16
      canvas.height = 16

      const context = canvas.getContext('2d')
      const gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2)
      gradient.addColorStop(0, 'rgba(255,255,255,1)')
      gradient.addColorStop(0.2, 'rgba(0,255,255,1)')
      gradient.addColorStop(0.4, 'rgba(0,0,64,1)')
      gradient.addColorStop(1, 'rgba(0,0,0,1)')

      context.fillStyle = gradient
      context.fillRect(0, 0, canvas.width, canvas.height)

      const texture = new THREE.Texture(canvas)
      texture.needsUpdate = true
      return texture
    }
    // animate() {
    //   this.stats.update()
    //   TWEEN.update()
    //   requestAnimationFrame(this.animate)
    //   this.renderer.render(this.scene, this.camera)
    // }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    width: 100%;
    height: 800px;
    background-color: #eeeeee;
  }
</style>
