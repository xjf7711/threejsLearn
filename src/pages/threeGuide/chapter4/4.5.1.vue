<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example451',
  data() {
    return {
      msg: '例 4.5.1',
      width: 700,
      height: 500
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
      })
      renderer.setClearColor(0x000000)
      const scene = new THREE.Scene()

      // camera
      const camera = new THREE.OrthographicCamera(-10, 10, 7.5, -7.5, 0.1, 100)
      camera.position.set(25, 25, 25)
      camera.lookAt(new THREE.Vector3(0, 0, 0))
      scene.add(camera)

      // light
      const light = new THREE.PointLight(0xffffff, 1, 1000)
      light.position.set(10, 15, 20)
      scene.add(light)

      // const texture = THREE.ImageUtils.loadTexture(
      //   'static/threejs/guide/img/0.png',
      //   {},
      //   function() {
      //     renderer.render(scene, camera)
      //   }
      // )

      // instantiate a loader
      const loader = new THREE.TextureLoader()

      // load a resource
      loader.load(
        // resource URL
        'static/threejs/guide/img/0.png',

        // onLoad callback
        function(texture) {
          const material = new THREE.MeshLambertMaterial({
            map: texture
          })

          const cube = new THREE.Mesh(new THREE.CubeGeometry(5, 5, 5), material)
          scene.add(cube)
          // const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 25, 15), material);
          // scene.add(sphere);

          renderer.render(scene, camera)
        },

        // onProgress callback currently not supported
        undefined,

        // onError callback
        function(err) {
          console.error('An error happened.', err)
        }
      )
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
