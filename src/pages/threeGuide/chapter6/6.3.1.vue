<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
    <el-button id="dropBtn" type="success" @click="drop()">Drop</el-button>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example431',
  data() {
    return {
      msg: '例 4.3.1',
      width: 700,
      height: 500,

      render: null,
      scene: null,
      camera: null,
      mesh: null,
      id: null,

      ballMesh: null,
      ballRadius: 0.5,
      isMoving: false,
      maxHeight: 5,
      v: 0,
      a: -0.01
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // stat = new Stats();
      // stat.domElement.style.position = 'absolute';
      // stat.domElement.style.right = '0px';
      // stat.domElement.style.top = '0px';
      // document.body.appendChild(stat.domElement);

      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
      })
      this.scene = new THREE.Scene()

      this.camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
      this.camera.position.set(5, 10, 20)
      this.camera.lookAt(new THREE.Vector3(0, 3, 0))
      this.scene.add(this.camera)

      // ball
      this.ballMesh = new THREE.Mesh(
        new THREE.SphereGeometry(this.ballRadius, 16, 8),
        new THREE.MeshLambertMaterial({
          color: 0xffff00
        })
      )
      this.ballMesh.position.y = this.ballRadius
      this.scene.add(this.ballMesh)

      // plane
      const loader = new THREE.TextureLoader()
      loader.load(
        'static/threejs/guide/img/chess.png',
        texture => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping
          texture.repeat.set(4, 4)
          const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(5, 5),
            new THREE.MeshLambertMaterial({ map: texture })
          )
          plane.rotation.x = -Math.PI / 2
          this.scene.add(plane)
          this.renderer.render(this.scene, this.camera)
        },
        undefined,
        err => {
          console.log('an error happened', err)
        }
      )
      // // plane
      // const texture = THREE.ImageUtils.loadTexture(
      //   "/guide/img/chess.png",
      //   {},
      //   () => {
      //     this.renderer.render(this.scene, this.camera);
      //   }
      // );
      // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      // texture.repeat.set(4, 4);
      // const plane = new THREE.Mesh(
      //   new THREE.PlaneGeometry(5, 5),
      //   new THREE.MeshLambertMaterial({ map: texture })
      // );
      // plane.rotation.x = -Math.PI / 2;
      // this.scene.add(plane);

      const light = new THREE.DirectionalLight(0xffffff)
      light.position.set(10, 10, 15)
      this.scene.add(light)

      this.id = requestAnimationFrame(this.draw)
    },
    draw() {
      // stat.begin();

      if (this.isMoving) {
        this.ballMesh.position.y += this.v
        this.v += this.a

        if (this.ballMesh.position.y <= this.ballRadius) {
          // hit plane
          this.v = -this.v * 0.9
        }

        if (Math.abs(this.v) < 0.001) {
          // stop moving
          this.isMoving = false
          this.ballMesh.position.y = this.ballRadius
        }
      }

      this.renderer.render(this.scene, this.camera)

      this.id = requestAnimationFrame(this.draw)

      // stat.end();
    },
    stop() {
      if (this.id !== null) {
        cancelAnimationFrame(this.id)
        this.id = null
      }
    },
    drop() {
      this.isMoving = true
      this.ballMesh.position.y = this.maxHeight
      this.v = 0
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
