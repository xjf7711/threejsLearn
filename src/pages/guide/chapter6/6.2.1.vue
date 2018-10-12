<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
    <el-button id="stopBtn" type="danger" @click="stop()">Stop</el-button>
  </div>
</template>

<script>
import * as THREE from 'three'
// import * as Stats from 'static/threejs/guide/lib/stats.js'
export default {
  name: 'Example621',
  data() {
    return {
      msg: '例 6.2.1',
      width: 700,
      height: 500,

      render: null,
      scene: null,
      camera: null,
      mesh: null,
      id: null,
      stat: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // this.stat = new Stats();
      // this.stat.domElement.style.position = 'absolute';
      // this.stat.domElement.style.right = '0px';
      // this.stat.domElement.style.top = '0px';
      // document.body.appendChild(this.stat.domElement);

      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
      })
      this.renderer.setClearColor(0x000000)
      this.scene = new THREE.Scene()

      this.camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
      this.camera.position.set(5, 5, 20)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
      this.scene.add(this.camera)

      this.mesh = new THREE.Mesh(
        new THREE.CubeGeometry(1, 2, 3),
        new THREE.MeshLambertMaterial({
          color: 0xffff00
        })
      )
      this.scene.add(this.mesh)

      const light = new THREE.DirectionalLight(0xffffff)
      light.position.set(20, 10, 5)
      this.scene.add(light)

      this.id = setInterval(this.draw, 20)
    },
    draw() {
      // this.stat.begin();

      this.mesh.rotation.y = (this.mesh.rotation.y + 0.01) % (Math.PI * 2)
      this.renderer.render(this.scene, this.camera)

      // this.stat.end();
    },
    stop() {
      if (this.id !== null) {
        clearInterval(this.id)
        this.id = null
      }
    }
  }
}
</script>

<style scoped>
.example {
  background-color: #dddddd;
  width: 100%;
  height: 800px;
}
</style>
