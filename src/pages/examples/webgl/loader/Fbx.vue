<template>
  <div id="fbx">
    <h2>fbx加载</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
// import OrbitControls from "threejs-orbit-controls";
import FBXLoader from 'three-fbxloader-offical'
// import Stats from "stats.js";
import threeMixin from '../../../mixin/index'
// import stats from '../mixin/stats'
// import animate from '../mixin/animate'
export default {
  name: 'LoaderFBX',
  mixins: [threeMixin],
  data() {
    return {
      mixers: [],
      action: null,
      clock: new THREE.Clock()
    }
  },
  methods: {
    setScene() {
      // this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xa0a0a0)
      // this.scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);
    },
    setCamera() {
      // this.camera = new THREE.PerspectiveCamera(
      //   45,
      //   this.width / this.height,
      //   1,
      //   20000
      // );
      this.camera.position.set(100, 200, 300)
    },
    setCameraControls() {
      // const controls = new OrbitControls(this.camera);
      this.cameraControls.maxDistance = 8000
      this.cameraControls.target.set(0, 100, 0)
      this.cameraControls.update()
    },
    initLight() {
      console.log('initLight begins. ')
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444)
      hemiLight.position.set(0, 200, 0)
      this.scene.add(hemiLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff)
      directionalLight.position.set(0, 200, 100)
      directionalLight.castShadow = true
      directionalLight.shadow.camera.top = 180
      directionalLight.shadow.camera.bottom = -100
      directionalLight.shadow.camera.left = -120
      directionalLight.shadow.camera.right = 120
      this.scene.add(directionalLight)
    },
    initHelper() {
      const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000)
      grid.material.opacity = 0.2
      grid.material.transparent = true
      this.scene.add(grid)
    },
    initModels() {
      this.createGround()
      this.fbxLoad()
    },
    fbxLoad() {
      // model
      const loader = new FBXLoader()
      console.log('loader is ', loader)
      const uri = 'static/threejs/examples/models/fbx/Samba Dancing.fbx'
      // const uri = "models/warship/jianJiaBan.fbx";
      loader.load(uri, object => {
        console.log('load object is ', object)
        object.mixer = new THREE.AnimationMixer(object)
        this.mixers.push(object.mixer)
        this.action = object.mixer.clipAction(object.animations[0])
        this.action.play()
        object.traverse(function(child) {
          if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })
        this.scene.add(object)
      })
    },
    createGround() {
      console.log('initGround begins. ')
      const plane = new THREE.PlaneBufferGeometry(2000, 2000)
      const material = new THREE.MeshPhongMaterial({
        color: 0x999999,
        depthWrite: false
      })
      const mesh = new THREE.Mesh(plane, material)
      mesh.rotation.x = -Math.PI / 2
      mesh.receiveShadow = true
      this.scene.add(mesh)
    },
    render() {
      if (this.mixers.length > 0) {
        for (var i = 0; i < this.mixers.length; i++) {
          this.mixers[i].update(this.clock.getDelta())
        }
      }
    }
  }
}
</script>

<style scoped>
  #fbx {
    font-family: Monospace;
    background-color: #cccccc;
    color: #fff;
    margin: 0;
    overflow: hidden;
    height: 900px;
  }
  #info {
    color: #fff;
    /*position: absolute;*/
    top: 10px;
    width: 100%;
    text-align: center;
    z-index: 100;
    display: block;
  }
  #info a {
    color: #f00;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
