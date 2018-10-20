<template>
  <div class="example">
    <h2>Example 09.15 - animation from FBX </h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
import FBXLoader from 'three-fbxloader-offical'
import { addClipActionFolder } from './js/util'
export default {
  name: 'Example15',
  mixins: [threeMixin],
  data() {
    return {
      mixer: new THREE.AnimationMixer(),
      animationClip: null,
      clipAction: null,
      clock: new THREE.Clock(),
      controls: null,
      mixerControls: {
        time: 0,
        timeScale: 1,
        stopAllAction: () => {
          this.mixer.stopAllAction()
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    // once everything is loaded, we run our Three.js stuff.
    setScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
    },
    setRenderer() {
      this.renderer.setClearColor(new THREE.Color(0xdddddd, 1.0))
      this.renderer.sortObjects = false
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      // position and point the camera to the center of the scene
      this.camera.position.set(0, 10, 70)

      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    initLight() {
      this.scene.add(new THREE.AmbientLight(0x333333))
      // add spotlight for the shadows
      var spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-50, 70, 60)
      spotLight.intensity = 1
      this.scene.add(spotLight)
    },
    initHelper() {
      // 辅助工具
      const axesHelper = new THREE.AxesHelper(50)
      this.scene.add(axesHelper)
    },
    initModels() {
      this.fbxLoad()
    },
    setGui() {
      const mixerFolder = this.gui.addFolder('AnimationMixer')
      mixerFolder.add(this.mixerControls, 'time').listen()
      mixerFolder.add(this.mixerControls, 'timeScale', 0, 5).onChange((timeScale) => { this.mixer.timeScale = timeScale })
      mixerFolder.add(this.mixerControls, 'stopAllAction').listen()

      // this.controls = addClipActionFolder('ClipAction 1', this.gui, this.clipAction, this.animationClip)
    },
    fbxLoad() {
      const loader = new FBXLoader()
      loader.load('static/threejs/learning/assets/models/salsa/salsa.fbx', (result) => {
        // correctly position the scene
        result.scale.set(0.2, 0.2, 0.2)
        result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result)

        // setup the mixer
        this.mixer = new THREE.AnimationMixer(result)
        this.animationClip = result.animations[0]
        this.clipAction = this.mixer.clipAction(this.animationClip).play()
        this.animationClip = this.clipAction.getClip()

        // add the animation controls
        // enableControls();
        // this.initGui()
        this.controls = addClipActionFolder('ClipAction 1', this.gui, this.clipAction, this.animationClip)
      })
    },
    render() {
      // this.renderer && this.renderer.clear()
      const delta = this.clock.getDelta()
      // 更新控制器
      this.cameraControls && this.cameraControls.update(delta)
      if (this.mixer && this.clipAction && this.controls) {
        this.mixer.update(delta)
        this.controls.time = this.mixer.time
        this.controls.effectiveTimeScale = this.clipAction.getEffectiveTimeScale()
        this.controls.effectiveWeight = this.clipAction.getEffectiveWeight()
      }
    }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    width: 100%;
    height: 900px;
    background-color: #eeeeee;
  }
</style>
